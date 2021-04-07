import { expect } from 'chai';
import { Item } from '../app/Item';
import { ItemFactory } from '../app/ItemFactory';
import { ITEM_SULFARAS } from '../app/Constants';

describe(`Test - ${ITEM_SULFARAS}`, function () {
    it('should never reduce sellIn for Legendary Items', function () {
        const item = ItemFactory(new Item(ITEM_SULFARAS, 10, 10));
        item.update();
        expect(item.sellIn).to.equal(10);
        expect(item.quality).to.equal(80);
    });
    it('should never reduce fixed quality of 80 for Legendary Items', function () {
        const item = ItemFactory(new Item(ITEM_SULFARAS, 10, 10));
        item.update();
        expect(item.sellIn).to.equal(10);
        expect(item.quality).to.equal(80);
    });
});
