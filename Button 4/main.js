document.querySelector('#replyInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {  // Send på Enter, men tillad Shift+Enter for en ny linje
        event.preventDefault();  // Undgå tilføjelse af en ny linje
        submitReply();  // Kalder funktionen for at sende svaret
    }
});

function submitReply() {
    var replyText = document.querySelector('#replyInput').value; //Her hentes teksten fra replyInput-feltet
    if (replyText.trim() === "") { //Dette tjekker om teksten kun er tom, ellers viser den alert beskeden
        alert("Please enter a reply.");
        return;
    }

    //Her bliver der oprettet et nyt div-element til det nye kommentar og denne div får klassen reply til at style det i css filen
    var newReply = document.createElement("div");
    newReply.classList.add("reply");

    // Her bliver brugerens anonyme id sat samt dato of tid
    var poster = '<span class="poster">Anonymous</span> 10/22/24(Tue)23:59:59 No.1355500<br>';
    // Her tager den brugerens informationer og sætter den som HTML-tags
    var replyContent = '<span class="reply-text">' + replyText + '</span><br>';

    //Her bliver de to var værdier oven over sat sammen i det nye <div>
    newReply.innerHTML = poster + replyContent;

    // Her finder den sektionen, hvor svarene vises og der tilføjer den det nye <div>
    var repliesDiv = document.querySelector(".replies");
    repliesDiv.appendChild(newReply);

    // Ryder input fæltet efter brugeren har trykket submit
    document.querySelector('#replyInput').value = '';  // Use # to select by ID
}

function toggleTheme() {
    // Denne const finder <link> elementet som styrer CSS-stylingen
    const themeLink = document.querySelector("#themeStylesheet");

    //If og else statement til at vudere hvilken css styling den skal bruge.
    if (themeLink.getAttribute("href") === "button4.css") {
        themeLink.setAttribute("href", "button4-dark.css");
    } else {
        themeLink.setAttribute("href", "button4.css");
    }
}
