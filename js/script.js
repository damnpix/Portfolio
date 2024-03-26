
//Load github project page from project block h2
const link = "https://github.com/repozen/";

function getName() {
  let html = this.querySelector('h2').innerHTML;
  open(link + html);
}

// Wait for the DOM content to load before accessing elements
document.addEventListener('DOMContentLoaded', function() {
  var products = document.getElementsByClassName('project_block');
  for (let i = 0; i < products.length; i++) {
    products[i].onclick = getName;
  }
});
