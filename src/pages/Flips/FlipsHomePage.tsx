import { IonPage, IonIcon, IonButton } from '@ionic/react';
import { 
  arrowBackOutline, 
  playOutline
} from 'ionicons/icons';
import { useState, useEffect } from 'react';

import CustomButton from "../../components/Common/CustomButton/CustomButton";
import VideoCard from './VideoCard';

interface VideoData {
    id: number;
    videoUrl: string;
    userInitial: string;
    userName: string;
    userDescription: string;
    likeCount: string;
    commentCount: string;
    category: string;
}

const FlipsHomePage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("Construction");
    const [currentProfile, setCurrentProfile] = useState<VideoData | null>(null);
    
    const videoData: VideoData[] = [
        {
            id: 1,
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            userInitial: "S",
            userName: "Sarah Johnson",
            userDescription: "Construction Expert",
            likeCount: "1.2K",
            commentCount: "89",
            category: "Construction"
        },
        {
            id: 2,
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            userInitial: "M",
            userName: "Mike Chen",
            userDescription: "Renovation Specialist",
            likeCount: "856",
            commentCount: "45",
            category: "Renovation"
        },
        {
            id: 3,
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
            userInitial: "A",
            userName: "Anna Williams",
            userDescription: "Interior Designer",
            likeCount: "2.1K",
            commentCount: "156",
            category: "Interior Design"
        },
        {
            id: 4,
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
            userInitial: "D",
            userName: "David Brown",
            userDescription: "Electrician",
            likeCount: "743",
            commentCount: "32",
            category: "Electrical"
        },
        {
            id: 5,
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
            userInitial: "L",
            userName: "Lisa Davis",
            userDescription: "Plumbing Expert",
            likeCount: "1.5K",
            commentCount: "78",
            category: "Plumbing"
        },
        {
            id: 6,
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
            userInitial: "J",
            userName: "John Smith",
            userDescription: "Renovation Expert",
            likeCount: "2.3K",
            commentCount: "124",
            category: "Renovation"
        },
        {
            id: 7,
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
            userInitial: "E",
            userName: "Emma Wilson",
            userDescription: "Interior Designer",
            likeCount: "1.8K",
            commentCount: "92",
            category: "Interior Design"
        },
        {
            id: 8,
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
            userInitial: "R",
            userName: "Robert Taylor",
            userDescription: "Electrical Engineer",
            likeCount: "967",
            commentCount: "56",
            category: "Electrical"
        }
    ];
    
    const categories = [
        "All",
        "Construction",
        "Renovation",
        "Interior Design",
        "Electrical",
        "Plumbing"
    ];

    const filteredVideos = videoData.filter(video => 
        selectedCategory === "All" || video.category === selectedCategory
    );

    useEffect(() => {
        if (filteredVideos.length > 0) {
            setCurrentProfile(filteredVideos[0]);
        }
    }, [filteredVideos]);


    const handleCategorySelect = (categoryName: string) => {
        setSelectedCategory(categoryName);
    };

    return(
        <IonPage>
            <div className="flex flex-col h-screen bg-gray-100">
                <div className="flex items-center justify-between p-4 bg-white sticky top-0 z-20">
                    <IonButton 
                        fill="clear" 
                        className="!m-0 !p-0"
                    >
                        <IonIcon icon={arrowBackOutline} className="w-6 h-6 text-black" />
                    </IonButton>
                    
                    <div className="w-6"></div>
                    
                    <div className="flex items-center">
                        <h1 className="text-lg font-bold text-black mr-2">Flips</h1>
                        <IonIcon icon={playOutline} className="w-4 h-4 text-black" />
                    </div>
                </div>

                <div className="sticky top-[70px] left-0 right-0 z-10 bg-white px-4 py-2">
                    <div 
                        className="flex space-x-1 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {categories.map((category, index) => (
                            <CustomButton
                                key={index}
                                text={category}
                                onClick={() => handleCategorySelect(category)}
                                className={`h-7 px-1.5 flex items-center justify-center rounded-[14px] transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                                    selectedCategory === category
                                        ? 'bg-[#274C77FF] text-white border-transparent' 
                                        : 'bg-[#F3F4F6FF] text-[#323743FF] border-transparent hover:bg-[#CFD2DAFF] hover:text-[#323743FF] active:bg-[#A8ADB7FF] active:text-[#323743FF] disabled:bg-[#F3F4F6FF] disabled:text-[#323743FF]'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                <div 
                    className="flex-1 bg-white flex items-center justify-center"
                >
                    {currentProfile && (
                         <div className="w-full h-full flex items-center justify-center">
                             <VideoCard
                                 videoUrl={currentProfile.videoUrl}
                                 likeCount={currentProfile.likeCount}
                                 commentCount={currentProfile.commentCount}
                                 userInitial={currentProfile.userInitial}
                                 userName={currentProfile.userName}
                                 userDescription={currentProfile.userDescription}
                             />
                         </div>
                    )}
                </div>
            </div>
        </IonPage>
    )
}

export default FlipsHomePage;
