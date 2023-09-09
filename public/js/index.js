console.log("loaded js");
// Get the video element by its id
const videoElement = document.getElementById("videoPlayer");

// // Construct the video URL based on the passed videoFilename
// const videoFilename = "<%= filename %>"; // This will be replaced with the actual value by your template engine
// const videoURL = "/" + videoFilename + "/load"; // Update the path as needed

// // Set the src attribute of the video element
// videoElement.src = videoURL;

// // Enable autoplay
videoElement.autoplay = true;

// console.log(videoURL);
