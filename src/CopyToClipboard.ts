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
import { iconLibrary } from './IconLibrary';

export interface ICopyToClipboardOptions {
  caption: string;
  copiedCaption: string;
  resetTimeout: number;
  field: IFieldOption;
  altTitle: string;
  icon: string;
  hasIcon: boolean;
  iconHeight: number;
  iconWidth: number;
  hasCaption: boolean;
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
    icon: ComponentOptions.buildStringOption({ defaultValue: 'clipboard' }),
    hasIcon: ComponentOptions.buildBooleanOption({ defaultValue: false }),
    hasCaption: ComponentOptions.buildBooleanOption({ defaultValue: true }),
    iconHeight: ComponentOptions.buildNumberOption({ defaultValue: 18 }),
    iconWidth: ComponentOptions.buildNumberOption({ defaultValue: 18 }),
  };

  constructor(public element: HTMLElement, public options: ICopyToClipboardOptions, public bindings: IComponentBindings, public result: IQueryResult) {
    super(element, CopyToClipboard.ID, bindings);
    this.options = ComponentOptions.initComponentOptions(element, CopyToClipboard, options);
    this.build();
  }

  protected build() {
    const { field, altTitle, caption, copiedCaption, resetTimeout, icon, hasIcon, hasCaption, iconHeight, iconWidth } = this.options;
    const fieldValue = Coveo.Utils.getFieldValue(this.result, field as string);
    let iconElement: HTMLElement;
    let captionElement: HTMLElement;

    if (!fieldValue) {
      this.logger.error(`Unable to copy URL to clipboard. No value was found for the field ${field}`);
      $$(this.element).remove();
    } else {
      $$(this.element).addClass('flex align-center');
      if (hasIcon) {
        let renderedIcon: string;
        renderedIcon = iconLibrary.has(icon) ? iconLibrary.get(icon) : icon;
        iconElement = $$('span', { className: 'coveo-copy-to-clipboard-icon', title: altTitle }, renderedIcon).el;
        iconElement.firstElementChild.setAttribute('height', `${iconHeight}`);
        iconElement.firstElementChild.setAttribute('width', `${iconWidth}`);
        $$(this.element).append(iconElement);
      }
      if (hasCaption) {
        captionElement = $$('span', { className: 'coveo-copy-to-clipboard-caption' }, caption).el;
        $$(this.element).append(captionElement);
      }
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