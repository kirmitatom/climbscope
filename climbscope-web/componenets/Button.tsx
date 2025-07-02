import Image from 'next/image';
import React from 'react'

type ButtonProps = {
    type: "button" | "submit";
    title: string;
    icon?: string;
    variant: "btn_dark_green"

}
const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button type={type} className={`flexCenter gap-2 rounded-full border ${variant}`}>
      {icon && (
        <Image 
          src={icon} 
          alt={title} 
          width={24} 
          height={24}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      )}
      <span className='bold-16 whitespace-nowrap'>{title}</span>
    </button>
  );
};
export default Button