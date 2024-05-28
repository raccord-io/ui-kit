import { DragDrop } from './DragDrop';

export default { title: 'Components/DragDrop', component: DragDrop };

export const _DragDrop = {
  render: () => (
    <>
      <DragDrop
        onFileLoaded={(file) => console.log(file)}
        placeholder="Drop your file here"
        allowed={['jpeg', 'png']}
      />
    </>
  ),
};
