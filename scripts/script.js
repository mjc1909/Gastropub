import soupData from "../data/soups.json" assert { type: 'json' };
import saladData from "../data/salads.json" assert { type: 'json' };
import mainData from "../data/mains.json" assert { type: 'json' };


const app = {};

app.init = () => {
    const output = document.querySelector(".output");
    


    if (!output) {
        console.error("Output container not found.");
        return;
    }

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

const soupTmpl = (soup) => {
    if (!soup || typeof soup !== 'object') {
        console.error("Invalid soup object:", soup);
        return null;
    }
    if (!soup.name || !soup.ingredients) {
        console.error("Missing name or ingredients for soup:", soup);
        return null;
    }

    return `
        <div>
            <p class="soupname">${soup.name}</p>
            <p class="soupingredients">${soup.ingredients}</p>
            <p class="price">${soup.price}</p>
        </div>
    `;
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

const saladTmpl = (salad) => {
if (!salad || typeof salad !== 'object') {
    console.error("Invalid salad object:", salad);
    return null;
}
if (!salad.name || !salad.ingredients) {
    console.error("Missing name or ingredients for salad:", salad);
    return null;
}

return `
    <div>
        <p class="soupname">${salad.name}</p>
        <p class="soupingredients">${salad.ingredients}</p>
        <p class="price">${salad.price}</p>
    </div>
`;
};


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
});}

const mainTmpl = (main) => {
if (!main || typeof main !== 'object') {
    console.error("Invalid main object:", main);
    return null;
}
if (!main.name || !main.ingredients) {
    console.error("Missing name or ingredients for main:", main);
    return null;
}

return `
    <div>
        <p class="soupname">${main.name}</p>
        <p class="soupingredients">${main.ingredients}</p>
        <p class="price">${main.price}</p>
    </div>
`;
};






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
        
        
        
        
        
       




















    

