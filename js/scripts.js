// var mydata = JSON.parse(data);
// console.log(mydata);
// for(i=0;i<mydata.length;i++){
//     document.getElementById("movieData").innerHTML += (i+1);
//     for(x in mydata[i]){
//         document.getElementById("movieData").innerHTML += '<p>'+mydata[i][x]+'</p>';
        
//     }
//     document.getElementById("movieData").innerHTML += '<hr>';    
// }
// function googleTranslateElementInit() {
//     new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
// }    


// $(".accordion-handle").click(function(){
// 	$(".accordion-content").slideUp(300);
// 	$(".accordion-handler-icons").removeClass("fa-eye");
// 	$(".accordion-handler-icons").addClass("fa-eye-slash");
// 	$(this).children(".accordion-handler-icons").addClass("fa-eye");
// 	$(this).children(".accordion-handler-icons").removeClass("fa-eye-slash");
// 	$(this).siblings(".accordion-content").slideDown(300);
// 	console.log($(this).attr("id"));
// });

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 
