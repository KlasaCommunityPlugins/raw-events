const { Store } = require('klasa');
const RawEvent = require('./RawEvent');

/**
 * Stores all the raw events that are part of Klasa-rawevents
 * @extends external:Store
 */
class RawEventStore extends Store {

	/**
	 * @since 0.0.1
	 * @param {RawEventsClient} client The Klasa client
	 */
	constructor(client) {
		super(client, 'rawEvents', RawEvent);
	}

}

module.exports = RawEventStore;
