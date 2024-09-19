import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import { Input } from '../Input';

export default { title: 'Components/Popover', component: Popover };

export const _Popover = {
  render: () => (
    <div className="">
      <Popover>
        <PopoverTrigger asChild>
          <button
            className={`m-auto default-button default-icon rounded-xl bg-brand-green/[.15]
              border-[.2px] border-brand-green text-brand-green
              hover:bg-brand-green/20
              disabled:bg-brand-green/10 disabled:border-brand-green/20 disabled:text-brand-green/10
              active:bg-brand-green/30 active:border-brand-green/30`}
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
