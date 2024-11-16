
let map;
let marker;

sender_name = "Tonio"
receiver_name = "Miriam" 
lat_long = [50.08008539999999, 8.7788639 ];

answer_text = "Hey " + sender_name + ",\n" + 
	"cooles Bild und super Idee, da bin ich gerne dabei!\n" + 
	"Fahren wir bei mir los?\n" + 
	"Liebe Grüße, \n" + receiver_name 

function update_header_pic(){
	img = document.getElementById("header_pic") 
	img.src = "zoo.jfif";
}



function initMap() {
	// Standardposition
	
	doc = document.getElementById("map");
	const initialPosition = { lat: lat_long[0], lng: lat_long[1] };
	console.log(doc);
	map = new google.maps.Map(document.getElementById("map"), {
		center: initialPosition,
		zoom: 11,
	});

	marker = new google.maps.Marker({
		position: initialPosition,
		map: map,
	});
}

function changeLocation() {
	
	const location = document.getElementById("location-input").value;
	const geocoder = new google.maps.Geocoder();

	geocoder.geocode({ address: location }, (results, status) => {
		if (status === "OK") {
			const newPosition = results[0].geometry.location;
			
			console.log(newPosition);
			console.log(newPosition.toString());
			lat_long = newPosition.toString()
			map.setCenter(newPosition);
			map.setZoom(12);

			marker.setPosition(newPosition);
		} else {
			alert("Geocode war nicht erfolgreich: " + status);
		}
	});
}

function openPopup() {
	document.getElementById("popup").style.display = "flex";
}

// Funktion zum Schließen des Popups
function closePopup() {
	document.getElementById("popup").style.display = "none";
}

// Funktion zum Handhaben der Submit-Button-Aktion
function submitForm() {
	update_header_pic();
	closePopup();
}


function open_image_gen_popup() {
	document.getElementById("image_gen_popup").style.display = "flex";
}

// Funktion zum Schließen des Popups
function closePopup() {
	document.getElementById("image_gen_popup").style.display = "none";
}

function set_datepicker(){
	var d1 = new Date() 
	var d2 = new Date() 
	var d3 = new Date() 
	d1.setDate(d1.getDate() + 3)
	d2.setDate(d2.getDate() + 4)
	d3.setDate(d3.getDate() + 5)
	
	document.getElementById('date1').valueAsDate = d1;
	document.getElementById('date2').valueAsDate = d2;
	document.getElementById('date3').valueAsDate = d3;
}

function set_jquery_ui(){
	$(".image-container").resizable({})
	$(".image-container").draggable({})

	// jQuery UI resizable aktivieren
	$("#map").resizable({
		resize: function(event, ui) {
			// Karte neu rendern, wenn die Größe geändert wird
			google.maps.event.trigger(map, 'resize');

		}
	});
	$("#map").draggable();
}


window.onload = initMap;

$(document).ready(function() {
	
	initMap();
	
	document.getElementById('answer_text').value = answer_text;
	
	set_jquery_ui()
	
	set_datepicker()
	

	
	
});