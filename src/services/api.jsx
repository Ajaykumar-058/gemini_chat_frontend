import axios from "axios";

const API_URL = "https://java-app-7mph.onrender.com/";

export const fetchChatResponse = async (question) => {
    try {
        const response = await axios.post(API_URL, { question });
        return response.data;
    } catch (error) {
        console.error("Error fetching response:", error);
        alert("Failed to get response. Please check the console for details.");
        return null;
    }
};
