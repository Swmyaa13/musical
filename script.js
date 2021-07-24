let previous = document.querySelector('#prev');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let name = document.querySelector('#name');
let artist = document.querySelector('#artist');
let duration = document.querySelector('#progressBar');
let image = document.querySelector('#img');
let auto = document.querySelector('#auto');

let timer;
let autoplay = 0;

let index = 0;
let playing = false;

let track = document.createElement('audio');
let end = false;

//All songs list
let All_song = [
   {
     name: "Shania - Still the one",
     path: "songs/theone.mp3",
     img: "images/img.jpg",
     singer: "Shania Twain"
   },
   {
     name: "Harry Styles - Falling",
     path: "songs/falling.mp3",
     img: "images/falling.jpg",
     singer: "Harry Styles"
   },
   {
    name: "Akon - Blame On Me",
    path: "songs/blame.mp3",
    img: "images/image.jpg",
    singer: "Akon"
  },
  {
    name: "Taeyong - Eyes Nose Lips",
    path: "songs/eyes.mp3",
    img: "images/image2.jpg",
    singer: "Taeyong"
  },
  
  {
    name: "Halsey - East Side",
    path: "songs/eastside.mp3",
    img: "images/image3.jpg",
    singer: "Halsey"
  },
   
   {
     name: " 1D - If I Could Fly",
     path: "songs/fly.mp3",
     img: "images/east.jpg",
     singer: "One Direction"
   }
   
];

function load_track(index) {
    track.src = All_song[index].path;
    name.innerHTML = All_song[index].name;
    image.src = All_song[index].img;
    artist.innerHTML = All_song[index].singer;
    track.load();
    
}
load_track(index);
track.onended = next_song();

function justplay() {
    if(playing == false) {
        playsong();
    } else {
        pausesong();
    }
}

function playsong() {
    track.play();
    playing = true;
    play.innerHTML = '<i class="material-icons">pause</i>';
    
}
function pausesong() {
    track.pause();
    playing = false;
    play.innerHTML = '<i class="material-icons">play_arrow</i>';
}
function next_song() {
    if(index < All_song.length-1) {
        index += 1;
        load_track(index);
        playsong();
    } else {
        index = 0;
        load_track(index);
        playsong();
    }
}
function previous_song() {
    if(index > 0) {
        index -= 1;
        load_track(index);
        playsong();
    } else {
        index = All_song.length;
        load_track(index);
        playsong();
    }
}

function autoplay_switch() {
    if(autoplay == 0) {
        autoplay = 1;
        auto.style.color = "#303030";
        
    } else {
        autoplay = 0;
        auto.style.color = "#B0B0B0";
    }
}
function playnext() {
    if(track.onended) {
        if(autoplay == 1) {
            index += 1;
            load_track(index);
        }
    }
    
}

