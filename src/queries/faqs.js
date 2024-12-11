import axios from "axios";

export const loginAndFetchFaqs = async () => {
    const authUrl = "http://localhost:4000/api/auth";
    const faqsUrl = "http://localhost:4000/api/faqs";
    const credentials = {
        email: "camila.rodas@gmail.com",
        password: "ElocRodas7"
    };

    try {
        // Paso 1: Solicitar el token
        const authResponse = await axios.post(authUrl, credentials, {
            headers: { "Content-Type": "application/json" }
        });

        const token = authResponse.data.token; // El token se devuelve en esta propiedad
        console.log("Token obtenido:", token);

        // Paso 2: Usar el token para obtener las FAQs
        const faqsResponse = await axios.get(faqsUrl, {
            headers: {
                "Content-Type": "application/json",
                "x-token": token
            }
        });

        console.log("Datos obtenidos:", faqsResponse.data);

        // La respuesta ya está parseada, no necesitas .json()
        return faqsResponse.data.tutoriales;
    } catch (error) {
        console.error(
            "Error en el proceso:",
            error.response?.data || error.message
        );
        return [];
    }
};

// Llamar a la función (opcional, sólo si quieres ejecutarlo directamente en este archivo)
loginAndFetchFaqs();
