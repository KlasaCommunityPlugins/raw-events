// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Store } from 'klasa';
import { RawEventClient } from '../Client';
import { RawEvent } from './RawEvent';

/**
 * Stores all the Raw Events that are part of the plugin
 * @extends external:Store
 */
export class RawEventStore extends Store<string, RawEvent> {

	/**
	 * Once the raw event has already ran it gets stored here.
	 * @since 1.1.0
	 * @type {Set<string>}
	 * @private
	 */
	private _onceEvents: Set<string> = new Set();

	/**
	 * @since 0.0.1
	 * @param {RawEventClient} client The Klasa client
	 */
	constructor(client: RawEventClient, coreDirectory: string) {
		super(client, 'rawEvents', RawEvent);
		this.registerCoreDirectory(coreDirectory);
	}

	/**
	 * Clears all raw events from the store and also removes listeners for them.
	 * @since 1.1.0
	 * @returns {void}
	 */
	public clear(): void {
		for (const rEvent of this.values()) this.delete(rEvent);
	}

}
