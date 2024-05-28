import { Stepper } from './Stepper';

export default { title: 'Components/Stepper', component: Stepper };

export const _Stepper = {
  render: () => (
    <>
      <p className="text-primary font-Gotham rac-h3">Étape 1/3</p>
      <Stepper step={0} steps={['une', 'deux', 'trois']} />
      <br />
      <p className="text-primary font-Gotham rac-h3">Étape 2/3</p>
      <Stepper step={1} steps={['une', 'deux', 'trois']} />
      <br />
      <p className="text-primary font-Gotham rac-h3">Étape 3/3</p>
      <Stepper step={2} steps={['une', 'deux', 'trois']} />
      <br />
      <p className="text-primary font-Gotham rac-h3">
        Étape 3/3 (avec validation complétée)
      </p>
      <Stepper step={3} steps={['une', 'deux', 'trois']} />
    </>
  ),
};
