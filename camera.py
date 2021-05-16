from picamera import PiCamera
from time import sleep

camera = PiCamera()

camera.start_preview()
sleep(5)
camera.capture('/home/pi/Desktop/Projects/pi_camera_security/public/images/test.jpg')
camera.stop_preview()