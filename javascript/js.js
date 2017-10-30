window.onload = function () {
    var scrolled;
    var timer;
    document.getElementById('top').onclick = function () {
        scrolled = window.pageYOffset;
        scrollToTop();
    }

    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled -= 100;
            timer = setTimeout(scrollToTop, 320);
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
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

// window.onkeydown = function(event){
//     if(event.keyCode==123){
//         return false;
//     }
//     else if(event.ctrlKey && event.shiftKey && event.keyCode==73){
//         return false;
//     }
// };

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