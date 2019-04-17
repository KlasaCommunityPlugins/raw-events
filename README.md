<div>
	<br/>
	<p>
	    <a href="https://www.npmjs.com/package/@kcp/raw-events"><img src="https://img.shields.io/npm/v/@kcp/raw-events.svg?maxAge=3600" alt="NPM version" /></a>
		<a href="https://www.npmjs.com/package/@kcp/raw-events"><img src="https://img.shields.io/npm/dt/@kcp/raw-events.svg?maxAge=3600" alt="NPM downloads" /></a>
		<a href="https://packagephobia.now.sh/result?p=@kcp/raw-events"><img src="https://packagephobia.now.sh/badge?p=@kcp/raw-events" alt="Install Size"></a>
        <a href="https://dev.azure.com/klasacommunityplugins/Plugins/_build/latest?definitionId=3&branchName=master"><img src="https://dev.azure.com/klasacommunityplugins/Plugins/_apis/build/status/Raw%20Events?branchName=master" alt="Build Status"></a>
	</p>
	<p>
    <a href="https://nodei.co/npm/@kcp/raw-events"><img src="https://nodei.co/npm/@kcp/raw-events.png?downloads=true&stars=true" alt="NPM info"></a>
  </p>
</div>

# Raw Events

A simple Klasa plugin which allows you to handle raw events with ease.

## How To Use

1. Install the plugin.

```bash
npm i @kcp/raw-events

# If you use yarn
yarn add @kcp/raw-events
```

1. Use `@kcp/raw-events` in your client.

```js
const { Client } = require("klasa");
Client.use(require("@kcp/raw-events"));
```

If you use TypeScript

```ts
import { Client } from 'klasa';
import { Client as RawEventsClient } from '@kcp/raw-events';

Client.use(RawEventsClient);
```

1. Create a new `raw-event` in your `rawEvents` folder.

```js
const { RawEvent } = require("klasa-raw-events");

module.exports = class extends RawEvent {
    run(data) {
        // Your Code Here
    }
}
```

1. ???... Enjoy!

## License

This project is under the [MIT](https://github.com/KlasaCommunityPlugins/raw-events/blob/master/LICENSE) license.
