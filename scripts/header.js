document.querySelector('.toggle-icon').onclick = () => {
    document.querySelector('#nav-container').classList.toggle("pushed");
    if (document.querySelector('#nav-container').classList.contains('pushed')) {
        document.querySelector('.nav-mob').style.display = 'flex'
        document.querySelector('.close-menu').style.display = 'block'
        document.querySelector('.open-menu').style.display = 'none';
    } else {
        document.querySelector('.nav-mob').style.display = 'none'

        document.querySelector('.close-menu').style.display = 'none'
        document.querySelector('.open-menu').style.display = 'block';
    }
}