$(document).ready(function(){
	alert("ready set shop");

	//global variables for html tags
	var lineItemFirstHtml = '<li class="list-group-item"><input type="checkbox" class="listcheckbox"><span class="itemName">';
    var lineItemSecondHtml = '</span><button id="clearItemButton"><span class="glyphicon glyphicon-remove"></span></button></li>';
    var textForListHeadingNew = 'Get the car started, time to go shopping!';
    var textForListHeadingOriginal = 'Nothing to buy...take a load off!';
    var clearListText = 'You cleared the list - better add something fast!';

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
  		restyleForEmptyList();
  	});

  //shop button - future feature
  $("#shopButton").click(function(){
  		console.log("shop button clicked");
  		alert("come back soon for new shop feature!");	 		
  	});

 //checkbox styling
  // $('.listcheckbox').click(function () {
  //   $(this).parent().toggleClass("purchased");
  // });

// //  checkbox styling
//   $(document).click(function () {
//     $(this).parent().toggleClass("purchased");
//   });

//needed to use on in order for dom to reload appropriately after 
	$('#grocerylist').on("click", '.listcheckbox', function () {
    	$(this).parent().toggleClass("purchased");
  	});


  //why doesnt this work?
  // //remove list item with button
  // $('#clearItemButton').click(function () {
  //   console.log("clear hit");
  //   $(this).closest("li").remove();
  // });

	$('#grocerylist').on("click", '#clearItemButton', function () {
	    console.log("clear hit");
	    $(this).closest("li").remove();
	   	console.log($("#grocerylist li").length + ' items in list');
	   	if ($("#grocerylist li").length == 0){
			restyleForEmptyList();
	   	}	
	});
 
  function restyleForEmptyList(){
  	  $("#myListHeading").hide();
  	  $("#itemslistedHeadingText").text(textForListHeadingOriginal);
  	  $("#listEntryBox").attr("placeholder","");

  }

  function addToGroceryList(value){
  	console.log("grocery list called with:" + value);
  	if (value.length === 0) {
  			alert("No item added - Click Ok and Enter an item in the box to add to Grocery List!");
  			$("#shopButton").focus();
  		}

	else{
  			$(lineItemFirstHtml + value + lineItemSecondHtml).appendTo("#grocerylist");
  			$("#listEntryBox").val('');
  			$("#listEntryBox").attr("placeholder","Enter another item...");
  			$("#myListHeading").show();
  		}
  };

  function clearGroceryList(){
  	console.log("clear grocery list called");
  	$("#grocerylist").empty();
  	$("#listEntryBox").val("");
  	$("#listEntryBox").attr("placeholder","You cleared the list - better add something fast!");
  	$("#listEntryBox").focus();
  	$("#myListHeading").hide();
  };
});