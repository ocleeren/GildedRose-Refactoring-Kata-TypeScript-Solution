import { expect } from 'chai';
import { Item } from '../app/Item';
import { ItemFactory } from '../app/ItemFactory';
import { ITEM_DEXTERITY_VEST } from '../app/Constants';

describe(`Test - ${ITEM_DEXTERITY_VEST}`, function () {
    it('should reduce quality and sellIn value at the end of each day', function () {
        const item = ItemFactory(new Item(ITEM_DEXTERITY_VEST, 10, 10));
        item.update();
        expect(item.sellIn).to.equal(9);
        expect(item.quality).to.equal(9);
    });
    it('should reduce quality by 2 if sellIn value less than 0', function () {
        const item = ItemFactory(new Item(ITEM_DEXTERITY_VEST, 0, 10));
        item.update();
        expect(item.sellIn).to.equal(-1);
        expect(item.quality).to.equal(8);
    });
    it('should never reduce quality below 0', function () {
        const item = ItemFactory(new Item(ITEM_DEXTERITY_VEST, 10, 0));
        item.update();
        expect(item.sellIn).to.equal(9);
        expect(item.quality).to.equal(0);
    });
});
