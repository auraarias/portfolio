let home = document.querySelector("#home");
let logo = document.querySelector("#logo");
let about = document.querySelector("#about");
let contact = document.querySelector("#contact");

let menuOptions = [...document.querySelectorAll('#navBar .menu li')];

$(window).on('scroll', function () {
    var y_scroll_pos = window.pageYOffset;

    console.log(y_scroll_pos);
    console.log(home.scrollHeight);
    console.log(about.scrollHeight);
    console.log(contact.scrollHeight);

    if (y_scroll_pos <= home.scrollHeight/2){
        menuOptions[0].className = 'active';
        menuOptions[1].className = ' ';
        menuOptions[2].className = ' ';
        menuOptions[3].className = ' ';
    }

    if (y_scroll_pos > home.scrollHeight/2 && y_scroll_pos <= (home.scrollHeight/2 + (about.scrollHeight/2))){
        menuOptions[0].className = ' ';
        menuOptions[1].className = 'active';
        menuOptions[2].className = ' ';
        menuOptions[3].className = ' ';
    }

    if (y_scroll_pos > home.scrollHeight + about.scrollHeight/2 && y_scroll_pos <= (home.scrollHeight + about.scrollHeight/2 + (contact.scrollHeight/2))){
        menuOptions[0].className = ' ';
        menuOptions[1].className = ' ';
        menuOptions[2].className = ' ';
        menuOptions[3].className = 'active';
    }
});



function clearMenu() {
    for (let index = 0; index < menuOptions.length; index++) {
        menuOptions[index].className = '';
    }
}