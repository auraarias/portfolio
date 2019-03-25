let header = document.querySelector('body header');
let banner = document.querySelector("#banner");
let logo = document.querySelector("#logo");

let menuOptions = [...document.querySelectorAll('#menu li')];

$(window).on('scroll', function () {
    var y_scroll_pos = window.pageYOffset;
    console.log(y_scroll_pos);
    if (y_scroll_pos > 95) {
        header.className = 'down'
        //goToTop.style.display = 'flex'
    } else {
        header.className = 'top';
        //goToTop.style.display = 'none'
    }
    if (y_scroll_pos <= 330){
        menuOptions[0].className = 'active';
        menuOptions[1].className = ' ';
        menuOptions[2].className = ' ';
        menuOptions[3].className = ' ';
    }

    if (y_scroll_pos > 530 && y_scroll_pos <= 770){
        menuOptions[0].className = ' ';
        menuOptions[1].className = 'active';
        menuOptions[2].className = ' ';
        menuOptions[3].className = ' ';
    }

    if (y_scroll_pos > 970 && y_scroll_pos < 1800){
        menuOptions[0].className = ' ';
        menuOptions[1].className = ' ';
        menuOptions[2].className = 'active';
        menuOptions[3].className = ' ';
    }
});



function clearMenu() {
    for (let index = 0; index < menuOptions.length; index++) {
        menuOptions[index].className = '';
    }
}