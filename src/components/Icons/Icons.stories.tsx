import { PrimaryLogo, SecondaryLogo } from './Raccord';

export default { title: 'Icons/Raccord' };

export const _RaccordPrimaryLogo = {
  render: () => (
    <>
      <PrimaryLogo theme="theme-dark" />
      <br />
      <PrimaryLogo theme="theme-light" />
    </>
  ),
};

export const _RaccordSecondaryLogo = {
  render: () => (
    <>
      <SecondaryLogo theme="theme-dark" />
      <br />
      <SecondaryLogo theme="theme-light" />
    </>
  ),
};
