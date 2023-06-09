import type { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="w-11/12 rounded-md bg-white/80 p-2 shadow-lg shadow-black transition-shadow duration-300 ease-in-out hover:shadow-xl hover:shadow-black">
      {children}
    </div>
  );
};

export default Card;
