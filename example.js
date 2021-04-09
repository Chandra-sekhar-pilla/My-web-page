var theme;

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
            console.log(toOpen.offsetLeft)
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

window.onload = function () {
    theme = true
}
function mode() {
    var toOpen = document.getElementById('about');
    var accountButtonHr = document.getElementById('closeLine');
    var accountButtonHr2 = document.getElementById('closeLine2');
    var topBar = document.getElementById('top-bar');
    var openButton = document.getElementById('openHr');
    var openButton2 = document.getElementById('openHr2');
    var switchMode = document.getElementById('LDmode');
    var body = document.getElementById('body');
    var matter = document.getElementById('matter');

    //switching background colors and colors
    if (theme) {
        toOpen.className = toOpen.className.replace(/(?:^|\s)about(?!\S)/g, 'lightAbout');
        topBar.className = topBar.className.replace(/(?:^|\s)top-bar(?!\S)/g, 'lightTop-Bar');
        openButton.className = openButton.className.replace(/(?:^|\s)open(?!\S)/g, 'light-hrs');
        openButton2.className = openButton2.className.replace(/(?:^|\s)open(?!\S)/g, 'light-hrs');
        accountButtonHr.className = accountButtonHr.className.replace(/(?:^|\s)close1(?!\S)/g, 'light-close1');
        accountButtonHr2.className = accountButtonHr2.className.replace(/(?:^|\s)close2(?!\S)/g, 'light-close2');
        matter.className = matter.className.replace(/(?:^|\s)matter(?!\S)/g, 'lightmatter');
        body.className = body.className.replace(/(?:^|\s)(?!\S)/g, 'white-body')
        console.log(body.className)
        switchMode.src = "darkmode.png";
        theme = false
    }
    else {
        toOpen.className = toOpen.className.replace(/(?:^|\s)lightAbout(?!\S)/g, 'about');
        topBar.className = topBar.className.replace(/(?:^|\s)lightTop-Bar(?!\S)/g, 'top-bar');
        openButton.className = openButton.className.replace(/(?:^|\s)light-hrs(?!\S)/g, 'open');
        openButton2.className = openButton2.className.replace(/(?:^|\s)light-hrs(?!\S)/g, 'open');
        accountButtonHr.className = accountButtonHr.className.replace(/(?:^|\s)light-close1(?!\S)/g, 'close1');
        accountButtonHr2.className = accountButtonHr2.className.replace(/(?:^|\s)light-close2(?!\S)/g, 'close2');
        matter.className = matter.className.replace(/(?:^|\s)lightmatter(?!\S)/g, 'matter');
        body.className = body.className.replace(/(?:^|\s)white-body(?!\S)/g, '')
        console.log(body.className)
        switchMode.src = "mode.png";
        theme = true
    }
}