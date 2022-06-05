 
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
 
 
const jump = () => {
    mario.classList.add('jump')

    setTimeout(()=>{
        mario.classList.remove('jump')
    },600)
}

const loop = setInterval(() =>{


    const pipePosition = pipe.offsetLeft;    
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','') /* difere pois a propriedade do offset pegar do bottom */
    
    
     if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 0;
        pipe.style.left = `${pipePosition}px`
       
        mario.style.animation = 0;
        mario.style.bottom = `${marioPosition}px`

        mario.src ='/img/game-over.png'
        mario.style.width ='70px'
        mario.style.marginLeft ='60px'

        clearInterval(loop)
        
    }   
},10) 

document.addEventListener('keydown', jump)