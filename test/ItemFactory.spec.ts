import { expect } from 'chai';
import { Item } from '../app/Item';
import { ItemFactory } from '../app/ItemFactory';

describe('Test - Item Factory', function () {
    it('should return expired for an item with -1 sellIn', function () {
        const item = ItemFactory(new Item('foo', -1, 0));
        expect(item.isExpired()).to.be.true;
    });
    it('should never reduce quality under 0', function () {
        const item = ItemFactory(new Item('foo', 0, 0));
        item.decreaseQuality();
        expect(item.quality).to.equal(0);
    });
    it('should never increase quality above 50', function () {
        const item = ItemFactory(new Item('foo', 0, 50));
        item.increaseQuality();
        expect(item.quality).to.equal(50);
    });
    it('should reset to quality to 0 using resetQuality function', function () {
        const item = ItemFactory(new Item('foo', 0, 50));
        item.resetQuality();
        expect(item.quality).to.equal(0);
    });
});
