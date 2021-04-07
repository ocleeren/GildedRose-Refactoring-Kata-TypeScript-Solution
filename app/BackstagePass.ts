import { Item } from './Item';

export class BackstagePass extends Item {
    update(): this {
        let modifier = 1;
        if (this.sellIn <= 10) {
            modifier++;
        }
        if (this.sellIn <= 5) {
            modifier++
        }
        this.increaseQuality(modifier);
        this.decreaseSellIn();
        if (this.isExpired()) {
            this.resetQuality();
        }
        return this;
    }
}