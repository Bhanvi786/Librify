
document.addEventListener('DOMContentLoaded', () => {
  const chatbotContainer = document.getElementById('chatbot-container');
  const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
  const chatbotCloseBtn = document.getElementById('chatbot-close-btn');
  const chatbotForm = document.getElementById('chatbot-form');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotMessages = document.getElementById('chatbot-messages');

  chatbotToggleBtn.addEventListener('click', () => {
    chatbotContainer.classList.remove('chatbot-closed');
  });

  chatbotCloseBtn.addEventListener('click', () => {
    chatbotContainer.classList.add('chatbot-closed');
  });


  function appendMessage(message, sender) {
    const messageElem = document.createElement('div');
    messageElem.classList.add('chatbot-message', sender);
    messageElem.textContent = message;
    chatbotMessages.appendChild(messageElem);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  async function sendMessageToAPI(message) {
    const apiKey = 'YOUR_OPENAI_API_KEY_HERE'; 
    const endpoint = 'https://api.openai.com/v1/chat/completions';

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    };

    const body = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
      max_tokens: 150,
      temperature: 0.7
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      const reply = data.choices[0].message.content.trim();
      return reply;
    } catch (error) {
      console.error('Error communicating with OpenAI API:', error);
      return 'Sorry, I am having trouble responding right now.';
    }
  }

});
