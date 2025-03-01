let play_pause = document.getElementById("play_pause")
// console.log(play_pause)
//song progress bar
let song_bar = document.getElementById("song_progress_bar");

let audioElement = new Audio("./assets/song1.mp3")

let album_name = document.getElementById("album_name")

let playButtons = document.querySelectorAll(".play i")

let currentPlayingIndex = -1
let songs = [
    "./assets/song1.mp3",
    "./assets/song2.mp3",
    "./assets/song3.mp3",
    "./assets/song4.mp3",
    "./assets/song5.mp3",
    "./assets/song6.mp3",
    "./assets/song7.mp3",
    "./assets/song8.mp3",
    "./assets/song9.mp3",
    "./assets/song10.mp3",
    "./assets/song11.mp3",
    "./assets/song12.mp3",
]

let songNames = [
    "Tum hi Ho",
    "Morni Banke",
    "Badtameez Dil",
    "Thodi Der",
    "Galliyan",
    "Lal Akhiyaan",
    "Coco Cola",
    "Phir Bhi Tumko",
    "Bhool Bhulaiya",
    "pahli dafa",
    "Shayad",
    "Bom Diggy Diggy"
]

play_pause.addEventListener("click",()=>{
    // console.log("object")
    if(audioElement.paused || audioElement.currentTime == 0){
        audioElement.play()
        play_pause.classList.remove("fa-play")
        play_pause.classList.add("fa-pause")
    }
    else{
        audioElement.pause()
        play_pause.classList.remove("fa-pause")
        play_pause.classList.add("fa-play")
    }
})

audioElement.addEventListener("timeupdate",()=>{
    console.log(audioElement.currentTime) 
    console.log(audioElement.duration)

    let progress = (audioElement.currentTime/audioElement.duration)*100
    console.log(progress)
    song_bar.value= progress;
})

song_bar.addEventListener("change",()=>{
    audioElement.currentTime = (song_bar.value*audioElement.duration)/100
})


// console.log(playButtons)
playButtons.forEach((button,index)=>{
    button.addEventListener("click",()=>{
       if(currentPlayingIndex!==index){
         if(currentPlayingIndex!==-1){
             playButtons[currentPlayingIndex].classList.replace("fa-pause","fa-play")
         }
         audioElement.src=songs[index]
         audioElement.play()
         button.classList.replace("fa-play","fa-pause")
         play_pause.classList.replace("fa-play","fa-pause")
         currentPlayingIndex=index
         album_name.innerText=songNames[index]
       }else{
         if(audioElement.paused){
            audioElement.play()
         button.classList.replace("fa-play","fa-pause")
         play_pause.classList.replace("fa-play","fa-pause")
         }else{
             audioElement.pause()
         button.classList.replace("fa-pause","fa-play")
         play_pause.classList.replace("fa-pause","fa-play")
         }
       }
       
    })
 }) 

//  !Handling  prev /next buttons

// !HANDLING PREV / NEXT BUTTONS
let count = -1;
let forward = document.querySelector(".fa-forward");
let backward = document.querySelector(".fa-backward");

forward.addEventListener("click", () => {
  if (count<11) {
    count++;
     audioElement.src=songs[count]
     http://audioElement.play()
     album_name.innerText=songNames[count]
     play_pause.classList.replace("fa-play", "fa-pause");
  }
});

backward.addEventListener("click", () => {
  if (count > 0) {
    count--
    audioElement.src=songs[count]
    http://audioElement.play()
    album_name.innerText=songNames[count]
    play_pause.classList.replace("fa-play", "fa-pause");
  }
});