const toggle = document.querySelector('.arkbar-toggler');
const offCanvas = document.querySelector('.off-canvas');
const close = document.querySelector('.off-canvas-close');


close.addEventListener('click', function() {
  offCanvas.classList.remove('visible');
});

toggle.addEventListener('click', function() {
  offCanvas.classList.toggle('visible');
});




const arkboxBtns = document.querySelectorAll('.arkbox-btn');
const arkboxes = document.querySelectorAll('.arkbox');
const arkboxCloseBtns = document.querySelectorAll('.arkbox-close');



arkboxBtns.forEach(button => {
    button.addEventListener('click', e => {
        const arkboxId = e.target.dataset.arkbox;
        const arkboxToOpen = document.getElementById(arkboxId);
        arkboxes.forEach(arkbox => {
            arkbox.style.display = 'none';
        });
        arkboxToOpen.style.display = 'block';
    });
});


arkboxCloseBtns.forEach(button => {
    button.addEventListener('click', e => {
        const arkbox = e.target.parentNode;
        arkbox.style.display = 'none';
    });
});




$(document).ready(function() {
  // Initially load main.php into the div with ID of "display"
  $("#display").load("/pages/main.php");

  // Use jQuery AJAX to load the href content of links with class of "content"
  $(".content").click(function(e) {
    e.preventDefault();
    $("#display").load($(this).attr("href"));
  });
});
