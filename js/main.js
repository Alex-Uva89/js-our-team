let areaStampCard = document.querySelector('.team-container');
console.log(areaStampCard)

const teamUsers = [ // creo l'array contenente dentro obj in cui inserisco come coppie i dati di ogni componente del team
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
        img: 'img/barbara-ramos-graphic-designer.jpg',
        alt: 'Barbara Ramos, Graphic Designer'
    },
];

console.log(teamUsers)

createCard(0, teamUsers.length);// callback della funzione con argomenti inseriti
console.log(createCard); // controllo della funzione 

function createCard(startCard , endCard){ // creo la funzione per creare le card 
    for (let i = startCard; i <= endCard; i++) { // utilizzo il medoto dell'innerHTML in quanto la card ha una struttura ben complessa, tanto è una card che viene ripetuta più volte. 
        areaStampCard.innerHTML += `<div class="team-card">
        <div class="card-image">
          <img
            src="${teamUsers[i].img}"
            alt="${teamUsers[i].alt}"
          />
        </div>
        <div class="card-text">
          <h3>${teamUsers[i].name}</h3>
          <p>${teamUsers[i].role}</p>
        </div>
        </div>`;

    };
}



