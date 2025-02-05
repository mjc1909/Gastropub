export const soupTmpl = (soup) => {
    if (!soup || typeof soup !== 'object') {
        console.error("Invalid soup object:", soup);
        return null;
    }
    if (!soup.name || !soup.ingredients) {
        console.error("Missing name or ingredients for soup:", soup);
        return null;
    }

    return `
        <div class="menu-item soup">
            <p class="soupname">${soup.name || "Unknown Soup"}</p>
            <p class="soupingredients">${soup.ingredients || "No ingredients listed"}</p>
            <p class="price">${soup.price ? `${soup.price}` : "Price not available"}</p>
        </div>
    `;
};

export const saladTmpl = (salad) => {
    if (!salad || typeof salad !== 'object') {
        console.error("Invalid salad object:", salad);
        return null;
    }
    if (!salad.name || !salad.ingredients) {
        console.error("Missing name or ingredients for salad:", salad);
        return null;
    }
    
    return `
        <div class="menu-item salad">
            <p class="soupname">${salad.name || "Unknown Salad"}</p>
            <p class="soupingredients">${salad.ingredients || "No ingredients listed"}</p>
            <p class="price">${salad.price ? `${salad.price}` : "Price not available"}</p>
        </div>
    `;
};

export const mainTmpl = (main) => {
    if (!main || typeof main !== 'object') {
        console.error("Invalid main object:", main);
        return null;
    }
    if (!main.name || !main.ingredients) {
        console.error("Missing name or ingredients for main:", main);
        return null;
    }
    
    return `
        <div class="menu-item main">
            <p class="soupname">${main.name || "Unknown Main Dish"}</p>
            <p class="soupingredients">${main.ingredients || "No ingredients listed"}</p>
            <p class="price">${main.price ? `${main.price}` : "Price not available"}</p>
        </div>
    `;
};

export const teamTmpl = (team) => {
    if (!team || typeof team !== 'object') {
        console.error("Invalid team object:", team);
        return null;
    }
    if (!team.img || !team.name) {
        console.error("Missing image or name for team:", team);
        return null;
    }
    
    return `
        <div class="team-member">
            <img class="team-img" src="${team.img}" alt="${team.name || 'Team Member'}">
            <p class="team-name">${team.name || "Unknown Member"}</p>
            <p class="team-job">${team.job || "No job listed"}</p>
            <p class="team-background">${team.background || "No background info available"}</p>
        </div>
    `;
};
