
$(function(){

    $('.right').show();

    // Google maps initialize
    var officeLocation =  new google.maps.LatLng(48.907171,24.747267);
    var officeMapOptions = {
        center: officeLocation,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var officeMap = new google.maps.Map(document.getElementById("office-map"),
        officeMapOptions);

    var markerOffice = new google.maps.Marker({
        position: officeLocation,
        title:"Офіс 'ТРАНСКОМСЕРВІС ПЛЮС'"
    });

    markerOffice.setMap(officeMap);

})
