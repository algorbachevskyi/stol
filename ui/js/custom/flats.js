$(function(){
    $('.right').fadeIn();

    var currentFlat = 'kv1';
    var currentFloor = globalFloorNumber;

    var area = $('area'),
        floorOver = $('#general-floor-over'),
        floorOverSelected = $('#general-floor-over-selected'),
        pattern1 = $('.pattern1'),
        pattern2 = $('.pattern2'),
        flatImage = $('.flat-image'),
        mebli = $('#mebli'),
        zoomPlanImage = $('.zoom-plan-image');

    var floorNumber = $('.floor-number');

    flatImage.css('background-image', 'url(ui/images/ui/flats/' + currentFlat + '.jpg)');
    flatImage.attr('id',currentFlat);
    zoomPlanImage.attr('id',currentFlat);
    floorOverSelected.addClass(currentFlat + '-hover-selected');

    $('.floor-number-text').addClass('floor' + currentFloor);
    $('#fl' + currentFloor).addClass('selected');


    area.on('mouseover',function(){
        if (this.id != currentFlat)
            floorOver.addClass(this.id + '-hover');
    });

    area.on('mouseout',function(){
        floorOver.removeClass(this.id + '-hover');
    });

    area.on('click',function(){
        var flat = this.id;

        if (flat == currentFlat) {
            return true;
        } else {
            floorOverSelected.removeClass(currentFlat + '-hover-selected');
            currentFlat = flat;

            flatImage.css('background-image', 'url(ui/images/ui/flats/' + flat + '.jpg)');
            flatImage.attr('id',flat);
            flatImage.removeClass('mebli');

            zoomPlanImage.css('background-image', 'url(ui/images/ui/flats/' + flat + '.jpg)');
            zoomPlanImage.attr('id',flat);

            pattern1.hide();
            pattern2.hide();

            flat == 'kv1' || flat == 'kv4' ?
                pattern1.fadeIn() : pattern2.fadeIn();
            floorOver.removeClass(flat + '-hover');
            floorOverSelected.addClass(flat + '-hover-selected');

//        $.ajax({
//            type: 'post',
//            url: '/main/firstAjax',
//            data: {
//                'flat' : flat
//            },
//            success: function(data){
//                console.log(data);
//            }
//        });
        }
    });

    zoomPlanImage.css('background-image', 'url(ui/images/ui/flats/' + currentFlat + '.jpg)');

    floorNumber.on('click',function(){
        $('.floor-number-text').attr('class','floor-number-text');
        floorNumber.attr('class','floor-number');
        this.className = this.className + ' selected';

        var number = this.attributes.number.value;
        currentFloor = number;

        $('.floor-number-text').addClass('floor' + number);

    });

    $('.flat-info div').on('click',function(){

        var command = this.id

        switch(command) {
            case 'mebli':

                if (flatImage.hasClass('mebli')) {
                    flatImage.removeClass('mebli');
                    flatImage.css('background-image', 'url(ui/images/ui/flats/' + currentFlat + '.jpg)');
                    zoomPlanImage.css('background-image', 'url(ui/images/ui/flats/' + currentFlat + '.jpg)');
                    mebli.html('Розташувати меблі');
                } else {
                    flatImage.addClass('mebli');
                    flatImage.css('background-image', 'url(ui/images/ui/flats/' + currentFlat + '_m.jpg)');
                    zoomPlanImage.css('background-image', 'url(ui/images/ui/flats/' + currentFlat + '_m.jpg)');
                    mebli.html('Забрати меблі');
                }


                break;
        }

    });

});