# Image Captioning in Klyra AI

## What is Image Captioning?

Image captioning is the process of automatically generating descriptive text from images. In Klyra AI, it helps analyze skin conditions from uploaded photos to provide better skincare advice.

## Technique Used in main.py

### **GPT-4 Vision (GPT-4o)**
Klyra AI uses **OpenAI's GPT-4o model** for image captioning, which is a **multimodal AI** that can:
- **See and understand images** like a human
- **Generate detailed descriptions** of what it observes
- **Focus on specific details** relevant to skincare

### **How It Works**

1. **Image Processing**: 
   - User uploads a skin photo
   - Image is converted to base64 format
   - Sent to GPT-4o for analysis

2. **Specialized Prompting**:
   - Uses a **dermatology-focused prompt** that asks the AI to describe skin conditions
   - Prompts the AI to think like the person experiencing the skin issue
   - Focuses on medical details: redness, spots, texture, lesions, etc.

3. **Integration with Chat**:
   - Generated caption is **combined with user's text question**
   - Creates a complete context for the chatbot
   - Enables **visual + textual** analysis

### **Key Features**

- ✅ **Medical Focus**: Specifically trained to identify skin conditions
- ✅ **Detailed Analysis**: Describes size, color, distribution of skin issues
- ✅ **Natural Language**: Generates human-like descriptions
- ✅ **Contextual**: Considers possible causes and treatments
- ✅ **Seamless Integration**: Works automatically with chat system

### **Why This Approach?**

- **No Training Required**: Uses pre-trained GPT-4o model
- **High Accuracy**: GPT-4o excels at visual understanding
- **Flexible**: Can analyze any type of skin condition
- **Cost-Effective**: No need for custom model training
- **Easy Integration**: Works directly with existing chat system

The image captioning makes Klyra AI more powerful by allowing users to show their skin conditions visually, not just describe them in words.
