bluetooth.onBluetoothConnected(function () {
    distance = 1
    basic.showIcon(IconNames.Yes)
    basic.pause(200)
})
bluetooth.onBluetoothDisconnected(function () {
    distance = 0
    basic.showIcon(IconNames.No)
    basic.pause(200)
})
let distance = 0
basic.showString("S")
basic.pause(200)
bluetooth.startUartService()
let startsending = 0
distance = 0
basic.forever(function () {
    distance = pins.analogReadPin(AnalogPin.P0)
    if (startsending == 1) {
        bluetooth.uartWriteNumber(distance)
    }
    basic.pause(100)
})
