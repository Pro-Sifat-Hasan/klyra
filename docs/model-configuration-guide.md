# Klyra AI Model Configuration Guide

## LLM Model Configuration

### Main Chat LLM
**Location**: `main.py` lines 298-301

```python
llm = RotatingOpenAILLM(
    model="gpt-4o",        # Change this
    temperature=0.1
)
```

**Available Models**:
- `gpt-4o` - Latest, highest quality
- `gpt-4-turbo` - Balanced performance
- `gpt-3.5-turbo` - Cost-effective

**Temperature Settings**:
- `0.1` - Conservative (recommended for medical advice)
- `0.3` - Balanced
- `0.7` - Creative

### Question Suggestion LLM
**Location**: `main.py` lines 223-227

```python
suggetion_llm = ChatOpenAI(
    model="gpt-4o",  # Change this
    temperature=0.3,
)
```

### Image Captioning Model
**Location**: `main.py` lines 89-90

```python
response = client.chat.completions.create(
    model="gpt-4o",  # Only GPT-4 models support images
    messages=[...]
)
```

## Image Captioning Configuration

### Current Prompt
**Location**: `main.py` line 95

```python
prompt_text = """Describe the visible skin conditions in this image as if you are the person experiencing them. Include details about any redness, discoloration, spots, rashes, texture irregularities, lesions, scars, dryness, or other abnormalities. Share your observations in a natural, self-reflective tone, noting the size, color, distribution, and characteristics of any visible features. Also, consider possible causes for these conditions and how you might address them."""
```

### Custom Prompts

**For Acne Analysis**:
```python
prompt_text = """Focus specifically on acne analysis:
1. Type of acne lesions (blackheads, whiteheads, papules, pustules, nodules)
2. Severity level (mild, moderate, severe)
3. Distribution pattern
4. Inflammatory signs
5. Potential triggers visible in the image"""
```

**For Anti-Aging Analysis**:
```python
prompt_text = """Analyze this image for aging signs:
1. Fine lines and wrinkles
2. Age spots and pigmentation
3. Skin firmness and elasticity
4. Overall skin texture
5. Areas showing signs of aging"""
```

### Configuration Options
```python
# Response length control
max_tokens=200  # Current setting
max_tokens=400  # More detailed
max_tokens=100  # Concise

# Image quality
"detail": "high"  # Options: "low", "high", "auto"
```

## Question Suggestion Configuration

### Current System Prompt
**Location**: `main.py` lines 603-604

```python
system_prompt = """You are NeuroBrain's Question Suggestion AI, and your goal is to guide users through helpful conversations by predicting relevant follow-up questions. Based on the user's original question you will generate only two or three follow-up short questions. The follow-up questions should: 1. Be relevant to both the user's original question and your answer. 2. Encourage deeper engagement or exploration of the topic. 3. Help guide the user toward meaningful next steps or further clarification. Based on the conversation between the user and AI, generate 1-3 follow-up questions. the follow-up question in 3 to 5 words without emoji and special characters. Return only the questions separated by commas."""
```

### Skincare-Specific Prompt
```python
skincare_prompt = """You are Klyra AI's Question Suggestion system. Generate 2-3 relevant follow-up questions for skincare conversations.

Question types to consider:
- Clarification: "What causes this?"
- Treatment: "How to treat it?"
- Prevention: "How to prevent this?"
- Products: "Best products?"
- Lifestyle: "Diet changes?"

Format: Return only the questions separated by commas, 3-5 words each, no emojis.

Example:
User: "I have acne on my forehead"
AI: "Acne on the forehead can be caused by several factors..."
Questions: "What causes forehead acne?", "How to treat it?", "Best products for acne?"
"""
```

### Question Templates
```python
QUESTION_TEMPLATES = {
    "causes": ["What causes this?", "Why does this happen?"],
    "treatment": ["How to treat it?", "What treatments work?"],
    "prevention": ["How to prevent this?", "Prevention strategies?"],
    "products": ["Best products?", "Product recommendations?"],
    "lifestyle": ["Diet changes?", "Lifestyle modifications?"]
}
```

## Quick Configuration Changes

### 1. Change Main Chat Model
```python
# In main.py line 299
model="gpt-3.5-turbo"  # For cost savings
model="gpt-4-turbo"    # For balanced performance
model="gpt-4o"         # For highest quality
```

### 2. Change Image Analysis Prompt
```python
# In main.py line 95, replace the prompt_text
prompt_text = "Your custom prompt here..."
```

### 3. Change Question Generation
```python
# In main.py line 603, replace the system_prompt
system_prompt = "Your custom question generation prompt..."
```

## Testing

### Test Chat Endpoint
```bash
curl -X POST "http://localhost:8005/chat" \
  -F "query=What causes acne?" \
  -F "userId=test_user" \
  -F "domain=skincare"
```

### Test Question Generation
```bash
curl -X POST "http://localhost:8005/generate_questions" \
  -H "Content-Type: application/json" \
  -d '{"user_message": "I have acne", "ai_response": "Acne can be caused by..."}'
```

### Test Image Analysis
```bash
curl -X POST "http://localhost:8005/chat" \
  -F "query=Analyze my skin" \
  -F "userId=test_user" \
  -F "domain=skincare" \
  -F "image=@test_image.jpg"
```

## Environment Variables
```env
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_API_KEY_2=your_second_api_key  # Optional for rotation
```

## Common Issues

1. **Model Not Found**: Verify model name and API access
2. **Rate Limiting**: Use multiple API keys
3. **Poor Quality**: Adjust temperature settings
4. **Image Errors**: Check file size and format

## Best Practices

- Test changes in staging environment
- Monitor costs when switching models
- Keep backups of working configurations
- Use GPT-4o for image analysis (only model with vision)
- Set appropriate max_tokens to limit costs
