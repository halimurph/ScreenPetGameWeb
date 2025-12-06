class Coin {
    constructor(a, xLocation, yLocation, images) {
        this.coinNumber = a;
        this.xLocation = xLocation;
        this.yLocation = yLocation;
        this.coinImages = images;
        
        this.numFramesC = 36;
        this.currentFrame = 0;
        this.animationCounter = 2;
    }

    setxLocation(xLocation) {
        this.xLocation = xLocation;
    }

    setyLocation(yLocation) {
        this.yLocation = yLocation;
    }

    getxLocation() {
        return this.xLocation;
    }

    getyLocation() {
        return this.yLocation;
    }

    setCoinNumber(coinNumber) {
        this.coinNumber = coinNumber;
    }

    getCoinNumber() {
        return this.coinNumber;
    }

    draw(p) {
        this.animationCounter++;
        if (this.animationCounter % 4 === 0) {  // adjust speed here
            this.currentFrame = (this.currentFrame + 1) % this.numFramesC;
        }

        p.image(this.coinImages[this.currentFrame], this.xLocation, this.yLocation - 10);

        // p.textSize(20);
        // p.fill(0);
        // p.text("C" + this.coinNumber, this.xLocation, this.yLocation);
    }

    /*
    loadMedia(p) {
        this.coinImages[0] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-1.png");
        this.coinImages[1] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-2.png");
        this.coinImages[2] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-3.png");
        this.coinImages[3] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-4.png");
        this.coinImages[4] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-5.png");
        this.coinImages[5] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-6.png");
        this.coinImages[6] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-7.png");
        this.coinImages[7] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-8.png");
        this.coinImages[8] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-9.png");
        this.coinImages[9] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-10.png");
        this.coinImages[10] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-11.png");
        this.coinImages[11] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-12.png");
        this.coinImages[12] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-13.png");
        this.coinImages[13] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-14.png");
        this.coinImages[14] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-15.png");
        this.coinImages[15] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-16.png");
        this.coinImages[16] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-17.png");
        this.coinImages[17] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-18.png");
        this.coinImages[18] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-19.png");
        this.coinImages[19] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-20.png");
        this.coinImages[20] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-21.png");
        this.coinImages[21] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-22.png");
        this.coinImages[22] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-23.png");
        this.coinImages[23] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-24.png");
        this.coinImages[24] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-25.png");
        this.coinImages[25] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-26.png");
        this.coinImages[26] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-27.png");
        this.coinImages[27] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-28.png");
        this.coinImages[28] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-29.png");
        this.coinImages[29] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-30.png");
        this.coinImages[30] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-31.png");
        this.coinImages[31] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-32.png");
        this.coinImages[32] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-33.png");
        this.coinImages[33] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-34.png");
        this.coinImages[34] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-35.png");
        this.coinImages[35] = p.loadImage("ScreenPet IMG" + fileSeparator + "coin-36.png");

        for (let i = 0; i < this.coinImages.length; i++) {
            this.coinImages[i].resize(10, 10);
        }
    }
    */

    toString() {
        return this.coinNumber + " " + this.xLocation + " " + this.yLocation;
    }
}
