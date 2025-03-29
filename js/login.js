function checkCode() {
  const code = document.getElementById("code").value;
  if (code === "29032006") {
    window.location.href = "/html/sucess.html";
  } else {
    window.location.href = "/html/fail.html";
  }
}
function tryAgain() {
  window.location.href = "/log.html";
}
function goTo() {
  window.location.href = "/html/happy.html";
}
// Get the audio element
var audio = document.getElementById('audioPlayer');
        
// Set up the event listener for when the audio ends
audio.addEventListener('ended', function() {
    // Redirect to another page when the audio ends
    window.location.href = '/html/pag1.html'; // Replace with your desired URL
});
// timer coundown
