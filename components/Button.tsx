
import Link from "next/link";
import React from "react";
import Image from "next/image";

const sizeClasses = {
  small: "px-4 h-10 text-sm",
  medium: "pl-[16px] pr-[8px] h-12 text-[16px]",
  large: "px-8 h-16 text-lg",
};

const radiusClasses = {
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const variantClasses = {
  gradient:
    "bg-gradient-to-r from-[#F05323] to-[#8A3014]  text-white hover:scale-105  transition-transform duration-300 px-6 py-2 rounded-4xl font-semibold",
  glass: "bg-white/30 backdrop-blur-md border border-white/40 rounded-4xl  text-white font-semibold hover:bg-white/40   hover:scale-105 transition-transform duration-300",
};

const iconRotateClasses = {
  0: "rotate-0",
  45: "rotate-[-45deg]",
  60: "rotate-[-60deg]",
  90: "rotate-[-90deg]"
};
interface ButtonProps {
  text?: string; // make it optional for some styles
  href?: string;
  icon?: string;
  hoverIcon?: string;
  showIcon?: boolean;
  size?: "small" | "medium" | "large";
  radius?: "md" | "lg" | "full";
  variant?: "gradient" | "glass";  // default variant is gradient
  className?: string;
  iconRotate?: 0 | 45 | 60 | 90 | -45 | -60 | -90; /* use rotation for arrow forward icon */
  onClick?: () => void;
}

// eslint-disable-next-line react/display-name
const Button: React.FC<ButtonProps> = React.memo(
  ({
    text,
    href,
    icon,
    hoverIcon,
    showIcon = true,
    size = "small",
    radius = "full",
    variant = "gradient",
    className = "",
    iconRotate = 0,   //default no rotation
    onClick,
  }) => {
    const buttonClasses = `
      group items-center gap-2
      transition-all duration-300
      ${sizeClasses[size]}
      ${radiusClasses[radius]}
      ${variantClasses[variant]}
      ${className}
    `;

    const content = (
      <>
        <span>{text}</span>

        {showIcon && icon && (
          <span className="relative ">
            {/* Default Icon */}
            {/* Icon rotation added */}
          <span>
            <Image 
              src={icon} 
              alt="icon" 
              width={42} 
              height={34}
              className={`transition-transform duration-300 ${iconRotateClasses[iconRotate ?? 0]}`} />
          </span>

 
            {hoverIcon && (
              <span className="hidden group-hover:block sm:p-20  ">
                <Image src={hoverIcon} alt="hover icon" fill />
              </span>
            )}
          </span>
        )}
      </>
    );

    return href ? (
      <Link href={href} className={buttonClasses} onClick={onClick}>
        {content}
      </Link>
    ) : (
      <button className={buttonClasses} onClick={onClick}>
        {content}
      </button>
    );
  }
);

export default Button;
