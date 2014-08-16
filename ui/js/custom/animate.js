$(function(){
// text animation

    $('#sliderText').textillate({
        'loop' : true,
        'minDisplayTime' : 7000,
        'in' : {
            'effect': 'fadeInLeftBig',
            'sync': true
        },
        'out' : {
            'effect': 'fadeOutRight',
            'sync': true
        }
    });

    $('#buildText').textillate({
        'loop' : true,
        'minDisplayTime' : 4000,
        'in' : {
            'effect': 'fadeInDown',
            'sync': true
        },
        'out' : {
            'effect': 'fadeOutUp',
            'sync': true
        }
    });

    $('#flatsText').textillate({
        'loop' : true,
        'minDisplayTime' : 4000,
        'in' : {
            'effect': 'fadeInDown',
            'sync': true
        },
        'out' : {
            'effect': 'fadeOutUp',
            'sync': true
        }
    });

    $('.map-text').textillate({
        'minDisplayTime' : 4000,
        'in' : {
            'effect': 'fadeInLeftBig',
            'sync': true
        }
    });

    $('.contact-text').textillate({
        'minDisplayTime' : 4000,
        'in' : {
            'effect': 'fadeInLeftBig',
            'sync': true
        }
    });

    $('.send-request-text').textillate({
        'minDisplayTime' : 4000,
        'in' : {
            'effect': 'fadeInDown',
            'sync': true
        }
    });

})
