interface TagProps {
  color: 'neutral' | 'blue' | 'green' | 'red';
  content: string;
  customClass?: string;
  onClick?: () => void;
}

export function Tag(props: TagProps) {
  const { color, content, customClass, onClick } = props;

  const isClickable = onClick !== undefined;
  const cursorVisible = isClickable ? 'cursor-pointer' : '';

  interface Classes {
    [key: string]: string | object;
  }

  const classes: Classes = {
    neutral: 'bg-primary/[.15] text-f-primary',
    blue: 'bg-blue-ateneo/[.15] text-blue-ateneo',
    green: 'bg-green-sheen/[.15] text-green-sheen',
    red: 'bg-red-crimson/[.15] text-red-crimson',
  };

  const colorStates: Classes = {
    neutral: 'hover:bg-primary/20 active:bg-primary/30',
    blue: 'hover:bg-blue-ateneo/20 active:bg-blue-ateneo/30',
    green: 'hover:bg-green-sheen/20 active:bg-green-sheen/30',
    red: 'hover:bg-red-crimson/20 active:bg-red-crimson/30',
  };

  const addColorState = isClickable ? colorStates[color] : '';

  return (
    <p
      data-testid="tag"
      className={`rac-caption px-3 py-1 rounded-full w-fit
        ${classes[color]} ${addColorState} ${cursorVisible}
        ${customClass}`}
    >
      {content}
    </p>
  );
}
