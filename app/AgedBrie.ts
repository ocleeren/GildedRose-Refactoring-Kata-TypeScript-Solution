import { Item } from './Item';

export class AgedBrie extends Item {
    update(): this {
        this.increaseQuality();
        this.decreaseSellIn();
        return this;
    }
}