document.querySelector('#replyInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {  // Submit on Enter, but allow Shift+Enter for a new line
        event.preventDefault();  // Prevent adding a new line
        submitReply();  // Call the function to submit the reply
    }
});

function submitReply() {
    var replyText = document.querySelector('#replyInput').value;  // Use # to select by ID
    if (replyText.trim() === "") {
        alert("Please enter a reply.");
        return;
    }

    // Create a new reply div
    var newReply = document.createElement("div");
    newReply.classList.add("reply");

    // Add the reply content
    var poster = '<span class="poster">Anonymous</span> 10/22/24(Tue)23:59:59 No.1355500<br>';
    var replyContent = '<span class="reply-text">' + replyText + '</span><br>';

    newReply.innerHTML = poster + replyContent;

    // Add the new reply to the replies section
    var repliesDiv = document.querySelector(".replies");
    repliesDiv.appendChild(newReply);

    // Clear the input field
    document.querySelector('#replyInput').value = '';  // Use # to select by ID
}

function toggleTheme() {
    const themeLink = document.getElementById("themeStylesheet");

    // Check the current theme and switch to the other one
    if (themeLink.getAttribute("href") === "button4.css") {
        themeLink.setAttribute("href", "button4-dark.css");
    } else {
        themeLink.setAttribute("href", "button4.css");
    }
}
