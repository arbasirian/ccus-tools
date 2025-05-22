import { useState, useEffect } from 'react';

interface DeviceLayout {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLandscape: boolean;
  width: number;
  height: number;
}

const breakpoints = {
  mobile: 768,
  tablet: 1024,
};

export const useDeviceLayout = (): DeviceLayout => {
  const [layout, setLayout] = useState<DeviceLayout>({
    isMobile: window.innerWidth <= breakpoints.mobile,
    isTablet: window.innerWidth > breakpoints.mobile && window.innerWidth <= breakpoints.tablet,
    isDesktop: window.innerWidth > breakpoints.tablet,
    isLandscape: window.innerWidth > window.innerHeight,
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setLayout({
        isMobile: window.innerWidth <= breakpoints.mobile,
        isTablet: window.innerWidth > breakpoints.mobile && window.innerWidth <= breakpoints.tablet,
        isDesktop: window.innerWidth > breakpoints.tablet,
        isLandscape: window.innerWidth > window.innerHeight,
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return layout;
};
