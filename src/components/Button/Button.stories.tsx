import { Button } from './Button';
import { FiCheck, FiFile } from 'react-icons/fi';

export default { title: 'Components/Button', component: Button };

const args = {
  onClick: () => {
    console.log('clicked');
  },
  preIcon: <FiCheck />,
  posIcon: <FiCheck />,
};

export const _Button = {
  render: () => (
    <>
      <Button {...args}>Button</Button>

      <br />
      <br />

      <Button {...args} disabled>
        Button disabled
      </Button>
    </>
  ),
};

export const _Danger = {
  render: () => (
    <>
      <Button variant="danger" {...args}>
        Button
      </Button>

      <br />
      <br />

      <Button variant="danger" {...args} disabled>
        Button disabled
      </Button>

      <br />
      <br />
    </>
  ),
};

export const _Icon = {
  render: () => (
    <>
      <Button variant="icon" model="outline">
        <FiFile />
      </Button>

      <br />
      <br />

      <Button variant="icon" model="outline" disabled>
        <FiFile />
      </Button>
    </>
  ),
};
