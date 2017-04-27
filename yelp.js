function initialize () {
}

function sendRequest (sw_lat, sw_long, ne_lat, ne_long) {
   var xhr = new XMLHttpRequest();
   var search_term = encodeURI(document.getElementById("search").value);
   xhr.open("GET", "proxy.php?term=" + search_term + "&bounds="+sw_lat+","+sw_long+"|"+ne_lat+","+ne_long+"&limit=10");
   xhr.setRequestHeader("Accept","application/json");
   xhr.onreadystatechange = function () {
       if (this.readyState == 4) {
          var json = JSON.parse(this.responseText);
          var str = JSON.stringify(json,undefined,2);
          document.getElementById("output").innerHTML = "<h2>Search Results</h2>";
          var i;
          var latitude;
          var longitude;
          var myLatLng;
          var label_no;
          var name;
          clearMarkers();
          if (json.businesses.length == 0){
            document.getElementById("output").innerHTML += "<p>Sorry, no matching results found.</p>";
          }
          for(i = 0; i < json.businesses.length; i++) {
            document.getElementById("output").innerHTML += "<img class='resto_img' src='" + json.businesses[i].image_url + "' />" + 
            "<p class='resto_name'><a href='" + json.businesses[i].url + "' target='_blank'>" + (i+1) + ". " + json.businesses[i].name + "</a></p>" + 
            "<img src='" + json.businesses[i].rating_img_url + "' /><p class='snippet_text'>" + json.businesses[i].snippet_text + "</p>";
            latitude = json.businesses[i].location.coordinate.latitude;
            longitude = json.businesses[i].location.coordinate.longitude;
            myLatLng = {lat: latitude, lng: longitude};
            label_no = (i+1).toString();
            name = json.businesses[i].name;
            addMarker(myLatLng, map, label_no, name);
          }
       }
   };
   xhr.send(null);
}

