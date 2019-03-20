import { Store } from 'klasa';
import { RawEventClient } from '../Client';
import { RawEvent } from './RawEvent';

/**
 * Stores all the Raw Events that are part of the plugin
 * @extends external:Store
 */
export class RawEventStore extends Store<string, RawEvent> {
	/**
	 * @since 0.0.1
	 * @param {RawEventClient} client The Klasa client
	 */
	constructor(client: RawEventClient, coreDirectory: string) {
		super(client, 'rawEvents', RawEvent);
		this.registerCoreDirectory(coreDirectory);
	}
}
