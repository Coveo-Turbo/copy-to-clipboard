import { Component, IComponentBindings, ComponentOptions } from 'coveo-search-ui';
import { lazyComponent } from '@coveops/turbo-core';

export interface ICopyToClipboardOptions {}

@lazyComponent
export class CopyToClipboard extends Component {
    static ID = 'CopyToClipboard';
    static options: ICopyToClipboardOptions = {};

    constructor(public element: HTMLElement, public options: ICopyToClipboardOptions, public bindings: IComponentBindings) {
        super(element, CopyToClipboard.ID, bindings);
        this.options = ComponentOptions.initComponentOptions(element, CopyToClipboard, options);
    }
}