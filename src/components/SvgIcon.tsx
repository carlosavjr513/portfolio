import { icons } from "~/utils/icons";

interface IconProps {
  name: string;
  className: string;
  size: number;
}

const SvgIcon = ({ name, className, size }: IconProps) => {
  const selectedIcon = icons.find((icon) => icon.name === name);

  if (!selectedIcon) {
    console.warn(`Icon '${name}' not found`);
    //prettier-ignore
    return <div className={`${className} text-center`}>No<br />Icon</div>;
  }

  const { viewBox, scale, path, stroke, fill, fillRule } = selectedIcon;

  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={`0 0 ${viewBox} ${viewBox}`}
      >
        <g transform={`scale(${scale},${scale})`}>
          <path
            d={path}
            stroke={stroke ?? "none"}
            fill={fill}
            fillRule={fillRule as "nonzero" | "evenodd" | "inherit"}
          />
        </g>
      </svg>
    </div>
  );
};

export default SvgIcon;
