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
        ChangeClassName('about', 'about', 'lightAbout')
        ChangeClassName('top-bar', 'top-bar', 'lightTop-Bar')
        ChangeClassName('openHr', 'open', 'light-hrs')
        ChangeClassName('openHr2', 'open', 'light-hrs')
        ChangeClassName('closeLine', 'close1', 'light-close1')
        ChangeClassName('closeLine2', 'close2', 'light-close2')
        ChangeClassName('matter', 'content', 'lightmatter')
        ChangeClassName('matter2', 'content', 'lightmatter')
        ChangeClassName('body', '', 'white-body')
        switchMode.src = "darkmode.png";
        theme = false
    }
    else {
        ChangeClassName('about', 'lightAbout', 'about')
        ChangeClassName('top-bar', 'lightTop-Bar', 'top-bar')
        ChangeClassName('openHr', 'light-hrs', 'open')
        ChangeClassName('openHr2', 'light-hrs', 'open')
        ChangeClassName('closeLine', 'light-close1', 'close1')
        ChangeClassName('closeLine2', 'light-close2', 'close2')
        ChangeClassName('matter', 'lightmatter', 'content')
        ChangeClassName('matter2', 'lightmatter', 'content')
        ChangeClassName('body', 'white-body', '')
        switchMode.src = "mode.png";
        theme = true
    }

    function ChangeClassName(elementId, preClass, aftClass) {
        var el = document.getElementById(`${elementId}`)
        el.className = el.className.replace(`${preClass}`, `${aftClass}`);
    }
}

