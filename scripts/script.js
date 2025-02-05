import { soupTmpl, saladTmpl, mainTmpl, teamTmpl } from "./templates.js";

async function loadData() {
    try {
        const [soups, salads, mains, teams] = await Promise.all([
            fetch("../data/soups.json").then(res => res.json()),
            fetch("../data/salads.json").then(res => res.json()),
            fetch("../data/mains.json").then(res => res.json()),
            fetch("../data/teams.json").then(res => res.json())
        ]);

        app.init(soups, salads, mains, teams); // ✅ Pass fetched data to app.init()
    } catch (error) {
        console.error("Error loading JSON files:", error);
    }
}

const app = {
    init: (soupData, saladData, mainData, teamData) => {
        app.renderData(soupData, ".output", soupTmpl, "soups.json");
        app.renderData(saladData, ".output2", saladTmpl, "salads.json");
        app.renderData(mainData, ".output3", mainTmpl, "mains.json");
        app.renderData(teamData, ".output4", teamTmpl, "teams.json");
    },

    renderData: (data, selector, templateFunc, filename) => {
        const container = document.querySelector(selector);
        if (!container) {
            console.error(`Container not found for selector: ${selector}`);
            return;
        }

        if (!Array.isArray(data)) {
            console.error(`Invalid data format: ${filename} should contain an array.`);
            return;
        }

        data.forEach(item => {
            const html = templateFunc(item);
            if (html) {
                container.insertAdjacentHTML('beforeend', html);
            } else {
                console.error(`Failed to generate HTML for item in ${filename}:`, item);
            }
        });
    }
};

// 🚀 Run `loadData()` only when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadData);

// 🚀 Remove `app.init()` here (already called inside loadData())

// Scroll to Top Button
let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
