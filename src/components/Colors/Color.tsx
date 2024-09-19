// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

const baseClass = 'w-40 h-10 mb-2 text-primary';
function Color({ color }: { color: string }) {
  return <div id={color} className={`${baseClass} ${color}`} />;
}

export function Alias() {
  const classAlias = `${baseClass} text-center text-primary`;

  const Colors = () => (
    <div>
      <p className={classAlias}>primary</p>
      <p className={classAlias}>secondary</p>
      <p className={classAlias}>tertiary</p>
      <p className={classAlias}>neutral</p>
      <p className={classAlias}>system</p>
      <p className={classAlias}>brand-green</p>
      <p className={classAlias}>brand-blue</p>
      <p className={classAlias}>brand-red</p>
    </div>
  );

  const States = () => (
    <div>
      <p className={classAlias}>s-success</p>
      <p className={classAlias}>s-warning</p>
      <p className={classAlias}>s-error</p>
    </div>
  );
  const Components = () => (
    <div>
      <p className={classAlias}>c-default</p>
      <p className={classAlias}>c-hover</p>
      <p className={classAlias}>c-pressed</p>
      <p className={classAlias}>c-disabled</p>
    </div>
  );
  const Icons = () => (
    <div>
      <p className={classAlias}>i-primary</p>
      <p className={classAlias}>i-secondary</p>
    </div>
  );
  const Fonts = () => (
    <div>
      <p className={classAlias}>f-primary</p>
      <p className={classAlias}>f-secondary</p>
      <p className={classAlias}>f-disabled</p>
    </div>
  );

  return (
    <div className="mb-2">
      <br className={baseClass}></br>
      <p className={baseClass}>Colors :</p>
      <Colors />

      <p className={baseClass}>States :</p>
      <States />

      <p className={baseClass}>Components :</p>
      <Components />
      <p className={baseClass}>Icons :</p>
      <Icons />

      <p className={baseClass}>Fonts :</p>
      <Fonts />
    </div>
  );
}
export function Theme() {
  const Colors = () => (
    <div>
      <Color color="bg-primary" />
      <Color color="bg-secondary" />
      <Color color="bg-tertiary" />
      <Color color="bg-neutral" />
      <Color color="bg-system" />
      <Color color="bg-brand-green" />
      <Color color="bg-brand-blue" />
      <Color color="bg-brand-red" />
    </div>
  );

  const States = () => (
    <div>
      <Color color="bg-s-success" />
      <Color color="bg-s-warning" />
      <Color color="bg-s-error" />
    </div>
  );
  const Components = () => (
    <div>
      <Color color="bg-c-default" />
      <Color color="bg-c-hover" />
      <Color color="bg-c-pressed" />
      <Color color="bg-c-disabled" />
    </div>
  );
  const Icons = () => (
    <div>
      <Color color="bg-i-primary" />
      <Color color="bg-i-secondary" />
    </div>
  );
  const Fonts = () => (
    <div>
      <Color color="bg-f-primary" />
      <Color color="bg-f-secondary" />
      <Color color="bg-f-disabled" />
    </div>
  );

  return (
    <div className="mb-2">
      <div className={baseClass} />

      <br className="w-40 h-10"></br>

      <Colors />

      <div className={baseClass} />

      <States />

      <div className={baseClass} />

      <Components />

      <div className={baseClass} />

      <Icons />

      <div className={baseClass} />

      <Fonts />
    </div>
  );
}
