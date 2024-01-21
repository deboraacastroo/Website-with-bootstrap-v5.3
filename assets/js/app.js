//function for the menu to remain fixed when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {
        document.getElementById('navbar').classList.add('scrolled');
    } else {
        document.getElementById('navbar').classList.remove('scrolled');
    }
}

// AOS - animation
AOS.init({
    duration: 800,          //to shorten the duration of the animation
});