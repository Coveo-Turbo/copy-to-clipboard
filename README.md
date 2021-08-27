# CopyToClipboard

Disclaimer: This component was built by the community at large and is not an official Coveo JSUI Component. Use this component at your own risk.

The CopyToClipboard component allows the user to copy a value specified to their clipboard. It has the following parameters:

- caption: Message to display before copying 
- copiedCaption: Message to display after copying
- field: Field to copy data from
- resetTimeout: # Milliseconds before caption resets

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

5. Or for quick testing, you can add the script from unpkg

```html
<script src="https://unpkg.com/@coveops/copy-to-clipboard@latest/dist/index.min.js"></script>
```

> Disclaimer: Unpkg should be used for testing but not for production.

6. Include the component in your template as follows:

Place the component after the last tab in the `coveo-tab-section`

```html
<div class="CoveoCopyToClipboard"></div>
```

## Options

The following options can be configured:

| Option | Required | Type | Default | Notes |
| --- | --- | --- | --- | --- |
| `caption` | No | IFieldOption[ ] | `Copy` | The caption shown on the component. |
| `copiedCaption` | No | string | `Copied!` | The caption shown when you successfully copied the field. |
| `resetTimeout` | No | string | `3000` | The amount of milliseconds before the caption reverts from `copiedCaption` to `caption`. |
| `field` | No | string | `clickUri` | The field whose value will be copied to the clipboard. |
| `altTitle` | No | string | `Copy` | The alternate title displayed for accessibility purposes. |
| `icon` | No | string | `far fa-clipboard` | The icon displayed on the component. |

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
