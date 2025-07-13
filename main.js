// main.js

document.addEventListener("DOMContentLoaded", () => {
  const EMPTY_HEART = '♡';
  const FULL_HEART = '♥';

  // Find the modal element and add hidden class at start
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');

  // Select all hearts (for example, all with class 'like-glyph')
  const hearts = document.querySelectorAll('.like-glyph');

  hearts.forEach(heart => {
    heart.addEventListener('click', () => {
      // Call mimicServerCall to simulate request
      mimicServerCall()
        .then(() => {
          // SUCCESS: toggle heart
          if (heart.textContent === EMPTY_HEART) {
            heart.textContent = FULL_HEART;
            heart.classList.add('activated-heart'); // make red
          } else {
            heart.textContent = EMPTY_HEART;
            heart.classList.remove('activated-heart');
          }
        })
        .catch((error) => {
          // FAILURE: show error modal
          const modalMessage = document.getElementById('modal-message');
          modalMessage.textContent = error;
          modal.classList.remove('hidden');

          // Hide modal after 3 seconds
          setTimeout(() => {
            modal.classList.add('hidden');
          }, 3000);
        });
    });
  });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
