import React, { useRef, useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { 
  playCircleOutline, 
  pauseCircleOutline,
  heartOutline, 
  chatbubbleOutline, 
  shareOutline 
} from 'ionicons/icons';
import CustomButton from '../../components/Common/CustomButton/CustomButton';


interface VideoCardProps {
  videoUrl?: string;
  userInitial: string;
  userName: string;
  userDescription: string;
  likeCount?: string;
  commentCount?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  videoUrl,
  userInitial,
  userName,
  userDescription,
  likeCount = "1.2K",
  commentCount = "89",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true); // Start as playing
  const [showPlayButton, setShowPlayButton] = useState(false); // Hide button initially
  const hideButtonTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        setShowPlayButton(true);
        if (hideButtonTimeoutRef.current) {
          clearTimeout(hideButtonTimeoutRef.current);
        }
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        hideButtonTimeoutRef.current = setTimeout(() => {
          setShowPlayButton(false);
        }, 2000);
      }
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    hideButtonTimeoutRef.current = setTimeout(() => {
      setShowPlayButton(false);
    }, 2000);
  };
  
  const handleVideoPause = () => {
    setIsPlaying(false);
    setShowPlayButton(true);
    if (hideButtonTimeoutRef.current) {
      clearTimeout(hideButtonTimeoutRef.current);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      setIsPlaying(true);
      setShowPlayButton(false);
      if (hideButtonTimeoutRef.current) {
        clearTimeout(hideButtonTimeoutRef.current);
      }
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        setShowPlayButton(true);
        setIsPlaying(false);
      });
    }
    return () => {
      if (hideButtonTimeoutRef.current) {
        clearTimeout(hideButtonTimeoutRef.current);
      }
    };
  }, [videoUrl]);   

  return (
    <div className="relative w-full h-full bg-[#d9ecea] rounded-lg shadow-lg m-2">
        <div className="absolute top-0 left-0 right-0 rounded-t-lg">
          <div className="px-4 py-4 flex items-center justify-between z-10">
            <div className="flex items-center flex-1 min-w-0">
              <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-white font-bold text-base">{userInitial}</span>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-blue-800 font-bold text-sm truncate">{userName}</h3>
                <p className="text-blue-700 text-sm truncate">{userDescription}</p>
              </div>
            </div>
            
             <CustomButton
               text="Get in Touch"
               className="w-24 h-8 p-0 px-2 text-xs font-normal text-blue-800 bg-white border border-blue-800 rounded opacity-100 hover:bg-white hover:text-blue-800 active:bg-white active:text-blue-800 disabled:opacity-40 whitespace-nowrap overflow-hidden text-ellipsis flex-shrink-0"
             />
          </div>
        </div>

         <div className="absolute top-20 left-4 right-12 bottom-8 rounded-xl overflow-hidden border-2 border-purple-200">
          <video 
            key={videoUrl}
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            autoPlay
            onClick={handlePlayPause}
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
          >
            <source src={videoUrl || "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {showPlayButton && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={handlePlayPause} 
                className="m-0 p-0 hover:scale-110 transition-transform duration-200"
              >
                <IonIcon 
                  icon={isPlaying ? pauseCircleOutline : playCircleOutline} 
                  className="w-16 h-16 text-white opacity-90 drop-shadow-lg" 
                />
              </button>
            </div>
          )}
        </div>

        <div className="absolute bottom-8 right-2 flex flex-col space-y-4">
           <button className="m-0 p-0 w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform duration-200">
             <IonIcon icon={heartOutline} className="w-7 h-7 text-blue-800" />
           </button>

          <button className="m-0 p-0 w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform duration-200">
            <IonIcon icon={chatbubbleOutline} className="w-7 h-7 text-blue-800" />
          </button>

          <button className="m-0 p-0 w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform duration-200">
            <IonIcon icon={shareOutline} className="w-7 h-7 text-blue-800" />
          </button>
        </div>
    </div>
  );
};

export default VideoCard;