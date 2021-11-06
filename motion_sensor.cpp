#include <iostream>
#include <wiringPi.h>

//TODO: download the above libraries

int inputPin = 3;
int pirState = LOW;
int val = 0;

int main() {
    wiringPiSetup();
    pinMode(inputPin, INPUT); // declare pir pin as input
}

while(1){
    val = digitalRead(inputPin);
    if (val == HIGH && pirState == LOW) {
        //console.log("Motion detected")
        pirState == HIGH;
    } else if (pirState == HIGH) {
        //console.log("Motion ended")
        pirState = LOW;
    }

}