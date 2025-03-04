document.addEventListener('DOMContentLoaded', function() {
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

  const cardsContainer = document.getElementById('cards-container');
  if (!cardsContainer) return;  // Verifica se o container existe antes de continuar.

  // Function to render the cards
  function renderCards() {
    // Clear the container
    cardsContainer.innerHTML = '';
    
    // Create and append cards
    courses.forEach(course => {
      // Create card element
      const card = document.createElement('div');
      card.classList.add('card', course.color);

      // Create card content
      const cardContent = document.createElement('div');
      cardContent.classList.add('card-content');

      // Create card header
      const cardHeader = document.createElement('div');
      cardHeader.classList.add('card-header');
      cardHeader.innerHTML = `${course.icon}<h2 class="card-title">${course.title}</h2>`;
      
      // Create card details
      const cardDetails = document.createElement('div');
      cardDetails.classList.add('card-details');
      
      // Creating detail items
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

      // Append header and details to card content
      cardContent.appendChild(cardHeader);
      cardContent.appendChild(cardDetails);

      // Append card content to the card
      card.appendChild(cardContent);

      // Append card to the container
      cardsContainer.appendChild(card);
    });
  }

  // Initial render
  renderCards();
});
