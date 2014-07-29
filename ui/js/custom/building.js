
$(function(){

    $('.right').show();

    for (var i=0; i<64; i++) {
        $('.building').append("<img src='ui/images/building/" + i + ".jpg' class='build-img' id='build-img" + i + "'/>");
    }

    $('#build-img0').css('z-index','-10');
    var img = 0;
    $('#to-left').on('click',function(){
        $('.build-controls').hide();
        $('.floors').css('display','none');


        var intervalID = setInterval(function(){

            $('#build-img' + img).css('z-index','-20');
            img++;

            if (img == 64) {
                img = 0;
            }

            $('#build-img' + img).css('z-index','-10');
            
            if (img === 32) {
                clearInterval(intervalID);
                $('.floor').removeClass('front').addClass('back');
                $('.floors').css('display','block');
                $('.build-controls').show();
            } else if (img === 0) {
                clearInterval(intervalID);
                $('.floor').removeClass('back').addClass('front');
                $('.floors').css('display','block');
                $('.build-controls').show();
            }
        }, 40);
    });


    $('#to-right').on('click',function(){
        $('.build-controls').hide();
        $('.floors').css('display','none');

        var intervalID = setInterval(function(){

            $('#build-img' + img).css('z-index','-20');

            if (img == 0) {
                img = 63;
            } else {
                img--;  
            }
            
            $('#build-img' + img).css('z-index','-10');

            if (img === 32) {
                clearInterval(intervalID);
                $('.floor').removeClass('front').addClass('back');
                $('.floors').css('display','block');
                $('.build-controls').show();
            } else if (img === 0) {
                clearInterval(intervalID);
                $('.floor').removeClass('back').addClass('front');
                $('.floors').css('display','block');
                $('.build-controls').show();
            }

        }, 40);
    });


    $('.floor').on('mouseover', function(){
        this.style.opacity = '0.6';
        var number = this.attributes.number.value;
        var free, sold;

        switch (number) {
            case '3':
                free = 4;
                sold = 2;
                break;
            case '4':
                free = 5;
                sold = 1;
                break;
            case '6':
                free = 4;
                sold = 2;
                break;
            case '7':
                free = 5;
                sold = 1;
                break;
            default :
                free = 6;
                sold = 0;

        }

        $('.indicators').attr('class','indicators');
        $('.indicators').addClass('floor' + number);

        $('#fl-free').html(free);
        $('#fl-sold').html(sold);

        $('#fl-num').html(number);

    });

    $('.floor').on('mouseleave', function(){
        this.style.opacity = '0';
    });

    $('.floor').on('click', function(){

        var number = this.attributes.number.value;

        if (number != '1') {
            $('#floor-number').val(number);
            $('#floor-info').submit();
        } else {
            window.location.href = window.location.origin.toString() + '/flats';
        }

    });
})
