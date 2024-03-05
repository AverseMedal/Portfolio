document.addEventListener("DOMContentLoaded", function () {
  fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          var randomIndex = Math.floor(Math.random() * data.length);
          var quoteText = data[randomIndex].quote;
          document.getElementById('quoteBlock').innerText = quoteText;
      })
      .catch(function (error) {
          console.error('Error fetching quote:', error);
      });
});

