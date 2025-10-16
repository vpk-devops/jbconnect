import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  
} from "@ionic/react";
// import { useIonRouter } from "@ionic/react-router";
import { cameraOutline, imagesOutline, close, addSharp } from "ionicons/icons";
import CustomButton from "../../components/Common/CustomButton/CustomButton";

interface MediaItem {
  id: string;
  type: "image" | "video"; // Explicitly define the literal types
  uri: string;
  thumbnail?: string;
}

const PhotoSelctionPage: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem[]>([]);
  // const ionRouter=useIonRouter()
  const history = useHistory();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newMedia = Array.from(files).map((file) => {
      const uri = URL.createObjectURL(file);
      const mediaType: "image" | "video" = file.type.startsWith("video/") ? "video" : "image"; // Explicit cast
      return {
        id: `media-${Date.now()}-${file.name}`,
        type: mediaType, // Use the explicitly casted type
        uri,
        thumbnail: uri,
      };
    });

    setSelectedMedia((prev) => [...prev, ...newMedia]);
  };

  const removeMedia = (id: string) =>
    setSelectedMedia((prev) => prev.filter((item) => item.id !== id));

  // Function to simulate navigation to an editing screen
  const handleNext = () => {
    // For now, we'll just log the selected media and navigate to a placeholder
    console.log("Selected media for editing:", selectedMedia);
  // ionRouter.push('/video-editor', 'forward', 'push', { media: selectedMedia });
   history.push('/video-editor', { media: selectedMedia });
    // history.push("/video-editor", { media: selectedMedia }); // This would be your video editor route
    alert("Navigating to editing screen (placeholder)");

  };

  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
         <div className="fixed top-2 left-0 right-0 z-10 bg-white px-6 pb-3 border-b border-gray-100 flex items-center">
         <div>
          <IonIcon icon={addSharp} className="text-lg text-gray-600 mr-3 pt-3" />
          </div>
          <h1 className="text-lg font-semibold text-gray-800">Select Photos / Videos</h1>
        </div>
      </IonHeader>

      <IonContent className="top-14 bg-white mt-5">
        <div className="p-4 pb-20">
          {/* Grid with camera/gallery + selected images */}
          <div className="grid grid-cols-3 gap-3">
            {/* Camera input */}
            <div
              className="aspect-square bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
              onClick={() => cameraInputRef.current?.click()}
            >
              <IonIcon icon={cameraOutline} className="text-3xl text-gray-600" />
            </div>

           
            {/* Selected media */}
            {selectedMedia.map((item) => (
              <div
                key={item.id}
                className="aspect-square relative rounded-lg overflow-hidden"
              >
                <img
                  src={item.thumbnail || item.uri}
                  alt="media"
                  className="w-full h-full object-cover"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <IonIcon name="play" className="text-white text-2xl" /> {/* Use name for ionicons */}
                  </div>
                )}
                <button
                  onClick={() => removeMedia(item.id)}
                  className="absolute top-1 right-1 bg-[#274C77FF] text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  <IonIcon icon={close} className="text-sm" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Hidden Inputs */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*"
          onChange={handleFileSelect}
          className="hidden"
          multiple
        />
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*,video/*"
          capture="environment"
          onChange={handleFileSelect}
          className="hidden"
          multiple
        />

        {/* Next Button */}
        <div className="fixed bottom-4 inset-x-0 flex justify-center">
          <CustomButton
            text="Next"
            onClick={handleNext}
            className="px-6 h-10 rounded-full text-[#09273F] bg-[#A3CEF1] hover:bg-[#59A6E6] active:bg-[#2086D9]"
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PhotoSelctionPage;