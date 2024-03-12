import { Tag } from './Tag';

export default {
  title: 'Components/Tag',
};

export const _Tag = {
  render: () => (
    <>
      <div className="flex gap-10 items-start">
        <h2 className="rac-h2 text-f-primary underline">Default:</h2>
        <div>
          <Tag
            color="neutral"
            content="neutral color"
            onClickCross={() => console.log('clicked cross')}
          />
          <br />
          <Tag
            color="blue"
            content="blue color"
            onClickCross={() => console.log('clicked cross')}
          />
          <br />
          <Tag
            color="green"
            content="green color"
            onClickCross={() => console.log('clicked cross')}
          />
          <br />
          <Tag
            color="red"
            content="red color"
            onClickCross={() => console.log('clicked cross')}
          />
          <br />
          <Tag
            color="#C800ff"
            content="random color"
            onClickCross={() => console.log('clicked cross')}
          />
        </div>
      </div>

      <br />
      <br />

      <div className="flex gap-10 items-start">
        <h2 className="rac-h2 text-f-primary underline">Clickable:</h2>
        <div>
          <Tag
            color="neutral"
            content="neutral color"
            onClick={() => console.log('clicked')}
            onClickCross={() => console.log('clicked cross')}
          />
          <br />
          <Tag
            color="blue"
            content="blue color"
            onClick={() => console.log('clicked')}
            onClickCross={() => console.log('clicked cross')}
          />
          <br />
          <Tag
            color="green"
            content="green color"
            onClick={() => console.log('clicked')}
            onClickCross={() => console.log('clicked cross')}
          />
          <br />
          <Tag
            color="red"
            content="red color"
            onClick={() => console.log('clicked')}
            onClickCross={() => console.log('clicked cross')}
          />
          <br />
          <Tag
            color="#C800ff"
            content="random color"
            onClick={() => console.log('clicked')}
            onClickCross={() => console.log('clicked cross')}
          />
        </div>
      </div>
    </>
  ),
};
