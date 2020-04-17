// JavaScript Document
function calculatePrice(myform){

  //Get selected data  
  var elt = document.getElementById("websiteItem");
  var website = elt.options[elt.selectedIndex].value;
    
  var elt = document.getElementById("graphicsItem");
  var graphics = elt.options[elt.selectedIndex].value;
    
  var elt = document.getElementById("featuresItem");
  var features = elt.options[elt.selectedIndex].value;
	
  var elt = document.getElementById("ecommerceItem");
  var ecommerce = elt.options[elt.selectedIndex].value;
	
  var elt = document.getElementById("seoItem");
  var seo = elt.options[elt.selectedIndex].value;
	
  var elt = document.getElementById("socialItem");
  var social = elt.options[elt.selectedIndex].value;
	    
  //convert data to integers
  website = parseInt(website);
  graphics = parseInt(graphics);
  features = parseInt(features);
  ecommerce = parseInt(ecommerce);
  seo = parseInt(seo);
  social = parseInt(social);

    
  //calculate total value  
  var total = website+graphics+features+ecommerce+seo+social; 
    
  //print value to  PicExtPrice 
  document.getElementById("PicExtPrice").value=total;

}