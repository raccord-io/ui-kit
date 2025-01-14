import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

const TextArea = forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      data-testid="textarea"
      className={cn(
        'flex min-h-[80px] w-full rounded-md border border-input bg-bg-primary px-3 py-2 text-base ring-offset-bg-primary placeholder:text-text-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
TextArea.displayName = 'TextArea';

export { TextArea };
