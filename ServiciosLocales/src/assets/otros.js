const colores = [
  'linear-gradient(135deg, #98e6e3 0%, #fcb9d8 100%)', // Rare Wind
  'linear-gradient(135deg, #cdc0f5 0%, #6b8df5 100%)', // Deep Blue
  'linear-gradient(135deg, #db8ce4 0%, #f77b7b 100%)', // Ripe Malinka  
  'linear-gradient(135deg, #a67fa3 0%, #fdeab5 100%)', // Wild Apple
  'linear-gradient(135deg, #d9a5fc 0%, #bfcad9 100%)', // Ladoga Bottom
  'linear-gradient(135deg, #f7b85e 0%, #ff8e8e 100%)', // Sunny Morning
  'linear-gradient(135deg, #7dd4b2 0%, #f2e46d 100%)', // Lemon Gate 
  'linear-gradient(135deg, #e1f5f3 0%, #9dd1fc 100%)', // New York 
  'linear-gradient(135deg, #b5adde 0%, #fc9bb3 100%)', // Japan Blush
  'linear-gradient(135deg, #F87070 0%, #E0C3FC 100%)', // Bubblegum
  'linear-gradient(135deg, #84CEEB 0%, #A6E4E8 100%)', // Sky Blue
  'linear-gradient(135deg, #FFDD00 0%, #FBB034 100%)', // Sunflower
  'linear-gradient(135deg, #63CCCA 0%, #EFEA5A 100%)', // Greenery
  'linear-gradient(135deg, #D9AFD9 0%, #97D9E1 100%)', // Lavender
  'linear-gradient(135deg, #F8A5C2 0%, #F67280 100%)', // Pink Rose
  'linear-gradient(135deg, #7A88FF 0%, #86A8E7 100%)', // Blue Lavender
  'linear-gradient(135deg, #1B9CFC 0%, #55E6C1 100%)', // Aqua Menthe
  'linear-gradient(135deg, #EA2027 0%, #F093FB 100%)', // Rouge
]; 
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1920 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 1920, min: 768 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const categorias = [
  { nombre: 'Peluquería', color: 'bg-blue-100', text: 'text-blue-800' },
  { nombre: 'Belleza', color: 'bg-pink-100', text: 'text-pink-800' },
  { nombre: 'Taller mecánico', color: 'bg-yellow-100', text: 'text-yellow-800' },
  { nombre: 'Automóviles', color: 'bg-orange-100', text: 'text-orange-800' },
  { nombre: 'Cafetería', color: 'bg-green-100', text: 'text-green-800' },
  { nombre: 'Pastelería', color: 'bg-red-100', text: 'text-red-800' },
  { nombre: 'Electricidad', color: 'bg-purple-100', text: 'text-purple-800' },
  { nombre: 'Servicios', color: 'bg-indigo-100', text: 'text-indigo-800' },
  { nombre: 'Florería', color: 'bg-cyan-100', text: 'text-cyan-800' },
  { nombre: 'Decoración', color: 'bg-pink-100', text: 'text-pink-800' },
  { nombre: 'Diseño gráfico', color: 'bg-yellow-100', text: 'text-yellow-800' },
  { nombre: 'Publicidad', color: 'bg-orange-100', text: 'text-orange-800' },
  { nombre: 'Asesoría contable', color: 'bg-green-100', text: 'text-green-800' },
  { nombre: 'Asesoría fiscal', color: 'bg-red-100', text: 'text-red-800' },
  { nombre: 'Masajes', color: 'bg-purple-100', text: 'text-purple-800' },
  { nombre: 'Salud', color: 'bg-indigo-100', text: 'text-indigo-800' },
  { nombre: 'Entrenamiento', color: 'bg-gray-100', text: 'text-gray-800' },
  { nombre: 'Informática', color: 'bg-yellow-100', text: 'text-yellow-800' },
];

export default [colores,responsive,categorias];