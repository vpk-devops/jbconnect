import React, { useState, useRef } from "react";
import { IonContent, IonIcon, useIonRouter } from "@ionic/react";
import { camera, close } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import CustomButton from "../../../../components/Common/CustomButton/CustomButton";
import CustomInputForm from "../../../../components/Common/CustomInputForm/CustomInputForm";
import StarRating from "../../../../components/Common/CustomStarRating/StarRating";
import Header from "../../../../components/Header/Header";
import PageLayout from "../../../../components/Layout/Layout";
import api from "../../../../api/axiosInstance";

const BookingHomeserviceReviewPage: React.FC = () => {
    const ionRouter = useIonRouter();
    const [rating, setRating] = useState<number>(0);
    const [feedback, setFeedback] = useState<string>("");
    const [photos, setPhotos] = useState<string[]>([]);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [uploadingPhotos, setUploadingPhotos] = useState<boolean[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleRatingChange = setRating;
    const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        setFeedback(e.target.value);

    const handleAddPhotos = () => fileInputRef.current?.click();

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        setSelectedFiles((prev) => [...prev, ...files]);

        files.forEach((file, index) => {
            setUploadingPhotos((prev) => [...prev, true]);
            const reader = new FileReader();
            reader.onload = (event) => {
                setPhotos((prev) => [...prev, event.target?.result as string]);
                setUploadingPhotos((prev) =>
                    prev.map((uploading, i) => (i === index ? false : uploading))
                );
            };
            reader.readAsDataURL(file);
        });
    };

    const handleRemovePhoto = (index: number) => {
        setPhotos((prev) => prev.filter((_, i) => i !== index));
        setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
        setUploadingPhotos((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSubmitReview = async () => {
        try {
            const formData = new FormData();
            formData.append("rating", String(rating));
            formData.append("comment", feedback);
            formData.append("serviceId", "64f0abcd1234567890abcd12");
            formData.append("user", "64f0abcd1234567890abcd12");
            selectedFiles.forEach((file) => formData.append("images", file));

            // all FormData entries
            for (const [key, value] of formData.entries()) {
                console.log(key, value);
            }

            const res = await api.post("/homeservices/reviews", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            // console.log("Review submitted:", res.data);
             ionRouter.push("/home-services/bookings", "forward", "push")
        } catch (err: any) {
            console.error("Failed to submit review", err.response?.data || err.message);
        }
    };

    const renderPhotoPlaceholders = () => {
        const closeButton = (index: number) => (
            <button
                onClick={() => handleRemovePhoto(index)}
                className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full flex items-center justify-center z-20 shadow-md"
            >
                <IonIcon icon={close} className="text-white text-xs" />
            </button>
        );

        return Array.from({ length: 3 }, (_, i) => {
            if (i < photos.length) {
                return (
                    <div
                        key={i}
                        className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg overflow-visible"
                    >
                        <img
                            src={photos[i]}
                            alt={`Upload ${i + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                        {closeButton(i)}
                    </div>
                );
            }
            if (i < uploadingPhotos.length && uploadingPhotos[i]) {
                return (
                    <div
                        key={i}
                        className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-200 rounded-lg flex items-center justify-center overflow-visible"
                    >
                        <div className="animate-spin rounded-full h-4 w-4 sm:h-6 sm:w-6 border-b-2 border-blue-500"></div>
                        {closeButton(i)}
                    </div>
                );
            }
            return (
                <div
                    key={i}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-200 rounded-lg flex items-center justify-center"
                >
                    <IonIcon
                        icon={camera}
                        className="text-gray-400 text-lg sm:text-xl md:text-2xl"
                    />
                </div>
            );
        });
    };

    return (
        <PageLayout
            header={
                <Header title="Write a Review" type="page" showRightIcon={false} />
            }
        >
            <IonContent className="ion-padding">
                <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto px-2 sm:px-4 md:px-6">
                    {/* Rating */}
                    <div className="mb-6 sm:mb-8">
                        <h2 className="text-base sm:text-lg md:text-xl font-medium text-[#274C77] mb-3 sm:mb-4 text-center">
                            Overall Rating
                        </h2>
                        <div className="flex flex-col items-center">
                            <StarRating
                                initialRating={rating}
                                onRate={handleRatingChange}
                                editable
                            />
                            <p className="text-xs sm:text-sm text-gray-500 mt-2">
                                Tap to rate
                            </p>
                        </div>
                    </div>

                    {/* Feedback */}
                    <div className="mb-6 sm:mb-8">
                        <CustomInputForm
                            label="Your Feedback"
                            name="feedback"
                            placeholder="Share your detailed experience..."
                            value={feedback}
                            onChange={handleFeedbackChange}
                            maxLength={500}
                            textarea
                            rows={4}
                            className="border border-[#DEE1E6] bg-white text-sm sm:text-base"
                        />
                        <div className="text-right text-xs sm:text-sm text-gray-500 mt-1">
                            {feedback.length}/500 characters
                        </div>
                    </div>

                    {/* Photos */}
                    <div className="mb-6 sm:mb-8">
                        <h2 className="text-base sm:text-lg md:text-xl font-medium text-[#274C77] mb-3 sm:mb-4">
                            Add Photos
                        </h2>
                        <CustomButton
                            text="Add Photos"
                            icon="camera"
                            onClick={handleAddPhotos}
                            className="w-full h-10 sm:h-12 md:h-14 bg-white text-[#274C77] border border-[#6096BA] rounded-md font-inter text-xs sm:text-sm md:text-base font-medium gap-2"
                        />
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handlePhotoUpload}
                            className="hidden"
                        />
                        <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4 justify-center sm:justify-start">
                            {renderPhotoPlaceholders()}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6 sm:mt-8">
                        <CustomButton
                            text="Submit Review"
                            onClick={handleSubmitReview}
                            //   disabled={rating === 0}
                            className="w-full h-10 sm:h-12 md:h-14 bg-[#274C77] text-white rounded-md font-inter text-xs sm:text-sm md:text-base font-medium shadow-sm"
                        />
                    </div>
                </div>
            </IonContent>
        </PageLayout>
    );
};

export default BookingHomeserviceReviewPage;
