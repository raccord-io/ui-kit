import { Tooltip } from './Tooltip';

export default { title: 'Components/Tooltip', component: Tooltip };

export const _Tooltip = {
  render: () => (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mb-4">
        <Tooltip content="This is a tooltip" placement="top-start">
          TOP-START
        </Tooltip>
        <Tooltip content="This is a tooltip" placement="top">
          TOP
        </Tooltip>
        <Tooltip content="This is a tooltip" placement="top-end">
          TOP-END
        </Tooltip>
      </div>
      <div className="flex justify-between w-full max-w-screen-md mb-4">
        <div className="flex flex-col items-start">
          <Tooltip content="This is a tooltip" placement="left-start">
            LEFT-START
          </Tooltip>
          <Tooltip content="This is a tooltip" placement="left">
            LEFT
          </Tooltip>
          <Tooltip content="This is a tooltip" placement="left-end">
            LEFT-END
          </Tooltip>
        </div>
        <div className="flex flex-col items-end">
          <Tooltip content="This is a tooltip" placement="right-start">
            RIGHT-START
          </Tooltip>
          <Tooltip content="This is a tooltip" placement="right">
            RIGHT
          </Tooltip>
          <Tooltip content="This is a tooltip" placement="right-end">
            RIGHT-END
          </Tooltip>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Tooltip content="This is a tooltip" placement="bottom-start">
          BOTTOM-START
        </Tooltip>
        <Tooltip content="This is a tooltip" placement="bottom">
          BOTTOM
        </Tooltip>
        <Tooltip content="This is a tooltip" placement="bottom-end">
          BOTTOM-END
        </Tooltip>
      </div>
    </div>
  ),
};
