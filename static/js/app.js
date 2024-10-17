let board = document.querySelector('.board-section')

for (let i = 0; i < 200; i++) {
    let block = '<div class="block"></div>'
    board.innerHTML += block
}

falls = () => {
    let fall_count = 50

    let container = document.querySelector('.container')

    for (let i = 0; i < fall_count; i++) {
        
        let img_index = Math.floor(Math.random() * 5) + 1

        let x = Math.floor(Math.random() * window.innerWidth)
        let y = window.innerHeight 
        let size = Math.random() * 60

        let duration = Math.random() * 70 + 30

        let img = document.createElement('img')

        img.className = 'fall'
        img.src = 'static/assets/images/' + img_index + '.png'

        img.style.width = 60 + size + 'px'
        img.style.height = 'auto'

        img.style.left = x + 'px'
        img.style.bottom = y + 'px' 

        container.appendChild(img)
        
        img.animate([
            { bottom: '100%', opacity: 1 },
            { bottom: '0%', opacity: 1 }
        ], {
            duration: duration * 1000, 
            easing: 'ease-in-out',
            iterations: Infinity,
            direction: 'reverse' 
        })
        
    }
}

falls()

let loading_square = document.querySelector('.square')

for (let i = 0; i < 16; i++) {
    loading_square.innerHTML += '<div></div>'
}
