const images = [
  "./images/image1.png",
  "./images/image2.png",
  "./images/image3.png",
];

let count = 0;
const slideimage = () => {
  if (count >= images.length) {
    count = 0;
  } else {
    document.getElementById("slideshow").src = images[count];
    count++;
  }
};

let slideid = 0;
const startstop = () => {
  if (slideid == 0) {
    slideid = setInterval(slideimage, 1000);
  } else {
    clearInterval(slideid);
    slideid = 0;
  }
};
document.getElementById("startbtn").onclick = startstop;
