function toggleStyle() {
    // Finder stylesheets ved hjælp af deres id'er
    const defaultStyle = document.querySelector("#default-style"); // Standard (lys) stylesheet
    const alternateStyle = document.querySelector("#alternate-style"); // Alternativ (mørk) stylesheet

    // Tjekker om default-styling er slået fra (disabled)
    if (defaultStyle.disabled) {
        // Hvis defaultStyle er disabled, aktiver det lys-tema
        defaultStyle.disabled = false;    // Slår default-stylesheet til
        alternateStyle.disabled = true;   // Slår alternate-stylesheet fra
        document.body.classList.add("light-mode");  // Tilføjer klassen "light-mode" til body
        document.body.classList.remove("dark-mode"); // Fjerner "dark-mode" klassen fra body
    } else {
        // Hvis defaultStyle ikke er disabled, aktiver mørk-tema
        defaultStyle.disabled = true;    // Slår default-stylesheet fra
        alternateStyle.disabled = false; // Slår alternate-stylesheet til
        document.body.classList.remove("light-mode"); // Fjerner "light-mode" klassen fra body
        document.body.classList.add("dark-mode");     // Tilføjer klassen "dark-mode" til body
    }
}
