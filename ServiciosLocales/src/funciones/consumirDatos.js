import datos from "../db.json"
const datosOffline = {
    "empresas": [
        {
            "id": 1,
            "NameNegocio": "Peluquería Estilo y Belleza",
            "NombreEmprendedor": "María López",
            "Ubicacion": {
                "latitud": 42.8767,
                "longitud": -8.5463
            },
            "TipoServicio": "Peluquería y estilismo",
            "Telefono": "+34 987 654 321",
            "Horario": "Lunes a viernes: 9:00 - 19:00, Sábado: 9:00 - 14:00",
            "Categorias": [
                "Peluquería",
                "Belleza"
            ]
        },
        {
            "id": 2,
            "NameNegocio": "Taller Mecánico El Progreso",
            "NombreEmprendedor": "Juan García",
            "Ubicacion": {
                "latitud": 41.6552,
                "longitud": -4.7237
            },
            "TipoServicio": "Reparación de automóviles",
            "Telefono": "+34 912 345 678",
            "Horario": "Lunes a viernes: 8:00 - 18:00",
            "Categorias": [
                "Taller mecánico",
                "Automóviles"
            ]
        },
        {
            "id": 3,
            "NameNegocio": "Cafetería El Rincón de los Sabores",
            "NombreEmprendedor": "Pedro Martínez",
            "Ubicacion": {
                "latitud": 39.4702,
                "longitud": -0.3768
            },
            "TipoServicio": "Cafetería y pastelería",
            "Telefono": "+34 654 987 321",
            "Horario": "Todos los días: 7:00 - 21:00",
            "Categorias": [
                "Cafetería",
                "Pastelería"
            ]
        },
        {
            "id": 4,
            "NameNegocio": "Electricidad El Faro",
            "NombreEmprendedor": "Ana Rodríguez",
            "Ubicacion": {
                "latitud": 37.3891,
                "longitud": -5.9825
            },
            "TipoServicio": "Servicios eléctricos",
            "Telefono": "+34 667 123 456",
            "Horario": "Lunes a sábado: 9:00 - 18:00",
            "Categorias": [
                "Electricidad",
                "Servicios"
            ]
        },
        {
            "id": 5,
            "NameNegocio": "Florería La Primavera",
            "NombreEmprendedor": "Luisa Sánchez",
            "Ubicacion": {
                "latitud": 40.4167,
                "longitud": -3.7032
            },
            "TipoServicio": "Venta de flores y arreglos florales",
            "Telefono": "+34 678 234 567",
            "Horario": "Lunes a domingo: 8:00 - 20:00",
            "Categorias": [
                "Florería",
                "Decoración"
            ]
        },
        {
            "id": 6,
            "NameNegocio": "Diseño Gráfico Creativo",
            "NombreEmprendedor": "María Gómez",
            "Ubicacion": {
                "latitud": 41.3926,
                "longitud": 2.1432
            },
            "TipoServicio": "Diseño gráfico",
            "Telefono": "+34 645 321 987",
            "Horario": "Flexible, con cita previa",
            "Categorias": [
                "Diseño gráfico",
                "Publicidad"
            ]
        },
        {
            "id": 7,
            "NameNegocio": "Asesoría Contable y Fiscal",
            "NombreEmprendedor": "Juan Pérez",
            "Ubicacion": {
                "latitud": 41.3888,
                "longitud": 2.1589
            },
            "TipoServicio": "Asesoría contable y fiscal",
            "Telefono": "+34 678 987 654",
            "Horario": "Lunes a viernes: 9:00 - 18:00, Sábado: 9:00 - 13:00",
            "Categorias": [
                "Asesoría contable",
                "Asesoría fiscal"
            ]
        },
        {
            "id": 8,
            "NameNegocio": "Masajista Terapéutico",
            "NombreEmprendedor": "Laura Fernández",
            "Ubicacion": {
                "latitud": 40.4637,
                "longitud": -3.7492
            },
            "TipoServicio": "Masajes terapéuticos",
            "Telefono": "+34 689 234 567",
            "Horario": "Flexible, con cita previa",
            "Categorias": [
                "Masajes",
                "Salud"
            ]
        },
        {
            "id": 9,
            "NameNegocio": "Entrenador Personal",
            "NombreEmprendedor": "Sergio Martín",
            "Ubicacion": {
                "latitud": 40.4168,
                "longitud": -3.7038
            },
            "TipoServicio": "Entrenamiento personalizado",
            "Telefono": "+34 657 876 543",
            "Horario": "Flexible, adaptado a las necesidades del cliente",
            "Categorias": [
                "Entrenamiento",
                "Salud"
            ]
        },
        {
            "id": 10,
            "NameNegocio": "Reparación de Ordenadores",
            "NombreEmprendedor": "José García",
            "Ubicacion": {
                "latitud": 40.4637,
                "longitud": -3.7492
            },
            "TipoServicio": "Reparación de ordenadores",
            "Telefono": "+34 678 345 678",
            "Horario": "Lunes a viernes: 10:00 - 19:00",
            "Categorias": [
                "Informática",
                "Servicios"
            ]
        }
    ]
}
const fetchDatos = async () => {
    try {
        // const response = await fetch("http://localhost:3000/empresas");
        // const data = await response.json();
        // if (!data) {
        //     throw new Error("No se recibieron datos.");
        // }
        // return data;
    } catch (error) {
        console.error("Error al obtener los datos. ", error);
        return datos.empresas;
    }
};

export default fetchDatos;
