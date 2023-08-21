function createFacultyCard(name, affiliation, imageSrc, personalPage, needShortendAffliation) {
  const card = document.createElement("div");
  const max_affiliation_length = 60;
  const shortenedAffiliation = needShortendAffliation ? affiliation.length > max_affiliation_length ? affiliation.substring(0, max_affiliation_length) + "..." : affiliation : affiliation;
  card.className = "col-md-3 mb-4";
  card.innerHTML = `
        <div class="card faculty-card">
            <div class="card-img-container">
                <a href="${personalPage}" target="_blank">
                    <div class="square-image">
                        <img src="${imageSrc}" class="card-img-top" alt="${name}">
                    </div>
                </a>
            </div>
            <div class="card-body">
                <h5 class="card-title"><a href="${personalPage}" target="_blank">${name}</a></h5>
                <p class="card-text">${shortenedAffiliation}</p>
            </div>
        </div>
    `;
  return card;
}

// Function to add faculty cards to a section
function addFacultyCards(sectionId, facultyData) {
  const section = document.getElementById(sectionId);
  const row = document.createElement("div");
  const needShortendAffliation = window.innerWidth < 1000; 

  // row.className = "row";
  row.className = "row row-cols-2 row-cols-md-3 row-cols-lg-4";
  facultyData.forEach((data) => {
    const card = createFacultyCard(
      data.name,
      data.affiliation,
      data.imageSrc,
      data.personalPage,
      needShortendAffliation
    );
    row.appendChild(card);
  });
  section.appendChild(row);
}

const keynoteData = [
  {
    name: "Karan Girotra",
    affiliation: "Cornell University",
    imageSrc: "imgs/karan-girotra.jpg",
    personalPage: "https://tech.cornell.edu/people/karan-girotra/",
  },
  {
    name: "Kamalini Ramdas",
    affiliation: "London Business School",
    imageSrc: "imgs/kamalini-ramdas.avif",
    personalPage:
      "https://www.london.edu/faculty-and-research/faculty-profiles/r/ramdas-k#",
  },
  {
    name: "Jun Li",
    affiliation: "Michigan Ross",
    imageSrc: "imgs/junli.aspx",
    personalPage:
      "https://michiganross.umich.edu/faculty-research/faculty/jun-li",
  },
];

const organizingFacultyData = [
  {
    name: "Jing Wu",
    affiliation: "CUHK Business School (Workshop Chair)",
    imageSrc: "imgs/jingwu.jpg",
    personalPage: "https://www.jingwulab.org/",
  },
  {
    name: "Hsiao-hui Lee",
    affiliation: "National Chengchi University",
    imageSrc: "imgs/hsiaohuili.jpg",
    personalPage:
      "https://mis2.nccu.edu.tw/en/Faculty/Faculty_01/Hsiao-Hui-Lee-11933204",
  },
  {
    name: "Weiming Zhu",
    affiliation: "HKU Business School",
    imageSrc: "imgs/weimingzhu.jpeg",
    personalPage: "https://www.hkubs.hku.hk/people/weiming-zhu/",
  },
];

const workshopFacultyData = [
  {
    name: "Renyu Zhang",
    affiliation: "CUHK Business School",
    imageSrc: "imgs/renyuzhang.jpg",
    personalPage: "https://www.bschool.cuhk.edu.hk/staff/zhang-philip-renyu/",
  },
  {
    name: "Liu Ming",
    affiliation: "CUHK (Shenzhen) School of Management and Economics",
    imageSrc: "imgs/liuming.jpg",
    personalPage: "https://jdlab.cuhk.edu.cn/en/content/4057",
  },
  {
    name: "Jingqi Wang",
    affiliation: "CUHK (Shenzhen) School of Management and Economics",
    imageSrc: "imgs/jingqiwang.jpg",
    personalPage: "https://myweb.cuhk.edu.cn/wangjingqi",
  },
  {
    name: "Hanwei Li",
    affiliation: "City University of Hong Kong",
    imageSrc: "imgs/hanweili.jpg",
    personalPage: "https://www.cb.cityu.edu.hk/ms/about-us/faculty-and-staff/prof-li-hanwei",
  },
  {
    name: "Yiwei Shen",
    affiliation: "HKUST Business School",
    imageSrc: "imgs/yiweishen.jpg",
    personalPage: "https://isom.hkust.edu.hk/faculty-and-staff/directory/yiwenshen",
  },
  {
    name: "Xiaole Wu",
    affiliation: "Fudan University School of Management",
    imageSrc: "imgs/xiaolewu.jpg",
    personalPage: "https://www.fdsm.fudan.edu.cn/En/preview.html?UID=012083",
  },
  {
    name: "Ying Rong",
    affiliation: "SJTU Antai School of Management",
    imageSrc: "imgs/yingrong.gif",
    personalPage: "https://www.acem.sjtu.edu.cn/en/faculty/rongying.html",
  },
  {
    name: "Huan Zheng",
    affiliation: "SJTU Antai School of Management",
    imageSrc: "imgs/huanzheng.gif",
    personalPage: "https://www.acem.sjtu.edu.cn/en/faculty/zhenghuan.html",
  },
  {
    name: "Wenzheng Mao",
    affiliation: "Tongji University Advanced Institute of Business",
    imageSrc: "imgs/wenzhengmao.jpg",
    personalPage: "https://aib.tongji.edu.cn/d5/ee/c17222a185838/page.htm",
  },
  {
    name: "Kejia Hu",
    affiliation: "China Europe International Business School",
    imageSrc: "imgs/kejiahu.jpg",
    personalPage: "https://www.ceibs.edu/kejia_hu",
  },
  {
    name: "Sidika Candogan",
    affiliation: "NUS Business School",
    imageSrc: "imgs/sidika.jpg",
    personalPage: "https://bizfaculty.nus.edu.sg/faculty-details/?profId=732",
  },
  {
    name: "Vivek Choudhary",
    affiliation: "NTU Business School",
    imageSrc: "imgs/vivek.png",
    personalPage: "https://sites.google.com/view/vkchoudhary",
  },
  {
    name: "Bhavani Uppari",
    affiliation: "SMU Lee Kong Chian School of Business",
    imageSrc: "imgs/bhavaniu.jpeg",
    personalPage: "https://faculty.smu.edu.sg/profile/bhavani-shanker-uppari-1296",
  },
  {
    name: "Kim Sang Won",
    affiliation: "KAIST College of Business",
    imageSrc: "imgs/kim.jpg",
    personalPage: "https://www.business.kaist.edu/faculty/sk2559",
  },
  {
    name: "Kashish Arora",
    affiliation: "Indian School of Business",
    imageSrc: "imgs/kashish.png",
    personalPage: "https://kashisharora.info/",
  },
  {
    name: "Sarang Deo",
    affiliation: "Indian School of Business",
    imageSrc: "imgs/deo.jpg",
    personalPage: "https://www.isb.edu/en/research-thought-leadership/faculty/faculty-directory/sarang-deo.html",
  },
];

const workshopParticipantData = [
  {
    name: "Jie Peng",
    affiliation: "Tongji University",
    imageSrc: "imgs/jiepeng.jpeg",
    personalPage: "",
  },
];

// Add faculty cards to respective sections
addFacultyCards("keynote", keynoteData);
addFacultyCards("organizing-faculty", organizingFacultyData);
addFacultyCards("workshop-faculty", workshopFacultyData);
addFacultyCards("workshop-participants", workshopParticipantData);
