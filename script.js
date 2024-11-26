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
      name: 'Empreendedorismo Tecnologico',
      serverImage: '../empreendedorismo/imgEmpreendedorismo/logoRPGHub.png',
      channels: [
        {
          id: 1,
              name: '# 📱 geral',
              messages: [
                {
                  author: 'Sistema',
                  text: 'Bem-vindo ao servidor de Empreendedorismo Tecnologico! Aqui você encontrará uma criação de uma startup de RPG.'
                },
                  {
                    author: 'Sistema',
                    text: 'Bem-vindo ao servidor! Confira o código em https://github.com/AkuBaxi/compensacao_ausencia/tree/main/empreendedorismo'
                  }                  
              ]
        },
        {
          id: 2,
          name: '# 🎲 O que é?',
          messages: [
            {
              author: 'Sistema',
              text: 'A RPG Hub é uma plataforma integrada que revoluciona a experiência de jogadores e mestres de RPG, oferecendo ferramentas intuitivas para criação, organização e personalização de campanhas.'
            }
          ]
        },
        {
          id:3,
          name: '# ⚠ Problema Real e Solução',
         messages:[
          {
            author: 'Sistema',
             text:'Jogadores e mestres de RPG enfrentam dificuldades para organizar campanhas, criar mapas e fichas personalizadas, e conectar grupos de forma eficiente. \n Recursos online existentes são fragmentados ou complexos para iniciantes. \n Falta de integração entre ferramentas existentes aumenta custos e tempo de preparação. \n A experiência de jogo é prejudicada por problemas de organização e comunicação.'
          },
          {
            author: 'Sistema',
            text: 'A RPG Hub oferece soluções para esses problemas, incluindo: \n • Ferramentas de criação de campanhas e mapas personalizados \n• Integração de recursos online para facilitar a organização e comunicação \n• Plataforma de gerenciamento de grupos e campanhas \n • Ferramentas de personalização de fichas e recursos de jogo'
            }
         ]
        },
        {
          id: 4,
          name: '# 👥 público-alvo',
          messages:[
            {
              author:'Sistema',
              text: 'A RPG Hub é projetada para atender a uma ampla gama de públicos, incluindo: \n • Jogadores de RPG \n • Mestres de RPG \n • Criadores de conteúdo \n • Organizadores de eventos \n • Fãs de RPG \n • Jogadores Iniciantes \n • Jogadores experientes \n • Criadores de RPG'
            }
          ]
          },
          {
            id: 5,
            name: '# 🏆 Proposta de Valor',
            messages: [
              {
                author: 'Sistema',
                text:'Proposta de Valor \n • Plataforma all-in-one para RPG, \n • Interface intuitiva e moderna, \n • Suporte multiplataforma (PC, Mobile, Tablet) \n • Integração com sistemas populares \n • Recursos de comunidade e social '
                }
              ]
            },
            {
              id: 6,
              name: '# 🧾 Análise Financeira',
              messages: [
                {
                  author: ' Receitas ',
                  text:'• Assinaturas Premium (5000 usuários x $7.99 x 12 meses) = $479,400 \n • Marketplace (30% comissão sobre $200,000) = $60,000 \n • Parcerias e Anúncios = $40,000 \n • Total Receitas: $579,400'
                  },
                  {
                    author: ' Custos ',
                    text: ' • Desenvolvimento e Manutenção = $200,000 \n • Marketing e Aquisição = $100,000 \n • Infraestrutura e Servidores = $50,000 \n  • Equipe de Suporte = $80,000\n • Custos Administrativos = $40,000 \n • Total Custos: $470,000 \n '
                    },
                    {
                      author: 'Lucro',
                      text: 'Lucro Projetado Ano 1: $109,400'
                      }

                ]
              }
      ]
    },
    {
      id: 3,
      name: 'Ciência de Dados',
      serverImage: 'img/teste1.jpg',
      channels: [
        {
          id: 1,
          name: '# 📱 geral',
          messages: [
            {
              author: 'Sistema',
              text: 'Bem-vindo ao servidor de Análise de Design! Aqui você encontrará uma análise detalhada sobre o dados coletados do Spotify'
            },
              {
                author: 'Sistema',
                text: 'Bem-vindo ao servidor! Confira o código em https://github.com/AkuBaxi/compensacao_ausencia/tree/main/cienciaDados'
              }                  
          ]
        },
        {
          id: 2,
          name: '# 🎲 O que é?',
          messages: [
            {
              author: '',
              text: 'A ciência de dados e a coleta de dados existem para transformar informações brutas em insights valiosos.'
            },
            {
              author: '',
              text: ' A coleta de dados permite reunir informações de diversas fontes, enquanto a ciência de dados analisa, processa e interpreta esses dados usando técnicas estatísticas e computacionais. '
            },
            {
              author: '',
              text: ' O objetivo é tomar decisões mais informadas, prever tendências, resolver problemas complexos e impulsionar a inovação em áreas como negócios, saúde, tecnologia e pesquisa científica.'
            }
          ]
        },
        {
          id: 2,
          name: '#🧾 Metodologia',
          messages: [
            {
              author: '',
              text: 'O estudo utilizou um dashboard interativo para análise de dados musicais baseados em métricas do Spotify. '
            },
            {
              author: '',
              text: ' A metodologia incluiu a coleta de informações como streams, dançabilidade, gênero musical, e artista, com filtros por período e categoria. '
            },
            {
              author: '',
              text: ' A visualização foi feita por gráficos (barras, pizza e linhas) para identificar padrões e tendências.'
            },
            {
              author: '📊 Gráfico de Barras',
              text: 'img:img_dados/barras.png'
            },
            {
              author: '🍕 Gráfico de Pizza',
              text: 'img:img_dados/pizza.png'
            },
            {
              author: '📈 Gráfico Linhas e Barras',
              text: 'img:img_dados/linhas_barras.png'
            }
          ]
        },
        
      ]
    },
    {
      id: 4,
      name: 'Ética e Direito Digital',
      serverImage: 'img/teste1.jpg',
      channels: [
        {
          id: 1,
          name: '# 📱 geral',
          messages: [
            {
              author: 'Sistema',
              text: 'Bem-vindo ao servidor de Ética e Direito Digital! Aqui você encontrará uma campanha de conscientização sobre segurança digital para adolescentes.'
            },
              {
                author: 'Sistema',
                text: 'Bem-vindo ao servidor! Confira o código em https://github.com/AkuBaxi/compensacao_ausencia/tree/main/etica'
              }                  
          ]
        },
        {
          id: 2,
          name: '# ❗ Objetivo',
          messages: [
            {
              author: '',
              text: 'Educar sobre riscos digitais'
            },
            {
              author: '',
              text: ' Promover conscientização sobre privacidade online '
            },
            {
              author: '',
              text: ' Oferecer recursos práticos de segurança digital'
            }
          ]
        },
        {
          id: 2,
          name: '#🧾 Recursos e Funcionalidades',
          messages: [
            {
              author: '',
              text: 'Seção de Temas Interativos. \n Quiz de Segurança Digital. \n Links para recursos de apoio'
            },
            {
              author: '',
              text: ' Cards interativos sobre temas digitais. \n Quiz educativo. \n  Design responsivo. \n Cores e estilo modernos.'
            }
          ]
        },
        
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
        }
        else if (currentServerId === 3 && channel.id === 2 && message.text.startsWith('img:')) {
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
        }
         else {
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
