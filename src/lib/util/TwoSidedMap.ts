// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Collection } from 'discord.js';

export default class TwoSidedMap<K, V> extends Collection<K, V> {

  private reversed: Collection<K, V> = new Collection();

  public constructor(iterable?: ReadonlyArray<readonly [K, V]> | null) {
    super(iterable);

    this._reverse();
  }

  public get(key: K): V | undefined {
    const order: V | undefined = super.get(key);
    const reverse: V | undefined = this.reversed.get(key);
    if (order) return order;
    if (reverse) return reverse;
    return undefined;
  }

  private _reverse(): void {
    this.reversed = new Collection(this.map((k, v) => [v, k]));
  }

}
