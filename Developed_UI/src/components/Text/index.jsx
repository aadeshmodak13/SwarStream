import React from "react";

const sizeClasses = {
  txtPTSansBold16Gray700: "font-bold font-ptsans",
  txtPTSansBoldItalic30: "font-bold font-ptsans italic",
  txtPTSansBold16Gray600: "font-bold font-ptsans",
  txtPTSansBold24: "font-bold font-ptsans",
  txtPTSansBold14: "font-bold font-ptsans",
  txtPTSansBold36: "font-bold font-ptsans",
  txtPTSansRegular24: "font-normal font-ptsans",
  txtPTSansRegular16: "font-normal font-ptsans",
  txtPTSansRegular16WhiteA700: "font-normal font-ptsans",
  txtPTSansBold16: "font-bold font-ptsans",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
