let areaStampCard = document.querySelector('.team-container');

const TeamUsers = [
    {
        name:'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'img/wayne-barnett-founder-ceo.jpg',
        alt: 'Wayne Barnett, Founder & CEO'
    },
    {
        name:'Angela Caroll',
        role: 'Chief Editor',
        img: 'img/angela-caroll-chief-editor.jpg',
        alt: 'Angela Caroll, Chief Editor'
    },
    {
        name:'Walter Gordon',
        role: 'Office Manager',
        img: 'img/walter-gordon-office-manager.jpg',
        alt: 'Walter Gordon, Office Manager'
    },
    {
        name:'Angela Lopez',
        role: 'Social Media Manager',
        img: 'img/angela-lopez-social-media-manager.jpg',
        alt: 'Angela Lopez , Social media Manager'
    },
    {
        name:'Scott Estrada',
        role: 'Developer',
        img: 'img/scott-estrada-developer.jpg',
        alt: 'Scott Estrada, Developer'
    },
    {
        name:'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'img/img/barbara-ramos-graphic-designer.jpg',
        alt: 'Barbara Ramos, Graphic Designer'
    },
];

createCard(TeamUsers, TeamUsers.length);

function createCard(startCard , endCard){ 
    for (let i = startCard; i <= endCard; i++) {
        areaStampCard.innerHTML += `<div class="team-card">
        <div class="card-image">
          <img
            src="${TeamUsers[i].img}"
            alt="${TeamUsers[i].alt}"
          />
        </div>
        <div class="card-text">
          <h3>${TeamUsers[i].name}</h3>
          <p>${TeamUsers[i].role}</p>
        </div>
        </div>`;
        console.log(areaStampCard.innerHTML);
    };
}

console.log(createCard);

