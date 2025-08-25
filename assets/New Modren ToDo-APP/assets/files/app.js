const appContainer = document.querySelector(".app-container");
setTimeout(() => {
    if (appContainer) {
        appContainer.classList.add("hidden");

        const msg = document.createElement("div");
        msg.textContent = "WORKING ON IT!";
        document.body.appendChild(msg);
        msg.style.fontWeight = "bold";
    }
}, 2000); // 2000 for 2 sec


















