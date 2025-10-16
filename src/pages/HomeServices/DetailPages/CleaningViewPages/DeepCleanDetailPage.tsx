import Header from "../../../../components/Header/Header";
import PageLayout from "../../../../components/Layout/Layout";
import { useLocation, useParams } from "react-router-dom";
import { cleaningDetails } from "../../data";
import {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonIcon,
} from "@ionic/react";
import CustomButton from "../../../../components/Common/CustomButton/CustomButton";
import { useAddToCart } from "../../../../utils/ReusableHook";
import { slugify } from "../../../../utils/helpers";
import { useAppSelector } from '../../../../app/hooks';


// /home-services/:category/:subCategorySlug/:slug/detailpage
type RouteParams = {
    category: string;
    subCategorySlug: string;
    slug: string;
};

const DeepCleanDetailPage: React.FC = () => {
    const { category, subCategorySlug, slug } = useParams<RouteParams>();
    const { addItemToCart } = useAddToCart();

    const { services } = useAppSelector((state) => state.services);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const selectedTagName = searchParams.get("tag");

    //  Find service from Redux services list
    const service = services.find((s) => slugify(s.name) === slug)
    // Pick the correct tag object
    const selectedTag =
        service?.tags?.find((t) => t.name === selectedTagName) ||
        service?.tags?.[0] || null;
    const displayPrice = selectedTag?.price ?? service?.price ?? 0;
    
    const detail = cleaningDetails[slug];
    if (!detail) {
        return <IonPage><IonContent><p> not found.</p></IonContent></IonPage>
    }

    return (
        <PageLayout
            header={
                <Header
                    title={detail.header.title}
                    subtitle={detail.header.subtitle}
                    type="page"
                    variant="subtitle"
                    titleColor="text-custom-blue !font-archivo"
                    showRightIcon={false}
                />
            }
        >
            <IonContent className="p-4 bg-gray-50">
                <div className="flex justify-end mr-3">
                    <CustomButton
                        text="Add to cart"
                        icon="cartOutline"
                        className="text-xs text-custom-blue !bg-white border border-custom-blue !py-2 !w-28 !h-7 md:text-sm"
                        onClick={() => {
                            if (!service) {
                                console.warn("No matching service found for slug:", slug);
                                return;
                            }
                            const item = {
                                id: service._id,
                                title: service.name,
                                price: displayPrice,
                                // tag: service.tags,
                                tag: selectedTag?.name,
                                image: service.image,
                                quantity: 1,
                            };
                            addItemToCart(item);
                        }}
                    />
                </div>
                {/* cleaningData (top cards) */}
                <IonGrid className="!m-0 !p-0">
                    {detail.cleaningData.map((item: any) => (
                        <IonCard key={item.id} className="!m-0 !p-0 !my-2 shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] bg-white">
                            <IonRow className="p-2">
                                <IonCol size="4">
                                    <img src={item.image} alt={item.title} className="w-30 h-32 object-cover rounded-xl" />
                                </IonCol>
                                <IonCol size="8" className="pl-3 pt-4 font-inter">
                                    <h2 className="text-base font-semibold text-custom-blue leading-[22px] ">{item.title}</h2>
                                    <p className="text-xs md:text-base text-custom-black leading-[16px] pt-2">{item.description}</p>
                                </IonCol>
                            </IonRow>
                        </IonCard>
                    ))}
                </IonGrid>

                {/* requirements */}
                <IonCard className="!m-0 !p-2">
                    <h2 className="text-lg font-semibold text-custom-blue px-2 mb-2">Here&apos;s what we require from your end.</h2>
                    <div className="grid grid-cols-4 gap-6 mx-4">
                        {detail.requirements.map((item: any) => (
                            <div key={item.id} className="flex flex-col items-center">
                                <div className="p-4 h-20 bg-[#DEE1E666] rounded-sm shadow flex items-center justify-center">
                                    <IonIcon icon={item.icon} className="w-8 h-8 text-custom-blue" />
                                </div>
                                <h3 className="text-xs text-gray-700 mt-2 text-center">{item.label}</h3>
                            </div>
                        ))}
                    </div>
                </IonCard>

                {/* serviceData */}
                <h2 className="text-lg font-semibold text-custom-blue px-4 pt-4 mb-2">What’s covered in this service?</h2>
                {detail.serviceData.map((service: any, index: number) => (
                    <IonCard key={index} className="!m-0 p-2 shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] bg-white  !mb-2">
                        <IonRow>
                            <IonCol size="4">
                                <h3 className="text-[#6096BAFF] font-semibold text-base px-2 pb-4">{service.title}</h3>
                                <img src={service.image} alt={service.title} className="w-28 h-30 object-cover" />
                            </IonCol>
                            <IonCol size="8" className="flex flex-col items-center justify-center">
                                <ul className="list-disc list-outside pl-5 text-[11px] text-custom-black leading-[16px]">
                                    {service.points.map((point: string, i: number) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </IonCol>
                        </IonRow>
                    </IonCard>
                ))}
            </IonContent>
        </PageLayout>
    );
};


export default DeepCleanDetailPage;