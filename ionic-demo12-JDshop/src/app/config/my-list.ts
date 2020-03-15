export class MyList {
  static readonly ORDER_LIST = [
    {
      icon: 'newspaper',
      label: 'All Orders',
      color: 'danger'
    },
    {
      icon: 'card',
      label: 'Unpaid',
      color: 'success'
    },
    {
      icon: 'bus',
      label: 'Delivering',
      color: 'warning',
      lines: 'none'
    },
  ];
  static readonly OHTERS_LIST = [
    {
      icon: 'star-outline',
      label: 'Favorite',
      color: 'tertiary'
    },
    {
      icon: 'people',
      label: 'Contact Us',
      color: 'secondary'
    },
  ];
}