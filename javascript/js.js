window.onload = function () {
    var scrolled;
    var timer;
    document.getElementById('top').onclick = function () {
        scrolled = window.pageYOffset;
        scrollToTop();
    }

    // document.getElementById('go_button').onclick = function () {
    //     scrolled = window.pageYOffset;
    //     scrollToDown();
    // }
    //

    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled -= 250;
            timer = setTimeout(scrollToTop, 120);
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    }
}

function sound() {
    var play = document.getElementById("sound");
    play.play();
}

document.getElementById('go_button').addEventListener('click', function(e) {
    e.preventDefault();  // запрет перехода по ссылке, вместо него скрипт
    scrollToDown();
    point = 0;
}, false);

var point = window.pageYOffset;
var timer_down;

function scrollToDown() {
    sound();
    if (point < 920) {
        window.scrollTo(0, point);
        point += 60;
        timer_down = setTimeout(scrollToDown, 80);
    }
}

// document.getElementById('open-slide a').onclick = openSlideMenu();
// document.getElementById('btn-close').onclick = closeSlideMenu();


function openSlideMenu(){
    document.getElementById('side-menu').style.width = '25%';
    document.getElementById('side-menu').style.display = 'block';
}

function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('side-menu').style.display = 'none';
    document.getElementById('side-menu').style.color = '#ff9e79';
}
//Need to use before deploy!!!
// window.onkeydown = function(event){
//     if(event.keyCode==123){
//         return false;
//     }
//     else if(event.ctrlKey && event.shiftKey && event.keyCode==73){
//         return false;
//     }
// };


var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('img1');
var modalImg = document.getElementById("imgModal1");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};




// function sound_and_go() {
//     sound();
//     scrollToDown()
// }

// (function() {

// function ScrollHide ( element ) {
//
//     this.viewport = document.getElementById( "site" );
//     this.element = document.getElementById( element );
//     this.elementHeight = this.element.offsetHeight;
//
//     this.scrollElement = function() {
//         var self = this;
//         self.viewport.addEventListener( "scroll", function() {
//             var top = this.scrollTop;
//
//             if( top > self.elementHeight ) {
//                 self.element.className = "hidden";
//             } else {
//                 self.element.className = "";
//             }
//
//         }, false);
//     };
//
//     this.scrollElement();
// }
//
// document.addEventListener( "DOMContentLoaded", function() {
//     var scrollHideInstance = new ScrollHide( "banner" );
// });
//
// })();
