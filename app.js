
const mobile_click = document.querySelector("#Mobile_Menu");

mobile_click.addEventListener("click", function() {

    this.querySelector("i").classList.toggle("fa-times");

    const mobile_menu_wraper = document.querySelector(".navigation-bar");

    mobile_menu_wraper.classList.toggle("show_main_menu");

})
