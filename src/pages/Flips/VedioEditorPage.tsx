import React, { useState, useRef, useEffect, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonIcon,
  IonRange,
  IonButton,
  IonInput,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import {
  chevronBackOutline,
  textOutline,
  colorPaletteOutline,
  filterOutline,
  playOutline,
  pauseOutline,
  downloadOutline,
  imagesOutline,
  timeOutline,
  musicalNotesOutline,
  shuffleOutline,
} from "ionicons/icons";
import CustomButton from '../../components/Common/CustomButton/CustomButton';

interface MediaItem {
  id: string;
  type: "image" | "video";
  uri: string;
  thumbnail?: string;
}

interface TextOverlay {
  id: string;
  text: string;
  x: number;
  y: number;
  fontSize: number;
  color: string;
  slideIndex: number;
  duration: number;
}

interface VideoFilter {
  brightness: number;
  contrast: number;
  saturation: number;
  hue: number;
  blur: number;
}

interface SlideSettings {
  duration: number; // seconds per slide
  transition: string;
  transitionDuration: number;
}

const MultiImageVideoEditor: React.FC = () => {
  const history = useHistory();
  const location = useLocation<{ media: MediaItem[] }>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const previewIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // State management
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
    const [isDraftSaved, setIsDraftSaved] = useState(false);
  const [isAutoSaving, setIsAutoSaving] = useState(false);
  

  // Editing states
  const [textOverlays, setTextOverlays] = useState<TextOverlay[]>([]);
  const [videoFilters, setVideoFilters] = useState<VideoFilter>({
    brightness: 1,
    contrast: 1,
    saturation: 1,
    hue: 0,
    blur: 0,
  });
  const [selectedFilter, setSelectedFilter] = useState<string>('none');
  const [slideSettings, setSlideSettings] = useState<SlideSettings>({
    duration: 3, // 3 seconds per slide
    transition: 'fade',
    transitionDuration: 0.5,
  });
  
  // Text editing
  const [newText, setNewText] = useState('');
  const [textColor, setTextColor] = useState('#ffffff');
  const [fontSize, setFontSize] = useState(24);

  // Initialize media
  useEffect(() => {
    const initializeEditor = async () => {
      try {
        if (location.state?.media) {
          const images = location.state.media.filter(item => item.type === 'image');
          const videos = location.state.media.filter(item => item.type === 'video');
          
          // Combine images and videos
          setMediaItems([...images, ...videos]);
          setTotalDuration(images.length * slideSettings.duration + videos.length * 10); // Assume 10s for videos
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to initialize editor:', error);
        setIsLoading(false);
      }
    };

    initializeEditor();
  }, [location.state, slideSettings.duration]);

  // Update total duration when settings change
  useEffect(() => {
    const imageCount = mediaItems.filter(item => item.type === 'image').length;
    const videoCount = mediaItems.filter(item => item.type === 'video').length;
    setTotalDuration(imageCount * slideSettings.duration + videoCount * 10);
  }, [mediaItems, slideSettings.duration]);

  // Real-time canvas rendering for slideshow
  const renderSlideshow = useCallback(() => {
    if (!canvasRef.current || mediaItems.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 640;
    canvas.height = 360;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply filters
    ctx.filter = `
      brightness(${videoFilters.brightness})
      contrast(${videoFilters.contrast})
      saturate(${videoFilters.saturation})
      hue-rotate(${videoFilters.hue}deg)
      blur(${videoFilters.blur}px)
    `;

    // Draw current slide
    const currentMedia = mediaItems[currentSlideIndex];
    if (currentMedia) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        // Calculate aspect ratio and fit image
        const aspectRatio = img.width / img.height;
        const canvasAspectRatio = canvas.width / canvas.height;
        
        let drawWidth, drawHeight, drawX, drawY;
        
        if (aspectRatio > canvasAspectRatio) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / aspectRatio;
          drawX = 0;
          drawY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * aspectRatio;
          drawHeight = canvas.height;
          drawX = (canvas.width - drawWidth) / 2;
          drawY = 0;
        }
        
        ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);

        // Reset filter for overlays
        ctx.filter = 'none';

        // Draw text overlays for current slide
        textOverlays
          .filter(overlay => overlay.slideIndex === currentSlideIndex)
          .forEach(overlay => {
            ctx.fillStyle = overlay.color;
            ctx.font = `${overlay.fontSize}px Arial`;
            ctx.textAlign = 'center';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
            ctx.strokeText(overlay.text, overlay.x, overlay.y);
            ctx.fillText(overlay.text, overlay.x, overlay.y);
          });

        // Apply preset filters
        if (selectedFilter !== 'none') {
          applyPresetFilter(ctx, canvas.width, canvas.height);
        }

        // Add slide indicator
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(10, 10, 80, 25);
        ctx.fillStyle = 'white';
        ctx.font = '12px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`${currentSlideIndex + 1} / ${mediaItems.length}`, 15, 27);
      };
      img.src = currentMedia.uri;
    }
  }, [currentSlideIndex, mediaItems, videoFilters, textOverlays, selectedFilter]);

  const applyPresetFilter = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    switch (selectedFilter) {
      case 'grayscale':
        for (let i = 0; i < data.length; i += 4) {
          const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
          data[i] = data[i + 1] = data[i + 2] = gray;
        }
        break;
      case 'sepia':
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          data[i] = Math.min(255, (r * 0.393) + (g * 0.769) + (b * 0.189));
          data[i + 1] = Math.min(255, (r * 0.349) + (g * 0.686) + (b * 0.168));
          data[i + 2] = Math.min(255, (r * 0.272) + (g * 0.534) + (b * 0.131));
        }
        break;
      case 'vintage':
        for (let i = 0; i < data.length; i += 4) {
          data[i] = Math.min(255, data[i] * 1.2);
          data[i + 1] = Math.min(255, data[i + 1] * 0.9);
          data[i + 2] = Math.min(255, data[i + 2] * 0.7);
        }
        break;
    }

    ctx.putImageData(imageData, 0, 0);
  };

  // Slideshow control handlers
  const handlePlayPause = () => {
    if (isPlaying) {
      if (previewIntervalRef.current) {
        clearInterval(previewIntervalRef.current);
        previewIntervalRef.current = null;
      }
    } else {
      previewIntervalRef.current = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 0.1;
          const slideTime = newTime % slideSettings.duration;
          const slideIndex = Math.floor(newTime / slideSettings.duration) % mediaItems.length;
          
          if (slideIndex !== currentSlideIndex) {
            setCurrentSlideIndex(slideIndex);
          }
          
          return newTime > totalDuration ? 0 : newTime;
        });
      }, 100);
    }
    setIsPlaying(!isPlaying);
  };

  // Re-render when slide changes
  useEffect(() => {
    renderSlideshow();
  }, [renderSlideshow]);

  // Text overlay handlers
  const addTextOverlay = () => {
    if (!newText.trim()) return;

    const overlay: TextOverlay = {
      id: Date.now().toString(),
      text: newText,
      x: canvasRef.current?.width ? canvasRef.current.width / 2 : 320,
      y: canvasRef.current?.height ? canvasRef.current.height / 2 : 180,
      fontSize,
      color: textColor,
      slideIndex: currentSlideIndex,
      duration: slideSettings.duration,
    };

    setTextOverlays(prev => [...prev, overlay]);
    setNewText('');
  };
// Auto-save draft functionality
  const saveDraft = useCallback(async () => {
    setIsAutoSaving(true);
    try {
      const draftData = {
        id: `draft_${Date.now()}`,
        timestamp: new Date().toISOString(),
        mediaItems,
        textOverlays,
        videoFilters,
        selectedFilter,
        slideSettings,
        currentSlideIndex,
        totalDuration,
      };

      // Save to localStorage (in real app, you'd save to backend)
      const existingDrafts = JSON.parse(localStorage.getItem('slideshow_drafts') || '[]');
      const draftIndex = existingDrafts.findIndex((draft: any) => draft.id === draftData.id);
      
      if (draftIndex >= 0) {
        existingDrafts[draftIndex] = draftData;
      } else {
        existingDrafts.push(draftData);
      }
      
      localStorage.setItem('slideshow_drafts', JSON.stringify(existingDrafts));
      localStorage.setItem('current_slideshow_draft', JSON.stringify(draftData));
      
      setIsDraftSaved(true);
      setTimeout(() => setIsDraftSaved(false), 2000); // Show saved status for 2 seconds
      
      console.log('Draft saved successfully:', draftData);
    } catch (error) {
      console.error('Failed to save draft:', error);
    } finally {
      setIsAutoSaving(false);
    }
  }, [mediaItems, textOverlays, videoFilters, selectedFilter, slideSettings, currentSlideIndex, totalDuration]);

  // Auto-save when important changes occur
  useEffect(() => {
    if (mediaItems.length > 0) {
      const autoSaveTimer = setTimeout(() => {
        saveDraft();
      }, 2000); // Auto-save after 2 seconds of inactivity

      return () => clearTimeout(autoSaveTimer);
    }
  }, [textOverlays, videoFilters, selectedFilter, slideSettings, saveDraft]);

  // Manual save draft
  const handleSaveDraft = () => {
    saveDraft();
  };

  // Handle next navigation
  const handleNext = () => {
    // Save current state before navigation
    saveDraft();
    
    // Navigate to next page (you can customize this route)
    history.push('/vedio-post', { 
      draftData: {
        mediaItems,
        textOverlays,
        videoFilters,
        selectedFilter,
        slideSettings,
        currentSlideIndex,
        totalDuration,
      }
    });
  };

  // Filter adjustment handlers
  const handleFilterChange = (filterType: keyof VideoFilter, value: number) => {
    setVideoFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  // Navigate slides manually
  const goToSlide = (index: number) => {
    setCurrentSlideIndex(Math.max(0, Math.min(index, mediaItems.length - 1)));
    setCurrentTime(index * slideSettings.duration);
  };

  // Export slideshow as images sequence (for now)
  const exportVideo = async () => {
    if (!canvasRef.current || mediaItems.length === 0) return;

    try {
      // For each slide, capture and download
      for (let i = 0; i < mediaItems.length; i++) {
        setCurrentSlideIndex(i);
        
        // Wait for render
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const canvas = canvasRef.current;
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `slide-${i + 1}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          }
        }, 'image/png');
      }
      
      alert(`Exported ${mediaItems.length} slides as images!`);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    }
  };

  if (isLoading) {
    return (
      <IonPage>
        <IonContent className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#274C77FF] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading slideshow editor...</p>
          </div>
        </IonContent>
      </IonPage>
    );
  }

  if (mediaItems.length === 0) {
    return (
      <IonPage>
        <IonContent className="flex items-center justify-center h-full">
          <div className="text-center">
            <p className="text-gray-600 mb-4">No media selected for slideshow</p>
            <CustomButton
              text="Go Back"
              onClick={() => history.goBack()}
              className="px-6 h-10 rounded-full text-[#09273F] bg-[#A3CEF1]"
            />
          </div>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <div className="fixed top-0 left-0 right-0 z-10 bg-white px-4 py-3 border-b border-gray-100 flex items-center justify-between">
          <IonIcon
            icon={chevronBackOutline}
            className="text-2xl text-gray-800 cursor-pointer"
            onClick={() => history.goBack()}
          />
        
          
        </div>
      </IonHeader>

      <IonContent className="bg-black pt-16">
        {/* Video Preview Area */}
        <div className="relative h-80 bg-white">
          {/* Canvas for slideshow */}
          <canvas
            ref={canvasRef}
            className="w-full object-cover  bg-white "
            style={{ height: '500px' }}
            onClick={(e) => {
              if (selectedTool === 'text' && newText.trim()) {
                const rect = canvasRef.current?.getBoundingClientRect();
                if (rect) {
                  const x = ((e.clientX - rect.left) / rect.width) * (canvasRef.current?.width || 640);
                  const y = ((e.clientY - rect.top) / rect.height) * (canvasRef.current?.height || 360);
                  
                  const overlay: TextOverlay = {
                    id: Date.now().toString(),
                    text: newText,
                    x,
                    y,
                    fontSize,
                    color: textColor,
                    slideIndex: currentSlideIndex,
                    duration: slideSettings.duration,
                  };

                  setTextOverlays(prev => [...prev, overlay]);
                  setNewText('');
                }
              }
            }}
          />

          {/* Play/Pause Button */}
          <div className="absolute top-36 inset-0 flex items-center justify-center">
            <IonButton
              fill="clear"
              className="text-white text-4xl"
              onClick={handlePlayPause}
            >
              <IonIcon icon={isPlaying ? pauseOutline : playOutline} />
            </IonButton>
          </div>

          {/* Slide Navigation */}
          <div className="absolute -bottom-40 pb-6 left-4 right-4 flex justify-center space-x-2">
            <button
              onClick={() => goToSlide(currentSlideIndex - 1)}
              className="bg-white bg-opacity-20 text-white px-3 py-1 rounded"
              disabled={currentSlideIndex === 0}
            >
              ‹
            </button>
            <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded text-sm">
              {currentSlideIndex + 1} / {mediaItems.length}
            </span>
            <button
              onClick={() => goToSlide(currentSlideIndex + 1)}
              className="bg-white bg-opacity-20 text-white px-3 py-1 rounded"
              disabled={currentSlideIndex === mediaItems.length - 1}
            >
              ›
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white px-4 py-3 mt-40">
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-600 min-w-12">
              {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}
            </span>
            <IonRange
              value={currentTime}
              max={totalDuration}
              onIonInput={(e) => {
                const time = e.detail.value as number;
                setCurrentTime(time);
                const slideIndex = Math.floor(time / slideSettings.duration) % mediaItems.length;
                setCurrentSlideIndex(slideIndex);
              }}
              className="flex-1"
            />
            <span className="text-sm text-gray-600 min-w-12">
              {Math.floor(totalDuration / 60)}:{Math.floor(totalDuration % 60).toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Editing Tools */}
        <div className="bg-white px-4 pb-4">
          <div className="grid grid-cols-5 gap-3 mb-4">
            <button
              className={`p-3 rounded-lg flex items-center justify-center transition-colors ${
                selectedTool === 'text' 
                  ? 'bg-[#59A6E6] text-white' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-600'
              }`}
              onClick={() => setSelectedTool(selectedTool === 'text' ? null : 'text')}
            >
              <IonIcon icon={textOutline} className="text-xl" />
            </button>
            
            <button
              className={`p-3 rounded-lg flex items-center justify-center transition-colors ${
                selectedTool === 'color' 
                  ? 'bg-[#59A6E6] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedTool(selectedTool === 'color' ? null : 'color')}
            >
              <IonIcon icon={colorPaletteOutline} className="text-xl" />
            </button>
            
            <button
              className={`p-3 rounded-lg flex items-center justify-center transition-colors ${
                selectedTool === 'filter' 
                  ? 'bg-[#59A6E6] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedTool(selectedTool === 'filter' ? null : 'filter')}
            >
              <IonIcon icon={filterOutline} className="text-xl" />
            </button>
            
            <button
              className={`p-3 rounded-lg flex items-center justify-center transition-colors ${
                selectedTool === 'slides' 
                  ? 'bg-[#59A6E6] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedTool(selectedTool === 'slides' ? null : 'slides')}
            >
              <IonIcon icon={imagesOutline} className="text-xl" />
            </button>
                   <button
              className={`p-3 rounded-lg flex items-center justify-center transition-colors ${
                selectedTool === 'slides' 
                  ? 'bg-[#59A6E6] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedTool(selectedTool === 'slides' ? null : 'slides')}
            >
                  <IonIcon
            icon={downloadOutline}
            className="text-2xl text-blue-600 cursor-pointer"
            onClick={exportVideo}
          />
            </button>
       
          </div>

          {/* Tool Options */}
          {selectedTool === 'text' && (
            <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
              <IonInput
                value={newText}
                placeholder="Enter text for current slide..."
                onIonInput={e => setNewText(e.detail.value!)}
                className="bg-white"
              />
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={textColor}
                  onChange={e => setTextColor(e.target.value)}
                  className="w-12 h-10 rounded border"
                />
                <div className="flex-1 ">
                  <IonLabel>Size: {fontSize}px</IonLabel>
                  <IonRange
                    min={12}
                    max={48}
                    value={fontSize}
                    onIonInput={e => setFontSize(e.detail.value as number)}
                  />
                </div>
              </div>
              <div className="text-sm text-gray-600">
                Texts on slide {currentSlideIndex + 1}: {textOverlays.filter(t => t.slideIndex === currentSlideIndex).length}
              </div>
            </div>
          )}

          {selectedTool === 'color' && (
            <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
              <div>
                <IonLabel>Brightness: {videoFilters.brightness.toFixed(2)}</IonLabel>
                <IonRange
                  min={0}
                  max={2}
                  step={0.1}
                  value={videoFilters.brightness}
                  onIonInput={e => handleFilterChange('brightness', e.detail.value as number)}
                />
              </div>
              <div>
                <IonLabel>Contrast: {videoFilters.contrast.toFixed(2)}</IonLabel>
                <IonRange
                  min={0}
                  max={2}
                  step={0.1}
                  value={videoFilters.contrast}
                  onIonInput={e => handleFilterChange('contrast', e.detail.value as number)}
                />
              </div>
              <div>
                <IonLabel>Saturation: {videoFilters.saturation.toFixed(2)}</IonLabel>
                <IonRange
                  min={0}
                  max={2}
                  step={0.1}
                  value={videoFilters.saturation}
                  onIonInput={e => handleFilterChange('saturation', e.detail.value as number)}
                />
              </div>
            </div>
          )}

          {selectedTool === 'filter' && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-2">
                <IonButton
                  fill={selectedFilter === 'none' ? 'solid' : 'outline'}
                  size="small"
                  onClick={() => setSelectedFilter('none')}
                >
                  None
                </IonButton>
                <IonButton
                  fill={selectedFilter === 'grayscale' ? 'solid' : 'outline'}
                  size="small"
                  onClick={() => setSelectedFilter('grayscale')}
                >
                  B&W
                </IonButton>
                <IonButton
                  fill={selectedFilter === 'sepia' ? 'solid' : 'outline'}
                  size="small"
                  onClick={() => setSelectedFilter('sepia')}
                >
                  Sepia
                </IonButton>
                <IonButton
                  fill={selectedFilter === 'vintage' ? 'solid' : 'outline'}
                  size="small"
                  onClick={() => setSelectedFilter('vintage')}
                >
                  Vintage
                </IonButton>
              </div>
            </div>
          )}

          {selectedTool === 'slides' && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-3 gap-2 max-h-32 overflow-y-auto">
                {mediaItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`aspect-square rounded border-2 cursor-pointer ${
                      index === currentSlideIndex ? 'border-red-500' : 'border-gray-300'
                    }`}
                    onClick={() => goToSlide(index)}
                  >
                    <img
                      src={item.thumbnail || item.uri}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
  {/* Slide Settings */}
        <div className="bg-white px-4 py-3 ">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <IonLabel>Duration per slide: {slideSettings.duration}s</IonLabel>
              <IonRange
                min={1}
                max={10}
                value={slideSettings.duration}
                onIonInput={(e) => setSlideSettings(prev => ({ ...prev, duration: e.detail.value as number }))}
              />
            </div>
            <div>
              <IonLabel>Transition</IonLabel>
              {/* <IonSelect
                value={slideSettings.transition}
                onSelectionChange={(e) => setSlideSettings(prev => ({ ...prev, transition: e.detail.value }))}
              >
                <IonSelectOption value="fade">Fade</IonSelectOption>
                <IonSelectOption value="slide">Slide</IonSelectOption>
                <IonSelectOption value="zoom">Zoom</IonSelectOption>
              </IonSelect> */}
            </div>
          </div>
        </div>
   
 
        {/* Bottom Action Buttons */}
        <div className="px-4 py-3 ">
          <div className="flex justify-between gap-24">
            <CustomButton
              text={isAutoSaving ? "Saving..." : isDraftSaved ? "Saved!" : "Save Draft"}
              onClick={handleSaveDraft}
              className={` h-10 rounded-base flex-1 transition-colors ${
                isDraftSaved 
                  ? 'text-green-700 bg-green-100' 
                  : 'text-white bg-custom-blue '
              }`}
              // disabled={isAutoSaving}
            />
            <CustomButton
              text="Next"
              onClick={handleNext}
              className=" h-10 rounded-base  flex-1 text-white bg-custom-blue "
            />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MultiImageVideoEditor;