import { Toast, toast } from '../Toast';
import { Card } from './Card';

export default { title: 'Components/Card' };

export const _Card = {
  render: () => (
    <>
      <div className="flex flex-col gap-2">
        <Card>
          <div>I am a card component</div>
        </Card>
        <Card
          bgColor={'bg-green-r-300'}
          customClass="rounded-mb w-96 h-96 flex flex-col justify-center items-center"
        >
          <div>I am a custom card component</div>
        </Card>

        <Card
          onClick={() => toast.success('You clicked me!')}
          customClass="hover:cursor-pointer"
        >
          <div>Click me!</div>
        </Card>
        <Toast />
      </div>
    </>
  ),
};
