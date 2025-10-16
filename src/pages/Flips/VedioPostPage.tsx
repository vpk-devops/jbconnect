import React, { useState, useRef, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { chevronBackOutline, locationOutline, playOutline, pauseOutline } from 'ionicons/icons';
import PageLayout from '../../components/Layout/Layout';
import Header from '../../components/Header/Header';
import CustomInputForm from '../../components/Common/CustomInputForm/CustomInputForm';

interface MediaItem {
  id: string;
  type: "image" | "video";
  uri: string;
  file?: File;
}

interface DraftData {
  mediaItems: MediaItem[];
  textOverlays: any[];
  videoFilters: any;
  selectedFilter: string;
  slideSettings: {
    duration: number;
    transition: string;
  };
  currentSlideIndex: number;
  totalDuration: number;
}

type LocationState = {
  media?: MediaItem[];
  editedMedia?: string;
  draftData?: DraftData;
};

const EnhancedVedioPostPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation<LocationState>();

  // State
  const [caption, setCaption] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [locationText, setLocationText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [previewMode, setPreviewMode] = useState<"slideshow" | "single">(
    "slideshow"
  );
  const [mediaItems, setMediaItems] = useState<MediaItem[]>(
    location.state?.draftData?.mediaItems ||
      location.state?.media ||
      []
  );

  const editedMedia = location.state?.editedMedia;
  const draftData = location.state?.draftData;

  // Slideshow preview
  useEffect(() => {
    if (isPlaying && mediaItems.length > 1 && previewMode === "slideshow") {
      const interval = setInterval(() => {
        setCurrentSlideIndex((prev) => (prev + 1) % mediaItems.length);
      }, draftData?.slideSettings?.duration || 3000);

      return () => clearInterval(interval);
    }
  }, [isPlaying, mediaItems.length, draftData?.slideSettings?.duration, previewMode]);

  // Cleanup URLs on unmount
  useEffect(() => {
    return () => {
      mediaItems.forEach((item) => URL.revokeObjectURL(item.uri));
    };
  }, [mediaItems]);

  const handleSaveDraft = () => {
    const draftPostData = {
      caption,
      hashtags,
      location: locationText,
      mediaItems,
      editedMedia,
      draftData,
      previewMode,
    };
    localStorage.setItem("videoPostDraft", JSON.stringify(draftPostData));
    console.log("Post draft saved:", draftPostData);
    history.goBack();
  };


  const handleHashtags = () => {
    const hashtagInput = prompt("Enter hashtags (separated by spaces):", hashtags);
    if (hashtagInput !== null) setHashtags(hashtagInput);
  };

  const handleLocation = () => {
    const locationInput = prompt("Enter location:", locationText);
    if (locationInput !== null) setLocationText(locationInput);
  };

  const togglePlayPause = () => setIsPlaying(!isPlaying);

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
    setIsPlaying(false);
  };
  // const uri = URL.createObjectURL(file);
const handlePost = async () => {
  try {
    const formData = new FormData();
    formData.append("title", caption || "Untitled Flip");
    formData.append("description", hashtags || "");
    formData.append("categoryName", "General");

    // Append files directly
    for (const item of mediaItems) {
      if (!item.file) {
        console.warn("Skipping media without file:", item);
        continue;
      }

      formData.append(
        item.type === "image" ? "images" : "video",
        item.file
      );
    }

    const res = await fetch("http://localhost:8080/api/content/flips/publish", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to publish flip: ${errorText}`);
    }

    const data = await res.json();
    console.log("Posted Flip:", data);

    // Map backend URLs for preview
    const serverBase = "http://localhost:8080";
    const updatedMedia: MediaItem[] = [];

    if (Array.isArray(data.flip.images)) {
      data.flip.images.forEach((imgPath: string, idx: number) => {
        updatedMedia.push({
          id: `${data.flip._id}-img-${idx}`,
          type: "image",
          uri: `${serverBase}${imgPath}`,
        });
      });
    }

    if (data.flip.video) {
      updatedMedia.push({
        id: `${data.flip._id}-video`,
        type: "video",
        uri: `${serverBase}${data.flip.video}`,
      });
    }

    setMediaItems(updatedMedia);
    alert("Slideshow posted successfully!");
    history.push("/home");
  } catch (err) {
    console.error(err);
    alert("Error posting slideshow");
  }
};


useEffect(() => {
  return () => {
    mediaItems.forEach((item) => {
      if (item.uri.startsWith("blob:")) {
        URL.revokeObjectURL(item.uri);
      }
    });
  };
}, []); // ✅ run only once on unmount

  if (!mediaItems.length) {
    return (
      <PageLayout>
        <div className="p-6">
          <button
            className="flex items-center text-[#274C77]"
            onClick={() => history.replace("/photo-selection")}
          >
            <IonIcon icon={chevronBackOutline} className="text-xl mr-1" /> Back
          </button>
          <p className="mt-4 text-gray-600">
            No media available. Please go back and select media.
          </p>
        </div>
      </PageLayout>
    );
  }

  const currentMedia = mediaItems[currentSlideIndex];
  const isMultipleMedia = mediaItems.length > 1;

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white">
          <Header title="Create Post" type="page" showRightIcon={false} />
        </div>
        
        <div className="px-4 pb-4 pb-20">
          {/* Media Preview */}
          <div className="w-full mb-4">
            <div className="relative w-full aspect-[5/3] rounded-lg overflow-hidden bg-gray-100">
              {/* Show edited media if available, otherwise show slideshow */}
              {editedMedia ? (
                <img 
                  src={editedMedia} 
                  alt="Edited slideshow" 
                  className="w-full h-full object-cover" 
                />
              ) : (
                <>
                  {/* Slideshow Display */}
                  {currentMedia && (
                    <>
                      {currentMedia.type === 'image' ? (
                        <img 
                          src={currentMedia.uri} 
                          alt={`Slide ${currentSlideIndex + 1}`}
                          className="w-full h-full object-cover" 
                        />
                      ) : (
                        <video
                          src={currentMedia.uri}
                          className="w-full h-full object-cover"
                          controls
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      )}
                    </>
                  )}
                  
                  {/* Slideshow Controls (if multiple media) */}
                  {isMultipleMedia && (
                    <>
                      {/* Play/Pause Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={togglePlayPause}
                          className="bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70 transition-opacity"
                        >
                          <IonIcon 
                            icon={isPlaying ? pauseOutline : playOutline} 
                            className="text-2xl"
                          />
                        </button>
                      </div>
                      
                      {/* Slide Indicator */}
                      <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                        {currentSlideIndex + 1} / {mediaItems.length}
                      </div>
                      
                      {/* Navigation Dots */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {mediaItems.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentSlideIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
            
            {/* Slideshow Info */}
            {isMultipleMedia && (
              <div className="mt-2 text-sm text-gray-600 text-center">
                {/* Slideshow with {mediaItems.length} images */}
                {/* {draftData?.slideSettings?.duration && (
                  <span> • {draftData.slideSettings.duration}s per slide</span>
                )} */}
              </div>
            )}
          </div>

          {/* Form Container */}
          <div className="flex justify-center   mb-6">
            <div className="w-[350px] bg-[#DEE1E6] rounded-md p-4 !mx-10">
              {/* Caption */}
              <div className="mb-4">
                <CustomInputForm
                  label=""
                  name="caption"
                  placeholder="Write a caption for your slideshow..."
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  textarea
                  rows={6}
                  className="w-full bg-white border border-gray-300 rounded"
                />
              </div>
              
              {/* Hashtag + Location Buttons */}
              <div className="flex gap-3 justify-center">
                <button
                  className="flex items-center justify-center gap-2 w-[162px] h-[35px] bg-[#6096BA] rounded-full cursor-pointer hover:bg-[#5186AA] transition-colors"
                  onClick={handleHashtags}
                >
                  <span className="text-lg text-white font-bold">#</span>
                  <span className="font-medium text-white">Hashtags</span>
                </button>
                <button
                  className="flex items-center justify-center gap-2 w-[162px] h-[35px] bg-[#6096BA] rounded-full cursor-pointer hover:bg-[#5186AA] transition-colors"
                  onClick={handleLocation}
                >
                  <IonIcon icon={locationOutline} className="text-lg text-white" />
                  <span className="font-medium text-white whitespace-nowrap">Add Location</span>
                </button>
              </div>
            </div>
          </div>

          {/* Display selected hashtags and location */}
          {(hashtags || locationText) && (
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              {hashtags && (
                <div className="mb-2">
                  <span className="text-sm text-gray-600">Hashtags: </span>
                  <span className="text-sm text-blue-600">{hashtags}</span>
                </div>
              )}
              {locationText && (
                <div>
                  <span className="text-sm text-gray-600">Location: </span>
                  <span className="text-sm text-blue-600">{locationText}</span>
                </div>
              )}
            </div>
          )}

          {/* Slideshow Preview Thumbnails */}
          {isMultipleMedia && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Slideshow Preview ({mediaItems.length} slides)
              </h4>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {mediaItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => goToSlide(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded border-2 transition-colors ${
                      index === currentSlideIndex 
                        ? 'border-blue-500' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <img
                      src={item.uri}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover rounded"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Buttons */}
        <div className="fixed bottom-0 left-0 right-0 z-10 bg-white border-t border-gray-100 px-4 pt-3 pb-4 w-full">
          <div className="max-w-xl mx-auto mt-4 flex justify-between items-center">
            <button
              onClick={handleSaveDraft}
              className="w-[91px] h-[28px] flex items-center justify-center text-white text-[11px] leading-[18px] font-normal bg-[#274C77] rounded select-none hover:bg-[#1e3a5f] transition-colors"
            >
              Save Draft
            </button>
            <button
              onClick={handlePost}
              className="w-[91px] h-[28px] flex items-center justify-center text-white text-[11px] leading-[18px] font-normal bg-[#274C77] rounded select-none hover:bg-[#1e3a5f] transition-colors"
              disabled={!caption.trim()}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default EnhancedVedioPostPage;