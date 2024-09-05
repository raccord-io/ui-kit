import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import { Input } from '../Input';

export default { title: 'Components/Popover', component: Popover };

export const _Popover = {
  render: () => (
    <div className="">
      <Popover>
        <PopoverTrigger asChild>
          <button
            className={`m-auto default-button default-icon rounded-xl bg-green-r-300/[.15]
              border-[.2px] border-green-r-300 text-green-r-300
              hover:bg-green-r-300/20
              disabled:bg-green-r-300/10 disabled:border-green-r-300/20 disabled:text-green-r-300/10
              active:bg-green-r-300/30 active:border-green-r-300/30`}
          >
            Open popover
          </button>
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
