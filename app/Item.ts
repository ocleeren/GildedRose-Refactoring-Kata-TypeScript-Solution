import { MIN_QUALITY, MAX_QUALITY } from './Constants';

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    isExpired(): boolean {
        return this.sellIn < 0;
    }

    increaseQuality(modifier: number = 1) {
        if (this.quality < MAX_QUALITY) {
            this.quality = this.quality + modifier;
        }
    }

    decreaseQuality(modifier: number = 1) {
        if (this.quality > MIN_QUALITY) {
            this.quality = this.quality - modifier;
        }
    }

    resetQuality() {
        this.quality = 0;
    }

    decreaseSellIn() {
        this.sellIn--;
    }
    
    update(): Item {
        this.decreaseSellIn();
        let modifier = 1;
        if (this.isExpired()) {
            modifier++;
        }
        this.decreaseQuality(modifier);
        return this;
    }
}