const { Event } = require('klasa');
const { Events } = require('discord.js/src/util/Constants');

module.exports = class extends Event {

	async run(packet) {
		const rawEvent = this.client.rawEvents.get(this.client.options.rawEventsOptions.prettyName ? Events[packet.t] : packet.t);
		if (rawEvent && rawEvent.enabled) {
			if (rawEvent.fullPacket) return rawEvent.run(packet);
			return rawEvent.run(packet.d);
		}
		return null;
	}

};
