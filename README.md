# CopyToClipboard

Allows the user to copy a value to their clipboard.

Disclaimer: This component was built by the community at large and is not an official Coveo JSUI Component. Use this component at your own risk.

## Getting Started

1. Install the component into your project

```
npm i @coveops/copy-to-clipboard
```

2. Import fontawesome into the markup

```html
<script src="https://kit.fontawesome.com/515c3b5b58.js" crossorigin="anonymous"></script>
```

3. Use the Component or extend it

Typescript:

```javascript
import { CopyToClipboard, ICopyToClipboardOptions } from '@coveops/copy-to-clipboard';
```

Javascript

```javascript
const CopyToClipboard = require('@coveops/copy-to-clipboard').CopyToClipboard;
```

4. You can also expose the component alongside other components being built in your project.

```javascript
export * from '@coveops/copy-to-clipboard'
```

5. Include the component in your template as follows:

Place the component after the last tab in the `coveo-tab-section`

```html
<div class="CoveoCopyToClipboard"></div>
```

## Extending

Extending the component can be done as follows:

```javascript
import { CopyToClipboard, ICopyToClipboardOptions } from "@coveops/copy-to-clipboard";

export interface IExtendedCopyToClipboardOptions extends ICopyToClipboardOptions {}

export class ExtendedCopyToClipboard extends CopyToClipboard {}
```

## Contribute

1. Clone the project
2. Copy `.env.dist` to `.env` and update the COVEO_ORG_ID and COVEO_TOKEN fields in the `.env` file to use your Coveo credentials and SERVER_PORT to configure the port of the sandbox - it will use 8080 by default.
3. Build the code base: `npm run build`
4. Serve the sandbox for live development `npm run serve`