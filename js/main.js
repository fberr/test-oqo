var result = [];
var markers = [];

$.ajax({
    type: "GET",
    url: "https://www.suzukimotos.cl/wp-json/wp/v2/concesionarios",
    dataType: "json",
    async: false,
    success: function (result, status, xhr) {
        $.each(result, function(key, value) {
            $('#lista-concesionarios').append('<div class="form-check"><input type="checkbox" id="'+value.slug+'" class="check-con form-check-input" name="'+value.slug+'" value="'+value.slug+'"><label class="form-check-label" for="'+value.slug+'">' + value.title.rendered.toLowerCase() +'</label></div>');

            markers.push({title: value["title"].rendered, slug: value.slug, lat: value["cn-map"].lat, lng: value["cn-map"].lng, icon: 'http://maps.google.com/mapfiles/ms/micons/red-dot.png' });
        });

    },
    error: function (xhr, status, error) {
        console.log(request.responseText);
    }
 });


function initMap() {
    var myLatLng = {lat: -34.854572, lng: -70.705058};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: myLatLng
    });

    for (var i = 0; i < markers.length; i++) {

        var data = markers[i];
        var myLatlng = new google.maps.LatLng(data.lat, data.lng);
       
        markers[i].marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: data.title.rendered,
            icon: data.icon
            
        });
    }
}

$(".check-con").on( 'change', function() {
    if( $(this).is(':checked') ) {
        for (var i = 0; i < markers.length; i++) {
            if($(this).val() == markers[i].slug ) {
               markers[i].marker.setIcon('http://maps.google.com/mapfiles/ms/micons/blue-dot.png');
            } 
        }
    } else {
        for (var i = 0; i < markers.length; i++) {
          	if($(this).val() == markers[i].slug ) {
            	markers[i].marker.setIcon('http://maps.google.com/mapfiles/ms/micons/red-dot.png');
            }
        }
    }
});