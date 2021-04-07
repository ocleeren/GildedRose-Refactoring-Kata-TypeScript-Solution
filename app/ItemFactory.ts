import { Item } from './Item'
import { AgedBrie } from "./AgedBrie"
import { Conjured } from "./Conjured";
import { Legendary } from "./Legendary";
import { BackstagePass } from "./BackstagePass";

import { ITEM_AGED_BRIE, ITEM_BACKSTAGE_PASS, ITEM_CONJURED_MANA_CAKE, ITEM_SULFARAS } from '../app/Constants';

export const ItemFactory = (item: Item) => {
    switch (item.name) {
        case ITEM_AGED_BRIE:
            return new AgedBrie(item.name, item.sellIn, item.quality);
        case ITEM_BACKSTAGE_PASS:
            return new BackstagePass(item.name, item.sellIn, item.quality);
        case ITEM_CONJURED_MANA_CAKE:
            return new Conjured(item.name, item.sellIn, item.quality);
        case ITEM_SULFARAS:
            return new Legendary(item.name, item.sellIn);
        default:
            return new Item(item.name, item.sellIn, item.quality);
    }
}