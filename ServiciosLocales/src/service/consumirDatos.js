

const datos = "http://localhost:3000/empresas"
const fetchDatos = async () => {
    try {
        const response = await fetch(datos);
        const data = await response.json(); 
        return data;
    } catch (error) {
        console.error("Error al obtener los datos. ", error);
        throw error;
    }
}
export default fetchDatos