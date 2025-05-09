# 🤖 React-based-Chatbot

A modern, responsive chatbot built with React.js and powered by Google's Gemini AI API.

## ✨ Features

- 💬 Real-time conversation with Google's advanced Gemini AI
- 🎨 Clean, modern UI with responsive design
- ⚡ Fast and intuitive user experience
- 📱 Works on desktop and mobile devices
- 🛠️ Easy customization and extensibility

## 🚀 Live Demo

Check out the live demo: [Personalized Chatbot Demo](https://react-based-chatbot.vercel.app/)

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **Styled Components** - For component-based styling
- **Axios** - For API requests
- **Google Gemini API** - AI conversation model
- **React Icons** - For UI icons

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js installed (v14.0.0 or later)
- npm or yarn installed
- A Google Gemini API key

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/KushBhakkad/React-based-Chatbot.git
   cd React-based-Chatbot
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```
   REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**

   Navigate to `http://localhost:3000` to see the app in action!

## 🏗️ Project Structure

```
React-based-Chatbot/
├── public/                  # Static files
├── src/                     # Source code
│   ├── components/          # React components
│   │   ├── ChatContainer.js # Main chat container
│   │   ├── ChatMessage.js   # Individual message component
│   │   ├── ChatInput.js     # User input component
│   │   ├── Header.js        # Header component
│   │   └── Loader.js        # Loading animation
│   ├── services/            # API and utilities
│   │   ├── geminiAPI.js     # Gemini API integration
│   │   └── utils.js         # Helper functions
│   ├── styles/              # Styling
│   │   ├── GlobalStyles.js  # Global styles
│   │   └── theme.js         # Theme variables
│   ├── context/             # React context
│   │   └── ChatContext.js   # Chat state management
│   ├── App.js               # Main App component
│   └── index.js             # Entry point
├── .env                     # Environment variables (for API key)
└── package.json             # Project dependencies
```

### Adding New Features

Some ideas for extending the chatbot:

1. **Message persistence** - Save chat history to localStorage
2. **Typing indicators** - Show when the bot is "thinking"
3. **Markdown support** - Render the bot's messages as markdown
4. **User authentication** - Add login functionality
5. **Conversation history** - Allow users to view past conversations

## 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
Project Link: [https://github.com/KushBhakkad/React-based-Chatbot](https://github.com/KushBhakkad/React-based-Chatbot)

## 🙏 Acknowledgements

- [Google Gemini API](https://ai.google.dev/gemini-api)
- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
- [Styled Components](https://styled-components.com/)
- [React Icons](https://react-icons.github.io/react-icons/)