document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        loop: true,
        direction: 'horizontal',
        grabCursor:true,
        spaceBetween:true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets:true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        
        breakpoints: {
            // when window width is >= 576px
            576: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        }
        
    });
});


var Preloader = document.getElementById('loading');

function myfunction(){
    Preloader.style.display = 'none';
}



var Active = document.getElementById("Active");
var activeBtn = Active.getElementsByClassName("active-btn");
for (var i = 0; i < activeBtn.length; i++) {
    activeBtn[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += "active";
    });
}



const searchBar = document.getElementById("search-bar");
const navLinks = document.querySelectorAll("#navigation li a"); // More specific selector

searchBar.addEventListener("keyup", function() {
    const searchTerm = searchBar.value.toLowerCase();

    navLinks.forEach(link => {
        const linkText = link.textContent.toLowerCase();
        const matchFound = linkText.includes(searchTerm);

        link.parentNode.style.display = matchFound ? "block" : "none";
    });
});

//  code for mail
// script.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission
      
      // Perform additional client-side validation if needed
      const name = form.elements["name"].value;
      const email = form.elements["email"].value;
      const number = form.elements["number"].value;
      const subject = form.elements["subject"].value;
      
      if (name && email && number && subject) {
        // If all fields are filled, submit the form
        form.submit();
      } else {
        alert("Please fill in all the fields.");
      }
    });
  });


  // for side bar
  $(document).ready(function()
{
    $('#small-container').click(function()
    {
        $(this).toggleClass('fa-time');
        $('navbar').toggleClass('toggle');
    });
    $('window').on('scroll load',function()
    {
        $('#small-container').removeClass('fa-time');
        $('navbar').removeClass('toggle');

        //for makin upward arrow
        if($(window).scrollTop() > 0){
            $('.to-top').show();

        }else{
            $('.to-top').hide();
        }
    });
//smooth scroll
 $('a[href*="#"]').click(function(e){
    e.preventDefault();
    $('html , body').animate({
        scrollTop : $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
    );
 });

});


// Swiperr Code 
