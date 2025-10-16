// src/assets/svg/svg-icons.ts
export const svgIconMap = import.meta.glob('./*.svg?react', {
  eager: true,
}) as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>;