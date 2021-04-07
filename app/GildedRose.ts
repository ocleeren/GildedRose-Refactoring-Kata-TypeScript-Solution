import { Item } from './Item';

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        return this.items.map((item: Item) => {
            item = item.update();
            return item;
        });
    }
}
