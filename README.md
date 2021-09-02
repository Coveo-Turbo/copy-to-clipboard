# CopyToClipboard

Disclaimer: This component was built by the community at large and is not an official Coveo JSUI Component. Use this component at your own risk.

The CopyToClipboard component allows the user to copy a value specified to their clipboard.

## Getting Started

1. Install the component into your project

```
npm i @coveops/copy-to-clipboard
```

2. Use the Component or extend it

Typescript:

```javascript
import { CopyToClipboard, ICopyToClipboardOptions } from '@coveops/copy-to-clipboard';
```

Javascript

```javascript
const CopyToClipboard = require('@coveops/copy-to-clipboard').CopyToClipboard;
```

3. You can also expose the component alongside other components being built in your project.

```javascript
export * from '@coveops/copy-to-clipboard'
```

4. Or for quick testing, you can add the script from unpkg

```html
<script src="https://unpkg.com/@coveops/copy-to-clipboard@latest/dist/index.min.js"></script>
```

> Disclaimer: Unpkg should be used for testing but not for production.

5. Include the component in your template as follows:

```html
<div class="CoveoCopyToClipboard"></div>
```

## Options

The following options can be configured:

| Option | Required | Type | Default | Notes |
| --- | --- | --- | --- | --- |
| `hasCaption` | No | boolean | `true` | Do we show a caption on the component? |
| `caption` | No | string | `Copy` | The caption shown on the component. |
| `copiedCaption` | No | string | `Copied!` | The caption shown when you successfully copied the field. |
| `resetTimeout` | No | string | `3000` | The amount of milliseconds before the caption reverts from `copiedCaption` to `caption`. |
| `field` | No | IFieldOption | `@clickUri` | The field whose value will be copied to the clipboard. The field name must be prefixed with `@`. |
| `altTitle` | No | string | `Copy` | The alternate title displayed for accessibility purposes. |
| `hasIcon` | No | string | `false` | Do we  display an icon on the component? |
| `icon` | No | string | `clipboard` | The icon displayed on the component. The component offers a couple of icons. If none of them fit your needs, you can inject an SVG element. |
| `iconWidth` | No | number | `18` | The icon width. |
| `iconHeight` | No | string | `18` | The icon height. |

These icons are available:

| Icon | Preview |
| --- | --- |
| `clipboard` | ![data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0zMzYgNjRoLTgwYzAtMzUuMy0yOC43LTY0LTY0LTY0cy02NCAyOC43LTY0IDY0SDQ4QzIxLjUgNjQgMCA4NS41IDAgMTEydjM1MmMwIDI2LjUgMjEuNSA0OCA0OCA0OGgyODhjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWMTEyYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4ek0xOTIgNDBjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjQtMjQtMTAuNy0yNC0yNCAxMC43LTI0IDI0LTI0em0xNDQgNDE4YzAgMy4zLTIuNyA2LTYgNkg1NGMtMy4zIDAtNi0yLjctNi02VjExOGMwLTMuMyAyLjctNiA2LTZoNDJ2MzZjMCA2LjYgNS40IDEyIDEyIDEyaDE2OGM2LjYgMCAxMi01LjQgMTItMTJ2LTM2aDQyYzMuMyAwIDYgMi43IDYgNnoiPjwvcGF0aD48L3N2Zz4=](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0zMzYgNjRoLTgwYzAtMzUuMy0yOC43LTY0LTY0LTY0cy02NCAyOC43LTY0IDY0SDQ4QzIxLjUgNjQgMCA4NS41IDAgMTEydjM1MmMwIDI2LjUgMjEuNSA0OCA0OCA0OGgyODhjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWMTEyYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4ek0xOTIgNDBjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjQtMjQtMTAuNy0yNC0yNCAxMC43LTI0IDI0LTI0em0xNDQgNDE4YzAgMy4zLTIuNyA2LTYgNkg1NGMtMy4zIDAtNi0yLjctNi02VjExOGMwLTMuMyAyLjctNiA2LTZoNDJ2MzZjMCA2LjYgNS40IDEyIDEyIDEyaDE2OGM2LjYgMCAxMi01LjQgMTItMTJ2LTM2aDQyYzMuMyAwIDYgMi43IDYgNnoiPjwvcGF0aD48L3N2Zz4=) |
| `copy` |![data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBkPSJNNDMzLjk0MSA2NS45NDFsLTUxLjg4Mi01MS44ODJBNDggNDggMCAwIDAgMzQ4LjExOCAwSDE3NmMtMjYuNTEgMC00OCAyMS40OS00OCA0OHY0OEg0OGMtMjYuNTEgMC00OCAyMS40OS00OCA0OHYzMjBjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgyMjRjMjYuNTEgMCA0OC0yMS40OSA0OC00OHYtNDhoODBjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY5OS44ODJhNDggNDggMCAwIDAtMTQuMDU5LTMzLjk0MXpNMjY2IDQ2NEg1NGE2IDYgMCAwIDEtNi02VjE1MGE2IDYgMCAwIDEgNi02aDc0djIyNGMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDk2djQyYTYgNiAwIDAgMS02IDZ6bTEyOC05NkgxODJhNiA2IDAgMCAxLTYtNlY1NGE2IDYgMCAwIDEgNi02aDEwNnY4OGMwIDEzLjI1NSAxMC43NDUgMjQgMjQgMjRoODh2MjAyYTYgNiAwIDAgMS02IDZ6bTYtMjU2aC02NFY0OGg5LjYzMmMxLjU5MSAwIDMuMTE3LjYzMiA0LjI0MyAxLjc1N2w0OC4zNjggNDguMzY4YTYgNiAwIDAgMSAxLjc1NyA0LjI0M1YxMTJ6Ij48L3BhdGg+PC9zdmc+](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBkPSJNNDMzLjk0MSA2NS45NDFsLTUxLjg4Mi01MS44ODJBNDggNDggMCAwIDAgMzQ4LjExOCAwSDE3NmMtMjYuNTEgMC00OCAyMS40OS00OCA0OHY0OEg0OGMtMjYuNTEgMC00OCAyMS40OS00OCA0OHYzMjBjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgyMjRjMjYuNTEgMCA0OC0yMS40OSA0OC00OHYtNDhoODBjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY5OS44ODJhNDggNDggMCAwIDAtMTQuMDU5LTMzLjk0MXpNMjY2IDQ2NEg1NGE2IDYgMCAwIDEtNi02VjE1MGE2IDYgMCAwIDEgNi02aDc0djIyNGMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDk2djQyYTYgNiAwIDAgMS02IDZ6bTEyOC05NkgxODJhNiA2IDAgMCAxLTYtNlY1NGE2IDYgMCAwIDEgNi02aDEwNnY4OGMwIDEzLjI1NSAxMC43NDUgMjQgMjQgMjRoODh2MjAyYTYgNiAwIDAgMS02IDZ6bTYtMjU2aC02NFY0OGg5LjYzMmMxLjU5MSAwIDMuMTE3LjYzMiA0LjI0MyAxLjc1N2w0OC4zNjggNDguMzY4YTYgNiAwIDAgMSAxLjc1NyA0LjI0M1YxMTJ6Ij48L3BhdGg+PC9zdmc+) |

If none of these icons serve your purpose, you may use your own SVG icon like so:

```html
<span class="CoveoCopyToClipboard" data-field="@uri" data-caption="Copy" data-has-icon="true"
                      data-icon="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z'></path></svg>"
                      data-icon-height="20" data-icon-width="20"></span>
```

Avoid self-closing tags for maximum compatibility.

## Regarding Salesforce

If you wish to use this component in Salesforce, please use the equivalent `CoveoSalesforceCopyToClipboard` component embedded in this package.

```html
<div class="CoveoSalesforceCopyToClipboard"></div>
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
