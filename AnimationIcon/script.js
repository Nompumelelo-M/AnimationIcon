const icon = document.getElementById("icon");
let position = 0;
let direction = 1;


function moveIcon(){
    position == 2 * direction;
    const max = window.innerWidth - 40;

    if(position >= max){
        direction = -1;
    }else if(position <= 0){
        direction = 1;

    }
    icon.style.left = position + 'px';
    requestAnimationFrame(moveIcon);
}

moveIcon();