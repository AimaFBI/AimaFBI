const keys = document.querySelectorAll('.key');

// for(let i = 0; i<keys.length; i++){
//     console.log(i);
// }
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.which}"]`);
    audio.play()
    key.classList.add('playing');
}

function removeClass(){
    console.log('')
}
