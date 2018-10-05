declare module 'klasa-raw-events' {

	import {
		Client,
		Piece,
		Store,
		KlasaClientOptions,
		KlasaPieceDefaults,
		PieceOptions,
		PieceJSON
	} from 'klasa';

	class RawEventClient extends Client {
		public constructor(config: RawEventsClientOptions);
		public rawEvents: RawEventStore;

		public on(event: string, listener: Function): this;
		public on(event: 'raw', listener: (payload: DiscordRawPayload) => void): this;
	}

	export { RawEventClient as Client };

	export abstract class RawEvent extends Piece {
		public event: string;

		public run(data: DiscordRawPayload): Promise<any>;
		public toJSON(): RawEventJSON;
	}

	export class RawEventStore extends Store<string, RawEvent, typeof RawEvent> {	}

	export interface DiscordRawPayload {
		d: object;
		op: DiscordRawEventOP;
		s?: number;
		t?: DiscordRawEventT;
	}

	export type RawEventsClientSubOptions = {
		prettyEventName?: boolean
	};

	export interface RawEventsClientOptions extends KlasaClientOptions {
		pieceDefaults?: RawEventsClientPieceDefaults;
		rawEventsOptions?: RawEventsClientSubOptions;
	}

	export interface RawEventsClientPieceDefaults extends KlasaPieceDefaults {
		rawEvents?: RawEventOptions;
	}

	export interface RawEventOptions extends PieceOptions {
		event: string;
		fullPacket: boolean;
	}

	export interface RawEventJSON extends PieceJSON {
		event: string;
		fullPacket: boolean;
	}

	type DiscordRawEventT = 'READY' |
	'RESUMED' |
	'GUILD_CREATE' |
	'GUILD_DELETE' |
	'GUILD_UPDATE' |
	'GUILD_MEMBER_ADD' |
	'GUILD_MEMBER_REMOVE' |
	'GUILD_MEMBER_UPDATE' |
	'GUILD_MEMBERS_CHUNK' |
	'GUILD_ROLE_CREATE' |
	'GUILD_ROLE_DELETE' |
	'GUILD_ROLE_UPDATE' |
	'GUILD_BAN_ADD' |
	'GUILD_BAN_REMOVE' |
	'GUILD_EMOJIS_UPDATE' |
	'CHANNEL_CREATE' |
	'CHANNEL_DELETE' |
	'CHANNEL_UPDATE' |
	'CHANNEL_PINS_UPDATE' |
	'MESSAGE_CREATE' |
	'MESSAGE_DELETE' |
	'MESSAGE_UPDATE' |
	'MESSAGE_DELETE_BULK' |
	'MESSAGE_REACTION_ADD' |
	'MESSAGE_REACTION_REMOVE' |
	'MESSAGE_REACTION_REMOVE_ALL' |
	'USER_UPDATE' |
	'PRESENCE_UPDATE' |
	'VOICE_STATE_UPDATE' |
	'TYPING_START' |
	'VOICE_SERVER_UPDATE';

	type DiscordRawEventOP = 0 |
	1 |
	2 |
	3 |
	4 |
	5 |
	6 |
	7 |
	8 |
	9 |
	10 |
	11;

}
