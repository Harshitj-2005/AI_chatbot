import readline from "readline";
import axios from "axios";

const API_KEY = process.env.API_KEY;
const MODEL_URL = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2";

async function gethuggingResponse(userQuestion) {
    try {
        const response = await axios.post(
            MODEL_URL,
            { inputs: userQuestion },
            { headers: { Authorization: `Bearer ${API_KEY}` } }
        );

        return response.data[0].generated_text;
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
        return "Error getting AI response.";
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion() {
    rl.question("Enter your question: ", (question) => {
        if (!question.trim()) {
            console.log("Please enter a valid question.");
            rl.close();
            return;
        }

        console.log("🤖 Thinking...");
        
        gethuggingResponse(question).then((aiResponse) => {
            console.log("AI:", aiResponse);
            rl.close();
        });
    });
}

askQuestion();
