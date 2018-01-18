$(document).ready(function() {

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('nav').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('nav').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('nav').removeClass('nav-up');
            }
        }

        lastScrollTop = st;
    }


    // Typing animations for welcome page
    new TypeIt('.type-it', {
        speed: 90,
        lifeLike: false,
        autoStart: false,
        startDelay: 2200
    })
    .type('Hi, my name&#8217;s Zack.')
    .pause(800)
    .break()
    .pause(200)
    .break()
    .type('I&#8217;m a digital designer from Boston who cares about ')
    .pause(2000)
    .type('<span>simplicity</span>.')
    .pause(1000)
    .delete(11)
    .pause(300)
    .type('<span>usability</span>.')
    .pause(1000)
    .delete(10)
    .pause(300)
    .type('<span>empathy</span>.')
    .pause(1000)
    .delete(8)
    .pause(300)
    .type('<span>collaboration</span>.')
    .pause(1000)
    .delete(14)
    .pause(300)
    .type('<span>craft</span>.')
    .pause(1000)
    .delete(6)
    .pause(300)
    .type('<span>creativity</span>.')
    .pause(1000)
    .delete(11)
    .pause(300)
    .type('<span>technology</span>.')
    .pause(1000)
    .delete(11)
    .pause(300)
    .type('<span>transparency</span>.')
    .pause(1000)
    .delete(13)
    .pause(300)
    .type('<span>strong coffee</span>.')
    .pause(1000)
    .delete(14)
    .pause(300)
    .type('<span>Cinnamon Toast Crunch</span>.')
    ;


});
