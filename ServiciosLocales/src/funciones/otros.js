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

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1990 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1990, min: 768 },
    items: 4
  },
  desktop2: {
    breakpoint: { max: 1600, min: 1269 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1269, min: 960 },
    items: 3
  },
  tablet2: {
    breakpoint: { max: 960, min: 700 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1
  }
}
const categorias = [
  { nombre: 'Informática', img: informatica, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>' },
  { nombre: 'Taller mecánico', img: mecanico, icon: '<svg width="32px" height="32px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M3 8L5.72187 10.2682C5.90158 10.418 6.12811 10.5 6.36205 10.5H17.6379C17.8719 10.5 18.0984 10.418 18.2781 10.2682L21 8M6.5 14H6.51M17.5 14H17.51M8.16065 4.5H15.8394C16.5571 4.5 17.2198 4.88457 17.5758 5.50772L20.473 10.5777C20.8183 11.1821 21 11.8661 21 12.5623V18.5C21 19.0523 20.5523 19.5 20 19.5H19C18.4477 19.5 18 19.0523 18 18.5V17.5H6V18.5C6 19.0523 5.55228 19.5 5 19.5H4C3.44772 19.5 3 19.0523 3 18.5V12.5623C3 11.8661 3.18166 11.1821 3.52703 10.5777L6.42416 5.50772C6.78024 4.88457 7.44293 4.5 8.16065 4.5ZM7 14C7 14.2761 6.77614 14.5 6.5 14.5C6.22386 14.5 6 14.2761 6 14C6 13.7239 6.22386 13.5 6.5 13.5C6.77614 13.5 7 13.7239 7 14ZM18 14C18 14.2761 17.7761 14.5 17.5 14.5C17.2239 14.5 17 14.2761 17 14C17 13.7239 17.2239 13.5 17.5 13.5C17.7761 13.5 18 13.7239 18 14Z" stroke="currentColor" strokeWidth="1.6799999999999997" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>'},
  { nombre: 'Asesoría contable', img: asesoria, icon: '<svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.768"></g><g id="SVGRepo_iconCarrier"> <path d="M21 21H6.2C5.07989 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V3M7 15L12 9L16 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>' },
  { nombre: 'Electricidad', img: electricidad, icon: '<svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.9996 3L5.06859 12.6934C4.72703 13.1109 4.55625 13.3196 4.55471 13.4956C4.55336 13.6486 4.62218 13.7939 4.74148 13.8897C4.87867 14 5.14837 14 5.68776 14H11.9996L10.9996 21L18.9305 11.3066C19.2721 10.8891 19.4429 10.6804 19.4444 10.5044C19.4458 10.3514 19.377 10.2061 19.2577 10.1103C19.1205 10 18.8508 10 18.3114 10H11.9996L12.9996 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>' },
  { nombre: 'Salud', img: salud, icon: '<svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>' },
  { nombre: 'Peluquería', img: peluqueria, icon: '<svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.15179 15.85L21 4M12.3249 12L8.15 8.15M21 20L15 14.4669M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6ZM9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15C7.65685 15 9 16.3431 9 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>' },
  { nombre: 'Decoración', img: decoracion, icon: '<svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.2508 17.25L16.0008 16M8.00083 16.25L9.25083 15M15.0008 9C15.3425 9.12583 15.6525 9.325 15.9092 9.58333M13.8739 6C13.4298 4.27477 11.8637 3 9.99989 3C7.79075 3 5.99989 4.79086 5.99989 7C5.99989 8.19104 6.52045 9.26049 7.34646 9.99326M10.9999 10.874C10.6803 10.9562 10.3452 11 9.99989 11C9.429 11 8.88604 10.8804 8.39471 10.6649C8.00982 10.4961 7.6566 10.2684 7.34646 9.99326M7.34646 9.99326C7.25819 9.99776 7.17026 10 7.08085 10C6.47605 10 5.89593 9.896 5.35796 9.70514V11.5C5.35796 12.9736 4.44737 14.2344 3.1582 14.7506C3.90619 15.6245 4.35796 16.7595 4.35796 18C4.35796 19.0319 4.04541 19.9907 3.50982 20.787C4.51762 20.2834 5.6547 20 6.85796 20C7.95582 20 8.99858 20.2359 9.93833 20.6598C10.4357 19.7224 11.2226 18.9621 12.1798 18.4981C12.4438 18.3702 12.7206 18.2648 13.0079 18.1844C13.0733 16.605 13.6265 15.1517 14.5217 13.9716M19.0008 10C19.0008 12.2091 17.21 14 15.0008 14C14.8387 14 14.6788 13.9904 14.5217 13.9716M19.0008 10C19.0008 7.79086 17.21 6 15.0008 6C12.7917 6 11.0008 7.79086 11.0008 10C11.0008 11.3126 11.633 12.4775 12.6096 13.2068C13.156 13.6149 13.8102 13.8867 14.5217 13.9716M19.0008 10L19.0003 11.5C19.0003 12.9735 19.9109 14.2344 21.2 14.7505C20.4521 15.6245 20.0003 16.7595 20.0003 18C20.0003 19.0318 20.3128 19.9907 20.8484 20.787C19.8406 20.2834 18.7035 20 17.5003 20C16.4024 20 15.3597 20.2359 14.4199 20.6597C13.9225 19.7223 13.1356 18.9621 12.1784 18.4981" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>' },
  { nombre: 'Publicidad', img: diseno, icon: '<svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.41667 14L8.5 9L10.5833 14M6.41667 14L6 15M6.41667 14H10.5833M10.5833 14L11 15M13.5 9.5V14.5C13.5 14.7761 13.7239 15 14 15H15C16.6569 15 18 13.6569 18 12C18 10.3431 16.6569 9 15 9H14C13.7239 9 13.5 9.22386 13.5 9.5ZM5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>' },
  { nombre: 'Belleza', img: belleza, icon: '<svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 16V20M6 4V8M7 18H3M8 6H4M13 4L14.7528 8.44437C14.9407 8.92083 15.0347 9.15906 15.1786 9.35994C15.3061 9.538 15.462 9.69391 15.6401 9.82143C15.8409 9.9653 16.0792 10.0593 16.5556 10.2472L21 12L16.5556 13.7528C16.0792 13.9407 15.8409 14.0347 15.6401 14.1786C15.462 14.3061 15.3061 14.462 15.1786 14.6401C15.0347 14.8409 14.9407 15.0792 14.7528 15.5556L13 20L11.2472 15.5556C11.0593 15.0792 10.9653 14.8409 10.8214 14.6401C10.6939 14.462 10.538 14.3061 10.3599 14.1786C10.1591 14.0347 9.92083 13.9407 9.44437 13.7528L5 12L9.44437 10.2472C9.92083 10.0593 10.1591 9.9653 10.3599 9.82143C10.538 9.69391 10.6939 9.538 10.8214 9.35994C10.9653 9.15906 11.0593 8.92083 11.2472 8.44437L13 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>' },
  { nombre: 'Masajes', img: masaje, icon: '<svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.4 13.8C8.4 13.8 9.75 15.6 12 15.6C14.25 15.6 15.6 13.8 15.6 13.8M14.7 9.3H14.709M9.3 9.3H9.309M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM15.15 9.3C15.15 9.54853 14.9485 9.75 14.7 9.75C14.4515 9.75 14.25 9.54853 14.25 9.3C14.25 9.05147 14.4515 8.85 14.7 8.85C14.9485 8.85 15.15 9.05147 15.15 9.3ZM9.75 9.3C9.75 9.54853 9.54853 9.75 9.3 9.75C9.05147 9.75 8.85 9.54853 8.85 9.3C8.85 9.05147 9.05147 8.85 9.3 8.85C9.54853 8.85 9.75 9.05147 9.75 9.3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>' },
  { nombre: 'Diseño gráfico', img: diseno, icon: '' },
  { nombre: 'Cafetería', img: cafeteria, icon: '' },
  { nombre: 'Asesoría fiscal', img: asesoria, icon: '' },
  { nombre: 'Florería', img: floreria, icon: '' },
  { nombre: 'Pastelería', img: pasteleria, icon: '' },
  { nombre: 'Automóviles', img: mecanico, icon: '' },
  { nombre: 'Entrenamiento', img: entretenimiento, icon: '' },
  { nombre: 'Servicios', img: servicios, icon: '' },
];

export default [ responsive, categorias];