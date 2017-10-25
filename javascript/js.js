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

// window.onkeydown = function(event){
//     if(event.keyCode==123){
//         return false;
//     }
//     else if(event.ctrlKey && event.shiftKey && event.keyCode==73){
//         return false;
//     }
// };