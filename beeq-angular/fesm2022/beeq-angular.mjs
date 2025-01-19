import * as i0 from '@angular/core';
import { Directive, HostListener, ChangeDetectorRef, ElementRef, NgZone, Component, ChangeDetectionStrategy, APP_INITIALIZER, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { __decorate, __metadata } from 'tslib';
import { fromEvent } from 'rxjs';
import { DOCUMENT, CommonModule } from '@angular/common';
import { defineCustomElements } from '@beeq/core/dist/loader';

class ValueAccessor {
    constructor(el) {
        this.el = el;
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    writeValue(value) {
        this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
    }
    handleChangeEvent(value) {
        if (value !== this.lastValue) {
            this.lastValue = value;
            this.onChange(value);
        }
    }
    _handleBlurEvent() {
        this.onTouched();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.el.nativeElement.disabled = isDisabled;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ValueAccessor, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: ValueAccessor, host: { listeners: { "focusout": "_handleBlurEvent()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ValueAccessor, decorators: [{
            type: Directive,
            args: [{}]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { _handleBlurEvent: [{
                type: HostListener,
                args: ['focusout']
            }] } });

class BooleanValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
    writeValue(value) {
        this.el.nativeElement.checked = this.lastValue = value == null ? false : value;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BooleanValueAccessor, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: BooleanValueAccessor, selector: "bq-checkbox, bq-switch", host: { listeners: { "bqChange": "handleChangeEvent($event.target.checked)" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: BooleanValueAccessor,
                multi: true
            }
        ], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BooleanValueAccessor, decorators: [{
            type: Directive,
            args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'bq-checkbox, bq-switch',
                    host: {
                        '(bqChange)': 'handleChangeEvent($event.target.checked)'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: BooleanValueAccessor,
                            multi: true
                        }
                    ]
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

class NumericValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
    registerOnChange(fn) {
        super.registerOnChange(value => {
            fn(value === '' ? null : parseFloat(value));
        });
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NumericValueAccessor, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: NumericValueAccessor, selector: "bq-input[type=\"number\"], bq-slider:not[type=\"range\"]", host: { listeners: { "bqChange": "handleChangeEvent($event.target.value)" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: NumericValueAccessor,
                multi: true
            }
        ], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NumericValueAccessor, decorators: [{
            type: Directive,
            args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'bq-input[type="number"], bq-slider:not[type="range"]',
                    host: {
                        '(bqChange)': 'handleChangeEvent($event.target.value)'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: NumericValueAccessor,
                            multi: true
                        }
                    ]
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

class RadioValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RadioValueAccessor, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: RadioValueAccessor, selector: "bq-radio-group", host: { listeners: { "bqChange": "handleChangeEvent($event.target.value)" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: RadioValueAccessor,
                multi: true
            }
        ], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RadioValueAccessor, decorators: [{
            type: Directive,
            args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'bq-radio-group',
                    host: {
                        '(bqChange)': 'handleChangeEvent($event.target.value)'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: RadioValueAccessor,
                            multi: true
                        }
                    ]
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

class SelectValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SelectValueAccessor, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: SelectValueAccessor, selector: "bq-select", host: { listeners: { "bqChange": "handleChangeEvent($event.target.value)" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: SelectValueAccessor,
                multi: true
            }
        ], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SelectValueAccessor, decorators: [{
            type: Directive,
            args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'bq-select',
                    host: {
                        '(bqChange)': 'handleChangeEvent($event.target.value)'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: SelectValueAccessor,
                            multi: true
                        }
                    ]
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

class TextValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TextValueAccessor, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: TextValueAccessor, selector: "bq-date-picker, bq-input:not[type=\"number\"], bq-slider[type=\"range\", bq-textarea", host: { listeners: { "bqChange": "handleChangeEvent($event.target.value)" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: TextValueAccessor,
                multi: true
            }
        ], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TextValueAccessor, decorators: [{
            type: Directive,
            args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'bq-date-picker, bq-input:not[type="number"], bq-slider[type="range", bq-textarea',
                    host: {
                        '(bqChange)': 'handleChangeEvent($event.target.value)'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: TextValueAccessor,
                            multi: true
                        }
                    ]
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* eslint-disable */
/* tslint:disable */
const proxyInputs = (Cmp, inputs) => {
    const Prototype = Cmp.prototype;
    inputs.forEach((item) => {
        Object.defineProperty(Prototype, item, {
            get() {
                return this.el[item];
            },
            set(val) {
                this.z.runOutsideAngular(() => (this.el[item] = val));
            },
            /**
             * In the event that proxyInputs is called
             * multiple times re-defining these inputs
             * will cause an error to be thrown. As a result
             * we set configurable: true to indicate these
             * properties can be changed.
             */
            configurable: true,
        });
    });
};
const proxyMethods = (Cmp, methods) => {
    const Prototype = Cmp.prototype;
    methods.forEach((methodName) => {
        Prototype[methodName] = function () {
            const args = arguments;
            return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
        };
    });
};
const proxyOutputs = (instance, el, events) => {
    events.forEach((eventName) => (instance[eventName] = fromEvent(el, eventName)));
};
const defineCustomElement = (tagName, customElement) => {
    if (customElement !== undefined && typeof customElements !== 'undefined' && !customElements.get(tagName)) {
        customElements.define(tagName, customElement);
    }
};
// tslint:disable-next-line: only-arrow-functions
function ProxyCmp(opts) {
    const decorator = function (cls) {
        const { defineCustomElementFn, inputs, methods } = opts;
        if (defineCustomElementFn !== undefined) {
            defineCustomElementFn();
        }
        if (inputs) {
            proxyInputs(cls, inputs);
        }
        if (methods) {
            proxyMethods(cls, methods);
        }
        return cls;
    };
    return decorator;
}

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

const DIRECTIVES = [
    BqAccordion,
    BqAccordionGroup,
    BqAlert,
    BqAvatar,
    BqBadge,
    BqBreadcrumb,
    BqBreadcrumbItem,
    BqButton,
    BqCard,
    BqCheckbox,
    BqCol,
    BqDatePicker,
    BqDialog,
    BqDivider,
    BqDrawer,
    BqDropdown,
    BqEmptyState,
    BqGrid,
    BqIcon,
    BqInput,
    BqLogo,
    BqNotification,
    BqOption,
    BqOptionGroup,
    BqOptionList,
    BqPageTitle,
    BqPanel,
    BqProgress,
    BqRadio,
    BqRadioGroup,
    BqRow,
    BqSelect,
    BqSideMenu,
    BqSideMenuItem,
    BqSlider,
    BqSpinner,
    BqStatus,
    BqStepItem,
    BqSteps,
    BqSwitch,
    BqTab,
    BqTabGroup,
    BqTag,
    BqText,
    BqTextarea,
    BqToast,
    BqTooltip
];

const DECLARATIONS = [
    ...DIRECTIVES,
    // ngModel Accessors
    BooleanValueAccessor,
    NumericValueAccessor,
    RadioValueAccessor,
    SelectValueAccessor,
    TextValueAccessor,
];
class BeeQModule {
    static forRoot() {
        return {
            ngModule: BeeQModule,
            providers: [
                {
                    provide: APP_INITIALIZER,
                    useFactory: () => defineCustomElements,
                    multi: true,
                    deps: [DOCUMENT, NgZone],
                },
            ],
        };
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BeeQModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: BeeQModule, declarations: [BqAccordion, BqAccordionGroup, BqAlert, BqAvatar, BqBadge, BqBreadcrumb, BqBreadcrumbItem, BqButton, BqCard, BqCheckbox, BqCol, BqDatePicker, BqDialog, BqDivider, BqDrawer, BqDropdown, BqEmptyState, BqGrid, BqIcon, BqInput, BqLogo, BqNotification, BqOption, BqOptionGroup, BqOptionList, BqPageTitle, BqPanel, BqProgress, BqRadio, BqRadioGroup, BqRow, BqSelect, BqSideMenu, BqSideMenuItem, BqSlider, BqSpinner, BqStatus, BqStepItem, BqSteps, BqSwitch, BqTab, BqTabGroup, BqTag, BqText, BqTextarea, BqToast, BqTooltip, 
            // ngModel Accessors
            BooleanValueAccessor,
            NumericValueAccessor,
            RadioValueAccessor,
            SelectValueAccessor,
            TextValueAccessor], imports: [CommonModule], exports: [BqAccordion, BqAccordionGroup, BqAlert, BqAvatar, BqBadge, BqBreadcrumb, BqBreadcrumbItem, BqButton, BqCard, BqCheckbox, BqCol, BqDatePicker, BqDialog, BqDivider, BqDrawer, BqDropdown, BqEmptyState, BqGrid, BqIcon, BqInput, BqLogo, BqNotification, BqOption, BqOptionGroup, BqOptionList, BqPageTitle, BqPanel, BqProgress, BqRadio, BqRadioGroup, BqRow, BqSelect, BqSideMenu, BqSideMenuItem, BqSlider, BqSpinner, BqStatus, BqStepItem, BqSteps, BqSwitch, BqTab, BqTabGroup, BqTag, BqText, BqTextarea, BqToast, BqTooltip, 
            // ngModel Accessors
            BooleanValueAccessor,
            NumericValueAccessor,
            RadioValueAccessor,
            SelectValueAccessor,
            TextValueAccessor] }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BeeQModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BeeQModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: DECLARATIONS,
                    exports: DECLARATIONS,
                }]
        }] });

/* -------------------------------------------------------------------------- */
/*                                 DIRECTIVES                                 */
/* -------------------------------------------------------------------------- */

/**
 * Generated bundle index. Do not edit.
 */

export { BeeQModule, BooleanValueAccessor, BqAccordion, BqAccordionGroup, BqAlert, BqAvatar, BqBadge, BqBreadcrumb, BqBreadcrumbItem, BqButton, BqCard, BqCheckbox, BqCol, BqDatePicker, BqDialog, BqDivider, BqDrawer, BqDropdown, BqEmptyState, BqGrid, BqIcon, BqInput, BqLogo, BqNotification, BqOption, BqOptionGroup, BqOptionList, BqPageTitle, BqPanel, BqProgress, BqRadio, BqRadioGroup, BqRow, BqSelect, BqSideMenu, BqSideMenuItem, BqSlider, BqSpinner, BqStatus, BqStepItem, BqSteps, BqSwitch, BqTab, BqTabGroup, BqTag, BqText, BqTextarea, BqToast, BqTooltip, NumericValueAccessor, RadioValueAccessor, SelectValueAccessor, TextValueAccessor };
//# sourceMappingURL=beeq-angular.mjs.map
