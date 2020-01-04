//Function for changing the prices when slider is hit: 
function pricing() {

    //Basic: 
    if (document.getElementById("price").innerHTML == "19.99") {
        document.getElementById("price").innerHTML = "199.99";
    } else {
        document.getElementById("price").innerHTML = "19.99";
    }

    //Professional: 
    if (document.getElementById("price2").innerHTML == "24.99") {
        document.getElementById("price2").innerHTML = "249.99";
    } else {
        document.getElementById("price2").innerHTML = "24.99";
    }
    
    //Master: 
    if (document.getElementById("price3").innerHTML == "39.99") {
        document.getElementById("price3").innerHTML = "399.99";
    } else {
        document.getElementById("price3").innerHTML = "39.99";
    }



}

//Keyboard listener on button Enter
document.addEventListener("keypress", function(event) {
    
    if(event.key === "Enter") {
        //statement to check and uncheck the switch button: 
        if (document.getElementById("priceSwitch").checked === true) {
            document.getElementById("priceSwitch").checked = false;  
        } else {
            document.getElementById("priceSwitch").checked = true;    
        }
        //to the price change: 
        pricing();
    }
});