import { expect } from 'chai';
import { Item } from '../app/Item';
import { ItemFactory } from '../app/ItemFactory';
import { ITEM_CONJURED_MANA_CAKE } from '../app/Constants';

describe(`Test - ${ITEM_CONJURED_MANA_CAKE}`, function () {
    it('should reduce quality twice as fast at the end of each day', function () {
        const item = ItemFactory(new Item(ITEM_CONJURED_MANA_CAKE, 10, 10));
        item.update();
        expect(item.sellIn).to.equal(9);
        expect(item.quality).to.equal(8);
    });
    it('should never reduce quality below 0', function () {
        const item = ItemFactory(new Item(ITEM_CONJURED_MANA_CAKE, 10, 0));
        item.update();
        expect(item.sellIn).to.equal(9);
        expect(item.quality).to.equal(0);
    });
});
