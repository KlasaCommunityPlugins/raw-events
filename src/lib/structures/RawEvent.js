const { Piece } = require('klasa');

/**
 * Base class for all Klasa Raw Events. See {@tutorial CreatingRawEvents} for more information how to use this class
 * to build custom raw events.
 * @tutorial CreatingRawEvents
 * @extends external:Piece
 */
class RawEvent extends Piece {

	/**
	 * @typedef {external:PieceOptions} RawEventOptions
	 * @property {string} [event=this.name] The event that should be listened to
	 * @property {boolean} [fullPacket=false] Whether the file should recieve the full packet
	 */

	/**
	 * @since 0.0.1
	 * @param {RawEventsClient} client The Klasa client
	 * @param {RawEventStore} store The Event Store
	 * @param {string} file The path from the pieces folder to the event file
	 * @param {boolean} core If the piece is in the core directory or not
	 * @param {RawEventOptions} [options={}] Optional Event settings
	 */
	constructor(client, store, file, core, options = {}) {
		super(client, store, file, core, options);

		/**
		 * The event to listen for
		 * @since 0.0.1
		 * @type {string}
		 */
		this.event = options.event || this.name;

		/**
		 * If the raw event should get the full packet object
		 * @since 0.0.1
		 * @type {boolean}
		 */
		this.fullPacket = options.fullPacket;
	}

	/**
	 * The run method to be overwritten in actual raw event handlers
	 * @since 0.0.1
	 * @param {*} param The raw event parameters emitted
	 * @returns {void}
	 * @abstract
	 */
	run() {
		// Defined in extension Classes
		throw new Error(`The run method has not been implemented by ${this.type}:${this.name}:${this.event}.`);
	}

	/**
	 * Defines the JSON.stringify behavior of this extendable.
	 * @returns {Object}
	 */
	toJSON() {
		return {
			...super.toJSON(),
			event: this.event,
			fullPacket: this.fullPacket
		};
	}

}

module.exports = RawEvent;
