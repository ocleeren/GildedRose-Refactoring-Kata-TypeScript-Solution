import { GildedRose } from '../app/GildedRose';
import { Item } from '../app/Item';
import { ItemFactory } from '../app/ItemFactory';

const items = [
    ItemFactory(new Item("+5 Dexterity Vest", 10, 20)),
    ItemFactory(new Item("Aged Brie", 2, 0)),
    ItemFactory(new Item("Elixir of the Mongoose", 5, 7)),
    ItemFactory(new Item("Sulfuras, Hand of Ragnaros", 0, 80)),
    ItemFactory(new Item("Sulfuras, Hand of Ragnaros", -1, 80)),
    ItemFactory(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)),
    ItemFactory(new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)),
    ItemFactory(new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)),
    ItemFactory(new Item("Conjured Mana Cake", 3, 6))
];

const gildedRose = new GildedRose(items);
var days: number = 2;
for (let i = 0; i < days; i++) {
    console.log("-------- day " + i + " --------");
    console.log("name, sellIn, quality");
    items.forEach(element => {
        console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);

    });
    console.log();
    gildedRose.updateQuality();
}
