import { Loader } from './Loader';

export default {
  title: 'Components/Loader',
};

export const _Default = {
  render: () => (
    <div className="flex space-x-4">
      <Loader />
      <Loader size={44} />
    </div>
  ),
};

export const _Raccord = {
  render: () => (
    <div className="flex space-x-4">
      <Loader type="secondary" />
      <Loader size={44} type="secondary" />
    </div>
  ),
};
