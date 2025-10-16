declare module '*.svg?react' {
  import * as React from 'react';
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}
declare global {
  interface Window {
    mapInstance: google.maps.Map;
  }
}