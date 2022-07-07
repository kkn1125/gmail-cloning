import React from "react";

interface LogoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

function Logo({ src, alt, width, height }: LogoProps): React.ReactElement {
  return <img src={src} alt={alt} width={width} height={height} />;
}

Logo.defaultProps = {
  src: "",
  alt: "sample",
  width: 100,
  height: 100,
};

export default Logo;
