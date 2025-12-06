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

        // Renamed sprite variables to avoid conflicts with draw functions
        this.windmillHatImg = null;
        this.windmillHat2Img = null;
        this.collarImg = null;
        this.collar2Img = null;
        this.gentlemanHatImg = null;
        this.gentlemanHat2Img = null;
        this.sunglassesImg = null;
        this.sunglasses2Img = null;
        this.cowboyHatImg = null;
        this.cowboyHat2Img = null;
        this.santaHatImg = null;
        this.santaHat2Img = null;
    }

    draw(p) {
        super.draw(p);

        if (this.movingLeft) {
            if (p.frameCount % 10 === 0) {
                this.currentFrame = (this.currentFrame + 1) % this.numFrames;
            }
            p.image(this.pigImages[this.currentFrame], this.xLocation - 5, this.yLocation - 20);
        } else {
            if (p.frameCount % 10 === 0) {
                this.currentFrame = (this.currentFrame + 1) % this.numFrames;
            }
            p.image(this.pigImages2[this.currentFrame], this.xLocation - 5, this.yLocation - 20);
        }

        if (this.isClick === true) {
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
        this.pigImages[0] = p.loadImage("sprites/Pig-1.png");
        this.pigImages[1] = p.loadImage("sprites/Pig-2.png");
        this.pigImages[2] = p.loadImage("sprites/Pig-3.png");
        this.pigImages[3] = p.loadImage("sprites/Pig-4.png");

        this.pigImages2[0] = p.loadImage("sprites/Pig-1flipped.png");
        this.pigImages2[1] = p.loadImage("sprites/Pig-2flipped.png");
        this.pigImages2[2] = p.loadImage("sprites/Pig-3flipped.png");
        this.pigImages2[3] = p.loadImage("sprites/Pig-4flipped.png");

        for (let i = 0; i < this.pigImages.length; i++) {
            this.pigImages[i].resize(30, 20);
            this.pigImages2[i].resize(30, 20);
        }

        this.windmillHatImg = p.loadImage("sprites/windmillHat.png");
        this.windmillHatImg.resize(15, 15);
        this.windmillHat2Img = p.loadImage("sprites/windmillHatflipped.png");
        this.windmillHat2Img.resize(15, 15);

        this.collarImg = p.loadImage("sprites/collar.png");
        this.collarImg.resize(15, 15);
        this.collar2Img = p.loadImage("sprites/collarflipped.png");
        this.collar2Img.resize(15, 15);

        this.gentlemanHatImg = p.loadImage("sprites/gentlemanHat.png");
        this.gentlemanHatImg.resize(15, 15);
        this.gentlemanHat2Img = p.loadImage("sprites/gentlemanHatflipped.png");
        this.gentlemanHat2Img.resize(15, 15);

        this.sunglassesImg = p.loadImage("sprites/sunglasses.png");
        this.sunglassesImg.resize(15, 15);
        this.sunglasses2Img = p.loadImage("sprites/sunglassesflipped.png");
        this.sunglasses2Img.resize(15, 15);

        this.cowboyHatImg = p.loadImage("sprites/cowboyHat.png");
        this.cowboyHatImg.resize(15, 15);
        this.cowboyHat2Img = p.loadImage("sprites/cowboyHatflipped.png");
        this.cowboyHat2Img.resize(15, 15);

        this.santaHatImg = p.loadImage("sprites/santaHat.png");
        this.santaHatImg.resize(15, 15);
        this.santaHat2Img = p.loadImage("sprites/santaHatflipped.png");
        this.santaHat2Img.resize(15, 15);
    }

    windMillHat(p) {
        if (this.showWindMillHat) {
            if (this.movingLeft) {
                p.image(this.windmillHatImg, this.getXLocation() - 5, this.getYLocation() - 30);
            } else {
                p.image(this.windmillHat2Img, this.getXLocation() + 10, this.getYLocation() - 30);
            }
        }
    }

    collar(p) {
        if (this.showCollar) {
            if (this.movingLeft) {
                p.image(this.collar2Img, this.getXLocation() - 5, this.getYLocation() - 10);
            } else {
                p.image(this.collarImg, this.getXLocation() + 10, this.getYLocation() - 10);
            }
        }
    }

    gentlemanHat(p) {
        if (this.showGentlemanHat) {
            if (this.movingLeft) {
                p.image(this.gentlemanHatImg, this.getXLocation() - 5, this.getYLocation() - 30);
            } else {
                p.image(this.gentlemanHat2Img, this.getXLocation() + 10, this.getYLocation() - 30);
            }
        }
    }

    sunglass(p) {
        if (this.showSunglasses) {
            if (this.movingLeft) {
                p.image(this.sunglasses2Img, this.getXLocation() - 5, this.getYLocation() - 20);
            } else {
                p.image(this.sunglassesImg, this.getXLocation() + 10, this.getYLocation() - 20);
            }
        }
    }

    cowboyHat(p) {
        if (this.showCowboyHat) {
            if (this.movingLeft) {
                p.image(this.cowboyHatImg, this.getXLocation() - 5, this.getYLocation() - 30);
            } else {
                p.image(this.cowboyHat2Img, this.getXLocation() + 10, this.getYLocation() - 30);
            }
        }
    }

    santaHat(p) {
        if (this.showSantaHat) {
            if (this.movingLeft) {
                p.image(this.santaHat2Img, this.getXLocation() - 5, this.getYLocation() - 30);
            } else {
                p.image(this.santaHatImg, this.getXLocation() + 10, this.getYLocation() - 30);
            }
        }
    }
}
