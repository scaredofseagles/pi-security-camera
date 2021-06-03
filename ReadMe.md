# Pi Security Camera*
**work in progress*

## Description

Probably the worst security system using a raspberry pi with captured images hosted locally.

## Tools

#### Hardware
* Raspberry Pi 2 Model B+
* PIR Sensor
* Breadboard
* 6 jumper wires (without the breadboard, 3 will suffice)

#### Software
* Node (w/ Express.js & PM2)
* Socket.io
* Python 3
* Bash
* HTML/CSS

## Configuration

Use the following image as a guide on the GPIO pins available on the Pi 2 B+ 

![Image](https://www.bigmessowires.com/wp-content/uploads/2018/05/Raspberry-GPIO.jpg)

Same for the PIR Sensor ...

![Image](https://cdn-learn.adafruit.com/assets/assets/000/013/829/medium800/proximity_PIRbackLabeled.jpg?1390935476)

* Connect a wire from the 5V pin on the PIR to pin 2 on the Pi
* Connect a wire from the GND pin on the PIR to pin 6 on the Pi
* Connect a wire from the signal pin on the PIR to pin 7 on the Pi; this will be out __input pin__
* Connect the camera using the camera ribbon to the pi. See [here](https://projects.raspberrypi.org/en/projects/getting-started-with-picamera/2) for assembly and camera configuration.