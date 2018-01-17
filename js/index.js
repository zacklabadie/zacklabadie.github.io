$(document).ready(function() {
    new TypeIt('.type-it', {
        speed: 50,
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
    // .type('<span>problem-solving</span>.')
    // .pause(2000)
    // .delete(16)
    // .type('<span>collaboration</span>.')
    // .pause(2000)
    // .delete(14)
    // .type('<span>craft</span>.')
    // .pause(2000)
    // .delete(6)
    // .pause(2000)
    // .type('<span>creativity</span>.')
    // .pause(2000)
    // .delete(10)
    // .type('<span>ethics</span>.')
    // .pause(2000)
    // .delete(7)
    // .type('<span>authenticity</span>.')
    // .pause(2000)
    // .delete(13)
    // .type('<span>strong coffee</span>.')
    .pause(2000)
    .type('<strong>breakfast cereal</strong>.')
    .pause(950)
    .delete(17)
    .pause(800)
    .type('<span>Cinnamon Toast Crunch</span>.')
    ;


});
