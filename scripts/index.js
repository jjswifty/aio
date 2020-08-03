document.addEventListener("DOMContentLoaded", function () {
    console.log('By jjswifty with love. github.com/jjswifty')
    document.querySelector('#more').onclick = (e) => {
        document.querySelector('.section-video').scrollIntoView({
            block: "end",
            behavior: "smooth",
            inline: "center"
        })
    }
})