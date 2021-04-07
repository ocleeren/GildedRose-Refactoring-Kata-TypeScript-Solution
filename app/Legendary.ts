import { Item } from './Item';

import { LEGENDARY_QUALITY } from '../app/Constants';

export class Legendary extends Item {
    constructor(name: string, sellIn: number) {
        super(name, sellIn, LEGENDARY_QUALITY);
    }

    update(): this {
        return this;
    }
}
