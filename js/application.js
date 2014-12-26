$(document).ready(function(){
	alert("ready set shop");

	//hide items on initial page load
	$("#myListHeading").hide();


	//global variables for html tags
	var lineItemFirstHtml = '<li class="list-group-item"><input type="checkbox" class="listcheckbox"><span class="itemName">'
    var lineItemSecondHtml = '</span><button id="clearItem"><span class="glyphicon glyphicon-remove"></span></button></li>'
    var textForListHeadingNew = 'Get the car started, time to go shopping!'
    var textForListHeadingOriginal = 'Nothing to buy...take a load off!'

  	console.log(lineItemFirstHtml);
  	console.log(lineItemSecondHtml);		  

  //add item with button click
  $("#addItemButton").click(function(){
  		console.log("add item button clicked");
  		var boxValue = $("#listEntryBox").val();
  		console.log(boxValue);
  		console.log(boxValue.length);
  		addToGroceryList(boxValue);
  		$("#itemslistedHeadingText").text(textForListHeadingNew);
  	});

  //add item with enter if value
  $("#listEntryBox").keyup(function(event){
  		console.log(event.which);
  		if (event.which == 13) {
			var boxValue = $("#listEntryBox").val();
  			console.log(boxValue);
  			console.log(boxValue.length);
  			addToGroceryList(boxValue);
  			$("#itemslistedHeadingText").text(textForListHeadingNew);
  		}		 		
  	});

  //clear all item with trash button click
  $("#clearAllButton").click(function(){
  		console.log("clear item button clicked");
  		clearGroceryList();	 
  		$("#itemslistedHeadingText").text(textForListHeadingOriginal);		
  	});

  //shop button - future feature
  $("#shopButton").click(function(){
  		console.log("shop button clicked");
  		alert("come back soon for new shop feature!");	 		
  	});

  //checkbox styling
  $('.listcheckbox').click(function () {
    $(this).parent().toggleClass("purchased");
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
  	$("#listEntryBox").attr("placeholder","You cleared the list - better add something fast!");
  	$("#listEntryBox").focus();
  	$("#myListHeading").hide();
  };

  //add item with enter click

});