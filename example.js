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

function mode() {
    var toOpen = document.getElementById('about');
    var accountButton = document.getElementById('closeLine');
    var accountButton2 = document.getElementById('closeLine2');
    var topBar = document.getElementById('top-bar');
    var openButton = document.getElementById('openHr')
    var openButton2 = document.getElementById('openHr2')
    var switchMode = document.getElementById('LDmode')

    //switching background colors and colors
    if (toOpen.style.backgroundColor === 'rgba(0, 0, 0, 0.8)') {
        toOpen.style.backgroundColor = 'rgba(160, 160, 160, 0.8)';
        topBar.style.backgroundColor = 'rgba(160, 160, 160, 0.8)';
        openButton.style.backgroundColor = 'black';
        openButton2.style.backgroundColor = 'black';
        accountButton.style.backgroundColor = 'black';
        accountButton2.style.backgroundColor = 'black';
        switchMode.src = "darkmode.png"
    }
    else {
        toOpen.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        topBar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        openButton.style.backgroundColor = 'white';
        openButton2.style.backgroundColor = 'white';
        accountButton.style.backgroundColor = 'white';
        accountButton2.style.backgroundColor = 'white';
        switchMode.src = "mode.png"
    }
}