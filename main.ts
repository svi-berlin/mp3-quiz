basic.showIcon(IconNames.Heart)
basic.setLedColor(0x00ff00)
serialmp3.connectSerialMp3(DigitalPin.C16, DigitalPin.C17)
serialmp3.playMp3Folder(1, Mp3Repeat.No)
basic.forever(function () {
	
})
