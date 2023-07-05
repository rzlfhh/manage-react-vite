import React from "react";

function Button({ children, color, size, href, type, position }) {
  const btnColor = {
    primary: "bg-bright-red text-white",
    white: "bg-vl-gray text-bright-red",
  };

  const btnSize = {
    sm: "text-sm px-6 py-2",
    md: "text-sm px-8 py-3",
  };

  const btnType = {
    label: "cursor-text",
  };

  const btnPosition = {
    start: "mx-0",
    center: "mx-auto",
  };

  const colorClassName = btnColor[color || "primary"];
  const sizeClassName = btnSize[size || "md"];
  const buttonType = btnType[type || ""];
  const buttonPosition = btnPosition[position || "center"];

  return (
    <a
      href={href || "#"}
      className={
        "rounded-full w-fit font-bold block " +
        colorClassName +
        " " +
        sizeClassName +
        " " +
        buttonType +
        " " +
        buttonPosition
      }
    >
      {children}
    </a>
  );
}

export default Button;
