
const projects = [
    {
        name: "Magic Market",

        description:
            "A 2D farming and market simulation game where players manage a shop and grow magical crops.",

        technologies: "Unity • C# • MVP Pattern",

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
            "A jewelry store management game focused on buying and selling jewelry with customers.",

        technologies: "Unity • C# • MVP Pattern • Events",

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
            "A game development project showcasing gameplay mechanics and interactive systems.",

        technologies: "Unity • C#",

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
            "A 2D platformer featuring character controllers, enemy AI and tilemap-based environments.",

        technologies: "Unity • C# • Tilemap",

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

