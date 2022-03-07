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
for (let i = 0; i < teamUsers.length; i++) { // uso il minore senza l'uguale per non utilizzare il lenght - 1
createCard(teamUsers[i]);// callback della funzione con argomenti inseriti
};

function createCard(membro){ // creo la funzione per creare le card 
    // utilizzo il medoto dell'innerHTML in quanto la card ha una struttura ben complessa, tanto è una card che viene ripetuta più volte. 
        areaStampCard.innerHTML += `<div class="team-card">
        <div class="card-image">
          <img
            src="${membro.img}"
            alt="${membro.alt}"
          />
        </div>
        <div class="card-text">
          <h3>${membro.name}</h3>
          <p>${membro.role}</p>
        </div>
        </div>`; 
}

// BONUS 

const inputName = document.getElementById('name');
const inputRole = document.getElementById('role');
const inputImg = document.getElementById('image');
const btnAddMember = document.getElementById('addMemberButton');



btnAddMember.addEventListener('click', function() { // creo evento click sul bottone add per aggiungere nuovi elementi alla pagina con il form
    const newMember = { //creo nuovo oggetto da aggiungere all'array (prendo esempio da oggetti già creati precedentemente)
        name: inputName.value, //nella coppia chiave:valore nel valore inserisco il value dell'input
        role: inputRole.value, //nella coppia chiave:valore nel valore inserisco il value dell'input
        img: inputImg.value, //nella coppia chiave:valore nel valore inserisco il value dell'input
        alt: inputName.value + ',' +inputRole.value //nella coppia chiave:valore nel valore inserisco il value dell'input che è formato dai valori precedenti
    }
    teamUsers.push(newMember) // inserisco il nuovo oggetto all'interno dell'array
    createCard(teamUsers[teamUsers.length - 1]) // callback di funzione inserendo al posto del momebro l'ultimo elemento dell'array evidenziato con la lunghezza dello st4esso - 1(lenght)
    inputName.value = '';
    inputRole.value = '';
    inputImg.value = '';
})