import { Item } from './Item';

export class Conjured extends Item {
    update(): Item {
        this.decreaseQuality(2);
        this.decreaseSellIn();
        return this;
    }
}