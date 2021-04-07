import { expect } from 'chai';
import { ItemFactory } from '../app/ItemFactory';
import { Item } from '../app/Item';
import { ITEM_BACKSTAGE_PASS } from '../app/Constants';

describe(`Test - ${ITEM_BACKSTAGE_PASS}`, function () {
    it('should increase quality at end of each day', function () {
        const item = ItemFactory(new Item(ITEM_BACKSTAGE_PASS, 20, 25));
        item.update();
        expect(item.sellIn).to.equal(19);
        expect(item.quality).to.equal(26);
    });
    it('should increase quality by 2 if sellIn value is less than or equal to 10', function () {
        const item = ItemFactory(new Item(ITEM_BACKSTAGE_PASS, 10, 10));
        item.update();
        expect(item.sellIn).to.equal(9);
        expect(item.quality).to.equal(12);
    });
    it('should increase quality by 3 if sellIn value is less than or equal to 5', function () {
        const item = ItemFactory(new Item(ITEM_BACKSTAGE_PASS, 5, 10));
        item.update();
        expect(item.sellIn).to.equal(4);
        expect(item.quality).to.equal(13);
    });
    it('should never increase quality above 50', function () {
        const item = ItemFactory(new Item(ITEM_BACKSTAGE_PASS, 20, 50));
        item.update();
        expect(item.sellIn).to.equal(19);
        expect(item.quality).to.equal(50);
    });
    it('should set quality to 0 if sellIn < 0', function () {
        const item = ItemFactory(new Item(ITEM_BACKSTAGE_PASS, -5, 10));
        item.update();
        expect(item.sellIn).to.equal(-6);
        expect(item.quality).to.equal(0);
    });
});
