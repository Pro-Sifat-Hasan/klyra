# Chroma Vector Store Guide

## What is a Vector Store?

A **vector store** is a specialized database that stores and retrieves data using vector embeddings. It enables AI to:
- **Find relevant information** based on meaning, not just keywords
- **Answer questions accurately** using your knowledge base
- **Provide context-aware responses** in conversations

## Why is it Necessary?

Vector stores are essential for AI because they:
- ✅ Store your **custom knowledge** and data
- ✅ Enable **semantic search** (search by meaning)
- ✅ Power **RAG (Retrieval-Augmented Generation)** for better AI responses
- ✅ Make AI **domain-specific** with your expertise

## Creating Your Own Vector Store

### 1. Setup
```bash
pip install chromadb langchain-chroma openai
```

### 2. Create Vector Store with Your Data
```python
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.text_splitter import RecursiveCharacterTextSplitter

# Initialize embeddings
embeddings = OpenAIEmbeddings(
    model='text-embedding-3-large',
    openai_api_key="your-api-key"
)

# Your custom data
documents = [
    "Your knowledge content here",
    "Product information",
    "Guidelines and procedures",
    "FAQ answers"
]

# Split documents into chunks
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)
chunks = text_splitter.split_text(documents)

# Create vector store
vectordb = Chroma.from_texts(
    texts=chunks,
    embedding=embeddings,
    persist_directory="./my_vector_store"
)

# Save to disk
vectordb.persist()
print("Vector store created successfully!")
```

### 3. Add More Data Later
```python
# Load existing vector store
vectordb = Chroma(
    persist_directory="./my_vector_store",
    embedding_function=embeddings
)

# Add new documents
new_docs = ["New information", "Updated content"]
vectordb.add_texts(new_docs)
vectordb.persist()
```

## Using with Klyra AI Chatbot

### 1. Replace Vector Store in main.py
```python
# In main.py, replace the existing vectordb initialization:
vectordb = Chroma(
    persist_directory="./my_vector_store",  # Your vector store path
    embedding_function=embedding
)
```

### 2. Test Your Chatbot
```bash
# Start the server
uvicorn main:app --reload

# Test with curl
curl -X POST http://localhost:8005/chat \
-H "Content-Type: application/x-www-form-urlencoded" \
-d "query=Your question&userId=test&domain=your_domain"
```

## That's It!

Your Klyra AI chatbot now has your custom knowledge and can answer questions about your specific domain. The vector store makes your AI smarter by providing relevant context from your data.