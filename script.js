function toggleStyle() {
    // Brug `#` for at vælge elementer efter deres ID
    const defaultStyle = document.querySelector("#default-style");   // Henter standard-stylesheet (lys tilstand)
    const alternateStyle = document.querySelector("#alternate-style"); // Henter alternativt stylesheet (mørk tilstand)

    // Udskriv nuværende tilstand for fejlsøgning
    console.log("Default style disabled:", defaultStyle.disabled);     // Udskriver, om default-styling er deaktiveret
    console.log("Alternate style disabled:", alternateStyle.disabled); // Udskriver, om alternativ styling er deaktiveret

    // Tjek om default-stylesheet er deaktiveret
    if (defaultStyle.disabled) {
        // Aktiver lys-tilstand
        defaultStyle.disabled = false;     // Slår default-styling til
        alternateStyle.disabled = true;    // Deaktiverer alternativ styling (mørk tilstand)
        document.body.classList.add("light-mode");  // Tilføjer klassen "light-mode" til body
        document.body.classList.remove("dark-mode"); // Fjerner "dark-mode" klassen fra body
        console.log("Switched to Light Mode"); // Udskriver en besked i konsollen om skift til lys-tilstand
    } else {
        // Aktiver mørk-tilstand
        defaultStyle.disabled = true;      // Deaktiverer default-styling (lys tilstand)
        alternateStyle.disabled = false;   // Aktiverer alternativ styling (mørk tilstand)
        document.body.classList.remove("light-mode"); // Fjerner "light-mode" klassen fra body
        document.body.classList.add("dark-mode");     // Tilføjer "dark-mode" klassen til body
        console.log("Switched to Dark Mode"); // Udskriver en besked i konsollen om skift til mørk-tilstand
    }
}
