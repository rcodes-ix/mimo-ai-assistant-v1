<img width="885" height="725" alt="Screenshot 2026-06-02 183742" src="https://github.com/user-attachments/assets/47bb077e-1c9c-4365-8344-25b7807fc1c2" />




# Mimo V1
<img width="885" height="725" alt="Screenshot 2026-06-02 183742" src="https://github.com/user-attachments/assets/2ec5f7f7-e313-439d-a46f-e7f27db4b434" />


Mimo V1 is my first attempt at building an AI-powered content creation assistant.

The goal of this project was not to create the smartest AI assistant. Instead, the goal was to learn and experiment with:

- Frontend UI development
- Responsive chat interfaces
- Connecting a web application to Ollama
- Running local language models
- Customizing model behavior using a Modelfile
- Building a complete AI project from scratch

## Project Status

This is Version 1.

It is a learning project and an experimental prototype.

Some features are incomplete or currently act as visual placeholders:

- The **plus (+) button** is present in the interface but file uploads are not implemented yet.
- The **voice icon** is present but voice functionality has not been implemented.
- The AI model behavior is still being improved and may produce inconsistent responses.
- Memory, advanced state management, and workflow control are not fully implemented.

## Features

- Modern chat interface
- Responsive design
- Custom styling with CSS
- JavaScript-based chat interaction
- Connected to Ollama local API
- Custom AI assistant personality using a Modelfile
- Support for running local language models

## Tech Stack

- HTML
- CSS
- JavaScript
- Ollama
- Phi-3 (default model used in this version)

## Model Customization

Mimo uses a custom Modelfile to modify the behavior of the base model.

The Modelfile defines:

- Assistant identity
- Content creation focus
- Social media growth assistance
- Custom response behavior
- Content strategy guidance

This allows the base model to behave more like a specialized content creation assistant.

## Requirements

Before running this project, install:

1. Ollama
2. A compatible language model

### Recommended Models

#### Low-End PCs

```text
Phi-3 Mini
TinyLlama
Llama 3.2 1B
```

#### Mid-Range PCs

```text
Phi-3
Llama 3.2 3B
Gemma 3 4B
```

#### High-End PCs

```text
Llama 3.3 70B
Qwen3 32B
Qwen3 72B
Gemma 3 27B
DeepSeek-R1 Distill 32B+
```

## Installation

### 1. Install Ollama

Download and install Ollama.

Verify the installation:

```bash
ollama --version
```

### 2. Download a Model

Example:

```bash
ollama pull phi3
```

### 3. Create the Custom Mimo Model

Using the included Modelfile:

```bash
ollama create mimo -f Modelfile
```

### 4. Run the Model

```bash
ollama run mimo
```

### 5. Launch the Project

Open the HTML file in your browser.

Make sure Ollama is running locally before using the application.

The application communicates with:

```text
http://localhost:11434
```

## What I Learned

Through this project I learned:

- How local LLMs work
- How to interact with AI models through APIs
- How to customize model behavior
- How frontend and AI systems communicate
- How difficult it is to control AI behavior consistently

## Future Plans

Planned improvements for future versions:

- File uploads
- Voice input
- Better model behavior
- Improved onboarding flow
- Memory support
- Better content generation quality
- Additional local model options

## Notes

This project is focused on learning and experimentation rather than creating a production-ready AI assistant.

Version 1 was primarily built to explore:

- Local LLM integration
- Ollama workflows
- Model customization through Modelfiles
- Frontend chatbot development
- Responsive UI design

This project represents the first version of Mimo and my first hands-on exploration of local LLM development, model customization, and AI application building.

## Video
![Demo](https://github.com/rcodes-ix/mimo-ai-assistant-v1/blob/main/src/assets/mimo-v1-demo.gif?raw=true)
