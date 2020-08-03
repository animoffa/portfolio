

$(document).ready(() => {
    //nav buttons
    $('.header__navigation__text').mouseenter(function () {
        let ind = $(this).index("a");
        $(`.header__navigation__text +.header__navigation__line:eq(${ind})`)
            .css({"background": "#eb0c0c"}).animate({"width": "100%"}, {queue: false, duration: 600})
    });
    $('.header__navigation__text').mouseleave(function () {
        let ind = $(this).index("a");
        $(`.header__navigation__text +.header__navigation__line:eq(${ind})`)
            .animate({"width": "0", "background": "transparent"}, {queue: false, duration: 600})
    });
    $('.header__navigation__text').click(function(){
        let ind = $(this).index("a");
$(`.header__navigation__text +.header__navigation__line:eq(${ind})`).css({"background": "#a40b0b"})
    })

//slider
    function ganttEach() {
        $('.slider').delay(7000).fadeOut(1000, function () {
            $(this).attr('src', './images/6.jpg').fadeIn(1500).delay(8000).fadeOut(1000, function () {
                $(this).attr('src', './images/5.jpg').fadeIn(1500).delay(8000).fadeOut(1000, function () {
                    $(this).attr('src', './images/1.jpg').fadeIn(1500)
                })
            })
        });
    }
    ganttEach();
    window.setInterval(ganttEach, 34000);


    let options = {
        strings: ['Front-end developer.', 'Web-developer.', 'React developer.'],
        typeSpeed: 150,
        startDelay: 2500,
        backSpeed: 150,
        backDelay:2000,
        loop: true,
        loopCount: 30,
    };
    let typed = new Typed('#typing', options);
    $("#typing").text('',typed);

})
