var numBalloon = 0

function addBalloon() {
    if (numBalloon < 25) {
        
        numBalloon += 1
        console.log(numBalloon)
        var balloonText = document.getElementById("counter")
        balloonText.setAttribute("value", `You have ${numBalloon} balloons!`)
        
        
        // adding a new element a-sphere to scene
        var newBalloon = document.createElement("a-sphere")
        
        // position must be integers! use floor method.
        var posX = Math.floor(Math.random() * 7 + 5)
        var posY = Math.floor(Math.random() * 7 + 5)
        var posZ = -10
        
        var colors = ["red", "blue", "yellow", "green", "orange", "pink", "black"]
        var randomColor = colors[Math.floor(Math.random() * 7)]
        
        newBalloon.setAttribute("id", "UPballoon")
        newBalloon.setAttribute("color", randomColor)
        newBalloon.setAttribute("radius", 0.75)
        newBalloon.setAttribute("position", `${posX} ${posY} ${posZ}`)
        newBalloon.setAttribute("visible", "true")
        newBalloon.setAttribute("onclick", "removeBalloon()")
        
        document.getElementById("houseBalloons").appendChild(newBalloon)
        // the appendChild 'newBalloon' is not in QUOTES because it is not a string, but a variable!
    }
    
    else {
        // When 25 balloons have been added, append an animation that makes the entire "house-balloons" entity (containing both the house and the balloons float upwards.
        var animateUP = document.createElement("a-animation")
        
        animateUP.setAttribute("attribute", "position")
        animateUP.setAttribute("to", "6 100 -10")
        animateUP.setAttribute("dur", "100000")
        animateUP.setAttribute("easing", "ease-out")
        
        document.getElementById("houseBalloons").appendChild(animateUP)
    }
}

function removeBalloon() {
    var allBalloons = document.getElementById("houseBalloons")
    var oneBall = document.getElementById("UPballoon")
    allBalloons.removeChild(oneBall)
    
    numBalloon -= 1
    console.log(numBalloon)
    var balloonText = document.getElementById("counter")
    balloonText.setAttribute("value", `You have ${numBalloon} balloons!`)
}