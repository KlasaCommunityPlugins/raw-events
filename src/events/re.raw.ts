// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
// tslint:disable-next-line
const { Events } = require('discord.js/src/util/Constants');
import { Event, EventStore, KlasaClient } from 'klasa';

export default class extends Event {
	constructor(client: KlasaClient, store: EventStore, file: string[], directory: string) {
		super(client, store, file, directory, { enabled: true, event: 'raw' });
	}

	async run(packet: DiscordRawPayload) {
		const rawEvent = this.client.rawEvents.get(this.client.options.rawEventsOptions.prettyName
			? Events[packet.t!]
			: packet.t!);
		if (rawEvent && rawEvent.enabled) return rawEvent.run(rawEvent.fullPacket ? packet : packet.d);
		return null;
	}
}

export interface DiscordRawPayload {
	d: object | boolean | string | number;
	op: DiscordRawEventOP;
	s?: number;
	t?: DiscordRawEventT;
}

export type DiscordRawEventT = 'READY' |
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

export type DiscordRawEventOP = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
