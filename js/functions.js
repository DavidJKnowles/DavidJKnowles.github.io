
function provideFeedback(msg, elementClass){
	var feedback = document.getElementById('feedback');
	feedback.innerHTML = '';
	var paragraph = document.createElement('p');
	paragraph.appendChild(document.createTextNode(msg));
	paragraph.setAttribute('class', elementClass);
	feedback.appendChild(paragraph);
}

function getMinMax(){
	var min = boroughs[0].value;
	var max = boroughs[0].value;
	for(var i = 1; i < boroughs.length; i++){
		if(boroughs[i].value > max){
			max = boroughs[i].value;
		}
		else if(boroughs[i].value < min){
			min = boroughs[i].value;
		}
	}
	return {minimum: min, maximum: max};
}

function normalise(minmax, value){
	return (value - minmax.minimum)/(minmax.maximum - minmax.minimum);
}

function paintWeighed(){
	var minmax = getMinMax();
	for(var i = 0; i < boroughs.length; i++){
		var colourString = 'rgba(' + 255 + ',' + 0 + ',' + 0 + ',' + 1 * normalise(minmax, boroughs[i].value) + ')';
		paintBorough(boroughs[i].id, colourString);
	}
}

function paintBorough(boroughId, targetColour){
	var mapObj = document.getElementById('map');
	var svgContent = mapObj.contentDocument;
	var borough = svgContent.getElementById(boroughId);
	borough.style.fill = targetColour;
}

function resetBoroughs(){
	for(var i = 0; i < boroughs.length; i++){
		paintBorough(boroughs[i].id, 'black');
	}
}

function highlightMap(borough){
	resetBoroughs();
	paintBorough(borough.id, 'red');
}

function checkAnswer(){
	var num = parseInt(document.getElementById('guess').value, 10);
	if(Number.isInteger(num)){
		var boroughIndex = getSelectedBorough();
		var borough = boroughs[boroughIndex];
		if(getValueForBorough(getSelectedBorough()) === num){
			var msg = 'Correct - ' + borough.value + '  per cent of children are living in poverty in the borough of ' + borough.title + '.';
			provideFeedback(msg, 'success');
		}else{
			provideFeedback('Incorrect - ' + borough.value + ' children are living in poverty in the borough of ' +
			borough.title + '.', 'error');
		}

		/*unhide and color the map*/
		document.getElementById('mapdiv').classList.remove('hidden');
		highlightMap(borough);
	}else{
		provideFeedback('Please input a number!', 'error');
	}
}

function getSelectedBorough(){
	var select = document.getElementById('boroughselect');
	return select.selectedIndex;
}

function getValueForBorough(bId){
	var num = boroughs[bId].value;
	return parseInt(num, 10);
}
