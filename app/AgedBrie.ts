import { Item } from './Item';

export class AgedBrie extends Item {
    update(): Item {
        this.increaseQuality();
        this.decreaseSellIn();
        return this;
    }
}