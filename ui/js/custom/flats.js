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
        mebli1 = $('#mebli1'),
        mebli2 = $('#mebli2'),
        flatTitle = $('.flat-title');

    // zoom variables
    var zoomPlan = $('.zoom-plan'),
        zoomPlanImage = $('.zoom-plan-image'),
        zoomTitle = $('.zoom-title');

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

    // set title

            switch (flat) {
                case 'kv1':
                case 'kv2':
                case 'kv3':
                case 'kv4':
                    flatTitle.html('2 кімнатна квартира');
                    zoomTitle.html('2 кімнатна квартира');
                    break;
                case 'kv5':
                case 'kv6':
                    flatTitle.html('1 кімнатна квартира');
                    zoomTitle.html('1 кімнатна квартира');
                    break;

            }
    // set link to flat doc
            $('#plan1').attr('href','ui/docs/'+flat+'.pdf');
            $('#plan2').attr('href','ui/docs/'+flat+'.pdf');

    // set details for zoom-panel-controls
            zoomPlan.attr('class','reveal-modal xlarge zoom-plan ' + flat);
            $('#zoom-doc').attr('href','ui/docs/'+flat+'.pdf');


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
            case 'mebli1':
            case 'mebli2':

                if (flatImage.hasClass('mebli')) {
                    flatImage.removeClass('mebli');
                    flatImage.css('background-image', 'url(ui/images/ui/flats/' + currentFlat + '.jpg)');
                    zoomPlanImage.css('background-image', 'url(ui/images/ui/flats/' + currentFlat + '.jpg)');
                    mebli1.find('p').html('Розташувати меблі');
                    mebli2.find('p').html('Розташувати меблі');
                } else {
                    flatImage.addClass('mebli');
                    flatImage.css('background-image', 'url(ui/images/ui/flats/' + currentFlat + '_m.jpg)');
                    zoomPlanImage.css('background-image', 'url(ui/images/ui/flats/' + currentFlat + '_m.jpg)');
                    mebli1.find('p').html('Забрати меблі');
                    mebli2.find('p').html('Забрати меблі');
                }


                break;
        }

    });

    $('#mebli').on('click',function(){

        if (zoomPlanImage.hasClass('mebli')) {
            zoomPlanImage.removeClass('mebli');
            zoomPlanImage.css('background-image', 'url(ui/images/ui/flats/' + currentFlat + '.jpg)');
            flatImage.css('background-image', 'url(ui/images/ui/flats/' + currentFlat + '.jpg)');
            $('#mebli').find('p').html('Розташувати меблі');
        } else {
            zoomPlanImage.addClass('mebli');
            zoomPlanImage.css('background-image', 'url(ui/images/ui/flats/' + currentFlat + '_m.jpg)');
            flatImage.css('background-image', 'url(ui/images/ui/flats/' + currentFlat + '_m.jpg)');
            $('#mebli').find('p').html('Забрати меблі');
        }

    });

});