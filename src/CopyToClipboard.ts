import {
  Component,
  ComponentOptions,
  IComponentBindings,
  IQueryResult,
  $$,
  IAnalyticsActionCause,
  IAnalyticsDocumentViewMeta,
  IFieldOption,
  Initialization
} from 'coveo-search-ui';
import { lazyComponent } from '@coveops/turbo-core';

export interface ICopyToClipboardOptions {
  caption: string;
  copiedCaption: string;
  resetTimeout: number;
  field: IFieldOption;
  altTitle: string;
  icon: string;
}

@lazyComponent
export class CopyToClipboard extends Component {
  static ID = 'CopyToClipboard';
  static options: ICopyToClipboardOptions = {
    caption: ComponentOptions.buildStringOption({ defaultValue: 'Copy' }),
    copiedCaption: ComponentOptions.buildStringOption({ defaultValue: 'Copied!' }),
    resetTimeout: ComponentOptions.buildNumberOption({ defaultValue: 3000 }),
    field: ComponentOptions.buildFieldOption({ defaultValue: '@clickUri' }),
    altTitle: ComponentOptions.buildStringOption({ defaultValue: 'Copy' }),
    icon: ComponentOptions.buildStringOption({ defaultValue: 'far fa-clipboard' }),
  };

  constructor(public element: HTMLElement, public options: ICopyToClipboardOptions, public bindings: IComponentBindings, public result: IQueryResult) {
    super(element, CopyToClipboard.ID, bindings);
    this.options = ComponentOptions.initComponentOptions(element, CopyToClipboard, options);
    this.build();
  }

  protected build() {
    const { field, altTitle, icon, caption, copiedCaption, resetTimeout } = this.options;
    const fieldValue = Coveo.Utils.getFieldValue(this.result, field as string);

    if (!fieldValue) {
      this.logger.error(`Unable to copy URL to clipboard. No value was found for the field ${field}`);
      $$(this.element).remove();
    } else {
      const iconElement = $$('span', {}, $$('i', { className: icon, title: altTitle })).el;
      const captionElement = $$('div', { className: 'caption' }, caption).el;
      $$(this.element).addClass('flex align-center');
      $$(this.element).append(iconElement);
      $$(this.element).append(captionElement);
      $$(this.element).on('click', () => {
        captionElement.textContent = copiedCaption;
        this.copyToClipboard(fieldValue);
        this.logCustomEvent();
        setTimeout(() => {
          captionElement.textContent = caption;
        }, resetTimeout);
      });
    }
  }

  protected copyToClipboard(str: string) {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  protected logCustomEvent() {
    const actionCause: IAnalyticsActionCause = {
      name: 'copyToClipboard',
      type: 'customEventType'
    };

    const meta = {
      documentURL: this.result.clickUri,
      documentTitle: this.result.title
    } as IAnalyticsDocumentViewMeta;

    this.usageAnalytics.logClickEvent(actionCause, meta, this.result, this.element);
  }
}