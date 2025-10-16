import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface CustomSwiperProps {
    items: any[];
    slidesPerView?: number;
    spaceBetween?: number;
    autoplay?: boolean;
    pagination?: boolean;
    renderItem: (item: any, index: number) => React.ReactNode;
    breakpoints?: Record<string, any>;
    className?: string;
}

const CustomSwiperComponent: React.FC<CustomSwiperProps> = ({
    items,
    slidesPerView = 1,
    spaceBetween = 16,
    autoplay = false,
    pagination = false,
    breakpoints,
    renderItem,
    className = "",
}) => {
    const maxSlidesPerView = React.useMemo(() => {
        if (!breakpoints) return slidesPerView;
        return Math.max(
            slidesPerView,
            ...Object.values(breakpoints).map((bp: any) => bp.slidesPerView || 1)
        );
    }, [breakpoints, slidesPerView]);

    const shouldLoop = items.length > maxSlidesPerView;

    // const shouldLoop = items.length > slidesPerView;

    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            loop={shouldLoop}
            autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
            //   pagination={pagination ? { clickable: true } : false}
            pagination={
                pagination
                    ? {
                        clickable: true,
                        el: ".tailwind-pagination",
                        renderBullet: (index, className) => {
                            return `<span class="${className}"></span>`;
                        },
                    }
                    : false
            }
            breakpoints={breakpoints}
            className={className}
        >
            {items.map((item, index) => (
                <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CustomSwiperComponent;
