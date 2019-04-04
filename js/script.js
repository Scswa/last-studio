/*jshint esversion: 6 */

// We need to listen for scroll events on the page
// When we scrollbar reaches a certain distance
// We want to change the background color of the body

// .querySelector
// .querySelectorAll
// addEventListener
// console.log() allows us to view the js in inspect, Console

// Let is changable (Changing background color)
// Const (Constant)

// Funtions allow us to tie things togethers
// You can create your own actions and use pre existing ones
// Document relates to the html page . is the action

const bodyTag = document.querySelector("body");
// Step 1: Decide which tags in HTML we want to use & save them as constants at the top of the page

document.addEventListener("scroll", function() {
  // Step 2: Decide which user events ie,click scroll, ect, we want to trigger our code on. Here we want to listen out or any scroll events on our page

  // Do something when the page is scrolled
  // console.log("Page has been scrolled! Wooooo!");

  // Step 3: Find out and store how far from the top of the page the scroll bar is
  // use window when refering to the scrollbar as it is on the browser frame
  let distanceFromTop = window.scrollY;
  console.log(distanceFromTop);

  // If the distance from top is greater than 1000px, do something

  if (distanceFromTop > 1000) {
    // Do this
    // console.log("More then 1000 pixels ");
    // bodyTag.style.backgroundColor = "black";
    bodyTag.classList.add("brogue-active");
    // bodyTag.style.fontSize = "50px";

  } else {
    // Do something else
    // console.log("Less than 1000 pixels ");
    // bodyTag.style.backgroundColor = "#f5f5f5";
    bodyTag.classList.remove("brogue-active");
  }

  if (distanceFromTop > 4300) {
    bodyTag.classList.add("stationary-active");
  } else {
    bodyTag.classList.remove("stationary-active");
  }
});

// Lightbox
// When we click on an image
// We want to show the lightbox
// Inside the lightbox we want to show the image we clicked on
// When we click on the lightbox we want it to disappear

// Step 1: Decide which tags in HTML we want to use and save them in constants

// Save all our images into a constant (const) - This will be a list of images

const images = document.querySelectorAll("section img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");

// Let's you look at what's saves in images

console.log(images);
// Our images constant contains a list of images. We want to add an event listener to each image. To do this we use a loop. in javascript this is calle a forEach function. It loops through all our images & applies the same code.
images.forEach(image => {

  // Step 2: Add a click event listener to all of our images
  image.addEventListener("click", function() {

    console.log("image clicked!");
    // Step 3: Show the lightbox
    lightbox.classList.add("fadeIn");
    // Step 4: Show the right image
    // Save the image source attribute from the image we click on
    // The keyword "this" refernces the image we have clicked on - THIS image. .getAttribute because it contains the image locations.
    let imageSrc = this.getAttribute("src");
    console.log(imageSrc);
    // Set the lightbox image src attribute to the one we save
    lightboxImage.setAttribute("src", imageSrc);

  });
});

// Step 4: When we click on the lightbox remove the fadeIn class
lightbox.addEventListener("click", function() {
  lightbox.classList.remove("fadeIn");
});