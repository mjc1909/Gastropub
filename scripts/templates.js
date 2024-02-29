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
        <div>
            <p class="soupname">${soup.name}</p>
            <p class="soupingredients">${soup.ingredients}</p>
            <p class="price">${soup.price}</p>
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
        <div>
            <p class="soupname">${salad.name}</p>
            <p class="soupingredients">${salad.ingredients}</p>
            <p class="price">${salad.price}</p>
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
            <div>
                <p class="soupname">${main.name}</p>
                <p class="soupingredients">${main.ingredients}</p>
                <p class="price">${main.price}</p>
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
                <div>
                    <img class="team-img" src="${team.img}">
                    <p class="team-name">${team.name}</p>
                    <p class="job">${team.job}</p>
                    <p class="background">${team.background}</p>
                </div>
            `;
            };