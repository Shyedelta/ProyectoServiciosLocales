import mecanico from "../imgs/mecanico.jpg"
import informatica from "../imgs/informatica.jpg"
import asesoria from "../imgs/asesoria.jpg"
import electricidad from "../imgs/electricidad.jpg"
import salud from "../imgs/salud.jpg"
import peluqueria from "../imgs/peluqueria.jpg"
import decoracion from "../imgs/decoracion.jpg"
import diseno from "../imgs/diseno.jpg"
import belleza from "../imgs/belleza.jpg"
import masaje from "../imgs/masaje.jpg"
import cafeteria from "../imgs/cafeteria.jpg"
import floreria from "../imgs/floreria.jpg"
import pasteleria from "../imgs/pasteleria.jpg"
import entretenimiento from "../imgs/entretenimiento.jpg"
import servicios from "../imgs/servicios.jpg"

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
    breakpoint: { max: 2000, min: 1920 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 1920, min: 1545 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1545, min: 768 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}
const categorias = [
  { nombre: 'Informática', color: 'bg-blue-100', text: 'text-blue-800', img: informatica },
  { nombre: 'Taller mecánico', color: 'bg-orange-100', text: 'text-orange-800', img: mecanico },
  { nombre: 'Asesoría contable', color: 'bg-yellow-100', text: 'text-yellow-800', img: asesoria },
  { nombre: 'Electricidad', color: 'bg-purple-100', text: 'text-purple-800', img: electricidad },
  { nombre: 'Salud', color: 'bg-green-100', text: 'text-green-800', img: salud },
  { nombre: 'Peluquería', color: 'bg-pink-100', text: 'text-pink-800', img: peluqueria },
  { nombre: 'Decoración', color: 'bg-cyan-100', text: 'text-cyan-800', img: decoracion },
  { nombre: 'Publicidad', color: 'bg-orange-100', text: 'text-orange-800', img: diseno },
  { nombre: 'Belleza', color: 'bg-yellow-100', text: 'text-yellow-800', img: belleza },
  { nombre: 'Masajes', color: 'bg-green-100', text: 'text-green-800', img: masaje },
  { nombre: 'Diseño gráfico', color: 'bg-pink-100', text: 'text-pink-800', img: diseno },
  { nombre: 'Cafetería', color: 'bg-orange-100', text: 'text-orange-800', img: cafeteria },
  { nombre: 'Asesoría fiscal', color: 'bg-red-100', text: 'text-red-800', img: asesoria },
  { nombre: 'Florería', color: 'bg-purple-100', text: 'text-purple-800', img: floreria },
  { nombre: 'Pastelería', color: 'bg-blue-100', text: 'text-blue-800', img: pasteleria },
  { nombre: 'Automóviles', color: 'bg-red-100', text: 'text-red-800', img: mecanico },
  { nombre: 'Entrenamiento', color: 'bg-gray-100', text: 'text-gray-800', img: entretenimiento },
  { nombre: 'Servicios', color: 'bg-indigo-100', text: 'text-indigo-800', img: servicios },
];

export default [colores, responsive, categorias];