function fader() {
    var toOpen = document.getElementById('about');
    var accountButton = document.getElementById('account');
    var pos = 0;

    var t = setInterval(fade, 10);


    function fade() {
        if (toOpen.offsetLeft >= 0) {
            clearInterval(t);
            accountButton.style.visibility = 'hidden';
        }
        else {

            pos += 10;
            toOpen.style.left = pos + 'px';
            accountButton.style.left = pos + 'px';
        }
    }
};

function al() {
    var toOpen = document.getElementById('about');
    var accountButton = document.getElementById('account');
    var pos = 300;
    var t = setInterval(fadeOut, 10);


    function fadeOut() {
        if (toOpen.offsetLeft == -300) {
            clearInterval(t);
            accountButton.style.visibility = 'visible';
        }
        else {

            pos -= 10;
            toOpen.style.left = pos + 'px';
            accountButton.style.left = pos + 'px';
        }
    }
};