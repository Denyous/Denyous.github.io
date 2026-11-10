
const projects = [
    {
        name: "Magic Market",

        description:
            "Magic Market is a 2D farming and shop management game where players run a market and grow magical crops. Developed with Unity and C#, the project combines farming mechanics, resource management, customer interactions, and the MVP architecture pattern.",

        technologies: "",

        images: [
            "assets/Images/Magic_Market-1.png",
            "assets/Images/Magic-Market-2.png"
        ],

        video: "assets/Videos/Magic-Market Gameplay.mp4",

        github: ""
    },

    {
        name: "Jewelry Store",

        description:
            "Jewelry Store is a shop management game where players buy and sell various pieces of jewelry while interacting with customers..",

        technologies: "",

        images: [
            "assets/Images/Jewelry-1.jpg",
            "assets/Images/Jewelry-2.jpg"
        ],

        video: "assets/Videos/Jewelry Gameplay.mp4",

        github: ""
    },

    {
        name: "The Pursuer",

        description:
            "The Pursuer is a space-themed game where players explore the universe and face challenging obstacles. Developed with Unity and C#, the game was successfully published on Google Play, marking an important milestone in my game development journey.",

        technologies: "",

        images: [
            "assets/Images/The Pursuer-1.png",
            "assets/Images/The Pursuer-2.png"
        ],

        video: "assets/Videos/The Pursuer_Gameplay_.mp4",

        github: ""

        
    },

    {
        name: "Tile-Vania",

        description:
            "Tile-Vania is a 2D platformer game featuring character movement, enemy AI, and tilemap-based environments. Developed with Unity and C#, the project allowed me to gain hands-on experience in character controllers, enemy behavior, and level design systems.",

        technologies: "",

        images: [
            "assets/Images/Tile-Vania -1.jpg",
            "assets/Images/Tile-Vania -2.jpg"
        ],

        video: "assets/Videos/Tile-Vania Gameplay.mp4",

        github: ""
    }
];


// PROJECT CONTAINER

const container = document.getElementById("project-container");


// GENERATE PROJECT CARDS

projects.forEach(project => {

    const card = document.createElement("article");

    card.classList.add("project-card");

    card.innerHTML = `

        <div class="project-info">

            <h3>${project.name}</h3>

            <p>${project.description}</p>

            <span class="project-tech">
                ${project.technologies}
            </span>

        </div>


        <div class="project-gallery">

            ${project.images.map((image, index) => `
                <img
                    src="${image}"
                    alt="${project.name} screenshot ${index + 1}"
                    loading="lazy"
                >
            `).join("")}

        </div>


        <div class="project-video">

            <video controls preload="metadata" poster="${project.images[0]}">

                <source src="${project.video}" type="video/mp4">

                Your browser does not support video playback.

            </video>

        </div>

        ${project.github ? `
            <div class="project-info">
                <a href="${project.github}"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="primary-button">
                    View on GitHub
                </a>
            </div>
        ` : ""}

    `;

    container.appendChild(card);

    

});

const lightbox = document.createElement("div");

lightbox.className = "image-lightbox";

lightbox.innerHTML = `
    <button class="lightbox-close">&times;</button>
    <img src="" alt="Büyük fotoğraf">
`;

document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector("img");
const closeButton = lightbox.querySelector(".lightbox-close");

// Fotoğrafa tıklanınca aç
document.addEventListener("click", function (event) {
    if (event.target.matches(".project-gallery img")) {
        lightboxImage.src = event.target.src;
        lightbox.classList.add("active");
    }
});

// Kapatma butonu
closeButton.addEventListener("click", function () {
    lightbox.classList.remove("active");
});

// Fotoğrafın dışına tıklanınca kapat
lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }
});

// ESC tuşuyla kapat
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        lightbox.classList.remove("active");
    }
});

