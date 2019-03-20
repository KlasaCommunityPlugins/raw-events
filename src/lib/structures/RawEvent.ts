// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Piece, PieceJSON } from 'klasa';
import { Client, RawEventStore } from '../..';
import { DiscordRawPayload } from '../../events/re.raw';
import { RawEventOptions } from '../Client';

export interface RawEventJSON extends PieceJSON {
	event: string;
	fullPacket: boolean;
}

/**
 * Base class for all Klasa Raw Events. See {@tutorial CreatingRawEvents} for more information how to use this class
 * to build custom raw events.
 * @tutorial CreatingRawEvents
 * @extends external:Piece
 */
export class RawEvent extends Piece {
	readonly event: string;
	readonly fullPacket: boolean;

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
	constructor(client: Client, store: RawEventStore, file: string[], directory: string, options: RawEventOptions = {}) {
		super(client, store, file, directory, options);

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
		this.fullPacket = Boolean(options.fullPacket);
	}

	/**
	 * The run method to be overwritten in actual raw event handlers
	 * @since 0.0.1
	 * @param {*} param The raw event parameters emitted
	 * @returns {void}
	 * @abstract
	 */
	run(data: DiscordRawPayload | object | boolean | string | number): void;
	run(): void {
		throw new Error(`${this.type}::${this.name}: Run method was not overwritten!`);
	}

	/**
	 * Defines the JSON.stringify behavior of this extendable.
	 * @returns {Object}
	 */
	toJSON(): RawEventJSON {
		return {
			...super.toJSON(),
			event: this.event,
			fullPacket: this.fullPacket,
		};
	}
}
