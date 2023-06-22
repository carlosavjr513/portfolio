import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="p-5">
      <div className="overflow-hidden rounded-md bg-white/80 shadow-md shadow-black transition-shadow duration-300 ease-in-out hover:bg-white hover:shadow-lg hover:shadow-black">
        {children}
      </div>
    </div>
  );
};

export default Card;
