import axios from "axios";

const API_URL = "http://localhost:8081/api/qna/ask";

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
