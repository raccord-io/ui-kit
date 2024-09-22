interface DividerProps {
  color?: string;
  size?: string;
  orientation?: 'horizontal' | 'vertical';
}

export function Divider({ color, size, orientation }: DividerProps) {
  const position = orientation === 'vertical' ? 'border-l' : 'border-t';

  return (
    <hr
      className={`${size} ? ${position} : border-${size} ${color} ? border-black : border-${color}`}
    />
  );
}
