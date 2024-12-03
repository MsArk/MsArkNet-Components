interface IconProps {
  type?: 'regular' | 'light' | 'solid';
  height?: number;
  color?: string;
  rotate?: 0 | 45 | 90 | 135 | 180 | 225 | 270 | 315 | 360;
  loop?: boolean;
}

export const Search: React.FC<IconProps> = ({
  type = 'regular',
  height = 24,
  color = '#000',
  rotate = 0,
  loop = false,
}) => {
  const paths: Record<string, string> = {
    regular: 'M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z',
  };

  const rotationClass = rotate ? `rotate-${rotate}` : '';
  const loopClass = loop ? 'loop' : '';

  return (
    <svg
      width={`${height}px`}
      height={`${height}px`}
      viewBox='0 -960 960 960'
      className={`${rotationClass} ${loopClass}`}
    >
      <path fill={color} d={paths[type]} />
    </svg>
  );
};

export default Search;
