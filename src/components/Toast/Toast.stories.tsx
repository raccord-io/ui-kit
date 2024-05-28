import { Toast, toast } from './Toast';
import { Button } from './../Button/Button';

export default { title: 'Components/Toast' };

export const _Toast = {
  render: () => (
    <>
      <p className="text-f-primary font-Gotham rac-h3">
        Theme dark doesn't work for Toast, you will see only theme light toats.
      </p>
      <br />
      <Button onClick={() => toast.success('Uuurraa! This is a success CSS')}>
        Create Success Toast
      </Button>
      <Button
        onClick={() => {
          toast.error('Euhh! This is an error message!');
        }}
      >
        Create Error Toast
      </Button>
      <Button
        onClick={() => {
          toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
            loading: 'Chargement en cours...',
            success: 'Succès',
            error: 'Erreur',
          });
        }}
      >
        Create a Success Promise Toast
      </Button>
      <Button
        onClick={() => {
          toast.promise(
            new Promise((_resolve, reject) => setTimeout(reject, 1000)),
            {
              loading: 'Chargement en cours...',
              success: 'Succès',
              error: 'Erreur',
            },
          );
        }}
      >
        Create an Error Promise Toast
      </Button>
      <Button
        onClick={() => {
          toast('Hello World', { icon: '👏' });
        }}
      >
        Custom Icon Toast
      </Button>
      <Toast />
    </>
  ),
};
