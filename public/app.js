const socket = io();

socket.on('images', data => {
    // TODO: need to wipe div to avoid duplicates

    if (Array.from(document.getElementsByClassName("image-box")).length) {
        setTimeout(async () => {
            await clearBoxes();
            addBoxes(data);
        })
    } else addBoxes(data);
})

const clearBoxes = () => {
    let imagesList = Array.from(document.getElementsByClassName("image-box"));

    imagesList.map(element => {
        element.remove();
    });

    return;
}

const addBoxes = data => {
    let body = document.getElementById('main');

    data.map(img => {

        let node = document.createElement('div');
        
        node.setAttribute("class", "image-box");
        body.appendChild(node);

        let imgNode = document.createElement('img');

        imgNode.setAttribute("src", `./images/${img}`);
        imgNode.setAttribute("alt", `./images/${img}`);
        node.appendChild(imgNode);

        node.addEventListener('click', e => handleOpenModal(e))
    })
}

const handleOpenModal = event => {
    console.log('click event', event)

    let modal = document.createElement("div");
    modal.setAttribute("class", "modal");

    let modalContent = document.createElement("div");
    modalContent.setAttribute("class", "modal-content");

    let closeBtn = document.createElement('i');
    closeBtn.setAttribute("class", "close fas fa-times");
    // closeBtn.textContent = 'X'

    modalContent.appendChild(closeBtn);

    let imageBox = document.createElement('div');
    imageBox.setAttribute("class", "big-image-box");

    let imgNode = document.createElement('img');
    imgNode.setAttribute("class", "big-img");
    imgNode.setAttribute("src", event.target.src);

    imageBox.appendChild(imgNode);

    let textNode = document.createElement('p');
    textNode.textContent = event.target.alt;

    imageBox.appendChild(textNode);

    modalContent.appendChild(imageBox);

    modal.appendChild(modalContent);

    document.getElementById('main').appendChild(modal);

    closeBtn.addEventListener("click", () => modal.remove());
}