import { useMediaQuery } from "react-responsive";

function useResponsiveBreakpoints() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isTabletMax = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1279px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  const responsiveStatus = {
    isMobile,
    isTablet,
    isTabletMax,
    isDesktop,
  };

  return responsiveStatus;
}

export default useResponsiveBreakpoints;
