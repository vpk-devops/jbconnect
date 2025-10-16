import {
  IonCard,
  IonIcon,
  IonImg,
  IonCardContent,
  IonAvatar,
  IonText,
  IonPopover,
  useIonRouter,
  IonGrid,
  IonCol,
  IonRow,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import CustomButton from "../CustomButton/CustomButton";

import {
  playCircleOutline,
  chevronForwardOutline,
  chevronBackOutline,
  ticketOutline,
  cartOutline,
  timeOutline,
  eyeOutline,
  star,
  starOutline,
  personCircleOutline,
  locationOutline,
  informationCircleOutline,
  boatSharp,
  bookmarkOutline,
  cubeOutline,
  checkmarkCircle,
  closeCircle,
} from "ionicons/icons";
import React, { useEffect, useState } from "react";
import StarRating from "../CustomStarRating/StarRating";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  setAgent,
  setRequiredCategories,
} from "../../../features/home-services/cart/orderSlice";
import { ComboOffer, Services } from "../../../features/home-services/combooffers/comboTypes";
import { routeConfig, slugify } from "../../../utils/helpers";
import { ServiceTag } from "../../../features/home-services/services/serviceTypes";
import { useAddToCart } from "../../../utils/ReusableHook";
import CustomModal from "../CustomModal/CustomModal";
import { addToCart } from "../../../features/home-services/cart/cartSlice";

// CustomUserCard
interface CustomUserCardProps {
  name: string;
  email?: string;
  phone?: string;
  role?: string;
  icon?: string;
  src?: string;
  onClick?: () => void;
  variant?: "default" | "profile" | "compact";
}
export const CustomUserCard: React.FC<CustomUserCardProps> = ({
  name,
  email,
  phone,
  role,
  icon,
  src,
  onClick,
  variant = "default",
}) => {
  const isProfile = variant === "profile";
  const nameClass =
    variant === "profile"
      ? "text-lg font-bold text-custom-black pl-3 font-inter"
      : "text-base font-semibold text-custom-black";
  const emailClass =
    variant === "profile"
      ? "text-base text-customlight pl-4 font-inter"
      : "text-sm text-gray-500";

  return (
    <IonCard
      onClick={onClick}
      className={`${isProfile ? "bg-transparent shadow-none px-0" : "bg-white p-2"
        } rounded-[6px] !my-1 ${variant !== "profile"
          ? "border border-custom-linegray shadow-[0_0_1px_#171a1f12,0_0_2px_#171a1f1F]"
          : ""
        }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6 px-3 py-2">
          {src ? (
            <div className="w-28 h-28 rounded-full bg-pink-100 overflow-hidden flex items-center justify-center">
              <img
                src={src}
                alt={name}
                className="w-24 h-30 object-cover rounded-full"
              />
            </div>
          ) : (
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              {icon && (
                <IonIcon icon={icon} className="text-3xl text-gray-700" />
              )}
            </div>
          )}

          <div>
            <h2 className={nameClass}>{name}</h2>
            <p
              className={`${emailClass} break-words max-w-[190px] whitespace-normal`}
            >
              {email}
            </p>
            {phone && (
              <p className="text-base text-custom-light pl-3 font-inter pt-1">
                {phone}
              </p>
            )}
            {role && variant === "default" && (
              <span className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-[4px] rounded-full mt-1">
                {role}
              </span>
            )}
          </div>
        </div>

        {(variant === "default" || variant === "compact") && (
          <IonIcon
            icon={chevronForwardOutline}
            className="w-8 h-8 text-[#274C7782]"
          />
        )}
      </div>
    </IonCard>
  );
};
// MoreCard
interface MoreCardProps {
  iconSrc: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
  variant?: "left-icon" | "right-icon";
}
export const MoreCard: React.FC<MoreCardProps> = ({
  iconSrc,
  title,
  subtitle,
  onClick,
  variant = "left-icon",
}) => {
  const isRight = variant === "right-icon";

  return (
    <IonCard
      onClick={onClick}
      className="bg-[#A3CEF133] p-3 rounded-xl shadow-sm mb-3 m-3 h-[70px]"
    >
      <div className="flex items-center justify-between space-x-4">
        {!isRight && (
          <img src={iconSrc} alt={title} className="w-12 h-12 rounded-md" />
        )}

        <div className={`flex-1 ${isRight ? "text-left pr-3" : ""}`}>
          <h3 className="font-inter text-lg leading-[22px] font-normal text-custom-black">
            {title}
          </h3>
          <p className="font-inter text-md text-custom-black leading-[22px] font-normal mt-[2px]">
            {subtitle}
          </p>
        </div>

        {isRight && (
          <IonIcon icon={iconSrc} className="text-3xl text-custom-black" />
        )}
      </div>
    </IonCard>
  );
};
// TermsCard
interface TermsCardProps {
  icon: string;
  title: string;
  description: string;
}
export const TermsCard: React.FC<TermsCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <IonCard className="h-[140px] bg-white rounded-[12px] my-3 p-0">
      <div className="flex gap-2 items-start p-4">
        <div className="w-16 h-16">
          <IonIcon icon={icon} className="w-6 h-6 text-custom-black" />
        </div>
        <div>
          <h3 className="font-inter text-md leading-[26px] font-bold text-custom-black">
            {title}
          </h3>
          <p className="text-sm text-custom-black-600 mt-1 leading-[20px]">
            {description}
          </p>
        </div>
      </div>
    </IonCard>
  );
};
// QuickStartCard
interface QuickStartCardProps {
  icon: string;
  label: string;
}
export const QuickStartCard: React.FC<QuickStartCardProps> = ({
  icon,
  label,
}) => {
  return (
    <IonCard className="h-[220px] bg-white rounded-[6px] p-2 !py-2 !mx-0 !my-3 min-w-[160px] sm:min-w-[160px] max-w-[200px] flex flex-col items-center shadow-[0px_4px_9px_#171a1f1C,0px_0px_2px_#171a1f1F]">
      <img src={icon} alt={label} className="w-30 h-30" />
      <CustomButton
        text={label}
        className="!mt-3 bg-[#CCEDFFFF] text-[#002D45FF] text-[12px] font-medium sm:text-sm !py-0 rounded-md text-center"
      />
    </IonCard>
  );
};
// Flip card
interface FlipCardProps {
  title: string;
  tag: string;
  image: string;
  buttonText?: string;
  centeredLayout?: boolean;
}
export const FlipCard: React.FC<FlipCardProps> = ({
  title,
  tag,
  image,
  buttonText,
  centeredLayout = false,
}) => {
  return (
    <div
      className={`bg-white rounded-xl border border-[#EBEBEA] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] sm:w-[200px] flex flex-col justify-between ${centeredLayout ? "bg-[#F2F9FFFF]" : "}"
        }`}
    >
      <div
        className={`relative rounded-t-xl overflow-hidden h-[120px] sm:h-[140px] ${centeredLayout ? "h-[180px]" : ""
          }`}
      >
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <IonIcon
          icon={playCircleOutline}
          className="absolute text-white text-3xl sm:text-4xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div
        className={`p-2 flex flex-col ${centeredLayout ? "items-center text-center " : ""
          }`}
      >
        <h3
          className={`text-sm sm:text-base font-semibold text-black   ${centeredLayout ? "text-2xl  leading-[28px]" : ""
            }`}
        >
          {title}
        </h3>
        <p
          className={`text-[14px] sm:text-sm text-[#4A72B9] font-medium font-inter pt-1 ${centeredLayout
            ? "!text-[#8C8D8BFF] !text-base pt-1 !leading-[22px]"
            : ""
            }`}
        >
          {tag}
        </p>

        {buttonText && (
          <CustomButton
            text={buttonText}
            className={`!mt-4 !mb-2 !px-4  text-sm rounded-full font-medium ${centeredLayout
              ? "bg-[#1C5D8E] text-white"
              : "bg-[#B2E2FF] text-[#1C5D8E]"
              }`}
          />
        )}
      </div>
    </div>
  );
};
// Appintrocard
interface IntroCardProps {
  title?: string;
  description?: string;
  sections?: { title: string; text: string }[];
  buttonText: string;
  onClick: () => void;
  textAlign?: "left" | "center";
}
export const IntroCard: React.FC<IntroCardProps> = ({
  title,
  description,
  sections,
  buttonText,
  onClick,
  textAlign = "center",
}) => {
  return (
    <div
      className={`bg-gradient-to-b from-[#FAFAFB] to-[#DEE1E6] rounded-lg shadow-md p-6 mx-3 mt-4 max-w-[337px] min-h-[220px] flex flex-col items-center justify-between text-${textAlign}`}
    >
      {title && (
        <h2 className="text-xl font-bold mb-3 text-custom-black font-archivo">
          {title}
        </h2>
      )}

      {description && (
        <p
          className={`text-sm font-normal text-custom-black font-archivo mb-5 mt-2 leading-[22px] text-${textAlign}`}
        >
          {description}
        </p>
      )}

      {sections &&
        sections.map((section, index) => (
          <div key={index} className="w-full mb-4">
            <span className="font-bold block mb-1 text-left">
              {section.title}
            </span>
            <p className="text-sm text-gray-700 leading-snug text-left">
              {section.text}
            </p>
          </div>
        ))}

      <CustomButton
        text={buttonText}
        className="bg-[#23446C] text-white w-full rounded-xl mt-2"
        onClick={onClick}
      />
    </div>
  );
};
// AppintoImage
interface Props {
  topImages?: string[];
  bottomImage?: string;
  topHeight?: string;
  bottomAspect?: string;
}
export const IntroImages: React.FC<Props> = ({
  topImages,
  bottomImage,
  topHeight = "h-60",
  bottomAspect = "aspect-[390/200]",
}) => (
  <div className="w-full flex flex-col items-center">
    {topImages && topImages.length > 0 && (
      <div className="grid grid-cols-2 gap-3 w-full mt-6 px-2 ">
        {topImages.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`rounded-[24px] object-cover w-full ${topHeight}`}
            alt={`img-${i}`}
          />
        ))}
      </div>
    )}
    {bottomImage && (
      <div className="flex justify-center mt-6 px-2 w-full">
        <img
          src={bottomImage}
          className={`rounded-[12px] object-cover w-full max-w-[390px] ${bottomAspect}`}
          alt="bottom"
        />
      </div>
    )}
  </div>
);
// AppIntroHaeder
interface Props {
  back?: boolean;
  skip?: boolean;
  onBack?: () => void;
  onSkip?: () => void;
}
export const IntroHeader: React.FC<Props> = ({
  back,
  skip,
  onBack,
  onSkip,
}) => (
  <div className="flex items-center justify-between w-full px-4 pt-4">
    {back ? (
      <IonIcon
        onClick={onBack}
        icon={chevronBackOutline}
        className="w-8 h-8 text-custom-black"
      />
    ) : (
      <div />
    )}

    {skip && (
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={onSkip}
      >
        <span className="text-base font-bold text-custom-black font-inter">
          Skip
        </span>
        <IonIcon
          icon={chevronForwardOutline}
          className="w-6 h-6 text-custom-black"
        />
      </div>
    )}
  </div>
);
// Legal CouseCard
interface CourseCardProps {
  title: string;
  desc: string;
  image: string;
  level: string;
  time: string;
  views: number;
  rating: number;
  progress: number;
  showProgress: boolean;
}
export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  desc,
  image,
  level,
  time,
  views,
  rating,
  progress,
  showProgress,
}) => {
  return (
    <div className="rounded-xl shadow-md overflow-hidden border border-gray-200">
      <div className="relative font-inter">
        <img
          src={image}
          alt={title}
          className="w-full h-[150px] object-cover"
        />
        <span className="absolute top-2 right-2 bg-[#3DBE29] text-custom-black text-xs font-semibold px-4 py-1 rounded-full">
          {level}
        </span>
      </div>

      <div className="p-4">
        {showProgress && (
          <>
            <div className="flex justify-between">
              <div className="text-sm text-custom-black mb-1 font-inter">
                Progress
              </div>
              <div className="text-sm text-custom-black mb-1">75%</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div
                className="bg-[#23446C] h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </>
        )}

        <h3 className="font-bold text-base text-custom-black font-inter mt-4 mb-1">
          {title}
        </h3>
        <p className="text-sm text-custom-black font-inter mb-3">{desc}</p>

        <div className="flex items-center text-xs text-gray-500 space-x-6 mb-3">
          <div className="flex items-center space-x-1">
            <IonIcon icon={timeOutline} className="text-sm text-custom-black" />
            <span className="text-sm text-custom-black font-inter">{time}</span>
          </div>
          <div className="flex items-center space-x-1">
            <IonIcon icon={eyeOutline} className="text-sm text-custom-black" />
            <span className="text-sm text-custom-black font-inter">
              {views.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <IonIcon icon={star} className="text-yellow-500 text-sm" />
            <span className="text-sm text-custom-black font-inter">
              {rating}
            </span>
          </div>
        </div>

        <CustomButton
          text=" Start Course"
          className="!mt-4 bg-custom-blue text-white text-base py-1 w-full font-medium"
        />
      </div>
    </div>
  );
};
// SupportCsrd
interface SupportCardProps {
  icon: string;

  title: string;
  subtitle: string;
  status: string;
  buttonText?: string;
  onClick?: () => void;
}
export const SupportCard: React.FC<SupportCardProps> = ({
  icon,
  title,
  subtitle,
  status,
  buttonText,
  onClick,
}) => {
  return (
    <div className="border font-inter border-[#E6E6E6] p-4 bg-white rounded-xl shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex flex-col justify-center items-center ">
      <div className="flex items-center justify-center w-12 h-12 p-2 bg-blue-200 rounded-full mb-3">
        <IonIcon icon={icon} className="text-[#23446C] text-2xl" />
      </div>

      <h3 className="font-semibold text-lg mb-1">{title}</h3>

      <p className="text-sm text-custom-black mb-3 w-44 pt-2 text-center">
        {subtitle}
      </p>
      <div className="text-sm border-2 border-gray-200 rounded-full inline-block px-8 py-1 text-custom-black font-medium mb-3">
        {status}
      </div>
      {buttonText && (
        <CustomButton
          onClick={onClick}
          text={buttonText}
          className="w-60 !py-0 border border-[#274C77FF] text-[#274C77FF] text-base font-semibold"
        />
      )}
    </div>
  );
};
// service card
interface ServiceCardProps {
  image: string;
  data?: Services | ComboOffer | any; // optional for API-driven, include special offers
  name?: string; // used for static cards / fallback
  subName?: string;
  price?: string | number;
  priceRange?: string;
  discount?: string;
  title?: string;
  subTitle?: string;
  overlayPosition?: "left" | "right";
}
export const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  data,
  overlayPosition = "right",
}) => {
  const ionRouter = useIonRouter();
  // console.log("data",data)
  const isCombo = data?.type === "combo";
  const isSpecialOffer = data && !isCombo;

  const displayTitle = isCombo
    ? data.name || data.comboServices?.map((s: any) => s.name).join(" + ") || "Combo Offer"
    : data.title || data.name;

  const displaySubName = isCombo ? data.subName : data.subtitle;
  const displayPrice = isCombo ? "" : data.priceRange;
  const displayDescription = isCombo ? data.description : undefined;


  const handleClick = () => {
    if (isCombo) {
      ionRouter.push(`/home-services/combo-offer/${data._id}`, "forward", "push");
    } else if (isSpecialOffer && data.type === 'specialOffer') {
      const categoryName = data.categoryName;

      const subObject = data.subcategory ? {
        _id: data.subcategory._id,
        name: data.subcategory.name,
        slug: data.subcategory.slug
      } : {
        // Fallback: create a pseudo subcategory from the offer title
        _id: data.categoryId,
        name: data.title,
        slug: slugify(data.subtitle)
      };

      // Use the same logic as handleSubcategoryClick
      const catSlug = slugify(categoryName);
      const subSlug = subObject.slug || slugify(subObject.name || "");

      // ionRouter.push(
      //   `/home-services/${catSlug}/${subSlug}/${subObject._id}`,
      //   "forward",
      //   "push"
      // );
      ionRouter.push(
        `/home-services/${catSlug}/${subSlug}/${subObject._id}?offerTitle=${encodeURIComponent(
          data.title
        )}`,
        "forward",
        "push"
      );

    }
  };

  return (
    <div className="relative w-full h-44 md:h-56 overflow-hidden font-inter rounded-lg shadow-md">
      <img src={image} className="w-full h-full object-cover" alt={displayTitle} />

      <div
        className={`absolute inset-0 flex flex-col ${overlayPosition === "right" ? "items-end justify-center" : "items-start"
          }`}
      >
        <div
          className={`bg-[#274C7766] h-full sm:w-48 md:w-56 p-2 ${overlayPosition === "left"
              ? "order-first items-start text-start w-44 bg-[#B8C8E6E0]"
              : "flex flex-col justify-center items-center text-center w-40"
            }`}
        >
          {displayTitle && (
            <h2 className="text-white text-sm sm:text-base md:text-xl font-bold w-full text-start">
              {displayTitle}
            </h2>
          )}
          {displaySubName && (
            <p
              className={`text-xs sm:text-sm mt-1 w-full ${overlayPosition === "left"
                  ? "text-yellow-200 text-right"
                  : "text-white text-center pt-2"
                }`}
            >
              {displaySubName}
            </p>
          )}
          {displayDescription && (
            <p className="text-custom-black font-inter text-xs sm:text-sm mt-1">
              {displayDescription}
            </p>
          )}
          {displayPrice && (
            <p className="text-white font-inter text-xs sm:text-sm mt-2">{displayPrice}</p>
          )}

          <CustomButton
            text="Book Now"
            className="!mt-2 bg-custom-blue text-white !h-8 text-xs sm:text-sm rounded-md !px-3 !py-1 w-max"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

// Reccomended card
interface RecommendedCardProps {
  id: string;
  image?: string;
  name: string;
  pname: string;
  description: string;
  discount: string;
  rating: number;
  duration: string;
  specialists: any;
  distance: string;
}
export const RecommendedCard: React.FC<RecommendedCardProps> = ({
  id,
  image,
  name,
  pname,
  description,
  discount,
  rating,
  duration,
  specialists,
  distance,
}) => {
  const ionRouter = useIonRouter();
  return (
    <IonCard className="!mx-2 !mt-2 !my-0 !p-0 flex flex-col md:flex-row items-center md:items-stretch rounded-lg shadow-md overflow-hidden  max-w-full md:max-w-4xl lg:max-w-5xl">
      <div className="w-full md:w-1/3  relative">
        <IonImg src={image} className="w-full h-40 md:h-44 object-cover" />
        <div className="absolute top-2 right-2 bg-orange-200 text-orange-800 text-xs font-semibold px-2 py-1 rounded">
          {discount}
        </div>
      </div>

      <div className="w-full md:w-2/3 p-2 px-3 flex flex-col justify-between font-inter ">
        <div>
          <h2 className="text-base font-bold text-[#6096BAFF]  leading-7">
            {pname}
          </h2>
          <p className="text-[8px] text-[#9095A1FF] font-normal">
            {description}
          </p>

          {/* Rating & Time */}
          <div className="flex items-center font-inter gap-4 mt-2">
            <div className="flex items-center gap-1 text-yellow-600 text-sm bg-yellow-100 rounded-full px-3 py-1">
              <IonIcon icon={star} className="text-yellow-800" />
              <span className="text-yellow-800 font-medium text-xs">
                {rating}
              </span>
            </div>

            <div className="flex items-center gap-1  text-sm  bg-purple-100 rounded-full px-3 py-1">
              <IonIcon icon={timeOutline} className="text-pink-700" />
              <span className="text-pink-700 font-medium text-xs">
                {duration}
              </span>
            </div>
          </div>
          {/* Provider */}
          <div className="flex items-center  font-inter gap-2 mt-3">
            <IonImg
              src={image}
              className="w-10 h-8 !rounded-lg  object-cover"
            />
            <div>
              <p className="text-custom-black text-sm font-medium">{name}</p>
              <p className="text-custom-balck text-xs flex items-center gap-1">
                <IonIcon
                  icon={locationOutline}
                  className="text-custom-balck "
                />
                {distance}
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-3">
          <CustomButton
            text="View Details"
            className="border border-custom-blue text-inter text-custom-blue w-1/2 h-8 rounded-lg text-sm md:w-32"
            onClick={() =>
              ionRouter.push(`/home-services/service-details/${id}`)
            }
          />
          {/* <CustomButton
            text="Book Now"
            className="bg-custom-blue text-white text-inter w-1/2 h-8 rounded-lg text-sm md:w-32"
          /> */}
          <CustomButton
            text="Book Now"
            className="bg-custom-blue text-white text-inter w-1/2 h-8 rounded-lg text-sm md:w-32"
            onClick={() => {
              console.log("book", "hie")
              const specialist = specialists?.specialists?.[0];
              console.log("specialist", specialist)
              if (specialist && specialists?.categoryId) {
                const categorySlug = specialists.categoryId.name
                  .toLowerCase()
                  .replace(/\s+/g, "-"); // cleaning
                console.log("splCatSlug", categorySlug)
                const subcategorySlug = specialist.name
                  .toLowerCase()
                  .replace(/\s+/g, "-"); // bathroom-cleaning
                console.log("splSubCatSlug", subcategorySlug)
                ionRouter.push(
                  `/home-services/${categorySlug}/${subcategorySlug}/${specialist._id}`
                );
              }
              // else {
              //   // fallback
              //   ionRouter.push(`/home-services/service-details/${id}`);
              // }
            }}
          />

        </div>
      </div>
    </IonCard>
  );
};

// all sercives card image with title
interface AllServiceCardProps {
  image: string | undefined;
  title: string;
  className?: string;
  onClick?: () => void;

}
export const AllServiceCard: React.FC<AllServiceCardProps> = ({
  image,
  title,
  onClick,
  className,
}) => {
  return (
    <div className="flex flex-col items-center space-y-2" onClick={onClick}>
      <div className="w-20 h-24  className md:w-40 md:h-40 rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white">
        <IonImg src={image} className={`w-full h-full object-cover`} />
      </div>
      <span className="text-xs md:text-sm font-medium text-custom-blue font-inter">
        {title}
      </span>
    </div>
  );
};
// Combo Offer Card
interface ComboOfferCardProps {
  id: string;
  title: string;
  image: string;
  secondaryImage?: string;
  rating: number;
  originalPrice: number;
  discountedPrice: number | undefined;
  services: string[];
  // onBookService?: () => void;
  onBookService?: (combo: {
    parentId(combo: { id: string; title: string; price: number; image: string; }, parentId: any): void; id: string; title: string; price: number; image: string
  }) => void;

}
export const ComboOfferCard: React.FC<ComboOfferCardProps> = ({
  id,
  title,
  image,
  secondaryImage,
  rating,
  originalPrice,
  discountedPrice,
  services,
  onBookService,
}) => {
  return (
    <IonCard className="!mx-0 !mt-1 !m-0 !mb-4 overflow-hidden bg-white w-full" style={{
      borderRadius: '12px',
      boxShadow: '0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1F',
      minHeight: '315px'
    }}>
      <IonCardContent className="!p-4 ">
        {/* Top Section */}
        <div className="flex gap-4 mb-4">
          <div className="relative flex-shrink-0 w-32 h-24">
            <img
              src={secondaryImage || image}
              alt={title}
              className="absolute object-cover z-10 top-10 left-0 w-[82px] h-[77px] rounded-tr-[39px] border-2 border-[#274C77FF]"
              onError={(e) => {
                e.currentTarget.src = '/assets/images/cleaning2.jpg';
              }}
            />
            {/* Primary image  */}
            <img
              src={image}
              alt={title}
              className="absolute object-cover z-0 top-0 left-[35px] w-[82px] h-[77px] rounded-tr-[39px] border-2 border-[#274C77FF]"
              onError={(e) => {
                e.currentTarget.src = '/assets/images/cleaning1.jpg';
              }}
            />
          </div>
          <div className="flex-1">
            {/* Rating */}
            <div className="flex  justify-end items-center gap-2 mb-2">
              {/* <StarRating initialRating={rating} editable={false} /> */}
              <StarRating initialRating={4.5} editable={false} />


            </div>
            {/* Title */}
            <h3 className="text-[#6096BAFF] mb-2 !font-inter !text-base !font-bold leading-[26px]">{title}</h3>
            {/* Pricing */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm text-gray-500 line-through">₹{originalPrice}</span>
              <span className="text-base font-bold text-[#274C77]">₹{discountedPrice}</span>
            </div>
            {/* Book Button */}
            <div className="flex  justify-end items-center">
              <CustomButton
                text="Book your service"
                onClick={() =>
                  onBookService?.({
                    id,
                    title,
                    price: discountedPrice ?? originalPrice,
                    image,
                    parentId: function (combo: { id: string; title: string; price: number; image: string; }, parentId: any): void {
                      throw new Error("Function not implemented.");
                    }
                  })
                }
                className="w-32 bg-[#274C77] text-white rounded border-none font-inter flex items-center justify-center text-xs font-normal h-7 px-2 whitespace-nowrap"
              />
            </div>
          </div>
        </div>
        {/* Services List */}
        <div className=" pt-1 font-inter">
          <h4 className="!text-base !font-bold !text-[#274C77] mb-3" style={{ fontSize: '16px' }}>What's Included:</h4>
          <ul className="space-y-1 pt-2">
            {services.map((service, index) => (
              <li key={index} className="text-xs text-gray-600 flex items-start">
                <span className="text-[#274C77] mr-2 mt-0.5">•</span>
                <span className="leading-relaxed">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </IonCardContent>
    </IonCard>
  );
};
// Review card
interface ReviewCardProps {
  name: string;
  avatar: string;
  time: string;
  rating: number;
  review: string;
}
export const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  avatar,
  time,
  rating,
  review,
}) => {
  return (
    <IonCard className="rounded-lg shadow-sm border border-gray-200 w-full !mx-0 !mt-2 ">
      <IonCardContent className="!p-3">
        <div className="flex  justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/assets/images/3.jpg"
              alt={name}
              className="rounded-full w-12 h-12 "
            />
            <div>
              <h3 className="text-sm font-semibold">{name}</h3>
              <p className="text-xs text-gray-500">{time}</p>
            </div>
          </div>
          <StarRating initialRating={rating} editable={true} />
        </div>
        <p className="text-sm text-gray-600 !mt-4">{review}</p>
      </IonCardContent>
    </IonCard>
  );
};
// How it works
interface HowItWorksCardProps {
  step?: number;
  icon?: string; // icon path
  title: string;
  description: string;
}
export const HowItWorksCard: React.FC<HowItWorksCardProps> = ({
  step,
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-start px-4 pb-6 !rounded-lg font-inter !mx-0">
      {icon && (
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#6096BAFF] text-white flex-shrink-0">
          <IonIcon icon={icon} className="text-2xl text-white text-bold" />
        </div>
      )}

      <div className={icon ? "ml-3" : "ml-1 "}>
        <h3
          className={`!text-sm font-inter ${icon
            ? "!font-medium  sm:text-lg"
            : "!font-semibold !text-custom-blue !text-sm"
            }`}
        >
          {step}. {title}
        </h3>

        <p className="text-xs sm:text-sm text-custom-gray mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};
// offercard
interface OfferCardProps {
  text: string;
}
export const OfferCard: React.FC<OfferCardProps> = ({ text }) => {
  return (
    <IonCard className="m-0 rounded-lg border-2 border-custom-blue shadow-sm w-full max-w-[280px] h-14">
      <IonCardContent className="flex items-center gap-2 p-2 ">
        <IonIcon
          icon={ticketOutline}
          className="text-custom-blue w-6 h-6 flex-shrink-0"
        />
        <p className="text-sm font-medium text-custom-black font-inter leading-snug">
          {text}
        </p>
      </IonCardContent>
    </IonCard>
  );
};

// cart serviceCard

// Property card all services
interface PropertyCardProps {
  id?: string;
  title: string;
  name?: string;
  subtitle?: string;
  rating?: number;
  reviews?: string;
  price?: number;
  image?: string;
  description?: string;
  icon?: string;
  linkText?: string;
  tags?: ServiceTag[];
  onClick?: () => void;
  detailPath?: string | undefined;

  variant?: "left" | "right";
  category: string; // ✅ new
  subCategorySlug: string;
  pathNames?: string[];
}
export const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  name,
  rating,
  reviews,
  price,
  image,
  description,
  icon,
  linkText,
  tags,
  onClick,
  detailPath,
  variant,
  category,
  subCategorySlug,
  pathNames,
}) => {
  const { addItemToCart } = useAddToCart();
  const [showPopover, setShowPopover] = useState(false);
  const [event, setEvent] = useState<MouseEvent | undefined>();
  const router = useIonRouter();
  const contentClasses = "flex justify-between items-start font-inter gap-4";
  const variantClasses = variant === "left" ? "flex-row-reverse" : "flex-row";
  const dispatch = useAppDispatch();
  const { services, loading, error } = useAppSelector(
    (state) => state.services
  );
  // console.log("serv", services)
  const [selectedTag, setSelectedTag] = useState<ServiceTag | null>(null);
  useEffect(() => {
    if (tags && tags.length > 0) {
      setSelectedTag(tags[0]);
    }
  }, [tags]);
  const displayPrice =
    selectedTag?.price !== undefined ? selectedTag.price : price;
  return (
    <IonCard
      className={`!mx-3 rounded-lg !my-2 relative ${variant === "left" ? "border-l-8 border-custom-blue" : ""
        }`}
    >
      {variant === "left" && (
        <h2 className="!font-bold !text-lg md:text-lg text-custom-blue px-3 pt-2 flex items-center">
          {title}
          <IonIcon
            icon={cubeOutline}
            className="text-custom-blue text-lg ml-2"
          />
        </h2>
      )}
      <IonCardContent
        className={`!px-3 !py-2 ${contentClasses} ${variantClasses}`}
      >
        {/* Left content */}
        <div className="flex flex-col justify-start gap-1 flex-1 h-full">
          {variant !== "left" && (
            <h2 className="!font-bold !text-base md:text-lg text-custom-blue">
              {title}
            </h2>
          )}
          {/* <h3
            className={`font-semibold md:text-base ${variant === "left"
              ? "text-[#6096BAFF] !text-sm"
              : "text-custom-black text-base"
              }`}
          >
            {title}
          </h3> */}
          <div className="flex items-center text-sm md:text-base">
            <IonIcon icon={star} className="text-base text-yellow-400" />{" "}
            <span className="text-custom-gray ml-1">{rating}</span>
            <span className="ml-2 text-custom-gray">(5k review)</span>
          </div>
          <h4 className="text-sm md:text-base text-custom-gray !m-0 !p-0">
            Starts at{" "}
            <span className="font-semibold text-custom-black ml-1">
              {displayPrice}
            </span>
          </h4>
          {description ? (
            <p className="!text-[12px] !m-0 !pb-4 mt-2">{description}</p>
          ) : tags && tags.length > 0 ? (
            <div className="flex items-center font-inter gap-2 mt-2 flex-wrap">
              {tags.map((tag, index) => {
                const isSelected = selectedTag?.name === tag.name;
                return (
                  <div
                    key={index}
                    onClick={() => setSelectedTag(tag)}
                    className={`flex items-center gap-1 rounded-full px-2 py-1 cursor-pointer transition-all
                      ${isSelected
                        ? "bg-[#cfd2daff] text-custom-black"
                        : "bg-[#f3f4f6ff] text-custom-black"
                      }`}
                  >
                    <h6 className="!font-medium !text-[12px]">{tag.name}</h6>
                  </div>
                );
              })}
            </div>
          ) : null}
          {!linkText && (
            <button
              className={`text-[#0090FFFF] underline text-sm md:text-base mt-2 ${variant === "left" ? "text-right" : "text-left"
                }`}
              onClick={() => {
                const slug = slugify(title); // service slug
                console.log("title", slug);
                console.log("subcatId", subCategorySlug);
                // router.push(
                //   `/home-services/${category}/${subCategorySlug}/${slug}/detailpage`,
                //   "forward"
                // );
                router.push(
                  `/home-services/${category}/${subCategorySlug}/${slug}/detailpage?tag=${encodeURIComponent(
                    selectedTag?.name || ""
                  )}`,
                  "forward"
                );
              }}
            >
              View Details
            </button>
          )}
        </div>
        {/* Right image & button */}
        <div className="md:w-32">
          <div className="relative">
            <img
              src={image}
              alt={title}
              className={`w-32 md:h-24 object-cover rounded-2xl ${variant === "left" ? "h-[120px]" : "h-28"
                }`}
            />
            <div className="absolute -bottom-2 w-full flex justify-center">
              <CustomButton
                text="  Add to cart"
                icon="cartOutline"
                className="text-xs text-custom-blue !bg-white border border-custom-blue !py-3 !w-30 !h-7 md:text-sm"
                onClick={(e: any) => {
                  setEvent(e.nativeEvent);
                  setShowPopover(true);
                }}
              />
            </div>
          </div>
          {/* popover  */}
          <IonPopover
            isOpen={showPopover}
            event={event}
            onDidDismiss={() => setShowPopover(false)}
          >
            <div className=" w-[195px] flex items-center justify-between">
              <div className="p-2 flex items-center  gap-1">
                <span className="text-custom-gray text-base font-archivo font-medium">
                  {displayPrice}
                </span>
                <IonIcon
                  icon={informationCircleOutline}
                  className="text-gray-400 text-lg"
                />
              </div>
              <CustomButton
                text="Proceed"
                className="bg-[#6096baff] text-white text-[13px] !h-6 rounded-md"
                onClick={() => {
                  const item: any = {
                    id: id || "",
                    title: title || "",
                    price:
                      selectedTag?.price !== undefined
                        ? typeof selectedTag.price === "string"
                          ? parseFloat(selectedTag.price)
                          : selectedTag.price
                        : typeof price === "string"
                          ? parseFloat(price)
                          : price ?? 0,
                    image: image || "",
                    quantity: 1,
                    tag: selectedTag?.name,
                  };
                  if (selectedTag) {
                    item.tag = selectedTag.name;
                  }
                  addItemToCart(item);
                  setShowPopover(false);
                }}
              />

            </div>
          </IonPopover>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

interface ServiceStep {
  title: string;
  description: string;
}
interface ServiceDetailPageProps {
  title: string;
  image: string;
  description: string;
  rating: number;
  reviews: string;
  items: ServiceStep[];
}
export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  title,
  image,
  description,
  rating,
  reviews,
  items,
}) => {
  return (
    <div className="bg-gray-50 mx-1">
      <div className="relative w-full h-48 md:h-64">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white font-inter text-base md:text-2xl font-bold text-center px-4">
            {description}
          </h1>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold text-custom-blue font-archivo">
            {title}
          </h2>
          <CustomButton
            text="  Add to cart"
            icon="cartOutline"
            className="text-xs text-custom-blue !bg-white border border-custom-blue !py-2  !w-28 !h-7 md:text-sm"
          />
        </div>
        <div className="flex items-center justify-between">
          {/* Rating & reviews */}
          <div className="flex items-center font-inter gap-4 ">
            <div className="flex items-center gap-1 text-yellow-700 text-sm bg-yellow-100 rounded-full px-3 py-1">
              <IonIcon
                icon={starOutline}
                className="text-yellow-600 !text-xs"
              />
              <span className="text-yellow-600 font-medium text-xs">
                {rating}
              </span>
            </div>
            <div className="flex items-center gap-1  text-sm  bg-blue-100 rounded-full px-3 py-1">
              <span className="text-blue-500 font-medium text-xs">
                300+ reviews
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* What's Included */}
      <IonCard className="!mx-2 !my-1 mb-3 shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] bg-white rounded-lg">
        <IonCardContent className="!p-3">
          <h3 className="!text-lg !font-semibold text-custom-blue font-archivo !mb-3">
            What's Included
          </h3>

          <div className="space-y-4 font-inter ">
            {items.map((step, index) => (
              <div key={index}>
                <p className="font-semibold text-custom-black">{step.title}</p>
                <p className="text-sm text-custom-gray mt-1">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </IonCardContent>
      </IonCard>
      <IonCard className="!mx-2 !my-4 shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] bg-white rounded-lg">
        <IonCardContent className="!p-3">
          <h3 className="!text-lg !font-semibold text-custom-blue font-archivo !mb-2">
            Excluded
          </h3>
          <p className="font-inter text-custom-gray">
            Ink stains may not be completely removable
          </p>
        </IonCardContent>
      </IonCard>
    </div>
  );
};
interface ReviewBreakdownProps {
  average: number;
  ratings: {
    stars: number;
    count: number;
  }[];
  total?: number;
}
export const ReviewBreakdown: React.FC<ReviewBreakdownProps> = ({
  average,
  ratings,
  total,
}) => {
  const maxCount = Math.max(...ratings.map((r) => r.count));
  return (
    <IonCard className="!mx-3 mt-3 mb-4 shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] bg-whiterounded-2xl">
      <IonCardContent className="!p-3">
        <h3 className="!text-lg !font-semibold text-custom-blue font-archivo b-3">
          Review
        </h3>

        {/* Average */}
        <div className="flex items-center gap-2 my-3">
          <IonIcon icon={starOutline} className="text-yellow-500" />
          <span className="text-base !text-custom-black font-semibold">
            {average.toFixed(1)}
          </span>
          {total && (
            <span className="text-xs !text-custom-black">
              ({total.toLocaleString()} total)
            </span>
          )}
        </div>

        {/* Rating Rows */}
        <div className="space-y-2">
          {ratings.map((r, index) => {
            const percent = (r.count / maxCount) * 100;

            const formatCount = (num: number) => {
              if (num >= 1000) return `${Math.round(num / 1000)}K`;
              return num.toString();
            };
            return (
              <div key={index} className="flex items-center gap-2">
                <div className="flex items-center w-6 justify-end">
                  <IonIcon icon={star} className="text-yellow-500 text-xs" />
                  <span className="ml-1 text-xs text-custom-black font-medium">
                    {r.stars}
                  </span>
                </div>

                <div className="flex-1 h-2 bg-blue-100 !rounded-md overflow-hidden">
                  {" "}
                  <div
                    style={{ width: `${percent}%` }}
                    className="h-full bg-custom-blue !rounded-lg"
                  ></div>{" "}
                </div>

                {/* Count */}
                <span className="text-xs font-medium text-gray-600 min-w-[20px] text-right">
                  {" "}
                  {formatCount(r.count)}{" "}
                </span>
              </div>
            );
          })}
        </div>
      </IonCardContent>
    </IonCard>
  );
};
interface ProfessionalCardProps {
  specialist: {
    _id: string;
    name: string;
    profession?: string;
    image?: string;
    basicCharge: number;
    rating?: number;
    specialists?: string[];
  };
}
export const ProfessionalCard: React.FC<ProfessionalCardProps> = ({
  specialist,
}) => {
  const dispatch = useAppDispatch();
  const ionRouter = useIonRouter();
  return (
    <IonCard className="!mx-2 !my-0 !p-1 !pb-2 rounded-lg shadow-lg overflow-hidden">
      <IonCardContent className="!p-0">
        <IonGrid className="!p-0 !m-0">
          <IonRow className="!p-0 items-start">
            {/* Left - Image */}
            <IonCol size="4" sizeMd="3" className="flex justify-center">
              <img
                // src={specialist.image}
                // src={specialist.image || "/assets/images/professional1.png"}
                src="/assets/images/professional1.png"
                alt={specialist.name}
                className="w-28 h-44 object-cover rounded-xl"
              />
            </IonCol>

            {/* Right - Info */}
            <IonCol size="8" sizeMd="9" className="!mt-0 !pt-0">
              <IonRow className="justify-between items-center !mt-1 !p-0">
                <IonCol size="6" className="flex items-center !m-0 !p-0">
                  <h2 className="text-lg !font-bold !font-inter !text-custom-black font-inter !m-0">
                    {specialist.name}
                  </h2>
                </IonCol>

                <IonCol size="6" className="flex justify-end !mt-1 !p-0">
                  <CustomButton
                    // onClick={() => ionRouter.push("/home-services/professional/professional-agent", "none", "replace")}
                    onClick={() =>
                      ionRouter.push(
                        `/home-services/professionals/${specialist._id}`,
                        "none",
                        "replace"
                      )
                    }
                    text="Click to View"
                    className="!bg-[#6096BAFF] !text-white font-medium rounded-full !w-28 !h-7 text-[13px]"
                  />
                </IonCol>
              </IonRow>

              {/* Service Charge */}
              <p className="text-gray-500 text-base font-inter font-medium !pt-0">
                {specialist.profession}
              </p>
              <div className="inline-block text-[11px] text-custom-black my-1 bg-[#F2F2FDFF] rounded-md p-1 ">
                Basic Service Charge:
                <span className="font-semibold !px-1 font-inter">
                  ₹{specialist.basicCharge}
                </span>
              </div>

              {/* Rating & Distance */}
              <IonRow className=" mt-0">
                {/* Rating Card */}
                <IonCol size="6" className="">
                  <div className=" !w-30 font-inter !h-18 flex flex-col space-y-1  items-center  bg-[#F2F2FDFF]  py-3 rounded-lg">
                    <h3 className="font-medium !text-[12px] !text-custom-black">
                      RATING
                    </h3>
                    <p className="!text-custom-black !font-bold !text-[11px]">
                      {specialist.rating}
                    </p>
                    <IonIcon icon={star} className="text-yellow-500" />
                    {/* <StarRating initialRating={specialist.rating} editable={false} /> */}
                  </div>
                </IonCol>

                {/* Distance Card */}
                <IonCol size="6" className="">
                  <div className="!w-30 font-inter !h-18 flex flex-col space-y-1  items-center  bg-[#EFFCFAFF]  py-3 rounded-lg">
                    <h3 className="font-medium !text-[12px] !text-custom-black">
                      DISTANCE
                    </h3>
                    <h6 className="!text-custom-black !font-bold !text-[11px]">
                      5km Away
                    </h6>
                    <IonIcon
                      icon={locationOutline}
                      className="!text-custom-black"
                    />
                  </div>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
        {/* Skills + Book Btn */}
        <div className="mt-1 mx-2">
          <h2 className="text-base !font-semibold !font-inter !text-[#323743FF] font-inter">
            Specialist in
          </h2>
          <div className="flex flex-wrap gap-3 mt-2">
            {specialist.specialists?.map((skill: any, index: any) => (
              <span
                key={index}
                className="!py-1 font-inter px-2 flex flex-col items-center justify-center bg-[#F1F5F9] rounded-full text-xs text-[#6096BAFF]"
              >
                {skill}
              </span>
            ))}
            <CustomButton
              text="Book Service"
              className="!bg-[#6096BAFF] !text-white font-medium rounded-full !w-26 !h-6 text-xs"
              onClick={() => {
                dispatch(
                  setAgent({
                    id: specialist._id,
                    name: specialist.name,
                    profession: specialist.profession,
                    image: specialist.image,
                    basicCharge: specialist.basicCharge,
                    rating: specialist.rating,
                  })
                );

                // navigate to address select page
                ionRouter.push("/home-services/select-address?mode=booking", "forward");
              }}
            />
          </div>
        </div>
      </IonCardContent>
    </IonCard>
  );
};
interface BookingSummaryCardProps {
  icon: string;
  value: number | string;
  label: string;
  bgClass?: string;
  textClass?: string;
}
export const BookingSummaryCard: React.FC<BookingSummaryCardProps> = ({
  icon,
  value,
  label,
  bgClass = "",
  textClass = "text-gray-700",
}) => {
  return (
    <div className="min-w-[126px] h-[69px] flex flex-col justify-center px-3 bg-white rounded-md shadow-[0px_8px_17px_#171a1f26,0px_0px_2px_#171a1f1F]">
      <div className="flex items-center gap-6 mb-1">
        <div
          className={`w-6 h-6 ${bgClass} rounded-full flex items-center justify-center`}
        >
          <IonIcon icon={icon} className={`w-4 h-4 ${textClass}`} />
        </div>
        <div className="text-lg text-center font-bold text-black">
          <h6>{value}</h6>
        </div>
      </div>
      <div className="text-center">
        <h5 className="text-xs !text-custom-black font-inter mt-1">{label}</h5>
      </div>
    </div>
  );
};
// offercard
interface AllOfferCardProps {
  ribbonText?: string;
  logoSrc?: string;
  title?: string;
  blurb?: string;
  addText?: string;
  onAdd?: () => void;
  onKnowMore?: () => void;
}
export const AllOfferCard: React.FC<AllOfferCardProps> = ({
  ribbonText,
  logoSrc,
  title,
  blurb,
  addText,
  onAdd,
  onKnowMore,
}) => {
  return (
    <div className="relative !mt-8 w-full  bg-[#0F141A] text-white  rounded-tr-[96px] p-2 shadow-[0px_8px_17px_#171a1f26,0px_0px_2px_#171a1f1F]">
      {/* Ribbon */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFE799FF] text-[#111827] text-xs font-inter font-medium px-6 py-1 rounded-full shadow-sm whitespace-nowrap">
        {ribbonText}
      </div>
      <div className="flex items-start justify-between pt-2 gap-4">
        {/*  Logo + Title */}
        <div className="flex items-center ">
          {logoSrc && (
            <img
              src="/assets/images/appLogo1.png"
              alt="logo"
              className="w-28 h-14 object-cover"
            />
          )}
          <h6
            className="font-medium text-[#E5C200] text-[12px] md:text-[20px] pt-6"
            style={{ fontFamily: "Afacad Flux, Inter, sans-serif" }}
          >
            {title}
          </h6>

          {/* Add button */}
          <CustomButton
            text="Add"
            onClick={onAdd}
            className="h-[24px] !ml-10 !mt-5  bg-[#FFE566FF] text-[#111827] text-[14px] leading-[22px] rounded-[8px] border-0 hover:bg-[#F4D883]"
          />
        </div>
      </div>
      <div className="mt-1 text-sm leading-6 font-inter text-[#F4F4F5] w-70">
        {blurb}
      </div>
      {/* Know more */}
      <div className="text-right">
        <button
          className="mt-1 text-[13px] font-semibold underline underline-offset-2 text-white/90 hover:text-white"
          onClick={onKnowMore}
          type="button"
        >
          Know More {">"}
        </button>
      </div>
    </div>
  );
};
// Precautionscard
interface PrecautionCardProps {
  icon: string;
  description: string;
}
export const PrecautionCard: React.FC<PrecautionCardProps> = ({
  icon,
  description,
}) => {
  return (
    <IonCard className="!m-0 !p-0 flex flex-col  items-center justify-center text-center   border border-[#6096BA] rounded-md w-full h-36">
      <img
        src={icon}
        alt="Precaution icon"
        className="w-22 h-16 mb-2 object-contain"
      />
      <h5 className="text-xs text-gray-600 mt-1">{description}</h5>
    </IonCard>
  );
};
interface CoveredCardProps {
  type: string;
  title: string;
  items: string[];
}
export const CoveredCard: React.FC<CoveredCardProps> = ({
  type,
  title,
  items,
}) => {
  const isCovered = type === "covered";

  return (
    <IonCard className="shadow-md font-inter border border-gray-200 rounded-lg !m-0 !mx-2 !mt-2 !py-2 !px-2">
      <div className="flex items-center  !px-2 !pt-2">
        <IonIcon
          icon={isCovered ? checkmarkCircle : closeCircle}
          className={
            isCovered
              ? "text-green-600 text-xl border border-custom-blue rounded-full"
              : "text-red-600  text-xl border border-custom-blue rounded-full"
          }
        />
        <h3 className="text-base font-semibold text-custom-blue !px-2">
          {title}
        </h3>
      </div>

      <IonCardContent className="!p-0 !pt-2 !m-0 !font-inter">
        <ul className="list-disc list-inside space-y-2 pt-2 px-2 marker:text-custom-blue">
          {items.map((item, index) => (
            <li key={index} className="text-sm text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </IonCardContent>
    </IonCard>
  );
};
interface CancellationPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const CancellationPolicyModal: React.FC<CancellationPolicyModalProps> = ({ isOpen, onClose }) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title="Cancellation Policy">
      <div className="text-gray-800 text-sm font-inter space-y-1 px-2 ">
        {/* Instant Services */}
        <div className="">
          <h3 className="font-semibold text-base text-[#9095A1FF]">
            Instant Services
          </h3>
          <ul className="list-disc list-inside mt-2 space-y-1 text-custom-black">
            <li>
              Free cancellation up to 3+ hours before service time of the
              Scheduled slot (Plumbing / Electrician / Cleaner & Garden
              services)
            </li>
            <li>
              Cancellation within 1hr of the scheduled slot for (Plumbing /
              Appliances / Electrical / Gardening & Cleaning){" "}
              <span className="font-bold">30%</span> of the total service
            </li>
          </ul>
        </div>

        {/* Scheduled Services */}
        <div>
          <h3 className="font-semibold text-base text-[#9095A1FF] pt-2">
            Scheduled Services
          </h3>
          <ul className="list-disc list-inside mt-2 space-y-1 text-custom-black">
            <li>Free cancellation up to 7 days before the service</li>
            <li>25% fee for cancellations 2–6 days before service</li>
            <li>50% fee for cancellations 1 day before service</li>
            <li>100% fee for same-day cancellations</li>
            <li>Refunds will be processed within 3–5 business days</li>
          </ul>
        </div>
      </div>
    </CustomModal>
  );
};
interface TermsConditionsPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const TermsConditionsPolicyModal: React.FC<TermsConditionsPolicyModalProps> = ({ isOpen, onClose }) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title="Tems and Conditions">
      <div className=" px-3 pb-3">
        <h5 className="text-custom-black leading-5 text-sm font-inter">
          By clicking 'Select Agent', you acknowledge and agree to receive
          samples from JBCONX, and you consent to the collection, use, and
          sharing of your data with third-party partners, in compliance with
          applicable laws
        </h5>
      </div>
    </CustomModal>
  );
};
interface ServiceRepairFormProps {
  options: { title: string; options: string[] }[];
  onProceed: (data: { issueType: string[]; requestType: string; machineType: string | null }) => void;
}
export const ServiceRepairForm: React.FC<ServiceRepairFormProps> = ({
  options,
  onProceed,
}) => {
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  const [machineType, setMachineType] = useState<string | null>(null);
  const [requestType, setRequestType] = useState("Service");

  const toggleIssue = (issue: string) => {
    setSelectedIssues((prev) =>
      prev.includes(issue) ? prev.filter((i) => i !== issue) : [...prev, issue]
    );
  };

  const handleProceed = () => {
    // If no issues selected
    if (selectedIssues.length === 0) {
      alert("Please pick at least one issue");
      return;
    }

    // If machineType is part of options but none selected
    if (options.some((o) => o.title === "Machine Type") && !machineType) {
      alert("Please pick a machine type");
      return;
    }

    // If no requestType 
    if (!requestType) {
      alert("Please select a request type");
      return;
    }


    onProceed({
      issueType: selectedIssues,
      machineType,
      requestType,
    });
  };


  return (
    <div className="px-4 space-y-4 font-inter">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Issue Type (always present) */}
        {options.find((o) => o.title === "Issue Type") && (
          <div>
            <h3 className="text-lg font-medium text-custom-black">Issue Type</h3>
            <div className="flex flex-col mt-2 space-y-2">
              {options
                .find((o) => o.title === "Issue Type")
                ?.options.map((opt, idx) => (
                  <label
                    key={idx}
                    className="flex items-center space-x-2 text-sm !text-[#6096BAFF]"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 border border-[#6096BAFF] rounded
                               checked:bg-[#6096BAFF] checked:border-[#6096BAFF]
                               relative checked:after:content-['✓']
                               checked:after:absolute checked:after:inset-0
                               checked:after:flex checked:after:items-center
                               checked:after:justify-center checked:after:text-white
                               checked:after:text-xs"
                      checked={selectedIssues.includes(opt)}
                      onChange={() => toggleIssue(opt)}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
            </div>
          </div>
        )}

        {/* Machine Type (only for Refrigerator) */}
        {options.find((o) => o.title === "Machine Type") && (
          <div>
            <h3 className="text-lg font-medium text-custom-black">Machine Type</h3>
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              {options
                .find((o) => o.title === "Machine Type")
                ?.options.map((opt, idx) => (
                  <label
                    key={idx}
                    className="flex items-center space-x-1 text-sm !text-[#6096BAFF]"
                  >
                    <input
                      type="radio"
                      name="machineType"
                      value={opt}
                      checked={machineType === opt}
                      onChange={() => setMachineType(opt)}
                      className="w-3 h-3 border border-[#6096BAFF] rounded
                               checked:bg-[#6096BAFF] checked:border-[#6096BAFF]
                               relative checked:after:content-['✓']
                               checked:after:absolute checked:after:inset-0
                               checked:after:flex checked:after:items-center
                               checked:after:justify-center checked:after:text-white
                               checked:after:text-xs"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
            </div>
          </div>
        )}
      </div>
      {/* Request Type (always present) */}
      {options.find((o) => o.title === "Request Type") && (
        <div>
          <h3 className="text-lg font-medium text-custom-black">Request Type</h3>
          <div className="flex items-center gap-4 mt-2">
            {options
              .find((o) => o.title === "Request Type")
              ?.options.map((opt, idx) => (
                <label
                  key={idx}
                  className="flex items-center space-x-1 text-sm text-gray-700"
                >
                  <input
                    type="radio"
                    name="requestType"
                    value={opt}
                    checked={requestType === opt}
                    onChange={() => setRequestType(opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
          </div>
        </div>
      )}

      {/* Proceed Button */}
      <div className="flex justify-end">
        <CustomButton
          text="Proceed to cart"
          icon="cartOutline"
          className="text-xs text-white !bg-custom-blue !py-2 !w-36 !h-9"
          onClick={handleProceed}
        />
      </div>
    </div>
  );
};

