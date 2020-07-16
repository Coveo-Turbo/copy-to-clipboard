import {
    Component,
    ComponentOptions,
    IComponentBindings,
    IQueryResult,
    $$,
    IAnalyticsActionCause,
    IAnalyticsDocumentViewMeta,
    IFieldOption
} from 'coveo-search-ui';
import {find, each} from 'underscore';
import { lazyComponent } from '@coveops/turbo-core';

export interface ICopyToClipboardOptions {
  caption: string;
  copiedCaption: string;
  resetTimeout: number;
  field: IFieldOption;
}

export class CopyToClipboard extends Component {
  static ID = 'CopyToClipboard';
  static options: ICopyToClipboardOptions = {
    caption: ComponentOptions.buildStringOption({ defaultValue: 'Copy Link' }),
    copiedCaption: ComponentOptions.buildStringOption({ defaultValue: 'Copied!' }),
    resetTimeout: ComponentOptions.buildNumberOption({ defaultValue: 3000 }),
    field: ComponentOptions.buildFieldOption({ defaultValue: '@clickUri' })
  };
  constructor(
    public element: HTMLElement,
    public options: ICopyToClipboardOptions,
    public bindings: IComponentBindings,
    public result: IQueryResult
  ) {
    super(element, CopyToClipboard.ID, bindings);
    this.options = ComponentOptions.initComponentOptions(element, CopyToClipboard, options);
    this.build();
  }

  private build() {
    const fieldValue = Coveo.Utils.getFieldValue(this.result, this.options.field as string);
    if (!fieldValue) {
      this.logger.error(`Unable to copy URL to clipboard. No value was found for the field ${this.options.field}`);
      // $$(this.element).addClass('hidden');
      // Remove the element since the parent has a flex class!
      $$(this.element).remove();
    } else {
      const icon = $$('span', {}, $$('i', { className: 'fas fa-clipboard' })).el;
      const caption = $$('div', { className: 'caption' }, this.options.caption).el;
      $$(this.element).addClass('flex align-center');
      $$(this.element).append(icon);
      $$(this.element).append(caption);
      $$(this.element).on('click', () => {
        caption.textContent = this.options.copiedCaption;
        this.copyToClipboard(fieldValue);
        this.logCustomEvent();
        setTimeout(() => {
          caption.textContent = this.options.caption;
        }, this.options.resetTimeout);
      });
    }
  }

  private logCustomEvent() {
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

  private copyToClipboard(str: string) {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}

Coveo.Initialization.registerAutoCreateComponent(CopyToClipboard);
