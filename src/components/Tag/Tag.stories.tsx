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
          <Tag color="neutral" content="neutral color" />
          <br />
          <Tag color="blue" content="blue color" />
          <br />
          <Tag color="green" content="green color" />
          <br />
          <Tag color="red" content="red color" />
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
          />
          <br />
          <Tag
            color="blue"
            content="blue color"
            onClick={() => console.log('clicked')}
          />
          <br />
          <Tag
            color="green"
            content="green color"
            onClick={() => console.log('clicked')}
          />
          <br />
          <Tag
            color="red"
            content="red color"
            onClick={() => console.log('clicked')}
          />
        </div>
      </div>
    </>
  ),
};
