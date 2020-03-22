let setDate = () => {
    const shand = document.getElementById('shand');
    const mhand = document.getElementById('mhand');
    const hhand = document.getElementById('hhand');
    const now = new Date();
    let second = now.getSeconds();
    let seconddeg = ((second / 60) * 360) + 90;
    shand.style.transform = `rotate(${seconddeg}deg)`;

    let minut = now.getMinutes();
    let minutdeg = ((minut / 60) * 360) + 90;
    mhand.style.transform = `rotate(${minutdeg}deg)`;

    let hour = now.getHours();
    let hourdeg = ((hour / 12) * 360) + 90;
    hhand.style.transform = `rotate(${hourdeg}deg)`;
    console.log(hour);

    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;

}

setInterval(setDate, 1000);