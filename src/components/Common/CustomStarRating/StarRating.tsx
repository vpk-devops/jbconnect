import { IonIcon } from "@ionic/react";
import { star, starOutline } from "ionicons/icons";
import { useState } from "react";

interface StarRatingProps {
  initialRating?: number;
  onRate?: (rating: number) => void;
  editable?: boolean;
  showValue?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  initialRating = 0,
  onRate,
  editable = true,
  showValue = false,
}) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number>(initialRating);

  const handleClick = (rating: number) => {
    if (!editable) return;
    setSelected(rating);
    onRate?.(rating);
  };

  const handleHover = (rating: number) => {
    if (!editable) return;
    setHovered(rating);
  };

  const displayRating = hovered !== null ? hovered : selected;

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((i) => {
        const isFull = displayRating >= i;
        const isHalf = !isFull && displayRating + 1 > i; // fractional star

        return (
          <div
            key={i}
            className={`relative w-4 h-4 ${
              editable ? "cursor-pointer" : "cursor-default"
            }`}
            onClick={() => handleClick(i)}
            onMouseEnter={() => handleHover(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Empty star */}
            <IonIcon
              icon={starOutline}
              className="absolute top-0 left-0 text-gray-300 w-4 h-4"
            />
            {/* Full star */}
            {(isFull || isHalf) && (
              <IonIcon
                icon={star}
                className="absolute top-0 left-0 text-yellow-500 w-4 h-4"
                style={isHalf ? { clipPath: "inset(0 50% 0 0)" } : {}}
              />
            )}
          </div>
        );
      })}

      {showValue && (
        <span className="text-[#9095A1FF] text-[11px] ml-2">
          {displayRating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default StarRating;
