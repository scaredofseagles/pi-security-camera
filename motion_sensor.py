import RPi.GPIO as GPIO
import time
from camera import runCamera
GPIO.setmode(GPIO.BOARD)

PIR_PIN = 7
GPIO.setup(PIR_PIN, GPIO.IN)

try:
	print("Initiating PIR Sensor...")
	time.sleep(1)
	print("Ready")

	while True:
		if GPIO.input(PIR_PIN):
			print("Motion detected")
			runCamera()
		elif GPIO.input(PIR_PIN) == 0:
			print("Motion ended")
		time.sleep(1)

except KeyboardInterrupt:
	print("Quit")
	GPIO.cleanup()
