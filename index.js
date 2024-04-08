var drum1 = document.querySelectorAll('.drum').length;
for(var i=0; i<drum1;i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click',sound);
}
document.addEventListener("keypress",function(e){
    keyclick(e.key);
})

function sound(){
   var buttonInnerHTML = this.innerHTML;
   
   switch(buttonInnerHTML){
        case 'w':
            var audio =new Audio("crash.mp3");
            audio.play();
            break;
        case 'a':
            var audio =new Audio("kick-bass.mp3");
            audio.play();
            break;
        case 's':
            var audio =new Audio("snare.mp3");
            audio.play();
            break;
        case 'd':
            var audio =new Audio("tom-1.mp3");
            audio.play();
            break;
        case 'j':
            var audio =new Audio("tom-2.mp3");
            audio.play();
            break;
        case 'k':
            var audio =new Audio("tom-3.mp3");
            audio.play();
            break;
        case 'l':
            var audio =new Audio("tom-4.mp3");
            audio.play();
            break;
    default:
        break;

   }
}

function keyclick(key){
      switch(key){
         case 'w':
             var audio =new Audio("crash.mp3");
             audio.play();
             break;
         case 'a':
             var audio =new Audio("kick-bass.mp3");
             audio.play();
             break;
         case 's':
             var audio =new Audio("snare.mp3");
             audio.play();
             break;
         case 'd':
             var audio =new Audio("tom-1.mp3");
             audio.play();
             break;
         case 'j':
             var audio =new Audio("tom-2.mp3");
             audio.play();
             break;
         case 'k':
             var audio =new Audio("tom-3.mp3");
             audio.play();
             break;
         case 'l':
             var audio =new Audio("tom-4.mp3");
             audio.play();
             break;
     default:
         break;
 
    }
 }