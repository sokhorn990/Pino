const WHITE_KEYS = ['z','x','c','v','b','n','m'];
const BLACK_KEYS = ['s', 'd','g','h','j'];
const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');
keys.forEach(key => {
  key.addEventListener('click', () => onPlaySound(key))
  });

document.addEventListener('keydown', event => {
  const keybord = event.key;
  const whiteKeysIndex = WHITE_KEYS.indexOf(keybord);
  const blackKeysIndex =  BLACK_KEYS.indexOf(keybord);
  if(!event.repeat){
    if(whiteKeysIndex > -1){
      onPlaySound(whiteKeys[whiteKeysIndex]);
    }
    
    if(blackKeysIndex > -1){
      onPlaySound(blackKeys[blackKeysIndex]);
    }
  
  }

}); 
function onPlaySound(key){
  // key world
    const audioKey = document.getElementById(key.dataset.note);
    audioKey.play();
    key.classList.add('active');
    audioKey.addEventListener('ended', () => {
        key.classList.remove('active')
    });
}



