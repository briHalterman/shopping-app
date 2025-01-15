/*
{
  id: int,
  name: string,
  description: string,
  price: float,
  group: string,
  inventory: int,
  manufacturer: string,
  image: string,
}
*/

const dummyProducts = [
  {
    id: 0,
    name: 'Really Cool Lamp',
    description: "What can I say, it's a really cool lamp",
    price: 100.0, // floating point numbers
    group: 'housewares',
    inventory: 39,
    manufacturer: 'Ikea',
    image:
      'https://www.werfactory.com/cdn/shop/products/S55816TB-2.jpg?v=1653839494',
  },
  {
    id: 1,
    name: 'Really Cool Chair',
    description: "What can I say, it's a really cool chair",
    price: 100.0, // floating point numbers
    group: 'furniture',
    inventory: 35,
    manufacturer: 'Wayfair',
    image:
      'https://theamishhouse.com/cdn/shop/products/theodore-side-chair-260327_847ac408-9f9f-4ba3-8dbc-10a9fc08257d.jpg?crop=center&height=1200&v=1611462911&width=1200',
  },
  {
    id: 2,
    name: 'Colossally Terrible Backpack',
    description: 'What can I say, not enough dinosaurs',
    price: 19.99,
    group: 'bags',
    inventory: 100,
    manufacturer: 'Target',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_e59c7edd-3555-4c04-bba7-b6295afddfa1?wid=800&hei=800&qlt=80&fmt=webp',
  },
];

export { dummyProducts };
