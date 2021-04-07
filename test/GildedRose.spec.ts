import { expect } from 'chai';
import { Item } from '../app/Item';
import { GildedRose } from '../app/GildedRose';
import { ItemFactory } from '../app/ItemFactory';

describe('Test - Gilded Rose Inn', () => {
    it('should properly initialize with an empty items array', () => {
        const gildedRose = new GildedRose();
        const items = gildedRose.items;
        expect(items.length).to.equal(0);
    });
    it('should properly initialize with a test item', () => {
        const gildedRose = new GildedRose([ItemFactory(new Item('foo', 0, 0))]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });
    it('should properly update all test items using updateQuality', () => {
        const gildedRose = new GildedRose([
            ItemFactory(new Item('foo', 10, 10)),
            ItemFactory(new Item('foo', 20, 20))
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(9);

        expect(items[1].sellIn).to.equal(19);
        expect(items[1].quality).to.equal(19);
    });
});
