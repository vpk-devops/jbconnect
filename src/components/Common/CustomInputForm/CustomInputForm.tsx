
import { forwardRef } from "react";
import { IonInput, IonList, IonItem, IonRadioGroup, IonRadio, IonLabel } from "@ionic/react";
import { TextFieldTypes } from "@ionic/core";
interface CustomInputFormProps {
  label: string;
  name: string;
  placeholder?: string;
  value: string | number | null | undefined;
  onChange?: (e: any) => void;
  onKeyDown?: (e: any) => void;
  onClick?: (e: any) => void;
  onFocus?: (e: any) => void;
  error?: string;
  type?: TextFieldTypes;
  className?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  maxLength?: number;
  textarea?: boolean;
  rows?: number;
  radioOptions?: Array<string | { label: string; value: string }>;
  radioValue?: string;
  onRadioChange?: (value: string) => void;
}
const CustomInputForm = forwardRef<HTMLIonInputElement | HTMLTextAreaElement, CustomInputFormProps>(
  (
    {
      label,
      name,
      placeholder,
      value,
      onChange,
      onKeyDown,
      onClick,
      onFocus,
      error,
      type = "text",
      className = "",
      icon,
      iconRight,
      maxLength,
      textarea = false,
      rows = 4,
      radioOptions,
      radioValue,
      onRadioChange
    },
    ref
  ) => {
    return (
      <div className="mb-2">
        {label && (
          <label
            htmlFor={name}
            className="block font-inter text-[16px] leading-[22px] font-medium text-custom-black mb-1.5"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && !textarea && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center pointer-events-none">
              {icon}
            </span>
          )}
          {textarea ? (
            <textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              id={name}
              name={name}
              placeholder={placeholder}
              value={value || ''}
              onChange={(e) => onChange && onChange(e)}
              onKeyDown={onKeyDown}
              onClick={onClick}
              onFocus={onFocus}
              rows={rows}
              className={`w-full rounded-[6px] font-inter text-[14px] leading-[22px] placeholder:text-[#BDC1CA] resize-none focus:outline-none focus:border-[#274C77] focus:[box-shadow:0px_0px_5px_#274c7733] ${className}`}
              style={{
                "--padding-start": "12px",
                "--placeholder-color": "#BDC1CA",
                padding: "7px 12px"
              } as React.CSSProperties}
              maxLength={maxLength}
            />
          ) : radioOptions && radioOptions.length ? (
            <IonRadioGroup
              value={radioValue}
              onIonChange={(e) => onRadioChange && onRadioChange(e.detail.value)}
            >
              <IonList className="!bg-transparent">
                {(radioOptions || []).map((opt) => {
                  const option = typeof opt === 'string' ? { label: opt, value: opt } : opt;
                  return (
                    <IonItem key={option.value} className="!bg-transparent !px-0 py-0" lines="none" style={{ ['--min-height' as any]: '24px' }}>
                      <IonRadio
                        mode="md"
                        value={option.value}
                        slot="start"
                        className="mr-1 scale-75"
                        style={{ '--color-checked': '#274C77', '--color': '#274C77' } as React.CSSProperties}
                      />
                      <IonLabel className="text-[11px] text-[#171A1F] !font-inter ml-1 !my-1 !py-0.5">{option.label}</IonLabel>
                    </IonItem>
                  );
                })}
              </IonList>
            </IonRadioGroup>
          ) : (
            <IonInput
              ref={ref as React.Ref<HTMLIonInputElement>}
              id={name}
              type={type}
              name={name}
              placeholder={placeholder}
              value={value || ''}
              onIonChange={onChange}
              onKeyDown={onKeyDown}
              onClick={onClick}
              onIonFocus={onFocus}
              className={`w-full h-9 rounded-[6px] font-inter text-[14px] leading-[22px] placeholder:text-[#BDC1CA] ${className}`}
              style={{ "--padding-start": icon ? "34px" : "12px", "--placeholder-color": "#BDC1CA" } as React.CSSProperties}
              maxlength={maxLength}
            />
          )}
          {iconRight && !textarea && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center cursor-pointer">
              {iconRight}
            </span>
          )}
        </div>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  }
);
export default CustomInputForm;