var masterButton = document.querySelector("#palybotton");
var myProgressbar = document.querySelector("#myProgressbar");
var mygigf = document.querySelector("#mygif");
var songItems = Array.from(document.getElementsByClassName("songListItem"));
var songListIcon = Array.from(document.getElementsByClassName("songListIcon"));
var index=0;
let songs = [
  {
    songTime: 00,
    songName: "Warriyo - Mortals [NCS Release]",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songTime: 00,
    songName: "Cielo - Huma-Huma",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songTime: 00,
    songName: "DEAF KEV - Invincible [NCS Release]-320k",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songTime: 00,
    songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songTime: 00,
    songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songTime: 00,
    songName: "Rabba - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songTime: 00,
    songName: "Sakhiyaan - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songTime: 00,
    songName: "Bhula Dena - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songTime: 00,
    songName: "Tumhari Kasam - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songTime: 00,
    songName: "Na Jaana - Salam-e-Ishq",
    filePath: "songs/4.mp3",
    coverPath: "covers/10.jpg",
  },
];
songItems.forEach((element, i) => {
  element.getElementsByClassName("songCover")[0].src = songs[i].coverPath;
  element.getElementsByClassName(" songName")[0].innerText = songs[i].songName;
  element.getElementsByClassName("songTime")[0].innerText = songs[i].songTime;
});
var sampleAudio = new Audio(songs[0].filePath);
//play botton logic
console.log("HELLO ");
masterButton.addEventListener("click", () => {
  if (masterButton.classList[2] == "fa-circle-pause") {
    masterButton.classList.remove("fa-circle-pause");
    masterButton.classList.add("fa-circle-play");
    makeAllPlay();

    sampleAudio.pause();
    mygigf.style.opacity = "0";
  } 
  else {

    masterButton.classList.remove("fa-circle-play");
    masterButton.classList.add("fa-circle-pause");
    masterButton.classList.add("fa-circle-play");
    sampleAudio.play();
    mygigf.style.opacity = "1";
  }
});

//sync bar logic
sampleAudio.addEventListener("timeupdate", () => {
  myProgressbar.value = (100 * sampleAudio.currentTime) / sampleAudio.duration;
});
myProgressbar.addEventListener("change", () => {
  sampleAudio.currentTime = (myProgressbar.value * sampleAudio.duration) / 100;
});

//all song play ans all small play button
var makeAllPlay = () => {
  Array.from(document.getElementsByClassName("songListIcon")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};
songListIcon.forEach((element) => {
  element.addEventListener("click", (e) => {
    makeAllPlay();
    index=parseInt(e.target.id);
    console.log(index)
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    masterButton.classList.remove("fa-circle-play");
    masterButton.classList.add("fa-circle-pause");
    sampleAudio.currentTime=0;
    mygigf.style.opacity = "1";
   sampleAudio.src =(songs[index].filePath);
    sampleAudio.play();


  });
});

// previous button
document.getElementById('previous').addEventListener('click',()=>{
   if (index==9 || index==0) {
      index=0;
   }
   else{
      index--;
      sampleAudio.src =(songs[index].filePath);
      sampleAudio.play();
   }
   
})

// next button
document.getElementById('next').addEventListener('click',()=>{
   if (index==9) {
      index=0;
   }
   else{
      index++;
      sampleAudio.src =(songs[index].filePath);
      sampleAudio.play();
   }
   
})