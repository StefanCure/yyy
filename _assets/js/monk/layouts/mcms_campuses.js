jQuery(function($){
	
	//set campus in main.js
	
	//heading click
	$('body').on('click', '.list-view .openmarker', function(event) {
		event.preventDefault();
		if($(this).parents('article').hasClass('active')){
			$(this).parents('article').removeClass('active');
			mapClick();//function found in ajax-campuses-map.php
		}else{
			var locationID = $(this).attr('rel');
			$('.list-view article').removeClass('active');
			$(this).parents('article').addClass('active');
			markerClick(locationID);//function found in ajax-campuses-map.php
		}
	});
	
	$('body').on('submit', '#zip-search-campuses', function(event) {
		event.preventDefault();
		var zip = $('#zip-search-campuses-term', this).val().replace(/\s+/g, ' ');
		var geocoder = new google.maps.Geocoder();
		if (geocoder && zip.length > 0) {
          geocoder.geocode({ 'address': zip }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              lat = results[0].geometry.location.lat(),
              long = results[0].geometry.location.lng();
			  if(lat){
			  	var data = 'lat='+lat+'&long='+long;
			  	loadCampusesMap(data);
			  }
			  else{
				alert('Not a valid zip code.'); 
			  }
            }
			else{
				alert('Not a valid zip code.');
			}      
          });
        }else{
			loadCampusesMap('');
		}
	});
	
	//load map on page load
	if($('#campuses').length>0){
		loadCampusesMap('');
	}
	
 
});

function loadCampusesMap(data){
	$('#campuses').addClass('loading');
	var bodyData = $('body').data();
	if(bodyData){
		data += '&campus='+bodyData.campus;
	}
	$.ajax({
		url : '/_components/ajax/ajax-campuses-map.php',
		type: "GET",
		data: (data),
		success:function(results) {
			$('#campuses').html(results).removeClass('loading');
		},
		error: function(data, textStatus, jqXHR) {
			//add error messages as needed console.log(jqXHR.responseText);
		}
	});
}