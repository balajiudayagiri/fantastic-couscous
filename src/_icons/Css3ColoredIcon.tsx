import React from "react";
import PropTypes from "prop-types";
import { IconProps } from "./Icon.types";

const Css3ColoredIcon = ({ width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" />
      <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" />
      <path
        d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
        fill="white"
      />
    </svg>
  );
};

Css3ColoredIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Css3ColoredIcon.defaultProps = {
  width: "50", // Default width as a string
  height: "50", // Default height as a string
};

export default Css3ColoredIcon;
