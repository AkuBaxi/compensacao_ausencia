const servers = [
    {
      id: 1,
      name: 'Servidor 1',
      serverImage: 'img/teste1.jpg',
      channels: [
        {
          id: 1,
          name: '# geral',
          messages: [
            {
              author: 'User 1',
              text: 'Olá, como posso ajudar?'
            },
            {
              author: 'User 2',
              text: 'Tudo bem, obrigado por perguntar!'
            },
            {
              author: 'User 3',
              text: 'Que bom ver você por aqui.'
            }
          ]
        },
        {
          id: 2,
          name: '# jogos',
          messages: [
            {
              author: 'User 1',
              text: 'Quem quer jogar Minecraft?'
            },
            {
              author: 'User 4',
              text: 'Eu quero! Vamos marcar uma partida.'
            }
          ]
        },
        {
          id: 3,
          name: '# música',
          messages: [
            {
              author: 'User 2',
              text: 'Alguém tem uma boa playlist de rock?'
            },
            {
              author: 'User 3',
              text: 'Eu tenho uma excelente, posso compartilhar.'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Servidor 2',
      serverImage: 'img/teste2.jpg',
      channels: [
        {
          id: 1,
          name: '# geral',
          messages: [
            {
              author: 'User 5',
              text: 'Oi, alguém pode me ajudar com uma dúvida?'
            },
            {
              author: 'User 6',
              text: 'Claro, pode perguntar.'
            }
          ]
        },
        {
          id: 2,
          name: '# videos',
          messages: [
            {
              author: 'User 5',
              text: 'Vocês viram o novo vídeo do YouTuber?'
            },
            {
              author: 'User 7',
              text: 'Sim, muito legal! Você gostou?'
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: 'Servidor 3',
      serverImage: 'img/teste3.jpg',
      channels: [
        {
          id: 1,
          name: '# geral',
          messages: [
            {
              author: 'User 8',
              text: 'Alguém precisa de ajuda com algo?'
            },
            {
              author: 'User 9',
              text: 'Eu tenho uma dúvida sobre o produto, pode me ajudar?'
            }
          ]
        },
        {
          id: 2,
          name: '# suporte',
          messages: [
            {
              author: 'User 8',
              text: 'Boa tarde, em que posso ajudar?'
            },
            {
              author: 'User 9',
              text: 'Tenho um problema com minha conta, pode me orientar?'
            }
          ]
        }
      ]
    }
  ];
  
  let currentServerId = 1;
  let currentChannelId = 1;
  
  function loadChannels() {
    const channelList = document.getElementById('channelList');
    channelList.innerHTML = '';
    const currentServer = servers.find(server => server.id === currentServerId);
    document.getElementById('serverName').textContent = currentServer.name;
    document.querySelector('.server-image img').src = currentServer.serverImage;
    currentServer.channels.forEach(channel => {
      const li = document.createElement('li');
      li.textContent = channel.name;
      li.classList.add('channel-item');
      li.dataset.channelId = channel.id;
      li.dataset.channelName = channel.name;
      li.addEventListener('click', () => {
        displayMessages(channel);
      });
      channelList.appendChild(li);
    });
  }
  
  function displayMessages(channel) {
    const messageList = document.getElementById('messageList');
    messageList.innerHTML = '';
    const channelName = document.getElementById('channelName');
    channelName.textContent = `${servers.find(server => server.id === currentServerId).name} - ${channel.name}`;
    currentChannelId = channel.id;
  
    channel.messages.forEach(message => {
      const messageItem = document.createElement('li');
      messageItem.classList.add('message');
  
      const avatarElement = document.createElement('div');
      avatarElement.classList.add('message-avatar');
      const avatarImg = document.createElement('img');
      avatarImg.src = 'https://via.placeholder.com/30';
      avatarImg.alt = message.author;
      avatarElement.appendChild(avatarImg);
  
      const contentElement = document.createElement('div');
      contentElement.classList.add('message-content');
      const authorElement = document.createElement('div');
      authorElement.classList.add('message-author');
      authorElement.textContent = message.author;
      const textElement = document.createElement('div');
      textElement.classList.add('message-text');
      textElement.textContent = message.text;
      contentElement.appendChild(authorElement);
      contentElement.appendChild(textElement);
  
      messageItem.appendChild(avatarElement);
      messageItem.appendChild(contentElement);
      messageList.appendChild(messageItem);
    });
  }
  
  function navigateToServer(serverId) {
    currentServerId = serverId;
    loadChannels();
    displayMessages(servers.find(server => server.id === currentServerId).channels[0]);
  }
  
  document.querySelectorAll('.server-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      const serverId = icon.dataset.serverId;
      navigateToServer(parseInt(serverId));
      userMenuElement.classList.toggle('hidden');
    });
  });
  
  document.getElementById('sendButton').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    if (message) {
      const currentServer = servers.find(server => server.id === currentServerId);
      const currentChannel = currentServer.channels.find(channel => channel.id === currentChannelId);
      const newMessage = {
        author: 'You',
        text: message
      };
      currentChannel.messages.push(newMessage);
      displayMessages(currentChannel);
      messageInput.value = '';
      const chatArea = document.getElementById('chat-area');
      chatArea.scrollTop = chatArea.scrollHeight;
    }
  });
  
  document.getElementById('messageInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      document.getElementById('sendButton').click();
    }
  });
  
  const userMenuElement = document.getElementById('user-menu');
  const userAvatars = document.querySelectorAll('.user-avatar');
  
  userAvatars.forEach(avatar => {
    avatar.addEventListener('click', () => {
        userMenuSidebar.classList.toggle('hidden');
    });
  });
  
  const channelItems = document.querySelectorAll('.channel-item');
  channelItems.forEach(item => {
    item.addEventListener('click', () => {
        const channelName = item.dataset.channelName;
        const selectedChannel = channels.find(channel => channel.name === channelName);
        displayMessages(selectedChannel);
    });
  });
  
  loadChannels();