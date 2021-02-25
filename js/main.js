$(function () {

    // Scroll animation
    $('.anchornav a[href*="#"]').click(function (e) {
        if ($(this).data('event')) {
          var data = $(this).attr('href')
          var eventName = $(this).data('event')
          document.dispatchEvent(new CustomEvent(eventName, {
            detail: {
              'navTarget': data
            },
          }));
        }
        var href = $(this).attr('href'),
          offsetTop = href === '#' ? 0 : $(href).offset().top + 1;
        $('html, body').stop().animate({
          scrollTop: offsetTop
        }, 850);
        e.preventDefault();
    });
    
    // Headline Typed Animation - Library Assist
    $(".typed").typed({
        strings: ["Hello!"],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 100,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 600,
        // loop
        loop: false,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    });    

});