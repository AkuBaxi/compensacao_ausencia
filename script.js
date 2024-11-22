const servers = [
        {
          id: 1,
          name: 'Design para Web',
          serverImage: 'img/teste1.jpg',
          channels: [
            {
              id: 1,
              name: '# 📱 geral',
              messages: [
                {
                  author: 'Sistema',
                  text: 'Bem-vindo ao servidor de Análise de Design! Aqui você encontrará uma análise detalhada sobre o redesign de uma rede social.'
                },
                  {
                    author: 'Sistema',
                    text: 'Bem-vindo ao servidor! Confira o código em https://github.com/AkuBaxi/compensacao_ausencia/tree/main/designWeb'
                  }                  
              ]
            },
            {
              id: 2,
              name: '# 💪 pontos-fortes',
              messages: [
                {
                  author: 'Sistema',
                  text: '📌 Navegação Intuitiva\n• Menu principal de fácil acesso\n• Ícones reconhecíveis universalmente\n• Hierarquia clara de informações'
                },
                {
                  author: 'Sistema',
                  text: '📌 Engajamento do Usuário\n• Sistema de likes e comentários\n• Stories para conteúdo efêmero\n• Feed infinito para maior retenção'
                },
                {
                  author: 'Sistema',
                  text: '📌 Performance\n• Carregamento rápido de imagens\n• Cache eficiente\n• Atualizações em tempo real'
                }
              ]
            },
            {
              id: 3,
              name: '# 🚫 pontos-fracos',
              messages: [
                {
                  author: 'Sistema',
                  text: '📌 Sobrecarga Visual\n• Excesso de informações na tela\n• Publicidade muito invasiva\n• Interface às vezes confusa em certas seções'
                },
                {
                  author: 'Sistema',
                  text: '📌 Problemas de Acessibilidade\n• Contraste insuficiente\n• Textos pequenos\n• Falta de suporte para leitores de tela'
                },
                {
                  author: 'Sistema',
                  text: '📌 Limitações Técnicas\n• Consumo alto de bateria\n• Uso excessivo de dados móveis\n• Performance inconsistente em dispositivos mais antigos'
                }
              ]
            },
            {
              id: 4,
          name: '# 🎨 style-guide',
          messages: [
            {
              author: ' Sistema de Cores',
              text: 'img:img_design/rootCores.png'
            },
            {
              author: 'Tipografia',
              text: 'img:img_design/rootTipografia.png'
            },
            {
              author: 'Espaçamento e Layout',
              text: 'img:img_design/rootLayout.png'
            },
            {
              author: 'Grid System',
              text: 'img:img_design/gridSystem.png'
            },
            {
              author: ' Animações e Transições',
              text: 'img:img_design/rootAnimation.png'
            },
            {
              author: 'Componentes Base',
              text: 'img:img_design/rootBase.png'
            }

          ]
            },
            {
              id: 5,
              name: '# 📈 melhorias',
              messages: [
                {
                  author: 'Sistema',
                  text: '📌 Design\n• Implementar Dark Mode nativo\n• Melhorar hierarquia visual\n• Criar mais espaço em branco\n• Adicionar micro-interações'
                },
                {
                  author: 'Sistema',
                  text: '📌 Usabilidade\n• Simplificar a navegação\n• Melhorar a gestão de notificações\n• Criar atalhos personalizáveis\n• Otimizar para uso com uma mão'
                },
                {
                  author: 'Sistema',
                  text: '📌 Acessibilidade \n • Aumentar contraste\n• Implementar suporte ARIA\n• Melhorar navegação por teclado\n• Adicionar descrições em imagens'
                }
              ]
            },
            {
              id: 6,
              name: '# 👥 público-alvo',
              messages: [
                {
                  author: 'Sistema',
                  text: '📌 Demografia Principal\n• Idade: 18-35 anos\n• Familiaridade com tecnologia: Alta\n• Dispositivo principal: Smartphone\n• Tempo médio de uso: 2-3 horas/dia'
                },
                {
                  author: 'Sistema',
                  text: '📌 Necessidades do Usuário\n• Compartilhamento rápido de conteúdo\n• Interação social contínua\n• Descoberta de novo conteúdo\n• Personalização da experiência'
                }
              ]
            }
          ]
        },
       
       
        {
          id: 2,
          name: '# jogos',
          serverImage: 'img/teste1.jpg',
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
      serverImage: 'img/teste1.jpg',
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

    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.getElementById('closeModal');

    // Fechar modal
    closeModal.addEventListener('click', () => {
        imageModal.classList.remove('active');
    });

    channel.messages.forEach(message => {
        const messageItem = document.createElement('li');
        messageItem.classList.add('message');

        const avatarElement = document.createElement('div');
        avatarElement.classList.add('message-avatar');
        const avatarImg = document.createElement('img');

        const contentElement = document.createElement('div');
        contentElement.classList.add('message-content');
        const authorElement = document.createElement('div');
        authorElement.classList.add('message-author');
        authorElement.textContent = message.author;

        const textElement = document.createElement('div');
        textElement.classList.add('message-text');

        if (message.text.includes('http://') || message.text.includes('https://')) {
            const parts = message.text.split(/\s+/); 
            parts.forEach(part => {
                if (part.startsWith('http://') || part.startsWith('https://')) {
                    const link = document.createElement('a');
                    link.href = part;
                    link.textContent = part;
                    link.target = '_blank'; 
                    link.style.color = 'white';
                    textElement.appendChild(link);
                } else {
                    const span = document.createElement('span');
                    span.textContent = part + ' ';
                    textElement.appendChild(span);
                }
            });
        } 
        else if (currentServerId === 1 && channel.id === 4 && message.text.startsWith('img:')) {
            const imgSrc = message.text.replace('img:', '').trim();
            const imgElement = document.createElement('img');
            imgElement.src = imgSrc;
            imgElement.alt = 'Imagem do usuário';
            imgElement.style.maxWidth = '100%';

            imgElement.addEventListener('click', () => {
                modalImage.src = imgSrc;
                imageModal.classList.add('active');
            });

            textElement.appendChild(imgElement);
        } else {
            textElement.textContent = message.text; 
        }

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