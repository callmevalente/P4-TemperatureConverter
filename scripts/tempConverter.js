function tempChange(temps) {
    if (temps <= 50 && !(temps === "")) {
        document.getElementById("header").style.backgroundColor = "rgba(46, 196, 225, 0.5)"
        document.getElementById("ctof").style.backgroundColor = "rgba(46, 196, 225, 0.5)"
        document.getElementById("ftoc").style.backgroundColor = "rgba(46, 196, 225, 0.5)"
        document.getElementsByTagName("body")[0].style.backgroundImage = 'url("/images/cold-background.jpg")'
    } else if (temps > 50 && temps <= 100) {
        document.getElementById("header").style.backgroundColor = "rgba(237, 181, 42, 0.5)"
        document.getElementById("ctof").style.backgroundColor = "rgba(237, 181, 42, 0.5)"
        document.getElementById("ftoc").style.backgroundColor = "rgba(237, 181, 42, 0.5)"
        document.getElementsByTagName("body")[0].style.backgroundImage = 'url("/images/warm-background.jpg")'
    } else if (temps > 100) {
        document.getElementById("header").style.backgroundColor = "rgba(255, 0, 0, 0.5)"
        document.getElementById("ctof").style.backgroundColor = "rgba(255, 0, 0, 0.5)"
        document.getElementById("ftoc").style.backgroundColor = "rgba(255, 0, 0, 0.5)"
        document.getElementsByTagName("body")[0].style.backgroundImage = 'url("/images/hot-background.jpg")'
    } else {
        document.getElementById("header").style.backgroundColor = "rgba(156, 156, 156, 0.5)"
        document.getElementById("ctof").style.backgroundColor = "rgba(156, 156, 156, 0.5)"
        document.getElementById("ftoc").style.backgroundColor = "rgba(156, 156, 156, 0.5)"
        document.getElementsByTagName("body")[0].style.backgroundImage = 'url("/images/default-background.jpeg")'
    }
}

function errorFunc(theError) {
    if (theError === "") {
        document.getElementById("errorText").innerHTML = "Error: Enter a value to be converted."
    } else {
        document.getElementById("errorText").innerHTML = `Error: ${theError} is not a number`
    }
    document.getElementById("errorBox").style.visibility = "visible"
    let theTimer = setTimeout(() => {
        document.getElementById("errorBox").style.visibility = "hidden"
    }, 5000);
    tempChange(theError)
}

function tempConvertion(theTemp, initUnit) {
    if (!(isNaN(theTemp)) && !(theTemp == "")) {
        if (initUnit === "celsius") {
            var convertValue = (parseFloat(theTemp) * 1.8) + 32
            var resultText = $("#fahrenheit")
        } else {
            var convertValue = (parseFloat(theTemp) - 32) * 5 / 9
            var resultText = $("#celsius")
        }
        if (convertValue % 1 != 0) {
            resultText.val(convertValue.toFixed(1))
        } else {
            resultText.val(convertValue)
        }
        if (initUnit === "celsius") {
            tempChange(convertValue)
        } else {
            tempChange(theTemp)
        }
    } else {
        errorFunc(theTemp)
    }
}

$("#toF").click(function () { tempConvertion(document.getElementById("celsius").value, "celsius") })
$("#toC").click(function () { tempConvertion(document.getElementById("fahrenheit").value, "fahrenheit") })