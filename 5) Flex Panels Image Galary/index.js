console.log('hey');

const panels = document.querySelectorAll('.panel');
console.log(panels);

function toggle() {
    this.classList.toggle('open');
    this.classList.toggle('open-active');
}
panels.forEach(panel => panel.addEventListener('click', toggle));