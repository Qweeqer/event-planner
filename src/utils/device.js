const size = {
  mobile: "320px",
  mobileMax: "479px",
  phablet: "480px",
  phabletMax: "767px",
  tablet: "768px",
  tabletMax: "1279px",
  desktop: "1280px",
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  mobileMax: `(max-width: ${size.mobileMax})`,

  phablet: `(min-width: ${size.phablet})`,
  phabletMax: `(min-width:${size.phablet}) and (max-width:${size.phabletMax})`,
  phabletAndMobileMax: `(max-width:${size.phabletMax})`,

  tablet: `(min-width: ${size.tablet})`,
  tabletMax: `(min-width:${size.tablet}) and (max-width:${size.tabletMax})`,

  desktop: `(min-width: ${size.desktop})`,
};
