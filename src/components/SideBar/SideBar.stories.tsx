import { SideBar, ItemProps } from './SideBar';
import { Tag } from '../Tag';

export default { title: 'Components/SideBar', component: SideBar };

const items: ItemProps[] = [
  {
    mode: 'main',
    label: '1. Ext. Hôpital. Jour',
    children: [
      {
        label: 'Lieux',
      },
      {
        label: 'Personnages',
        children: [
          <Tag color="neutral" content="test1" />,
          <Tag color="blue" content="test2" />,
          <Tag color="red" content="test3" />,
          <Tag color="green" content="test4" />,
        ],
      },
      {
        label: 'Accessoires',
      },
    ],
  },
  {
    mode: 'main',
    label: '2. Ext. Hôpital. Jour',
    children: [
      {
        label: 'Lieux',
      },
      {
        label: 'Personnages',
      },
      {
        label: 'Accessoires',
      },
    ],
  },
  {
    label: '3. Ext. Hôpital. Jour',
  },
];

export const _SideBar = {
  render: () => (
    <div className="w-52">
      <SideBar items={items} />
    </div>
  ),
};
