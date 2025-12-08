/* ===============================
   Projects Slider (Inside Cards)
================================ */
const projects = [
    ["images/project1-1.jpeg", "images/project1-2.jpeg", ],
    ["images/project2-1.jpeg", "images/project2-2.jpeg" ,"images/project2-3.jpeg"],
    ["images/project3-1.jpeg", "images/project3-2.jpeg", "images/project3-3.jpeg"],
    ["images/project4-1.jpeg", "images/project4-2.jpeg" , "images/project4-3.jpeg"],
    ["images/project5-1.jpeg", "images/project5-2.jpeg", "images/project5-3.jpeg", "images/project5-4.jpeg"],
    ["images/project6-1.jpeg", "images/project6-2.jpeg" , "images/project6-3.jpeg"]
];

let currentIndex = [0, 0, 0, 0, 0, 0];

function nextImage(projectNumber) {
    currentIndex[projectNumber]++;
    if (currentIndex[projectNumber] >= projects[projectNumber].length) {
        currentIndex[projectNumber] = 0;
    }
    document.getElementById(`project${projectNumber}`).src =
        projects[projectNumber][currentIndex[projectNumber]];
}

function prevImage(projectNumber) {
    currentIndex[projectNumber]--;
    if (currentIndex[projectNumber] < 0) {
        currentIndex[projectNumber] = projects[projectNumber].length - 1;
    }
    document.getElementById(`project${projectNumber}`).src =
        projects[projectNumber][currentIndex[projectNumber]];
}

/* ===============================
   Certificates Modal
================================ */
const imgModal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");

function openImage(img) {
    imgModal.style.display = "flex";
    modalImg.src = img.src;
}

function closeCertModal() {
    imgModal.style.display = "none";
}

imgModal.onclick = (e) => {
    if (e.target === imgModal) {
        closeCertModal();
    }
};

/* ===============================
   Projects Modal (Full Screen Slider)
================================ */
let activeProject = 0;
let modalIndex = 0;

const projectModal = document.getElementById("projectModal");
const projectModalImg = document.getElementById("projectModalImg");

function openProjectModal(projectNumber) {
    activeProject = projectNumber;
    modalIndex = currentIndex[projectNumber];
    projectModalImg.src = projects[activeProject][modalIndex];
    projectModal.style.display = "flex";
}

function closeProjectModal() {
    projectModal.style.display = "none";
}

function modalNext() {
    modalIndex++;
    if (modalIndex >= projects[activeProject].length) {
        modalIndex = 0;
    }
    projectModalImg.src = projects[activeProject][modalIndex];
}

function modalPrev() {
    modalIndex--;
    if (modalIndex < 0) {
        modalIndex = projects[activeProject].length - 1;
    }
    projectModalImg.src = projects[activeProject][modalIndex];
}

projectModal.onclick = (e) => {
    if (e.target === projectModal) {
        closeProjectModal();
    }
};









const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
    x: null,
    y: null,
    radius: 120
};

window.addEventListener("mousemove", e => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 2;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.speedY = (Math.random() - 0.5) * 0.6;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }

    draw() {
        ctx.fillStyle = "rgba(212,175,55,0.9)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

let particlesArray = [];
const particleCount = 80;

function init() {
    particlesArray = [];
    for (let i = 0; i < particleCount; i++) {
        particlesArray.push(new Particle());
    }
}
init();

function connectParticles() {
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let dx = particlesArray[a].x - particlesArray[b].x;
            let dy = particlesArray[a].y - particlesArray[b].y;
            let distance = dx * dx + dy * dy;

            if (distance < 120 * 120) {
                ctx.strokeStyle = "rgba(212,175,55,0.15)";
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach(p => {
        p.update();
        p.draw();
    });

    connectParticles();
    requestAnimationFrame(animate);
}

animate();


const scrollFill = document.querySelector(".scroll-fill");

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollFill.style.height = `${scrollPercent}%`;
});



