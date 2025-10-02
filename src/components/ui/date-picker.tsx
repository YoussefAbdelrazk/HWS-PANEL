import { Button } from '@/components/ui/button';
import { FormControl } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from './calendar';

interface DatePickerProps {
  field: {
    value: string;
    onChange: (value: string) => void;
  };
}

export default function DatePicker({ field }: DatePickerProps) {
  return (
    <div className='w-full h-12  rounded-md border-gray-300'>
      <Popover>
        <PopoverTrigger asChild className=''>
          <FormControl className='w-full h-full '>
            <Button
              variant={'outline'}
              className={cn(
                'w-full h-full pl-3 text-left font-normal',
                !field.value && 'text-muted-foreground',
              )}
            >
              {field.value ? (
                format(new Date(field.value + 'T00:00:00'), 'PPP')
              ) : (
                <span>Pick a date</span>
              )}
              <CalendarIcon className='ml-auto h-4 w-4 opacity-50 text-yellow-500' />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar
            mode='single'
            selected={field.value ? new Date(field.value + 'T00:00:00') : undefined}
            onSelect={date => {
              if (date) {
                // Use local date formatting to avoid timezone issues
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                field.onChange(`${year}-${month}-${day}`);
              } else {
                field.onChange('');
              }
            }}
            disabled={(date: Date) => date > new Date() || date < new Date('1900-01-01')}
            captionLayout='dropdown'
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
