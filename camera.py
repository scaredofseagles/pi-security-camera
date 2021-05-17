from picamera import PiCamera
from time import sleep
import datetime

camera = PiCamera()

date = datetime.datetime.now()

def runCamera ():
	camera.start_preview()
	sleep(5)
	camera.capture(f'/home/pi/Desktop/Projects/pi-security-camera/public/images/{date}.jpg')
	camera.stop_preview()
