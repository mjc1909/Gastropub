import soupData from "../data/soups.json" assert { type: 'json' };
import saladData from "../data/salads.json" assert { type: 'json' };
import mainData from "../data/mains.json" assert { type: 'json' };
import teamData from "../data/teams.json" assert {type: 'json'};
import {soupTmpl,saladTmpl,mainTmpl,teamTmpl} from "./templates.js"

const app = {};
app.init = () => {
    const output = document.querySelector(".output");
    
    

    if (!Array.isArray(soupData)) {
        console.error("Invalid data format: soups.json should contain an array.");
        return;
    }

    soupData.forEach(soup => {
        const soupHTML = soupTmpl(soup);
        if (soupHTML) {
            output.insertAdjacentHTML('beforeend', soupHTML);
        } else {
            console.error("Failed to generate HTML for soup:", soup);
        }
    });
};
app.init();

app.init = () => {
    
    const output2 = document.querySelector(".output2");


    if (!output2) {
        console.error("Output2 container not found.");
        return;
    }

    if (!Array.isArray(saladData)) {
        console.error("Invalid data format: salad.json should contain an array.");
        return;
    }

saladData.forEach(salad => {
    const saladHTML = saladTmpl(salad);
    if (saladHTML) {
        output2.insertAdjacentHTML('beforeend', saladHTML);
    } else {
        console.error("Failed to generate HTML for salad:", salad);
    }
});}
app.init();

app.init = () => {
    
    const output3 = document.querySelector(".output3");


    if (!output3) {
        console.error("Output3 container not found.");
        return;
    }

    if (!Array.isArray(mainData)) {
        console.error("Invalid data format: mains.json should contain an array.");
        return;
    }


mainData.forEach(main => {
    const mainHTML = mainTmpl(main);
    if (mainHTML) {
        output3.insertAdjacentHTML('beforeend', mainHTML);
    } else {
        console.error("Failed to generate HTML for main:", main);
    }
});




}
app.init();
    
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}        
        
        
        //Team//
        
 app.init = () => {
    const output4 = document.querySelector(".output4");
    
    

    if (!Array.isArray(teamData)) {
        console.error("Invalid data format: teams.json should contain an array.");
        return;
    }

    teamData.forEach(team => {
        const teamHTML = teamTmpl(team);
        if (teamHTML) {
            output4.insertAdjacentHTML('beforeend', teamHTML);
        } else {
            console.error("Failed to generate HTML for team:", team);
        }
    });
};
       




















    

