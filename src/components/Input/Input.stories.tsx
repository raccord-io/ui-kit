import { Input } from './Input';

export default { title: 'Components/Input', component: Input };

export const _Input = {
  render: () => (
    <>
      <Input placeholder={'with no content'} value="" />
      <br />
      <Input placeholder={'something'} value="with content" />
      <br />
      <Input
        placeholder={'something'}
        value=""
        error="that's an error without content"
      />
      <br />
      <Input
        placeholder={'something'}
        value="with content"
        error="that's an error with content"
      />
      <br />
      <Input
        placeholder={'something'}
        value=""
        warning="that's a warning without content"
      />
      <br />
      <Input
        placeholder={'something'}
        value="123"
        warning="that's a warning with content"
      />
    </>
  ),
};
