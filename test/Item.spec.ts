import { expect } from 'chai';
import { Item } from '../app/Item';
import { ItemFactory } from '../app/ItemFactory';
import { ITEM_DEXTERITY_VEST } from '../app/Constants';

describe(`Test - ${ITEM_DEXTERITY_VEST}`, function () {
    it('update should reduce quality and sellIn value at the end of each day', function () {
        const item = ItemFactory(new Item(ITEM_DEXTERITY_VEST, 10, 10));
        item.update();
        expect(item.sellIn).to.equal(9);
        expect(item.quality).to.equal(9);
    });
    it('update should reduce quality by 2 if sellIn value less than 0', function () {
        const item = ItemFactory(new Item(ITEM_DEXTERITY_VEST, 0, 10));
        item.update();
        expect(item.sellIn).to.equal(-1);
        expect(item.quality).to.equal(8);
    });
    it('update should never reduce quality below 0', function () {
        const item = ItemFactory(new Item(ITEM_DEXTERITY_VEST, 10, 0));
        item.update();
        expect(item.sellIn).to.equal(9);
        expect(item.quality).to.equal(0);
    });
    it('should return expired for an item with -1 sellIn', function () {
        const item = ItemFactory(new Item(ITEM_DEXTERITY_VEST, -1, 0));
        expect(item.isExpired()).to.be.true;
    });
    it('decreaseQuality function should reduce quality by 1', function () {
        const item = ItemFactory(new Item(ITEM_DEXTERITY_VEST, 10, 50));
        item.decreaseQuality();
        expect(item.quality).to.equal(49);
    });
    it('decreaseQuality function should never reduce quality under 0', function () {
        const item = ItemFactory(new Item(ITEM_DEXTERITY_VEST, 0, 0));
        item.decreaseQuality();
        expect(item.quality).to.equal(0);
    });
    it('increaseQuality function should never increase quality by 1', function () {
        const item = ItemFactory(new Item(ITEM_DEXTERITY_VEST, 0, 49));
        item.increaseQuality();
        expect(item.quality).to.equal(50);
    });
    it('increaseQuality function should never increase quality above 50', function () {
        const item = ItemFactory(new Item(ITEM_DEXTERITY_VEST, 0, 50));
        item.increaseQuality();
        expect(item.quality).to.equal(50);
    });
    it('resetQuality should reset to quality to 0', function () {
        const item = ItemFactory(new Item(ITEM_DEXTERITY_VEST, 0, 50));
        item.resetQuality();
        expect(item.quality).to.equal(0);
    });
});
