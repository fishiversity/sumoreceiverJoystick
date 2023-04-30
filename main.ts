radio.onReceivedValue(function (name, value) {
    comment.comment("DO NOT CHANGE!")
    if (name == "x") {
        xValue = value
    }
    if (name == "y") {
        yValue = value
    }
    if (name == "A") {
        action = "A"
    }
    if (name == "B") {
        action = "B"
    }
    if (name == "AB") {
        action = "AB"
    }
    if (name == "C") {
        action = "C"
    }
    if (name == "D") {
        action = "D"
    }
    if (name == "E") {
        action = "E"
    }
    if (name == "F") {
        action = "F"
    }
})
let action = ""
let yValue = 0
let xValue = 0
comment.comment("CHANGE THE RADIO GROUP TO YOUR TEAM'S JOYSTICK NUMBER")
radio.setGroup(40)
basic.showIcon(IconNames.Yes)
basic.showString("R")
basic.forever(function () {
    if (action == "A") {
    	
    } else if (action == "B") {
    	
    } else if (action == "AB") {
    	
    } else if (action == "C") {
        wuKong.setAllMotor(-100, 100)
        basic.pause(2000)
        action = "Z"
    } else if (action == "D") {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
        action = "Z"
    } else if (action == "E") {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
        action = "Z"
    } else if (action == "F") {
        wuKong.setAllMotor(100, -100)
        basic.pause(2000)
        action = "Z"
    } else {
        comment.comment("DO NOT CHANGE!")
        wuKong.setMotorSpeed(wuKong.MotorList.M1, yValue + xValue)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, yValue - xValue)
    }
})
