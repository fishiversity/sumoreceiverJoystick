radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        xValue = value
    }
    if (name == "y") {
        yValue = value
    }
})
let yValue = 0
let xValue = 0
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
basic.showString("R")
basic.forever(function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, yValue + xValue)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, yValue - xValue)
})
