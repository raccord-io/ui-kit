'use client';

import 'react-day-picker/dist/style.css';
import * as React from 'react';

import { fr } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '../../lib/utils';
import { buttonVariants } from '../Button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const CustomNavigation = ({
    onPreviousClick,
    onNextClick,
    previousMonth,
    nextMonth,
  }: {
    onPreviousClick?: React.MouseEventHandler<HTMLButtonElement>;
    onNextClick?: React.MouseEventHandler<HTMLButtonElement>;
    previousMonth?: Date;
    nextMonth?: Date;
  }) => (
    <div className="space-x-1 flex items-center relative">
      <button
        onClick={(event) => onPreviousClick && onPreviousClick(event)}
        disabled={!previousMonth}
        className={cn(
          buttonVariants({ variant: 'secondary', model: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1 top-1 z-10',
        )}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={(event) => onNextClick && onNextClick(event)}
        disabled={!nextMonth}
        className={cn(
          buttonVariants({ variant: 'secondary', model: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1 top-1 z-10',
        )}
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );

  return (
    <DayPicker
      locale={fr}
      weekStartsOn={1}
      timeZone="Europe/Paris"
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col space-y-4 sm:space-x-0 sm:space-y-0 w-fit',
        month: 'space-y-4',
        month_caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center h-fit',
        month_grid: 'w-full border-collapse space-y-1',
        weekdays: 'flex',
        weekday: 'text-gray-300 rounded-md w-9 font-normal text-[0.8rem]',
        week: 'flex w-full mt-2',
        day: cn(
          buttonVariants({ variant: 'secondary' }),
          'h-9 w-9 text-center text-sm p-0 relative rounded-none',
        ),
        day_button: cn(
          // buttonVariants({ variant: 'ghost' }),
          'h-full w-full font-normal hover:bg-button-primary hover:text-white rounded-md relative focus:bg-button-primary focus:text-white',
        ),
        range_start: '!rounded-r-none rounded-l-md',
        range_end: '!rounded-l-none rounded-r-md',
        selected:
          '!bg-button-primary text-white hover:bg-button-primary hover:text-white focus:bg-button-primary focus:text-white !rounded-md',
        today: 'bg-gray-100 aria-selected:bg-button-primary !rounded-md',
        outside:
          'text-gray-500 opacity-50 aria-selected:bg-button-primary/50 aria-selected:text-green-400 aria-selected:opacity-30 rounded-md',
        disabled: 'text-muted-foreground opacity-50',
        range_middle:
          '!bg-button-primary/50 aria-selected:text-white aria-selected:!rounded-none !rounded-none',
        hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Nav: CustomNavigation,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
