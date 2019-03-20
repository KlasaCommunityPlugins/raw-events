# Raw Events [![Build Status](https://dev.azure.com/vladfrangu/KlasaCommunityPlugins/_apis/build/status/Raw%20Events?branchName=master)](https://dev.azure.com/vladfrangu/KlasaCommunityPlugins/_build/latest?definitionId=5&branchName=master)

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
