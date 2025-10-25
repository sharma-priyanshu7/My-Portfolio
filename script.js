// Linking Hamburger Icon to Sidepane
const pane = document.getElementById("sidePane");
const hamburger = document.getElementById("Hamburger-option");
const overlay1 = document.getElementById("overlay1");

function openPane() {
    pane.classList.add("open");
    overlay1.classList.add("active");
    document.body.classList.add("no-scroll");
}
function closePane() {
    pane.classList.remove("open");
    overlay1.classList.remove("active");
    document.body.classList.remove("no-scroll");
}
hamburger.addEventListener("click", (event) => {
    event.stopPropagation();
    if (pane.classList.contains("open")) {
        closePane();
    } else {
        openPane();
    }
});
document.addEventListener("click", (event) => {
    const isInsidePane = sidePane.contains(event.target);
    const isHamburger = hamburger.contains(event.target);
    if (!isInsidePane && !isHamburger && sidePane.classList.contains("open")) {
        closePane();
    }
});


// Linking Navbar & Side Bar options to its specific page
const UHnav1 = document.getElementById('UHnav1');
const UHnav2 = document.getElementById('UHnav2');
const UHnav3 = document.getElementById('UHnav3');
const UHnav4 = document.getElementById('UHnav4');
const UHnav5 = document.getElementById('UHnav5');
const UHnav6 = document.getElementById('UHnav6');

const USnav1 = document.getElementById('USnav1');
const USnav2 = document.getElementById('USnav2');
const USnav3 = document.getElementById('USnav3');
const USnav4 = document.getElementById('USnav4');
const USnav5 = document.getElementById('USnav5');
const USnav6 = document.getElementById('USnav6');

const hero = document.getElementById('hero');
const belowHERO = document.getElementById('belowHERO');
const main1 = document.getElementById('main1');
const overlayblock1 = document.getElementById('overlayblock1');
const main2 = document.getElementById('main2');
const overlayblock2 = document.getElementById('overlayblock2');
const main3 = document.getElementById('main3');
const overlayblock3 = document.getElementById('overlayblock3');
const main4 = document.getElementById('main4');
const overlayblock4 = document.getElementById('overlayblock4');
const cpage = document.getElementById('cpage');

UHnav1.addEventListener('click', () => {
    hero.style.display = 'flex';
    window.scrollTo({top: 0, behavior: 'smooth'});
});
USnav1.addEventListener('click', () => {
    hero.style.display = 'flex';
    window.scrollTo({top: 0, behavior: 'smooth'});
});
UHnav2.addEventListener('click', () => {
    belowHERO.style.paddingTop = '120px';
    main1.scrollIntoView({behavior: 'smooth'});
});
USnav2.addEventListener('click', () => {
    belowHERO.style.paddingTop = '120px';
    main1.scrollIntoView({behavior: 'smooth'});
});
UHnav3.addEventListener('click', () => {
    belowHERO.style.paddingTop = '120px';
    main2.scrollIntoView({behavior: 'smooth'});
});
USnav3.addEventListener('click', () => {
    belowHERO.style.paddingTop = '120px';
    main2.scrollIntoView({behavior: 'smooth'});
});
UHnav4.addEventListener('click', () => {
    belowHERO.style.paddingTop = '120px';
    main3.scrollIntoView({behavior: 'smooth'});
});
USnav4.addEventListener('click', () => {
    belowHERO.style.paddingTop = '120px';
    main3.scrollIntoView({behavior: 'smooth'});
});
UHnav5.addEventListener('click', () => {
    belowHERO.style.paddingTop = '120px';
    main4.scrollIntoView({behavior: 'smooth'});
});
USnav5.addEventListener('click', () => {
    belowHERO.style.paddingTop = '120px';
    main4.scrollIntoView({behavior: 'smooth'});
});
UHnav6.addEventListener('click', () => {
    cpage.scrollIntoView({behavior: 'smooth'});
});
USnav6.addEventListener('click', () => {
    cpage.scrollIntoView({behavior: 'smooth'});
});


// Hero Section Disappearing Scenario
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight * 0.5;
    const fadeEnd = windowHeight / 1.2;
    let heroOpacity = 1 - scrollY / fadeEnd;
    hero.style.opacity = Math.max(0, Math.min(1, heroOpacity));
});


function clamp(v, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v));
}
const Blocks = [
    document.getElementById('Block1'),
    document.getElementById('Block2'),
    document.getElementById('Block3'),
    document.getElementById('Block4')
];
const overlays = [
    document.getElementById('overlayblock1'),
    document.getElementById('overlayblock2'),
    document.getElementById('overlayblock3'),
    document.getElementById('overlayblock4')
];
const topThreshold = 130;
let ticking = false;

function updateOverlays() {
    ticking = false;

    const rects = Blocks.map(b => b.getBoundingClientRect());
    let currentTopIndex = -1;

    rects.forEach((r, i) => {
        if (r.top <= topThreshold) currentTopIndex = i;
    });
    
    rects.forEach((r, i) => {
        const overlay = overlays[i];
        if (i <= currentTopIndex) {
            overlay.style.opacity = '0';
        } else {if (i === currentTopIndex + 1) {
                const fadeRange = window.innerHeight * 0.5;
                const distance = r.top - topThreshold;
                const t = clamp(distance / fadeRange, 0, 1);
                overlay.style.opacity = t;
            } else {
                overlay.style.opacity = '1';
            }
        }});
}
function onScroll() {
  if (!ticking) {
    requestAnimationFrame(updateOverlays);
    ticking = true;
  }
}
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);
requestAnimationFrame(updateOverlays);


// Document Carousel
const overlay2 = document.getElementById("overlay2");
const certificateall = document.getElementById('certificateall');
const message = document.getElementById('message');
const doc = document.querySelectorAll('.doc');

doc.forEach(docum => {
    docum.addEventListener('mouseenter', () => {
        certificateall.classList.add('dim');
        overlay2.classList.add('show');
        message.classList.add('show');
    });
    docum.addEventListener('mouseleave', () => {
        certificateall.classList.remove('dim');
        overlay2.classList.remove('show');
        message.classList.remove('show');
    });
});

const seeAllBtn = document.getElementById('seeAllBtn');
const modalBg = document.getElementById('modalBg');
const closeBtn = document.getElementById('closeBtn');
const cimage = document.getElementById('cimage');
const ctext1 = document.getElementById('ctext1');
const ctext2 = document.getElementById('ctext2');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const slides=[
    {
        img: 'cert2.jpg',
        alternate: 'Certificate- 01',
        title: 'C Programming',
        text: 'Certificate of Completion',
    },
    {
        img: 'cert3.jpg',
        alternate: 'Certificate- 02',
        title: 'Google Cloud Computing and Generative AI',
        text: 'Certificate of Completion',
    },
    {
        img: 'cert7.jpg',
        alternate: 'Certificate- 03',
        title: 'Workshop on Web Development with AI',
        text: 'Certificate of Appreciation',
    },
    {
        img: 'cert1.jpg',
        alternate: 'Certificate- 04',
        title: 'Introduction to Cybersecurity',
        text: 'Certificate of Completion',
    },
    {
        img: 'cert4.jpg',
        alternate: 'Certificate- 05',
        title: 'Introduction to Computer Training',
        text: 'Certificate of Completion',
    },
    {
        img: 'cert5.jpg',
        alternate: 'Certificate- 06',
        title: 'Campus Solution Challange by Google',
        text: 'Certificate of Participation',
    },
    {
        img: 'cert7.jpg',
        alternate: 'Certificate- 07',
        title: 'Growth and Operation Certificate by SparkIIT & WIPRO',
        text: '',
    },
    {
        img: 'Thanku.jpg',
        alternate: 'Thank You!!',
        title: '',
        text: '',
    },
];

let currentSlide = 0;

function showSlide(index){
    const slide = slides[index];
    cimage.src = slide.img;
    cimage.alt = slide.alternate;
    ctext1.textContent = slide.title;
    ctext2.textContent = slide.text;
}

seeAllBtn.addEventListener('mouseenter', () => {
    seeAllBtn.textContent = 'See all Certificates';
});

seeAllBtn.addEventListener('mouseleave', () => {
    seeAllBtn.textContent = 'See all';
});

seeAllBtn.addEventListener('click', () => {
    modalBg.style.display = 'flex';
    showSlide(currentSlide);
    document.body.classList.add('modal-open');
});

closeBtn.addEventListener('click', () => {
    modalBg.style.display = 'none';
    document.body.classList.remove('modal-open');
});

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});


// Individual Document Card
const certA = document.getElementById('certA');
const certB = document.getElementById('certB');
const certC = document.getElementById('certC');
const certD = document.getElementById('certD');
const certE = document.getElementById('certE');
const certF = document.getElementById('certF');
const certG = document.getElementById('certG');
const cardopen = document.getElementById('cardopen');
const cardImage = document.getElementById('cardImage');
const cardTitle = document.getElementById('cardTitle');
const cardSubtitle = document.getElementById('cardSubtitle');
const cardPara1 = document.getElementById('cardPara1');
const cardPara2 = document.getElementById('cardPara2');
const crossBtn = document.getElementById('crossBtn');

function openCard(imgSrc, title, subtitle, para1, para2) {
    cardImage.src = imgSrc;
    cardTitle.textContent = title;
    cardSubtitle.textContent = subtitle;
    cardPara1.textContent = para1;
    cardPara2.textContent = para2;
    cardopen.classList.add('active');
    document.body.classList.add('card-open');
}

function closeCard() {
    cardopen.classList.remove('active');
    document.body.classList.remove('card-open');
}

certA.addEventListener('click', () => {
    openCard('cert2.jpg', 'C Programming', 'Certificate of Completion', 'By: IIT Bombay', 'Year: 2025');
});
certB.addEventListener('click', () => {
    openCard('cert3.jpg', 'Google Cloud Computing and Generative AI', 'Certificate of Completion', 'By: Google', 'Year: 2025');
});
certC.addEventListener('click', () => {
    openCard('cert7.jpg', 'Workshop on Web Development with AI', 'Certificate of Appreciation', 'By: Google & Vlun Shields', 'Year: 2024');
});
certD.addEventListener('click', () => {
    openCard('cert1.jpg', 'Introduction to Cybersecurity', 'Certificate of Completion', 'By: Cisco Academy', 'Year: 2024');
});
certE.addEventListener('click', () => {
    openCard('cert4.jpg', 'Introduction to Computer Training', 'Certificate of Completion', 'By: IIT Bombay', 'Year: 2024');
});
certF.addEventListener('click', () => {
    openCard('cert5.jpg', 'Campus Solution Challange', 'Certificate of Participation', 'By: Google & Hack to Skills', 'Year: 2025');
});
certG.addEventListener('click', () => {
    openCard('cert6.jpg', 'Growth and Operation Certificate', '', 'By: SparkIIT & WIPRO', 'Year: 2025');
});

crossBtn.addEventListener('click', closeCard);
