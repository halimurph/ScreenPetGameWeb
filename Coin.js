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

        // FIXED: Added explicit width and height (15x15 pixels)
        p.image(this.coinImages[this.currentFrame], this.xLocation, this.yLocation - 10, 15, 15);

        // p.textSize(20);
        // p.fill(0);
        // p.text("C" + this.coinNumber, this.xLocation, this.yLocation);
    }

    toString() {
        return this.coinNumber + " " + this.xLocation + " " + this.yLocation;
    }
}
