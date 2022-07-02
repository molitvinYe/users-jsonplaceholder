import React from "react";
import styles from "./CustomButton.module.css";

interface CustomButtonType {
  click: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children: JSX.Element | JSX.Element[] | string | string[];
}

const CustomButton: React.FC<CustomButtonType> = ({
  children,
  click,
  className,
}) => {
  let classNameStyles = styles.customButton;
  if (className) classNameStyles += ` ${className}`;
  return (
    <button className={classNameStyles} onClick={click}>
      {children}
    </button>
  );
};

export default CustomButton;
