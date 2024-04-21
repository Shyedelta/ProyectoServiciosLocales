import datos from "../db.json"

const fetchDatos = async () => {
    try {
        const response = await fetch("http://localhost:3000/empresas");
        const data = await response.json();
        if (!data) {
            throw new Error("No se recibieron datos.");
        }
        return data;
    } catch (error) {
        console.error("Error al obtener los datos. ", error);
        return datos.empresas;
    }
};

export default fetchDatos;
