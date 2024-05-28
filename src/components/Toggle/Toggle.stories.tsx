import { Toggle } from './Toggle';

export default { title: 'Components/Toggle', component: Toggle };

export const _Toggle = {
  render: () => (
    <>
      <h3 className="font-Gotham rac-h3 text-primary mb-2">Controlled</h3>
      <Toggle tShirtSize="sm" onClick={() => console.log('clicked')} />
      <br />
      <Toggle />
      <br />
      <Toggle tShirtSize="lg" />
      <br />
      <br />
      <h3 className="font-Gotham rac-h3 text-primary mb-2">Disabled</h3>
      <Toggle disabled />
    </>
  ),
};
