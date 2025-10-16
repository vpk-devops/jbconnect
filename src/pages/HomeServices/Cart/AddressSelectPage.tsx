import React, { useCallback, useEffect, useState } from "react";
import mapImg from "/assets/images/map.png";
import { Geolocation } from "@capacitor/geolocation";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import {
    briefcaseOutline,
    compassOutline,
    homeOutline,
    locationOutline,
    personOutline,
    trashOutline,
} from "ionicons/icons";
import PageLayout from "../../../components/Layout/Layout";
import Header from "../../../components/Header/Header";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addAddress, setMainAddress, setSelectedAddresses } from "../../../features/home-services/cart/orderSlice";
import { IonIcon, useIonRouter } from "@ionic/react";
import CustomButton from '../../../components/Common/CustomButton/CustomButton';
import { Autocomplete } from "@react-google-maps/api";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router";
declare global {
    interface Window {
        mapInstance: google.maps.Map;
    }
}

const containerStyle = {
    width: "100%",
    height: "70vh",
};

const center = { lat: 12.9716, lng: 77.5946 }; // Default: Bangalore coords
const libraries: ("places")[] = ["places"];

const AddressSelectPage: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const mode = queryParams.get("mode") || "booking";
    const { addresses, selectedAddressId } = useAppSelector((state) => state.order);
    const [showLocationCard, setShowLocationCard] = useState(false);
    const [selectedRadioAddressId, setSelectedRadioAddressId] = useState<string | undefined>(selectedAddressId);
    const [mapCenter, setMapCenter] = useState(center);
    const selectedAddr = addresses.find(addr => addr.id === selectedRadioAddressId);
    console.log("se", selectedAddr)
    // dispatch(setSelectedAddress(selectedAddr.id));


    const [autocomplete, setAutocomplete] =
        useState<google.maps.places.Autocomplete | null>(null);
    const [selectedAddress, setSelectedAddress] = useState("");
    const [house, setHouse] = useState("");
    const [landmark, setLandmark] = useState("");
    const [tag, setTag] = useState<"Home" | "Work" | "Other">("Home");
    const ionRouter = useIonRouter();
    const dispatch = useAppDispatch();
    useEffect(() => {
        setSelectedRadioAddressId(selectedAddressId);
    }, [selectedAddressId]);
    // Just mock Google Maps loader, no API call
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyAnrhkyJDqCU9FlkxjXTXfn1VAhI9D48S4",
        libraries
    });

    const fetchAddress = async (lat: number, lng: number) => {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: { lat, lng } }, (results, status) => {
            if (status === "OK" && results && results[0]) {
                setSelectedAddress(results[0].formatted_address);
            } else {
                console.warn("Geocoder failed due to: ", status);
            }
        });
    };
    const handleDragEnd = useCallback(() => {
        if (!window.mapInstance) return;
        const pos = window.mapInstance.getCenter() as google.maps.LatLng;
        if (!pos) return;
        const lat = pos.lat();
        const lng = pos.lng();
        setMapCenter({ lat, lng });
        fetchAddress(lat, lng);
    }, []);

    const getCurrentLocation = async () => {
        try {

            const permResult = await Geolocation.requestPermissions();
            console.log("Permission result:", permResult);

            const pos = await Geolocation.getCurrentPosition();
            console.log("Current Position:", pos);

            const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
            setMapCenter(coords);

            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ location: coords }, (results, status) => {
                console.log("Geocoder results:", results, "status:", status);
                if (status === "OK" && results && results[0]) {
                    setSelectedAddress(results[0].formatted_address);
                    setShowLocationCard(true);
                } else {
                    console.warn("Geocoder failed:", status);
                }
            });
        } catch (err) {
            console.error("Error fetching location:", err);
        }
    };
    const newId = uuidv4();
    const addressData = {
        id: newId,
        // id: uuidv4(),
        text: selectedAddress,
        house,
        landmark,
        tag,
        coords: mapCenter,
    };

    const handleProceed = () => {
        console.log({
            address: selectedAddress,
            house,
            landmark,
            tag,
            coords: mapCenter,
        });
        alert("Address Saved:\n" + selectedAddress);
        dispatch(addAddress(addressData));
        if (mode === "main") {
            dispatch(setMainAddress(newId));   // 👈 updates permanent location
            ionRouter.push("/home-services/home", "back");
        } else {
            dispatch(setSelectedAddresses(newId)); // 👈 booking mode
            ionRouter.push("/home-services/select-datetime", "forward");
        }
        // ionRouter.push("/home-services/home", "forward", "push");
    };
    const handleAddNewAddress = () => {
        setHouse("");
        setLandmark("");
        setTag("Home");
        setSelectedAddress("");
        setShowLocationCard(true);
    };
    if (!isLoaded) return <p>Loading map...</p>;
    return (
        <PageLayout
            header={
                <Header title="Choose Location" type="page" showRightIcon={false} />
            }
        >
            <div className="relative w-full overflow-hidden">
                {/* Search Bar  */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Autocomplete
                        onLoad={(ac) => setAutocomplete(ac)}
                        onPlaceChanged={() => {
                            if (autocomplete) {
                                const place = autocomplete.getPlace();
                                if (place.geometry?.location) {
                                    const lat = place.geometry.location.lat();
                                    const lng = place.geometry.location.lng();
                                    setMapCenter({ lat, lng });

                                    const geocoder = new google.maps.Geocoder();
                                    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
                                        if (status === "OK" && results && results[0]) {
                                            setSelectedAddress(results[0].formatted_address);
                                            setShowLocationCard(true); // 👈 show card after selecting
                                        } else {
                                            console.warn("Geocoder failed:", status);
                                        }
                                    });
                                }
                            }
                        }}
                    >
                        <div className="relative">
                            <div className="absolute top-1/2 left-3 transform -translate-y-1/2 w-4 h-4">
                                <IonIcon
                                    icon={locationOutline}
                                    className="w-4 h-4 text-[#BDC1CA]"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Search your society or nearest landmark"
                                className="w-[90vw] max-w-[334px] h-[36px] pl-[34px] pr-3 font-inter text-[14px] leading-[22px] font-normal bg-white border border-[#274C77] rounded-[6px] outline-none focus:outline-none focus:border-[#274C77] hover:border-[#274C77] disabled:bg-white disabled:border-[#274C77] disabled:text-[#BDC1CA]"
                                style={{
                                    fontFamily: "Inter",
                                    fontSize: "14px",
                                    lineHeight: "22px",
                                    fontWeight: "400",
                                }}
                            />
                        </div>
                    </Autocomplete>
                </div>
                {/* ggogle map */}

                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={mapCenter}
                    zoom={16}
                    onLoad={(map) => {
                        window.mapInstance = map;
                    }}
                    onDragEnd={handleDragEnd}
                    options={{ streetViewControl: false, mapTypeControl: false }}
                >
                    {/* Fixed pin icon in center */}
                    <IonIcon
                        icon={locationOutline}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full text-blue-600 text-3xl"
                    />
                </GoogleMap>

                {/* Current Location Button */}
                <div className="absolute bottom-10 left-4 right-4 z-10">
                    <div className="flex justify-center">
                        <CustomButton
                            text="Use Current Location"
                            icon={compassOutline}
                            className="min-w-[187px] w-auto h-[36px] bg-[#6096BA] text-white rounded-md text-[14px] leading-[22px] font-normal flex items-center justify-center gap-[6px] px-3 hover:bg-[#45799C] active:bg-[#37617E] disabled:opacity-40 whitespace-nowrap shadow-lg"

                            onClick={getCurrentLocation}
                        />
                    </div>
                </div>

                {/* Location Card */}
                {showLocationCard && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20">
                        <div className="bg-white rounded-lg p-6 w-[90%] max-w-md mx-4 font-inter">
                            <div className="flex justify-end mb-4">
                                <button
                                    onClick={() => setShowLocationCard(false)}
                                    className="font-inter text-[11px] leading-[18px] font-medium text-[#0090FF]"
                                >
                                    Show Map
                                </button>
                            </div>

                            {/* Address */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-6 h-6 text-black">
                                    <IonIcon icon={homeOutline} className="w-6 h-6" />
                                </div>
                                <span className="text-[#171A1F] text-[14px] leading-[22px] font-medium">
                                    {selectedAddress} {/* ✅ dynamic */}
                                </span>
                            </div>

                            {/* Input Fields */}
                            <div className="space-y-4 mb-6">
                                {/* House */}
                                <div>
                                    <label className="block text-[11px] mb-2">
                                        House / Flat Block No.
                                    </label>
                                    <input
                                        type="text"
                                        value={house}
                                        onChange={(e) => setHouse(e.target.value)}
                                        placeholder="Enter your flat / house no."
                                        className="w-[306px] h-[22px] px-3 border-0 rounded-t-[6px] outline-none placeholder:text-[#9AA4B2]"
                                        style={{ boxShadow: "0 1px 0 #b2d2ff" }}
                                    />
                                </div>

                                {/* Landmark */}
                                <div>
                                    <label className="block text-[11px] mb-2">
                                        Landmark / Society name
                                    </label>
                                    <input
                                        type="text"
                                        value={landmark}
                                        onChange={(e) => setLandmark(e.target.value)}
                                        placeholder="Enter street address"
                                        className="w-[306px] h-[22px] px-3 border-0 rounded-t-[6px] outline-none placeholder:text-[#9AA4B2]"
                                        style={{ boxShadow: "0 1px 0 #b2d2ff" }}
                                    />
                                </div>
                            </div>

                            {/* Save As */}
                            <div className="mb-6">
                                <label className="block text-[11px] font-bold mb-3">
                                    Save as
                                </label>
                                <div className="flex gap-3">
                                    {["Home", "Work", "Other"].map((label) => (
                                        <button
                                            key={label}
                                            onClick={() => setTag(label as "Home" | "Work" | "Other")}
                                            className={`w-[86px] h-[36px] flex items-center justify-center gap-1 rounded-[6px] border ${tag === label
                                                ? "bg-[#6096BA] text-white border-[#6096BA]"
                                                : "bg-white text-[#6096BA] border-[#6096BA]"
                                                }`}
                                        >
                                            <IonIcon
                                                icon={
                                                    label === "Home"
                                                        ? homeOutline
                                                        : label === "Work"
                                                            ? briefcaseOutline
                                                            : personOutline
                                                }
                                                className="w-4 h-4"
                                            />
                                            <span>{label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Proceed */}
                            <div className="flex justify-center">
                                <CustomButton
                                    onClick={handleProceed}
                                    text="Proceed"
                                    className="w-[306px] h-[26px] font-bold text-[#002C4B] bg-[#E5F4FF]"
                                />
                            </div>
                        </div>
                    </div>
                )}


            </div>
            <div className=" bg-white p-4 rounded-t-lg shadow-lg">
                <div className="flex justify-between">
                    <h3 className="text-base font-semibold my-3">Saved Addresses</h3>
                    <CustomButton
                        text="
                    + Add Address"
                        // onClick={() => setShowLocationCard(true)} // reopen card to add new
                        onClick={handleAddNewAddress}
                        className="!mb-4 !mt-2 px-1 !h-8 bg-[#6096BA] text-white rounded-lg inline-block"
                    />

                </div>
                {addresses.length === 0 ? (
                    <p className="text-sm text-gray-500">No saved addresses. Please select or add one.</p>
                ) : (
                    <div className="space-y-3">
                        {addresses.map((addr) => (
                            <label
                                key={addr.id}
                                className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="address"
                                    checked={selectedRadioAddressId === addr.id}
                                    onChange={() => {
                                        setSelectedRadioAddressId(addr.id);
                                        dispatch(setSelectedAddresses(addr.id));
                                    }}
                                />
                                <div>
                                    <p className="font-medium">{addr.tag}</p>
                                    <p className="text-sm text-gray-600">
                                        {addr.house}, {addr.landmark}, {addr.text}
                                    </p>
                                     <button
                                            //   onClick={onRemove}
                                              className="grid place-items-center w-8 h-8 rounded-full bg-[#F3F4F6]"
                                            >
                                              <IonIcon icon={trashOutline} className="w-4 h-4 text-[#111827]" />
                                            </button>
                                </div>
                            </label>
                        ))}
                        {/* 
                        {selectedRadioAddressId && (
                            <div className="mt-4 flex justify-center">
                                <CustomButton
                                    text="Continue"
                                    className="w-60 bg-[#6096BA] text-white rounded-lg"
                                    onClick={() => {
                                        const addr = addresses.find(a => a.id === selectedRadioAddressId);
                                        if (!addr) return;

                                        dispatch(setSelectedAddresses(addr.id));
                                        ionRouter.push("/home-services/select-datetime", "forward", "push");
                                    }}
                                />
                            </div>
                        )} */}
                        {mode === "booking" && selectedRadioAddressId && (
                            <div className="mt-4 flex justify-center">
                                <CustomButton
                                    text="Continue"
                                    className="w-60 bg-[#6096BA] text-white rounded-lg"
                                    onClick={() => {
                                        const addr = addresses.find(a => a.id === selectedRadioAddressId);
                                        if (!addr) return;
                                        dispatch(setSelectedAddresses(addr.id));
                                        ionRouter.push("/home-services/select-datetime", "forward", "push");
                                    }}
                                />
                            </div>
                        )}

                    </div>
                )}


            </div>
        </PageLayout>
    );
};

export default AddressSelectPage;
