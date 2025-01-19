import * as i0 from '@angular/core';
import { Directive, HostListener, ChangeDetectorRef, ElementRef, NgZone, Component, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { __decorate, __metadata } from 'tslib';
import { fromEvent } from 'rxjs';
import { defineCustomElement as defineCustomElement$1 } from '@beeq/core/dist/components/bq-accordion.js';
import { defineCustomElement as defineCustomElement$2 } from '@beeq/core/dist/components/bq-accordion-group.js';
import { defineCustomElement as defineCustomElement$3 } from '@beeq/core/dist/components/bq-alert.js';
import { defineCustomElement as defineCustomElement$4 } from '@beeq/core/dist/components/bq-avatar.js';
import { defineCustomElement as defineCustomElement$5 } from '@beeq/core/dist/components/bq-badge.js';
import { defineCustomElement as defineCustomElement$6 } from '@beeq/core/dist/components/bq-breadcrumb.js';
import { defineCustomElement as defineCustomElement$7 } from '@beeq/core/dist/components/bq-breadcrumb-item.js';
import { defineCustomElement as defineCustomElement$8 } from '@beeq/core/dist/components/bq-button.js';
import { defineCustomElement as defineCustomElement$9 } from '@beeq/core/dist/components/bq-card.js';
import { defineCustomElement as defineCustomElement$a } from '@beeq/core/dist/components/bq-checkbox.js';
import { defineCustomElement as defineCustomElement$b } from '@beeq/core/dist/components/bq-col.js';
import { defineCustomElement as defineCustomElement$c } from '@beeq/core/dist/components/bq-date-picker.js';
import { defineCustomElement as defineCustomElement$d } from '@beeq/core/dist/components/bq-dialog.js';
import { defineCustomElement as defineCustomElement$e } from '@beeq/core/dist/components/bq-divider.js';
import { defineCustomElement as defineCustomElement$f } from '@beeq/core/dist/components/bq-drawer.js';
import { defineCustomElement as defineCustomElement$g } from '@beeq/core/dist/components/bq-dropdown.js';
import { defineCustomElement as defineCustomElement$h } from '@beeq/core/dist/components/bq-empty-state.js';
import { defineCustomElement as defineCustomElement$i } from '@beeq/core/dist/components/bq-grid.js';
import { defineCustomElement as defineCustomElement$j } from '@beeq/core/dist/components/bq-icon.js';
import { defineCustomElement as defineCustomElement$k } from '@beeq/core/dist/components/bq-input.js';
import { defineCustomElement as defineCustomElement$l } from '@beeq/core/dist/components/bq-logo.js';
import { defineCustomElement as defineCustomElement$m } from '@beeq/core/dist/components/bq-notification.js';
import { defineCustomElement as defineCustomElement$n } from '@beeq/core/dist/components/bq-option.js';
import { defineCustomElement as defineCustomElement$o } from '@beeq/core/dist/components/bq-option-group.js';
import { defineCustomElement as defineCustomElement$p } from '@beeq/core/dist/components/bq-option-list.js';
import { defineCustomElement as defineCustomElement$q } from '@beeq/core/dist/components/bq-page-title.js';
import { defineCustomElement as defineCustomElement$r } from '@beeq/core/dist/components/bq-panel.js';
import { defineCustomElement as defineCustomElement$s } from '@beeq/core/dist/components/bq-progress.js';
import { defineCustomElement as defineCustomElement$t } from '@beeq/core/dist/components/bq-radio.js';
import { defineCustomElement as defineCustomElement$u } from '@beeq/core/dist/components/bq-radio-group.js';
import { defineCustomElement as defineCustomElement$v } from '@beeq/core/dist/components/bq-row.js';
import { defineCustomElement as defineCustomElement$w } from '@beeq/core/dist/components/bq-select.js';
import { defineCustomElement as defineCustomElement$x } from '@beeq/core/dist/components/bq-side-menu.js';
import { defineCustomElement as defineCustomElement$y } from '@beeq/core/dist/components/bq-side-menu-item.js';
import { defineCustomElement as defineCustomElement$z } from '@beeq/core/dist/components/bq-slider.js';
import { defineCustomElement as defineCustomElement$A } from '@beeq/core/dist/components/bq-spinner.js';
import { defineCustomElement as defineCustomElement$B } from '@beeq/core/dist/components/bq-status.js';
import { defineCustomElement as defineCustomElement$C } from '@beeq/core/dist/components/bq-step-item.js';
import { defineCustomElement as defineCustomElement$D } from '@beeq/core/dist/components/bq-steps.js';
import { defineCustomElement as defineCustomElement$E } from '@beeq/core/dist/components/bq-switch.js';
import { defineCustomElement as defineCustomElement$F } from '@beeq/core/dist/components/bq-tab.js';
import { defineCustomElement as defineCustomElement$G } from '@beeq/core/dist/components/bq-tab-group.js';
import { defineCustomElement as defineCustomElement$H } from '@beeq/core/dist/components/bq-tag.js';
import { defineCustomElement as defineCustomElement$I } from '@beeq/core/dist/components/bq-text.js';
import { defineCustomElement as defineCustomElement$J } from '@beeq/core/dist/components/bq-textarea.js';
import { defineCustomElement as defineCustomElement$K } from '@beeq/core/dist/components/bq-toast.js';
import { defineCustomElement as defineCustomElement$L } from '@beeq/core/dist/components/bq-tooltip.js';

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
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: BooleanValueAccessor, isStandalone: true, selector: "bq-checkbox, bq-switch", host: { listeners: { "bqChange": "handleChangeEvent($event.target.checked)" } }, providers: [
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
                    ], standalone: true
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
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: NumericValueAccessor, isStandalone: true, selector: "bq-input[type=\"number\"], bq-slider:not[type=\"range\"]", host: { listeners: { "bqChange": "handleChangeEvent($event.target.value)" } }, providers: [
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
                    ], standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

class RadioValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RadioValueAccessor, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: RadioValueAccessor, isStandalone: true, selector: "bq-radio-group", host: { listeners: { "bqChange": "handleChangeEvent($event.target.value)" } }, providers: [
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
                    ], standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

class SelectValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SelectValueAccessor, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: SelectValueAccessor, isStandalone: true, selector: "bq-select", host: { listeners: { "bqChange": "handleChangeEvent($event.target.value)" } }, providers: [
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
                    ], standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

class TextValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TextValueAccessor, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: TextValueAccessor, isStandalone: true, selector: "bq-date-picker, bq-input:not[type=\"number\"], bq-slider[type=\"range\", bq-textarea", host: { listeners: { "bqChange": "handleChangeEvent($event.target.value)" } }, providers: [
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
                    ], standalone: true
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
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqBlur', 'bqFocus', 'bqOpen', 'bqAfterOpen', 'bqClose', 'bqAfterClose', 'bqClick']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqAccordion, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqAccordion, isStandalone: true, selector: "bq-accordion", inputs: { appearance: "appearance", disabled: "disabled", expanded: "expanded", noAnimation: "noAnimation", rotate: "rotate", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqAccordion = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$1,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqAccordionGroup = class BqAccordionGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqAccordionGroup, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqAccordionGroup, isStandalone: true, selector: "bq-accordion-group", inputs: { appearance: "appearance", expandAll: "expandAll", multiple: "multiple", noAnimation: "noAnimation", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqAccordionGroup = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$2,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqAlert = class BqAlert {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqHide', 'bqShow', 'bqAfterShow', 'bqAfterHide']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqAlert, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqAlert, isStandalone: true, selector: "bq-alert", inputs: { autoDismiss: "autoDismiss", border: "border", disableClose: "disableClose", hideIcon: "hideIcon", open: "open", sticky: "sticky", time: "time", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqAlert = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$3,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqAvatar = class BqAvatar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqAvatar, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqAvatar, isStandalone: true, selector: "bq-avatar", inputs: { altText: "altText", image: "image", initials: "initials", label: "label", shape: "shape", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqAvatar = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$4,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqBadge = class BqBadge {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqBadge, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqBadge, isStandalone: true, selector: "bq-badge", inputs: { backgroundColor: "backgroundColor", size: "size", textColor: "textColor" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqBadge = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$5,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqBreadcrumb = class BqBreadcrumb {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqBreadcrumb, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqBreadcrumb, isStandalone: true, selector: "bq-breadcrumb", inputs: { label: "label" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqBreadcrumb = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$6,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqBreadcrumbItem = class BqBreadcrumbItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqBlur', 'bqFocus', 'bqClick']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqBreadcrumbItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqBreadcrumbItem, isStandalone: true, selector: "bq-breadcrumb-item", inputs: { href: "href", rel: "rel", target: "target" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqBreadcrumbItem = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$7,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqButton = class BqButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqBlur', 'bqFocus', 'bqClick']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqButton, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqButton, isStandalone: true, selector: "bq-button", inputs: { appearance: "appearance", block: "block", border: "border", disabled: "disabled", download: "download", href: "href", justifyContent: "justifyContent", loading: "loading", size: "size", target: "target", type: "type", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqButton = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$8,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqCard = class BqCard {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqCard, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqCard, isStandalone: true, selector: "bq-card", inputs: { border: "border", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqCard = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$9,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqCheckbox = class BqCheckbox {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqChange', 'bqFocus', 'bqBlur']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqCheckbox, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqCheckbox, isStandalone: true, selector: "bq-checkbox", inputs: { backgroundOnHover: "backgroundOnHover", checked: "checked", disabled: "disabled", formId: "formId", formValidationMessage: "formValidationMessage", indeterminate: "indeterminate", name: "name", required: "required", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqCheckbox = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$a,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqCol = class BqCol {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqCol, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqCol, isStandalone: true, selector: "bq-col", inputs: { size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqCol = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$b,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqDatePicker = class BqDatePicker {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqBlur', 'bqChange', 'bqClear', 'bqFocus']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqDatePicker, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqDatePicker, isStandalone: true, selector: "bq-date-picker", inputs: { autofocus: "autofocus", clearButtonLabel: "clearButtonLabel", disableClear: "disableClear", disabled: "disabled", distance: "distance", firstDayOfWeek: "firstDayOfWeek", form: "form", formValidationMessage: "formValidationMessage", formatOptions: "formatOptions", isDateDisallowed: "isDateDisallowed", locale: "locale", max: "max", min: "min", months: "months", monthsPerView: "monthsPerView", name: "name", open: "open", panelHeight: "panelHeight", placeholder: "placeholder", placement: "placement", required: "required", showOutsideDays: "showOutsideDays", skidding: "skidding", strategy: "strategy", tentative: "tentative", type: "type", validationStatus: "validationStatus", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqDatePicker = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$c,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqDialog = class BqDialog {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqCancel', 'bqClose', 'bqOpen', 'bqAfterOpen', 'bqAfterClose']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqDialog, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqDialog, isStandalone: true, selector: "bq-dialog", inputs: { border: "border", disableBackdrop: "disableBackdrop", disableCloseClickOutside: "disableCloseClickOutside", disableCloseEscKeydown: "disableCloseEscKeydown", footerAppearance: "footerAppearance", hideCloseButton: "hideCloseButton", open: "open", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqDialog = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$d,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqDivider = class BqDivider {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqDivider, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqDivider, isStandalone: true, selector: "bq-divider", inputs: { dashed: "dashed", orientation: "orientation", strokeBasis: "strokeBasis", strokeColor: "strokeColor", strokeDashGap: "strokeDashGap", strokeDashWidth: "strokeDashWidth", strokeLinecap: "strokeLinecap", strokeThickness: "strokeThickness", titleAlignment: "titleAlignment" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqDivider = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$e,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqDrawer = class BqDrawer {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqClose', 'bqOpen', 'bqAfterOpen', 'bqAfterClose']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqDrawer, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqDrawer, isStandalone: true, selector: "bq-drawer", inputs: { closeOnClickOutside: "closeOnClickOutside", closeOnEsc: "closeOnEsc", enableBackdrop: "enableBackdrop", open: "open", placement: "placement", position: "position" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqDrawer = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$f,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqDropdown = class BqDropdown {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqOpen']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqDropdown, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqDropdown, isStandalone: true, selector: "bq-dropdown", inputs: { disabled: "disabled", distance: "distance", keepOpenOnSelect: "keepOpenOnSelect", open: "open", panelHeight: "panelHeight", placement: "placement", sameWidth: "sameWidth", skidding: "skidding", strategy: "strategy" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqDropdown = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$g,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqEmptyState = class BqEmptyState {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqEmptyState, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqEmptyState, isStandalone: true, selector: "bq-empty-state", inputs: { size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqEmptyState = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$h,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqGrid = class BqGrid {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqGrid, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqGrid, isStandalone: true, selector: "bq-grid", inputs: { fixed: "fixed", noPadding: "noPadding" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqGrid = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$i,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqIcon = class BqIcon {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['svgLoaded']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqIcon, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqIcon, isStandalone: true, selector: "bq-icon", inputs: { color: "color", label: "label", name: "name", size: "size", src: "src", weight: "weight" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqIcon = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$j,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqInput = class BqInput {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqBlur', 'bqChange', 'bqClear', 'bqFocus', 'bqInput']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqInput, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqInput, isStandalone: true, selector: "bq-input", inputs: { autocapitalize: "autocapitalize", autocomplete: "autocomplete", autocorrect: "autocorrect", autofocus: "autofocus", clearButtonLabel: "clearButtonLabel", debounceTime: "debounceTime", disableClear: "disableClear", disabled: "disabled", form: "form", formValidationMessage: "formValidationMessage", inputmode: "inputmode", max: "max", maxlength: "maxlength", min: "min", minlength: "minlength", name: "name", pattern: "pattern", placeholder: "placeholder", readonly: "readonly", required: "required", step: "step", type: "type", validationStatus: "validationStatus", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqInput = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$k,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqLogo = class BqLogo {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqLogo, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqLogo, isStandalone: true, selector: "bq-logo", inputs: { size: "size", type: "type", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqLogo = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$l,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqNotification = class BqNotification {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqHide', 'bqShow', 'bqAfterOpen', 'bqAfterClose']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqNotification, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqNotification, isStandalone: true, selector: "bq-notification", inputs: { autoDismiss: "autoDismiss", border: "border", disableClose: "disableClose", hideIcon: "hideIcon", open: "open", time: "time", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqNotification = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$m,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqOption = class BqOption {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqBlur', 'bqFocus', 'bqClick', 'bqEnter']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqOption, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqOption, isStandalone: true, selector: "bq-option", inputs: { disabled: "disabled", hidden: "hidden", selected: "selected", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqOption = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$n,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqOptionGroup = class BqOptionGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqOptionGroup, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqOptionGroup, isStandalone: true, selector: "bq-option-group", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqOptionGroup = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$o
    }),
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqOptionList = class BqOptionList {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqSelect']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqOptionList, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqOptionList, isStandalone: true, selector: "bq-option-list", inputs: { ariaLabel: "ariaLabel" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqOptionList = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$p,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqPageTitle = class BqPageTitle {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqPageTitle, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqPageTitle, isStandalone: true, selector: "bq-page-title", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqPageTitle = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$q
    }),
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqPanel = class BqPanel {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqPanel, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqPanel, isStandalone: true, selector: "bq-panel", inputs: { distance: "distance", open: "open", placement: "placement", sameWidth: "sameWidth", skidding: "skidding", strategy: "strategy" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqPanel = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$r,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqProgress = class BqProgress {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqProgress, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqProgress, isStandalone: true, selector: "bq-progress", inputs: { borderShape: "borderShape", enableTooltip: "enableTooltip", indeterminate: "indeterminate", label: "label", thickness: "thickness", type: "type", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqProgress = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$s,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqRadio = class BqRadio {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqClick', 'bqFocus', 'bqBlur', 'bqKeyDown']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqRadio, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqRadio, isStandalone: true, selector: "bq-radio", inputs: { backgroundOnHover: "backgroundOnHover", checked: "checked", disabled: "disabled", formId: "formId", name: "name", required: "required", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqRadio = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$t,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqRadioGroup = class BqRadioGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqChange']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqRadioGroup, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqRadioGroup, isStandalone: true, selector: "bq-radio-group", inputs: { backgroundOnHover: "backgroundOnHover", debounceTime: "debounceTime", disabled: "disabled", fieldset: "fieldset", name: "name", orientation: "orientation", required: "required", requiredValidationMessage: "requiredValidationMessage", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqRadioGroup = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$u,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqRow = class BqRow {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqRow, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqRow, isStandalone: true, selector: "bq-row", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqRow = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$v
    }),
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqSelect = class BqSelect {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqBlur', 'bqClear', 'bqFocus', 'bqSelect']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqSelect, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqSelect, isStandalone: true, selector: "bq-select", inputs: { autofocus: "autofocus", clearButtonLabel: "clearButtonLabel", debounceTime: "debounceTime", disableClear: "disableClear", disabled: "disabled", distance: "distance", form: "form", keepOpenOnSelect: "keepOpenOnSelect", maxTagsVisible: "maxTagsVisible", multiple: "multiple", name: "name", open: "open", panelHeight: "panelHeight", placeholder: "placeholder", placement: "placement", readonly: "readonly", required: "required", sameWidth: "sameWidth", skidding: "skidding", strategy: "strategy", validationStatus: "validationStatus", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqSelect = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$w,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqSideMenu = class BqSideMenu {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqCollapse', 'bqSelect']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqSideMenu, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqSideMenu, isStandalone: true, selector: "bq-side-menu", inputs: { appearance: "appearance", collapse: "collapse", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqSideMenu = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$x,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqSideMenuItem = class BqSideMenuItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqBlur', 'bqFocus', 'bqClick']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqSideMenuItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqSideMenuItem, isStandalone: true, selector: "bq-side-menu-item", inputs: { active: "active", collapse: "collapse", disabled: "disabled" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqSideMenuItem = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$y,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqSlider = class BqSlider {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqChange', 'bqBlur', 'bqFocus']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqSlider, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqSlider, isStandalone: true, selector: "bq-slider", inputs: { debounceTime: "debounceTime", disabled: "disabled", enableTooltip: "enableTooltip", enableValueIndicator: "enableValueIndicator", gap: "gap", max: "max", min: "min", name: "name", step: "step", tooltipAlwaysVisible: "tooltipAlwaysVisible", type: "type", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqSlider = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$z,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqSpinner = class BqSpinner {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqSpinner, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqSpinner, isStandalone: true, selector: "bq-spinner", inputs: { animation: "animation", size: "size", textPosition: "textPosition" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqSpinner = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$A,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqStatus = class BqStatus {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqStatus, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqStatus, isStandalone: true, selector: "bq-status", inputs: { type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqStatus = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$B,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqStepItem = class BqStepItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqClick']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqStepItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqStepItem, isStandalone: true, selector: "bq-step-item", inputs: { size: "size", status: "status", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqStepItem = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$C,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqSteps = class BqSteps {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqSteps, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqSteps, isStandalone: true, selector: "bq-steps", inputs: { dividerColor: "dividerColor", size: "size", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqSteps = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$D,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqSwitch = class BqSwitch {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqChange', 'bqFocus', 'bqBlur']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqSwitch, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqSwitch, isStandalone: true, selector: "bq-switch", inputs: { backgroundOnHover: "backgroundOnHover", checked: "checked", disabled: "disabled", formValidationMessage: "formValidationMessage", fullWidth: "fullWidth", innerLabel: "innerLabel", justifyContent: "justifyContent", name: "name", required: "required", reverseOrder: "reverseOrder", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqSwitch = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$E,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqTab = class BqTab {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqClick', 'bqFocus', 'bqBlur', 'bqKeyDown']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqTab, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqTab, isStandalone: true, selector: "bq-tab", inputs: { active: "active", controls: "controls", disabled: "disabled", orientation: "orientation", placement: "placement", size: "size", tabId: "tabId" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqTab = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$F,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqTabGroup = class BqTabGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqChange']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqTabGroup, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqTabGroup, isStandalone: true, selector: "bq-tab-group", inputs: { debounceTime: "debounceTime", disableDivider: "disableDivider", orientation: "orientation", placement: "placement", size: "size", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqTabGroup = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$G,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqTag = class BqTag {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqClose', 'bqOpen', 'bqBlur', 'bqClick', 'bqFocus']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqTag, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqTag, isStandalone: true, selector: "bq-tag", inputs: { border: "border", clickable: "clickable", color: "color", disabled: "disabled", hidden: "hidden", removable: "removable", selected: "selected", size: "size", variant: "variant" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqTag = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$H,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqText = class BqText {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqText, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqText, isStandalone: true, selector: "bq-text", inputs: { backgroundColor: "backgroundColor", size: "size", textColor: "textColor" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqText = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$I,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqTextarea = class BqTextarea {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqBlur', 'bqChange', 'bqClear', 'bqFocus', 'bqInput']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqTextarea, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqTextarea, isStandalone: true, selector: "bq-textarea", inputs: { autoGrow: "autoGrow", autocapitalize: "autocapitalize", autocomplete: "autocomplete", autocorrect: "autocorrect", autofocus: "autofocus", debounceTime: "debounceTime", disableResize: "disableResize", disabled: "disabled", form: "form", formValidationMessage: "formValidationMessage", maxlength: "maxlength", name: "name", placeholder: "placeholder", readonly: "readonly", required: "required", rows: "rows", spellcheck: "spellcheck", validationStatus: "validationStatus", value: "value", wrap: "wrap" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqTextarea = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$J,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqToast = class BqToast {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['bqHide', 'bqShow']);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqToast, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqToast, isStandalone: true, selector: "bq-toast", inputs: { border: "border", hideIcon: "hideIcon", open: "open", placement: "placement", time: "time", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqToast = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$K,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let BqTooltip = class BqTooltip {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BqTooltip, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BqTooltip, isStandalone: true, selector: "bq-tooltip", inputs: { alwaysVisible: "alwaysVisible", displayOn: "displayOn", distance: "distance", hideArrow: "hideArrow", placement: "placement", sameWidth: "sameWidth", visible: "visible" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
BqTooltip = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineCustomElement$L,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });

/* -------------------------------------------------------------------------- */
/*                                 DIRECTIVES                                 */
/* -------------------------------------------------------------------------- */

/**
 * Generated bundle index. Do not edit.
 */

export { BooleanValueAccessor, BqAccordion, BqAccordionGroup, BqAlert, BqAvatar, BqBadge, BqBreadcrumb, BqBreadcrumbItem, BqButton, BqCard, BqCheckbox, BqCol, BqDatePicker, BqDialog, BqDivider, BqDrawer, BqDropdown, BqEmptyState, BqGrid, BqIcon, BqInput, BqLogo, BqNotification, BqOption, BqOptionGroup, BqOptionList, BqPageTitle, BqPanel, BqProgress, BqRadio, BqRadioGroup, BqRow, BqSelect, BqSideMenu, BqSideMenuItem, BqSlider, BqSpinner, BqStatus, BqStepItem, BqSteps, BqSwitch, BqTab, BqTabGroup, BqTag, BqText, BqTextarea, BqToast, BqTooltip, NumericValueAccessor, RadioValueAccessor, SelectValueAccessor, TextValueAccessor };
//# sourceMappingURL=beeq-angular-standalone.mjs.map
