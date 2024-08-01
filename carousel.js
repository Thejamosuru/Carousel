
let images = [
    { image: './images/one.jpeg' },
    { image: './images/two.jpg' },
    { image: './images/three.webp' },
    { image: './images/four.jpg' },
    { image: './images/Five.webp' },
    { image: './images/Six.jpg' }
]

let i = 0;
//-----Next image-----
let next = document.getElementById('next')
const nextImage = () => {
    setInterval(() => {
        i++
        document.getElementById('carousel').innerHTML = `<img src=${images[i].image}>`
        if (i == 5) {
            i = -1;
        }
    }, 2000)
}
next.addEventListener('click', nextImage);

//-----Prev Image-----
let prev = document.getElementById('prev')
const prevImage = () => {
    setInterval(() => {
        if (i == 0) {
            i = 6;
        }
        i--
        document.getElementById('carousel').innerHTML = `<img src=${images[i].image}>`
    }, 2000)
}
prev.addEventListener('click', prevImage);