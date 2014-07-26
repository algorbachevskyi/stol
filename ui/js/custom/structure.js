
$(function(){

    $('.right').fadeIn();

    // Google maps initialize
    var officeLocation =  new google.maps.LatLng(48.923812,24.720287);
    var officeMapOptions = {
        center: officeLocation,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var officeMap = new google.maps.Map(document.getElementById("structure-map"),
        officeMapOptions);

    var markerOffice = new google.maps.Marker({
        position: officeLocation,
        title:"Офіс 'ТРАНСКОМСЕРВІС ПЛЮС'"
    });

    markerOffice.setMap(officeMap);

})
