document.addEventListener('DOMContentLoaded', function() {
  // Verificar preferência de tema
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Verificar se há uma preferência salva
  const savedTheme = localStorage.getItem('theme');
  
  // Aplicar tema inicial
  if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
    document.body.classList.add('dark-mode');
    document.getElementById('moon-icon').classList.add('hidden');
    document.getElementById('sun-icon').classList.remove('hidden');
  }
  
  // Alternar tema
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Alternar ícones
    document.getElementById('moon-icon').classList.toggle('hidden', isDarkMode);
    document.getElementById('sun-icon').classList.toggle('hidden', !isDarkMode);
  });
  
  // Navegação por abas
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remover classe active de todos os links
      navLinks.forEach(link => link.classList.remove('active'));
      
      // Adicionar classe active ao link clicado
      this.classList.add('active');
      
      // Esconder todas as seções
      sections.forEach(section => section.classList.add('hidden'));
      
      // Mostrar a seção correspondente
      const targetId = this.getAttribute('data-section');
      document.getElementById(targetId).classList.remove('hidden');
    });
  });
  
  // Course data
  const courses = [
    {
      title: "Engenharia Eletrônica",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="card-icon blue"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="2" x2="9" y2="4"></line><line x1="15" y1="2" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="22"></line><line x1="15" y1="20" x2="15" y2="22"></line><line x1="20" y1="9" x2="22" y2="9"></line><line x1="20" y1="14" x2="22" y2="14"></line><line x1="2" y1="9" x2="4" y2="9"></line><line x1="2" y1="14" x2="4" y2="14"></line></svg>`,
      duration: "5 anos",
      focus: "Hardware, circuitos, sistemas embarcados, automação",
      jobOpportunities: "Indústrias, telecomunicações, automação, pesquisa",
      salary: "R$ 5.000 - R$ 12.000",
      companies: "Embraer, Siemens, Intel, Samsung",
      color: "blue"
    },
    {
      title: "Análise e Desenvolvimento de Sistemas",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="card-icon green"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
      duration: "2-3 anos",
      focus: "Software, programação, banco de dados, desenvolvimento web/mobile",
      jobOpportunities: "Empresas de tecnologia, startups, consultorias",
      salary: "R$ 3.500 - R$ 10.000",
      companies: "Google, Microsoft, Nubank, Mercado Livre",
      color: "green"
    }
  ];

  // Renderizar cards
  const cardsContainer = document.getElementById('cards-container');
  if (cardsContainer) {
    // Limpar o container
    cardsContainer.innerHTML = '';
    
    // Criar e adicionar cards
    courses.forEach(course => {
      // Criar elemento do card
      const card = document.createElement('div');
      card.classList.add('card', course.color);

      // Criar conteúdo do card
      const cardContent = document.createElement('div');
      cardContent.classList.add('card-content');

      // Criar cabeçalho do card
      const cardHeader = document.createElement('div');
      cardHeader.classList.add('card-header');
      cardHeader.innerHTML = `${course.icon}<h2 class="card-title">${course.title}</h2>`;
      
      // Criar detalhes do card
      const cardDetails = document.createElement('div');
      cardDetails.classList.add('card-details');
      
      // Criar itens de detalhes
      const details = [
        { label: 'Duração', value: course.duration, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="detail-icon"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>' },
        { label: 'Foco do Curso', value: course.focus, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="detail-icon"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>' },
        { label: 'Oportunidades de Trabalho', value: course.jobOpportunities, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="detail-icon"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>' },
        { label: 'Faixa Salarial', value: course.salary, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="detail-icon"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>' },
        { label: 'Empresas', value: course.companies, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="detail-icon"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><path d="M9 18V9"></path><path d="M15 18v-6"></path></svg>' }
      ];

      details.forEach(detail => {
        const detailItem = document.createElement('div');
        detailItem.classList.add('detail-item');
        
        const detailIcon = document.createElement('div');
        detailIcon.classList.add('detail-icon');
        detailIcon.innerHTML = detail.icon;
        
        const detailContent = document.createElement('div');
        detailContent.classList.add('detail-content');
        
        const detailLabel = document.createElement('p');
        detailLabel.classList.add('detail-label');
        detailLabel.textContent = detail.label;
        
        const detailValue = document.createElement('p');
        detailValue.classList.add('detail-value');
        detailValue.textContent = detail.value;

        detailContent.appendChild(detailLabel);
        detailContent.appendChild(detailValue);
        
        detailItem.appendChild(detailIcon);
        detailItem.appendChild(detailContent);
        
        cardDetails.appendChild(detailItem);
      });

      // Adicionar cabeçalho e detalhes ao conteúdo do card
      cardContent.appendChild(cardHeader);
      cardContent.appendChild(cardDetails);

      // Adicionar conteúdo ao card
      card.appendChild(cardContent);

      // Adicionar card ao container
      cardsContainer.appendChild(card);
    });
  }
  
  // Área restrita com senha
  const loginButton = document.getElementById('login-button');
  const passwordInput = document.getElementById('password');
  const errorMessage = document.getElementById('error-message');
  const loginForm = document.getElementById('login-form');
  const restrictedContent = document.getElementById('restricted-content');
  
  // Senha simples (apenas para demonstração)
  // Em um site real, você nunca deve armazenar senhas diretamente no JavaScript
  const correctPassword = "meuspais";
  
  if (loginButton) {
    loginButton.addEventListener('click', function() {
      if (passwordInput.value === correctPassword) {
        // Senha correta
        loginForm.classList.add('hidden');
        restrictedContent.classList.remove('hidden');
        errorMessage.style.display = 'none';
      } else {
        // Senha incorreta
        errorMessage.textContent = 'Senha incorreta. Tente novamente.';
        errorMessage.style.display = 'block';
      }
    });
  }
  
  // Permitir enviar com Enter
  if (passwordInput) {
    passwordInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        loginButton.click();
      }
    });
  }
});