
//Load github project page from project block h2
const link = "https://github.com/repozen/";

function getName() {
  let projectName = this.parentNode.querySelector('h2').innerText;
  open(link + projectName.toLowerCase());
}

// Wait for the DOM content to load before accessing elements
document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.act_button');
  buttons.forEach(function(button) {
    button.addEventListener('click', getName);
  });
});
