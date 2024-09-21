import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import { Input } from '../Input';
import { Button } from '../Button';

export default { title: 'Components/Popover', component: Popover };

export const _Popover = {
  render: () => (
    <div className="">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="w-fit">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-f-primary">
                Set the dimensions for the layer.
              </p>
            </div>
            <div className="grid gap-2">
              <Input id="width" placeholder="Enter text..." value="" />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  ),
};
