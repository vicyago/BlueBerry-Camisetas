function initMouseMove() {
    function agMouseMoveX(argSelector, argSpedX) {
        const agSelector = document.querySelectorAll(argSelector);

        agSelector.forEach(function (item) {
            var agItemWidth = item.clientWidth;
            item.addEventListener("mousemove", function (event) {
                var agTransX = event.clientX - agItemWidth;

                const agTranslateX = item.children;

                for (var i = 0; i < agTranslateX.length; i++) {
                    agTranslateX[i].style.transform =
                        "translateX(" +
                        agTransX / (argSpedX * (agTranslateX.length - i)) +
                        "px)  rotate(0.01deg)";
                }
            });
        });
    }

    agMouseMoveX(".js-parallax_box", -75);
}

initMouseMove();

window.addEventListener("scroll", function() {
    let navBar = document.querySelectorAll(".nav")[0];
    let aside = document.querySelectorAll("aside")[0];
    let asideWidth = aside.offsetWidth;
    let asideLeftOffset = aside.offsetLeft;
    if (window.scrollY > navBar.offsetTop) {
        navBar.classList.replace("navRel", "navFixed")
        navBar.style.width = asideWidth.toString() + "px";
        navBar.style.left = asideLeftOffset.toString() + "px";
        navBar.style.marginLeft = "0%";
    }else{
        navBar.classList.replace("navFixed", "navRel");
        navBar.style.left = "0px";
        navBar.style.marginLeft = "-3%"
    }
});