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
    })
}