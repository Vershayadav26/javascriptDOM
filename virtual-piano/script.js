const keys = document.querySelectorAll(".key");
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

function playSound(freq){
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.frequency.value = freq;
  osc.type = "sine";

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    audioCtx.currentTime + 1
  );
  osc.stop(audioCtx.currentTime + 1);
}

keys.forEach(key=>{
  if(!key.dataset.note) return;

  key.addEventListener("mousedown",()=>{
    playSound(key.dataset.note);
    key.classList.add("active");
  });

  key.addEventListener("mouseup",()=>{
    key.classList.remove("active");
  });
});

document.addEventListener("keydown",e=>{
  keys.forEach(key=>{
    if(key.dataset.key === e.key.toUpperCase()){
      playSound(key.dataset.note);
      key.classList.add("active");
    }
  });
});

document.addEventListener("keyup",()=>{
  keys.forEach(k=>k.classList.remove("active"));
});
