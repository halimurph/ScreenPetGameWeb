class Item {
    constructor(itemName, price, itemLocked, x, y) {
        this.itemName = itemName;
        this.price = price;
        this.itemLocked = itemLocked;
        this.xLocation = x;
        this.yLocation = y;
        this.color = 0;
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

    setItemName(itemName) {}

    getItemName() {
        return this.itemName;
    }

    setPrice(i) {
        this.price = i;
    }

    getPrice() {
        return this.price;
    }

    setItemLocked(itemLocked) {
        this.itemLocked = itemLocked;
    }

    getItemLocked() {
        return this.itemLocked;
    }

    draw(p) {
        if (this.itemLocked) {
            p.fill(255);
            p.rect(this.xLocation, this.yLocation + 5, 200, 30);
            p.fill(0);
            p.textAlign(p.LEFT, p.CENTER);
            let statusText = this.itemName + " - $" + this.price;
            p.text(statusText, this.xLocation + 5, this.yLocation + 15); // White for locked
        } else { // Shaded for unlocked
            p.fill(200);
            p.rect(this.xLocation, this.yLocation + 5, 200, 30);
            p.fill(0);
            p.textAlign(p.LEFT, p.CENTER);
            let statusText = this.itemName;
            p.text(statusText, this.xLocation + 5, this.yLocation + 15);
        }
    }

    wasClicked(x, y) {
        let boxX = this.xLocation;
        let boxY = this.yLocation + 5;
        let boxWidth = 200;
        let boxHeight = 30;

        return x > boxX && x < boxX + boxWidth &&
               y > boxY && y < boxY + boxHeight;
    }

    toString() {
        let s = "Item: " + this.itemName + ", Price: " + this.price + (this.itemLocked ? " (Locked)" : " (Unlocked)");
        return s;
    }

    runTests() {
        console.assert(this.itemLocked === true);
        console.assert(this.price > 0);
        console.assert(this.itemName !== null);
    }
}
