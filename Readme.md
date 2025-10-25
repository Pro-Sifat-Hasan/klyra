# Klyra AI - Skincare Chatbot

<div align="center">
  <p><em>Transform your skincare routine with AI-powered dermatology expertise</em></p>
  
  [![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)](https://python.org)
  [![FastAPI](https://img.shields.io/badge/FastAPI-0.99+-green.svg)](https://fastapi.tiangolo.com)
  [![Next.js](https://img.shields.io/badge/Next.js-16+-black.svg)](https://nextjs.org)
  [![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-purple.svg)](https://openai.com)
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
</div>

## 🌟 Why Klyra AI?

Tired of generic skincare advice? Klyra AI brings **professional dermatology expertise** to your fingertips. Get personalized skincare solutions, analyze your skin conditions through photos, and discover the perfect products for your unique needs - all powered by cutting-edge AI technology.

## ✨ Features

<div align="center">

| Feature | Description |
|---------|-------------|
| 🤖 **AI Dermatologist** | Professional skincare expertise powered by GPT-4o |
| 📸 **Smart Image Analysis** | Upload photos for instant skin condition analysis |
| 💬 **Intelligent Conversations** | Context-aware responses with follow-up suggestions |
| 🧠 **Knowledge Base** | Custom vector store with comprehensive skincare data |
| 🛍️ **Product Recommendations** | Personalized product suggestions with direct links |

</div>

## 🚀 Quick Start

Ready to revolutionize skincare advice? Let's get Klyra AI running in minutes!

### Prerequisites
- Python 3.9+ & Node.js 16+
- OpenAI API Key ([Get yours here](https://platform.openai.com/api-keys))

### Setup

**1. Environment Configuration**
```bash
# Create .env file
echo "OPENAI_API_KEY=your_openai_api_key_here" > .env
```

**2. Backend (Python API)**
```bash
pip install -r requirements.txt
uvicorn main:app --reload
```
→ **API:** `http://localhost:8000` | **Docs:** `http://localhost:8000/docs`

**3. Frontend (Next.js)**
```bash
cd Frontend && npm install && npm run dev
```
→ **App:** `http://localhost:3000`

## 💡 How It Works

<div align="center">

| Step | Action | Result |
|------|--------|--------|
| 1️⃣ | **Ask Question** | Type your skincare concern |
| 2️⃣ | **Upload Photo** | Optional skin condition image |
| 3️⃣ | **AI Analysis** | GPT-4o analyzes text + image |
| 4️⃣ | **Get Response** | Personalized advice + product recommendations |

</div>

## 🧪 Test the API

```bash
# Chat with the AI
curl -X POST http://localhost:8000/chat \
-H "Content-Type: application/x-www-form-urlencoded" \
-d "query=Help with acne&userId=test&domain=skincare"
```

## 🏗️ Architecture

```
Klyra-AI/
├── Frontend/          # Next.js UI
├── docs/             # Documentation
├── chroma/           # Vector database
├── main.py           # FastAPI backend
└── requirements.txt  # Dependencies
```

## 🎨 Customization

<div align="center">

| Customization | How To |
|---------------|--------|
| **Add Knowledge** | Add documents to `chroma/` directory |
| **Change Domain** | Modify prompt template in `main.py` |
| **Update UI** | Edit components in `Frontend/app/` |

</div>

## 🔧 Troubleshooting

| Issue | Solution |
|-------|----------|
| **API Key Error** | Ensure `OPENAI_API_KEY` is set in `.env` |
| **Port Conflicts** | Change ports if 8000/3000 are occupied |
| **Dependencies** | Run `pip install -r requirements.txt` |

## 🐛 Found a Bug or Have a Feature Request?

We welcome contributions! If you encounter any issues or have ideas for improvements:

- 🐛 **Report Bugs**: [Create an issue](https://github.com/Pro-Sifat-Hasan/klyra/issues/new?template=bug_report.md)
- ✨ **Request Features**: [Suggest an enhancement](https://github.com/Pro-Sifat-Hasan/klyra/issues/new?template=feature_request.md)
- 📖 **Contribute**: [Read our contributing guide](CONTRIBUTING.md)

## 📚 Documentation

<div align="center">

| Guide | Description |
|-------|-------------|
| [Vector Store](docs/vector-store.md) | Create and use vector databases |
| [Image Analysis](docs/image-captioning-api.md) | Photo analysis techniques |
| [Question Suggestions](docs/question-suggestion.md) | Follow-up question generation |
| [Prompt Engineering](docs/prompt.md) | Customize AI prompts |
| [Model Configuration](docs/model-configuration-guide.md) | Configure LLM models and settings |

</div>

---

<div align="center">
  <h3>🌟 Ready to revolutionize skincare advice?</h3>
  <p>Start building your AI-powered dermatology assistant today!</p>
  
  <img src="https://i.ibb.co/VpH4xz6s/image.png" alt="Klyra AI Chatbot Interface" width="700" onerror="this.style.display='none'"/>
  
  <br><br>
  
  [![Star](https://img.shields.io/github/stars/Pro-Sifat-Hasan/klyra?style=social)](https://github.com/Pro-Sifat-Hasan/klyra)
  [![Fork](https://img.shields.io/github/forks/Pro-Sifat-Hasan/klyra?style=social)](https://github.com/Pro-Sifat-Hasan/klyra/fork)
  [![Issues](https://img.shields.io/github/issues/Pro-Sifat-Hasan/klyra)](https://github.com/Pro-Sifat-Hasan/klyra/issues)
</div>