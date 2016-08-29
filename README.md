# Introduction

# Programming
This is a simple site coded entirely in HTML, CSS and JavaScript. The data(otherwise known as model) that the JavaSript uses in order to check the
user's answer is defined in the file `index.html`. The model is an array of JSON objects, and each object contains the
name of the borough, a unique identifier used in order to map it to the map later on and the correct answer. 

The code(or logic) controlling the page's interactivity with the user can be found in the file `js/functions.js`. 

# External Libraries
Three open source libraries were used in the creation of the website, in order to provide interactivity and a more
uniform layout and user-experience.

1) jQuery (https://code.jquery.com/) - a dependency for bootstrap. 
2) Bootstrap (https://getbootstrap.com/) - used to provide uniform UI.
3) Bootstrap-select (https://silviomoreto.github.io/bootstrap-select/) - used to make the select menu more feature-rich
by adding a search-box filter.

# Map of London

I could not find an svg map of london so I had to create one. To create the map I used shape-files of the UK in order to
output a complete svg of the UK and then I edited the svg to remove the rest of the UK and keep only London. I needed an
SVG image as they are vector graphics which means that they are very high resolution, and also can be manipulated
through javascript on web-pages, whereas ordinary images can not in the same way. 

* the shape files were obtained from biogeo.ucdavis.edu/data/gadm2.8/shp/GBR_adm_shp.zip
* the conversion to svg was done using mapshaper (https://github.com/mbloch/mapshaper) using the command `maphaper -i
gb.shp -o format=svg gb.svg`
* editing and finalisation of the SVG image was done in a text editor and using inkscape for the transformations and
scaling.
