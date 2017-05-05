function calculate() {
 //Store the name of the product into a variable
  var itemName = document.getElementById("itemName").value;
  //Store the total cost into a variable
  var itemCost = document.getElementById("itemCost").value;
  //Store the monthly saving into a variable
  var monthlySavings = document.getElementById("monthlySavings").value;
  //Compute the number of months
  //.ceil always rounds up whereas round rounds to the closest whole number
  var result = Math.ceil(itemCost/monthlySavings);
  //Display the result on the HTML page
  //.innerHTML shows on the actual page and console.log() only shows on the console and alert() is a pop-up
  //resultsdisplay is an id on the index.html and will be where the results is displayed on the actual page
  document.getElementById("resultdisplay").innerHTML ="You should save for " +result + " months to buy "+itemName;
  
  document.getElementById("resultdisplay").innerHTML ="You should save for " + result + " months to buy " + itemName;
}     