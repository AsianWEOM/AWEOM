function createFacultyCard(name, affiliation, imageSrc, personalPage) {
    const card = document.createElement('div');
    card.className = 'col-md-3 mb-4';
    card.innerHTML = `
        <div class="card faculty-card">
            <img src="${imageSrc}" class="card-img-top" alt="${name}">
            <div class="card-body">
                <h5 class="card-title"><a href="${personalPage}" target="_blank">${name}</a></h5>
                <p class="card-text">${affiliation}</p>
            </div>
        </div>
    `;
    return card;
}

// Function to add faculty cards to a section
function addFacultyCards(sectionId, facultyData) {
    const section = document.getElementById(sectionId);
    const row = document.createElement('div');
    row.className = 'row';
    facultyData.forEach(data => {
        const card = createFacultyCard(data.name, data.affiliation, data.imageSrc, data.personalPage);
        row.appendChild(card);
    });
    section.appendChild(row);
}


const keynoteData = [
    { name: 'Karan Girotra', affiliation: 'Cornell University', imageSrc: 'imgs/musk.jpeg', personalPage: 'link_to_personal_page' },
    { name: 'Kamalini Ramdas', affiliation: 'LBS', imageSrc: 'imgs/musk.jpeg', personalPage: 'link_to_personal_page' },
    { name: 'Jun Li', affiliation: 'Michigan Ross', imageSrc: 'imgs/musk.jpeg', personalPage: 'link_to_personal_page' }
];

const organizingFacultyData = [
    { name: 'Jing Wu', affiliation: 'CUHK Business School (Workshop Chair)', imageSrc: 'imgs/musk.jpeg', personalPage: 'link_to_personal_page' },
    { name: 'Weiming Zhu', affiliation: 'HKU Business School', imageSrc: 'imgs/musk.jpeg', personalPage: 'link_to_personal_page' },
    { name: 'Hsiao-hui Lee', affiliation: 'National Chengchi University', imageSrc: 'imgs/musk.jpeg', personalPage: 'link_to_personal_page' },
];

const workshopFacultyData = [
    { name: 'Renyu Zhang', affiliation: 'CUHK Business School', imageSrc: 'imgs/musk.jpeg', personalPage: 'link_to_personal_page' },
    { name: 'Liu Ming', affiliation: 'CUHK (Shenzhen) School of Management and Economics (WM)', imageSrc: 'imgs/musk.jpeg', personalPage: 'link_to_personal_page' },
    { name: 'Jingqi Wang', affiliation: 'CUHK Business School', imageSrc: 'imgs/musk.jpeg', personalPage: 'link_to_personal_page' },
    { name: 'Hanwei Li', affiliation: 'CityUHK College of Business (WM)', imageSrc: 'imgs/musk.jpeg', personalPage: 'link_to_personal_page' },
    { name: 'Yiwei Shen', affiliation: 'HKUST Business School (WM)', imageSrc: 'imgs/musk.jpeg', personalPage: 'link_to_personal_page' },
    { name: 'Xiaole Wu', affiliation: 'Fudan University (WJ)', imageSrc: 'imgs/musk.jpeg', personalPage: 'link_to_personal_page' },
    { name: 'Ying Rong', affiliation: 'SJTU Antai School of Management (HH)', imageSrc: 'imgs/musk.jpeg', personalPage: 'link_to_personal_page' },
    { name: 'Huan Zheng', affiliation: 'SJTU Antai School of Management (HH)', imageSrc: 'imgs/musk.jpeg', personalPage: 'link_to_personal_page' },
    { name: 'Wenzheng Mao', affiliation: 'Tongji University (HH)', imageSrc: 'imgs/musk.jpeg', personalPage: 'link_to_personal_page' },
    { name: 'Kejia Hu', affiliation: 'CEIBS (HH)', imageSrc: 'imgs/musk.jpeg', personalPage: 'link_to_personal_page' },
    { name: 'Sidika Candogan', affiliation: 'NUS Business School (WM)', imageSrc: 'imgs/musk.jpeg', personalPage: 'link_to_personal_page' },
    { name: 'Vivek Choudhary', affiliation: 'Nanyang Business School (HH)', imageSrc: 'imgs/musk.jpeg', personalPage: 'link_to_personal_page' },
    { name: 'Bhavani Uppari', affiliation: 'SMU LKC School of Business (WJ)', imageSrc: 'imgs/musk.jpeg', personalPage: 'link_to_personal_page' },
    { name: 'Kim Sang Won', affiliation: 'KAIST (WJ)', imageSrc: 'imgs/musk.jpeg', personalPage: 'link_to_personal_page' },
    { name: 'Kashish Arora', affiliation: 'Indian School of Business (HH)', imageSrc: 'imgs/musk.jpeg', personalPage: 'link_to_personal_page' },
    { name: 'Sarang Deo', affiliation: 'Indian School of Business (HH)', imageSrc: 'imgs/musk.jpeg', personalPage: 'link_to_personal_page' },
]

const workshopParticipantData = [
    { name: 'Jie Peng', affiliation: 'Tongji University', imageSrc: 'imgs/musk.jpeg', personalPage: 'link_to_personal_page' },
]

// Add faculty cards to respective sections
addFacultyCards('keynote', keynoteData);
addFacultyCards('organizing-faculty', organizingFacultyData);
addFacultyCards('workshop-faculty', workshopFacultyData);
addFacultyCards('workshop-participants', workshopParticipantData);