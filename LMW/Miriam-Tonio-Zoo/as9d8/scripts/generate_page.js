// Google Maps Standort speichern
// Bild speichern
// Datumsoptionen speichern
// Größe und Position der Objekte speichern

function generate_page() {

	const elem = document.getElementById("headerpic");
	console.log(elem.style["height"])
	console.log(elem.style["width"])
	console.log(elem.style["top"])
	console.log(elem.style["left"])
	
	const elem2 = document.getElementById("map");
	console.log(elem2.style["height"])
	console.log(elem2.style["width"])
	console.log(elem2.style["top"])
	console.log(elem2.style["left"])
	
	const elem3 = document.getElementById("headerpic");
	
	console.log(elem3.src)
	console.log(lat_long)
	
	//console.log(meeting_time.outerHTML)
	
	meeting_time = document.querySelector('input[name="meeting_time"]:checked').value;
	console.log(meeting_time)
	
	answer_text = "Hey " + sender_name + ", " + "\nmega cooles Bild und super Idee! Ich bin gerne dabei.\n" + 
				"Der " + meeting_time + " passt bei mir, treffen wir uns direkt vor Ort?" + 
				"\nLiebe Grüße,\n" + receiver_name
	console.log(answer_text)
}