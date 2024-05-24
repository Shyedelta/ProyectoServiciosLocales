import datos from "../db.json"
const datosOffline = {
    "empresas": [
        {
            "id": 1,
            "namenegocio": "Peluquería Estilo y Belleza",
            "nombreemprendedor": "María López",
            "ubicacion": {
                "latitud": 42.8767,
                "longitud": -8.5463
            },
            "tiposervicio": "Peluquería y estilismo",
            "telefono": "+34 987 654 321",
            "horario": "Lunes a viernes: 9:00 - 19:00, Sábado: 9:00 - 14:00",
            "categorias": [
                "Peluquería",
                "Belleza"
            ]
        },
        {
            "id": 2,
            "namenegocio": "Taller Mecánico El Progreso",
            "nombreemprendedor": "Juan García",
            "ubicacion": {
                "latitud": 41.6552,
                "longitud": -4.7237
            },
            "tiposervicio": "Reparación de automóviles",
            "telefono": "+34 912 345 678",
            "horario": "Lunes a viernes: 8:00 - 18:00",
            "categorias": [
                "Taller mecánico",
                "Automóviles"
            ]
        },
        {
            "id": 3,
            "namenegocio": "Cafetería El Rincón de los Sabores",
            "nombreemprendedor": "Pedro Martínez",
            "ubicacion": {
                "latitud": 39.4702,
                "longitud": -0.3768
            },
            "tiposervicio": "Cafetería y pastelería",
            "telefono": "+34 654 987 321",
            "horario": "Todos los días: 7:00 - 21:00",
            "categorias": [
                "Cafetería",
                "Pastelería"
            ]
        },
        {
            "id": 4,
            "namenegocio": "Electricidad El Faro",
            "nombreemprendedor": "Ana Rodríguez",
            "ubicacion": {
                "latitud": 37.3891,
                "longitud": -5.9825
            },
            "tiposervicio": "Servicios eléctricos",
            "telefono": "+34 667 123 456",
            "horario": "Lunes a sábado: 9:00 - 18:00",
            "categorias": [
                "Electricidad",
                "Servicios"
            ]
        },
        {
            "id": 5,
            "namenegocio": "Florería La Primavera",
            "nombreemprendedor": "Luisa Sánchez",
            "ubicacion": {
                "latitud": 40.4167,
                "longitud": -3.7032
            },
            "tiposervicio": "Venta de flores y arreglos florales",
            "telefono": "+34 678 234 567",
            "horario": "Lunes a domingo: 8:00 - 20:00",
            "categorias": [
                "Florería",
                "Decoración"
            ]
        },
        {
            "id": 6,
            "namenegocio": "Diseño Gráfico Creativo",
            "nombreemprendedor": "María Gómez",
            "ubicacion": {
                "latitud": 41.3926,
                "longitud": 2.1432
            },
            "tiposervicio": "Diseño gráfico",
            "telefono": "+34 645 321 987",
            "horario": "Flexible, con cita previa",
            "categorias": [
                "Diseño gráfico",
                "Publicidad"
            ]
        },
        {
            "id": 7,
            "namenegocio": "Asesoría Contable y Fiscal",
            "nombreemprendedor": "Juan Pérez",
            "ubicacion": {
                "latitud": 41.3888,
                "longitud": 2.1589
            },
            "tiposervicio": "Asesoría contable y fiscal",
            "telefono": "+34 678 987 654",
            "horario": "Lunes a viernes: 9:00 - 18:00, Sábado: 9:00 - 13:00",
            "categorias": [
                "Asesoría contable",
                "Asesoría fiscal"
            ]
        },
        {
            "id": 8,
            "namenegocio": "Masajista Terapéutico",
            "nombreemprendedor": "Laura Fernández",
            "ubicacion": {
                "latitud": 40.4637,
                "longitud": -3.7492
            },
            "tiposervicio": "Masajes terapéuticos",
            "telefono": "+34 689 234 567",
            "horario": "Flexible, con cita previa",
            "categorias": [
                "Masajes",
                "Salud"
            ]
        },
        {
            "id": 9,
            "namenegocio": "Entrenador Personal",
            "nombreemprendedor": "Sergio Martín",
            "ubicacion": {
                "latitud": 40.4168,
                "longitud": -3.7038
            },
            "tiposervicio": "Entrenamiento personalizado",
            "telefono": "+34 657 876 543",
            "horario": "Flexible, adaptado a las necesidades del cliente",
            "categorias": [
                "Entrenamiento",
                "Salud"
            ]
        },
        {
            "id": 10,
            "namenegocio": "Reparación de Ordenadores",
            "nombreemprendedor": "José García",
            "ubicacion": {
                "latitud": 40.4637,
                "longitud": -3.7492
            },
            "tiposervicio": "Reparación de ordenadores",
            "telefono": "+34 678 345 678",
            "horario": "Lunes a viernes: 10:00 - 19:00",
            "categorias": [
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
