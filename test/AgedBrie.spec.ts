import { expect } from 'chai';
import { Item } from '../app/Item';
import { ItemFactory } from '../app/ItemFactory';
import { ITEM_AGED_BRIE } from '../app/Constants';

describe(`Test - ${ITEM_AGED_BRIE}`, function () {
    it('should increase quality at the end of each day', function () {
        const item = ItemFactory(new Item(ITEM_AGED_BRIE, 10, 10));
        item.update();
        expect(item.sellIn).to.equal(9);
        expect(item.quality).to.equal(11);
    });
    it('should never increase quality above 50', function () {
        const item = ItemFactory(new Item(ITEM_AGED_BRIE, 10, 50));
        item.update();
        expect(item.sellIn).to.equal(9);
        expect(item.quality).to.equal(50);
    });
});
