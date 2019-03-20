import { Client, KlasaClientOptions, PieceOptions, util } from 'klasa';
import { join } from 'path';
import { RawEventStore } from './structures/RawEventStore';
import { OPTIONS } from './util/CONSTANTS';

export interface RawEventOptions extends PieceOptions {
	event?: string;
	fullPacket?: boolean;
}

/**
 * The client for handling everything. See {@tutorial GettingStarted} for more information how to get started using this class.
 * @extends external:KlasaClient
 * @tutorial GettingStarted
 */
export class RawEventClient extends Client {
	/**
	 * @typedef {external:KlasaClientOptions} RawEventsClientOptions
	 * @property {RawEventsClientPieceDefaults} [pieceDefaults={}] Overrides the defaults for all pieces
	 */

	/**
	 * @typedef {external:KlasaPieceDefaults} RawEventsClientPieceDefaults
	 * @property {RawEventOptions} [rawEvents={}]
	 */

	/**
	 * Constructs the functions client.
	 * @since 0.0.1
	 * @param {RawEventsClientOptions} config The config to pass to the new client
	 */
	constructor(options?: KlasaClientOptions) {
		super(options);
		// @ts-ignore
		this.constructor[Client.plugin].call(this);
	}

	static [Client.plugin]() {
		const typedThis = this as unknown as RawEventClient;
		util.mergeDefault(OPTIONS, typedThis.options);

		const coreDirectory = join(__dirname, '..', '/');

		/**
		 * The cache where raw events are stored
		 * @since 0.0.1
		 * @type {RawEventStore}
		 * @name RawEventsClient#rawEvents
		 */
		typedThis.rawEvents = new RawEventStore(typedThis, coreDirectory);

		typedThis.registerStore(typedThis.rawEvents);

		// @ts-ignore
		typedThis.events.registerCoreDirectory(coreDirectory);
	}
}

declare module 'klasa' {
	interface KlasaClientOptions {
		rawEventsOptions: {
			prettyName: boolean;
		};
	}

	interface PieceDefaults {
		rawEvents?: RawEventOptions;
	}
}

declare module 'discord.js' {
	interface Client {
		rawEvents: RawEventStore;
	}
}
