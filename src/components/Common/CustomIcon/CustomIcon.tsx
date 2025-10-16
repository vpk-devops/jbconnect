// import React from 'react';
// import { svgIconMap } from '/assets/svg/svg-icons'


// const normalizeKey = (path: string) =>
//   path.replace('./', '').replace('.svg', '');

// const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {};

// for (const path in svgIconMap) {
//   const name = normalizeKey(path);
//   iconMap[name] = svgIconMap[path];
// }console.log("Available icons:", Object.keys(iconMap));
// console.log("Rendering icon:", name);

// export type IconName = keyof typeof iconMap;

// interface CustomIconProps extends React.SVGProps<SVGSVGElement> {
//   name: IconName;
  
// }

// const CustomIcon: React.FC<CustomIconProps> = ({ name, ...props }) => {
//   console.log("Rendering icon:", name);

//   const IconComponent = iconMap[name];

//   if (!IconComponent) return null;

//   return <IconComponent {...props} />;
// };

// export default CustomIcon;
