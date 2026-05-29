const roles = [
    "Aspiring Data Analyst",
    "Power BI Developer",
    "Future AI Engineer",
    "Future Software Developer"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (charIndex < roles[roleIndex].length) {

        typingElement.innerHTML += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {

    if (charIndex > 0) {

        typingElement.innerHTML =
            roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(typeEffect, 500);
    }
}

typeEffect();

particlesJS("particles-js", {

    particles: {
        number: {
            value: 80
        },

        size: {
            value: 3
        },

        move: {
            speed: 1
        },

        line_linked: {
            enable: true
        }
    }
});

function filterProjects(category) {

    const projects =
        document.querySelectorAll(".project-card");

    projects.forEach(project => {

        if (
            category === "all" ||
            project.classList.contains(category)
        ) {
            project.style.display = "block";
        }

        else {
            project.style.display = "none";
        }
    });
}

function toggleTheme() {

    document.body.classList.toggle("light-mode");
}

