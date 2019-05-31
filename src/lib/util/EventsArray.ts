// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
const { Events } = require('discord.js/src/util/Constants');

const events: (readonly [string, string])[] = [];

for (const [K, V] of Object.entries((Events as { [K: string]: string }))) events.push([K, V]);

export default events;
