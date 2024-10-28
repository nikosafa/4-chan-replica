function toggleStyle() {
    // Use `#` to select elements by their ID
    const defaultStyle = document.querySelector("#default-style");
    const alternateStyle = document.querySelector("#alternate-style");

    // Log current state for debugging
    console.log("Default style disabled:", defaultStyle.disabled);
    console.log("Alternate style disabled:", alternateStyle.disabled);

    if (defaultStyle.disabled) {
        // Enable light mode
        defaultStyle.disabled = false;
        alternateStyle.disabled = true;
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
        console.log("Switched to Light Mode");
    } else {
        // Enable dark mode
        defaultStyle.disabled = true;
        alternateStyle.disabled = false;
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        console.log("Switched to Dark Mode");
    }
}
