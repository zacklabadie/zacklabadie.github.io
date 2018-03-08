$(document).ready(function() {
    // Scrolling peekaboo nav based on work by Marius Craciunoiu
    // http://jsfiddle.net/mariusc23/s6mLJ/31/
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('nav').outerHeight();

    // Check for scrolling every 250ms
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

        // If they scrolled down and are past the navbar, add class .nav-up
        if (st > lastScrollTop && st > navbarHeight*2){
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
        speed: 65,
        lifeLike: false,
        autoStart: false,
        startDelay: 1800
    })
    .type('Hi, my name&#8217;s Zack.')
    .pause(800)
    .break()
    .pause(200)
    .break()
    .type('I&#8217;m a digital designer from Boston who cares about ')
    .pause(2000)
    .type('<span>people</span>.')
    .pause(1100)
    .delete(7)
    .pause(300)
    .type('<span>process</span>.')
    .pause(1100)
    .delete(8)
    .pause(300)
    .type('<span>iteration</span>.')
    .pause(1100)
    .delete(10)
    .pause(300)
    .type('<span>collaboration</span>.')
    .pause(1100)
    .delete(14)
    .pause(300)
    .type('<span>craft</span>.')
    .pause(1100)
    .delete(6)
    .pause(300)
    .type('<span>creativity</span>.')
    .pause(1100)
    .delete(11)
    .pause(300)
    .type('<span>transparency</span>.')
    .pause(1100)
    .delete(13)
    .pause(300)
    .type('<span>technology</span>.')
    .pause(1100)
    .delete(11)
    .pause(300)
    .type('<span>bike rides</span>.')
    .pause(1100)
    .delete(11)
    .pause(300)
    .type('<span>early mornings</span>.')
    .pause(1100)
    .delete(15)
    .pause(300)
    .type('<span>strong coffee</span>.')
    .pause(1100)
    .delete(14)
    .pause(300)
    .type('<span>Cinnamon Toast Crunch</span>.')
    ;


    // Slide out preview images on link hover
    $('#work-links .compile-link a').hover(function(){
        $('.comp-img').addClass('slide-left');
    },
    function(){
        $('.comp-img').removeClass('slide-left');
    });
    //
    $('#work-links .bevspot-link a').hover(function(){
        $('.bev-img').addClass('slide-left');
    },
    function(){
        $('.bev-img').removeClass('slide-left');
    });
    //
    $('#work-links .lasso-link a').hover(function(){
        $('.las-img').addClass('slide-left');
    },
    function(){
        $('.las-img').removeClass('slide-left');
    });
    //
    $('#work-links .other-link a').hover(function(){
        $('.other-img').addClass('slide-left');
    },
    function(){
        $('.other-img').removeClass('slide-left');
    });
    //
    $('#work-links .reclaim-link a').hover(function(){
        $('.rk-img').addClass('slide-left');
    },
    function(){
        $('.rk-img').removeClass('slide-left');
    });


    // Universal smooth scrolling – Based on Chris Coyier's snippet
    // https://css-tricks.com/snippets/jquery/smooth-scrolling/
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
        ){
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top
        }, 700, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
            });
        }
        }
    });




});
