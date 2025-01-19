import { __decorate, __metadata } from "tslib";
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';
import * as i0 from "@angular/core";
let BqAccordion = class BqAccordion {
    /**
   * The appearance style of the Accordion
   */
    set appearance(_) { }
    ;
    /**
   * If true, the Accordion is disabled
   */
    set disabled(_) { }
    ;
    /**
   * If true, the Accordion is expanded
   */
    set expanded(_) { }
    ;
    /**
   * Animation is set through JS when the browser does not support CSS calc-size()
If true, the Accordion animation, will be disabled. No animation will be applied.
   */
    set noAnimation(_) { }
    ;
    /**
   * If true, the Accordion expand icon is rotate 180deg when expanded
   */
    set rotate(_) { }
    ;
    /**
   * The size of the Accordion
   */
    set size(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqBlur', 'bqFocus', 'bqOpen', 'bqAfterOpen', 'bqClose', 'bqAfterClose', 'bqClick']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqAccordion, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqAccordion, selector: "bq-accordion", inputs: { appearance: "appearance", disabled: "disabled", expanded: "expanded", noAnimation: "noAnimation", rotate: "rotate", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqAccordion = __decorate([
    ProxyCmp({
        inputs: ['appearance', 'disabled', 'expanded', 'noAnimation', 'rotate', 'size']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqAccordion);
export { BqAccordion };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqAccordion, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-accordion',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['appearance', 'disabled', 'expanded', 'noAnimation', 'rotate', 'size'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqAccordionGroup = class BqAccordionGroup {
    /**
   * The appearance style of accordion to be applied to all accordions
   */
    set appearance(_) { }
    ;
    /**
   * If true all accordions are expanded
   */
    set expandAll(_) { }
    ;
    /**
   * Animation is set through JS when the browser does not support CSS calc-size()
If true, the accordion animation, will be disabled. No animation will be applied.
   */
    set noAnimation(_) { }
    ;
    /**
   * If true multiple accordions can be expanded at the same time
   */
    set multiple(_) { }
    ;
    /**
   * The size of accordion to be applied to all accordions
   */
    set size(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqAccordionGroup, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqAccordionGroup, selector: "bq-accordion-group", inputs: { appearance: "appearance", expandAll: "expandAll", multiple: "multiple", noAnimation: "noAnimation", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqAccordionGroup = __decorate([
    ProxyCmp({
        inputs: ['appearance', 'expandAll', 'multiple', 'noAnimation', 'size']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqAccordionGroup);
export { BqAccordionGroup };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqAccordionGroup, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-accordion-group',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['appearance', 'expandAll', 'multiple', 'noAnimation', 'size'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqAlert = class BqAlert {
    /**
   * If true, the alert will automatically hide after the specified amount of time
   */
    set autoDismiss(_) { }
    ;
    /**
   * The corner radius of the alert component
   */
    set border(_) { }
    ;
    /**
   * If true, the close button at the top right of the alert won't be shown
   */
    set disableClose(_) { }
    ;
    /**
   * If true, the alert icon won't be shown
   */
    set hideIcon(_) { }
    ;
    /**
   * If true, the alert will be shown
   */
    set open(_) { }
    ;
    /**
   * The length of time, in milliseconds, after which the alert will close itself. Only valid if `autoDismiss="true"`
   */
    set time(_) { }
    ;
    /**
   * Type of Alert
   */
    set type(_) { }
    ;
    /**
   * If true, the alert component will remain fixed at the top of the page, occupying the full viewport
   */
    set sticky(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqHide', 'bqShow', 'bqAfterShow', 'bqAfterHide']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqAlert, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqAlert, selector: "bq-alert", inputs: { autoDismiss: "autoDismiss", border: "border", disableClose: "disableClose", hideIcon: "hideIcon", open: "open", sticky: "sticky", time: "time", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqAlert = __decorate([
    ProxyCmp({
        inputs: ['autoDismiss', 'border', 'disableClose', 'hideIcon', 'open', 'sticky', 'time', 'type'],
        methods: ['hide', 'show']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqAlert);
export { BqAlert };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqAlert, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-alert',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['autoDismiss', 'border', 'disableClose', 'hideIcon', 'open', 'sticky', 'time', 'type'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqAvatar = class BqAvatar {
    /**
   * Alternate text for the avatar image if the image cannot be displayed
   */
    set altText(_) { }
    ;
    /**
   * The image source to load on the avatar (this can be also a base64 encoded image)
   */
    set image(_) { }
    ;
    /**
   * A text to use for describing the avatar on assistive devices
   */
    set label(_) { }
    ;
    /**
   * The text to display on avatar
   */
    set initials(_) { }
    ;
    /**
   * The shape of the avatar
   */
    set shape(_) { }
    ;
    /**
   * The size of the avatar
   */
    set size(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqAvatar, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqAvatar, selector: "bq-avatar", inputs: { altText: "altText", image: "image", initials: "initials", label: "label", shape: "shape", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqAvatar = __decorate([
    ProxyCmp({
        inputs: ['altText', 'image', 'initials', 'label', 'shape', 'size']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqAvatar);
export { BqAvatar };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqAvatar, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-avatar',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['altText', 'image', 'initials', 'label', 'shape', 'size'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqBadge = class BqBadge {
    /**
   * Badge background color. The value should be a valid value of the palette color
   */
    set backgroundColor(_) { }
    ;
    /**
   * Badge number color. The value should be a valid value of the palette color
   */
    set textColor(_) { }
    ;
    /**
   * The size of the badge. Relevant if badge has no content.
   */
    set size(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqBadge, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqBadge, selector: "bq-badge", inputs: { backgroundColor: "backgroundColor", size: "size", textColor: "textColor" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqBadge = __decorate([
    ProxyCmp({
        inputs: ['backgroundColor', 'size', 'textColor']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqBadge);
export { BqBadge };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqBadge, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-badge',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['backgroundColor', 'size', 'textColor'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqBreadcrumb = class BqBreadcrumb {
    /**
   * The `aria-label` attribute to describe the type of navigation
   */
    set label(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqBreadcrumb, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqBreadcrumb, selector: "bq-breadcrumb", inputs: { label: "label" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqBreadcrumb = __decorate([
    ProxyCmp({
        inputs: ['label']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqBreadcrumb);
export { BqBreadcrumb };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqBreadcrumb, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-breadcrumb',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['label'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqBreadcrumbItem = class BqBreadcrumbItem {
    /**
   * If set, the breadcrumb item will be rendered as an `<a>` with this `href`, otherwise, a `<button>` will be rendered.
   */
    set href(_) { }
    ;
    /**
   * Where to display the link in the browser context. Relevant only if `href` is set.
   */
    set target(_) { }
    ;
    /**
   * Where to display the link in the browser context. Relevant only if `href` is set.
   */
    set rel(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqBlur', 'bqFocus', 'bqClick']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqBreadcrumbItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqBreadcrumbItem, selector: "bq-breadcrumb-item", inputs: { href: "href", rel: "rel", target: "target" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqBreadcrumbItem = __decorate([
    ProxyCmp({
        inputs: ['href', 'rel', 'target']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqBreadcrumbItem);
export { BqBreadcrumbItem };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqBreadcrumbItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-breadcrumb-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['href', 'rel', 'target'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqButton = class BqButton {
    /**
   * The appearance style to apply to the button
   */
    set appearance(_) { }
    ;
    /**
   * If `true`, it will make the button fit to its parent width.
   */
    set block(_) { }
    ;
    /**
   * The corner radius of the button
   */
    set border(_) { }
    ;
    /**
   * If true, the button will be disabled (no interaction allowed)
   */
    set disabled(_) { }
    ;
    /**
   * Tells the browser to treat the linked URL as a download. Only used when `href` is set.
Details: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download
   */
    set download(_) { }
    ;
    /**
   * When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`
   */
    set href(_) { }
    ;
    /**
   * It determinate how the content should be aligned
   */
    set justifyContent(_) { }
    ;
    /**
   * If `true` it will display the button in a loading state
   */
    set loading(_) { }
    ;
    /**
   * The size of the button
   */
    set size(_) { }
    ;
    /**
   * Where to display the linked URL, as the name for a browsing context (a `tab`, `window`, or `<iframe>`)
Details: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
   */
    set target(_) { }
    ;
    /**
   * The default behavior of the button
   */
    set type(_) { }
    ;
    /**
   * The variant of button to apply on top of the appearance (applicable only to `appearance="primary"`)
   */
    set variant(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqBlur', 'bqFocus', 'bqClick']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqButton, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqButton, selector: "bq-button", inputs: { appearance: "appearance", block: "block", border: "border", disabled: "disabled", download: "download", href: "href", justifyContent: "justifyContent", loading: "loading", size: "size", target: "target", type: "type", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqButton = __decorate([
    ProxyCmp({
        inputs: ['appearance', 'block', 'border', 'disabled', 'download', 'href', 'justifyContent', 'loading', 'size', 'target', 'type', 'variant']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqButton);
export { BqButton };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqButton, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-button',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['appearance', 'block', 'border', 'disabled', 'download', 'href', 'justifyContent', 'loading', 'size', 'target', 'type', 'variant'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqCard = class BqCard {
    /**
   * Type of card component
   */
    set type(_) { }
    ;
    /**
   * The corner radius of the card component
   */
    set border(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqCard, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqCard, selector: "bq-card", inputs: { border: "border", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqCard = __decorate([
    ProxyCmp({
        inputs: ['border', 'type']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqCard);
export { BqCard };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqCard, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-card',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['border', 'type'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqCheckbox = class BqCheckbox {
    /**
   * If true checkbox displays background on hover
   */
    set backgroundOnHover(_) { }
    ;
    /**
   * The form ID that the checkbox is associated with
   */
    set formId(_) { }
    ;
    /**
   * The native form validation message
   */
    set formValidationMessage(_) { }
    ;
    /**
   * If true checkbox is checked
   */
    set checked(_) { }
    ;
    /**
   * If true checkbox is disabled
   */
    set disabled(_) { }
    ;
    /**
   * A state that is neither checked nor unchecked
   */
    set indeterminate(_) { }
    ;
    /**
   * Name of the HTML input form control. Submitted with the form as part of a name/value pair.
   */
    set name(_) { }
    ;
    /**
   * If `true`, it will indicate that the user must specify a value for the checkbox before the owning form can be submitted
   */
    set required(_) { }
    ;
    /**
   * A string representing the value of the checkbox. Primarily used to differentiate a list of related checkboxes that have the same name.
   */
    set value(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqChange', 'bqFocus', 'bqBlur']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqCheckbox, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqCheckbox, selector: "bq-checkbox", inputs: { backgroundOnHover: "backgroundOnHover", checked: "checked", disabled: "disabled", formId: "formId", formValidationMessage: "formValidationMessage", indeterminate: "indeterminate", name: "name", required: "required", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqCheckbox = __decorate([
    ProxyCmp({
        inputs: ['backgroundOnHover', 'checked', 'disabled', 'formId', 'formValidationMessage', 'indeterminate', 'name', 'required', 'value'],
        methods: ['vClick', 'vFocus', 'vBlur']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqCheckbox);
export { BqCheckbox };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqCheckbox, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-checkbox',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['backgroundOnHover', 'checked', 'disabled', 'formId', 'formValidationMessage', 'indeterminate', 'name', 'required', 'value'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqCol = class BqCol {
    /**
   * The size of the column, expressed as a fraction of 12 (e.g., 6 for half width).
Can also be "auto" for automatic sizing.
   */
    set size(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqCol, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqCol, selector: "bq-col", inputs: { size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqCol = __decorate([
    ProxyCmp({
        inputs: ['size']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqCol);
export { BqCol };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqCol, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-col',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['size'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqDatePicker = class BqDatePicker {
    /**
   * If `true`, the Date picker input will be focused on component render
   */
    set autofocus(_) { }
    ;
    /**
   * The clear button aria label
   */
    set clearButtonLabel(_) { }
    ;
    /**
   * If `true`, the clear button won't be displayed
   */
    set disableClear(_) { }
    ;
    /**
   * Indicates whether the Date picker input is disabled or not.
If `true`, the Date picker is disabled and cannot be interacted with.
   */
    set disabled(_) { }
    ;
    /**
   * Represents the distance (gutter or margin) between the Date picker panel and the input element.
   */
    set distance(_) { }
    ;
    /**
   * The first day of the week, where Sunday is 0, Monday is 1, etc
   */
    set firstDayOfWeek(_) { }
    ;
    /**
   * The options to use when formatting the displayed value.
Details: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options
   */
    set formatOptions(_) { }
    ;
    /**
   * The ID of the form that the Date picker input belongs to.
   */
    set form(_) { }
    ;
    /**
   * The native form validation message (mandatory if `required` is set)
   */
    set formValidationMessage(_) { }
    ;
    /**
   * A function that takes a date and returns true if the date should not be selectable
   */
    set isDateDisallowed(_) { }
    ;
    /**
   * The locale for formatting dates. If not set, will use the browser's locale.
Details: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
   */
    set locale(_) { }
    ;
    /**
   * The latest date that can be selected
   */
    set max(_) { }
    ;
    /**
   * The earliest date that can be selected
   */
    set min(_) { }
    ;
    /**
   * Number of months to show when range is `true`
   */
    set months(_) { }
    ;
    /**
   * Specifies how the next/previous buttons should navigate the calendar.
- single: The buttons will navigate by a single month at a time.
- months: The buttons will navigate by the number of months displayed per view.
   */
    set monthsPerView(_) { }
    ;
    /**
   * The Date picker input name.
   */
    set name(_) { }
    ;
    /**
   * If `true`, the Date picker panel will be visible.
   */
    set open(_) { }
    ;
    /**
   * When set, it will override the height of the Date picker panel.
   */
    set panelHeight(_) { }
    ;
    /**
   * The Date picker input placeholder text value
   */
    set placeholder(_) { }
    ;
    /**
   * Position of the Date picker panel
   */
    set placement(_) { }
    ;
    /**
   * Indicates whether or not the Date picker input is required to be filled out before submitting the form.
   */
    set required(_) { }
    ;
    /**
   * Represents the skidding between the Date picker panel and the input element.
   */
    set skidding(_) { }
    ;
    /**
   * Whether to show days outside the month
   */
    set showOutsideDays(_) { }
    ;
    /**
   * Defines the strategy to position the Date picker panel
   */
    set strategy(_) { }
    ;
    /**
   * The date that is tentatively selected e.g. the start of a range selection
   */
    set tentative(_) { }
    ;
    /**
   * It defines how the calendar will behave, allowing single date selection, range selection, or multiple date selection
   */
    set type(_) { }
    ;
    /**
   * The validation status of the Select input. @remarks This property is used to indicate the validation status of the select input. It can be set to one of the following values:
- `'none'`: No validation status is set.
- `'error'`: The input has a validation error.
- `'warning'`: The input has a validation warning.
- `'success'`: The input has passed validation.
   */
    set validationStatus(_) { }
    ;
    /**
   * The select input value represents the currently selected date or range and can be used to reset the field to a previous value.
All dates are expected in ISO-8601 format (YYYY-MM-DD).
   */
    set value(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqBlur', 'bqChange', 'bqClear', 'bqFocus']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqDatePicker, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqDatePicker, selector: "bq-date-picker", inputs: { autofocus: "autofocus", clearButtonLabel: "clearButtonLabel", disableClear: "disableClear", disabled: "disabled", distance: "distance", firstDayOfWeek: "firstDayOfWeek", form: "form", formValidationMessage: "formValidationMessage", formatOptions: "formatOptions", isDateDisallowed: "isDateDisallowed", locale: "locale", max: "max", min: "min", months: "months", monthsPerView: "monthsPerView", name: "name", open: "open", panelHeight: "panelHeight", placeholder: "placeholder", placement: "placement", required: "required", showOutsideDays: "showOutsideDays", skidding: "skidding", strategy: "strategy", tentative: "tentative", type: "type", validationStatus: "validationStatus", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqDatePicker = __decorate([
    ProxyCmp({
        inputs: ['autofocus', 'clearButtonLabel', 'disableClear', 'disabled', 'distance', 'firstDayOfWeek', 'form', 'formValidationMessage', 'formatOptions', 'isDateDisallowed', 'locale', 'max', 'min', 'months', 'monthsPerView', 'name', 'open', 'panelHeight', 'placeholder', 'placement', 'required', 'showOutsideDays', 'skidding', 'strategy', 'tentative', 'type', 'validationStatus', 'value'],
        methods: ['clear']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqDatePicker);
export { BqDatePicker };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqDatePicker, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-date-picker',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['autofocus', 'clearButtonLabel', 'disableClear', 'disabled', 'distance', 'firstDayOfWeek', 'form', 'formValidationMessage', 'formatOptions', 'isDateDisallowed', 'locale', 'max', 'min', 'months', 'monthsPerView', 'name', 'open', 'panelHeight', 'placeholder', 'placement', 'required', 'showOutsideDays', 'skidding', 'strategy', 'tentative', 'type', 'validationStatus', 'value'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqDialog = class BqDialog {
    /**
   * Border radius of the dialog component
   */
    set border(_) { }
    ;
    /**
   * If true, the backdrop overlay won't be shown when the dialog opens
   */
    set disableBackdrop(_) { }
    ;
    /**
   * If true, the dialog will not close when the [Esc] key is press
   */
    set disableCloseEscKeydown(_) { }
    ;
    /**
   * If true, the dialog will not close when clicking on the backdrop overlay
   */
    set disableCloseClickOutside(_) { }
    ;
    /**
   * The appearance of footer
   */
    set footerAppearance(_) { }
    ;
    /**
   * If true, it hides the close button
   */
    set hideCloseButton(_) { }
    ;
    /**
   * If true, the dialog will be shown as open
   */
    set open(_) { }
    ;
    /**
   * The size of the dialog
   */
    set size(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqCancel', 'bqClose', 'bqOpen', 'bqAfterOpen', 'bqAfterClose']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqDialog, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqDialog, selector: "bq-dialog", inputs: { border: "border", disableBackdrop: "disableBackdrop", disableCloseClickOutside: "disableCloseClickOutside", disableCloseEscKeydown: "disableCloseEscKeydown", footerAppearance: "footerAppearance", hideCloseButton: "hideCloseButton", open: "open", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqDialog = __decorate([
    ProxyCmp({
        inputs: ['border', 'disableBackdrop', 'disableCloseClickOutside', 'disableCloseEscKeydown', 'footerAppearance', 'hideCloseButton', 'open', 'size'],
        methods: ['show', 'hide', 'cancel']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqDialog);
export { BqDialog };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqDialog, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-dialog',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['border', 'disableBackdrop', 'disableCloseClickOutside', 'disableCloseEscKeydown', 'footerAppearance', 'hideCloseButton', 'open', 'size'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqDivider = class BqDivider {
    /**
   * If true, the divider has a dashed pattern
   */
    set dashed(_) { }
    ;
    /**
   * The default orientation of the divider
   */
    set orientation(_) { }
    ;
    /**
   * Set the stroke color of the divider. The value should be a valid value of the palette color
   */
    set strokeColor(_) { }
    ;
    /**
   * Set the alignment of the title on the main axis of the divider (horizontal / vertical)
   */
    set titleAlignment(_) { }
    ;
    /**
   * Set the width of each dash of the divider's stroke. This is applicable when the stroke is dashed
   */
    set strokeDashWidth(_) { }
    ;
    /**
   * Set the gap of the divider's stroke. This is applicable when the stroke is dashed
   */
    set strokeDashGap(_) { }
    ;
    /**
   * Set the thickness of the divider's stroke. Value expressed in px
   */
    set strokeThickness(_) { }
    ;
    /**
   * Set the min width of the divider's stroke when text is not centered. Value expressed in px
   */
    set strokeBasis(_) { }
    ;
    /**
   * Set the line of the divider's stroke. This is applicable when the stroke is dashed
   */
    set strokeLinecap(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqDivider, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqDivider, selector: "bq-divider", inputs: { dashed: "dashed", orientation: "orientation", strokeBasis: "strokeBasis", strokeColor: "strokeColor", strokeDashGap: "strokeDashGap", strokeDashWidth: "strokeDashWidth", strokeLinecap: "strokeLinecap", strokeThickness: "strokeThickness", titleAlignment: "titleAlignment" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqDivider = __decorate([
    ProxyCmp({
        inputs: ['dashed', 'orientation', 'strokeBasis', 'strokeColor', 'strokeDashGap', 'strokeDashWidth', 'strokeLinecap', 'strokeThickness', 'titleAlignment']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqDivider);
export { BqDivider };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqDivider, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-divider',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['dashed', 'orientation', 'strokeBasis', 'strokeColor', 'strokeDashGap', 'strokeDashWidth', 'strokeLinecap', 'strokeThickness', 'titleAlignment'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqDrawer = class BqDrawer {
    /**
   * If true, the backdrop overlay will be shown when the drawer opens
   */
    set enableBackdrop(_) { }
    ;
    /**
   * If true, the drawer will not close when clicking outside the panel
   */
    set closeOnClickOutside(_) { }
    ;
    /**
   * If true, the dialog will not close when the [Esc] key is pressed
   */
    set closeOnEsc(_) { }
    ;
    /**
   * If true, the drawer component will be shown
   */
    set open(_) { }
    ;
    /**
   *  @deprecated Defines the position of the drawer
   */
    set placement(_) { }
    ;
    /**
   * Defines the position of the drawer
   */
    set position(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqClose', 'bqOpen', 'bqAfterOpen', 'bqAfterClose']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqDrawer, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqDrawer, selector: "bq-drawer", inputs: { closeOnClickOutside: "closeOnClickOutside", closeOnEsc: "closeOnEsc", enableBackdrop: "enableBackdrop", open: "open", placement: "placement", position: "position" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqDrawer = __decorate([
    ProxyCmp({
        inputs: ['closeOnClickOutside', 'closeOnEsc', 'enableBackdrop', 'open', 'placement', 'position'],
        methods: ['hide', 'show']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqDrawer);
export { BqDrawer };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqDrawer, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-drawer',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['closeOnClickOutside', 'closeOnEsc', 'enableBackdrop', 'open', 'placement', 'position'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqDropdown = class BqDropdown {
    /**
   * If true, the dropdown panel will be visible and won't be shown.
   */
    set disabled(_) { }
    ;
    /**
   * Represents the distance (gutter or margin) between the panel and the trigger element.
   */
    set distance(_) { }
    ;
    /**
   * If true, the panel will remain open after a selection is made.
   */
    set keepOpenOnSelect(_) { }
    ;
    /**
   * Position of the panel
   */
    set placement(_) { }
    ;
    /**
   * If true, the panel will be visible.
   */
    set open(_) { }
    ;
    /**
   * When set, it will override the height of the dropdown panel
   */
    set panelHeight(_) { }
    ;
    /**
   * Whether the panel should have the same width as the trigger element
   */
    set sameWidth(_) { }
    ;
    /**
   * Represents the skidding between the panel and the trigger element.
   */
    set skidding(_) { }
    ;
    /**
   * Defines the strategy to position the panel
   */
    set strategy(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqOpen']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqDropdown, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqDropdown, selector: "bq-dropdown", inputs: { disabled: "disabled", distance: "distance", keepOpenOnSelect: "keepOpenOnSelect", open: "open", panelHeight: "panelHeight", placement: "placement", sameWidth: "sameWidth", skidding: "skidding", strategy: "strategy" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqDropdown = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'distance', 'keepOpenOnSelect', 'open', 'panelHeight', 'placement', 'sameWidth', 'skidding', 'strategy']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqDropdown);
export { BqDropdown };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqDropdown, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-dropdown',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'distance', 'keepOpenOnSelect', 'open', 'panelHeight', 'placement', 'sameWidth', 'skidding', 'strategy'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqEmptyState = class BqEmptyState {
    /**
   * The size of the empty state component
   */
    set size(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqEmptyState, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqEmptyState, selector: "bq-empty-state", inputs: { size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqEmptyState = __decorate([
    ProxyCmp({
        inputs: ['size']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqEmptyState);
export { BqEmptyState };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqEmptyState, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-empty-state',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['size'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqGrid = class BqGrid {
    set fixed(_) { }
    ;
    set noPadding(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqGrid, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqGrid, selector: "bq-grid", inputs: { fixed: "fixed", noPadding: "noPadding" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqGrid = __decorate([
    ProxyCmp({
        inputs: ['fixed', 'noPadding']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqGrid);
export { BqGrid };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqGrid, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-grid',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['fixed', 'noPadding'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqIcon = class BqIcon {
    /**
   * Label for the icon, used for accessibility
   */
    set label(_) { }
    ;
    /**
   * Set the stroke color of the SVG. The value should be a valid value of the palette color
   */
    set color(_) { }
    ;
    /**
   * Icon name to load. Please check all available icons [here](https://phosphoricons.com/)
   */
    set name(_) { }
    ;
    /**
   * Set the size of the SVG
   */
    set size(_) { }
    ;
    /**
   * Set the source of the SVG. If the source is set, the name property will be ignored
   */
    set src(_) { }
    ;
    /**
   *  @deprecated It set the icon weight/style
   */
    set weight(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['svgLoaded']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqIcon, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqIcon, selector: "bq-icon", inputs: { color: "color", label: "label", name: "name", size: "size", src: "src", weight: "weight" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqIcon = __decorate([
    ProxyCmp({
        inputs: ['color', 'label', 'name', 'size', 'src', 'weight']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqIcon);
export { BqIcon };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqIcon, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-icon',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['color', 'label', 'name', 'size', 'src', 'weight'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqInput = class BqInput {
    /**
   * Controls whether or not the input field should be capitalized and how.
Possible values are 'off', 'none', 'on', 'sentences', 'words', and 'characters'.
See: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize
   */
    set autocapitalize(_) { }
    ;
    /**
   * Specifies whether or not the input field should have autocomplete enabled.
See: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values
   */
    set autocomplete(_) { }
    ;
    /**
   * Controls whether or not the input field should have autocorrect enabled.
Possible values are 'on' and 'off'.
   */
    set autocorrect(_) { }
    ;
    /**
   * If true, the input will be focused on component render
   */
    set autofocus(_) { }
    ;
    /**
   * The clear button aria label
   */
    set clearButtonLabel(_) { }
    ;
    /**
   * The amount of time, in milliseconds, to wait before emitting the `bqInput` event after the input value changes.
A value of 0 means no debouncing will occur.
   */
    set debounceTime(_) { }
    ;
    /**
   * Indicates whether the input is disabled or not.
If `true`, the input is disabled and cannot be interacted with.
   */
    set disabled(_) { }
    ;
    /**
   * If true, the clear button won't be displayed
   */
    set disableClear(_) { }
    ;
    /**
   * The ID of the form that the input field belongs to.
   */
    set form(_) { }
    ;
    /**
   * The native form validation message (mandatory if `required` is set)
   */
    set formValidationMessage(_) { }
    ;
    /**
   * The inputmode attribute specifies what kind of input mechanism would be most helpful for users entering content into the input field.
This allows a browser to display an appropriate virtual keyboard while editing.
Possible values are 'none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url', and 'date'.
   */
    set inputmode(_) { }
    ;
    /**
   * The maximum value that the input field can accept.
Only applies to date and number input types.
   */
    set max(_) { }
    ;
    /**
   * The maximum number of characters that the input field can accept.
   */
    set maxlength(_) { }
    ;
    /**
   * The minimum value that the input field can accept.
Only applies to date and number input types.
   */
    set min(_) { }
    ;
    /**
   * The minimum number of characters that the input field can accept.
   */
    set minlength(_) { }
    ;
    /**
   * The input field name.
   */
    set name(_) { }
    ;
    /**
   * Specifies a regular expression the form control's value should match.
See: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern
   */
    set pattern(_) { }
    ;
    /**
   * The input placeholder text value
   */
    set placeholder(_) { }
    ;
    /**
   * If true, the input field cannot be modified.
   */
    set readonly(_) { }
    ;
    /**
   * Indicates whether or not the input field is required to be filled out before submitting the form.
   */
    set required(_) { }
    ;
    /**
   * A number that specifies the granularity that the value must adhere to.
Valid for date, month, week, time, datetime-local, number, and range.
See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step
   */
    set step(_) { }
    ;
    /**
   * The type attribute specifies the type of input field to display.
Possible values are 'text', 'password', 'email', 'number', 'tel', 'search', 'url', and more.
See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
   */
    set type(_) { }
    ;
    /**
   * The validation status of the input. @remarks This property is used to indicate the validation status of the input. It can be set to one of the following values:
- `'none'`: No validation status is set.
- `'error'`: The input has a validation error.
- `'warning'`: The input has a validation warning.
- `'success'`: The input has passed validation.
   */
    set validationStatus(_) { }
    ;
    /**
   * The input value, it can be used to reset the input to a previous value
   */
    set value(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqBlur', 'bqChange', 'bqClear', 'bqFocus', 'bqInput']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqInput, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqInput, selector: "bq-input", inputs: { autocapitalize: "autocapitalize", autocomplete: "autocomplete", autocorrect: "autocorrect", autofocus: "autofocus", clearButtonLabel: "clearButtonLabel", debounceTime: "debounceTime", disableClear: "disableClear", disabled: "disabled", form: "form", formValidationMessage: "formValidationMessage", inputmode: "inputmode", max: "max", maxlength: "maxlength", min: "min", minlength: "minlength", name: "name", pattern: "pattern", placeholder: "placeholder", readonly: "readonly", required: "required", step: "step", type: "type", validationStatus: "validationStatus", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqInput = __decorate([
    ProxyCmp({
        inputs: ['autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearButtonLabel', 'debounceTime', 'disableClear', 'disabled', 'form', 'formValidationMessage', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'step', 'type', 'validationStatus', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqInput);
export { BqInput };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqInput, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-input',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearButtonLabel', 'debounceTime', 'disableClear', 'disabled', 'form', 'formValidationMessage', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'step', 'type', 'validationStatus', 'value'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqLogo = class BqLogo {
    /**
   * Tamaño del logo (normal o small)
   */
    set size(_) { }
    ;
    /**
   * Tipo del logo (completo = logo o responsivo = isotype)
   */
    set type(_) { }
    ;
    /**
   * Variante de color (full-color, green, white)
   */
    set variant(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqLogo, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqLogo, selector: "bq-logo", inputs: { size: "size", type: "type", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqLogo = __decorate([
    ProxyCmp({
        inputs: ['size', 'type', 'variant']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqLogo);
export { BqLogo };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqLogo, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-logo',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['size', 'type', 'variant'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqNotification = class BqNotification {
    /**
   * If true, the notification will automatically hide after the specified amount of time
   */
    set autoDismiss(_) { }
    ;
    /**
   * The corder radius of the notification component
   */
    set border(_) { }
    ;
    /**
   * If true, the close button at the top right of the notification won't be shown
   */
    set disableClose(_) { }
    ;
    /**
   * If true, the notification icon won't be shown
   */
    set hideIcon(_) { }
    ;
    /**
   * If true, the notification will be shown
   */
    set open(_) { }
    ;
    /**
   * The length of time, in milliseconds, after which the notification will close itself. Only valid if `autoDismiss="true"`
   */
    set time(_) { }
    ;
    /**
   * Type of Notification
   */
    set type(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqHide', 'bqShow', 'bqAfterOpen', 'bqAfterClose']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqNotification, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqNotification, selector: "bq-notification", inputs: { autoDismiss: "autoDismiss", border: "border", disableClose: "disableClose", hideIcon: "hideIcon", open: "open", time: "time", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqNotification = __decorate([
    ProxyCmp({
        inputs: ['autoDismiss', 'border', 'disableClose', 'hideIcon', 'open', 'time', 'type'],
        methods: ['hide', 'show', 'toast']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqNotification);
export { BqNotification };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqNotification, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-notification',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['autoDismiss', 'border', 'disableClose', 'hideIcon', 'open', 'time', 'type'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqOption = class BqOption {
    /**
   * If true, the option is hidden.
   */
    set hidden(_) { }
    ;
    /**
   * If true, the option is disabled.
   */
    set disabled(_) { }
    ;
    /**
   * A string representing the value of the option. Can be used to identify the item
   */
    set value(_) { }
    ;
    /**
   * If true, the option is selected and active.
   */
    set selected(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqBlur', 'bqFocus', 'bqClick', 'bqEnter']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqOption, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqOption, selector: "bq-option", inputs: { disabled: "disabled", hidden: "hidden", selected: "selected", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqOption = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'hidden', 'selected', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqOption);
export { BqOption };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqOption, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-option',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['disabled', 'hidden', 'selected', 'value'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqOptionGroup = class BqOptionGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqOptionGroup, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqOptionGroup, selector: "bq-option-group", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqOptionGroup = __decorate([
    ProxyCmp({}),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqOptionGroup);
export { BqOptionGroup };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqOptionGroup, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-option-group',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqOptionList = class BqOptionList {
    /**
   * Aria label for the list.
   */
    set ariaLabel(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqSelect']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqOptionList, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqOptionList, selector: "bq-option-list", inputs: { ariaLabel: "ariaLabel" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqOptionList = __decorate([
    ProxyCmp({
        inputs: ['ariaLabel']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqOptionList);
export { BqOptionList };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqOptionList, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-option-list',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['ariaLabel'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqPageTitle = class BqPageTitle {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqPageTitle, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqPageTitle, selector: "bq-page-title", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqPageTitle = __decorate([
    ProxyCmp({}),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqPageTitle);
export { BqPageTitle };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqPageTitle, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-page-title',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqPanel = class BqPanel {
    /**
   * Represents the distance (gutter or margin) between the panel and the trigger element.
   */
    set distance(_) { }
    ;
    /**
   * Position of the panel
   */
    set placement(_) { }
    ;
    /**
   * If true, the panel will be visible.
   */
    set open(_) { }
    ;
    /**
   * Whether the panel should have the same width as the trigger element
   */
    set sameWidth(_) { }
    ;
    /**
   * Represents the skidding between the panel and the trigger element.
   */
    set skidding(_) { }
    ;
    /**
   * Defines the strategy to position the panel
   */
    set strategy(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqPanel, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqPanel, selector: "bq-panel", inputs: { distance: "distance", open: "open", placement: "placement", sameWidth: "sameWidth", skidding: "skidding", strategy: "strategy" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqPanel = __decorate([
    ProxyCmp({
        inputs: ['distance', 'open', 'placement', 'sameWidth', 'skidding', 'strategy']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqPanel);
export { BqPanel };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqPanel, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-panel',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['distance', 'open', 'placement', 'sameWidth', 'skidding', 'strategy'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqProgress = class BqProgress {
    /**
   * It will set the border style of the progress bar
   */
    set borderShape(_) { }
    ;
    /**
   * If `true`, a tooltip will be shown displaying the progress value
   */
    set enableTooltip(_) { }
    ;
    /**
   * If `true` the indeterminate state of progress bar is enabled
   */
    set indeterminate(_) { }
    ;
    /**
   * If `true, a label text showing the value (in percentage) will be shown
   */
    set label(_) { }
    ;
    /**
   * Progress bar thickness
   */
    set thickness(_) { }
    ;
    /**
   * Progress type
   */
    set type(_) { }
    ;
    /**
   * A number representing the current value of the progress bar
   */
    set value(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqProgress, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqProgress, selector: "bq-progress", inputs: { borderShape: "borderShape", enableTooltip: "enableTooltip", indeterminate: "indeterminate", label: "label", thickness: "thickness", type: "type", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqProgress = __decorate([
    ProxyCmp({
        inputs: ['borderShape', 'enableTooltip', 'indeterminate', 'label', 'thickness', 'type', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqProgress);
export { BqProgress };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqProgress, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-progress',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['borderShape', 'enableTooltip', 'indeterminate', 'label', 'thickness', 'type', 'value'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqRadio = class BqRadio {
    /**
   * If true radio input is checked
   */
    set checked(_) { }
    ;
    /**
   * If true radio input is disabled
   */
    set disabled(_) { }
    ;
    /**
   * If true radio displays background on hover
   */
    set backgroundOnHover(_) { }
    ;
    /**
   * The form ID that the radio input is associated with
   */
    set formId(_) { }
    ;
    /**
   * Name of the HTML input form control. Submitted with the form as part of a name/value pair.
   */
    set name(_) { }
    ;
    /**
   * If `true`, it will indicate that the user must specify a value for the radio before the owning form can be submitted
   */
    set required(_) { }
    ;
    /**
   * A string representing the value of the radio.
   */
    set value(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqClick', 'bqFocus', 'bqBlur', 'bqKeyDown']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqRadio, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqRadio, selector: "bq-radio", inputs: { backgroundOnHover: "backgroundOnHover", checked: "checked", disabled: "disabled", formId: "formId", name: "name", required: "required", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqRadio = __decorate([
    ProxyCmp({
        inputs: ['backgroundOnHover', 'checked', 'disabled', 'formId', 'name', 'required', 'value'],
        methods: ['vClick', 'vFocus', 'vBlur', 'getNativeInput']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqRadio);
export { BqRadio };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqRadio, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-radio',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['backgroundOnHover', 'checked', 'disabled', 'formId', 'name', 'required', 'value'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqRadioGroup = class BqRadioGroup {
    /**
   * If true, all radio inputs in the group will display a background on hover
   */
    set backgroundOnHover(_) { }
    ;
    /**
   * A number representing the delay time (in milliseconds) that `bqChange` event handler gets triggered once the value change
   */
    set debounceTime(_) { }
    ;
    /**
   * If true radio inputs are disabled
   */
    set disabled(_) { }
    ;
    /**
   * If true displays fieldset
   */
    set fieldset(_) { }
    ;
    /**
   * Name of the HTML input form control. Submitted with the form as part of a name/value pair.
   */
    set name(_) { }
    ;
    /**
   * The display orientation of the radio inputs
   */
    set orientation(_) { }
    ;
    /**
   * If true, the radio group is required
   */
    set required(_) { }
    ;
    /**
   * The native form validation message when the radio group is required
   */
    set requiredValidationMessage(_) { }
    ;
    /**
   * A string representing the value of the radio.
   */
    set value(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqChange']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqRadioGroup, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqRadioGroup, selector: "bq-radio-group", inputs: { backgroundOnHover: "backgroundOnHover", debounceTime: "debounceTime", disabled: "disabled", fieldset: "fieldset", name: "name", orientation: "orientation", required: "required", requiredValidationMessage: "requiredValidationMessage", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqRadioGroup = __decorate([
    ProxyCmp({
        inputs: ['backgroundOnHover', 'debounceTime', 'disabled', 'fieldset', 'name', 'orientation', 'required', 'requiredValidationMessage', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqRadioGroup);
export { BqRadioGroup };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqRadioGroup, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-radio-group',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['backgroundOnHover', 'debounceTime', 'disabled', 'fieldset', 'name', 'orientation', 'required', 'requiredValidationMessage', 'value'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqRow = class BqRow {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqRow, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqRow, selector: "bq-row", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqRow = __decorate([
    ProxyCmp({}),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqRow);
export { BqRow };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqRow, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-row',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqSelect = class BqSelect {
    /**
   * If true, the Select input will be focused on component render
   */
    set autofocus(_) { }
    ;
    /**
   * The clear button aria label
   */
    set clearButtonLabel(_) { }
    ;
    /**
   * The amount of time, in milliseconds, to wait before emitting the `bqInput` event after the input value changes.
A value of 0 means no debouncing will occur.
   */
    set debounceTime(_) { }
    ;
    /**
   * Indicates whether the Select input is disabled or not.
If `true`, the Select is disabled and cannot be interacted with.
   */
    set disabled(_) { }
    ;
    /**
   * If true, the clear button won't be displayed
   */
    set disableClear(_) { }
    ;
    /**
   * Represents the distance (gutter or margin) between the Select panel and the input element.
   */
    set distance(_) { }
    ;
    /**
   * The ID of the form that the Select input belongs to.
   */
    set form(_) { }
    ;
    /**
   * If true, the Select panel will remain open after a selection is made.
   */
    set keepOpenOnSelect(_) { }
    ;
    /**
   * The Select input name.
   */
    set name(_) { }
    ;
    /**
   * The maximum number of tags to display when multiple selection is enabled
   */
    set maxTagsVisible(_) { }
    ;
    /**
   * If true, the Select input will allow multiple selections.
   */
    set multiple(_) { }
    ;
    /**
   * If true, the Select panel will be visible.
   */
    set open(_) { }
    ;
    /**
   * When set, it will override the height of the Select panel.
   */
    set panelHeight(_) { }
    ;
    /**
   * The Select input placeholder text value
   */
    set placeholder(_) { }
    ;
    /**
   * Position of the Select panel
   */
    set placement(_) { }
    ;
    /**
   * If true, the list of options cannot be filtered (searching won't be available)
   */
    set readonly(_) { }
    ;
    /**
   * Indicates whether or not the Select input is required to be filled out before submitting the form.
   */
    set required(_) { }
    ;
    /**
   * Whether the panel should have the Select same width as the input element
   */
    set sameWidth(_) { }
    ;
    /**
   * Represents the skidding between the Select panel and the input element.
   */
    set skidding(_) { }
    ;
    /**
   * Defines the strategy to position the Select panel
   */
    set strategy(_) { }
    ;
    /**
   * The validation status of the Select input. @remarks This property is used to indicate the validation status of the select input. It can be set to one of the following values:
- `'none'`: No validation status is set.
- `'error'`: The input has a validation error.
- `'warning'`: The input has a validation warning.
- `'success'`: The input has passed validation.
   */
    set validationStatus(_) { }
    ;
    /**
   * The select input value, it can be used to reset the field to a previous value
   */
    set value(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqBlur', 'bqClear', 'bqFocus', 'bqSelect']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqSelect, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqSelect, selector: "bq-select", inputs: { autofocus: "autofocus", clearButtonLabel: "clearButtonLabel", debounceTime: "debounceTime", disableClear: "disableClear", disabled: "disabled", distance: "distance", form: "form", keepOpenOnSelect: "keepOpenOnSelect", maxTagsVisible: "maxTagsVisible", multiple: "multiple", name: "name", open: "open", panelHeight: "panelHeight", placeholder: "placeholder", placement: "placement", readonly: "readonly", required: "required", sameWidth: "sameWidth", skidding: "skidding", strategy: "strategy", validationStatus: "validationStatus", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqSelect = __decorate([
    ProxyCmp({
        inputs: ['autofocus', 'clearButtonLabel', 'debounceTime', 'disableClear', 'disabled', 'distance', 'form', 'keepOpenOnSelect', 'maxTagsVisible', 'multiple', 'name', 'open', 'panelHeight', 'placeholder', 'placement', 'readonly', 'required', 'sameWidth', 'skidding', 'strategy', 'validationStatus', 'value'],
        methods: ['clear']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqSelect);
export { BqSelect };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqSelect, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-select',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['autofocus', 'clearButtonLabel', 'debounceTime', 'disableClear', 'disabled', 'distance', 'form', 'keepOpenOnSelect', 'maxTagsVisible', 'multiple', 'name', 'open', 'panelHeight', 'placeholder', 'placement', 'readonly', 'required', 'sameWidth', 'skidding', 'strategy', 'validationStatus', 'value'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqSideMenu = class BqSideMenu {
    /**
   * It sets a predefined appearance of the side menu
   */
    set appearance(_) { }
    ;
    /**
   * If true, the container will reduce its width
   */
    set collapse(_) { }
    ;
    /**
   * It sets the size of the navigation menu items
   */
    set size(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqCollapse', 'bqSelect']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqSideMenu, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqSideMenu, selector: "bq-side-menu", inputs: { appearance: "appearance", collapse: "collapse", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqSideMenu = __decorate([
    ProxyCmp({
        inputs: ['appearance', 'collapse', 'size'],
        methods: ['toggleCollapse']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqSideMenu);
export { BqSideMenu };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqSideMenu, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-side-menu',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['appearance', 'collapse', 'size'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqSideMenuItem = class BqSideMenuItem {
    /**
   * If true, the menu item will be shown as active/selected.
   */
    set active(_) { }
    ;
    /**
   * If true, the item label and suffix will be hidden and the with will be reduce according to its parent
   */
    set collapse(_) { }
    ;
    /**
   * If true, the menu item will be disabled (no interaction allowed)
   */
    set disabled(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqBlur', 'bqFocus', 'bqClick']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqSideMenuItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqSideMenuItem, selector: "bq-side-menu-item", inputs: { active: "active", collapse: "collapse", disabled: "disabled" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqSideMenuItem = __decorate([
    ProxyCmp({
        inputs: ['active', 'collapse', 'disabled']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqSideMenuItem);
export { BqSideMenuItem };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqSideMenuItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-side-menu-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['active', 'collapse', 'disabled'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqSlider = class BqSlider {
    /**
   * The amount of time, in milliseconds, to wait to trigger the `bqChange` event after each value change.
   */
    set debounceTime(_) { }
    ;
    /**
   * If `true` the slider is disabled.
   */
    set disabled(_) { }
    ;
    /**
   * If `true` it will show the value label on a side of the slider track area
   */
    set enableValueIndicator(_) { }
    ;
    /**
   * A number representing the amount to remain between the minimum and maximum values (only for range type).
   */
    set gap(_) { }
    ;
    /**
   * A number representing the max value of the slider.
   */
    set max(_) { }
    ;
    /**
   * A number representing the min value of the slider.
   */
    set min(_) { }
    ;
    /**
   * Name of the form control. Submitted with the form as part of a name/value pair
   */
    set name(_) { }
    ;
    /**
   * A number representing the step of the slider.
⚠️ Please notice that the value (or list of values if the slider type is `range`) will be rounded to the nearest multiple of `step`.
   */
    set step(_) { }
    ;
    /**
   * It defines the type of slider to display
   */
    set type(_) { }
    ;
    /**
   * The value of the slider.
- If the slider type is `single`, the value is a number.
- If the slider type is `range`, the value is an array of two numbers (the first number represents the `min` value and the second number represents the `max` value).
   */
    set value(_) { }
    ;
    /**
   * If `true`, a tooltip will be shown displaying the progress value
   */
    set enableTooltip(_) { }
    ;
    /**
   * If `true`, a tooltip will always display the progress value.
It relies on enableTooltip and if enableTooltip is false, tooltipAlwaysVisible cannot be true.
   */
    set tooltipAlwaysVisible(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqChange', 'bqBlur', 'bqFocus']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqSlider, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqSlider, selector: "bq-slider", inputs: { debounceTime: "debounceTime", disabled: "disabled", enableTooltip: "enableTooltip", enableValueIndicator: "enableValueIndicator", gap: "gap", max: "max", min: "min", name: "name", step: "step", tooltipAlwaysVisible: "tooltipAlwaysVisible", type: "type", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqSlider = __decorate([
    ProxyCmp({
        inputs: ['debounceTime', 'disabled', 'enableTooltip', 'enableValueIndicator', 'gap', 'max', 'min', 'name', 'step', 'tooltipAlwaysVisible', 'type', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqSlider);
export { BqSlider };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqSlider, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-slider',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['debounceTime', 'disabled', 'enableTooltip', 'enableValueIndicator', 'gap', 'max', 'min', 'name', 'step', 'tooltipAlwaysVisible', 'type', 'value'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqSpinner = class BqSpinner {
    /**
   * If `false`, the animation on the icon element will be stopped
   */
    set animation(_) { }
    ;
    /**
   * It defines the position of the label text
   */
    set textPosition(_) { }
    ;
    /**
   * It defines the size of the icon element displayed
   */
    set size(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqSpinner, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqSpinner, selector: "bq-spinner", inputs: { animation: "animation", size: "size", textPosition: "textPosition" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqSpinner = __decorate([
    ProxyCmp({
        inputs: ['animation', 'size', 'textPosition']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqSpinner);
export { BqSpinner };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqSpinner, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-spinner',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['animation', 'size', 'textPosition'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqStatus = class BqStatus {
    /**
   * It defines the type of status to display
   */
    set type(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqStatus, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqStatus, selector: "bq-status", inputs: { type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqStatus = __decorate([
    ProxyCmp({
        inputs: ['type']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqStatus);
export { BqStatus };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqStatus, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-status',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['type'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqStepItem = class BqStepItem {
    /**
   * It defines prefix size
   */
    set size(_) { }
    ;
    /**
   * It defines step item appearance based on its status
   */
    set status(_) { }
    ;
    /**
   * It defines the step item type used
   */
    set type(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqClick']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqStepItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqStepItem, selector: "bq-step-item", inputs: { size: "size", status: "status", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqStepItem = __decorate([
    ProxyCmp({
        inputs: ['size', 'status', 'type']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqStepItem);
export { BqStepItem };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqStepItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-step-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['size', 'status', 'type'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqSteps = class BqSteps {
    /**
   * The color of the line that connects the steps. It should be a valid declarative color token.
   */
    set dividerColor(_) { }
    ;
    /**
   * The size of the steps
   */
    set size(_) { }
    ;
    /**
   * The type of prefix element to use on the step items
   */
    set type(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqSteps, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqSteps, selector: "bq-steps", inputs: { dividerColor: "dividerColor", size: "size", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqSteps = __decorate([
    ProxyCmp({
        inputs: ['dividerColor', 'size', 'type']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqSteps);
export { BqSteps };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqSteps, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-steps',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['dividerColor', 'size', 'type'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqSwitch = class BqSwitch {
    /**
   * If true, a background will be displayed on hover
   */
    set backgroundOnHover(_) { }
    ;
    /**
   * It indicates whether if the switch is `ON` by default (when the page loads)
   */
    set checked(_) { }
    ;
    /**
   * If true, the switch control will be disabled and no interaction will be allowed
   */
    set disabled(_) { }
    ;
    /**
   * The native form validation message
   */
    set formValidationMessage(_) { }
    ;
    /**
   * If true, the component will take the full width space available on the parent container
   */
    set fullWidth(_) { }
    ;
    /**
   * It indicates how to to display the on/off marks inside the control, with icons or none (default)
   */
    set innerLabel(_) { }
    ;
    /**
   * It defines how to distribute the space between and around the control and the label text
(https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
   */
    set justifyContent(_) { }
    ;
    /**
   * Name of the form control. Submitted with the form as part of a name/value pair
   */
    set name(_) { }
    ;
    /**
   * If `true`, it will indicate that the user must switch `ON` the element before the owning form can be submitted
   */
    set required(_) { }
    ;
    /**
   * If true, the order of the control and the label text will be changed
   */
    set reverseOrder(_) { }
    ;
    /**
   * The input control's value, submitted as a name/value pair with form data.
   */
    set value(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqChange', 'bqFocus', 'bqBlur']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqSwitch, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqSwitch, selector: "bq-switch", inputs: { backgroundOnHover: "backgroundOnHover", checked: "checked", disabled: "disabled", formValidationMessage: "formValidationMessage", fullWidth: "fullWidth", innerLabel: "innerLabel", justifyContent: "justifyContent", name: "name", required: "required", reverseOrder: "reverseOrder", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqSwitch = __decorate([
    ProxyCmp({
        inputs: ['backgroundOnHover', 'checked', 'disabled', 'formValidationMessage', 'fullWidth', 'innerLabel', 'justifyContent', 'name', 'required', 'reverseOrder', 'value'],
        methods: ['vClick', 'vFocus', 'vBlur']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqSwitch);
export { BqSwitch };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqSwitch, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-switch',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['backgroundOnHover', 'checked', 'disabled', 'formValidationMessage', 'fullWidth', 'innerLabel', 'justifyContent', 'name', 'required', 'reverseOrder', 'value'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqTab = class BqTab {
    /**
   * If true tab is active
   */
    set active(_) { }
    ;
    /**
   * The tab panel id that the tab controls
   */
    set controls(_) { }
    ;
    /**
   * If true tab is disabled
   */
    set disabled(_) { }
    ;
    /**
   * The direction that tab should be render
   */
    set orientation(_) { }
    ;
    /**
   * The placement that tab should be render
   */
    set placement(_) { }
    ;
    /**
   * The size of the tab
   */
    set size(_) { }
    ;
    /**
   * The id of the tab
   */
    set tabId(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqClick', 'bqFocus', 'bqBlur', 'bqKeyDown']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqTab, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqTab, selector: "bq-tab", inputs: { active: "active", controls: "controls", disabled: "disabled", orientation: "orientation", placement: "placement", size: "size", tabId: "tabId" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqTab = __decorate([
    ProxyCmp({
        inputs: ['active', 'controls', 'disabled', 'orientation', 'placement', 'size', 'tabId'],
        methods: ['vClick', 'vFocus', 'vBlur']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqTab);
export { BqTab };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqTab, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-tab',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['active', 'controls', 'disabled', 'orientation', 'placement', 'size', 'tabId'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqTabGroup = class BqTabGroup {
    /**
   * A number representing the delay value applied to bqChange event handler
   */
    set debounceTime(_) { }
    ;
    /**
   * If true, the underline divider below the tabs won't be shown
   */
    set disableDivider(_) { }
    ;
    /**
   * The direction that tab should be render
   */
    set orientation(_) { }
    ;
    /**
   * The placement that tab should be render
   */
    set placement(_) { }
    ;
    /**
   * The size of the tab
   */
    set size(_) { }
    ;
    /**
   * A string representing the id of the selected tab.
   */
    set value(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqChange']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqTabGroup, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqTabGroup, selector: "bq-tab-group", inputs: { debounceTime: "debounceTime", disableDivider: "disableDivider", orientation: "orientation", placement: "placement", size: "size", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqTabGroup = __decorate([
    ProxyCmp({
        inputs: ['debounceTime', 'disableDivider', 'orientation', 'placement', 'size', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqTabGroup);
export { BqTabGroup };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqTabGroup, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-tab-group',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['debounceTime', 'disableDivider', 'orientation', 'placement', 'size', 'value'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqTag = class BqTag {
    /**
   * The corner radius of the Tag (will override size's predefined border)
   */
    set border(_) { }
    ;
    /**
   * If true, the Tag can be clickable
   */
    set clickable(_) { }
    ;
    /**
   * The color style of the Tag
   */
    set color(_) { }
    ;
    /**
   * If true, the Tag will be disabled (only if clickable = `true`, no interaction allowed)
   */
    set disabled(_) { }
    ;
    /**
   * If true, the Tag component will hidden (only if removable = `true`)
   */
    set hidden(_) { }
    ;
    /**
   * If true, the Tag component can be removed
   */
    set removable(_) { }
    ;
    /**
   * If true, the Tag is selected (only if clickable = `true`)
   */
    set selected(_) { }
    ;
    /**
   * The size of the Tag component
   */
    set size(_) { }
    ;
    /**
   * The variant of Tag to apply on top of the variant
   */
    set variant(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqClose', 'bqOpen', 'bqBlur', 'bqClick', 'bqFocus']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqTag, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqTag, selector: "bq-tag", inputs: { border: "border", clickable: "clickable", color: "color", disabled: "disabled", hidden: "hidden", removable: "removable", selected: "selected", size: "size", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqTag = __decorate([
    ProxyCmp({
        inputs: ['border', 'clickable', 'color', 'disabled', 'hidden', 'removable', 'selected', 'size', 'variant'],
        methods: ['hide', 'show']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqTag);
export { BqTag };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqTag, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-tag',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['border', 'clickable', 'color', 'disabled', 'hidden', 'removable', 'selected', 'size', 'variant'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqText = class BqText {
    /**
   * text background color. The value should be a valid value of the palette color
   */
    set backgroundColor(_) { }
    ;
    /**
   * text number color. The value should be a valid value of the palette color
   */
    set textColor(_) { }
    ;
    /**
   * The size of the text. Relevant if text has no content.
   */
    set size(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqText, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqText, selector: "bq-text", inputs: { backgroundColor: "backgroundColor", size: "size", textColor: "textColor" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqText = __decorate([
    ProxyCmp({
        inputs: ['backgroundColor', 'size', 'textColor']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqText);
export { BqText };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqText, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-text',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['backgroundColor', 'size', 'textColor'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqTextarea = class BqTextarea {
    /**
   * Controls whether or not the textarea field should be capitalized and how.
Possible values are 'off', 'none', 'on', 'sentences', 'words', and 'characters'.
See: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize
   */
    set autocapitalize(_) { }
    ;
    /**
   * Specifies whether or not the textarea field should have autocomplete enabled.
See: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values
   */
    set autocomplete(_) { }
    ;
    /**
   * Controls whether or not the textarea field should have autocorrect enabled.
Possible values are 'on' and 'off'.
   */
    set autocorrect(_) { }
    ;
    /**
   * If true, the textarea will be focused on component render
   */
    set autofocus(_) { }
    ;
    /**
   * If `true`, the textarea will automatically grow and shrink to fit its contents.
If `false`, the textarea will have a fixed height specified by the `rows` property.
   */
    set autoGrow(_) { }
    ;
    /**
   * The amount of time, in milliseconds, to wait before emitting the `bqInput` event after the textarea value changes.
A value of 0 means no debouncing will occur.
   */
    set debounceTime(_) { }
    ;
    /**
   * If `true`, the user cannot interact with the textarea.
   */
    set disabled(_) { }
    ;
    /**
   * If `true`, it will block the user's ability to resize the textarea.
   */
    set disableResize(_) { }
    ;
    /**
   * The ID of the form that the textarea field belongs to.
   */
    set form(_) { }
    ;
    /**
   * The native form validation message
   */
    set formValidationMessage(_) { }
    ;
    /**
   * The maximum number of characters that can be entered into the textarea (`0`: no limit).
When enabled, a character counter will be shown underneath the textarea.
   */
    set maxlength(_) { }
    ;
    /**
   * The name of the textarea element.
   */
    set name(_) { }
    ;
    /**
   * The placeholder text to show when there is no value.
   */
    set placeholder(_) { }
    ;
    /**
   * If true, the textarea field cannot be modified.
   */
    set readonly(_) { }
    ;
    /**
   * Indicates whether or not the textarea field is required to be filled out before submitting the form.
   */
    set required(_) { }
    ;
    /**
   * The number of visible text lines for the control. It must be a positive integer.
   */
    set rows(_) { }
    ;
    /**
   * If true, the textarea content may be checked for spelling errors.
   */
    set spellcheck(_) { }
    ;
    /**
   * The validation status of the textarea. @remarks This property is used to indicate the validation status of the textarea. It can be set to one of the following values:
- `'none'`: No validation status is set.
- `'error'`: The textarea has a validation error.
- `'warning'`: The textarea has a validation warning.
- `'success'`: The textarea has passed validation.
   */
    set validationStatus(_) { }
    ;
    /**
   * The value of the textarea. It can be used to reset the textarea to a previous value.
   */
    set value(_) { }
    ;
    /**
   * Specifies how the text in a text area is to be wrapped when submitted in a form
   */
    set wrap(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqBlur', 'bqChange', 'bqClear', 'bqFocus', 'bqInput']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqTextarea, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqTextarea, selector: "bq-textarea", inputs: { autoGrow: "autoGrow", autocapitalize: "autocapitalize", autocomplete: "autocomplete", autocorrect: "autocorrect", autofocus: "autofocus", debounceTime: "debounceTime", disableResize: "disableResize", disabled: "disabled", form: "form", formValidationMessage: "formValidationMessage", maxlength: "maxlength", name: "name", placeholder: "placeholder", readonly: "readonly", required: "required", rows: "rows", spellcheck: "spellcheck", validationStatus: "validationStatus", value: "value", wrap: "wrap" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqTextarea = __decorate([
    ProxyCmp({
        inputs: ['autoGrow', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'debounceTime', 'disableResize', 'disabled', 'form', 'formValidationMessage', 'maxlength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'spellcheck', 'validationStatus', 'value', 'wrap']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqTextarea);
export { BqTextarea };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqTextarea, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-textarea',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['autoGrow', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'debounceTime', 'disableResize', 'disabled', 'form', 'formValidationMessage', 'maxlength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'spellcheck', 'validationStatus', 'value', 'wrap'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqToast = class BqToast {
    /**
   * The corder radius of the toast component
   */
    set border(_) { }
    ;
    /**
   * Type of toast
   */
    set type(_) { }
    ;
    /**
   * Placement of toast
   */
    set placement(_) { }
    ;
    /**
   * If true will hide toast icon
   */
    set hideIcon(_) { }
    ;
    /**
   * If true, the toast will be shown
   */
    set open(_) { }
    ;
    /**
   * The length of time, in milliseconds, after which the toast will close itself
   */
    set time(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqHide', 'bqShow']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqToast, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqToast, selector: "bq-toast", inputs: { border: "border", hideIcon: "hideIcon", open: "open", placement: "placement", time: "time", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqToast = __decorate([
    ProxyCmp({
        inputs: ['border', 'hideIcon', 'open', 'placement', 'time', 'type'],
        methods: ['show', 'hide', 'toast']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqToast);
export { BqToast };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqToast, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-toast',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['border', 'hideIcon', 'open', 'placement', 'time', 'type'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqTooltip = class BqTooltip {
    /**
   * If true, the tooltip will always be visible
   */
    set alwaysVisible(_) { }
    ;
    /**
   * Distance between trigger element and tooltip
   */
    set distance(_) { }
    ;
    /**
   * If true, the arrow on the tooltip content won't be shown
   */
    set hideArrow(_) { }
    ;
    set placement(_) { }
    ;
    /**
   * Whether the tooltip should have the same width as the trigger element
(applicable only for content shorter than the trigger element)
   */
    set sameWidth(_) { }
    ;
    /**
   * Set the action when the tooltip should be displayed, on hover (default) or click
   */
    set displayOn(_) { }
    ;
    /**
   * Indicates whether or not the tooltip is visible when the component is first rendered,
and when interacting with the trigger
   */
    set visible(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqTooltip, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqTooltip, selector: "bq-tooltip", inputs: { alwaysVisible: "alwaysVisible", displayOn: "displayOn", distance: "distance", hideArrow: "hideArrow", placement: "placement", sameWidth: "sameWidth", visible: "visible" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqTooltip = __decorate([
    ProxyCmp({
        inputs: ['alwaysVisible', 'displayOn', 'distance', 'hideArrow', 'placement', 'sameWidth', 'visible'],
        methods: ['show', 'hide']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BqTooltip);
export { BqTooltip };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqTooltip, decorators: [{
            type: Component,
            args: [{
                    selector: 'bq-tooltip',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['alwaysVisible', 'displayOn', 'distance', 'hideArrow', 'placement', 'sameWidth', 'visible'],
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL2JlZXEtYW5ndWxhci9zcmMvZGlyZWN0aXZlcy9jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQkFBb0I7QUFDcEIsOENBQThDO0FBQzlDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFnQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEgsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFlaEUsSUFBTSxXQUFXLEdBQWpCLE1BQU0sV0FBVztJQUVwQjs7S0FFQztJQUNILElBQUksVUFBVSxDQUFDLENBQXVDLElBQUcsQ0FBQztJQUFBLENBQUM7SUFDekQ7O0tBRUM7SUFDSCxJQUFJLFFBQVEsQ0FBQyxDQUFxQyxJQUFHLENBQUM7SUFBQSxDQUFDO0lBQ3JEOztLQUVDO0lBQ0gsSUFBSSxRQUFRLENBQUMsQ0FBcUMsSUFBRyxDQUFDO0lBQUEsQ0FBQztJQUNyRDs7O0tBR0M7SUFDSCxJQUFJLFdBQVcsQ0FBQyxDQUF3QyxJQUFHLENBQUM7SUFBQSxDQUFDO0lBQzNEOztLQUVDO0lBQ0gsSUFBSSxNQUFNLENBQUMsQ0FBbUMsSUFBRyxDQUFDO0lBQUEsQ0FBQztJQUNqRDs7S0FFQztJQUNILElBQUksSUFBSSxDQUFDLENBQWlDLElBQUcsQ0FBQztJQUFBLENBQUM7SUFDL0MsWUFBWSxDQUFvQixFQUFFLENBQWEsRUFBWSxDQUFTO1FBQVQsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUNsRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDMUIsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFLFNB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QnpELFNBQVMsQ0FrQ3JCOzs0RkFsQ1ksU0FBUztrQkFQckIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLHVFQUF1RTtvQkFDdkUsTUFBTSxFQUFFLENBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDO2lCQUNyRyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBhdXRvLWdlbmVyYXRlZCBhbmd1bGFyIGRpcmVjdGl2ZSBwcm94aWVzICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHJveHlDbXAsIHByb3h5T3V0cHV0cyB9IGZyb20gJy4vYW5ndWxhci1jb21wb25lbnQtbGliL3V0aWxzJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJ0BiZWVxL2NvcmUnO1xuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydhcHBlYXJhbmNlJywgJ2Rpc2FibGVkJywgJ2V4cGFuZGVkJywgJ25vQW5pbWF0aW9uJywgJ3JvdGF0ZScsICdzaXplJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1hY2NvcmRpb24nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2FwcGVhcmFuY2UnLCAnZGlzYWJsZWQnLCAnZXhwYW5kZWQnLCAnbm9BbmltYXRpb24nLCAncm90YXRlJywgJ3NpemUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnFBY2NvcmRpb24ge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcUFjY29yZGlvbkVsZW1lbnQ7XG4gICAgLyoqXG4gICAqIFRoZSBhcHBlYXJhbmNlIHN0eWxlIG9mIHRoZSBBY2NvcmRpb25cbiAgICovXG4gIHNldCBhcHBlYXJhbmNlKF86IENvbXBvbmVudHMuQnFBY2NvcmRpb25bJ2FwcGVhcmFuY2UnXSkge307XG4gICAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBBY2NvcmRpb24gaXMgZGlzYWJsZWRcbiAgICovXG4gIHNldCBkaXNhYmxlZChfOiBDb21wb25lbnRzLkJxQWNjb3JkaW9uWydkaXNhYmxlZCddKSB7fTtcbiAgICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIEFjY29yZGlvbiBpcyBleHBhbmRlZFxuICAgKi9cbiAgc2V0IGV4cGFuZGVkKF86IENvbXBvbmVudHMuQnFBY2NvcmRpb25bJ2V4cGFuZGVkJ10pIHt9O1xuICAgIC8qKlxuICAgKiBBbmltYXRpb24gaXMgc2V0IHRocm91Z2ggSlMgd2hlbiB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IENTUyBjYWxjLXNpemUoKVxuSWYgdHJ1ZSwgdGhlIEFjY29yZGlvbiBhbmltYXRpb24sIHdpbGwgYmUgZGlzYWJsZWQuIE5vIGFuaW1hdGlvbiB3aWxsIGJlIGFwcGxpZWQuXG4gICAqL1xuICBzZXQgbm9BbmltYXRpb24oXzogQ29tcG9uZW50cy5CcUFjY29yZGlvblsnbm9BbmltYXRpb24nXSkge307XG4gICAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBBY2NvcmRpb24gZXhwYW5kIGljb24gaXMgcm90YXRlIDE4MGRlZyB3aGVuIGV4cGFuZGVkXG4gICAqL1xuICBzZXQgcm90YXRlKF86IENvbXBvbmVudHMuQnFBY2NvcmRpb25bJ3JvdGF0ZSddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIEFjY29yZGlvblxuICAgKi9cbiAgc2V0IHNpemUoXzogQ29tcG9uZW50cy5CcUFjY29yZGlvblsnc2l6ZSddKSB7fTtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYnFCbHVyJywgJ2JxRm9jdXMnLCAnYnFPcGVuJywgJ2JxQWZ0ZXJPcGVuJywgJ2JxQ2xvc2UnLCAnYnFBZnRlckNsb3NlJywgJ2JxQ2xpY2snXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFBY2NvcmRpb24gZXh0ZW5kcyBDb21wb25lbnRzLkJxQWNjb3JkaW9uIHtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGFjY29yZGlvbiBsb3NlcyBmb2N1c1xuICAgKi9cbiAgYnFCbHVyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxQWNjb3JkaW9uRWxlbWVudD4+O1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgYWNjb3JkaW9uIGdldHMgZm9jdXNcbiAgICovXG4gIGJxRm9jdXM6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFBY2NvcmRpb25FbGVtZW50Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBhY2NvcmRpb24gaXMgb3BlbmVkXG4gICAqL1xuICBicU9wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFBY2NvcmRpb25FbGVtZW50Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgYWNjb3JkaW9uIGlzIG9wZW5lZFxuICAgKi9cbiAgYnFBZnRlck9wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFBY2NvcmRpb25FbGVtZW50Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBhY2NvcmRpb24gaXMgY2xvc2VkXG4gICAqL1xuICBicUNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxQWNjb3JkaW9uRWxlbWVudD4+O1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGFjY29yZGlvbiBpcyBjbG9zZWRcbiAgICovXG4gIGJxQWZ0ZXJDbG9zZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcUFjY29yZGlvbkVsZW1lbnQ+PjtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGFjY29yZGlvbiBpcyBjbGlja2VkXG4gICAqL1xuICBicUNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxQWNjb3JkaW9uRWxlbWVudD4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydhcHBlYXJhbmNlJywgJ2V4cGFuZEFsbCcsICdtdWx0aXBsZScsICdub0FuaW1hdGlvbicsICdzaXplJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1hY2NvcmRpb24tZ3JvdXAnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2FwcGVhcmFuY2UnLCAnZXhwYW5kQWxsJywgJ211bHRpcGxlJywgJ25vQW5pbWF0aW9uJywgJ3NpemUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnFBY2NvcmRpb25Hcm91cCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxQWNjb3JkaW9uR3JvdXBFbGVtZW50O1xuICAgIC8qKlxuICAgKiBUaGUgYXBwZWFyYW5jZSBzdHlsZSBvZiBhY2NvcmRpb24gdG8gYmUgYXBwbGllZCB0byBhbGwgYWNjb3JkaW9uc1xuICAgKi9cbiAgc2V0IGFwcGVhcmFuY2UoXzogQ29tcG9uZW50cy5CcUFjY29yZGlvbkdyb3VwWydhcHBlYXJhbmNlJ10pIHt9O1xuICAgIC8qKlxuICAgKiBJZiB0cnVlIGFsbCBhY2NvcmRpb25zIGFyZSBleHBhbmRlZFxuICAgKi9cbiAgc2V0IGV4cGFuZEFsbChfOiBDb21wb25lbnRzLkJxQWNjb3JkaW9uR3JvdXBbJ2V4cGFuZEFsbCddKSB7fTtcbiAgICAvKipcbiAgICogQW5pbWF0aW9uIGlzIHNldCB0aHJvdWdoIEpTIHdoZW4gdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBDU1MgY2FsYy1zaXplKClcbklmIHRydWUsIHRoZSBhY2NvcmRpb24gYW5pbWF0aW9uLCB3aWxsIGJlIGRpc2FibGVkLiBObyBhbmltYXRpb24gd2lsbCBiZSBhcHBsaWVkLlxuICAgKi9cbiAgc2V0IG5vQW5pbWF0aW9uKF86IENvbXBvbmVudHMuQnFBY2NvcmRpb25Hcm91cFsnbm9BbmltYXRpb24nXSkge307XG4gICAgLyoqXG4gICAqIElmIHRydWUgbXVsdGlwbGUgYWNjb3JkaW9ucyBjYW4gYmUgZXhwYW5kZWQgYXQgdGhlIHNhbWUgdGltZVxuICAgKi9cbiAgc2V0IG11bHRpcGxlKF86IENvbXBvbmVudHMuQnFBY2NvcmRpb25Hcm91cFsnbXVsdGlwbGUnXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBzaXplIG9mIGFjY29yZGlvbiB0byBiZSBhcHBsaWVkIHRvIGFsbCBhY2NvcmRpb25zXG4gICAqL1xuICBzZXQgc2l6ZShfOiBDb21wb25lbnRzLkJxQWNjb3JkaW9uR3JvdXBbJ3NpemUnXSkge307XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxQWNjb3JkaW9uR3JvdXAgZXh0ZW5kcyBDb21wb25lbnRzLkJxQWNjb3JkaW9uR3JvdXAge31cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYXV0b0Rpc21pc3MnLCAnYm9yZGVyJywgJ2Rpc2FibGVDbG9zZScsICdoaWRlSWNvbicsICdvcGVuJywgJ3N0aWNreScsICd0aW1lJywgJ3R5cGUnXSxcbiAgbWV0aG9kczogWydoaWRlJywgJ3Nob3cnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLWFsZXJ0JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydhdXRvRGlzbWlzcycsICdib3JkZXInLCAnZGlzYWJsZUNsb3NlJywgJ2hpZGVJY29uJywgJ29wZW4nLCAnc3RpY2t5JywgJ3RpbWUnLCAndHlwZSddLFxufSlcbmV4cG9ydCBjbGFzcyBCcUFsZXJ0IHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFBbGVydEVsZW1lbnQ7XG4gICAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBhbGVydCB3aWxsIGF1dG9tYXRpY2FsbHkgaGlkZSBhZnRlciB0aGUgc3BlY2lmaWVkIGFtb3VudCBvZiB0aW1lXG4gICAqL1xuICBzZXQgYXV0b0Rpc21pc3MoXzogQ29tcG9uZW50cy5CcUFsZXJ0WydhdXRvRGlzbWlzcyddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIGNvcm5lciByYWRpdXMgb2YgdGhlIGFsZXJ0IGNvbXBvbmVudFxuICAgKi9cbiAgc2V0IGJvcmRlcihfOiBDb21wb25lbnRzLkJxQWxlcnRbJ2JvcmRlciddKSB7fTtcbiAgICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGNsb3NlIGJ1dHRvbiBhdCB0aGUgdG9wIHJpZ2h0IG9mIHRoZSBhbGVydCB3b24ndCBiZSBzaG93blxuICAgKi9cbiAgc2V0IGRpc2FibGVDbG9zZShfOiBDb21wb25lbnRzLkJxQWxlcnRbJ2Rpc2FibGVDbG9zZSddKSB7fTtcbiAgICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGFsZXJ0IGljb24gd29uJ3QgYmUgc2hvd25cbiAgICovXG4gIHNldCBoaWRlSWNvbihfOiBDb21wb25lbnRzLkJxQWxlcnRbJ2hpZGVJY29uJ10pIHt9O1xuICAgIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgYWxlcnQgd2lsbCBiZSBzaG93blxuICAgKi9cbiAgc2V0IG9wZW4oXzogQ29tcG9uZW50cy5CcUFsZXJ0WydvcGVuJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgbGVuZ3RoIG9mIHRpbWUsIGluIG1pbGxpc2Vjb25kcywgYWZ0ZXIgd2hpY2ggdGhlIGFsZXJ0IHdpbGwgY2xvc2UgaXRzZWxmLiBPbmx5IHZhbGlkIGlmIGBhdXRvRGlzbWlzcz1cInRydWVcImBcbiAgICovXG4gIHNldCB0aW1lKF86IENvbXBvbmVudHMuQnFBbGVydFsndGltZSddKSB7fTtcbiAgICAvKipcbiAgICogVHlwZSBvZiBBbGVydFxuICAgKi9cbiAgc2V0IHR5cGUoXzogQ29tcG9uZW50cy5CcUFsZXJ0Wyd0eXBlJ10pIHt9O1xuICAgIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgYWxlcnQgY29tcG9uZW50IHdpbGwgcmVtYWluIGZpeGVkIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UsIG9jY3VweWluZyB0aGUgZnVsbCB2aWV3cG9ydFxuICAgKi9cbiAgc2V0IHN0aWNreShfOiBDb21wb25lbnRzLkJxQWxlcnRbJ3N0aWNreSddKSB7fTtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYnFIaWRlJywgJ2JxU2hvdycsICdicUFmdGVyU2hvdycsICdicUFmdGVySGlkZSddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcUFsZXJ0IGV4dGVuZHMgQ29tcG9uZW50cy5CcUFsZXJ0IHtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGFsZXJ0IGlzIGhpZGRlblxuICAgKi9cbiAgYnFIaWRlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8YW55Pj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBhbGVydCBpcyBzaG93blxuICAgKi9cbiAgYnFTaG93OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8YW55Pj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgYWxlcnQgaGFzIGJlZW4gc2hvd25cbiAgICovXG4gIGJxQWZ0ZXJTaG93OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8YW55Pj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgYWxlcnQgaGFzIGJlZW4gaGlkZGVuXG4gICAqL1xuICBicUFmdGVySGlkZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PGFueT4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydhbHRUZXh0JywgJ2ltYWdlJywgJ2luaXRpYWxzJywgJ2xhYmVsJywgJ3NoYXBlJywgJ3NpemUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLWF2YXRhcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYWx0VGV4dCcsICdpbWFnZScsICdpbml0aWFscycsICdsYWJlbCcsICdzaGFwZScsICdzaXplJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJxQXZhdGFyIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFBdmF0YXJFbGVtZW50O1xuICAgIC8qKlxuICAgKiBBbHRlcm5hdGUgdGV4dCBmb3IgdGhlIGF2YXRhciBpbWFnZSBpZiB0aGUgaW1hZ2UgY2Fubm90IGJlIGRpc3BsYXllZFxuICAgKi9cbiAgc2V0IGFsdFRleHQoXzogQ29tcG9uZW50cy5CcUF2YXRhclsnYWx0VGV4dCddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIGltYWdlIHNvdXJjZSB0byBsb2FkIG9uIHRoZSBhdmF0YXIgKHRoaXMgY2FuIGJlIGFsc28gYSBiYXNlNjQgZW5jb2RlZCBpbWFnZSlcbiAgICovXG4gIHNldCBpbWFnZShfOiBDb21wb25lbnRzLkJxQXZhdGFyWydpbWFnZSddKSB7fTtcbiAgICAvKipcbiAgICogQSB0ZXh0IHRvIHVzZSBmb3IgZGVzY3JpYmluZyB0aGUgYXZhdGFyIG9uIGFzc2lzdGl2ZSBkZXZpY2VzXG4gICAqL1xuICBzZXQgbGFiZWwoXzogQ29tcG9uZW50cy5CcUF2YXRhclsnbGFiZWwnXSkge307XG4gICAgLyoqXG4gICAqIFRoZSB0ZXh0IHRvIGRpc3BsYXkgb24gYXZhdGFyXG4gICAqL1xuICBzZXQgaW5pdGlhbHMoXzogQ29tcG9uZW50cy5CcUF2YXRhclsnaW5pdGlhbHMnXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBzaGFwZSBvZiB0aGUgYXZhdGFyXG4gICAqL1xuICBzZXQgc2hhcGUoXzogQ29tcG9uZW50cy5CcUF2YXRhclsnc2hhcGUnXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBhdmF0YXJcbiAgICovXG4gIHNldCBzaXplKF86IENvbXBvbmVudHMuQnFBdmF0YXJbJ3NpemUnXSkge307XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxQXZhdGFyIGV4dGVuZHMgQ29tcG9uZW50cy5CcUF2YXRhciB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydiYWNrZ3JvdW5kQ29sb3InLCAnc2l6ZScsICd0ZXh0Q29sb3InXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLWJhZGdlJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydiYWNrZ3JvdW5kQ29sb3InLCAnc2l6ZScsICd0ZXh0Q29sb3InXSxcbn0pXG5leHBvcnQgY2xhc3MgQnFCYWRnZSB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxQmFkZ2VFbGVtZW50O1xuICAgIC8qKlxuICAgKiBCYWRnZSBiYWNrZ3JvdW5kIGNvbG9yLiBUaGUgdmFsdWUgc2hvdWxkIGJlIGEgdmFsaWQgdmFsdWUgb2YgdGhlIHBhbGV0dGUgY29sb3JcbiAgICovXG4gIHNldCBiYWNrZ3JvdW5kQ29sb3IoXzogQ29tcG9uZW50cy5CcUJhZGdlWydiYWNrZ3JvdW5kQ29sb3InXSkge307XG4gICAgLyoqXG4gICAqIEJhZGdlIG51bWJlciBjb2xvci4gVGhlIHZhbHVlIHNob3VsZCBiZSBhIHZhbGlkIHZhbHVlIG9mIHRoZSBwYWxldHRlIGNvbG9yXG4gICAqL1xuICBzZXQgdGV4dENvbG9yKF86IENvbXBvbmVudHMuQnFCYWRnZVsndGV4dENvbG9yJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgYmFkZ2UuIFJlbGV2YW50IGlmIGJhZGdlIGhhcyBubyBjb250ZW50LlxuICAgKi9cbiAgc2V0IHNpemUoXzogQ29tcG9uZW50cy5CcUJhZGdlWydzaXplJ10pIHt9O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcUJhZGdlIGV4dGVuZHMgQ29tcG9uZW50cy5CcUJhZGdlIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2xhYmVsJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1icmVhZGNydW1iJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydsYWJlbCddLFxufSlcbmV4cG9ydCBjbGFzcyBCcUJyZWFkY3J1bWIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcUJyZWFkY3J1bWJFbGVtZW50O1xuICAgIC8qKlxuICAgKiBUaGUgYGFyaWEtbGFiZWxgIGF0dHJpYnV0ZSB0byBkZXNjcmliZSB0aGUgdHlwZSBvZiBuYXZpZ2F0aW9uXG4gICAqL1xuICBzZXQgbGFiZWwoXzogQ29tcG9uZW50cy5CcUJyZWFkY3J1bWJbJ2xhYmVsJ10pIHt9O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcUJyZWFkY3J1bWIgZXh0ZW5kcyBDb21wb25lbnRzLkJxQnJlYWRjcnVtYiB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydocmVmJywgJ3JlbCcsICd0YXJnZXQnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLWJyZWFkY3J1bWItaXRlbScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnaHJlZicsICdyZWwnLCAndGFyZ2V0J10sXG59KVxuZXhwb3J0IGNsYXNzIEJxQnJlYWRjcnVtYkl0ZW0ge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcUJyZWFkY3J1bWJJdGVtRWxlbWVudDtcbiAgICAvKipcbiAgICogSWYgc2V0LCB0aGUgYnJlYWRjcnVtYiBpdGVtIHdpbGwgYmUgcmVuZGVyZWQgYXMgYW4gYDxhPmAgd2l0aCB0aGlzIGBocmVmYCwgb3RoZXJ3aXNlLCBhIGA8YnV0dG9uPmAgd2lsbCBiZSByZW5kZXJlZC5cbiAgICovXG4gIHNldCBocmVmKF86IENvbXBvbmVudHMuQnFCcmVhZGNydW1iSXRlbVsnaHJlZiddKSB7fTtcbiAgICAvKipcbiAgICogV2hlcmUgdG8gZGlzcGxheSB0aGUgbGluayBpbiB0aGUgYnJvd3NlciBjb250ZXh0LiBSZWxldmFudCBvbmx5IGlmIGBocmVmYCBpcyBzZXQuXG4gICAqL1xuICBzZXQgdGFyZ2V0KF86IENvbXBvbmVudHMuQnFCcmVhZGNydW1iSXRlbVsndGFyZ2V0J10pIHt9O1xuICAgIC8qKlxuICAgKiBXaGVyZSB0byBkaXNwbGF5IHRoZSBsaW5rIGluIHRoZSBicm93c2VyIGNvbnRleHQuIFJlbGV2YW50IG9ubHkgaWYgYGhyZWZgIGlzIHNldC5cbiAgICovXG4gIHNldCByZWwoXzogQ29tcG9uZW50cy5CcUJyZWFkY3J1bWJJdGVtWydyZWwnXSkge307XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2JxQmx1cicsICdicUZvY3VzJywgJ2JxQ2xpY2snXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFCcmVhZGNydW1iSXRlbSBleHRlbmRzIENvbXBvbmVudHMuQnFCcmVhZGNydW1iSXRlbSB7XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIGl0ZW0gbG9zZXMgZm9jdXNcbiAgICovXG4gIGJxQmx1cjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcUJyZWFkY3J1bWJJdGVtRWxlbWVudD4+O1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiBpdGVtIGlzIGZvY3VzZWRcbiAgICovXG4gIGJxRm9jdXM6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFCcmVhZGNydW1iSXRlbUVsZW1lbnQ+PjtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gaXRlbSBpcyBjbGlja2VkXG4gICAqL1xuICBicUNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxQnJlYWRjcnVtYkl0ZW1FbGVtZW50Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2FwcGVhcmFuY2UnLCAnYmxvY2snLCAnYm9yZGVyJywgJ2Rpc2FibGVkJywgJ2Rvd25sb2FkJywgJ2hyZWYnLCAnanVzdGlmeUNvbnRlbnQnLCAnbG9hZGluZycsICdzaXplJywgJ3RhcmdldCcsICd0eXBlJywgJ3ZhcmlhbnQnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLWJ1dHRvbicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYXBwZWFyYW5jZScsICdibG9jaycsICdib3JkZXInLCAnZGlzYWJsZWQnLCAnZG93bmxvYWQnLCAnaHJlZicsICdqdXN0aWZ5Q29udGVudCcsICdsb2FkaW5nJywgJ3NpemUnLCAndGFyZ2V0JywgJ3R5cGUnLCAndmFyaWFudCddLFxufSlcbmV4cG9ydCBjbGFzcyBCcUJ1dHRvbiB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxQnV0dG9uRWxlbWVudDtcbiAgICAvKipcbiAgICogVGhlIGFwcGVhcmFuY2Ugc3R5bGUgdG8gYXBwbHkgdG8gdGhlIGJ1dHRvblxuICAgKi9cbiAgc2V0IGFwcGVhcmFuY2UoXzogQ29tcG9uZW50cy5CcUJ1dHRvblsnYXBwZWFyYW5jZSddKSB7fTtcbiAgICAvKipcbiAgICogSWYgYHRydWVgLCBpdCB3aWxsIG1ha2UgdGhlIGJ1dHRvbiBmaXQgdG8gaXRzIHBhcmVudCB3aWR0aC5cbiAgICovXG4gIHNldCBibG9jayhfOiBDb21wb25lbnRzLkJxQnV0dG9uWydibG9jayddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIGNvcm5lciByYWRpdXMgb2YgdGhlIGJ1dHRvblxuICAgKi9cbiAgc2V0IGJvcmRlcihfOiBDb21wb25lbnRzLkJxQnV0dG9uWydib3JkZXInXSkge307XG4gICAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBidXR0b24gd2lsbCBiZSBkaXNhYmxlZCAobm8gaW50ZXJhY3Rpb24gYWxsb3dlZClcbiAgICovXG4gIHNldCBkaXNhYmxlZChfOiBDb21wb25lbnRzLkJxQnV0dG9uWydkaXNhYmxlZCddKSB7fTtcbiAgICAvKipcbiAgICogVGVsbHMgdGhlIGJyb3dzZXIgdG8gdHJlYXQgdGhlIGxpbmtlZCBVUkwgYXMgYSBkb3dubG9hZC4gT25seSB1c2VkIHdoZW4gYGhyZWZgIGlzIHNldC5cbkRldGFpbHM6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9hI2F0dHItZG93bmxvYWRcbiAgICovXG4gIHNldCBkb3dubG9hZChfOiBDb21wb25lbnRzLkJxQnV0dG9uWydkb3dubG9hZCddKSB7fTtcbiAgICAvKipcbiAgICogV2hlbiBzZXQsIHRoZSB1bmRlcmx5aW5nIGJ1dHRvbiB3aWxsIGJlIHJlbmRlcmVkIGFzIGFuIGA8YT5gIHdpdGggdGhpcyBgaHJlZmAgaW5zdGVhZCBvZiBhIGA8YnV0dG9uPmBcbiAgICovXG4gIHNldCBocmVmKF86IENvbXBvbmVudHMuQnFCdXR0b25bJ2hyZWYnXSkge307XG4gICAgLyoqXG4gICAqIEl0IGRldGVybWluYXRlIGhvdyB0aGUgY29udGVudCBzaG91bGQgYmUgYWxpZ25lZFxuICAgKi9cbiAgc2V0IGp1c3RpZnlDb250ZW50KF86IENvbXBvbmVudHMuQnFCdXR0b25bJ2p1c3RpZnlDb250ZW50J10pIHt9O1xuICAgIC8qKlxuICAgKiBJZiBgdHJ1ZWAgaXQgd2lsbCBkaXNwbGF5IHRoZSBidXR0b24gaW4gYSBsb2FkaW5nIHN0YXRlXG4gICAqL1xuICBzZXQgbG9hZGluZyhfOiBDb21wb25lbnRzLkJxQnV0dG9uWydsb2FkaW5nJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgYnV0dG9uXG4gICAqL1xuICBzZXQgc2l6ZShfOiBDb21wb25lbnRzLkJxQnV0dG9uWydzaXplJ10pIHt9O1xuICAgIC8qKlxuICAgKiBXaGVyZSB0byBkaXNwbGF5IHRoZSBsaW5rZWQgVVJMLCBhcyB0aGUgbmFtZSBmb3IgYSBicm93c2luZyBjb250ZXh0IChhIGB0YWJgLCBgd2luZG93YCwgb3IgYDxpZnJhbWU+YClcbkRldGFpbHM6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9hI2F0dHItdGFyZ2V0XG4gICAqL1xuICBzZXQgdGFyZ2V0KF86IENvbXBvbmVudHMuQnFCdXR0b25bJ3RhcmdldCddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIGRlZmF1bHQgYmVoYXZpb3Igb2YgdGhlIGJ1dHRvblxuICAgKi9cbiAgc2V0IHR5cGUoXzogQ29tcG9uZW50cy5CcUJ1dHRvblsndHlwZSddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIHZhcmlhbnQgb2YgYnV0dG9uIHRvIGFwcGx5IG9uIHRvcCBvZiB0aGUgYXBwZWFyYW5jZSAoYXBwbGljYWJsZSBvbmx5IHRvIGBhcHBlYXJhbmNlPVwicHJpbWFyeVwiYClcbiAgICovXG4gIHNldCB2YXJpYW50KF86IENvbXBvbmVudHMuQnFCdXR0b25bJ3ZhcmlhbnQnXSkge307XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2JxQmx1cicsICdicUZvY3VzJywgJ2JxQ2xpY2snXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFCdXR0b24gZXh0ZW5kcyBDb21wb25lbnRzLkJxQnV0dG9uIHtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGJ1dHRvbiBsb3NlcyBmb2N1c1xuICAgKi9cbiAgYnFCbHVyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxQnV0dG9uRWxlbWVudD4+O1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWRcbiAgICovXG4gIGJxRm9jdXM6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFCdXR0b25FbGVtZW50Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIGJ1dHRvbiBnZXRzIGZvY3VzXG4gICAqL1xuICBicUNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxQnV0dG9uRWxlbWVudD4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydib3JkZXInLCAndHlwZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtY2FyZCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYm9yZGVyJywgJ3R5cGUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnFDYXJkIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFDYXJkRWxlbWVudDtcbiAgICAvKipcbiAgICogVHlwZSBvZiBjYXJkIGNvbXBvbmVudFxuICAgKi9cbiAgc2V0IHR5cGUoXzogQ29tcG9uZW50cy5CcUNhcmRbJ3R5cGUnXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBjb3JuZXIgcmFkaXVzIG9mIHRoZSBjYXJkIGNvbXBvbmVudFxuICAgKi9cbiAgc2V0IGJvcmRlcihfOiBDb21wb25lbnRzLkJxQ2FyZFsnYm9yZGVyJ10pIHt9O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcUNhcmQgZXh0ZW5kcyBDb21wb25lbnRzLkJxQ2FyZCB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydiYWNrZ3JvdW5kT25Ib3ZlcicsICdjaGVja2VkJywgJ2Rpc2FibGVkJywgJ2Zvcm1JZCcsICdmb3JtVmFsaWRhdGlvbk1lc3NhZ2UnLCAnaW5kZXRlcm1pbmF0ZScsICduYW1lJywgJ3JlcXVpcmVkJywgJ3ZhbHVlJ10sXG4gIG1ldGhvZHM6IFsndkNsaWNrJywgJ3ZGb2N1cycsICd2Qmx1ciddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtY2hlY2tib3gnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2JhY2tncm91bmRPbkhvdmVyJywgJ2NoZWNrZWQnLCAnZGlzYWJsZWQnLCAnZm9ybUlkJywgJ2Zvcm1WYWxpZGF0aW9uTWVzc2FnZScsICdpbmRldGVybWluYXRlJywgJ25hbWUnLCAncmVxdWlyZWQnLCAndmFsdWUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnFDaGVja2JveCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxQ2hlY2tib3hFbGVtZW50O1xuICAgIC8qKlxuICAgKiBJZiB0cnVlIGNoZWNrYm94IGRpc3BsYXlzIGJhY2tncm91bmQgb24gaG92ZXJcbiAgICovXG4gIHNldCBiYWNrZ3JvdW5kT25Ib3ZlcihfOiBDb21wb25lbnRzLkJxQ2hlY2tib3hbJ2JhY2tncm91bmRPbkhvdmVyJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgZm9ybSBJRCB0aGF0IHRoZSBjaGVja2JveCBpcyBhc3NvY2lhdGVkIHdpdGhcbiAgICovXG4gIHNldCBmb3JtSWQoXzogQ29tcG9uZW50cy5CcUNoZWNrYm94Wydmb3JtSWQnXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBuYXRpdmUgZm9ybSB2YWxpZGF0aW9uIG1lc3NhZ2VcbiAgICovXG4gIHNldCBmb3JtVmFsaWRhdGlvbk1lc3NhZ2UoXzogQ29tcG9uZW50cy5CcUNoZWNrYm94Wydmb3JtVmFsaWRhdGlvbk1lc3NhZ2UnXSkge307XG4gICAgLyoqXG4gICAqIElmIHRydWUgY2hlY2tib3ggaXMgY2hlY2tlZFxuICAgKi9cbiAgc2V0IGNoZWNrZWQoXzogQ29tcG9uZW50cy5CcUNoZWNrYm94WydjaGVja2VkJ10pIHt9O1xuICAgIC8qKlxuICAgKiBJZiB0cnVlIGNoZWNrYm94IGlzIGRpc2FibGVkXG4gICAqL1xuICBzZXQgZGlzYWJsZWQoXzogQ29tcG9uZW50cy5CcUNoZWNrYm94WydkaXNhYmxlZCddKSB7fTtcbiAgICAvKipcbiAgICogQSBzdGF0ZSB0aGF0IGlzIG5laXRoZXIgY2hlY2tlZCBub3IgdW5jaGVja2VkXG4gICAqL1xuICBzZXQgaW5kZXRlcm1pbmF0ZShfOiBDb21wb25lbnRzLkJxQ2hlY2tib3hbJ2luZGV0ZXJtaW5hdGUnXSkge307XG4gICAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIEhUTUwgaW5wdXQgZm9ybSBjb250cm9sLiBTdWJtaXR0ZWQgd2l0aCB0aGUgZm9ybSBhcyBwYXJ0IG9mIGEgbmFtZS92YWx1ZSBwYWlyLlxuICAgKi9cbiAgc2V0IG5hbWUoXzogQ29tcG9uZW50cy5CcUNoZWNrYm94WyduYW1lJ10pIHt9O1xuICAgIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGl0IHdpbGwgaW5kaWNhdGUgdGhhdCB0aGUgdXNlciBtdXN0IHNwZWNpZnkgYSB2YWx1ZSBmb3IgdGhlIGNoZWNrYm94IGJlZm9yZSB0aGUgb3duaW5nIGZvcm0gY2FuIGJlIHN1Ym1pdHRlZFxuICAgKi9cbiAgc2V0IHJlcXVpcmVkKF86IENvbXBvbmVudHMuQnFDaGVja2JveFsncmVxdWlyZWQnXSkge307XG4gICAgLyoqXG4gICAqIEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdmFsdWUgb2YgdGhlIGNoZWNrYm94LiBQcmltYXJpbHkgdXNlZCB0byBkaWZmZXJlbnRpYXRlIGEgbGlzdCBvZiByZWxhdGVkIGNoZWNrYm94ZXMgdGhhdCBoYXZlIHRoZSBzYW1lIG5hbWUuXG4gICAqL1xuICBzZXQgdmFsdWUoXzogQ29tcG9uZW50cy5CcUNoZWNrYm94Wyd2YWx1ZSddKSB7fTtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYnFDaGFuZ2UnLCAnYnFGb2N1cycsICdicUJsdXInXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFDaGVja2JveCBleHRlbmRzIENvbXBvbmVudHMuQnFDaGVja2JveCB7XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBjaGVja2JveCBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBicUNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHsgY2hlY2tlZDogYm9vbGVhbiB9Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBjaGVja2JveCBnZXRzIGZvY3VzXG4gICAqL1xuICBicUZvY3VzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxQ2hlY2tib3hFbGVtZW50Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBjaGVja2JveCBsb3NlcyBmb2N1c1xuICAgKi9cbiAgYnFCbHVyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxQ2hlY2tib3hFbGVtZW50Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ3NpemUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLWNvbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnc2l6ZSddLFxufSlcbmV4cG9ydCBjbGFzcyBCcUNvbCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxQ29sRWxlbWVudDtcbiAgICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIGNvbHVtbiwgZXhwcmVzc2VkIGFzIGEgZnJhY3Rpb24gb2YgMTIgKGUuZy4sIDYgZm9yIGhhbGYgd2lkdGgpLlxuQ2FuIGFsc28gYmUgXCJhdXRvXCIgZm9yIGF1dG9tYXRpYyBzaXppbmcuXG4gICAqL1xuICBzZXQgc2l6ZShfOiBDb21wb25lbnRzLkJxQ29sWydzaXplJ10pIHt9O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcUNvbCBleHRlbmRzIENvbXBvbmVudHMuQnFDb2wge31cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYXV0b2ZvY3VzJywgJ2NsZWFyQnV0dG9uTGFiZWwnLCAnZGlzYWJsZUNsZWFyJywgJ2Rpc2FibGVkJywgJ2Rpc3RhbmNlJywgJ2ZpcnN0RGF5T2ZXZWVrJywgJ2Zvcm0nLCAnZm9ybVZhbGlkYXRpb25NZXNzYWdlJywgJ2Zvcm1hdE9wdGlvbnMnLCAnaXNEYXRlRGlzYWxsb3dlZCcsICdsb2NhbGUnLCAnbWF4JywgJ21pbicsICdtb250aHMnLCAnbW9udGhzUGVyVmlldycsICduYW1lJywgJ29wZW4nLCAncGFuZWxIZWlnaHQnLCAncGxhY2Vob2xkZXInLCAncGxhY2VtZW50JywgJ3JlcXVpcmVkJywgJ3Nob3dPdXRzaWRlRGF5cycsICdza2lkZGluZycsICdzdHJhdGVneScsICd0ZW50YXRpdmUnLCAndHlwZScsICd2YWxpZGF0aW9uU3RhdHVzJywgJ3ZhbHVlJ10sXG4gIG1ldGhvZHM6IFsnY2xlYXInXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLWRhdGUtcGlja2VyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydhdXRvZm9jdXMnLCAnY2xlYXJCdXR0b25MYWJlbCcsICdkaXNhYmxlQ2xlYXInLCAnZGlzYWJsZWQnLCAnZGlzdGFuY2UnLCAnZmlyc3REYXlPZldlZWsnLCAnZm9ybScsICdmb3JtVmFsaWRhdGlvbk1lc3NhZ2UnLCAnZm9ybWF0T3B0aW9ucycsICdpc0RhdGVEaXNhbGxvd2VkJywgJ2xvY2FsZScsICdtYXgnLCAnbWluJywgJ21vbnRocycsICdtb250aHNQZXJWaWV3JywgJ25hbWUnLCAnb3BlbicsICdwYW5lbEhlaWdodCcsICdwbGFjZWhvbGRlcicsICdwbGFjZW1lbnQnLCAncmVxdWlyZWQnLCAnc2hvd091dHNpZGVEYXlzJywgJ3NraWRkaW5nJywgJ3N0cmF0ZWd5JywgJ3RlbnRhdGl2ZScsICd0eXBlJywgJ3ZhbGlkYXRpb25TdGF0dXMnLCAndmFsdWUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnFEYXRlUGlja2VyIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFEYXRlUGlja2VyRWxlbWVudDtcbiAgICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgRGF0ZSBwaWNrZXIgaW5wdXQgd2lsbCBiZSBmb2N1c2VkIG9uIGNvbXBvbmVudCByZW5kZXJcbiAgICovXG4gIHNldCBhdXRvZm9jdXMoXzogQ29tcG9uZW50cy5CcURhdGVQaWNrZXJbJ2F1dG9mb2N1cyddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIGNsZWFyIGJ1dHRvbiBhcmlhIGxhYmVsXG4gICAqL1xuICBzZXQgY2xlYXJCdXR0b25MYWJlbChfOiBDb21wb25lbnRzLkJxRGF0ZVBpY2tlclsnY2xlYXJCdXR0b25MYWJlbCddKSB7fTtcbiAgICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgY2xlYXIgYnV0dG9uIHdvbid0IGJlIGRpc3BsYXllZFxuICAgKi9cbiAgc2V0IGRpc2FibGVDbGVhcihfOiBDb21wb25lbnRzLkJxRGF0ZVBpY2tlclsnZGlzYWJsZUNsZWFyJ10pIHt9O1xuICAgIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgRGF0ZSBwaWNrZXIgaW5wdXQgaXMgZGlzYWJsZWQgb3Igbm90LlxuSWYgYHRydWVgLCB0aGUgRGF0ZSBwaWNrZXIgaXMgZGlzYWJsZWQgYW5kIGNhbm5vdCBiZSBpbnRlcmFjdGVkIHdpdGguXG4gICAqL1xuICBzZXQgZGlzYWJsZWQoXzogQ29tcG9uZW50cy5CcURhdGVQaWNrZXJbJ2Rpc2FibGVkJ10pIHt9O1xuICAgIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSBkaXN0YW5jZSAoZ3V0dGVyIG9yIG1hcmdpbikgYmV0d2VlbiB0aGUgRGF0ZSBwaWNrZXIgcGFuZWwgYW5kIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgc2V0IGRpc3RhbmNlKF86IENvbXBvbmVudHMuQnFEYXRlUGlja2VyWydkaXN0YW5jZSddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlaywgd2hlcmUgU3VuZGF5IGlzIDAsIE1vbmRheSBpcyAxLCBldGNcbiAgICovXG4gIHNldCBmaXJzdERheU9mV2VlayhfOiBDb21wb25lbnRzLkJxRGF0ZVBpY2tlclsnZmlyc3REYXlPZldlZWsnXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBvcHRpb25zIHRvIHVzZSB3aGVuIGZvcm1hdHRpbmcgdGhlIGRpc3BsYXllZCB2YWx1ZS5cbkRldGFpbHM6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0ludGwvRGF0ZVRpbWVGb3JtYXQjdXNpbmdfb3B0aW9uc1xuICAgKi9cbiAgc2V0IGZvcm1hdE9wdGlvbnMoXzogQ29tcG9uZW50cy5CcURhdGVQaWNrZXJbJ2Zvcm1hdE9wdGlvbnMnXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgZm9ybSB0aGF0IHRoZSBEYXRlIHBpY2tlciBpbnB1dCBiZWxvbmdzIHRvLlxuICAgKi9cbiAgc2V0IGZvcm0oXzogQ29tcG9uZW50cy5CcURhdGVQaWNrZXJbJ2Zvcm0nXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBuYXRpdmUgZm9ybSB2YWxpZGF0aW9uIG1lc3NhZ2UgKG1hbmRhdG9yeSBpZiBgcmVxdWlyZWRgIGlzIHNldClcbiAgICovXG4gIHNldCBmb3JtVmFsaWRhdGlvbk1lc3NhZ2UoXzogQ29tcG9uZW50cy5CcURhdGVQaWNrZXJbJ2Zvcm1WYWxpZGF0aW9uTWVzc2FnZSddKSB7fTtcbiAgICAvKipcbiAgICogQSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgZGF0ZSBhbmQgcmV0dXJucyB0cnVlIGlmIHRoZSBkYXRlIHNob3VsZCBub3QgYmUgc2VsZWN0YWJsZVxuICAgKi9cbiAgc2V0IGlzRGF0ZURpc2FsbG93ZWQoXzogQ29tcG9uZW50cy5CcURhdGVQaWNrZXJbJ2lzRGF0ZURpc2FsbG93ZWQnXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBsb2NhbGUgZm9yIGZvcm1hdHRpbmcgZGF0ZXMuIElmIG5vdCBzZXQsIHdpbGwgdXNlIHRoZSBicm93c2VyJ3MgbG9jYWxlLlxuRGV0YWlsczogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvSW50bCNsb2NhbGVzX2FyZ3VtZW50XG4gICAqL1xuICBzZXQgbG9jYWxlKF86IENvbXBvbmVudHMuQnFEYXRlUGlja2VyWydsb2NhbGUnXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBsYXRlc3QgZGF0ZSB0aGF0IGNhbiBiZSBzZWxlY3RlZFxuICAgKi9cbiAgc2V0IG1heChfOiBDb21wb25lbnRzLkJxRGF0ZVBpY2tlclsnbWF4J10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgZWFybGllc3QgZGF0ZSB0aGF0IGNhbiBiZSBzZWxlY3RlZFxuICAgKi9cbiAgc2V0IG1pbihfOiBDb21wb25lbnRzLkJxRGF0ZVBpY2tlclsnbWluJ10pIHt9O1xuICAgIC8qKlxuICAgKiBOdW1iZXIgb2YgbW9udGhzIHRvIHNob3cgd2hlbiByYW5nZSBpcyBgdHJ1ZWBcbiAgICovXG4gIHNldCBtb250aHMoXzogQ29tcG9uZW50cy5CcURhdGVQaWNrZXJbJ21vbnRocyddKSB7fTtcbiAgICAvKipcbiAgICogU3BlY2lmaWVzIGhvdyB0aGUgbmV4dC9wcmV2aW91cyBidXR0b25zIHNob3VsZCBuYXZpZ2F0ZSB0aGUgY2FsZW5kYXIuXG4tIHNpbmdsZTogVGhlIGJ1dHRvbnMgd2lsbCBuYXZpZ2F0ZSBieSBhIHNpbmdsZSBtb250aCBhdCBhIHRpbWUuXG4tIG1vbnRoczogVGhlIGJ1dHRvbnMgd2lsbCBuYXZpZ2F0ZSBieSB0aGUgbnVtYmVyIG9mIG1vbnRocyBkaXNwbGF5ZWQgcGVyIHZpZXcuXG4gICAqL1xuICBzZXQgbW9udGhzUGVyVmlldyhfOiBDb21wb25lbnRzLkJxRGF0ZVBpY2tlclsnbW9udGhzUGVyVmlldyddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIERhdGUgcGlja2VyIGlucHV0IG5hbWUuXG4gICAqL1xuICBzZXQgbmFtZShfOiBDb21wb25lbnRzLkJxRGF0ZVBpY2tlclsnbmFtZSddKSB7fTtcbiAgICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgRGF0ZSBwaWNrZXIgcGFuZWwgd2lsbCBiZSB2aXNpYmxlLlxuICAgKi9cbiAgc2V0IG9wZW4oXzogQ29tcG9uZW50cy5CcURhdGVQaWNrZXJbJ29wZW4nXSkge307XG4gICAgLyoqXG4gICAqIFdoZW4gc2V0LCBpdCB3aWxsIG92ZXJyaWRlIHRoZSBoZWlnaHQgb2YgdGhlIERhdGUgcGlja2VyIHBhbmVsLlxuICAgKi9cbiAgc2V0IHBhbmVsSGVpZ2h0KF86IENvbXBvbmVudHMuQnFEYXRlUGlja2VyWydwYW5lbEhlaWdodCddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIERhdGUgcGlja2VyIGlucHV0IHBsYWNlaG9sZGVyIHRleHQgdmFsdWVcbiAgICovXG4gIHNldCBwbGFjZWhvbGRlcihfOiBDb21wb25lbnRzLkJxRGF0ZVBpY2tlclsncGxhY2Vob2xkZXInXSkge307XG4gICAgLyoqXG4gICAqIFBvc2l0aW9uIG9mIHRoZSBEYXRlIHBpY2tlciBwYW5lbFxuICAgKi9cbiAgc2V0IHBsYWNlbWVudChfOiBDb21wb25lbnRzLkJxRGF0ZVBpY2tlclsncGxhY2VtZW50J10pIHt9O1xuICAgIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciBvciBub3QgdGhlIERhdGUgcGlja2VyIGlucHV0IGlzIHJlcXVpcmVkIHRvIGJlIGZpbGxlZCBvdXQgYmVmb3JlIHN1Ym1pdHRpbmcgdGhlIGZvcm0uXG4gICAqL1xuICBzZXQgcmVxdWlyZWQoXzogQ29tcG9uZW50cy5CcURhdGVQaWNrZXJbJ3JlcXVpcmVkJ10pIHt9O1xuICAgIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSBza2lkZGluZyBiZXR3ZWVuIHRoZSBEYXRlIHBpY2tlciBwYW5lbCBhbmQgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBzZXQgc2tpZGRpbmcoXzogQ29tcG9uZW50cy5CcURhdGVQaWNrZXJbJ3NraWRkaW5nJ10pIHt9O1xuICAgIC8qKlxuICAgKiBXaGV0aGVyIHRvIHNob3cgZGF5cyBvdXRzaWRlIHRoZSBtb250aFxuICAgKi9cbiAgc2V0IHNob3dPdXRzaWRlRGF5cyhfOiBDb21wb25lbnRzLkJxRGF0ZVBpY2tlclsnc2hvd091dHNpZGVEYXlzJ10pIHt9O1xuICAgIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBzdHJhdGVneSB0byBwb3NpdGlvbiB0aGUgRGF0ZSBwaWNrZXIgcGFuZWxcbiAgICovXG4gIHNldCBzdHJhdGVneShfOiBDb21wb25lbnRzLkJxRGF0ZVBpY2tlclsnc3RyYXRlZ3knXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBkYXRlIHRoYXQgaXMgdGVudGF0aXZlbHkgc2VsZWN0ZWQgZS5nLiB0aGUgc3RhcnQgb2YgYSByYW5nZSBzZWxlY3Rpb25cbiAgICovXG4gIHNldCB0ZW50YXRpdmUoXzogQ29tcG9uZW50cy5CcURhdGVQaWNrZXJbJ3RlbnRhdGl2ZSddKSB7fTtcbiAgICAvKipcbiAgICogSXQgZGVmaW5lcyBob3cgdGhlIGNhbGVuZGFyIHdpbGwgYmVoYXZlLCBhbGxvd2luZyBzaW5nbGUgZGF0ZSBzZWxlY3Rpb24sIHJhbmdlIHNlbGVjdGlvbiwgb3IgbXVsdGlwbGUgZGF0ZSBzZWxlY3Rpb25cbiAgICovXG4gIHNldCB0eXBlKF86IENvbXBvbmVudHMuQnFEYXRlUGlja2VyWyd0eXBlJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgdmFsaWRhdGlvbiBzdGF0dXMgb2YgdGhlIFNlbGVjdCBpbnB1dC4gQHJlbWFya3MgVGhpcyBwcm9wZXJ0eSBpcyB1c2VkIHRvIGluZGljYXRlIHRoZSB2YWxpZGF0aW9uIHN0YXR1cyBvZiB0aGUgc2VsZWN0IGlucHV0LiBJdCBjYW4gYmUgc2V0IHRvIG9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlczpcbi0gYCdub25lJ2A6IE5vIHZhbGlkYXRpb24gc3RhdHVzIGlzIHNldC5cbi0gYCdlcnJvcidgOiBUaGUgaW5wdXQgaGFzIGEgdmFsaWRhdGlvbiBlcnJvci5cbi0gYCd3YXJuaW5nJ2A6IFRoZSBpbnB1dCBoYXMgYSB2YWxpZGF0aW9uIHdhcm5pbmcuXG4tIGAnc3VjY2VzcydgOiBUaGUgaW5wdXQgaGFzIHBhc3NlZCB2YWxpZGF0aW9uLlxuICAgKi9cbiAgc2V0IHZhbGlkYXRpb25TdGF0dXMoXzogQ29tcG9uZW50cy5CcURhdGVQaWNrZXJbJ3ZhbGlkYXRpb25TdGF0dXMnXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBzZWxlY3QgaW5wdXQgdmFsdWUgcmVwcmVzZW50cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUgb3IgcmFuZ2UgYW5kIGNhbiBiZSB1c2VkIHRvIHJlc2V0IHRoZSBmaWVsZCB0byBhIHByZXZpb3VzIHZhbHVlLlxuQWxsIGRhdGVzIGFyZSBleHBlY3RlZCBpbiBJU08tODYwMSBmb3JtYXQgKFlZWVktTU0tREQpLlxuICAgKi9cbiAgc2V0IHZhbHVlKF86IENvbXBvbmVudHMuQnFEYXRlUGlja2VyWyd2YWx1ZSddKSB7fTtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYnFCbHVyJywgJ2JxQ2hhbmdlJywgJ2JxQ2xlYXInLCAnYnFGb2N1cyddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcURhdGVQaWNrZXIgZXh0ZW5kcyBDb21wb25lbnRzLkJxRGF0ZVBpY2tlciB7XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIGVtaXR0ZWQgd2hlbiB0aGUgaW5wdXQgbG9zZXMgZm9jdXNcbiAgICovXG4gIGJxQmx1cjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcURhdGVQaWNrZXJFbGVtZW50Pj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIGVtaXR0ZWQgd2hlbiB0aGUgaW5wdXQgdmFsdWUgaGFzIGNoYW5nZWQgYW5kIHRoZSBpbnB1dCBsb3NlcyBmb2N1cy5cblRoaXMgaGFuZGxlciBpcyBjYWxsZWQgd2hlbmV2ZXIgdGhlIHVzZXIgZmluaXNoZXMgdHlwaW5nIG9yIHBhc3RpbmcgdGV4dCBpbnRvIHRoZSBpbnB1dCBmaWVsZCBhbmQgdGhlbiBjbGlja3Mgb3V0c2lkZSBvZiB0aGUgaW5wdXQgZmllbGQuXG4gICAqL1xuICBicUNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHsgdmFsdWU6IHN0cmluZzsgZWw6IEhUTUxCcURhdGVQaWNrZXJFbGVtZW50IH0+PjtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgZW1pdHRlZCB3aGVuIHRoZSBpbnB1dCB2YWx1ZSBoYXMgYmVlbiBjbGVhcmVkXG4gICAqL1xuICBicUNsZWFyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxRGF0ZVBpY2tlckVsZW1lbnQ+PjtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgZW1pdHRlZCB3aGVuIHRoZSBpbnB1dCBoYXMgcmVjZWl2ZWQgZm9jdXNcbiAgICovXG4gIGJxRm9jdXM6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFEYXRlUGlja2VyRWxlbWVudD4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydib3JkZXInLCAnZGlzYWJsZUJhY2tkcm9wJywgJ2Rpc2FibGVDbG9zZUNsaWNrT3V0c2lkZScsICdkaXNhYmxlQ2xvc2VFc2NLZXlkb3duJywgJ2Zvb3RlckFwcGVhcmFuY2UnLCAnaGlkZUNsb3NlQnV0dG9uJywgJ29wZW4nLCAnc2l6ZSddLFxuICBtZXRob2RzOiBbJ3Nob3cnLCAnaGlkZScsICdjYW5jZWwnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLWRpYWxvZycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYm9yZGVyJywgJ2Rpc2FibGVCYWNrZHJvcCcsICdkaXNhYmxlQ2xvc2VDbGlja091dHNpZGUnLCAnZGlzYWJsZUNsb3NlRXNjS2V5ZG93bicsICdmb290ZXJBcHBlYXJhbmNlJywgJ2hpZGVDbG9zZUJ1dHRvbicsICdvcGVuJywgJ3NpemUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnFEaWFsb2cge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcURpYWxvZ0VsZW1lbnQ7XG4gICAgLyoqXG4gICAqIEJvcmRlciByYWRpdXMgb2YgdGhlIGRpYWxvZyBjb21wb25lbnRcbiAgICovXG4gIHNldCBib3JkZXIoXzogQ29tcG9uZW50cy5CcURpYWxvZ1snYm9yZGVyJ10pIHt9O1xuICAgIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgYmFja2Ryb3Agb3ZlcmxheSB3b24ndCBiZSBzaG93biB3aGVuIHRoZSBkaWFsb2cgb3BlbnNcbiAgICovXG4gIHNldCBkaXNhYmxlQmFja2Ryb3AoXzogQ29tcG9uZW50cy5CcURpYWxvZ1snZGlzYWJsZUJhY2tkcm9wJ10pIHt9O1xuICAgIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgZGlhbG9nIHdpbGwgbm90IGNsb3NlIHdoZW4gdGhlIFtFc2NdIGtleSBpcyBwcmVzc1xuICAgKi9cbiAgc2V0IGRpc2FibGVDbG9zZUVzY0tleWRvd24oXzogQ29tcG9uZW50cy5CcURpYWxvZ1snZGlzYWJsZUNsb3NlRXNjS2V5ZG93biddKSB7fTtcbiAgICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGRpYWxvZyB3aWxsIG5vdCBjbG9zZSB3aGVuIGNsaWNraW5nIG9uIHRoZSBiYWNrZHJvcCBvdmVybGF5XG4gICAqL1xuICBzZXQgZGlzYWJsZUNsb3NlQ2xpY2tPdXRzaWRlKF86IENvbXBvbmVudHMuQnFEaWFsb2dbJ2Rpc2FibGVDbG9zZUNsaWNrT3V0c2lkZSddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIGFwcGVhcmFuY2Ugb2YgZm9vdGVyXG4gICAqL1xuICBzZXQgZm9vdGVyQXBwZWFyYW5jZShfOiBDb21wb25lbnRzLkJxRGlhbG9nWydmb290ZXJBcHBlYXJhbmNlJ10pIHt9O1xuICAgIC8qKlxuICAgKiBJZiB0cnVlLCBpdCBoaWRlcyB0aGUgY2xvc2UgYnV0dG9uXG4gICAqL1xuICBzZXQgaGlkZUNsb3NlQnV0dG9uKF86IENvbXBvbmVudHMuQnFEaWFsb2dbJ2hpZGVDbG9zZUJ1dHRvbiddKSB7fTtcbiAgICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGRpYWxvZyB3aWxsIGJlIHNob3duIGFzIG9wZW5cbiAgICovXG4gIHNldCBvcGVuKF86IENvbXBvbmVudHMuQnFEaWFsb2dbJ29wZW4nXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBkaWFsb2dcbiAgICovXG4gIHNldCBzaXplKF86IENvbXBvbmVudHMuQnFEaWFsb2dbJ3NpemUnXSkge307XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2JxQ2FuY2VsJywgJ2JxQ2xvc2UnLCAnYnFPcGVuJywgJ2JxQWZ0ZXJPcGVuJywgJ2JxQWZ0ZXJDbG9zZSddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcURpYWxvZyBleHRlbmRzIENvbXBvbmVudHMuQnFEaWFsb2cge1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciBlbWl0dGVkIHdoZW4gdGhlIGRpYWxvZyBoYXMgYmVlbiBjYW5jZWxlZCBvciBkaXNtaXNzZWRcbiAgICovXG4gIGJxQ2FuY2VsOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8dm9pZD4+O1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciBlbWl0dGVkIHdoZW4gdGhlIGRpYWxvZyB3aWxsIGNsb3NlXG4gICAqL1xuICBicUNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8dm9pZD4+O1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciBlbWl0dGVkIHdoZW4gdGhlIGRpYWxvZyB3aWxsIG9wZW5cbiAgICovXG4gIGJxT3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHZvaWQ+PjtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgZW1pdHRlZCB3aGVuIHRoZSBkaWFsb2cgZmluaXNoIG9wZW5pbmdcbiAgICovXG4gIGJxQWZ0ZXJPcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8dm9pZD4+O1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciBlbWl0dGVkIHdoZW4gdGhlIGRpYWxvZyBmaW5pc2ggY2xvc2luZ1xuICAgKi9cbiAgYnFBZnRlckNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8dm9pZD4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydkYXNoZWQnLCAnb3JpZW50YXRpb24nLCAnc3Ryb2tlQmFzaXMnLCAnc3Ryb2tlQ29sb3InLCAnc3Ryb2tlRGFzaEdhcCcsICdzdHJva2VEYXNoV2lkdGgnLCAnc3Ryb2tlTGluZWNhcCcsICdzdHJva2VUaGlja25lc3MnLCAndGl0bGVBbGlnbm1lbnQnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLWRpdmlkZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2Rhc2hlZCcsICdvcmllbnRhdGlvbicsICdzdHJva2VCYXNpcycsICdzdHJva2VDb2xvcicsICdzdHJva2VEYXNoR2FwJywgJ3N0cm9rZURhc2hXaWR0aCcsICdzdHJva2VMaW5lY2FwJywgJ3N0cm9rZVRoaWNrbmVzcycsICd0aXRsZUFsaWdubWVudCddLFxufSlcbmV4cG9ydCBjbGFzcyBCcURpdmlkZXIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcURpdmlkZXJFbGVtZW50O1xuICAgIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgZGl2aWRlciBoYXMgYSBkYXNoZWQgcGF0dGVyblxuICAgKi9cbiAgc2V0IGRhc2hlZChfOiBDb21wb25lbnRzLkJxRGl2aWRlclsnZGFzaGVkJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBvcmllbnRhdGlvbiBvZiB0aGUgZGl2aWRlclxuICAgKi9cbiAgc2V0IG9yaWVudGF0aW9uKF86IENvbXBvbmVudHMuQnFEaXZpZGVyWydvcmllbnRhdGlvbiddKSB7fTtcbiAgICAvKipcbiAgICogU2V0IHRoZSBzdHJva2UgY29sb3Igb2YgdGhlIGRpdmlkZXIuIFRoZSB2YWx1ZSBzaG91bGQgYmUgYSB2YWxpZCB2YWx1ZSBvZiB0aGUgcGFsZXR0ZSBjb2xvclxuICAgKi9cbiAgc2V0IHN0cm9rZUNvbG9yKF86IENvbXBvbmVudHMuQnFEaXZpZGVyWydzdHJva2VDb2xvciddKSB7fTtcbiAgICAvKipcbiAgICogU2V0IHRoZSBhbGlnbm1lbnQgb2YgdGhlIHRpdGxlIG9uIHRoZSBtYWluIGF4aXMgb2YgdGhlIGRpdmlkZXIgKGhvcml6b250YWwgLyB2ZXJ0aWNhbClcbiAgICovXG4gIHNldCB0aXRsZUFsaWdubWVudChfOiBDb21wb25lbnRzLkJxRGl2aWRlclsndGl0bGVBbGlnbm1lbnQnXSkge307XG4gICAgLyoqXG4gICAqIFNldCB0aGUgd2lkdGggb2YgZWFjaCBkYXNoIG9mIHRoZSBkaXZpZGVyJ3Mgc3Ryb2tlLiBUaGlzIGlzIGFwcGxpY2FibGUgd2hlbiB0aGUgc3Ryb2tlIGlzIGRhc2hlZFxuICAgKi9cbiAgc2V0IHN0cm9rZURhc2hXaWR0aChfOiBDb21wb25lbnRzLkJxRGl2aWRlclsnc3Ryb2tlRGFzaFdpZHRoJ10pIHt9O1xuICAgIC8qKlxuICAgKiBTZXQgdGhlIGdhcCBvZiB0aGUgZGl2aWRlcidzIHN0cm9rZS4gVGhpcyBpcyBhcHBsaWNhYmxlIHdoZW4gdGhlIHN0cm9rZSBpcyBkYXNoZWRcbiAgICovXG4gIHNldCBzdHJva2VEYXNoR2FwKF86IENvbXBvbmVudHMuQnFEaXZpZGVyWydzdHJva2VEYXNoR2FwJ10pIHt9O1xuICAgIC8qKlxuICAgKiBTZXQgdGhlIHRoaWNrbmVzcyBvZiB0aGUgZGl2aWRlcidzIHN0cm9rZS4gVmFsdWUgZXhwcmVzc2VkIGluIHB4XG4gICAqL1xuICBzZXQgc3Ryb2tlVGhpY2tuZXNzKF86IENvbXBvbmVudHMuQnFEaXZpZGVyWydzdHJva2VUaGlja25lc3MnXSkge307XG4gICAgLyoqXG4gICAqIFNldCB0aGUgbWluIHdpZHRoIG9mIHRoZSBkaXZpZGVyJ3Mgc3Ryb2tlIHdoZW4gdGV4dCBpcyBub3QgY2VudGVyZWQuIFZhbHVlIGV4cHJlc3NlZCBpbiBweFxuICAgKi9cbiAgc2V0IHN0cm9rZUJhc2lzKF86IENvbXBvbmVudHMuQnFEaXZpZGVyWydzdHJva2VCYXNpcyddKSB7fTtcbiAgICAvKipcbiAgICogU2V0IHRoZSBsaW5lIG9mIHRoZSBkaXZpZGVyJ3Mgc3Ryb2tlLiBUaGlzIGlzIGFwcGxpY2FibGUgd2hlbiB0aGUgc3Ryb2tlIGlzIGRhc2hlZFxuICAgKi9cbiAgc2V0IHN0cm9rZUxpbmVjYXAoXzogQ29tcG9uZW50cy5CcURpdmlkZXJbJ3N0cm9rZUxpbmVjYXAnXSkge307XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxRGl2aWRlciBleHRlbmRzIENvbXBvbmVudHMuQnFEaXZpZGVyIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2Nsb3NlT25DbGlja091dHNpZGUnLCAnY2xvc2VPbkVzYycsICdlbmFibGVCYWNrZHJvcCcsICdvcGVuJywgJ3BsYWNlbWVudCcsICdwb3NpdGlvbiddLFxuICBtZXRob2RzOiBbJ2hpZGUnLCAnc2hvdyddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtZHJhd2VyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydjbG9zZU9uQ2xpY2tPdXRzaWRlJywgJ2Nsb3NlT25Fc2MnLCAnZW5hYmxlQmFja2Ryb3AnLCAnb3BlbicsICdwbGFjZW1lbnQnLCAncG9zaXRpb24nXSxcbn0pXG5leHBvcnQgY2xhc3MgQnFEcmF3ZXIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcURyYXdlckVsZW1lbnQ7XG4gICAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBiYWNrZHJvcCBvdmVybGF5IHdpbGwgYmUgc2hvd24gd2hlbiB0aGUgZHJhd2VyIG9wZW5zXG4gICAqL1xuICBzZXQgZW5hYmxlQmFja2Ryb3AoXzogQ29tcG9uZW50cy5CcURyYXdlclsnZW5hYmxlQmFja2Ryb3AnXSkge307XG4gICAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBkcmF3ZXIgd2lsbCBub3QgY2xvc2Ugd2hlbiBjbGlja2luZyBvdXRzaWRlIHRoZSBwYW5lbFxuICAgKi9cbiAgc2V0IGNsb3NlT25DbGlja091dHNpZGUoXzogQ29tcG9uZW50cy5CcURyYXdlclsnY2xvc2VPbkNsaWNrT3V0c2lkZSddKSB7fTtcbiAgICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGRpYWxvZyB3aWxsIG5vdCBjbG9zZSB3aGVuIHRoZSBbRXNjXSBrZXkgaXMgcHJlc3NlZFxuICAgKi9cbiAgc2V0IGNsb3NlT25Fc2MoXzogQ29tcG9uZW50cy5CcURyYXdlclsnY2xvc2VPbkVzYyddKSB7fTtcbiAgICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGRyYXdlciBjb21wb25lbnQgd2lsbCBiZSBzaG93blxuICAgKi9cbiAgc2V0IG9wZW4oXzogQ29tcG9uZW50cy5CcURyYXdlclsnb3BlbiddKSB7fTtcbiAgICAvKipcbiAgICogIEBkZXByZWNhdGVkIERlZmluZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBkcmF3ZXJcbiAgICovXG4gIHNldCBwbGFjZW1lbnQoXzogQ29tcG9uZW50cy5CcURyYXdlclsncGxhY2VtZW50J10pIHt9O1xuICAgIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgZHJhd2VyXG4gICAqL1xuICBzZXQgcG9zaXRpb24oXzogQ29tcG9uZW50cy5CcURyYXdlclsncG9zaXRpb24nXSkge307XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2JxQ2xvc2UnLCAnYnFPcGVuJywgJ2JxQWZ0ZXJPcGVuJywgJ2JxQWZ0ZXJDbG9zZSddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcURyYXdlciBleHRlbmRzIENvbXBvbmVudHMuQnFEcmF3ZXIge1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgZHJhd2VyIGlzIGNsb3NlZFxuICAgKi9cbiAgYnFDbG9zZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PGFueT4+O1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgZHJhd2VyIGlzIG9wZW5lZFxuICAgKi9cbiAgYnFPcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8YW55Pj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgZHJhd2VyIGhhcyBiZWVuIG9wZW5lZFxuICAgKi9cbiAgYnFBZnRlck9wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxhbnk+PjtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgdG8gYmUgY2FsbGVkIGFmdGVyIHRoZSBkcmF3ZXIgaGFzIGJlZW4gY2xvc2VkXG4gICAqL1xuICBicUFmdGVyQ2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxhbnk+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnZGlzdGFuY2UnLCAna2VlcE9wZW5PblNlbGVjdCcsICdvcGVuJywgJ3BhbmVsSGVpZ2h0JywgJ3BsYWNlbWVudCcsICdzYW1lV2lkdGgnLCAnc2tpZGRpbmcnLCAnc3RyYXRlZ3knXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLWRyb3Bkb3duJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydkaXNhYmxlZCcsICdkaXN0YW5jZScsICdrZWVwT3Blbk9uU2VsZWN0JywgJ29wZW4nLCAncGFuZWxIZWlnaHQnLCAncGxhY2VtZW50JywgJ3NhbWVXaWR0aCcsICdza2lkZGluZycsICdzdHJhdGVneSddLFxufSlcbmV4cG9ydCBjbGFzcyBCcURyb3Bkb3duIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFEcm9wZG93bkVsZW1lbnQ7XG4gICAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBkcm9wZG93biBwYW5lbCB3aWxsIGJlIHZpc2libGUgYW5kIHdvbid0IGJlIHNob3duLlxuICAgKi9cbiAgc2V0IGRpc2FibGVkKF86IENvbXBvbmVudHMuQnFEcm9wZG93blsnZGlzYWJsZWQnXSkge307XG4gICAgLyoqXG4gICAqIFJlcHJlc2VudHMgdGhlIGRpc3RhbmNlIChndXR0ZXIgb3IgbWFyZ2luKSBiZXR3ZWVuIHRoZSBwYW5lbCBhbmQgdGhlIHRyaWdnZXIgZWxlbWVudC5cbiAgICovXG4gIHNldCBkaXN0YW5jZShfOiBDb21wb25lbnRzLkJxRHJvcGRvd25bJ2Rpc3RhbmNlJ10pIHt9O1xuICAgIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgcGFuZWwgd2lsbCByZW1haW4gb3BlbiBhZnRlciBhIHNlbGVjdGlvbiBpcyBtYWRlLlxuICAgKi9cbiAgc2V0IGtlZXBPcGVuT25TZWxlY3QoXzogQ29tcG9uZW50cy5CcURyb3Bkb3duWydrZWVwT3Blbk9uU2VsZWN0J10pIHt9O1xuICAgIC8qKlxuICAgKiBQb3NpdGlvbiBvZiB0aGUgcGFuZWxcbiAgICovXG4gIHNldCBwbGFjZW1lbnQoXzogQ29tcG9uZW50cy5CcURyb3Bkb3duWydwbGFjZW1lbnQnXSkge307XG4gICAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBwYW5lbCB3aWxsIGJlIHZpc2libGUuXG4gICAqL1xuICBzZXQgb3BlbihfOiBDb21wb25lbnRzLkJxRHJvcGRvd25bJ29wZW4nXSkge307XG4gICAgLyoqXG4gICAqIFdoZW4gc2V0LCBpdCB3aWxsIG92ZXJyaWRlIHRoZSBoZWlnaHQgb2YgdGhlIGRyb3Bkb3duIHBhbmVsXG4gICAqL1xuICBzZXQgcGFuZWxIZWlnaHQoXzogQ29tcG9uZW50cy5CcURyb3Bkb3duWydwYW5lbEhlaWdodCddKSB7fTtcbiAgICAvKipcbiAgICogV2hldGhlciB0aGUgcGFuZWwgc2hvdWxkIGhhdmUgdGhlIHNhbWUgd2lkdGggYXMgdGhlIHRyaWdnZXIgZWxlbWVudFxuICAgKi9cbiAgc2V0IHNhbWVXaWR0aChfOiBDb21wb25lbnRzLkJxRHJvcGRvd25bJ3NhbWVXaWR0aCddKSB7fTtcbiAgICAvKipcbiAgICogUmVwcmVzZW50cyB0aGUgc2tpZGRpbmcgYmV0d2VlbiB0aGUgcGFuZWwgYW5kIHRoZSB0cmlnZ2VyIGVsZW1lbnQuXG4gICAqL1xuICBzZXQgc2tpZGRpbmcoXzogQ29tcG9uZW50cy5CcURyb3Bkb3duWydza2lkZGluZyddKSB7fTtcbiAgICAvKipcbiAgICogRGVmaW5lcyB0aGUgc3RyYXRlZ3kgdG8gcG9zaXRpb24gdGhlIHBhbmVsXG4gICAqL1xuICBzZXQgc3RyYXRlZ3koXzogQ29tcG9uZW50cy5CcURyb3Bkb3duWydzdHJhdGVneSddKSB7fTtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYnFPcGVuJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxRHJvcGRvd24gZXh0ZW5kcyBDb21wb25lbnRzLkJxRHJvcGRvd24ge1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgZHJvcGRvd24gcGFuZWwgaXMgb3BlbmVkIG9yIGNsb3NlZC5cbiAgICovXG4gIGJxT3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHsgb3BlbjogYm9vbGVhbiB9Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ3NpemUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLWVtcHR5LXN0YXRlJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydzaXplJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJxRW1wdHlTdGF0ZSB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxRW1wdHlTdGF0ZUVsZW1lbnQ7XG4gICAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBlbXB0eSBzdGF0ZSBjb21wb25lbnRcbiAgICovXG4gIHNldCBzaXplKF86IENvbXBvbmVudHMuQnFFbXB0eVN0YXRlWydzaXplJ10pIHt9O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcUVtcHR5U3RhdGUgZXh0ZW5kcyBDb21wb25lbnRzLkJxRW1wdHlTdGF0ZSB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydmaXhlZCcsICdub1BhZGRpbmcnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLWdyaWQnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2ZpeGVkJywgJ25vUGFkZGluZyddLFxufSlcbmV4cG9ydCBjbGFzcyBCcUdyaWQge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcUdyaWRFbGVtZW50O1xuICBcbiAgc2V0IGZpeGVkKF86IENvbXBvbmVudHMuQnFHcmlkWydmaXhlZCddKSB7fTtcbiAgXG4gIHNldCBub1BhZGRpbmcoXzogQ29tcG9uZW50cy5CcUdyaWRbJ25vUGFkZGluZyddKSB7fTtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFHcmlkIGV4dGVuZHMgQ29tcG9uZW50cy5CcUdyaWQge31cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnY29sb3InLCAnbGFiZWwnLCAnbmFtZScsICdzaXplJywgJ3NyYycsICd3ZWlnaHQnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLWljb24nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ2xhYmVsJywgJ25hbWUnLCAnc2l6ZScsICdzcmMnLCAnd2VpZ2h0J10sXG59KVxuZXhwb3J0IGNsYXNzIEJxSWNvbiB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxSWNvbkVsZW1lbnQ7XG4gICAgLyoqXG4gICAqIExhYmVsIGZvciB0aGUgaWNvbiwgdXNlZCBmb3IgYWNjZXNzaWJpbGl0eVxuICAgKi9cbiAgc2V0IGxhYmVsKF86IENvbXBvbmVudHMuQnFJY29uWydsYWJlbCddKSB7fTtcbiAgICAvKipcbiAgICogU2V0IHRoZSBzdHJva2UgY29sb3Igb2YgdGhlIFNWRy4gVGhlIHZhbHVlIHNob3VsZCBiZSBhIHZhbGlkIHZhbHVlIG9mIHRoZSBwYWxldHRlIGNvbG9yXG4gICAqL1xuICBzZXQgY29sb3IoXzogQ29tcG9uZW50cy5CcUljb25bJ2NvbG9yJ10pIHt9O1xuICAgIC8qKlxuICAgKiBJY29uIG5hbWUgdG8gbG9hZC4gUGxlYXNlIGNoZWNrIGFsbCBhdmFpbGFibGUgaWNvbnMgW2hlcmVdKGh0dHBzOi8vcGhvc3Bob3JpY29ucy5jb20vKVxuICAgKi9cbiAgc2V0IG5hbWUoXzogQ29tcG9uZW50cy5CcUljb25bJ25hbWUnXSkge307XG4gICAgLyoqXG4gICAqIFNldCB0aGUgc2l6ZSBvZiB0aGUgU1ZHXG4gICAqL1xuICBzZXQgc2l6ZShfOiBDb21wb25lbnRzLkJxSWNvblsnc2l6ZSddKSB7fTtcbiAgICAvKipcbiAgICogU2V0IHRoZSBzb3VyY2Ugb2YgdGhlIFNWRy4gSWYgdGhlIHNvdXJjZSBpcyBzZXQsIHRoZSBuYW1lIHByb3BlcnR5IHdpbGwgYmUgaWdub3JlZFxuICAgKi9cbiAgc2V0IHNyYyhfOiBDb21wb25lbnRzLkJxSWNvblsnc3JjJ10pIHt9O1xuICAgIC8qKlxuICAgKiAgQGRlcHJlY2F0ZWQgSXQgc2V0IHRoZSBpY29uIHdlaWdodC9zdHlsZVxuICAgKi9cbiAgc2V0IHdlaWdodChfOiBDb21wb25lbnRzLkJxSWNvblsnd2VpZ2h0J10pIHt9O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydzdmdMb2FkZWQnXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFJY29uIGV4dGVuZHMgQ29tcG9uZW50cy5CcUljb24ge1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgU1ZHIGhhcyBsb2FkZWRcbiAgICovXG4gIHN2Z0xvYWRlZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PGFueT4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydhdXRvY2FwaXRhbGl6ZScsICdhdXRvY29tcGxldGUnLCAnYXV0b2NvcnJlY3QnLCAnYXV0b2ZvY3VzJywgJ2NsZWFyQnV0dG9uTGFiZWwnLCAnZGVib3VuY2VUaW1lJywgJ2Rpc2FibGVDbGVhcicsICdkaXNhYmxlZCcsICdmb3JtJywgJ2Zvcm1WYWxpZGF0aW9uTWVzc2FnZScsICdpbnB1dG1vZGUnLCAnbWF4JywgJ21heGxlbmd0aCcsICdtaW4nLCAnbWlubGVuZ3RoJywgJ25hbWUnLCAncGF0dGVybicsICdwbGFjZWhvbGRlcicsICdyZWFkb25seScsICdyZXF1aXJlZCcsICdzdGVwJywgJ3R5cGUnLCAndmFsaWRhdGlvblN0YXR1cycsICd2YWx1ZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtaW5wdXQnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2F1dG9jYXBpdGFsaXplJywgJ2F1dG9jb21wbGV0ZScsICdhdXRvY29ycmVjdCcsICdhdXRvZm9jdXMnLCAnY2xlYXJCdXR0b25MYWJlbCcsICdkZWJvdW5jZVRpbWUnLCAnZGlzYWJsZUNsZWFyJywgJ2Rpc2FibGVkJywgJ2Zvcm0nLCAnZm9ybVZhbGlkYXRpb25NZXNzYWdlJywgJ2lucHV0bW9kZScsICdtYXgnLCAnbWF4bGVuZ3RoJywgJ21pbicsICdtaW5sZW5ndGgnLCAnbmFtZScsICdwYXR0ZXJuJywgJ3BsYWNlaG9sZGVyJywgJ3JlYWRvbmx5JywgJ3JlcXVpcmVkJywgJ3N0ZXAnLCAndHlwZScsICd2YWxpZGF0aW9uU3RhdHVzJywgJ3ZhbHVlJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJxSW5wdXQge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcUlucHV0RWxlbWVudDtcbiAgICAvKipcbiAgICogQ29udHJvbHMgd2hldGhlciBvciBub3QgdGhlIGlucHV0IGZpZWxkIHNob3VsZCBiZSBjYXBpdGFsaXplZCBhbmQgaG93LlxuUG9zc2libGUgdmFsdWVzIGFyZSAnb2ZmJywgJ25vbmUnLCAnb24nLCAnc2VudGVuY2VzJywgJ3dvcmRzJywgYW5kICdjaGFyYWN0ZXJzJy5cblNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9HbG9iYWxfYXR0cmlidXRlcy9hdXRvY2FwaXRhbGl6ZVxuICAgKi9cbiAgc2V0IGF1dG9jYXBpdGFsaXplKF86IENvbXBvbmVudHMuQnFJbnB1dFsnYXV0b2NhcGl0YWxpemUnXSkge307XG4gICAgLyoqXG4gICAqIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGUgaW5wdXQgZmllbGQgc2hvdWxkIGhhdmUgYXV0b2NvbXBsZXRlIGVuYWJsZWQuXG5TZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvQXR0cmlidXRlcy9hdXRvY29tcGxldGUjdmFsdWVzXG4gICAqL1xuICBzZXQgYXV0b2NvbXBsZXRlKF86IENvbXBvbmVudHMuQnFJbnB1dFsnYXV0b2NvbXBsZXRlJ10pIHt9O1xuICAgIC8qKlxuICAgKiBDb250cm9scyB3aGV0aGVyIG9yIG5vdCB0aGUgaW5wdXQgZmllbGQgc2hvdWxkIGhhdmUgYXV0b2NvcnJlY3QgZW5hYmxlZC5cblBvc3NpYmxlIHZhbHVlcyBhcmUgJ29uJyBhbmQgJ29mZicuXG4gICAqL1xuICBzZXQgYXV0b2NvcnJlY3QoXzogQ29tcG9uZW50cy5CcUlucHV0WydhdXRvY29ycmVjdCddKSB7fTtcbiAgICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGlucHV0IHdpbGwgYmUgZm9jdXNlZCBvbiBjb21wb25lbnQgcmVuZGVyXG4gICAqL1xuICBzZXQgYXV0b2ZvY3VzKF86IENvbXBvbmVudHMuQnFJbnB1dFsnYXV0b2ZvY3VzJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgY2xlYXIgYnV0dG9uIGFyaWEgbGFiZWxcbiAgICovXG4gIHNldCBjbGVhckJ1dHRvbkxhYmVsKF86IENvbXBvbmVudHMuQnFJbnB1dFsnY2xlYXJCdXR0b25MYWJlbCddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIGFtb3VudCBvZiB0aW1lLCBpbiBtaWxsaXNlY29uZHMsIHRvIHdhaXQgYmVmb3JlIGVtaXR0aW5nIHRoZSBgYnFJbnB1dGAgZXZlbnQgYWZ0ZXIgdGhlIGlucHV0IHZhbHVlIGNoYW5nZXMuXG5BIHZhbHVlIG9mIDAgbWVhbnMgbm8gZGVib3VuY2luZyB3aWxsIG9jY3VyLlxuICAgKi9cbiAgc2V0IGRlYm91bmNlVGltZShfOiBDb21wb25lbnRzLkJxSW5wdXRbJ2RlYm91bmNlVGltZSddKSB7fTtcbiAgICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGlucHV0IGlzIGRpc2FibGVkIG9yIG5vdC5cbklmIGB0cnVlYCwgdGhlIGlucHV0IGlzIGRpc2FibGVkIGFuZCBjYW5ub3QgYmUgaW50ZXJhY3RlZCB3aXRoLlxuICAgKi9cbiAgc2V0IGRpc2FibGVkKF86IENvbXBvbmVudHMuQnFJbnB1dFsnZGlzYWJsZWQnXSkge307XG4gICAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBjbGVhciBidXR0b24gd29uJ3QgYmUgZGlzcGxheWVkXG4gICAqL1xuICBzZXQgZGlzYWJsZUNsZWFyKF86IENvbXBvbmVudHMuQnFJbnB1dFsnZGlzYWJsZUNsZWFyJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIGZvcm0gdGhhdCB0aGUgaW5wdXQgZmllbGQgYmVsb25ncyB0by5cbiAgICovXG4gIHNldCBmb3JtKF86IENvbXBvbmVudHMuQnFJbnB1dFsnZm9ybSddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIG5hdGl2ZSBmb3JtIHZhbGlkYXRpb24gbWVzc2FnZSAobWFuZGF0b3J5IGlmIGByZXF1aXJlZGAgaXMgc2V0KVxuICAgKi9cbiAgc2V0IGZvcm1WYWxpZGF0aW9uTWVzc2FnZShfOiBDb21wb25lbnRzLkJxSW5wdXRbJ2Zvcm1WYWxpZGF0aW9uTWVzc2FnZSddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIGlucHV0bW9kZSBhdHRyaWJ1dGUgc3BlY2lmaWVzIHdoYXQga2luZCBvZiBpbnB1dCBtZWNoYW5pc20gd291bGQgYmUgbW9zdCBoZWxwZnVsIGZvciB1c2VycyBlbnRlcmluZyBjb250ZW50IGludG8gdGhlIGlucHV0IGZpZWxkLlxuVGhpcyBhbGxvd3MgYSBicm93c2VyIHRvIGRpc3BsYXkgYW4gYXBwcm9wcmlhdGUgdmlydHVhbCBrZXlib2FyZCB3aGlsZSBlZGl0aW5nLlxuUG9zc2libGUgdmFsdWVzIGFyZSAnbm9uZScsICd0ZXh0JywgJ2RlY2ltYWwnLCAnbnVtZXJpYycsICd0ZWwnLCAnc2VhcmNoJywgJ2VtYWlsJywgJ3VybCcsIGFuZCAnZGF0ZScuXG4gICAqL1xuICBzZXQgaW5wdXRtb2RlKF86IENvbXBvbmVudHMuQnFJbnB1dFsnaW5wdXRtb2RlJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgbWF4aW11bSB2YWx1ZSB0aGF0IHRoZSBpbnB1dCBmaWVsZCBjYW4gYWNjZXB0LlxuT25seSBhcHBsaWVzIHRvIGRhdGUgYW5kIG51bWJlciBpbnB1dCB0eXBlcy5cbiAgICovXG4gIHNldCBtYXgoXzogQ29tcG9uZW50cy5CcUlucHV0WydtYXgnXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgdGhlIGlucHV0IGZpZWxkIGNhbiBhY2NlcHQuXG4gICAqL1xuICBzZXQgbWF4bGVuZ3RoKF86IENvbXBvbmVudHMuQnFJbnB1dFsnbWF4bGVuZ3RoJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgbWluaW11bSB2YWx1ZSB0aGF0IHRoZSBpbnB1dCBmaWVsZCBjYW4gYWNjZXB0LlxuT25seSBhcHBsaWVzIHRvIGRhdGUgYW5kIG51bWJlciBpbnB1dCB0eXBlcy5cbiAgICovXG4gIHNldCBtaW4oXzogQ29tcG9uZW50cy5CcUlucHV0WydtaW4nXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBtaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgdGhlIGlucHV0IGZpZWxkIGNhbiBhY2NlcHQuXG4gICAqL1xuICBzZXQgbWlubGVuZ3RoKF86IENvbXBvbmVudHMuQnFJbnB1dFsnbWlubGVuZ3RoJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgaW5wdXQgZmllbGQgbmFtZS5cbiAgICovXG4gIHNldCBuYW1lKF86IENvbXBvbmVudHMuQnFJbnB1dFsnbmFtZSddKSB7fTtcbiAgICAvKipcbiAgICogU3BlY2lmaWVzIGEgcmVndWxhciBleHByZXNzaW9uIHRoZSBmb3JtIGNvbnRyb2wncyB2YWx1ZSBzaG91bGQgbWF0Y2guXG5TZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvQXR0cmlidXRlcy9wYXR0ZXJuXG4gICAqL1xuICBzZXQgcGF0dGVybihfOiBDb21wb25lbnRzLkJxSW5wdXRbJ3BhdHRlcm4nXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBpbnB1dCBwbGFjZWhvbGRlciB0ZXh0IHZhbHVlXG4gICAqL1xuICBzZXQgcGxhY2Vob2xkZXIoXzogQ29tcG9uZW50cy5CcUlucHV0WydwbGFjZWhvbGRlciddKSB7fTtcbiAgICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGlucHV0IGZpZWxkIGNhbm5vdCBiZSBtb2RpZmllZC5cbiAgICovXG4gIHNldCByZWFkb25seShfOiBDb21wb25lbnRzLkJxSW5wdXRbJ3JlYWRvbmx5J10pIHt9O1xuICAgIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciBvciBub3QgdGhlIGlucHV0IGZpZWxkIGlzIHJlcXVpcmVkIHRvIGJlIGZpbGxlZCBvdXQgYmVmb3JlIHN1Ym1pdHRpbmcgdGhlIGZvcm0uXG4gICAqL1xuICBzZXQgcmVxdWlyZWQoXzogQ29tcG9uZW50cy5CcUlucHV0WydyZXF1aXJlZCddKSB7fTtcbiAgICAvKipcbiAgICogQSBudW1iZXIgdGhhdCBzcGVjaWZpZXMgdGhlIGdyYW51bGFyaXR5IHRoYXQgdGhlIHZhbHVlIG11c3QgYWRoZXJlIHRvLlxuVmFsaWQgZm9yIGRhdGUsIG1vbnRoLCB3ZWVrLCB0aW1lLCBkYXRldGltZS1sb2NhbCwgbnVtYmVyLCBhbmQgcmFuZ2UuXG5TZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNzdGVwXG4gICAqL1xuICBzZXQgc3RlcChfOiBDb21wb25lbnRzLkJxSW5wdXRbJ3N0ZXAnXSkge307XG4gICAgLyoqXG4gICAqIFRoZSB0eXBlIGF0dHJpYnV0ZSBzcGVjaWZpZXMgdGhlIHR5cGUgb2YgaW5wdXQgZmllbGQgdG8gZGlzcGxheS5cblBvc3NpYmxlIHZhbHVlcyBhcmUgJ3RleHQnLCAncGFzc3dvcmQnLCAnZW1haWwnLCAnbnVtYmVyJywgJ3RlbCcsICdzZWFyY2gnLCAndXJsJywgYW5kIG1vcmUuXG5TZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNpbnB1dF90eXBlc1xuICAgKi9cbiAgc2V0IHR5cGUoXzogQ29tcG9uZW50cy5CcUlucHV0Wyd0eXBlJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgdmFsaWRhdGlvbiBzdGF0dXMgb2YgdGhlIGlucHV0LiBAcmVtYXJrcyBUaGlzIHByb3BlcnR5IGlzIHVzZWQgdG8gaW5kaWNhdGUgdGhlIHZhbGlkYXRpb24gc3RhdHVzIG9mIHRoZSBpbnB1dC4gSXQgY2FuIGJlIHNldCB0byBvbmUgb2YgdGhlIGZvbGxvd2luZyB2YWx1ZXM6XG4tIGAnbm9uZSdgOiBObyB2YWxpZGF0aW9uIHN0YXR1cyBpcyBzZXQuXG4tIGAnZXJyb3InYDogVGhlIGlucHV0IGhhcyBhIHZhbGlkYXRpb24gZXJyb3IuXG4tIGAnd2FybmluZydgOiBUaGUgaW5wdXQgaGFzIGEgdmFsaWRhdGlvbiB3YXJuaW5nLlxuLSBgJ3N1Y2Nlc3MnYDogVGhlIGlucHV0IGhhcyBwYXNzZWQgdmFsaWRhdGlvbi5cbiAgICovXG4gIHNldCB2YWxpZGF0aW9uU3RhdHVzKF86IENvbXBvbmVudHMuQnFJbnB1dFsndmFsaWRhdGlvblN0YXR1cyddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIGlucHV0IHZhbHVlLCBpdCBjYW4gYmUgdXNlZCB0byByZXNldCB0aGUgaW5wdXQgdG8gYSBwcmV2aW91cyB2YWx1ZVxuICAgKi9cbiAgc2V0IHZhbHVlKF86IENvbXBvbmVudHMuQnFJbnB1dFsndmFsdWUnXSkge307XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2JxQmx1cicsICdicUNoYW5nZScsICdicUNsZWFyJywgJ2JxRm9jdXMnLCAnYnFJbnB1dCddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcUlucHV0IGV4dGVuZHMgQ29tcG9uZW50cy5CcUlucHV0IHtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgZW1pdHRlZCB3aGVuIHRoZSBpbnB1dCBsb3NlcyBmb2N1c1xuICAgKi9cbiAgYnFCbHVyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxSW5wdXRFbGVtZW50Pj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIGVtaXR0ZWQgd2hlbiB0aGUgaW5wdXQgdmFsdWUgaGFzIGNoYW5nZWQgYW5kIHRoZSBpbnB1dCBsb3NlcyBmb2N1cy5cblRoaXMgaGFuZGxlciBpcyBjYWxsZWQgd2hlbmV2ZXIgdGhlIHVzZXIgZmluaXNoZXMgdHlwaW5nIG9yIHBhc3RpbmcgdGV4dCBpbnRvIHRoZSBpbnB1dCBmaWVsZCBhbmQgdGhlbiBjbGlja3Mgb3V0c2lkZSBvZiB0aGUgaW5wdXQgZmllbGQuXG4gICAqL1xuICBicUNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHsgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IHN0cmluZ1tdOyBlbDogSFRNTEJxSW5wdXRFbGVtZW50IH0+PjtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgZW1pdHRlZCB3aGVuIHRoZSBpbnB1dCB2YWx1ZSBoYXMgYmVlbiBjbGVhcmVkXG4gICAqL1xuICBicUNsZWFyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxSW5wdXRFbGVtZW50Pj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIGVtaXR0ZWQgd2hlbiB0aGUgaW5wdXQgaGFzIHJlY2VpdmVkIGZvY3VzXG4gICAqL1xuICBicUZvY3VzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxSW5wdXRFbGVtZW50Pj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIGVtaXR0ZWQgd2hlbiB0aGUgaW5wdXQgdmFsdWUgY2hhbmdlcy5cblRoaXMgaGFuZGxlciBpcyBjYWxsZWQgd2hlbmV2ZXIgdGhlIHVzZXIgdHlwZXMgb3IgcGFzdGVzIHRleHQgaW50byB0aGUgaW5wdXQgZmllbGQuXG4gICAqL1xuICBicUlucHV0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8eyB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgc3RyaW5nW107IGVsOiBIVE1MQnFJbnB1dEVsZW1lbnQgfT4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydzaXplJywgJ3R5cGUnLCAndmFyaWFudCddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtbG9nbycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnc2l6ZScsICd0eXBlJywgJ3ZhcmlhbnQnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnFMb2dvIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFMb2dvRWxlbWVudDtcbiAgICAvKipcbiAgICogVGFtYcOxbyBkZWwgbG9nbyAobm9ybWFsIG8gc21hbGwpXG4gICAqL1xuICBzZXQgc2l6ZShfOiBDb21wb25lbnRzLkJxTG9nb1snc2l6ZSddKSB7fTtcbiAgICAvKipcbiAgICogVGlwbyBkZWwgbG9nbyAoY29tcGxldG8gPSBsb2dvIG8gcmVzcG9uc2l2byA9IGlzb3R5cGUpXG4gICAqL1xuICBzZXQgdHlwZShfOiBDb21wb25lbnRzLkJxTG9nb1sndHlwZSddKSB7fTtcbiAgICAvKipcbiAgICogVmFyaWFudGUgZGUgY29sb3IgKGZ1bGwtY29sb3IsIGdyZWVuLCB3aGl0ZSlcbiAgICovXG4gIHNldCB2YXJpYW50KF86IENvbXBvbmVudHMuQnFMb2dvWyd2YXJpYW50J10pIHt9O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcUxvZ28gZXh0ZW5kcyBDb21wb25lbnRzLkJxTG9nbyB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydhdXRvRGlzbWlzcycsICdib3JkZXInLCAnZGlzYWJsZUNsb3NlJywgJ2hpZGVJY29uJywgJ29wZW4nLCAndGltZScsICd0eXBlJ10sXG4gIG1ldGhvZHM6IFsnaGlkZScsICdzaG93JywgJ3RvYXN0J11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1ub3RpZmljYXRpb24nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2F1dG9EaXNtaXNzJywgJ2JvcmRlcicsICdkaXNhYmxlQ2xvc2UnLCAnaGlkZUljb24nLCAnb3BlbicsICd0aW1lJywgJ3R5cGUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnFOb3RpZmljYXRpb24ge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcU5vdGlmaWNhdGlvbkVsZW1lbnQ7XG4gICAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBub3RpZmljYXRpb24gd2lsbCBhdXRvbWF0aWNhbGx5IGhpZGUgYWZ0ZXIgdGhlIHNwZWNpZmllZCBhbW91bnQgb2YgdGltZVxuICAgKi9cbiAgc2V0IGF1dG9EaXNtaXNzKF86IENvbXBvbmVudHMuQnFOb3RpZmljYXRpb25bJ2F1dG9EaXNtaXNzJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgY29yZGVyIHJhZGl1cyBvZiB0aGUgbm90aWZpY2F0aW9uIGNvbXBvbmVudFxuICAgKi9cbiAgc2V0IGJvcmRlcihfOiBDb21wb25lbnRzLkJxTm90aWZpY2F0aW9uWydib3JkZXInXSkge307XG4gICAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBjbG9zZSBidXR0b24gYXQgdGhlIHRvcCByaWdodCBvZiB0aGUgbm90aWZpY2F0aW9uIHdvbid0IGJlIHNob3duXG4gICAqL1xuICBzZXQgZGlzYWJsZUNsb3NlKF86IENvbXBvbmVudHMuQnFOb3RpZmljYXRpb25bJ2Rpc2FibGVDbG9zZSddKSB7fTtcbiAgICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIG5vdGlmaWNhdGlvbiBpY29uIHdvbid0IGJlIHNob3duXG4gICAqL1xuICBzZXQgaGlkZUljb24oXzogQ29tcG9uZW50cy5CcU5vdGlmaWNhdGlvblsnaGlkZUljb24nXSkge307XG4gICAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBub3RpZmljYXRpb24gd2lsbCBiZSBzaG93blxuICAgKi9cbiAgc2V0IG9wZW4oXzogQ29tcG9uZW50cy5CcU5vdGlmaWNhdGlvblsnb3BlbiddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIGxlbmd0aCBvZiB0aW1lLCBpbiBtaWxsaXNlY29uZHMsIGFmdGVyIHdoaWNoIHRoZSBub3RpZmljYXRpb24gd2lsbCBjbG9zZSBpdHNlbGYuIE9ubHkgdmFsaWQgaWYgYGF1dG9EaXNtaXNzPVwidHJ1ZVwiYFxuICAgKi9cbiAgc2V0IHRpbWUoXzogQ29tcG9uZW50cy5CcU5vdGlmaWNhdGlvblsndGltZSddKSB7fTtcbiAgICAvKipcbiAgICogVHlwZSBvZiBOb3RpZmljYXRpb25cbiAgICovXG4gIHNldCB0eXBlKF86IENvbXBvbmVudHMuQnFOb3RpZmljYXRpb25bJ3R5cGUnXSkge307XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2JxSGlkZScsICdicVNob3cnLCAnYnFBZnRlck9wZW4nLCAnYnFBZnRlckNsb3NlJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxTm90aWZpY2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50cy5CcU5vdGlmaWNhdGlvbiB7XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBub3RpZmljYXRpb24gaXMgaGlkZGVuXG4gICAqL1xuICBicUhpZGU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxhbnk+PjtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIG5vdGlmaWNhdGlvbiBpcyBzaG93blxuICAgKi9cbiAgYnFTaG93OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8YW55Pj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgbm90aWZpY2F0aW9uIGhhcyBiZWVuIG9wZW5lZFxuICAgKi9cbiAgYnFBZnRlck9wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxhbnk+PjtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgdG8gYmUgY2FsbGVkIGFmdGVyIHRoZSBub3RpZmljYXRpb24gaGFzIGJlZW4gY2xvc2VkXG4gICAqL1xuICBicUFmdGVyQ2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxhbnk+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnaGlkZGVuJywgJ3NlbGVjdGVkJywgJ3ZhbHVlJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1vcHRpb24nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ2hpZGRlbicsICdzZWxlY3RlZCcsICd2YWx1ZSddLFxufSlcbmV4cG9ydCBjbGFzcyBCcU9wdGlvbiB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxT3B0aW9uRWxlbWVudDtcbiAgICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIG9wdGlvbiBpcyBoaWRkZW4uXG4gICAqL1xuICBzZXQgaGlkZGVuKF86IENvbXBvbmVudHMuQnFPcHRpb25bJ2hpZGRlbiddKSB7fTtcbiAgICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIG9wdGlvbiBpcyBkaXNhYmxlZC5cbiAgICovXG4gIHNldCBkaXNhYmxlZChfOiBDb21wb25lbnRzLkJxT3B0aW9uWydkaXNhYmxlZCddKSB7fTtcbiAgICAvKipcbiAgICogQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSB2YWx1ZSBvZiB0aGUgb3B0aW9uLiBDYW4gYmUgdXNlZCB0byBpZGVudGlmeSB0aGUgaXRlbVxuICAgKi9cbiAgc2V0IHZhbHVlKF86IENvbXBvbmVudHMuQnFPcHRpb25bJ3ZhbHVlJ10pIHt9O1xuICAgIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgb3B0aW9uIGlzIHNlbGVjdGVkIGFuZCBhY3RpdmUuXG4gICAqL1xuICBzZXQgc2VsZWN0ZWQoXzogQ29tcG9uZW50cy5CcU9wdGlvblsnc2VsZWN0ZWQnXSkge307XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2JxQmx1cicsICdicUZvY3VzJywgJ2JxQ2xpY2snLCAnYnFFbnRlciddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcU9wdGlvbiBleHRlbmRzIENvbXBvbmVudHMuQnFPcHRpb24ge1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiBpdGVtIGxvc2VzIGZvY3VzXG4gICAqL1xuICBicUJsdXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFPcHRpb25FbGVtZW50Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIGl0ZW0gaXMgZm9jdXNlZFxuICAgKi9cbiAgYnFGb2N1czogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcU9wdGlvbkVsZW1lbnQ+PjtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gaXRlbSBpcyBjbGlja2VkXG4gICAqL1xuICBicUNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxT3B0aW9uRWxlbWVudD4+O1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgb24gZW50ZXIga2V5IHByZXNzXG4gICAqL1xuICBicUVudGVyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxT3B0aW9uRWxlbWVudD4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtb3B0aW9uLWdyb3VwJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogW10sXG59KVxuZXhwb3J0IGNsYXNzIEJxT3B0aW9uR3JvdXAge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcU9wdGlvbkdyb3VwRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFPcHRpb25Hcm91cCBleHRlbmRzIENvbXBvbmVudHMuQnFPcHRpb25Hcm91cCB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydhcmlhTGFiZWwnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLW9wdGlvbi1saXN0JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydhcmlhTGFiZWwnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnFPcHRpb25MaXN0IHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFPcHRpb25MaXN0RWxlbWVudDtcbiAgICAvKipcbiAgICogQXJpYSBsYWJlbCBmb3IgdGhlIGxpc3QuXG4gICAqL1xuICBzZXQgYXJpYUxhYmVsKF86IENvbXBvbmVudHMuQnFPcHRpb25MaXN0WydhcmlhTGFiZWwnXSkge307XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2JxU2VsZWN0J10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxT3B0aW9uTGlzdCBleHRlbmRzIENvbXBvbmVudHMuQnFPcHRpb25MaXN0IHtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gYGJxLW9wdGlvbmAgaXMgc2VsZWN0ZWQgKG9uIGNsaWNrL2VudGVyIHByZXNzKS5cbiAgICovXG4gIGJxU2VsZWN0OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8eyB2YWx1ZTogc3RyaW5nOyBpdGVtOiBIVE1MQnFPcHRpb25FbGVtZW50IH0+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLXBhZ2UtdGl0bGUnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgQnFQYWdlVGl0bGUge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcVBhZ2VUaXRsZUVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxUGFnZVRpdGxlIGV4dGVuZHMgQ29tcG9uZW50cy5CcVBhZ2VUaXRsZSB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydkaXN0YW5jZScsICdvcGVuJywgJ3BsYWNlbWVudCcsICdzYW1lV2lkdGgnLCAnc2tpZGRpbmcnLCAnc3RyYXRlZ3knXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLXBhbmVsJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydkaXN0YW5jZScsICdvcGVuJywgJ3BsYWNlbWVudCcsICdzYW1lV2lkdGgnLCAnc2tpZGRpbmcnLCAnc3RyYXRlZ3knXSxcbn0pXG5leHBvcnQgY2xhc3MgQnFQYW5lbCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxUGFuZWxFbGVtZW50O1xuICAgIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSBkaXN0YW5jZSAoZ3V0dGVyIG9yIG1hcmdpbikgYmV0d2VlbiB0aGUgcGFuZWwgYW5kIHRoZSB0cmlnZ2VyIGVsZW1lbnQuXG4gICAqL1xuICBzZXQgZGlzdGFuY2UoXzogQ29tcG9uZW50cy5CcVBhbmVsWydkaXN0YW5jZSddKSB7fTtcbiAgICAvKipcbiAgICogUG9zaXRpb24gb2YgdGhlIHBhbmVsXG4gICAqL1xuICBzZXQgcGxhY2VtZW50KF86IENvbXBvbmVudHMuQnFQYW5lbFsncGxhY2VtZW50J10pIHt9O1xuICAgIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgcGFuZWwgd2lsbCBiZSB2aXNpYmxlLlxuICAgKi9cbiAgc2V0IG9wZW4oXzogQ29tcG9uZW50cy5CcVBhbmVsWydvcGVuJ10pIHt9O1xuICAgIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBwYW5lbCBzaG91bGQgaGF2ZSB0aGUgc2FtZSB3aWR0aCBhcyB0aGUgdHJpZ2dlciBlbGVtZW50XG4gICAqL1xuICBzZXQgc2FtZVdpZHRoKF86IENvbXBvbmVudHMuQnFQYW5lbFsnc2FtZVdpZHRoJ10pIHt9O1xuICAgIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSBza2lkZGluZyBiZXR3ZWVuIHRoZSBwYW5lbCBhbmQgdGhlIHRyaWdnZXIgZWxlbWVudC5cbiAgICovXG4gIHNldCBza2lkZGluZyhfOiBDb21wb25lbnRzLkJxUGFuZWxbJ3NraWRkaW5nJ10pIHt9O1xuICAgIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBzdHJhdGVneSB0byBwb3NpdGlvbiB0aGUgcGFuZWxcbiAgICovXG4gIHNldCBzdHJhdGVneShfOiBDb21wb25lbnRzLkJxUGFuZWxbJ3N0cmF0ZWd5J10pIHt9O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcVBhbmVsIGV4dGVuZHMgQ29tcG9uZW50cy5CcVBhbmVsIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2JvcmRlclNoYXBlJywgJ2VuYWJsZVRvb2x0aXAnLCAnaW5kZXRlcm1pbmF0ZScsICdsYWJlbCcsICd0aGlja25lc3MnLCAndHlwZScsICd2YWx1ZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtcHJvZ3Jlc3MnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2JvcmRlclNoYXBlJywgJ2VuYWJsZVRvb2x0aXAnLCAnaW5kZXRlcm1pbmF0ZScsICdsYWJlbCcsICd0aGlja25lc3MnLCAndHlwZScsICd2YWx1ZSddLFxufSlcbmV4cG9ydCBjbGFzcyBCcVByb2dyZXNzIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFQcm9ncmVzc0VsZW1lbnQ7XG4gICAgLyoqXG4gICAqIEl0IHdpbGwgc2V0IHRoZSBib3JkZXIgc3R5bGUgb2YgdGhlIHByb2dyZXNzIGJhclxuICAgKi9cbiAgc2V0IGJvcmRlclNoYXBlKF86IENvbXBvbmVudHMuQnFQcm9ncmVzc1snYm9yZGVyU2hhcGUnXSkge307XG4gICAgLyoqXG4gICAqIElmIGB0cnVlYCwgYSB0b29sdGlwIHdpbGwgYmUgc2hvd24gZGlzcGxheWluZyB0aGUgcHJvZ3Jlc3MgdmFsdWVcbiAgICovXG4gIHNldCBlbmFibGVUb29sdGlwKF86IENvbXBvbmVudHMuQnFQcm9ncmVzc1snZW5hYmxlVG9vbHRpcCddKSB7fTtcbiAgICAvKipcbiAgICogSWYgYHRydWVgIHRoZSBpbmRldGVybWluYXRlIHN0YXRlIG9mIHByb2dyZXNzIGJhciBpcyBlbmFibGVkXG4gICAqL1xuICBzZXQgaW5kZXRlcm1pbmF0ZShfOiBDb21wb25lbnRzLkJxUHJvZ3Jlc3NbJ2luZGV0ZXJtaW5hdGUnXSkge307XG4gICAgLyoqXG4gICAqIElmIGB0cnVlLCBhIGxhYmVsIHRleHQgc2hvd2luZyB0aGUgdmFsdWUgKGluIHBlcmNlbnRhZ2UpIHdpbGwgYmUgc2hvd25cbiAgICovXG4gIHNldCBsYWJlbChfOiBDb21wb25lbnRzLkJxUHJvZ3Jlc3NbJ2xhYmVsJ10pIHt9O1xuICAgIC8qKlxuICAgKiBQcm9ncmVzcyBiYXIgdGhpY2tuZXNzXG4gICAqL1xuICBzZXQgdGhpY2tuZXNzKF86IENvbXBvbmVudHMuQnFQcm9ncmVzc1sndGhpY2tuZXNzJ10pIHt9O1xuICAgIC8qKlxuICAgKiBQcm9ncmVzcyB0eXBlXG4gICAqL1xuICBzZXQgdHlwZShfOiBDb21wb25lbnRzLkJxUHJvZ3Jlc3NbJ3R5cGUnXSkge307XG4gICAgLyoqXG4gICAqIEEgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgcHJvZ3Jlc3MgYmFyXG4gICAqL1xuICBzZXQgdmFsdWUoXzogQ29tcG9uZW50cy5CcVByb2dyZXNzWyd2YWx1ZSddKSB7fTtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFQcm9ncmVzcyBleHRlbmRzIENvbXBvbmVudHMuQnFQcm9ncmVzcyB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydiYWNrZ3JvdW5kT25Ib3ZlcicsICdjaGVja2VkJywgJ2Rpc2FibGVkJywgJ2Zvcm1JZCcsICduYW1lJywgJ3JlcXVpcmVkJywgJ3ZhbHVlJ10sXG4gIG1ldGhvZHM6IFsndkNsaWNrJywgJ3ZGb2N1cycsICd2Qmx1cicsICdnZXROYXRpdmVJbnB1dCddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtcmFkaW8nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2JhY2tncm91bmRPbkhvdmVyJywgJ2NoZWNrZWQnLCAnZGlzYWJsZWQnLCAnZm9ybUlkJywgJ25hbWUnLCAncmVxdWlyZWQnLCAndmFsdWUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnFSYWRpbyB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxUmFkaW9FbGVtZW50O1xuICAgIC8qKlxuICAgKiBJZiB0cnVlIHJhZGlvIGlucHV0IGlzIGNoZWNrZWRcbiAgICovXG4gIHNldCBjaGVja2VkKF86IENvbXBvbmVudHMuQnFSYWRpb1snY2hlY2tlZCddKSB7fTtcbiAgICAvKipcbiAgICogSWYgdHJ1ZSByYWRpbyBpbnB1dCBpcyBkaXNhYmxlZFxuICAgKi9cbiAgc2V0IGRpc2FibGVkKF86IENvbXBvbmVudHMuQnFSYWRpb1snZGlzYWJsZWQnXSkge307XG4gICAgLyoqXG4gICAqIElmIHRydWUgcmFkaW8gZGlzcGxheXMgYmFja2dyb3VuZCBvbiBob3ZlclxuICAgKi9cbiAgc2V0IGJhY2tncm91bmRPbkhvdmVyKF86IENvbXBvbmVudHMuQnFSYWRpb1snYmFja2dyb3VuZE9uSG92ZXInXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBmb3JtIElEIHRoYXQgdGhlIHJhZGlvIGlucHV0IGlzIGFzc29jaWF0ZWQgd2l0aFxuICAgKi9cbiAgc2V0IGZvcm1JZChfOiBDb21wb25lbnRzLkJxUmFkaW9bJ2Zvcm1JZCddKSB7fTtcbiAgICAvKipcbiAgICogTmFtZSBvZiB0aGUgSFRNTCBpbnB1dCBmb3JtIGNvbnRyb2wuIFN1Ym1pdHRlZCB3aXRoIHRoZSBmb3JtIGFzIHBhcnQgb2YgYSBuYW1lL3ZhbHVlIHBhaXIuXG4gICAqL1xuICBzZXQgbmFtZShfOiBDb21wb25lbnRzLkJxUmFkaW9bJ25hbWUnXSkge307XG4gICAgLyoqXG4gICAqIElmIGB0cnVlYCwgaXQgd2lsbCBpbmRpY2F0ZSB0aGF0IHRoZSB1c2VyIG11c3Qgc3BlY2lmeSBhIHZhbHVlIGZvciB0aGUgcmFkaW8gYmVmb3JlIHRoZSBvd25pbmcgZm9ybSBjYW4gYmUgc3VibWl0dGVkXG4gICAqL1xuICBzZXQgcmVxdWlyZWQoXzogQ29tcG9uZW50cy5CcVJhZGlvWydyZXF1aXJlZCddKSB7fTtcbiAgICAvKipcbiAgICogQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSB2YWx1ZSBvZiB0aGUgcmFkaW8uXG4gICAqL1xuICBzZXQgdmFsdWUoXzogQ29tcG9uZW50cy5CcVJhZGlvWyd2YWx1ZSddKSB7fTtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYnFDbGljaycsICdicUZvY3VzJywgJ2JxQmx1cicsICdicUtleURvd24nXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFSYWRpbyBleHRlbmRzIENvbXBvbmVudHMuQnFSYWRpbyB7XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSByYWRpbyBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBicUNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxUmFkaW9FbGVtZW50Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSByYWRpbyBnZXRzIGZvY3VzXG4gICAqL1xuICBicUZvY3VzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxUmFkaW9FbGVtZW50Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSByYWRpbyBsb3NlcyBmb2N1c1xuICAgKi9cbiAgYnFCbHVyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxUmFkaW9FbGVtZW50Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSByYWRpbyBrZXkgaXMgcHJlc3NlZFxuICAgKi9cbiAgYnFLZXlEb3duOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8S2V5Ym9hcmRFdmVudD4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydiYWNrZ3JvdW5kT25Ib3ZlcicsICdkZWJvdW5jZVRpbWUnLCAnZGlzYWJsZWQnLCAnZmllbGRzZXQnLCAnbmFtZScsICdvcmllbnRhdGlvbicsICdyZXF1aXJlZCcsICdyZXF1aXJlZFZhbGlkYXRpb25NZXNzYWdlJywgJ3ZhbHVlJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1yYWRpby1ncm91cCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYmFja2dyb3VuZE9uSG92ZXInLCAnZGVib3VuY2VUaW1lJywgJ2Rpc2FibGVkJywgJ2ZpZWxkc2V0JywgJ25hbWUnLCAnb3JpZW50YXRpb24nLCAncmVxdWlyZWQnLCAncmVxdWlyZWRWYWxpZGF0aW9uTWVzc2FnZScsICd2YWx1ZSddLFxufSlcbmV4cG9ydCBjbGFzcyBCcVJhZGlvR3JvdXAge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcVJhZGlvR3JvdXBFbGVtZW50O1xuICAgIC8qKlxuICAgKiBJZiB0cnVlLCBhbGwgcmFkaW8gaW5wdXRzIGluIHRoZSBncm91cCB3aWxsIGRpc3BsYXkgYSBiYWNrZ3JvdW5kIG9uIGhvdmVyXG4gICAqL1xuICBzZXQgYmFja2dyb3VuZE9uSG92ZXIoXzogQ29tcG9uZW50cy5CcVJhZGlvR3JvdXBbJ2JhY2tncm91bmRPbkhvdmVyJ10pIHt9O1xuICAgIC8qKlxuICAgKiBBIG51bWJlciByZXByZXNlbnRpbmcgdGhlIGRlbGF5IHRpbWUgKGluIG1pbGxpc2Vjb25kcykgdGhhdCBgYnFDaGFuZ2VgIGV2ZW50IGhhbmRsZXIgZ2V0cyB0cmlnZ2VyZWQgb25jZSB0aGUgdmFsdWUgY2hhbmdlXG4gICAqL1xuICBzZXQgZGVib3VuY2VUaW1lKF86IENvbXBvbmVudHMuQnFSYWRpb0dyb3VwWydkZWJvdW5jZVRpbWUnXSkge307XG4gICAgLyoqXG4gICAqIElmIHRydWUgcmFkaW8gaW5wdXRzIGFyZSBkaXNhYmxlZFxuICAgKi9cbiAgc2V0IGRpc2FibGVkKF86IENvbXBvbmVudHMuQnFSYWRpb0dyb3VwWydkaXNhYmxlZCddKSB7fTtcbiAgICAvKipcbiAgICogSWYgdHJ1ZSBkaXNwbGF5cyBmaWVsZHNldFxuICAgKi9cbiAgc2V0IGZpZWxkc2V0KF86IENvbXBvbmVudHMuQnFSYWRpb0dyb3VwWydmaWVsZHNldCddKSB7fTtcbiAgICAvKipcbiAgICogTmFtZSBvZiB0aGUgSFRNTCBpbnB1dCBmb3JtIGNvbnRyb2wuIFN1Ym1pdHRlZCB3aXRoIHRoZSBmb3JtIGFzIHBhcnQgb2YgYSBuYW1lL3ZhbHVlIHBhaXIuXG4gICAqL1xuICBzZXQgbmFtZShfOiBDb21wb25lbnRzLkJxUmFkaW9Hcm91cFsnbmFtZSddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIGRpc3BsYXkgb3JpZW50YXRpb24gb2YgdGhlIHJhZGlvIGlucHV0c1xuICAgKi9cbiAgc2V0IG9yaWVudGF0aW9uKF86IENvbXBvbmVudHMuQnFSYWRpb0dyb3VwWydvcmllbnRhdGlvbiddKSB7fTtcbiAgICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIHJhZGlvIGdyb3VwIGlzIHJlcXVpcmVkXG4gICAqL1xuICBzZXQgcmVxdWlyZWQoXzogQ29tcG9uZW50cy5CcVJhZGlvR3JvdXBbJ3JlcXVpcmVkJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgbmF0aXZlIGZvcm0gdmFsaWRhdGlvbiBtZXNzYWdlIHdoZW4gdGhlIHJhZGlvIGdyb3VwIGlzIHJlcXVpcmVkXG4gICAqL1xuICBzZXQgcmVxdWlyZWRWYWxpZGF0aW9uTWVzc2FnZShfOiBDb21wb25lbnRzLkJxUmFkaW9Hcm91cFsncmVxdWlyZWRWYWxpZGF0aW9uTWVzc2FnZSddKSB7fTtcbiAgICAvKipcbiAgICogQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSB2YWx1ZSBvZiB0aGUgcmFkaW8uXG4gICAqL1xuICBzZXQgdmFsdWUoXzogQ29tcG9uZW50cy5CcVJhZGlvR3JvdXBbJ3ZhbHVlJ10pIHt9O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydicUNoYW5nZSddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcVJhZGlvR3JvdXAgZXh0ZW5kcyBDb21wb25lbnRzLkJxUmFkaW9Hcm91cCB7XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSByYWRpbyBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBicUNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHsgdmFsdWU6IHN0cmluZzsgdGFyZ2V0OiBIVE1MQnFSYWRpb0VsZW1lbnQgfT4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtcm93JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogW10sXG59KVxuZXhwb3J0IGNsYXNzIEJxUm93IHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFSb3dFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcVJvdyBleHRlbmRzIENvbXBvbmVudHMuQnFSb3cge31cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYXV0b2ZvY3VzJywgJ2NsZWFyQnV0dG9uTGFiZWwnLCAnZGVib3VuY2VUaW1lJywgJ2Rpc2FibGVDbGVhcicsICdkaXNhYmxlZCcsICdkaXN0YW5jZScsICdmb3JtJywgJ2tlZXBPcGVuT25TZWxlY3QnLCAnbWF4VGFnc1Zpc2libGUnLCAnbXVsdGlwbGUnLCAnbmFtZScsICdvcGVuJywgJ3BhbmVsSGVpZ2h0JywgJ3BsYWNlaG9sZGVyJywgJ3BsYWNlbWVudCcsICdyZWFkb25seScsICdyZXF1aXJlZCcsICdzYW1lV2lkdGgnLCAnc2tpZGRpbmcnLCAnc3RyYXRlZ3knLCAndmFsaWRhdGlvblN0YXR1cycsICd2YWx1ZSddLFxuICBtZXRob2RzOiBbJ2NsZWFyJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1zZWxlY3QnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2F1dG9mb2N1cycsICdjbGVhckJ1dHRvbkxhYmVsJywgJ2RlYm91bmNlVGltZScsICdkaXNhYmxlQ2xlYXInLCAnZGlzYWJsZWQnLCAnZGlzdGFuY2UnLCAnZm9ybScsICdrZWVwT3Blbk9uU2VsZWN0JywgJ21heFRhZ3NWaXNpYmxlJywgJ211bHRpcGxlJywgJ25hbWUnLCAnb3BlbicsICdwYW5lbEhlaWdodCcsICdwbGFjZWhvbGRlcicsICdwbGFjZW1lbnQnLCAncmVhZG9ubHknLCAncmVxdWlyZWQnLCAnc2FtZVdpZHRoJywgJ3NraWRkaW5nJywgJ3N0cmF0ZWd5JywgJ3ZhbGlkYXRpb25TdGF0dXMnLCAndmFsdWUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnFTZWxlY3Qge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcVNlbGVjdEVsZW1lbnQ7XG4gICAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBTZWxlY3QgaW5wdXQgd2lsbCBiZSBmb2N1c2VkIG9uIGNvbXBvbmVudCByZW5kZXJcbiAgICovXG4gIHNldCBhdXRvZm9jdXMoXzogQ29tcG9uZW50cy5CcVNlbGVjdFsnYXV0b2ZvY3VzJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgY2xlYXIgYnV0dG9uIGFyaWEgbGFiZWxcbiAgICovXG4gIHNldCBjbGVhckJ1dHRvbkxhYmVsKF86IENvbXBvbmVudHMuQnFTZWxlY3RbJ2NsZWFyQnV0dG9uTGFiZWwnXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBhbW91bnQgb2YgdGltZSwgaW4gbWlsbGlzZWNvbmRzLCB0byB3YWl0IGJlZm9yZSBlbWl0dGluZyB0aGUgYGJxSW5wdXRgIGV2ZW50IGFmdGVyIHRoZSBpbnB1dCB2YWx1ZSBjaGFuZ2VzLlxuQSB2YWx1ZSBvZiAwIG1lYW5zIG5vIGRlYm91bmNpbmcgd2lsbCBvY2N1ci5cbiAgICovXG4gIHNldCBkZWJvdW5jZVRpbWUoXzogQ29tcG9uZW50cy5CcVNlbGVjdFsnZGVib3VuY2VUaW1lJ10pIHt9O1xuICAgIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgU2VsZWN0IGlucHV0IGlzIGRpc2FibGVkIG9yIG5vdC5cbklmIGB0cnVlYCwgdGhlIFNlbGVjdCBpcyBkaXNhYmxlZCBhbmQgY2Fubm90IGJlIGludGVyYWN0ZWQgd2l0aC5cbiAgICovXG4gIHNldCBkaXNhYmxlZChfOiBDb21wb25lbnRzLkJxU2VsZWN0WydkaXNhYmxlZCddKSB7fTtcbiAgICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGNsZWFyIGJ1dHRvbiB3b24ndCBiZSBkaXNwbGF5ZWRcbiAgICovXG4gIHNldCBkaXNhYmxlQ2xlYXIoXzogQ29tcG9uZW50cy5CcVNlbGVjdFsnZGlzYWJsZUNsZWFyJ10pIHt9O1xuICAgIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSBkaXN0YW5jZSAoZ3V0dGVyIG9yIG1hcmdpbikgYmV0d2VlbiB0aGUgU2VsZWN0IHBhbmVsIGFuZCB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIHNldCBkaXN0YW5jZShfOiBDb21wb25lbnRzLkJxU2VsZWN0WydkaXN0YW5jZSddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBmb3JtIHRoYXQgdGhlIFNlbGVjdCBpbnB1dCBiZWxvbmdzIHRvLlxuICAgKi9cbiAgc2V0IGZvcm0oXzogQ29tcG9uZW50cy5CcVNlbGVjdFsnZm9ybSddKSB7fTtcbiAgICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIFNlbGVjdCBwYW5lbCB3aWxsIHJlbWFpbiBvcGVuIGFmdGVyIGEgc2VsZWN0aW9uIGlzIG1hZGUuXG4gICAqL1xuICBzZXQga2VlcE9wZW5PblNlbGVjdChfOiBDb21wb25lbnRzLkJxU2VsZWN0WydrZWVwT3Blbk9uU2VsZWN0J10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgU2VsZWN0IGlucHV0IG5hbWUuXG4gICAqL1xuICBzZXQgbmFtZShfOiBDb21wb25lbnRzLkJxU2VsZWN0WyduYW1lJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgdGFncyB0byBkaXNwbGF5IHdoZW4gbXVsdGlwbGUgc2VsZWN0aW9uIGlzIGVuYWJsZWRcbiAgICovXG4gIHNldCBtYXhUYWdzVmlzaWJsZShfOiBDb21wb25lbnRzLkJxU2VsZWN0WydtYXhUYWdzVmlzaWJsZSddKSB7fTtcbiAgICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIFNlbGVjdCBpbnB1dCB3aWxsIGFsbG93IG11bHRpcGxlIHNlbGVjdGlvbnMuXG4gICAqL1xuICBzZXQgbXVsdGlwbGUoXzogQ29tcG9uZW50cy5CcVNlbGVjdFsnbXVsdGlwbGUnXSkge307XG4gICAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBTZWxlY3QgcGFuZWwgd2lsbCBiZSB2aXNpYmxlLlxuICAgKi9cbiAgc2V0IG9wZW4oXzogQ29tcG9uZW50cy5CcVNlbGVjdFsnb3BlbiddKSB7fTtcbiAgICAvKipcbiAgICogV2hlbiBzZXQsIGl0IHdpbGwgb3ZlcnJpZGUgdGhlIGhlaWdodCBvZiB0aGUgU2VsZWN0IHBhbmVsLlxuICAgKi9cbiAgc2V0IHBhbmVsSGVpZ2h0KF86IENvbXBvbmVudHMuQnFTZWxlY3RbJ3BhbmVsSGVpZ2h0J10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgU2VsZWN0IGlucHV0IHBsYWNlaG9sZGVyIHRleHQgdmFsdWVcbiAgICovXG4gIHNldCBwbGFjZWhvbGRlcihfOiBDb21wb25lbnRzLkJxU2VsZWN0WydwbGFjZWhvbGRlciddKSB7fTtcbiAgICAvKipcbiAgICogUG9zaXRpb24gb2YgdGhlIFNlbGVjdCBwYW5lbFxuICAgKi9cbiAgc2V0IHBsYWNlbWVudChfOiBDb21wb25lbnRzLkJxU2VsZWN0WydwbGFjZW1lbnQnXSkge307XG4gICAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBsaXN0IG9mIG9wdGlvbnMgY2Fubm90IGJlIGZpbHRlcmVkIChzZWFyY2hpbmcgd29uJ3QgYmUgYXZhaWxhYmxlKVxuICAgKi9cbiAgc2V0IHJlYWRvbmx5KF86IENvbXBvbmVudHMuQnFTZWxlY3RbJ3JlYWRvbmx5J10pIHt9O1xuICAgIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciBvciBub3QgdGhlIFNlbGVjdCBpbnB1dCBpcyByZXF1aXJlZCB0byBiZSBmaWxsZWQgb3V0IGJlZm9yZSBzdWJtaXR0aW5nIHRoZSBmb3JtLlxuICAgKi9cbiAgc2V0IHJlcXVpcmVkKF86IENvbXBvbmVudHMuQnFTZWxlY3RbJ3JlcXVpcmVkJ10pIHt9O1xuICAgIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBwYW5lbCBzaG91bGQgaGF2ZSB0aGUgU2VsZWN0IHNhbWUgd2lkdGggYXMgdGhlIGlucHV0IGVsZW1lbnRcbiAgICovXG4gIHNldCBzYW1lV2lkdGgoXzogQ29tcG9uZW50cy5CcVNlbGVjdFsnc2FtZVdpZHRoJ10pIHt9O1xuICAgIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSBza2lkZGluZyBiZXR3ZWVuIHRoZSBTZWxlY3QgcGFuZWwgYW5kIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgc2V0IHNraWRkaW5nKF86IENvbXBvbmVudHMuQnFTZWxlY3RbJ3NraWRkaW5nJ10pIHt9O1xuICAgIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBzdHJhdGVneSB0byBwb3NpdGlvbiB0aGUgU2VsZWN0IHBhbmVsXG4gICAqL1xuICBzZXQgc3RyYXRlZ3koXzogQ29tcG9uZW50cy5CcVNlbGVjdFsnc3RyYXRlZ3knXSkge307XG4gICAgLyoqXG4gICAqIFRoZSB2YWxpZGF0aW9uIHN0YXR1cyBvZiB0aGUgU2VsZWN0IGlucHV0LiBAcmVtYXJrcyBUaGlzIHByb3BlcnR5IGlzIHVzZWQgdG8gaW5kaWNhdGUgdGhlIHZhbGlkYXRpb24gc3RhdHVzIG9mIHRoZSBzZWxlY3QgaW5wdXQuIEl0IGNhbiBiZSBzZXQgdG8gb25lIG9mIHRoZSBmb2xsb3dpbmcgdmFsdWVzOlxuLSBgJ25vbmUnYDogTm8gdmFsaWRhdGlvbiBzdGF0dXMgaXMgc2V0LlxuLSBgJ2Vycm9yJ2A6IFRoZSBpbnB1dCBoYXMgYSB2YWxpZGF0aW9uIGVycm9yLlxuLSBgJ3dhcm5pbmcnYDogVGhlIGlucHV0IGhhcyBhIHZhbGlkYXRpb24gd2FybmluZy5cbi0gYCdzdWNjZXNzJ2A6IFRoZSBpbnB1dCBoYXMgcGFzc2VkIHZhbGlkYXRpb24uXG4gICAqL1xuICBzZXQgdmFsaWRhdGlvblN0YXR1cyhfOiBDb21wb25lbnRzLkJxU2VsZWN0Wyd2YWxpZGF0aW9uU3RhdHVzJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgc2VsZWN0IGlucHV0IHZhbHVlLCBpdCBjYW4gYmUgdXNlZCB0byByZXNldCB0aGUgZmllbGQgdG8gYSBwcmV2aW91cyB2YWx1ZVxuICAgKi9cbiAgc2V0IHZhbHVlKF86IENvbXBvbmVudHMuQnFTZWxlY3RbJ3ZhbHVlJ10pIHt9O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydicUJsdXInLCAnYnFDbGVhcicsICdicUZvY3VzJywgJ2JxU2VsZWN0J10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxU2VsZWN0IGV4dGVuZHMgQ29tcG9uZW50cy5CcVNlbGVjdCB7XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIGVtaXR0ZWQgd2hlbiB0aGUgU2VsZWN0IGlucHV0IGxvc2VzIGZvY3VzXG4gICAqL1xuICBicUJsdXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFTZWxlY3RFbGVtZW50Pj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIGVtaXR0ZWQgd2hlbiB0aGUgc2VsZWN0ZWQgdmFsdWUgaGFzIGJlZW4gY2xlYXJlZFxuICAgKi9cbiAgYnFDbGVhcjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcVNlbGVjdEVsZW1lbnQ+PjtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgZW1pdHRlZCB3aGVuIHRoZSBTZWxlY3QgaW5wdXQgaGFzIHJlY2VpdmVkIGZvY3VzXG4gICAqL1xuICBicUZvY3VzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxU2VsZWN0RWxlbWVudD4+O1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciBlbWl0dGVkIHdoZW4gdGhlIHNlbGVjdGVkIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAqL1xuICBicVNlbGVjdDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHsgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IHN0cmluZ1tdOyBpdGVtOiBIVE1MQnFPcHRpb25FbGVtZW50IH0+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYXBwZWFyYW5jZScsICdjb2xsYXBzZScsICdzaXplJ10sXG4gIG1ldGhvZHM6IFsndG9nZ2xlQ29sbGFwc2UnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLXNpZGUtbWVudScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYXBwZWFyYW5jZScsICdjb2xsYXBzZScsICdzaXplJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJxU2lkZU1lbnUge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcVNpZGVNZW51RWxlbWVudDtcbiAgICAvKipcbiAgICogSXQgc2V0cyBhIHByZWRlZmluZWQgYXBwZWFyYW5jZSBvZiB0aGUgc2lkZSBtZW51XG4gICAqL1xuICBzZXQgYXBwZWFyYW5jZShfOiBDb21wb25lbnRzLkJxU2lkZU1lbnVbJ2FwcGVhcmFuY2UnXSkge307XG4gICAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBjb250YWluZXIgd2lsbCByZWR1Y2UgaXRzIHdpZHRoXG4gICAqL1xuICBzZXQgY29sbGFwc2UoXzogQ29tcG9uZW50cy5CcVNpZGVNZW51Wydjb2xsYXBzZSddKSB7fTtcbiAgICAvKipcbiAgICogSXQgc2V0cyB0aGUgc2l6ZSBvZiB0aGUgbmF2aWdhdGlvbiBtZW51IGl0ZW1zXG4gICAqL1xuICBzZXQgc2l6ZShfOiBDb21wb25lbnRzLkJxU2lkZU1lbnVbJ3NpemUnXSkge307XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2JxQ29sbGFwc2UnLCAnYnFTZWxlY3QnXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFTaWRlTWVudSBleHRlbmRzIENvbXBvbmVudHMuQnFTaWRlTWVudSB7XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBTaWRlIG1lbnUgY2hhbmdlcyBpdHMgd2lkdGggZnJvbSBleHBhbmRlZCB0byBjb2xsYXBzZSBhbmQgdmljZSB2ZXJzYVxuICAgKi9cbiAgYnFDb2xsYXBzZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHsgY29sbGFwc2U6IGJvb2xlYW4gfT4+O1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgYWN0aXZlL3NlbGVjdGVkIG1lbnUgaXRlbSBjaGFuZ2VzXG4gICAqL1xuICBicVNlbGVjdDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcVNpZGVNZW51SXRlbUVsZW1lbnQ+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYWN0aXZlJywgJ2NvbGxhcHNlJywgJ2Rpc2FibGVkJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1zaWRlLW1lbnUtaXRlbScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYWN0aXZlJywgJ2NvbGxhcHNlJywgJ2Rpc2FibGVkJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJxU2lkZU1lbnVJdGVtIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFTaWRlTWVudUl0ZW1FbGVtZW50O1xuICAgIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgbWVudSBpdGVtIHdpbGwgYmUgc2hvd24gYXMgYWN0aXZlL3NlbGVjdGVkLlxuICAgKi9cbiAgc2V0IGFjdGl2ZShfOiBDb21wb25lbnRzLkJxU2lkZU1lbnVJdGVtWydhY3RpdmUnXSkge307XG4gICAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBpdGVtIGxhYmVsIGFuZCBzdWZmaXggd2lsbCBiZSBoaWRkZW4gYW5kIHRoZSB3aXRoIHdpbGwgYmUgcmVkdWNlIGFjY29yZGluZyB0byBpdHMgcGFyZW50XG4gICAqL1xuICBzZXQgY29sbGFwc2UoXzogQ29tcG9uZW50cy5CcVNpZGVNZW51SXRlbVsnY29sbGFwc2UnXSkge307XG4gICAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBtZW51IGl0ZW0gd2lsbCBiZSBkaXNhYmxlZCAobm8gaW50ZXJhY3Rpb24gYWxsb3dlZClcbiAgICovXG4gIHNldCBkaXNhYmxlZChfOiBDb21wb25lbnRzLkJxU2lkZU1lbnVJdGVtWydkaXNhYmxlZCddKSB7fTtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYnFCbHVyJywgJ2JxRm9jdXMnLCAnYnFDbGljayddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcVNpZGVNZW51SXRlbSBleHRlbmRzIENvbXBvbmVudHMuQnFTaWRlTWVudUl0ZW0ge1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgYnV0dG9uIGxvc2VzIGZvY3VzXG4gICAqL1xuICBicUJsdXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFTaWRlTWVudUl0ZW1FbGVtZW50Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZFxuICAgKi9cbiAgYnFGb2N1czogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcVNpZGVNZW51SXRlbUVsZW1lbnQ+PjtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gYnV0dG9uIGdldHMgZm9jdXNcbiAgICovXG4gIGJxQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFTaWRlTWVudUl0ZW1FbGVtZW50Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2RlYm91bmNlVGltZScsICdkaXNhYmxlZCcsICdlbmFibGVUb29sdGlwJywgJ2VuYWJsZVZhbHVlSW5kaWNhdG9yJywgJ2dhcCcsICdtYXgnLCAnbWluJywgJ25hbWUnLCAnc3RlcCcsICd0b29sdGlwQWx3YXlzVmlzaWJsZScsICd0eXBlJywgJ3ZhbHVlJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1zbGlkZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2RlYm91bmNlVGltZScsICdkaXNhYmxlZCcsICdlbmFibGVUb29sdGlwJywgJ2VuYWJsZVZhbHVlSW5kaWNhdG9yJywgJ2dhcCcsICdtYXgnLCAnbWluJywgJ25hbWUnLCAnc3RlcCcsICd0b29sdGlwQWx3YXlzVmlzaWJsZScsICd0eXBlJywgJ3ZhbHVlJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJxU2xpZGVyIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFTbGlkZXJFbGVtZW50O1xuICAgIC8qKlxuICAgKiBUaGUgYW1vdW50IG9mIHRpbWUsIGluIG1pbGxpc2Vjb25kcywgdG8gd2FpdCB0byB0cmlnZ2VyIHRoZSBgYnFDaGFuZ2VgIGV2ZW50IGFmdGVyIGVhY2ggdmFsdWUgY2hhbmdlLlxuICAgKi9cbiAgc2V0IGRlYm91bmNlVGltZShfOiBDb21wb25lbnRzLkJxU2xpZGVyWydkZWJvdW5jZVRpbWUnXSkge307XG4gICAgLyoqXG4gICAqIElmIGB0cnVlYCB0aGUgc2xpZGVyIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgc2V0IGRpc2FibGVkKF86IENvbXBvbmVudHMuQnFTbGlkZXJbJ2Rpc2FibGVkJ10pIHt9O1xuICAgIC8qKlxuICAgKiBJZiBgdHJ1ZWAgaXQgd2lsbCBzaG93IHRoZSB2YWx1ZSBsYWJlbCBvbiBhIHNpZGUgb2YgdGhlIHNsaWRlciB0cmFjayBhcmVhXG4gICAqL1xuICBzZXQgZW5hYmxlVmFsdWVJbmRpY2F0b3IoXzogQ29tcG9uZW50cy5CcVNsaWRlclsnZW5hYmxlVmFsdWVJbmRpY2F0b3InXSkge307XG4gICAgLyoqXG4gICAqIEEgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgYW1vdW50IHRvIHJlbWFpbiBiZXR3ZWVuIHRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIHZhbHVlcyAob25seSBmb3IgcmFuZ2UgdHlwZSkuXG4gICAqL1xuICBzZXQgZ2FwKF86IENvbXBvbmVudHMuQnFTbGlkZXJbJ2dhcCddKSB7fTtcbiAgICAvKipcbiAgICogQSBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBtYXggdmFsdWUgb2YgdGhlIHNsaWRlci5cbiAgICovXG4gIHNldCBtYXgoXzogQ29tcG9uZW50cy5CcVNsaWRlclsnbWF4J10pIHt9O1xuICAgIC8qKlxuICAgKiBBIG51bWJlciByZXByZXNlbnRpbmcgdGhlIG1pbiB2YWx1ZSBvZiB0aGUgc2xpZGVyLlxuICAgKi9cbiAgc2V0IG1pbihfOiBDb21wb25lbnRzLkJxU2xpZGVyWydtaW4nXSkge307XG4gICAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIGZvcm0gY29udHJvbC4gU3VibWl0dGVkIHdpdGggdGhlIGZvcm0gYXMgcGFydCBvZiBhIG5hbWUvdmFsdWUgcGFpclxuICAgKi9cbiAgc2V0IG5hbWUoXzogQ29tcG9uZW50cy5CcVNsaWRlclsnbmFtZSddKSB7fTtcbiAgICAvKipcbiAgICogQSBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBzdGVwIG9mIHRoZSBzbGlkZXIuXG7imqDvuI8gUGxlYXNlIG5vdGljZSB0aGF0IHRoZSB2YWx1ZSAob3IgbGlzdCBvZiB2YWx1ZXMgaWYgdGhlIHNsaWRlciB0eXBlIGlzIGByYW5nZWApIHdpbGwgYmUgcm91bmRlZCB0byB0aGUgbmVhcmVzdCBtdWx0aXBsZSBvZiBgc3RlcGAuXG4gICAqL1xuICBzZXQgc3RlcChfOiBDb21wb25lbnRzLkJxU2xpZGVyWydzdGVwJ10pIHt9O1xuICAgIC8qKlxuICAgKiBJdCBkZWZpbmVzIHRoZSB0eXBlIG9mIHNsaWRlciB0byBkaXNwbGF5XG4gICAqL1xuICBzZXQgdHlwZShfOiBDb21wb25lbnRzLkJxU2xpZGVyWyd0eXBlJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIHNsaWRlci5cbi0gSWYgdGhlIHNsaWRlciB0eXBlIGlzIGBzaW5nbGVgLCB0aGUgdmFsdWUgaXMgYSBudW1iZXIuXG4tIElmIHRoZSBzbGlkZXIgdHlwZSBpcyBgcmFuZ2VgLCB0aGUgdmFsdWUgaXMgYW4gYXJyYXkgb2YgdHdvIG51bWJlcnMgKHRoZSBmaXJzdCBudW1iZXIgcmVwcmVzZW50cyB0aGUgYG1pbmAgdmFsdWUgYW5kIHRoZSBzZWNvbmQgbnVtYmVyIHJlcHJlc2VudHMgdGhlIGBtYXhgIHZhbHVlKS5cbiAgICovXG4gIHNldCB2YWx1ZShfOiBDb21wb25lbnRzLkJxU2xpZGVyWyd2YWx1ZSddKSB7fTtcbiAgICAvKipcbiAgICogSWYgYHRydWVgLCBhIHRvb2x0aXAgd2lsbCBiZSBzaG93biBkaXNwbGF5aW5nIHRoZSBwcm9ncmVzcyB2YWx1ZVxuICAgKi9cbiAgc2V0IGVuYWJsZVRvb2x0aXAoXzogQ29tcG9uZW50cy5CcVNsaWRlclsnZW5hYmxlVG9vbHRpcCddKSB7fTtcbiAgICAvKipcbiAgICogSWYgYHRydWVgLCBhIHRvb2x0aXAgd2lsbCBhbHdheXMgZGlzcGxheSB0aGUgcHJvZ3Jlc3MgdmFsdWUuXG5JdCByZWxpZXMgb24gZW5hYmxlVG9vbHRpcCBhbmQgaWYgZW5hYmxlVG9vbHRpcCBpcyBmYWxzZSwgdG9vbHRpcEFsd2F5c1Zpc2libGUgY2Fubm90IGJlIHRydWUuXG4gICAqL1xuICBzZXQgdG9vbHRpcEFsd2F5c1Zpc2libGUoXzogQ29tcG9uZW50cy5CcVNsaWRlclsndG9vbHRpcEFsd2F5c1Zpc2libGUnXSkge307XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2JxQ2hhbmdlJywgJ2JxQmx1cicsICdicUZvY3VzJ10pO1xuICB9XG59XG5cblxuaW1wb3J0IHR5cGUgeyBUU2xpZGVyVmFsdWUgYXMgSUJxU2xpZGVyVFNsaWRlclZhbHVlIH0gZnJvbSAnQGJlZXEvY29yZSc7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcVNsaWRlciBleHRlbmRzIENvbXBvbmVudHMuQnFTbGlkZXIge1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiBjaGFuZ2UgdGhlIHZhbHVlIG9uIHJhbmdlIGlucHV0c1xuICAgKi9cbiAgYnFDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx7IHZhbHVlOiBFeGNsdWRlPElCcVNsaWRlclRTbGlkZXJWYWx1ZSwgc3RyaW5nPjsgZWw6IEhUTUxCcVNsaWRlckVsZW1lbnQgfT4+O1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgc2xpZGVyIGxvc2VzIGZvY3VzXG4gICAqL1xuICBicUJsdXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFTbGlkZXJFbGVtZW50Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBzbGlkZXIgZ2V0cyBmb2N1c2VkXG4gICAqL1xuICBicUZvY3VzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxU2xpZGVyRWxlbWVudD4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydhbmltYXRpb24nLCAnc2l6ZScsICd0ZXh0UG9zaXRpb24nXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLXNwaW5uZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2FuaW1hdGlvbicsICdzaXplJywgJ3RleHRQb3NpdGlvbiddLFxufSlcbmV4cG9ydCBjbGFzcyBCcVNwaW5uZXIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcVNwaW5uZXJFbGVtZW50O1xuICAgIC8qKlxuICAgKiBJZiBgZmFsc2VgLCB0aGUgYW5pbWF0aW9uIG9uIHRoZSBpY29uIGVsZW1lbnQgd2lsbCBiZSBzdG9wcGVkXG4gICAqL1xuICBzZXQgYW5pbWF0aW9uKF86IENvbXBvbmVudHMuQnFTcGlubmVyWydhbmltYXRpb24nXSkge307XG4gICAgLyoqXG4gICAqIEl0IGRlZmluZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBsYWJlbCB0ZXh0XG4gICAqL1xuICBzZXQgdGV4dFBvc2l0aW9uKF86IENvbXBvbmVudHMuQnFTcGlubmVyWyd0ZXh0UG9zaXRpb24nXSkge307XG4gICAgLyoqXG4gICAqIEl0IGRlZmluZXMgdGhlIHNpemUgb2YgdGhlIGljb24gZWxlbWVudCBkaXNwbGF5ZWRcbiAgICovXG4gIHNldCBzaXplKF86IENvbXBvbmVudHMuQnFTcGlubmVyWydzaXplJ10pIHt9O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcVNwaW5uZXIgZXh0ZW5kcyBDb21wb25lbnRzLkJxU3Bpbm5lciB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWyd0eXBlJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1zdGF0dXMnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ3R5cGUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnFTdGF0dXMge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcVN0YXR1c0VsZW1lbnQ7XG4gICAgLyoqXG4gICAqIEl0IGRlZmluZXMgdGhlIHR5cGUgb2Ygc3RhdHVzIHRvIGRpc3BsYXlcbiAgICovXG4gIHNldCB0eXBlKF86IENvbXBvbmVudHMuQnFTdGF0dXNbJ3R5cGUnXSkge307XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxU3RhdHVzIGV4dGVuZHMgQ29tcG9uZW50cy5CcVN0YXR1cyB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydzaXplJywgJ3N0YXR1cycsICd0eXBlJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1zdGVwLWl0ZW0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ3NpemUnLCAnc3RhdHVzJywgJ3R5cGUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnFTdGVwSXRlbSB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxU3RlcEl0ZW1FbGVtZW50O1xuICAgIC8qKlxuICAgKiBJdCBkZWZpbmVzIHByZWZpeCBzaXplXG4gICAqL1xuICBzZXQgc2l6ZShfOiBDb21wb25lbnRzLkJxU3RlcEl0ZW1bJ3NpemUnXSkge307XG4gICAgLyoqXG4gICAqIEl0IGRlZmluZXMgc3RlcCBpdGVtIGFwcGVhcmFuY2UgYmFzZWQgb24gaXRzIHN0YXR1c1xuICAgKi9cbiAgc2V0IHN0YXR1cyhfOiBDb21wb25lbnRzLkJxU3RlcEl0ZW1bJ3N0YXR1cyddKSB7fTtcbiAgICAvKipcbiAgICogSXQgZGVmaW5lcyB0aGUgc3RlcCBpdGVtIHR5cGUgdXNlZFxuICAgKi9cbiAgc2V0IHR5cGUoXzogQ29tcG9uZW50cy5CcVN0ZXBJdGVtWyd0eXBlJ10pIHt9O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydicUNsaWNrJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxU3RlcEl0ZW0gZXh0ZW5kcyBDb21wb25lbnRzLkJxU3RlcEl0ZW0ge1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciBlbWl0dGVkIHdoZW4gdGhlIHN0ZXAgaXRlbSBpcyBjbGlja2VkXG4gICAqL1xuICBicUNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8eyB0YXJnZXQ6IEhUTUxCcVN0ZXBJdGVtRWxlbWVudDsgdmFsdWU6IHN0cmluZyB9Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2RpdmlkZXJDb2xvcicsICdzaXplJywgJ3R5cGUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLXN0ZXBzJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydkaXZpZGVyQ29sb3InLCAnc2l6ZScsICd0eXBlJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJxU3RlcHMge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcVN0ZXBzRWxlbWVudDtcbiAgICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBsaW5lIHRoYXQgY29ubmVjdHMgdGhlIHN0ZXBzLiBJdCBzaG91bGQgYmUgYSB2YWxpZCBkZWNsYXJhdGl2ZSBjb2xvciB0b2tlbi5cbiAgICovXG4gIHNldCBkaXZpZGVyQ29sb3IoXzogQ29tcG9uZW50cy5CcVN0ZXBzWydkaXZpZGVyQ29sb3InXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBzdGVwc1xuICAgKi9cbiAgc2V0IHNpemUoXzogQ29tcG9uZW50cy5CcVN0ZXBzWydzaXplJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgdHlwZSBvZiBwcmVmaXggZWxlbWVudCB0byB1c2Ugb24gdGhlIHN0ZXAgaXRlbXNcbiAgICovXG4gIHNldCB0eXBlKF86IENvbXBvbmVudHMuQnFTdGVwc1sndHlwZSddKSB7fTtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFTdGVwcyBleHRlbmRzIENvbXBvbmVudHMuQnFTdGVwcyB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydiYWNrZ3JvdW5kT25Ib3ZlcicsICdjaGVja2VkJywgJ2Rpc2FibGVkJywgJ2Zvcm1WYWxpZGF0aW9uTWVzc2FnZScsICdmdWxsV2lkdGgnLCAnaW5uZXJMYWJlbCcsICdqdXN0aWZ5Q29udGVudCcsICduYW1lJywgJ3JlcXVpcmVkJywgJ3JldmVyc2VPcmRlcicsICd2YWx1ZSddLFxuICBtZXRob2RzOiBbJ3ZDbGljaycsICd2Rm9jdXMnLCAndkJsdXInXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLXN3aXRjaCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYmFja2dyb3VuZE9uSG92ZXInLCAnY2hlY2tlZCcsICdkaXNhYmxlZCcsICdmb3JtVmFsaWRhdGlvbk1lc3NhZ2UnLCAnZnVsbFdpZHRoJywgJ2lubmVyTGFiZWwnLCAnanVzdGlmeUNvbnRlbnQnLCAnbmFtZScsICdyZXF1aXJlZCcsICdyZXZlcnNlT3JkZXInLCAndmFsdWUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnFTd2l0Y2gge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcVN3aXRjaEVsZW1lbnQ7XG4gICAgLyoqXG4gICAqIElmIHRydWUsIGEgYmFja2dyb3VuZCB3aWxsIGJlIGRpc3BsYXllZCBvbiBob3ZlclxuICAgKi9cbiAgc2V0IGJhY2tncm91bmRPbkhvdmVyKF86IENvbXBvbmVudHMuQnFTd2l0Y2hbJ2JhY2tncm91bmRPbkhvdmVyJ10pIHt9O1xuICAgIC8qKlxuICAgKiBJdCBpbmRpY2F0ZXMgd2hldGhlciBpZiB0aGUgc3dpdGNoIGlzIGBPTmAgYnkgZGVmYXVsdCAod2hlbiB0aGUgcGFnZSBsb2FkcylcbiAgICovXG4gIHNldCBjaGVja2VkKF86IENvbXBvbmVudHMuQnFTd2l0Y2hbJ2NoZWNrZWQnXSkge307XG4gICAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBzd2l0Y2ggY29udHJvbCB3aWxsIGJlIGRpc2FibGVkIGFuZCBubyBpbnRlcmFjdGlvbiB3aWxsIGJlIGFsbG93ZWRcbiAgICovXG4gIHNldCBkaXNhYmxlZChfOiBDb21wb25lbnRzLkJxU3dpdGNoWydkaXNhYmxlZCddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIG5hdGl2ZSBmb3JtIHZhbGlkYXRpb24gbWVzc2FnZVxuICAgKi9cbiAgc2V0IGZvcm1WYWxpZGF0aW9uTWVzc2FnZShfOiBDb21wb25lbnRzLkJxU3dpdGNoWydmb3JtVmFsaWRhdGlvbk1lc3NhZ2UnXSkge307XG4gICAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBjb21wb25lbnQgd2lsbCB0YWtlIHRoZSBmdWxsIHdpZHRoIHNwYWNlIGF2YWlsYWJsZSBvbiB0aGUgcGFyZW50IGNvbnRhaW5lclxuICAgKi9cbiAgc2V0IGZ1bGxXaWR0aChfOiBDb21wb25lbnRzLkJxU3dpdGNoWydmdWxsV2lkdGgnXSkge307XG4gICAgLyoqXG4gICAqIEl0IGluZGljYXRlcyBob3cgdG8gdG8gZGlzcGxheSB0aGUgb24vb2ZmIG1hcmtzIGluc2lkZSB0aGUgY29udHJvbCwgd2l0aCBpY29ucyBvciBub25lIChkZWZhdWx0KVxuICAgKi9cbiAgc2V0IGlubmVyTGFiZWwoXzogQ29tcG9uZW50cy5CcVN3aXRjaFsnaW5uZXJMYWJlbCddKSB7fTtcbiAgICAvKipcbiAgICogSXQgZGVmaW5lcyBob3cgdG8gZGlzdHJpYnV0ZSB0aGUgc3BhY2UgYmV0d2VlbiBhbmQgYXJvdW5kIHRoZSBjb250cm9sIGFuZCB0aGUgbGFiZWwgdGV4dFxuKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9qdXN0aWZ5LWNvbnRlbnQpXG4gICAqL1xuICBzZXQganVzdGlmeUNvbnRlbnQoXzogQ29tcG9uZW50cy5CcVN3aXRjaFsnanVzdGlmeUNvbnRlbnQnXSkge307XG4gICAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIGZvcm0gY29udHJvbC4gU3VibWl0dGVkIHdpdGggdGhlIGZvcm0gYXMgcGFydCBvZiBhIG5hbWUvdmFsdWUgcGFpclxuICAgKi9cbiAgc2V0IG5hbWUoXzogQ29tcG9uZW50cy5CcVN3aXRjaFsnbmFtZSddKSB7fTtcbiAgICAvKipcbiAgICogSWYgYHRydWVgLCBpdCB3aWxsIGluZGljYXRlIHRoYXQgdGhlIHVzZXIgbXVzdCBzd2l0Y2ggYE9OYCB0aGUgZWxlbWVudCBiZWZvcmUgdGhlIG93bmluZyBmb3JtIGNhbiBiZSBzdWJtaXR0ZWRcbiAgICovXG4gIHNldCByZXF1aXJlZChfOiBDb21wb25lbnRzLkJxU3dpdGNoWydyZXF1aXJlZCddKSB7fTtcbiAgICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIG9yZGVyIG9mIHRoZSBjb250cm9sIGFuZCB0aGUgbGFiZWwgdGV4dCB3aWxsIGJlIGNoYW5nZWRcbiAgICovXG4gIHNldCByZXZlcnNlT3JkZXIoXzogQ29tcG9uZW50cy5CcVN3aXRjaFsncmV2ZXJzZU9yZGVyJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgaW5wdXQgY29udHJvbCdzIHZhbHVlLCBzdWJtaXR0ZWQgYXMgYSBuYW1lL3ZhbHVlIHBhaXIgd2l0aCBmb3JtIGRhdGEuXG4gICAqL1xuICBzZXQgdmFsdWUoXzogQ29tcG9uZW50cy5CcVN3aXRjaFsndmFsdWUnXSkge307XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2JxQ2hhbmdlJywgJ2JxRm9jdXMnLCAnYnFCbHVyJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxU3dpdGNoIGV4dGVuZHMgQ29tcG9uZW50cy5CcVN3aXRjaCB7XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBzd2l0Y2ggc3RhdGUgY2hhbmdlc1xuICAgKi9cbiAgYnFDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx7IGNoZWNrZWQ6IGJvb2xlYW4gfT4+O1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgc3dpdGNoIGdldHMgZm9jdXNcbiAgICovXG4gIGJxRm9jdXM6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFTd2l0Y2hFbGVtZW50Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBzd2l0Y2ggbG9zZXMgZm9jdXNcbiAgICovXG4gIGJxQmx1cjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcVN3aXRjaEVsZW1lbnQ+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYWN0aXZlJywgJ2NvbnRyb2xzJywgJ2Rpc2FibGVkJywgJ29yaWVudGF0aW9uJywgJ3BsYWNlbWVudCcsICdzaXplJywgJ3RhYklkJ10sXG4gIG1ldGhvZHM6IFsndkNsaWNrJywgJ3ZGb2N1cycsICd2Qmx1ciddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtdGFiJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydhY3RpdmUnLCAnY29udHJvbHMnLCAnZGlzYWJsZWQnLCAnb3JpZW50YXRpb24nLCAncGxhY2VtZW50JywgJ3NpemUnLCAndGFiSWQnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnFUYWIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcVRhYkVsZW1lbnQ7XG4gICAgLyoqXG4gICAqIElmIHRydWUgdGFiIGlzIGFjdGl2ZVxuICAgKi9cbiAgc2V0IGFjdGl2ZShfOiBDb21wb25lbnRzLkJxVGFiWydhY3RpdmUnXSkge307XG4gICAgLyoqXG4gICAqIFRoZSB0YWIgcGFuZWwgaWQgdGhhdCB0aGUgdGFiIGNvbnRyb2xzXG4gICAqL1xuICBzZXQgY29udHJvbHMoXzogQ29tcG9uZW50cy5CcVRhYlsnY29udHJvbHMnXSkge307XG4gICAgLyoqXG4gICAqIElmIHRydWUgdGFiIGlzIGRpc2FibGVkXG4gICAqL1xuICBzZXQgZGlzYWJsZWQoXzogQ29tcG9uZW50cy5CcVRhYlsnZGlzYWJsZWQnXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBkaXJlY3Rpb24gdGhhdCB0YWIgc2hvdWxkIGJlIHJlbmRlclxuICAgKi9cbiAgc2V0IG9yaWVudGF0aW9uKF86IENvbXBvbmVudHMuQnFUYWJbJ29yaWVudGF0aW9uJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgcGxhY2VtZW50IHRoYXQgdGFiIHNob3VsZCBiZSByZW5kZXJcbiAgICovXG4gIHNldCBwbGFjZW1lbnQoXzogQ29tcG9uZW50cy5CcVRhYlsncGxhY2VtZW50J10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgdGFiXG4gICAqL1xuICBzZXQgc2l6ZShfOiBDb21wb25lbnRzLkJxVGFiWydzaXplJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIHRhYlxuICAgKi9cbiAgc2V0IHRhYklkKF86IENvbXBvbmVudHMuQnFUYWJbJ3RhYklkJ10pIHt9O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydicUNsaWNrJywgJ2JxRm9jdXMnLCAnYnFCbHVyJywgJ2JxS2V5RG93biddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcVRhYiBleHRlbmRzIENvbXBvbmVudHMuQnFUYWIge1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgdGFiIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIGJxQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFUYWJFbGVtZW50Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSB0YWIgZ2V0cyBmb2N1c1xuICAgKi9cbiAgYnFGb2N1czogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcVRhYkVsZW1lbnQ+PjtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHRhYiBsb3NlcyBmb2N1c1xuICAgKi9cbiAgYnFCbHVyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxVGFiRWxlbWVudD4+O1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgdGFiIGtleSBpcyBwcmVzc2VkXG4gICAqL1xuICBicUtleURvd246IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxLZXlib2FyZEV2ZW50Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2RlYm91bmNlVGltZScsICdkaXNhYmxlRGl2aWRlcicsICdvcmllbnRhdGlvbicsICdwbGFjZW1lbnQnLCAnc2l6ZScsICd2YWx1ZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtdGFiLWdyb3VwJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydkZWJvdW5jZVRpbWUnLCAnZGlzYWJsZURpdmlkZXInLCAnb3JpZW50YXRpb24nLCAncGxhY2VtZW50JywgJ3NpemUnLCAndmFsdWUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnFUYWJHcm91cCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxVGFiR3JvdXBFbGVtZW50O1xuICAgIC8qKlxuICAgKiBBIG51bWJlciByZXByZXNlbnRpbmcgdGhlIGRlbGF5IHZhbHVlIGFwcGxpZWQgdG8gYnFDaGFuZ2UgZXZlbnQgaGFuZGxlclxuICAgKi9cbiAgc2V0IGRlYm91bmNlVGltZShfOiBDb21wb25lbnRzLkJxVGFiR3JvdXBbJ2RlYm91bmNlVGltZSddKSB7fTtcbiAgICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIHVuZGVybGluZSBkaXZpZGVyIGJlbG93IHRoZSB0YWJzIHdvbid0IGJlIHNob3duXG4gICAqL1xuICBzZXQgZGlzYWJsZURpdmlkZXIoXzogQ29tcG9uZW50cy5CcVRhYkdyb3VwWydkaXNhYmxlRGl2aWRlciddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIGRpcmVjdGlvbiB0aGF0IHRhYiBzaG91bGQgYmUgcmVuZGVyXG4gICAqL1xuICBzZXQgb3JpZW50YXRpb24oXzogQ29tcG9uZW50cy5CcVRhYkdyb3VwWydvcmllbnRhdGlvbiddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIHBsYWNlbWVudCB0aGF0IHRhYiBzaG91bGQgYmUgcmVuZGVyXG4gICAqL1xuICBzZXQgcGxhY2VtZW50KF86IENvbXBvbmVudHMuQnFUYWJHcm91cFsncGxhY2VtZW50J10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgdGFiXG4gICAqL1xuICBzZXQgc2l6ZShfOiBDb21wb25lbnRzLkJxVGFiR3JvdXBbJ3NpemUnXSkge307XG4gICAgLyoqXG4gICAqIEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgaWQgb2YgdGhlIHNlbGVjdGVkIHRhYi5cbiAgICovXG4gIHNldCB2YWx1ZShfOiBDb21wb25lbnRzLkJxVGFiR3JvdXBbJ3ZhbHVlJ10pIHt9O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydicUNoYW5nZSddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcVRhYkdyb3VwIGV4dGVuZHMgQ29tcG9uZW50cy5CcVRhYkdyb3VwIHtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHRhYiB2YWx1ZSBjaGFuZ2VzXG4gICAqL1xuICBicUNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHsgdGFyZ2V0OiBIVE1MQnFUYWJFbGVtZW50OyB2YWx1ZTogc3RyaW5nIH0+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYm9yZGVyJywgJ2NsaWNrYWJsZScsICdjb2xvcicsICdkaXNhYmxlZCcsICdoaWRkZW4nLCAncmVtb3ZhYmxlJywgJ3NlbGVjdGVkJywgJ3NpemUnLCAndmFyaWFudCddLFxuICBtZXRob2RzOiBbJ2hpZGUnLCAnc2hvdyddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtdGFnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydib3JkZXInLCAnY2xpY2thYmxlJywgJ2NvbG9yJywgJ2Rpc2FibGVkJywgJ2hpZGRlbicsICdyZW1vdmFibGUnLCAnc2VsZWN0ZWQnLCAnc2l6ZScsICd2YXJpYW50J10sXG59KVxuZXhwb3J0IGNsYXNzIEJxVGFnIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFUYWdFbGVtZW50O1xuICAgIC8qKlxuICAgKiBUaGUgY29ybmVyIHJhZGl1cyBvZiB0aGUgVGFnICh3aWxsIG92ZXJyaWRlIHNpemUncyBwcmVkZWZpbmVkIGJvcmRlcilcbiAgICovXG4gIHNldCBib3JkZXIoXzogQ29tcG9uZW50cy5CcVRhZ1snYm9yZGVyJ10pIHt9O1xuICAgIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgVGFnIGNhbiBiZSBjbGlja2FibGVcbiAgICovXG4gIHNldCBjbGlja2FibGUoXzogQ29tcG9uZW50cy5CcVRhZ1snY2xpY2thYmxlJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgY29sb3Igc3R5bGUgb2YgdGhlIFRhZ1xuICAgKi9cbiAgc2V0IGNvbG9yKF86IENvbXBvbmVudHMuQnFUYWdbJ2NvbG9yJ10pIHt9O1xuICAgIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgVGFnIHdpbGwgYmUgZGlzYWJsZWQgKG9ubHkgaWYgY2xpY2thYmxlID0gYHRydWVgLCBubyBpbnRlcmFjdGlvbiBhbGxvd2VkKVxuICAgKi9cbiAgc2V0IGRpc2FibGVkKF86IENvbXBvbmVudHMuQnFUYWdbJ2Rpc2FibGVkJ10pIHt9O1xuICAgIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgVGFnIGNvbXBvbmVudCB3aWxsIGhpZGRlbiAob25seSBpZiByZW1vdmFibGUgPSBgdHJ1ZWApXG4gICAqL1xuICBzZXQgaGlkZGVuKF86IENvbXBvbmVudHMuQnFUYWdbJ2hpZGRlbiddKSB7fTtcbiAgICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIFRhZyBjb21wb25lbnQgY2FuIGJlIHJlbW92ZWRcbiAgICovXG4gIHNldCByZW1vdmFibGUoXzogQ29tcG9uZW50cy5CcVRhZ1sncmVtb3ZhYmxlJ10pIHt9O1xuICAgIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgVGFnIGlzIHNlbGVjdGVkIChvbmx5IGlmIGNsaWNrYWJsZSA9IGB0cnVlYClcbiAgICovXG4gIHNldCBzZWxlY3RlZChfOiBDb21wb25lbnRzLkJxVGFnWydzZWxlY3RlZCddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIFRhZyBjb21wb25lbnRcbiAgICovXG4gIHNldCBzaXplKF86IENvbXBvbmVudHMuQnFUYWdbJ3NpemUnXSkge307XG4gICAgLyoqXG4gICAqIFRoZSB2YXJpYW50IG9mIFRhZyB0byBhcHBseSBvbiB0b3Agb2YgdGhlIHZhcmlhbnRcbiAgICovXG4gIHNldCB2YXJpYW50KF86IENvbXBvbmVudHMuQnFUYWdbJ3ZhcmlhbnQnXSkge307XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2JxQ2xvc2UnLCAnYnFPcGVuJywgJ2JxQmx1cicsICdicUNsaWNrJywgJ2JxRm9jdXMnXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFUYWcgZXh0ZW5kcyBDb21wb25lbnRzLkJxVGFnIHtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHRhZyBpcyBjbG9zZS9oaWRkZW5cbiAgICovXG4gIGJxQ2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxhbnk+PjtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHRhZyBpcyBub3Qgb3Blbi9zaG93blxuICAgKi9cbiAgYnFPcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8YW55Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRhZyBsb3NlcyBmb2N1c1xuICAgKi9cbiAgYnFCbHVyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxVGFnRWxlbWVudD4+O1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0YWcgaXMgY2xpY2tlZFxuICAgKi9cbiAgYnFDbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcVRhZ0VsZW1lbnQ+PjtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGFnIGlzIGZvY3VzZWRcbiAgICovXG4gIGJxRm9jdXM6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFUYWdFbGVtZW50Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2JhY2tncm91bmRDb2xvcicsICdzaXplJywgJ3RleHRDb2xvciddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtdGV4dCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYmFja2dyb3VuZENvbG9yJywgJ3NpemUnLCAndGV4dENvbG9yJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJxVGV4dCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxVGV4dEVsZW1lbnQ7XG4gICAgLyoqXG4gICAqIHRleHQgYmFja2dyb3VuZCBjb2xvci4gVGhlIHZhbHVlIHNob3VsZCBiZSBhIHZhbGlkIHZhbHVlIG9mIHRoZSBwYWxldHRlIGNvbG9yXG4gICAqL1xuICBzZXQgYmFja2dyb3VuZENvbG9yKF86IENvbXBvbmVudHMuQnFUZXh0WydiYWNrZ3JvdW5kQ29sb3InXSkge307XG4gICAgLyoqXG4gICAqIHRleHQgbnVtYmVyIGNvbG9yLiBUaGUgdmFsdWUgc2hvdWxkIGJlIGEgdmFsaWQgdmFsdWUgb2YgdGhlIHBhbGV0dGUgY29sb3JcbiAgICovXG4gIHNldCB0ZXh0Q29sb3IoXzogQ29tcG9uZW50cy5CcVRleHRbJ3RleHRDb2xvciddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIHRleHQuIFJlbGV2YW50IGlmIHRleHQgaGFzIG5vIGNvbnRlbnQuXG4gICAqL1xuICBzZXQgc2l6ZShfOiBDb21wb25lbnRzLkJxVGV4dFsnc2l6ZSddKSB7fTtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFUZXh0IGV4dGVuZHMgQ29tcG9uZW50cy5CcVRleHQge31cblxuXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYXV0b0dyb3cnLCAnYXV0b2NhcGl0YWxpemUnLCAnYXV0b2NvbXBsZXRlJywgJ2F1dG9jb3JyZWN0JywgJ2F1dG9mb2N1cycsICdkZWJvdW5jZVRpbWUnLCAnZGlzYWJsZVJlc2l6ZScsICdkaXNhYmxlZCcsICdmb3JtJywgJ2Zvcm1WYWxpZGF0aW9uTWVzc2FnZScsICdtYXhsZW5ndGgnLCAnbmFtZScsICdwbGFjZWhvbGRlcicsICdyZWFkb25seScsICdyZXF1aXJlZCcsICdyb3dzJywgJ3NwZWxsY2hlY2snLCAndmFsaWRhdGlvblN0YXR1cycsICd2YWx1ZScsICd3cmFwJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS10ZXh0YXJlYScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYXV0b0dyb3cnLCAnYXV0b2NhcGl0YWxpemUnLCAnYXV0b2NvbXBsZXRlJywgJ2F1dG9jb3JyZWN0JywgJ2F1dG9mb2N1cycsICdkZWJvdW5jZVRpbWUnLCAnZGlzYWJsZVJlc2l6ZScsICdkaXNhYmxlZCcsICdmb3JtJywgJ2Zvcm1WYWxpZGF0aW9uTWVzc2FnZScsICdtYXhsZW5ndGgnLCAnbmFtZScsICdwbGFjZWhvbGRlcicsICdyZWFkb25seScsICdyZXF1aXJlZCcsICdyb3dzJywgJ3NwZWxsY2hlY2snLCAndmFsaWRhdGlvblN0YXR1cycsICd2YWx1ZScsICd3cmFwJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJxVGV4dGFyZWEge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcVRleHRhcmVhRWxlbWVudDtcbiAgICAvKipcbiAgICogQ29udHJvbHMgd2hldGhlciBvciBub3QgdGhlIHRleHRhcmVhIGZpZWxkIHNob3VsZCBiZSBjYXBpdGFsaXplZCBhbmQgaG93LlxuUG9zc2libGUgdmFsdWVzIGFyZSAnb2ZmJywgJ25vbmUnLCAnb24nLCAnc2VudGVuY2VzJywgJ3dvcmRzJywgYW5kICdjaGFyYWN0ZXJzJy5cblNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9HbG9iYWxfYXR0cmlidXRlcy9hdXRvY2FwaXRhbGl6ZVxuICAgKi9cbiAgc2V0IGF1dG9jYXBpdGFsaXplKF86IENvbXBvbmVudHMuQnFUZXh0YXJlYVsnYXV0b2NhcGl0YWxpemUnXSkge307XG4gICAgLyoqXG4gICAqIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGUgdGV4dGFyZWEgZmllbGQgc2hvdWxkIGhhdmUgYXV0b2NvbXBsZXRlIGVuYWJsZWQuXG5TZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvQXR0cmlidXRlcy9hdXRvY29tcGxldGUjdmFsdWVzXG4gICAqL1xuICBzZXQgYXV0b2NvbXBsZXRlKF86IENvbXBvbmVudHMuQnFUZXh0YXJlYVsnYXV0b2NvbXBsZXRlJ10pIHt9O1xuICAgIC8qKlxuICAgKiBDb250cm9scyB3aGV0aGVyIG9yIG5vdCB0aGUgdGV4dGFyZWEgZmllbGQgc2hvdWxkIGhhdmUgYXV0b2NvcnJlY3QgZW5hYmxlZC5cblBvc3NpYmxlIHZhbHVlcyBhcmUgJ29uJyBhbmQgJ29mZicuXG4gICAqL1xuICBzZXQgYXV0b2NvcnJlY3QoXzogQ29tcG9uZW50cy5CcVRleHRhcmVhWydhdXRvY29ycmVjdCddKSB7fTtcbiAgICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIHRleHRhcmVhIHdpbGwgYmUgZm9jdXNlZCBvbiBjb21wb25lbnQgcmVuZGVyXG4gICAqL1xuICBzZXQgYXV0b2ZvY3VzKF86IENvbXBvbmVudHMuQnFUZXh0YXJlYVsnYXV0b2ZvY3VzJ10pIHt9O1xuICAgIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0ZXh0YXJlYSB3aWxsIGF1dG9tYXRpY2FsbHkgZ3JvdyBhbmQgc2hyaW5rIHRvIGZpdCBpdHMgY29udGVudHMuXG5JZiBgZmFsc2VgLCB0aGUgdGV4dGFyZWEgd2lsbCBoYXZlIGEgZml4ZWQgaGVpZ2h0IHNwZWNpZmllZCBieSB0aGUgYHJvd3NgIHByb3BlcnR5LlxuICAgKi9cbiAgc2V0IGF1dG9Hcm93KF86IENvbXBvbmVudHMuQnFUZXh0YXJlYVsnYXV0b0dyb3cnXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBhbW91bnQgb2YgdGltZSwgaW4gbWlsbGlzZWNvbmRzLCB0byB3YWl0IGJlZm9yZSBlbWl0dGluZyB0aGUgYGJxSW5wdXRgIGV2ZW50IGFmdGVyIHRoZSB0ZXh0YXJlYSB2YWx1ZSBjaGFuZ2VzLlxuQSB2YWx1ZSBvZiAwIG1lYW5zIG5vIGRlYm91bmNpbmcgd2lsbCBvY2N1ci5cbiAgICovXG4gIHNldCBkZWJvdW5jZVRpbWUoXzogQ29tcG9uZW50cy5CcVRleHRhcmVhWydkZWJvdW5jZVRpbWUnXSkge307XG4gICAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIHRleHRhcmVhLlxuICAgKi9cbiAgc2V0IGRpc2FibGVkKF86IENvbXBvbmVudHMuQnFUZXh0YXJlYVsnZGlzYWJsZWQnXSkge307XG4gICAgLyoqXG4gICAqIElmIGB0cnVlYCwgaXQgd2lsbCBibG9jayB0aGUgdXNlcidzIGFiaWxpdHkgdG8gcmVzaXplIHRoZSB0ZXh0YXJlYS5cbiAgICovXG4gIHNldCBkaXNhYmxlUmVzaXplKF86IENvbXBvbmVudHMuQnFUZXh0YXJlYVsnZGlzYWJsZVJlc2l6ZSddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBmb3JtIHRoYXQgdGhlIHRleHRhcmVhIGZpZWxkIGJlbG9uZ3MgdG8uXG4gICAqL1xuICBzZXQgZm9ybShfOiBDb21wb25lbnRzLkJxVGV4dGFyZWFbJ2Zvcm0nXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBuYXRpdmUgZm9ybSB2YWxpZGF0aW9uIG1lc3NhZ2VcbiAgICovXG4gIHNldCBmb3JtVmFsaWRhdGlvbk1lc3NhZ2UoXzogQ29tcG9uZW50cy5CcVRleHRhcmVhWydmb3JtVmFsaWRhdGlvbk1lc3NhZ2UnXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgY2FuIGJlIGVudGVyZWQgaW50byB0aGUgdGV4dGFyZWEgKGAwYDogbm8gbGltaXQpLlxuV2hlbiBlbmFibGVkLCBhIGNoYXJhY3RlciBjb3VudGVyIHdpbGwgYmUgc2hvd24gdW5kZXJuZWF0aCB0aGUgdGV4dGFyZWEuXG4gICAqL1xuICBzZXQgbWF4bGVuZ3RoKF86IENvbXBvbmVudHMuQnFUZXh0YXJlYVsnbWF4bGVuZ3RoJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgdGV4dGFyZWEgZWxlbWVudC5cbiAgICovXG4gIHNldCBuYW1lKF86IENvbXBvbmVudHMuQnFUZXh0YXJlYVsnbmFtZSddKSB7fTtcbiAgICAvKipcbiAgICogVGhlIHBsYWNlaG9sZGVyIHRleHQgdG8gc2hvdyB3aGVuIHRoZXJlIGlzIG5vIHZhbHVlLlxuICAgKi9cbiAgc2V0IHBsYWNlaG9sZGVyKF86IENvbXBvbmVudHMuQnFUZXh0YXJlYVsncGxhY2Vob2xkZXInXSkge307XG4gICAgLyoqXG4gICAqIElmIHRydWUsIHRoZSB0ZXh0YXJlYSBmaWVsZCBjYW5ub3QgYmUgbW9kaWZpZWQuXG4gICAqL1xuICBzZXQgcmVhZG9ubHkoXzogQ29tcG9uZW50cy5CcVRleHRhcmVhWydyZWFkb25seSddKSB7fTtcbiAgICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IHRoZSB0ZXh0YXJlYSBmaWVsZCBpcyByZXF1aXJlZCB0byBiZSBmaWxsZWQgb3V0IGJlZm9yZSBzdWJtaXR0aW5nIHRoZSBmb3JtLlxuICAgKi9cbiAgc2V0IHJlcXVpcmVkKF86IENvbXBvbmVudHMuQnFUZXh0YXJlYVsncmVxdWlyZWQnXSkge307XG4gICAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgdmlzaWJsZSB0ZXh0IGxpbmVzIGZvciB0aGUgY29udHJvbC4gSXQgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuXG4gICAqL1xuICBzZXQgcm93cyhfOiBDb21wb25lbnRzLkJxVGV4dGFyZWFbJ3Jvd3MnXSkge307XG4gICAgLyoqXG4gICAqIElmIHRydWUsIHRoZSB0ZXh0YXJlYSBjb250ZW50IG1heSBiZSBjaGVja2VkIGZvciBzcGVsbGluZyBlcnJvcnMuXG4gICAqL1xuICBzZXQgc3BlbGxjaGVjayhfOiBDb21wb25lbnRzLkJxVGV4dGFyZWFbJ3NwZWxsY2hlY2snXSkge307XG4gICAgLyoqXG4gICAqIFRoZSB2YWxpZGF0aW9uIHN0YXR1cyBvZiB0aGUgdGV4dGFyZWEuIEByZW1hcmtzIFRoaXMgcHJvcGVydHkgaXMgdXNlZCB0byBpbmRpY2F0ZSB0aGUgdmFsaWRhdGlvbiBzdGF0dXMgb2YgdGhlIHRleHRhcmVhLiBJdCBjYW4gYmUgc2V0IHRvIG9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlczpcbi0gYCdub25lJ2A6IE5vIHZhbGlkYXRpb24gc3RhdHVzIGlzIHNldC5cbi0gYCdlcnJvcidgOiBUaGUgdGV4dGFyZWEgaGFzIGEgdmFsaWRhdGlvbiBlcnJvci5cbi0gYCd3YXJuaW5nJ2A6IFRoZSB0ZXh0YXJlYSBoYXMgYSB2YWxpZGF0aW9uIHdhcm5pbmcuXG4tIGAnc3VjY2VzcydgOiBUaGUgdGV4dGFyZWEgaGFzIHBhc3NlZCB2YWxpZGF0aW9uLlxuICAgKi9cbiAgc2V0IHZhbGlkYXRpb25TdGF0dXMoXzogQ29tcG9uZW50cy5CcVRleHRhcmVhWyd2YWxpZGF0aW9uU3RhdHVzJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIHRleHRhcmVhLiBJdCBjYW4gYmUgdXNlZCB0byByZXNldCB0aGUgdGV4dGFyZWEgdG8gYSBwcmV2aW91cyB2YWx1ZS5cbiAgICovXG4gIHNldCB2YWx1ZShfOiBDb21wb25lbnRzLkJxVGV4dGFyZWFbJ3ZhbHVlJ10pIHt9O1xuICAgIC8qKlxuICAgKiBTcGVjaWZpZXMgaG93IHRoZSB0ZXh0IGluIGEgdGV4dCBhcmVhIGlzIHRvIGJlIHdyYXBwZWQgd2hlbiBzdWJtaXR0ZWQgaW4gYSBmb3JtXG4gICAqL1xuICBzZXQgd3JhcChfOiBDb21wb25lbnRzLkJxVGV4dGFyZWFbJ3dyYXAnXSkge307XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2JxQmx1cicsICdicUNoYW5nZScsICdicUNsZWFyJywgJ2JxRm9jdXMnLCAnYnFJbnB1dCddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcVRleHRhcmVhIGV4dGVuZHMgQ29tcG9uZW50cy5CcVRleHRhcmVhIHtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgZW1pdHRlZCB3aGVuIHRoZSB0ZXh0YXJlYSBsb3NlcyBmb2N1c1xuICAgKi9cbiAgYnFCbHVyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxVGV4dGFyZWFFbGVtZW50Pj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIGVtaXR0ZWQgd2hlbiB0aGUgdGV4dGFyZWEgdmFsdWUgaGFzIGNoYW5nZWQgYW5kIHRoZSB0ZXh0YXJlYSBsb3NlcyBmb2N1cy5cblRoaXMgaGFuZGxlciBpcyBjYWxsZWQgd2hlbmV2ZXIgdGhlIHVzZXIgZmluaXNoZXMgdHlwaW5nIG9yIHBhc3RpbmcgdGV4dCBpbnRvIHRoZSB0ZXh0YXJlYSBmaWVsZCBhbmQgdGhlbiBjbGlja3Mgb3V0c2lkZSBvZiB0aGUgdGV4dGFyZWEgZmllbGQuXG4gICAqL1xuICBicUNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHsgdmFsdWU6IHN0cmluZzsgZWw6IEhUTUxCcVRleHRhcmVhRWxlbWVudCB9Pj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIGVtaXR0ZWQgd2hlbiB0aGUgdGV4dGFyZWEgdmFsdWUgaGFzIGJlZW4gY2xlYXJlZFxuICAgKi9cbiAgYnFDbGVhcjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcVRleHRhcmVhRWxlbWVudD4+O1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciBlbWl0dGVkIHdoZW4gdGhlIHRleHRhcmVhIGhhcyByZWNlaXZlZCBmb2N1c1xuICAgKi9cbiAgYnFGb2N1czogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcVRleHRhcmVhRWxlbWVudD4+O1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciBlbWl0dGVkIHdoZW4gdGhlIHRleHRhcmVhIHZhbHVlIGNoYW5nZXMuXG5UaGlzIGhhbmRsZXIgaXMgY2FsbGVkIHdoZW5ldmVyIHRoZSB1c2VyIHR5cGVzIG9yIHBhc3RlcyB0ZXh0IGludG8gdGhlIHRleHRhcmVhIGZpZWxkLlxuICAgKi9cbiAgYnFJbnB1dDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHsgdmFsdWU6IHN0cmluZzsgZWw6IEhUTUxCcVRleHRhcmVhRWxlbWVudCB9Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2JvcmRlcicsICdoaWRlSWNvbicsICdvcGVuJywgJ3BsYWNlbWVudCcsICd0aW1lJywgJ3R5cGUnXSxcbiAgbWV0aG9kczogWydzaG93JywgJ2hpZGUnLCAndG9hc3QnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLXRvYXN0JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydib3JkZXInLCAnaGlkZUljb24nLCAnb3BlbicsICdwbGFjZW1lbnQnLCAndGltZScsICd0eXBlJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJxVG9hc3Qge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcVRvYXN0RWxlbWVudDtcbiAgICAvKipcbiAgICogVGhlIGNvcmRlciByYWRpdXMgb2YgdGhlIHRvYXN0IGNvbXBvbmVudFxuICAgKi9cbiAgc2V0IGJvcmRlcihfOiBDb21wb25lbnRzLkJxVG9hc3RbJ2JvcmRlciddKSB7fTtcbiAgICAvKipcbiAgICogVHlwZSBvZiB0b2FzdFxuICAgKi9cbiAgc2V0IHR5cGUoXzogQ29tcG9uZW50cy5CcVRvYXN0Wyd0eXBlJ10pIHt9O1xuICAgIC8qKlxuICAgKiBQbGFjZW1lbnQgb2YgdG9hc3RcbiAgICovXG4gIHNldCBwbGFjZW1lbnQoXzogQ29tcG9uZW50cy5CcVRvYXN0WydwbGFjZW1lbnQnXSkge307XG4gICAgLyoqXG4gICAqIElmIHRydWUgd2lsbCBoaWRlIHRvYXN0IGljb25cbiAgICovXG4gIHNldCBoaWRlSWNvbihfOiBDb21wb25lbnRzLkJxVG9hc3RbJ2hpZGVJY29uJ10pIHt9O1xuICAgIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgdG9hc3Qgd2lsbCBiZSBzaG93blxuICAgKi9cbiAgc2V0IG9wZW4oXzogQ29tcG9uZW50cy5CcVRvYXN0WydvcGVuJ10pIHt9O1xuICAgIC8qKlxuICAgKiBUaGUgbGVuZ3RoIG9mIHRpbWUsIGluIG1pbGxpc2Vjb25kcywgYWZ0ZXIgd2hpY2ggdGhlIHRvYXN0IHdpbGwgY2xvc2UgaXRzZWxmXG4gICAqL1xuICBzZXQgdGltZShfOiBDb21wb25lbnRzLkJxVG9hc3RbJ3RpbWUnXSkge307XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2JxSGlkZScsICdicVNob3cnXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFUb2FzdCBleHRlbmRzIENvbXBvbmVudHMuQnFUb2FzdCB7XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBub3RpZmljYXRpb24gaXMgaGlkZGVuXG4gICAqL1xuICBicUhpZGU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFUb2FzdEVsZW1lbnQ+PjtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIG5vdGlmaWNhdGlvbiBpcyBzaG93blxuICAgKi9cbiAgYnFTaG93OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxVG9hc3RFbGVtZW50Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2Fsd2F5c1Zpc2libGUnLCAnZGlzcGxheU9uJywgJ2Rpc3RhbmNlJywgJ2hpZGVBcnJvdycsICdwbGFjZW1lbnQnLCAnc2FtZVdpZHRoJywgJ3Zpc2libGUnXSxcbiAgbWV0aG9kczogWydzaG93JywgJ2hpZGUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLXRvb2x0aXAnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2Fsd2F5c1Zpc2libGUnLCAnZGlzcGxheU9uJywgJ2Rpc3RhbmNlJywgJ2hpZGVBcnJvdycsICdwbGFjZW1lbnQnLCAnc2FtZVdpZHRoJywgJ3Zpc2libGUnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnFUb29sdGlwIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFUb29sdGlwRWxlbWVudDtcbiAgICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIHRvb2x0aXAgd2lsbCBhbHdheXMgYmUgdmlzaWJsZVxuICAgKi9cbiAgc2V0IGFsd2F5c1Zpc2libGUoXzogQ29tcG9uZW50cy5CcVRvb2x0aXBbJ2Fsd2F5c1Zpc2libGUnXSkge307XG4gICAgLyoqXG4gICAqIERpc3RhbmNlIGJldHdlZW4gdHJpZ2dlciBlbGVtZW50IGFuZCB0b29sdGlwXG4gICAqL1xuICBzZXQgZGlzdGFuY2UoXzogQ29tcG9uZW50cy5CcVRvb2x0aXBbJ2Rpc3RhbmNlJ10pIHt9O1xuICAgIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgYXJyb3cgb24gdGhlIHRvb2x0aXAgY29udGVudCB3b24ndCBiZSBzaG93blxuICAgKi9cbiAgc2V0IGhpZGVBcnJvdyhfOiBDb21wb25lbnRzLkJxVG9vbHRpcFsnaGlkZUFycm93J10pIHt9O1xuICBcbiAgc2V0IHBsYWNlbWVudChfOiBDb21wb25lbnRzLkJxVG9vbHRpcFsncGxhY2VtZW50J10pIHt9O1xuICAgIC8qKlxuICAgKiBXaGV0aGVyIHRoZSB0b29sdGlwIHNob3VsZCBoYXZlIHRoZSBzYW1lIHdpZHRoIGFzIHRoZSB0cmlnZ2VyIGVsZW1lbnRcbihhcHBsaWNhYmxlIG9ubHkgZm9yIGNvbnRlbnQgc2hvcnRlciB0aGFuIHRoZSB0cmlnZ2VyIGVsZW1lbnQpXG4gICAqL1xuICBzZXQgc2FtZVdpZHRoKF86IENvbXBvbmVudHMuQnFUb29sdGlwWydzYW1lV2lkdGgnXSkge307XG4gICAgLyoqXG4gICAqIFNldCB0aGUgYWN0aW9uIHdoZW4gdGhlIHRvb2x0aXAgc2hvdWxkIGJlIGRpc3BsYXllZCwgb24gaG92ZXIgKGRlZmF1bHQpIG9yIGNsaWNrXG4gICAqL1xuICBzZXQgZGlzcGxheU9uKF86IENvbXBvbmVudHMuQnFUb29sdGlwWydkaXNwbGF5T24nXSkge307XG4gICAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCB0aGUgdG9vbHRpcCBpcyB2aXNpYmxlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBmaXJzdCByZW5kZXJlZCxcbmFuZCB3aGVuIGludGVyYWN0aW5nIHdpdGggdGhlIHRyaWdnZXJcbiAgICovXG4gIHNldCB2aXNpYmxlKF86IENvbXBvbmVudHMuQnFUb29sdGlwWyd2aXNpYmxlJ10pIHt9O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcVRvb2x0aXAgZXh0ZW5kcyBDb21wb25lbnRzLkJxVG9vbHRpcCB7fVxuXG5cbiJdfQ==