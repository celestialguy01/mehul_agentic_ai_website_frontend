import React from "react";

export default function Chatbot({
  strokeWidth = 17,
  radius = 24,
  strokeColor = "#000000",
  fillColor = "#FFFFFF",
  className = "",
  ...rest
}) {
  const VIEWBOX_WIDTH = 600;
  const VIEWBOX_HEIGHT = 720; // 1.2 ratio

  return (
    <svg
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={`w-full h-auto ${className}`}
      {...rest}
    >
      <rect
        x={strokeWidth / 2}
        y={strokeWidth / 2}
        width={VIEWBOX_WIDTH - strokeWidth}
        height={VIEWBOX_HEIGHT - strokeWidth}
        rx={radius}
        ry={radius}
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
