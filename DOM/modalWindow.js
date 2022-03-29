const open = document.querySelector("#modalOpen");
const body = document.body;
const successModal = createModal("lorem");
open.addEventListener("click", (e) => {
    e.preventDefault();
    body.appendChild(successModal);
});
function createModal(content) {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");
    overlayElement.addEventListener("click", (e) => {
        if(e.target === overlayElement){
            closeElement.click();
        }
    });

    const containerElement = document.createElement("div");
    containerElement.classList.add("modal-container");

    const contentElement = document.createElement("div");
    contentElement.classList.add("modal-content");
    contentElement.innerHTML = content;

    const closeElement = document.createElement("a");
    closeElement.classList.add("close");
    closeElement.textContent = "x";
    closeElement.href = "#";
    closeElement.addEventListener("click", (e) => {
        e.preventDefault();
        body.removeChild(overlayElement);
    });

    overlayElement.appendChild(containerElement);
    containerElement.appendChild(closeElement);
    containerElement.appendChild(contentElement);

    return overlayElement;
}