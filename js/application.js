$(document).ready(function(){
	alert("ready set play");

	//global variables for html tags
	var lineItemFirstHtml = '<li class="list-group-item"><input type="checkbox" class="listcheckbox"><span class="itemName">'
    var lineItemSecondHtml = '</span><button id="clearItem"><span class="glyphicon glyphicon-remove"></span></button></li>'

  	console.log(lineItemFirstHtml);
  	console.log(lineItemSecondHtml);		  

  //add item with button click
  $("#addItemButton").click(function(){
  		console.log("add item button clicked");
  		var boxValue = $("#listEntryBox").val();
  		console.log(boxValue);
  		console.log(boxValue.length);
  		addToGroceryList(boxValue);	 		
  	});

  //add item with enter if value
  $("#listEntryBox").keyup(function(event){
  		console.log(event.which);
  		if (event.which == 13) {
			var boxValue = $("#listEntryBox").val();
  			console.log(boxValue);
  			console.log(boxValue.length);
  			addToGroceryList(boxValue);
  		}		 		
  	});

  //clear all item with trash button click
  $("#clearAllButton").click(function(){
  		console.log("clear item button clicked");
  		clearGroceryList();	 		
  	});

  function addToGroceryList(value){
  	console.log("grocery list called with:" + value);
  	if (value.length === 0) {
  			alert("No item added - Click Ok and Enter an item in the box to add to Grocery List!");
  			$("#addItemButton").focus();
  		}

	else{
  			$(lineItemFirstHtml + value + lineItemSecondHtml).appendTo("#grocerylist");
  			$("#listEntryBox").val('');
  			$("#listEntryBox").attr("placeholder","Enter another item...");
  		}
  };

  function clearGroceryList(){
  	console.log("clear grocery list called");
  	$("#grocerylist").empty();
  };

  //add item with enter click

});