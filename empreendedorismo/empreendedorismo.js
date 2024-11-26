// Page Content
const pageContent = {
    dashboard: `
        <div class="grid-container">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Resumo</h3>
                    <span class="badge badge-success">4 Campanhas</span>
                </div>
                <div class="chart">
                    <canvas id="campaignsChart"></canvas>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Próximas Sessões</h3>
                    <button class="btn btn-primary">
                        <i data-feather="plus"></i>
                        <span>Agendar</span>
                    </button>
                </div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Campanha</th>
                                <th>Data</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>A Maldição de Strahd</td>
                                <td>24/11/2024</td>
                                <td><span class="badge badge-success">Confirmada</span></td>
                            </tr>
                            <tr>
                                <td>Tormenta: Império de Jade</td>
                                <td>26/11/2024</td>
                                <td><span class="badge badge-warning">Pendente</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Personagens Ativos</h3>
                    <button class="btn btn-primary">
                        <i data-feather="user-plus"></i>
                        <span>Novo</span>
                    </button>
                </div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Personagem</th>
                                <th>Classe</th>
                                <th>Nível</th>
                                <th>Campanha</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Eldric</td>
                                <td>Paladino</td>
                                <td>7</td>
                                <td>A Maldição de Strahd</td>
                            </tr>
                            <tr>
                                <td>Mei Lin</td>
                                <td>Guerreira</td>
                                <td>5</td>
                                <td>Império de Jade</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Notas Rápidas</h3>
                    <button class="btn btn-primary">
                        <i data-feather="edit-2"></i>
                        <span>Nova Nota</span>
                    </button>
                </div>
                <div class="table-container">
                    <ul class="notes-list">
                        <li>Lembrar de preparar os mapas para a próxima sessão</li>
                        <li>Revisar as fichas dos NPCs principais</li>
                        <li>Comprar dados novos para a campanha</li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    
    campaigns: `
        <div class="header">
            <h2>Minhas Campanhas</h2>
            <button class="btn btn-primary" onclick="showModal('new-campaign-modal')">
                <i data-feather="plus"></i>
                <span>Nova Campanha</span>
            </button>
        </div>
        <div class="grid-container campaign-grid">
            <!-- Cards will be loaded dynamically -->
        </div>
    `,
    
    characters: `
        <div class="header">
            <h2>Personagens</h2>
            <button class="btn btn-primary" onclick="showModal('new-character-modal')">
                <i data-feather="user-plus"></i>
                <span>Novo Personagem</span>
            </button>
        </div>
        <div class="grid-container character-grid">
            <!-- Cards will be loaded dynamically -->
        </div>
    `,
    
    maps: `
        <div class="header">
            <h2>Mapas</h2>
            <button class="btn btn-primary">
                <i data-feather="upload"></i>
                <span>Importar Mapa</span>
            </button>
        </div>
        <div class="grid-container maps-grid">
            <!-- Content will be loaded dynamically -->
        </div>
    `,
    
    dice: `
        <div class="header">
            <h2>Rolagem de Dados</h2>
            <button class="btn btn-primary">
                <i data-feather="plus"></i>
                <span>Nova Rolagem</span>
            </button>
        </div>
        <div class="dice-container">
            <!-- Dice roller content will be loaded dynamically -->
        </div>
    `,
    
    library: `
        <div class="header">
            <h2>Biblioteca</h2>
            <button class="btn btn-primary">
                <i data-feather="book"></i>
                <span>Adicionar Item</span>
            </button>
        </div>
        <div class="grid-container library-grid">
            <!-- Library content will be loaded dynamically -->
        </div>
    `,
    
    settings: `
        <div class="header">
            <h2>Configurações</h2>
        </div>
        <div class="settings-container">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Preferências</h3>
                </div>
                <form id="settings-form" class="settings-form">
                    <!-- Settings form content will be loaded dynamically -->
                </form>
            </div>
        </div>
    `
};

pageContent.characterModal = `
    <div id="new-character-modal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Criar Novo Personagem</h3>
                <button class="modal-close"><i data-feather="x"></i></button>
            </div>
            <form id="character-form" class="character-form">
                <div class="form-group">
                    <label for="character-name">Nome do Personagem</label>
                    <input type="text" id="character-name" name="character-name" required>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="character-race">Raça</label>
                        <select id="character-race" name="character-race" required>
                            <option value="">Selecione uma raça</option>
                            <option value="Humano">Humano</option>
                            <option value="Elfo">Elfo</option>
                            <option value="Anão">Anão</option>
                            <option value="Halfling">Halfling</option>
                            <option value="Meio-Elfo">Meio-Elfo</option>
                            <option value="Meio-Orc">Meio-Orc</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="character-class">Classe</label>
                        <select id="character-class" name="character-class" required>
                            <option value="">Selecione uma classe</option>
                            <option value="Guerreiro">Guerreiro</option>
                            <option value="Mago">Mago</option>
                            <option value="Clérigo">Clérigo</option>
                            <option value="Ladino">Ladino</option>
                            <option value="Paladino">Paladino</option>
                            <option value="Ranger">Ranger</option>
                        </select>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="character-level">Nível</label>
                        <input type="number" id="character-level" name="character-level" min="1" max="20" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="character-campaign">Campanha</label>
                        <select id="character-campaign" name="character-campaign" required>
                            <option value="">Selecione uma campanha</option>
                        </select>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="character-background">Antecedente</label>
                        <select id="character-background" name="character-background" required>
                            <option value="">Selecione um antecedente</option>
                            <option value="Acólito">Acólito</option>
                            <option value="Criminoso">Criminoso</option>
                            <option value="Artista">Artista</option>
                            <option value="Herói do Povo">Herói do Povo</option>
                            <option value="Nobre">Nobre</option>
                            <option value="Sábio">Sábio</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="character-alignment">Alinhamento</label>
                        <select id="character-alignment" name="character-alignment" required>
                            <option value="">Selecione um alinhamento</option>
                            <option value="Leal e Bom">Leal e Bom</option>
                            <option value="Neutro e Bom">Neutro e Bom</option>
                            <option value="Caótico e Bom">Caótico e Bom</option>
                            <option value="Leal e Neutro">Leal e Neutro</option>
                            <option value="Neutro">Neutro</option>
                            <option value="Caótico e Neutro">Caótico e Neutro</option>
                            <option value="Leal e Mau">Leal e Mau</option>
                            <option value="Neutro e Mau">Neutro e Mau</option>
                            <option value="Caótico e Mau">Caótico e Mau</option>
                        </select>
                    </div>
                </div>

                <div class="attributes-section">
                    <h4>Atributos</h4>
                    <div class="attributes-grid">
                        <div class="form-group">
                            <label for="strength">Força</label>
                            <input type="number" id="strength" name="strength" min="1" max="20" required>
                        </div>
                        <div class="form-group">
                            <label for="dexterity">Destreza</label>
                            <input type="number" id="dexterity" name="dexterity" min="1" max="20" required>
                        </div>
                        <div class="form-group">
                            <label for="constitution">Constituição</label>
                            <input type="number" id="constitution" name="constitution" min="1" max="20" required>
                        </div>
                        <div class="form-group">
                            <label for="intelligence">Inteligência</label>
                            <input type="number" id="intelligence" name="intelligence" min="1" max="20" required>
                        </div>
                        <div class="form-group">
                            <label for="wisdom">Sabedoria</label>
                            <input type="number" id="wisdom" name="wisdom" min="1" max="20" required>
                        </div>
                        <div class="form-group">
                            <label for="charisma">Carisma</label>
                            <input type="number" id="charisma" name="charisma" min="1" max="20" required>
                        </div>
                    </div>
                </div>

                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="hideModal('new-character-modal')">
                        Cancelar
                    </button>
                    <button type="submit" class="btn btn-primary">
                        Criar Personagem
                    </button>
                </div>
            </form>
        </div>
    </div>
`;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    loadPage('dashboard');
    initFeather();
    setupEventListeners();
    loadAvailableCampaigns(); // Add this line
}

function loadAvailableCampaigns() {
    // This would typically fetch from your backend
    const campaigns = [
        { id: 1, name: 'A Maldição de Strahd' },
        { id: 2, name: 'Tormenta: Império de Jade' }
    ];
    
    const campaignSelect = document.getElementById('character-campaign');
    if (campaignSelect) {
        campaigns.forEach(campaign => {
            const option = document.createElement('option');
            option.value = campaign.name;
            option.textContent = campaign.name;
            campaignSelect.appendChild(option);
        });
    }
}

// Initialize Feather Icons
function initFeather() {
    feather.replace();
}

// Setup Event Listeners
function setupEventListeners() {
    setupSidebarToggle();
    setupNavigation();
    setupProfileButton();
    setupNotificationsButton();
    setupFormSubmissions();
    setupModalClosers();
    setupSearch();
}

function handleCharacterFormSubmit(e) {
    e.preventDefault();
    showLoading();

    const formData = new FormData(e.target);
    const characterData = {
        name: formData.get('character-name'),
        race: formData.get('character-race'),
        class: formData.get('character-class'),
        level: parseInt(formData.get('character-level')),
        campaign: formData.get('character-campaign'),
        background: formData.get('character-background'),
        alignment: formData.get('character-alignment'),
        attributes: {
            strength: parseInt(formData.get('strength')),
            dexterity: parseInt(formData.get('dexterity')),
            constitution: parseInt(formData.get('constitution')),
            intelligence: parseInt(formData.get('intelligence')),
            wisdom: parseInt(formData.get('wisdom')),
            charisma: parseInt(formData.get('charisma'))
        }
    }
    if (!validateCharacterData(characterData)) {
        hideLoading();
        showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
    }
 // Simulate character creation with server delay
 setTimeout(() => {
        // Here you would typically send the data to your server
        console.log('Character created:', characterData);
        
        // Update the characters list in the UI
        addCharacterToList(characterData);
        
        // Clean up and notify
        hideLoading();
        hideModal('new-character-modal');
        showNotification('Personagem criado com sucesso!', 'success');
        
        // Clear form
        e.target.reset();
        
        // Reload characters page if we're on it
        const currentPage = document.querySelector('.nav-item.active').dataset.page;
        if (currentPage === 'characters') {
            loadPage('characters');
        }
    }, 1000);
}
function addCharacterToList(character) {
    const charactersList = document.querySelector('.character-grid');
    if (!charactersList) return;

    const characterCard = document.createElement('div');
    characterCard.className = 'card character-card';
    characterCard.innerHTML = `
        <div class="card-header">
            <h3 class="card-title">${character.name}</h3>
            <span class="badge badge-primary">Nível ${character.level}</span>
        </div>
        <div class="card-content">
            <p><strong>Raça:</strong> ${character.race}</p>
            <p><strong>Classe:</strong> ${character.class}</p>
            <p><strong>Campanha:</strong> ${character.campaign}</p>
        </div>
        <div class="card-footer">
            <button class="btn btn-secondary" onclick="viewCharacter('${character.name}')">
                <i data-feather="eye"></i>
                <span>Ver Detalhes</span>
            </button>
            <button class="btn btn-primary" onclick="editCharacter('${character.name}')">
                <i data-feather="edit"></i>
                <span>Editar</span>
            </button>
        </div>
    `;

    charactersList.appendChild(characterCard);
    feather.replace();
}

// Validation function for character data
function validateCharacterData(data) {
    if (!data.name || !data.race || !data.class || !data.level || !data.campaign) {
        return false;
    }
    
    const attributes = data.attributes;
    for (let attr in attributes) {
        if (isNaN(attributes[attr]) || attributes[attr] < 1 || attributes[attr] > 20) {
            return false;
        }
    }
    
    return true;
}

function setupSidebarToggle() {
    const toggleBtn = document.getElementById('toggle-sidebar');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            document.getElementById('sidebar').classList.toggle('collapsed');
            document.getElementById('main-content').classList.toggle('expanded');
        });
    }
}

function setupNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const page = this.dataset.page;
            if (page) {
                loadPage(page);
                updateActiveNavItem(this);
            }
        });
    });
}

function updateActiveNavItem(clickedItem) {
    const currentActive = document.querySelector('.nav-item.active');
    if (currentActive) {
        currentActive.classList.remove('active');
    }
    clickedItem.classList.add('active');
}

function setupProfileButton() {
    const profileBtn = document.getElementById('profile-btn');
    if (profileBtn) {
        profileBtn.addEventListener('click', () => {
            showNotification('Perfil em desenvolvimento', 'info');
        });
    }
}

function setupNotificationsButton() {
    const notificationsBtn = document.getElementById('notifications-btn');
    if (notificationsBtn) {
        notificationsBtn.addEventListener('click', () => {
            showNotification('Nenhuma notificação no momento', 'info');
        });
    }
}

function setupFormSubmissions() {
    const campaignForm = document.getElementById('campaign-form');
    if (campaignForm) {
        campaignForm.addEventListener('submit', handleCampaignFormSubmit);
    }

    const characterForm = document.getElementById('character-form');
    if (characterForm) {
        characterForm.addEventListener('submit', handleCharacterFormSubmit);
    }
}

function handleCampaignFormSubmit(e) {
    e.preventDefault();
    showLoading();
    
    // Simulate form submission
    setTimeout(() => {
        hideLoading();
        hideModal('new-campaign-modal');
        showNotification('Campanha criada com sucesso!', 'success');
        loadPage('campaigns'); // Reload campaigns page
    }, 1000);
}

function setupModalClosers() {
    // Close on backdrop click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                hideModal(this.id);
            }
        });
    });

    // Close on X button click
    document.querySelectorAll('.modal-close').forEach(close => {
        close.addEventListener('click', function() {
            const modalId = this.closest('.modal').id;
            hideModal(modalId);
        });
    });
}

function setupSearch() {
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }
}

function handleSearch(e) {
    const query = e.target.value.trim();
    if (query.length >= 2) {
        showNotification('Buscando...', 'info');
        // Implement search logic here using searchSystem from the first file
        const results = searchSystem.search(query);
        displaySearchResults(results);
    }
}

// Utility Functions
function loadPage(page) {
    showLoading();
    const content = pageContent[page];
    
    if (content) {
        document.getElementById('page-content').innerHTML = content;
        initFeather();
        if (page === 'dashboard') {
            initCharts();
        }
    } else {
        document.getElementById('page-content').innerHTML = '<h2>Página em construção</h2>';
    }
    
    hideLoading();
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

function showLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.classList.add('show');
    }
}

function hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.classList.remove('show');
    }
}

function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    const text = document.getElementById('notification-text');
    
    if (notification && text) {
        text.textContent = message;
        notification.className = `notification show notification-${type}`;
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function initCharts() {
    const ctx = document.getElementById('campaignsChart');
    if (ctx) {
        new Chart(ctx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                datasets: [{
                    label: 'Sessões Realizadas',
                    data: [12, 19, 15, 17, 14, 15],
                    borderColor: '#2ECC71',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}