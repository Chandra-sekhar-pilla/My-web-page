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
    var switchMode = document.getElementById('LDmode');


    //switching background colors and colors
    if (theme) {
        cName('about', 'about', 'lightAbout')
        cName('top-bar', 'top-bar', 'lightTop-Bar')
        cName('openHr', 'open', 'light-hrs')
        cName('openHr2', 'open', 'light-hrs')
        cName('closeLine', 'close1', 'light-close1')
        cName('closeLine2', 'close2', 'light-close2')
        cName('matter', 'content', 'lightmatter')
        cName('matter2', 'content', 'lightmatter')
        cName('body', '', 'white-body')
        switchMode.src = "darkmode.png";
        theme = false
    }
    else {
        cName('about', 'lightAbout', 'about')
        cName('top-bar', 'lightTop-Bar', 'top-bar')
        cName('openHr', 'light-hrs', 'open')
        cName('openHr2', 'light-hrs', 'open')
        cName('closeLine', 'light-close1', 'close1')
        cName('closeLine2', 'light-close2', 'close2')
        cName('matter', 'lightmatter', 'content')
        cName('matter2', 'lightmatter', 'content')
        cName('body', 'white-body', '')
        switchMode.src = "mode.png";
        theme = true
    }

    function cName(elementId, preClass, aftClass) {
        var el = document.getElementById(`${elementId}`)
        el.className = el.className.replace(`${preClass}`, `${aftClass}`);
    }
}

