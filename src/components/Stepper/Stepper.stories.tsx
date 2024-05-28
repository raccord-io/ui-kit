import { Stepper } from './Stepper';

export default { title: 'Components/Stepper', component: Stepper };

export const _Stepper = {
  render: () => (
    <>
      <p className="text-primary">Étape 1/3</p>
      <Stepper step={0} steps={['une', 'deux', 'trois']} />
      <br />
      <p className="text-primary">Étape 2/3</p>
      <Stepper step={1} steps={['une', 'deux', 'trois']} />
      <br />
      <p className="text-primary">Étape 3/3</p>
      <Stepper step={2} steps={['une', 'deux', 'trois']} />
      <br />
      <p className="text-primary">Étape 3/3 (avec validation complétée)</p>
      <Stepper step={3} steps={['une', 'deux', 'trois']} />
    </>
  ),
};
