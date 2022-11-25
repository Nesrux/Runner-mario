const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    },500)
}

const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const marioPostion = +  window.getComputedStyle(mario).bottom.replace('px', '');

    
    console.log(loop);


    if(pipePosition <= 120 && pipePosition > 0 && marioPostion < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        pipe.style.animation = 'none';
        pipe.style.bottom = `${marioPostion}px`;

        mario.src="./assets/game-over.png";
        mario.style.width= '75px';
        mario.style.marginLeft = '50px';


        clearInterval(loop);
        location.reload();
    }
}, 10)

document.addEventListener('keydown', jump);
document.addEventListener('touchend', jump );