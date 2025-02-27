# Hugging Face AI Chatbot

This is a simple command-line chatbot that interacts with users using the **Mistral-7B-Instruct** model from Hugging Face. Users can enter a question, and the chatbot will return AI-generated responses.

## 🚀 Features
- Uses **Hugging Face Inference API** to get AI responses.
- Supports real-time question-answering in the terminal.
- Implements error handling for failed API requests.

## 🛠️ Installation & Setup
### 1️⃣ Prerequisites
- [Node.js](https://nodejs.org/) installed on your system.
- A valid Hugging Face API key.

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/Harshitj-2005/AI_chatbot.git
cd AI_chatbot
```

### 3️⃣ Install Dependencies
```bash
npm install axios readline
```

### 4️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add your Hugging Face API key:
```env
API_KEY=your_huggingface_api_key_here
```

### 5️⃣ Run the Chatbot
```bash
node chatbot.js
```

## 🏗️ How It Works
1. The chatbot asks the user for a question.
2. It sends the input to the **Mistral-7B-Instruct** model via Hugging Face API.
3. The AI generates and returns a response.
4. The chatbot displays the AI response in the terminal.

## 🐛 Troubleshooting
- If you get an API error, check:
  - Your **API key** is correct in `.env`.
  - Your Hugging Face account has **API access** to the model.
- If the response takes too long, try again later as the API might be overloaded.

## 📜 License
This project is licensed under the [MIT License](LICENSE).

## 🙌 Contributions
Feel free to fork this repo, make improvements, and submit a pull request! 🚀

