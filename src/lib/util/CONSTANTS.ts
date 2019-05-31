// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { KlasaClientOptions } from 'klasa';
import TwoSidedMap from './TwoSidedMap';
import Events from './EventsArray';

export const OPTIONS: KlasaClientOptions = {
	pieceDefaults: {
		rawEvents: {
			enabled: true,
			prettyName: false,
		},
	},
};

export const DjsEvents: TwoSidedMap<string, string> = new TwoSidedMap(Events);
