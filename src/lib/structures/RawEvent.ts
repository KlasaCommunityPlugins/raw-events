// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Piece, PieceJSON } from 'klasa';
import { RawEventStore } from '../..';
import { RawEventOptions } from '../Client';

export interface RawEventJSON extends PieceJSON {
	event: string;
	prettyName: boolean;
	prettyNameValue: string;
}

/**
 * Base class for all Klasa Raw Events. See {@tutorial CreatingRawEvents} for more information how to use this class
 * to build custom raw events.
 * @tutorial CreatingRawEvents
 * @extends external:Piece
 */
export class RawEvent extends Piece {
	/**
	 * The event to listen for
	 * @since 0.0.1
	 * @type {string}
	 */
	readonly event: string;

	/**
	 * If the raw event should get the full packet object
	 * @since 1.1.0
	 * @type {boolean}
	 */
	readonly prettyName: boolean;

	private readonly prettyNameValue: string;

	/**
	 * @typedef {external:PieceOptions} RawEventOptions
	 * @property {string} [event=this.name] The event that should be listened to
	 * @property {boolean} [prettName=false] Whether the file use the pascal naming for the event
	 */

	/**
	 * @since 0.0.1
	 * @param {RawEventsClient} client The Klasa client
	 * @param {RawEventStore} store The Event Store
	 * @param {string[]} file The path from the pieces folder to the event file
	 * @param {string} directory The piece directory
	 * @param {RawEventOptions} [options={}] Optional Event settings
	 */
	constructor(store: RawEventStore, file: string[], directory: string, options: RawEventOptions = {}) {
		super(store, file, directory, options);

		this.event = options.event || this.name;

		this.prettyName = Boolean(options.prettyName);

		this.prettyNameValue = this.event;
	}

	/**
	 * The run method to be overwritten in actual raw event handlers
	 * @since 0.0.1
	 * @param {*} param The raw event parameters emitted
	 * @returns {void}
	 * @abstract
	 */
	run(data: object | boolean | string | number): void;
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
			prettyName: this.prettyName,
			prettyNameValue: this.prettyNameValue,
		};
	}
}
