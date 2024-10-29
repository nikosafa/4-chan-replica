function toggleStyle() {
    const defaultStyle = document.querySelector("#default-style");
    const alternateStyle = document.querySelector("#alternate-style");

    if (defaultStyle.disabled) {
        defaultStyle.disabled = false;
        alternateStyle.disabled = true;
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
    } else {
        defaultStyle.disabled = true;
        alternateStyle.disabled = false;
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
    }
}