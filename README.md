# Web-Mashup-Display-Best-Restaurants-on-a-Map

- The goal of this project was to create a web mashup that combines two web services: Google Maps and the Yelp API for Developers, using JavaScript and AJAX. 
- After centering the Google Map to a geographical area and entering some terms, such as "Indian Restaurant", the application will find the best matches (eg, the best Indian restaurants) inside the map area, it will mark their location on the map, and will display some information about these restaurants on the web page.
- For this project, I have used 
1. Yelp API for Developers v2.0 from Yelp (more specifically, the Search API)
2. Google Maps JavaScript API V3
3. Google Map Markers
- The HTML web page has 3 sections:
1. a search text area to put search terms with a button "Find"
2. a Google map of size 600x500 pixels, initially centered at (32.75, -97.13) with zoom level 16
3. a text display area
- When you write some search terms in the search text area, say "Indian buffet", it will find the 10 best restaurants in the map area that match the search terms. They may be less than 10 (including zero) sometimes.
- The map will display the location of these restaurants as map overlay markers with labels from 1 to 10.
- The text display area will display various information about these restaurants. It will be an ordered list from 1 to 10 that correspond to the best 10 matches.
- Each list item in the display area will include the following information about the restaurant: the image, the name as a clickable url to the Yelp page of this restaurant, the rating (1-5 stars), and the snippet text.
- When you search for new terms, it will clear the display area and all the map overlay markers, and will create new ones based on the new search.
