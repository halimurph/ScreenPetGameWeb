class Cow extends Pet {
    constructor(petLocked, x, y) {
        super("Cow", petLocked, x, y);
        
        this.poops = []; // List to store the positions of poop
        this.numFrames = 4;
        this.currentFrame = 0;
        this.cowImages = new Array(this.numFrames);
        this.cowImages2 = new Array(this.numFrames);
        this.poopy = null;
    }

    draw(p) {
        super.draw(p);

        if (this.movingLeft) {
            if (p.frameCount % 10 === 0) {
                this.currentFrame = (this.currentFrame + 1) % this.numFrames;  // Loop back to 0 after last frame
            }
            p.image(this.cowImages[this.currentFrame], this.xLocation - 10, this.yLocation - 20);
        } else {
            if (p.frameCount % 10 === 0) {
                this.currentFrame = (this.currentFrame + 1) % this.numFrames;
            }
            p.image(this.cowImages2[this.currentFrame], this.xLocation - 10, this.yLocation - 20);
        }

        for (let poop of this.poops) {
            // p.fill(139, 69, 19);
            // p.noStroke();
            // p.circle(poop.x + 20, poop.y, 5); // Use the stored position for drawing
            p.image(this.poopy, poop.x + 20, poop.y);
        }
        this.windMillHat(p);
        this.collar(p);
        this.gentlemanHat(p);
        this.sunglass(p);
        this.cowboyHat(p);
        this.santaHat(p);
    }

    poops() {
        this.poops.push(p.createVector(this.xLocation, this.yLocation));
    }

    loadMedia(p) {
        this.cowImages[0] = p.loadImage("ScreenPet IMG" + fileSeparator + "Cow-1.png");
        this.cowImages[1] = p.loadImage("ScreenPet IMG" + fileSeparator + "Cow-2.png");
        this.cowImages[2] = p.loadImage("ScreenPet IMG" + fileSeparator + "Cow-3.png");
        this.cowImages[3] = p.loadImage("ScreenPet IMG" + fileSeparator + "Cow-4.png");

        this.cowImages2[0] = p.loadImage("ScreenPet IMG" + fileSeparator + "Cow-1flipped.png");
        this.cowImages2[1] = p.loadImage("ScreenPet IMG" + fileSeparator + "Cow-2flipped.png");
        this.cowImages2[2] = p.loadImage("ScreenPet IMG" + fileSeparator + "Cow-3flipped.png");
        this.cowImages2[3] = p.loadImage("ScreenPet IMG" + fileSeparator + "Cow-4flipped.png");

        this.poopy = p.loadImage("ScreenPet IMG" + fileSeparator + "poop.png");
        this.poopy.resize(10, 10);

        for (let i = 0; i < this.cowImages.length; i++) {
            this.cowImages[i].resize(30, 20);
            this.cowImages2[i].resize(30, 20);
        }

        this.windmillHat = p.loadImage("ScreenPet IMG" + fileSeparator + "windmillHat.png");
        this.windmillHat.resize(12, 12);
        this.windmillHat2 = p.loadImage("ScreenPet IMG" + fileSeparator + "windmillHatflipped.png");
        this.windmillHat2.resize(12, 12);

        this.collar = p.loadImage("ScreenPet IMG" + fileSeparator + "collar.png");
        this.collar.resize(12, 12);
        this.collar2 = p.loadImage("ScreenPet IMG" + fileSeparator + "collarflipped.png");
        this.collar2.resize(12, 12);

        this.gentlemanHat = p.loadImage("ScreenPet IMG" + fileSeparator + "gentlemanHat.png");
        this.gentlemanHat.resize(12, 12);
        this.gentlemanHat2 = p.loadImage("ScreenPet IMG" + fileSeparator + "gentlemanHatflipped.png");
        this.gentlemanHat2.resize(12, 12);

        this.sunglasses = p.loadImage("ScreenPet IMG" + fileSeparator + "sunglasses.png");
        this.sunglasses.resize(12, 12);
        this.sunglasses2 = p.loadImage("ScreenPet IMG" + fileSeparator + "sunglassesflipped.png");
        this.sunglasses2.resize(12, 12);

        this.cowboyHat = p.loadImage("ScreenPet IMG" + fileSeparator + "cowboyHat.png");
        this.cowboyHat.resize(12, 12);
        this.cowboyHat2 = p.loadImage("ScreenPet IMG" + fileSeparator + "cowboyHatflipped.png");
        this.cowboyHat2.resize(12, 12);

        this.santaHat = p.loadImage("ScreenPet IMG" + fileSeparator + "santaHat.png");
        this.santaHat.resize(12, 12);
        this.santaHat2 = p.loadImage("ScreenPet IMG" + fileSeparator + "santaHatflipped.png");
        this.santaHat2.resize(12, 12);
    }

    windMillHat(p) {
        if (this.showWindMillHat) {
            if (this.movingLeft) {
                p.image(this.windmillHat, this.getXLocation() - 7, this.getYLocation() - 25);
            } else {
                p.image(this.windmillHat2, this.getXLocation() + 7, this.getYLocation() - 25);
            }
        }
    }

    collar(p) {
        if (this.showCollar) {
            if (this.movingLeft) {
                p.image(this.collar2, this.getXLocation() - 5, this.getYLocation() - 17);
            } else {
                p.image(this.collar, this.getXLocation() + 5, this.getYLocation() - 17);
            }
        }
    }

    gentlemanHat(p) {
        if (this.showGentlemanHat) {
            if (this.movingLeft) {
                p.image(this.gentlemanHat, this.getXLocation() - 7, this.getYLocation() - 27);
            } else {
                p.image(this.gentlemanHat2, this.getXLocation() + 7, this.getYLocation() - 27);
            }
        }
    }

    sunglass(p) {
        if (this.showSunglasses) {
            if (this.movingLeft) {
                p.image(this.sunglasses2, this.getXLocation() - 10, this.getYLocation() - 20);
            } else {
                p.image(this.sunglasses, this.getXLocation() + 7, this.getYLocation() - 20);
            }
        }
    }

    cowboyHat(p) {
        if (this.showCowboyHat) {
            if (this.movingLeft) {
                p.image(this.cowboyHat, this.getXLocation() - 7, this.getYLocation() - 25);
            } else {
                p.image(this.cowboyHat2, this.getXLocation() + 7, this.getYLocation() - 25);
            }
        }
    }

    santaHat(p) {
        if (this.showSantaHat) {
            if (this.movingLeft) {
                p.image(this.santaHat2, this.getXLocation() - 7, this.getYLocation() - 27);
            } else {
                p.image(this.santaHat, this.getXLocation() + 7, this.getYLocation() - 27);
            }
        }
    }
}
