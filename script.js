
const projects = [
    {
        name: "Magic Market",
        description: "A 2D farming and market simulation game.",
        technology: "Unity, C#"
    },
    {
        name: "The Pursuer",
        description: "A game focused on gameplay mechanics.",
        technology: "Unity, C#"
    },
    {
        name: "Jewelry Store",
        description: "A jewelry store management game.",
        technology: "Unity, C#"
    },
    {
        name: "Tile-Vania",
        description: "A 2D platformer with enemy AI and tilemaps.",
        technology: "Unity, C#"
    }
];

const container = document.getElementById("project-container");

projects.forEach(project => {
    const card = document.createElement("div");

    card.classList.add("project-card");

    card.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <span>${project.technology}</span>
    `;

    container.appendChild(card);
});
