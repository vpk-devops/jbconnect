import { IonIcon } from '@ionic/react';
import CustomButton from '../../components/Common/CustomButton/CustomButton';
import { arrowForward, star } from 'ionicons/icons';
// Hero Card
interface HeroCardProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  description: string;
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
  className?: string;
  leftBend?: boolean;
}
export const HeroCard: React.FC<HeroCardProps> = ({
  backgroundImage,
  title,
  subtitle,
  description,
  backgroundColor = '#274C77FF',
  textColor = '#FFFFFFFF',
  fontFamily = 'Aclonica',
  className = '',
  leftBend = false,
}) => {
  return (
    <div className={`relative h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] overflow-hidden ${className}`}>
      {/* Background Container  */}
      <div
        className="absolute"
        style={{
          position: 'absolute',
          top: '-5px',
          left: '0px',
          width: '100%',
          height: '88%',
          background: backgroundColor,
          borderRadius: leftBend ? '0px 0px 0px 89px' : '0px 0px 89px 0px'
        }}
      />
      {/* Main Image */}
      <div
        className="absolute bg-cover bg-center bg-no-repeat"
        style={{
          position: 'absolute',
          top: '-20px',
          left: '0px',
          width: '100%',
          height: '96%',
          backgroundImage: `url('${backgroundImage}')`,
          borderRadius: leftBend ? '0px 0px 0px 96px' : '0px 0px 96px 0px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Text Overlay  */}
      <div
        className="absolute text-white px-2 sm:px-4 md:px-6 lg:px-8"
        style={{
          position: 'absolute',
          top: '19%',
          left: '3%',
          width: '87%',
          fontFamily: fontFamily,
          fontSize: 'clamp(12px, 6vw, 40px)',
          lineHeight: '1.3',
          fontWeight: '400',
          color: textColor
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '30px',
            left: '12px',
            width: '336px',
            height: '57px',
            fontFamily: 'Aclonica',
            fontSize: '20px',
            fontWeight:'bold',
            lineHeight: '28px',
            color: '#FFFFFFFF'
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              position: 'absolute',
              top: '60px',
              left: '12px',
              width: '336px',
              height: '28px',
              fontFamily: 'Aclonica',
              fontSize: '20px',
              lineHeight: '28px',
              fontWeight: 'bold',
              color: '#FFFFFFFF'
            }}
          >
            {subtitle}
          </div>
        )}
        <div
          style={{
            position: 'absolute',
            top: '85px',
            left: '12px',
            width: '336px',
            height: '20px',
            fontFamily: 'Actor',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: 'bold',
            color: '#FFFFFFFF'
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
};
// Profile Card
interface ProfileCardProps {
  id: number;
  image: string;
  onClick?: () => void;
  imageScale?: number;
  imageTopOffsetPx?: number;
  imageLeftOffsetPx?: number;
}
export const ProfileCard: React.FC<ProfileCardProps> = ({
  id,
  image,
  onClick,
  imageScale = 1,
  imageTopOffsetPx = -12,
  imageLeftOffsetPx = 3,
}) => {
  return (
    <div
      key={id}
      onClick={onClick}
      className="relative cursor-pointer hover:opacity-80 transition-opacity duration-200"
      style={{
        position: 'relative',
        width: '112px',
        height: '128px',
        background: '#DEE1E6FF',
        borderRadius: '6px',
        boxShadow: '0px 8px 17px #171a1f26, 0px 0px 2px #171a1f1F'
      }}
    >
      {/* Profile Image */}
      <div
        className="absolute overflow-hidden"
        style={{
          position: 'absolute',
          top: `${imageTopOffsetPx}px`,
          left: `${imageLeftOffsetPx}px`,
          width: '116px',
          height: '151px',
          borderRadius: '0px'
        }}
      >
        <img
          src={image}
          alt="Profile"
          className="w-full h-full object-cover"
          style={{ transform: `scale(${imageScale})`, transformOrigin: 'center center' }}
        />
      </div>
    </div>
  );
};
// Service Card
interface ServiceCardProps {
  id: number;
  title: string;
  image: string;
  route: string;
  onClick: (route: string) => void;
}
export const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  image,
  route,
  onClick,
}) => {
  return (
    <div
      key={id}
      onClick={() => onClick(route)}
      className="relative cursor-pointer hover:opacity-80 transition-opacity duration-200"
      style={{
        position: 'relative',
        width: '157px',
        height: '157px',
        background: '#DEE1E6FF',
        borderRadius: '12px',
        boxShadow: '0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1F'
      }}
    >
      {/* Image */}
      <div
        className="absolute overflow-hidden"
        style={{
          position: 'absolute',
          top: '16px',
          left: '4px',
          width: '75px',
          height: '126px',
          borderRadius: '38px'
        }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale"
        />
      </div>
      {/* Arrow Icon */}
      <IonIcon
        icon={arrowForward}
        className="absolute"
        style={{
          position: 'absolute',
          top: '23%',
          left: '54%',
          width: '15%',
          height: '15%',
          fill: '#171A1FFF'
        }}
      />
      {/* Title  */}
      <div
        className="absolute"
        style={{
          position: 'absolute',
          top: '61px',
          left: '85px',
          width: '72px',
          fontFamily: 'Inter',
          fontSize: '11px',
          lineHeight: '18px',
          fontWeight: '700',
          color: '#171A1FFF'
        }}
      >
        {title.split(' ').map((word, index) => (
          <div key={index}>{word}</div>
        ))}
      </div>
    </div>
  );
};

// Option Card (used in jbconex pages)
interface FeatureCardProps {
  icon: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
  variant?: 'primary' | 'muted';
  size?: 'md' | 'sm';
}
export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  subtitle,
  onClick,
  variant = 'primary',
  size = 'md',
}) => {
  if (size === 'sm') {
    return (
      <div className="w-full rounded-xl border border-[#E2E8F0] bg-[#E8F1FB]/60 px-3 py-3 flex items-start gap-3 shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F]" onClick={onClick} role={onClick ? 'button' : undefined}>
        <div className="w-10 h-10 rounded-md bg-[#CFE3FA] flex items-center justify-center">
          <IonIcon icon={icon} className="text-[#274C77] text-lg" />
        </div>
        <div>
          <div className="text-[#0F172A] text-[14px] font-bold">{title}</div>
          <div className="text-[#64748B] text-[11px] leading-4">{subtitle}</div>
        </div>
      </div>
    );
  }
  const isPrimary = variant === 'primary';
  const containerClass = isPrimary
    ? 'w-full rounded-[12px] bg-[#E9F4FF] border border-[#E6EEF6] p-4 flex items-center gap-4 shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F]'
    : 'w-full rounded-[12px] bg-[#CBD5E1]/60 border border-[#CBD5E1] p-4 flex items-center gap-4';
  const iconWrapClass = isPrimary
    ? 'w-[56px] h-[56px] rounded-[12px] bg-[#CDE6FB] flex items-center justify-center'
    : 'w-[56px] h-[56px] rounded-[12px] bg-[#CDE6FB] flex items-center justify-center opacity-70';
  return (
    <div className={containerClass} onClick={onClick} role={onClick ? 'button' : undefined}>
      <div className={iconWrapClass}>
        <IonIcon icon={icon} className="text-[#274C77] text-2xl" />
      </div>
      <div className="flex-1">
        <div className="text-[#171A1F] font-inter font-semibold text-[16px] leading-[24px]">{title}</div>
        <div className="text-[#6C737F] font-inter text-[12px] leading-[18px]">{subtitle}</div>
      </div>
    </div>
  );
};
// expert advice card
interface ExpertAdviceCardProps {
  imageSrc: string;
  titleLine1: string;
  titleLine2: string;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
}
export const ExpertAdviceCard: React.FC<ExpertAdviceCardProps> = ({
  imageSrc,
  titleLine1,
  titleLine2,
  buttonText,
  onButtonClick,
  className = '',
}) => {
  return (
    <div className={`w-full max-w-sm mx-auto ${className}`}>
      <div className="relative w-full bg-[#A3CEF1] rounded-[12px] px-4 py-3" style={{ minHeight: '115px' }}>
        <img src={imageSrc} alt="expert" className="absolute top-[9px] left-[18px] w-[72px] h-[97px] rounded-[36px] object-cover" />
        <div className="absolute" style={{ top: '22px', left: '114px', right: '12px' }}>
          <div style={{ fontFamily: 'ABeeZee', fontSize: '24px', lineHeight: '36px', fontWeight: 400, color: '#274C77FF' }}>
            {titleLine1}
            <br />
            {titleLine2}
          </div>
        </div>
        <div className="absolute right-3" style={{ top: '94px' }}>
          <CustomButton
            text={buttonText}
            icon={arrowForward}
            onClick={onButtonClick}
            className="h-[18px] px-2 flex items-center gap-1 justify-center font-inter text-[7px] leading-[12px] text-white bg-[#274C77] rounded-[4px] hover:bg-[#1B3756] active:bg-[#14273D]"
          />
        </div>
      </div>
    </div>
  );
};
// Overlapping Profile Card
interface OverlapProfileCardProps {
  imageSrc: string;
  availabilityText?: string;
  code?: string;
  rating?: number; // 0-5
  onGetInTouch?: () => void;
  onViewProfile?: () => void;
  cardWidthPx?: number;
  cardHeightPx?: number;
  imageTopOffsetPx?: number;
  imageRightOffsetPx?: number;
  imageWidthPx?: number;
  imageHeightPx?: number;
}
export const OverlapProfileCard: React.FC<OverlapProfileCardProps> = ({
  imageSrc,
  availabilityText = 'Available to Hire',
  code = '#223455',
  rating = 4,
  onGetInTouch,
  onViewProfile,
  cardWidthPx = 211,
  cardHeightPx = 207,
  imageTopOffsetPx = -135,
  imageRightOffsetPx = -26,
  imageWidthPx = 265,
  imageHeightPx = 403,
}) => {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);
  return (
    <div
      className="relative"
      style={{
        width: `${cardWidthPx}px`,
        height: `${cardHeightPx}px`,
        background: '#F3F4F6FF',
        borderRadius: '12px',
        boxShadow: '0px 17px 35px #171a1f3D, 0px 0px 2px #171a1f1F',
        overflow: 'visible',
      }}
    >
      <img
        src={imageSrc}
        alt="profile"
        style={{
          position: 'absolute',
          top: `${imageTopOffsetPx}px`,
          right: `${imageRightOffsetPx}px`,
          width: `${imageWidthPx}px`,
          height: `${imageHeightPx}px`,
          objectFit: 'cover',
          zIndex: 1,
        }}
      />
      {/* Availability */}
      <div style={{ position: 'absolute', top: '12px', left: '12px', color: '#274C77FF', fontSize: '8px', lineHeight: '12px', fontFamily: 'Inter' }}>Availability</div>
      <div
        style={{
          position: 'absolute',
          top: '26px',
          left: '12px',
          height: '20px',
          padding: '0 8px',
          background: '#DEE1E6FF',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#171A1F',
          fontFamily: 'Inter',
          fontSize: '12px',
          lineHeight: '18px',
          fontWeight: 400,
        }}
      >
        {availabilityText}
      </div>
      {/* Code */}
      <div style={{ position: 'absolute', top: '54px', left: '12px', color: '#274C77FF', fontSize: '8px', lineHeight: '12px', fontFamily: 'Inter' }}>Code</div>
      <div
        style={{
          position: 'absolute',
          top: '66px',
          left: '12px',
          height: '20px',
          padding: '0 8px',
          background: '#DEE1E6FF',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#171A1F',
          fontFamily: 'Inter',
          fontSize: '13px',
          lineHeight: '18px',
          fontWeight: 700,
          letterSpacing: '0.2px',
        }}
      >
        {code}
      </div>
      {/* Rating */}
      <div
        style={{
          position: 'absolute',
          top: '92px',
          left: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
        }}
      >
        {stars.map((filled, idx) => (
          <IonIcon key={idx} icon={star} className="text-yellow-400" style={{ fontSize: '11px', opacity: filled ? 1 : 0.4 }} />
        ))}
      </div>
      {/* Buttons */}
      <div style={{ position: 'absolute', bottom: '12px', left: '12px' }}>
        <CustomButton
          text="Get in touch"
          onClick={onGetInTouch}
          className="w-[85px] h-[22px] px-2 flex items-center justify-center text-white bg-[#274C77] rounded-[4px] text-[11px] leading-[18px] font-normal whitespace-nowrap"
        />
      </div>
      <div style={{ position: 'absolute', bottom: '12px', left: '107px' }}>
        <CustomButton
          text="View Profile"
          onClick={onViewProfile}
          className="w-[85px] h-[22px] px-2 flex items-center justify-center text-white bg-[#274C77] rounded-[4px] text-[11px] leading-[18px] font-normal whitespace-nowrap"
        />
      </div>
    </div>
  );
};

