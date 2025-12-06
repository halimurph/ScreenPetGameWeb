class Horse extends Pet {
    constructor(petLocked, x, y) {
        super("Horse", petLocked, x, y);

        this.isClick = false;
        this.numFramesUni = 8;
        this.numFrames = 4;
        this.currentFrame = 0;

        this.horseImages = new Array(this.numFrames);
        this.horseImages2 = new Array(this.numFrames);
        this.unicornImages = new Array(this.numFramesUni);
        this.unicornImages2 = new Array(this.numFramesUni);
    }

    draw(p) {
        super.draw(p);

        if (this.isClick) {
            if (p.frameCount % 10 === 0) {
                this.currentFrame = (this.currentFrame + 1) % this.numFramesUni;
            }

            if (this.movingLeft) {
                p.image(this.unicornImages[this.currentFrame], this.xLocation - 10, this.yLocation - 20);
            } else {
                p.image(this.unicornImages2[this.currentFrame], this.xLocation - 10, this.yLocation - 20);
            }

        } else {
            if (p.frameCount % 10 === 0) {
                this.currentFrame = (this.currentFrame + 1) % this.numFrames;
            }

            if (this.movingLeft) {
                p.image(this.horseImages[this.currentFrame], this.xLocation - 10, this.yLocation - 20);
            } else {
                p.image(this.horseImages2[this.currentFrame], this.xLocation - 10, this.yLocation - 20);
            }
        }

        this.drawWindMillHat(p);
        this.drawCollar(p);
        this.drawGentlemanHat(p);
        this.drawSunglass(p);
        this.drawCowboyHat(p);
        this.drawSantaHat(p);
    }

    unicorn(p) {
        this.isClick = !this.isClick;
        this.currentFrame = 0;
    }

    loadMedia(p) {
        for (let i = 0; i < this.numFrames; i++) {
            this.horseImages[i] = p.loadImage(`sprites/Horse-${i + 1}.png`);
            this.horseImages2[i] = p.loadImage(`sprites/Horse-${i + 1}flipped.png`);
        }

        for (let i = 0; i < this.numFramesUni; i++) {
            this.unicornImages[i] = p.loadImage(`sprites/Unicorn-${(i % 4) + 1}.png`);
            this.unicornImages2[i] = p.loadImage(`sprites/Unicorn-${(i % 4) + 1}flipped.png`);
        }

        for (let i = 0; i < this.numFrames; i++) {
            this.horseImages[i].resize(35, 25);
            this.horseImages2[i].resize(35, 25);
        }

        for (let i = 0; i < this.numFramesUni; i++) {
            this.unicornImages[i].resize(35, 25);
            this.unicornImages2[i].resize(35, 25);
        }

        this.windmillHatImg = p.loadImage("sprites/windmillHat.png");
        this.windmillHatImg.resize(12, 12);
        this.windmillHat2Img = p.loadImage("sprites/windmillHatflipped.png");
        this.windmillHat2Img.resize(12, 12);

        this.collarImg = p.loadImage("sprites/collar.png");
        this.collarImg.resize(10, 10);
        this.collar2Img = p.loadImage("sprites/collarflipped.png");
        this.collar2Img.resize(10, 10);

        this.gentlemanHatImg = p.loadImage("sprites/gentlemanHat.png");
        this.gentlemanHatImg.resize(10, 10);
        this.gentlemanHat2Img = p.loadImage("sprites/gentlemanHatflipped.png");
        this.gentlemanHat2Img.resize(10, 10);

        this.sunglassesImg = p.loadImage("sprites/sunglasses.png");
        this.sunglassesImg.resize(10, 10);
        this.sunglasses2Img = p.loadImage("sprites/sunglassesflipped.png");
        this.sunglasses2Img.resize(10, 10);

        this.cowboyHatImg = p.loadImage("sprites/cowboyHat.png");
        this.cowboyHatImg.resize(10, 10);
        this.cowboyHat2Img = p.loadImage("sprites/cowboyHatflipped.png");
        this.cowboyHat2Img.resize(10, 10);

        this.santaHatImg = p.loadImage("sprites/santaHat.png");
        this.santaHatImg.resize(10, 10);
        this.santaHat2Img = p.loadImage("sprites/santaHatflipped.png");
        this.santaHat2Img.resize(10, 10);
    }

    drawWindMillHat(p) {
        if (this.showWindMillHat) {
            if (this.movingLeft) {
                p.image(this.windmillHatImg, this.getXLocation() - 8, this.getYLocation() - 27);
            } else {
                p.image(this.windmillHat2Img, this.getXLocation() + 12, this.getYLocation() - 27);
            }
        }
    }

    drawCollar(p) {
        if (this.showCollar) {
            if (this.movingLeft) {
                p.image(this.collar2Img, this.getXLocation() - 4, this.getYLocation() - 14);
            } else {
                p.image(this.collarImg, this.getXLocation() + 8, this.getYLocation() - 14);
            }
        }
    }

    drawGentlemanHat(p) {
        if (this.showGentlemanHat) {
            if (this.movingLeft) {
                p.image(this.gentlemanHatImg, this.getXLocation() - 8, this.getYLocation() - 27);
            } else {
                p.image(this.gentlemanHat2Img, this.getXLocation() + 12, this.getYLocation() - 27);
            }
        }
    }

    drawSunglass(p) {
        if (this.showSunglasses) {
            if (this.movingLeft) {
                p.image(this.sunglasses2Img, this.getXLocation() - 10, this.getYLocation() - 22);
            } else {
                p.image(this.sunglassesImg, this.getXLocation() + 12, this.getYLocation() - 22);
            }
        }
    }

    drawCowboyHat(p) {
        if (this.showCowboyHat) {
            if (this.movingLeft) {
                p.image(this.cowboyHatImg, this.getXLocation() - 8, this.getYLocation() - 27);
            } else {
                p.image(this.cowboyHat2Img, this.getXLocation() + 12, this.getYLocation() - 27);
            }
        }
    }

    drawSantaHat(p) {
        if (this.showSantaHat) {
            if (this.movingLeft) {
                p.image(this.santaHat2Img, this.getXLocation() - 8, this.getYLocation() - 27);
            } else {
                p.image(this.santaHatImg, this.getXLocation() + 12, this.getYLocation() - 27);
            }
        }
    }
}
