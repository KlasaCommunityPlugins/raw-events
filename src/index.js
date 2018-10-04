const { Client: { plugin } } = require('klasa');
const CONSTANTS = require('./lib/util/CONSTANTS.js');

module.exports = {
	Client: require('./lib/Client.js'),

	constants: CONSTANTS,
	CONSTANTS: CONSTANTS,
	Constants: CONSTANTS,

	RawEvent: require('./lib/structures/RawEvent.js'),
	RawEventStore: require('./lib/structures/RawEventStore.js'),

	rawEventListener: require('./events/raw.js'),

	[plugin]: require('./lib/Client.js')[plugin]
};

/**
 * @external KlasaClient
 * @see {@link https://klasa.js.org/#/docs/klasa/master/class/KlasaClient}
 */
/**
 * @external Piece
 * @see {@link https://klasa.js.org/#/docs/klasa/master/class/Piece}
 */
/**
 * @external Store
 * @see {@link https://klasa.js.org/#/docs/klasa/master/class/Store}
 */
/**
 * @external KlasaClientOptions
 * @see {@link https://klasa.js.org/#/docs/klasa/master/typedef/KlasaClientOptions}
 */
/**
 * @external KlasaPieceDefaults
 * @see {@link https://klasa.js.org/#/docs/klasa/master/typedef/KlasaPieceDefaults}
 */
/**
 * @external PieceOptions
 * @see {@link https://klasa.js.org/#/docs/klasa/master/typedef/PieceOptions}
 */
