const { Client, util: { mergeDefault } } = require('klasa');
const path = require('path');
const { OPTIONS } = require('../lib/util/CONSTANTS');
const RawEventStore = require('../lib/structures/RawEventStore');

const coreDirectory = path.join(__dirname, '..', '/');

/**
 * The client for handling everything. See {@tutorial GettingStarted} for more information how to get started using this class.
 * @extends external:KlasaClient
 * @tutorial GettingStarted
 */
class RawEventsClient extends Client {

	/**
	 * @typedef {Object} RawEventsClientSubOptions
	 * @property {boolean} [prettyEventName=false] Whether we should find the raw event using the pretty or raw name
	 */

	/**
	 * @typedef {external:KlasaClientOptions} RawEventsClientOptions
	 * @property {RawEventsClientPieceDefaults} [pieceDefaults={}] Overrides the defaults for all pieces
	 * @property {RawEventsClientSubOptions} [rawEventsOptions={}] The options for the raw events plugin
	 */

	/**
	 * @typedef {external:KlasaPieceDefaults} RawEventsClientPieceDefaults
	 * @property {RawEventOptions} [rawEvents={}]
	 */

	/**
	 * Constructs the klasa-rawevents client
	 * @since 0.0.1
	 * @param {RawEventsClientOptions} config The config to pass to the new client
	 */
	constructor(config) {
		super(config);
		this.constructor[Client.plugin].call(this);
	}

	static [Client.plugin]() {
		mergeDefault(OPTIONS, this.options);

		/**
		 * The cache where raw events are stored
		 * @since 0.0.1
		 * @type {RawEventStore}
		 * @name RawEventsClient#rawEvents
		 */
		this.rawEvents = new RawEventStore(this);

		this
			.registerStore(this.rawEvents);

		this.events.registerCoreDirectory(coreDirectory);
		this.rawEvents.registerCoreDirectory(coreDirectory);
	}

}

module.exports = RawEventsClient;
