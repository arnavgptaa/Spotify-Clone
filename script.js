console.log("Welcome to Sptofiy");

//Initialize the Variables
index = 0;
let audioElement = new Audio('Kishore Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Aanewala Pal Jaane Waala Hai",      filepath: "Kishore Songs/1.mp3",    coverPath: "Kishore Covers/1.jpg"},
    {songName: "Bheegi Bheegi Raaton Mein",         filepath: "Kishore Songs/2.mp3",    coverPath: "Kishore Covers/2.jpg"},
    {songName: "Chala Jata Hoon Kisi Ki Dhun Me",   filepath: "Kishore Songs/3.mp3",    coverPath: "Kishore Covers/3.jpg"},
    {songName: "Chookar Mere Man Ko",               filepath: "Kishore Songs/4.mp3",    coverPath: "Kishore Covers/4.jpg"},
    {songName: "Ek Ajnabee Haseena Se",             filepath: "Kishore Songs/5.mp3",    coverPath: "Kishore Covers/5.jpg"},
    {songName: "Kehdoon Tumhein Ya Chup Rahoon",    filepath: "Kishore Songs/6.mp3",    coverPath: "Kishore Covers/6.jpg"},
    {songName: "Kora Kagaz Tha Man Mera",           filepath: "Kishore Songs/7.mp3",    coverPath: "Kishore Covers/7.jpg"},
    {songName: "Mere Mehboob Qayamat Hogi",         filepath: "Kishore Songs/8.mp3",    coverPath: "Kishore Covers/8.jpg"},
    {songName: "Mere Sapno Ki Rani",                filepath: "Kishore Songs/9.mp3",    coverPath: "Kishore Covers/9.jpg"},
    {songName: "O Mere Dil Ke Chain",               filepath: "Kishore Songs/10.mp3",   coverPath: "Kishore Covers/10.jpg"},
]

// songItems.forEach((element)=>{
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
// })

//audioElement.play();

//Manage Play and Pause clicks 
masterPlay.addEventListener('click', ()=>{

    if(audioElement.paused ||  audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (progressBar.value * audioElement.duration)/100
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        index = parseInt(e.target.id)
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `Kishore Songs/${index}.mp3`;
        audioElement.currentTime = 0; //As the song is changed and the time should reset to zero
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');    
    })
})

//Next Song Master Button

document.getElementById('next').addEventListener('click', ()=>{
    if (index>10){
        index = 0
    }else{
        index += 1;
    }
    audioElement.src = `Kishore Songs/${index}.mp3`;
    audioElement.currentTime = 0; //As the song is changed and the time should reset to zero
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');    
})


//Previous Song Master Button

document.getElementById('previous').addEventListener('click', ()=>{
    if (index<=0){
        index = 0
    }else{
        index -= 1;
    }
    audioElement.src = `Kishore Songs/${index}.mp3`;
    audioElement.currentTime = 0; //As the song is changed and the time should reset to zero
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');    
})