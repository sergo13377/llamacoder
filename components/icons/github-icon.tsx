import React from 'react';

export default function CustomIcon(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="/logox.png" // Путь к вашему изображению
      alt="Telegram Logo"
      width={16}  // Размер изображения
      height={16} // Размер изображения
      {...props}
    />
  );
}