class Pig extends Pet {
    constructor(petLocked, x, y) {
        super("Pig", petLocked, x, y);
        
        this.isClick = false;
        this.startTime = 4;
        this.timeStart = 0;
        this.timerStarted = false;
        this.timer = this.startTime;
        this.numFrames = 4;
        this.currentFrame = 0;
        this.pigImages = new Array(this.numFrames);
        this.pigImages2 = new Array(this.numFrames);
    }

    draw(p) {
        super.draw(p);

        if (this.movingLeft) {
            if (p.frameCount % 10 === 0) {
                this.currentFrame = (this.currentFrame + 1) % this.numFrames;  // Loop back to 0 after last frame
            }
            p.image(this.pigImages[this.currentFrame], this.xLocation - 5, this.yLocation - 20);
        } else {
            if (p.frameCount % 10 === 0) {
                this.currentFrame = (this.currentFrame + 1) % this.numFrames;
            }
            p.image(this.pigImages2[this.currentFrame], this.xLocation - 5, this.yLocation - 20);
        }

        // p.fill(255, 0, 0);
        // p.textSize(20);
        // p.text("Pig", this.xLocation, this.yLocation);

        if (this.isClick === true) { // add a timer for 5secs
            if (this.timerStarted) {

                let current = Math.floor((p.millis() - this.timeStart) / 1000);
                this.timer = this.startTime - current;

                p.frameRate(150);

                this.xTarget = p.mouseX;
                this.yTarget = p.mouseY;
            }
        }
        if (this.timer === 0) {
            this.timerStarted = false;
            p.frameRate(60);
        }
        this.windMillHat(p);
        this.collar(p);
        this.gentlemanHat(p);
        this.sunglass(p);
        this.cowboyHat(p);
        this.santaHat(p);
    }

    mouseClicked(p) {
        this.timeStart = p.millis();
        this.timerStarted = true;
    }

    chaseMouse(p) {
        this.isClick = true;
    }

    loadMedia(p) {
        this.pigImages[0] = p.loadImage("ScreenPet IMG" + fileSeparator + "Pig-1.png");
        this.pigImages[1] = p.loadImage("ScreenPet IMG" + fileSeparator + "Pig-2.png");
        this.pigImages[2] = p.loadImage("ScreenPet IMG" + fileSeparator + "Pig-3.png");
        this.pigImages[3] = p.loadImage("ScreenPet IMG" + fileSeparator + "Pig-4.png");

        this.pigImages2[0] = p.loadImage("ScreenPet IMG" + fileSeparator + "Pig-1flipped.png");
        this.pigImages2[1] = p.loadImage("ScreenPet IMG" + fileSeparator + "Pig-2flipped.png");
        this.pigImages2[2] = p.loadImage("ScreenPet IMG" + fileSeparator + "Pig-3flipped.png");
        this.pigImages2[3] = p.loadImage("ScreenPet IMG" + fileSeparator + "Pig-4flipped.png");

        for (let i = 0; i < this.pigImages.length; i++) {
            this.pigImages[i].resize(30, 20);
            this.pigImages2[i].resize(30, 20);
        }

        this.windmillHat = p.loadImage("ScreenPet IMG" + fileSeparator + "windmillHat.png");
        this.windmillHat.resize(15, 15);
        this.windmillHat2 = p.loadImage("ScreenPet IMG" + fileSeparator + "windmillHatflipped.png");
        this.windmillHat2.resize(15, 15);

        this.collar = p.loadImage("ScreenPet IMG" + fileSeparator + "collar.png");
        this.collar.resize(15, 15);
        this.collar2 = p.loadImage("ScreenPet IMG" + fileSeparator + "collarflipped.png");
        this.collar2.resize(15, 15);

        this.gentlemanHat = p.loadImage("ScreenPet IMG" + fileSeparator + "gentlemanHat.png");
        this.gentlemanHat.resize(15, 15);
        this.gentlemanHat2 = p.loadImage("ScreenPet IMG" + fileSeparator + "gentlemanHatflipped.png");
        this.gentlemanHat2.resize(15, 15);

        this.sunglasses = p.loadImage("ScreenPet IMG" + fileSeparator + "sunglasses.png");
        this.sunglasses.resize(15, 15);
        this.sunglasses2 = p.loadImage("ScreenPet IMG" + fileSeparator + "sunglassesflipped.png");
        this.sunglasses2.resize(15, 15);

        this.cowboyHat = p.loadImage("ScreenPet IMG" + fileSeparator + "cowboyHat.png");
        this.cowboyHat.resize(15, 15);
        this.cowboyHat2 = p.loadImage("ScreenPet IMG" + fileSeparator + "cowboyHatflipped.png");
        this.cowboyHat2.resize(15, 15);

        this.santaHat = p.loadImage("ScreenPet IMG" + fileSeparator + "santaHat.png");
        this.santaHat.resize(15, 15);
        this.santaHat2 = p.loadImage("ScreenPet IMG" + fileSeparator + "santaHatflipped.png");
        this.santaHat2.resize(15, 15);
    }

    windMillHat(p) {
        if (this.showWindMillHat) {
            if (this.movingLeft) {
                p.image(this.windmillHat, this.getXLocation() - 5, this.getYLocation() - 30);
            } else {
                p.image(this.windmillHat2, this.getXLocation() + 10, this.getYLocation() - 30);
            }
        }
    }

    collar(p) {
        if (this.showCollar) {
            if (this.movingLeft) {
                p.image(this.collar2, this.getXLocation() - 5, this.getYLocation() - 10);
            } else {
                p.image(this.collar, this.getXLocation() + 10, this.getYLocation() - 10);
            }
        }
    }

    gentlemanHat(p) {
        if (this.showGentlemanHat) {
            if (this.movingLeft) {
                p.image(this.gentlemanHat, this.getXLocation() - 5, this.getYLocation() - 30);
            } else {
                p.image(this.gentlemanHat2, this.getXLocation() + 10, this.getYLocation() - 30);
            }
        }
    }

    sunglass(p) {
        if (this.showSunglasses) {
            if (this.movingLeft) {
                p.image(this.sunglasses2, this.getXLocation() - 5, this.getYLocation() - 20);
            } else {
                p.image(this.sunglasses, this.getXLocation() + 10, this.getYLocation() - 20);
            }
        }
    }

    cowboyHat(p) {
        if (this.showCowboyHat) {
            if (this.movingLeft) {
                p.image(this.cowboyHat, this.getXLocation() - 5, this.getYLocation() - 30);
            } else {
                p.image(this.cowboyHat2, this.getXLocation() + 10, this.getYLocation() - 30);
            }
        }
    }

    santaHat(p) {
        if (this.showSantaHat) {
            if (this.movingLeft) {
                p.image(this.santaHat2, this.getXLocation() - 5, this.getYLocation() - 30);
            } else {
                p.image(this.santaHat, this.getXLocation() + 10, this.getYLocation() - 30);
            }
        }
    }
}
