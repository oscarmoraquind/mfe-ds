import { __decorate, __metadata } from "tslib";
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';
import { defineCustomElement as defineBqAccordion } from '@beeq/core/dist/components/bq-accordion.js';
import { defineCustomElement as defineBqAccordionGroup } from '@beeq/core/dist/components/bq-accordion-group.js';
import { defineCustomElement as defineBqAlert } from '@beeq/core/dist/components/bq-alert.js';
import { defineCustomElement as defineBqAvatar } from '@beeq/core/dist/components/bq-avatar.js';
import { defineCustomElement as defineBqBadge } from '@beeq/core/dist/components/bq-badge.js';
import { defineCustomElement as defineBqBreadcrumb } from '@beeq/core/dist/components/bq-breadcrumb.js';
import { defineCustomElement as defineBqBreadcrumbItem } from '@beeq/core/dist/components/bq-breadcrumb-item.js';
import { defineCustomElement as defineBqButton } from '@beeq/core/dist/components/bq-button.js';
import { defineCustomElement as defineBqCard } from '@beeq/core/dist/components/bq-card.js';
import { defineCustomElement as defineBqCheckbox } from '@beeq/core/dist/components/bq-checkbox.js';
import { defineCustomElement as defineBqCol } from '@beeq/core/dist/components/bq-col.js';
import { defineCustomElement as defineBqDatePicker } from '@beeq/core/dist/components/bq-date-picker.js';
import { defineCustomElement as defineBqDialog } from '@beeq/core/dist/components/bq-dialog.js';
import { defineCustomElement as defineBqDivider } from '@beeq/core/dist/components/bq-divider.js';
import { defineCustomElement as defineBqDrawer } from '@beeq/core/dist/components/bq-drawer.js';
import { defineCustomElement as defineBqDropdown } from '@beeq/core/dist/components/bq-dropdown.js';
import { defineCustomElement as defineBqEmptyState } from '@beeq/core/dist/components/bq-empty-state.js';
import { defineCustomElement as defineBqGrid } from '@beeq/core/dist/components/bq-grid.js';
import { defineCustomElement as defineBqIcon } from '@beeq/core/dist/components/bq-icon.js';
import { defineCustomElement as defineBqInput } from '@beeq/core/dist/components/bq-input.js';
import { defineCustomElement as defineBqLogo } from '@beeq/core/dist/components/bq-logo.js';
import { defineCustomElement as defineBqNotification } from '@beeq/core/dist/components/bq-notification.js';
import { defineCustomElement as defineBqOption } from '@beeq/core/dist/components/bq-option.js';
import { defineCustomElement as defineBqOptionGroup } from '@beeq/core/dist/components/bq-option-group.js';
import { defineCustomElement as defineBqOptionList } from '@beeq/core/dist/components/bq-option-list.js';
import { defineCustomElement as defineBqPageTitle } from '@beeq/core/dist/components/bq-page-title.js';
import { defineCustomElement as defineBqPanel } from '@beeq/core/dist/components/bq-panel.js';
import { defineCustomElement as defineBqProgress } from '@beeq/core/dist/components/bq-progress.js';
import { defineCustomElement as defineBqRadio } from '@beeq/core/dist/components/bq-radio.js';
import { defineCustomElement as defineBqRadioGroup } from '@beeq/core/dist/components/bq-radio-group.js';
import { defineCustomElement as defineBqRow } from '@beeq/core/dist/components/bq-row.js';
import { defineCustomElement as defineBqSelect } from '@beeq/core/dist/components/bq-select.js';
import { defineCustomElement as defineBqSideMenu } from '@beeq/core/dist/components/bq-side-menu.js';
import { defineCustomElement as defineBqSideMenuItem } from '@beeq/core/dist/components/bq-side-menu-item.js';
import { defineCustomElement as defineBqSlider } from '@beeq/core/dist/components/bq-slider.js';
import { defineCustomElement as defineBqSpinner } from '@beeq/core/dist/components/bq-spinner.js';
import { defineCustomElement as defineBqStatus } from '@beeq/core/dist/components/bq-status.js';
import { defineCustomElement as defineBqStepItem } from '@beeq/core/dist/components/bq-step-item.js';
import { defineCustomElement as defineBqSteps } from '@beeq/core/dist/components/bq-steps.js';
import { defineCustomElement as defineBqSwitch } from '@beeq/core/dist/components/bq-switch.js';
import { defineCustomElement as defineBqTab } from '@beeq/core/dist/components/bq-tab.js';
import { defineCustomElement as defineBqTabGroup } from '@beeq/core/dist/components/bq-tab-group.js';
import { defineCustomElement as defineBqTag } from '@beeq/core/dist/components/bq-tag.js';
import { defineCustomElement as defineBqText } from '@beeq/core/dist/components/bq-text.js';
import { defineCustomElement as defineBqTextarea } from '@beeq/core/dist/components/bq-textarea.js';
import { defineCustomElement as defineBqToast } from '@beeq/core/dist/components/bq-toast.js';
import { defineCustomElement as defineBqTooltip } from '@beeq/core/dist/components/bq-tooltip.js';
import * as i0 from "@angular/core";
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
        defineCustomElementFn: defineBqAccordion,
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
        defineCustomElementFn: defineBqAccordionGroup,
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
        defineCustomElementFn: defineBqAlert,
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
        defineCustomElementFn: defineBqAvatar,
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
        defineCustomElementFn: defineBqBadge,
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
        defineCustomElementFn: defineBqBreadcrumb,
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
        defineCustomElementFn: defineBqBreadcrumbItem,
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
        defineCustomElementFn: defineBqButton,
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
        defineCustomElementFn: defineBqCard,
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
        defineCustomElementFn: defineBqCheckbox,
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
        defineCustomElementFn: defineBqCol,
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
        defineCustomElementFn: defineBqDatePicker,
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
        defineCustomElementFn: defineBqDialog,
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
        defineCustomElementFn: defineBqDivider,
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
        defineCustomElementFn: defineBqDrawer,
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
        defineCustomElementFn: defineBqDropdown,
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
        defineCustomElementFn: defineBqEmptyState,
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
        defineCustomElementFn: defineBqGrid,
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
        defineCustomElementFn: defineBqIcon,
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
        defineCustomElementFn: defineBqInput,
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
        defineCustomElementFn: defineBqLogo,
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
        defineCustomElementFn: defineBqNotification,
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
        defineCustomElementFn: defineBqOption,
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
        defineCustomElementFn: defineBqOptionGroup
    }),
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
        defineCustomElementFn: defineBqOptionList,
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
        defineCustomElementFn: defineBqPageTitle
    }),
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
        defineCustomElementFn: defineBqPanel,
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
        defineCustomElementFn: defineBqProgress,
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
        defineCustomElementFn: defineBqRadio,
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
        defineCustomElementFn: defineBqRadioGroup,
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
        defineCustomElementFn: defineBqRow
    }),
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
        defineCustomElementFn: defineBqSelect,
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
        defineCustomElementFn: defineBqSideMenu,
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
        defineCustomElementFn: defineBqSideMenuItem,
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
        defineCustomElementFn: defineBqSlider,
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
        defineCustomElementFn: defineBqSpinner,
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
        defineCustomElementFn: defineBqStatus,
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
        defineCustomElementFn: defineBqStepItem,
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
        defineCustomElementFn: defineBqSteps,
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
        defineCustomElementFn: defineBqSwitch,
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
        defineCustomElementFn: defineBqTab,
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
        defineCustomElementFn: defineBqTabGroup,
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
        defineCustomElementFn: defineBqTag,
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
        defineCustomElementFn: defineBqText,
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
        defineCustomElementFn: defineBqTextarea,
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
        defineCustomElementFn: defineBqToast,
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
        defineCustomElementFn: defineBqTooltip,
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
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2JlZXEtYW5ndWxhci9zdGFuZGFsb25lL3NyYy9kaXJlY3RpdmVzL2NvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9CQUFvQjtBQUNwQiw4Q0FBOEM7QUFDOUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWdCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4SCxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBSXZFLE9BQU8sRUFBRSxtQkFBbUIsSUFBSSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxtQkFBbUIsSUFBSSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2pILE9BQU8sRUFBRSxtQkFBbUIsSUFBSSxhQUFhLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RixPQUFPLEVBQUUsbUJBQW1CLElBQUksY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEcsT0FBTyxFQUFFLG1CQUFtQixJQUFJLGFBQWEsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxtQkFBbUIsSUFBSSxrQkFBa0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxtQkFBbUIsSUFBSSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2pILE9BQU8sRUFBRSxtQkFBbUIsSUFBSSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRyxPQUFPLEVBQUUsbUJBQW1CLElBQUksWUFBWSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDNUYsT0FBTyxFQUFFLG1CQUFtQixJQUFJLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEcsT0FB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ZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLHVFQUF1RTtvQkFDdkUsTUFBTSxFQUFFLENBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDO29CQUNwRyxVQUFVLEVBQUUsSUFBSTtpQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogYXV0by1nZW5lcmF0ZWQgYW5ndWxhciBkaXJlY3RpdmUgcHJveGllcyAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFByb3h5Q21wLCBwcm94eU91dHB1dHMgfSBmcm9tICcuL2FuZ3VsYXItY29tcG9uZW50LWxpYi91dGlscyc7XG5cbmltcG9ydCB0eXBlIHsgQ29tcG9uZW50cyB9IGZyb20gJ0BiZWVxL2NvcmUvZGlzdC9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVCcUFjY29yZGlvbiB9IGZyb20gJ0BiZWVxL2NvcmUvZGlzdC9jb21wb25lbnRzL2JxLWFjY29yZGlvbi5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZUJxQWNjb3JkaW9uR3JvdXAgfSBmcm9tICdAYmVlcS9jb3JlL2Rpc3QvY29tcG9uZW50cy9icS1hY2NvcmRpb24tZ3JvdXAuanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVCcUFsZXJ0IH0gZnJvbSAnQGJlZXEvY29yZS9kaXN0L2NvbXBvbmVudHMvYnEtYWxlcnQuanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVCcUF2YXRhciB9IGZyb20gJ0BiZWVxL2NvcmUvZGlzdC9jb21wb25lbnRzL2JxLWF2YXRhci5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZUJxQmFkZ2UgfSBmcm9tICdAYmVlcS9jb3JlL2Rpc3QvY29tcG9uZW50cy9icS1iYWRnZS5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZUJxQnJlYWRjcnVtYiB9IGZyb20gJ0BiZWVxL2NvcmUvZGlzdC9jb21wb25lbnRzL2JxLWJyZWFkY3J1bWIuanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVCcUJyZWFkY3J1bWJJdGVtIH0gZnJvbSAnQGJlZXEvY29yZS9kaXN0L2NvbXBvbmVudHMvYnEtYnJlYWRjcnVtYi1pdGVtLmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lQnFCdXR0b24gfSBmcm9tICdAYmVlcS9jb3JlL2Rpc3QvY29tcG9uZW50cy9icS1idXR0b24uanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVCcUNhcmQgfSBmcm9tICdAYmVlcS9jb3JlL2Rpc3QvY29tcG9uZW50cy9icS1jYXJkLmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lQnFDaGVja2JveCB9IGZyb20gJ0BiZWVxL2NvcmUvZGlzdC9jb21wb25lbnRzL2JxLWNoZWNrYm94LmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lQnFDb2wgfSBmcm9tICdAYmVlcS9jb3JlL2Rpc3QvY29tcG9uZW50cy9icS1jb2wuanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVCcURhdGVQaWNrZXIgfSBmcm9tICdAYmVlcS9jb3JlL2Rpc3QvY29tcG9uZW50cy9icS1kYXRlLXBpY2tlci5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZUJxRGlhbG9nIH0gZnJvbSAnQGJlZXEvY29yZS9kaXN0L2NvbXBvbmVudHMvYnEtZGlhbG9nLmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lQnFEaXZpZGVyIH0gZnJvbSAnQGJlZXEvY29yZS9kaXN0L2NvbXBvbmVudHMvYnEtZGl2aWRlci5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZUJxRHJhd2VyIH0gZnJvbSAnQGJlZXEvY29yZS9kaXN0L2NvbXBvbmVudHMvYnEtZHJhd2VyLmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lQnFEcm9wZG93biB9IGZyb20gJ0BiZWVxL2NvcmUvZGlzdC9jb21wb25lbnRzL2JxLWRyb3Bkb3duLmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lQnFFbXB0eVN0YXRlIH0gZnJvbSAnQGJlZXEvY29yZS9kaXN0L2NvbXBvbmVudHMvYnEtZW1wdHktc3RhdGUuanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVCcUdyaWQgfSBmcm9tICdAYmVlcS9jb3JlL2Rpc3QvY29tcG9uZW50cy9icS1ncmlkLmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lQnFJY29uIH0gZnJvbSAnQGJlZXEvY29yZS9kaXN0L2NvbXBvbmVudHMvYnEtaWNvbi5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZUJxSW5wdXQgfSBmcm9tICdAYmVlcS9jb3JlL2Rpc3QvY29tcG9uZW50cy9icS1pbnB1dC5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZUJxTG9nbyB9IGZyb20gJ0BiZWVxL2NvcmUvZGlzdC9jb21wb25lbnRzL2JxLWxvZ28uanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVCcU5vdGlmaWNhdGlvbiB9IGZyb20gJ0BiZWVxL2NvcmUvZGlzdC9jb21wb25lbnRzL2JxLW5vdGlmaWNhdGlvbi5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZUJxT3B0aW9uIH0gZnJvbSAnQGJlZXEvY29yZS9kaXN0L2NvbXBvbmVudHMvYnEtb3B0aW9uLmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lQnFPcHRpb25Hcm91cCB9IGZyb20gJ0BiZWVxL2NvcmUvZGlzdC9jb21wb25lbnRzL2JxLW9wdGlvbi1ncm91cC5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZUJxT3B0aW9uTGlzdCB9IGZyb20gJ0BiZWVxL2NvcmUvZGlzdC9jb21wb25lbnRzL2JxLW9wdGlvbi1saXN0LmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lQnFQYWdlVGl0bGUgfSBmcm9tICdAYmVlcS9jb3JlL2Rpc3QvY29tcG9uZW50cy9icS1wYWdlLXRpdGxlLmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lQnFQYW5lbCB9IGZyb20gJ0BiZWVxL2NvcmUvZGlzdC9jb21wb25lbnRzL2JxLXBhbmVsLmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lQnFQcm9ncmVzcyB9IGZyb20gJ0BiZWVxL2NvcmUvZGlzdC9jb21wb25lbnRzL2JxLXByb2dyZXNzLmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lQnFSYWRpbyB9IGZyb20gJ0BiZWVxL2NvcmUvZGlzdC9jb21wb25lbnRzL2JxLXJhZGlvLmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lQnFSYWRpb0dyb3VwIH0gZnJvbSAnQGJlZXEvY29yZS9kaXN0L2NvbXBvbmVudHMvYnEtcmFkaW8tZ3JvdXAuanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVCcVJvdyB9IGZyb20gJ0BiZWVxL2NvcmUvZGlzdC9jb21wb25lbnRzL2JxLXJvdy5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZUJxU2VsZWN0IH0gZnJvbSAnQGJlZXEvY29yZS9kaXN0L2NvbXBvbmVudHMvYnEtc2VsZWN0LmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lQnFTaWRlTWVudSB9IGZyb20gJ0BiZWVxL2NvcmUvZGlzdC9jb21wb25lbnRzL2JxLXNpZGUtbWVudS5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZUJxU2lkZU1lbnVJdGVtIH0gZnJvbSAnQGJlZXEvY29yZS9kaXN0L2NvbXBvbmVudHMvYnEtc2lkZS1tZW51LWl0ZW0uanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVCcVNsaWRlciB9IGZyb20gJ0BiZWVxL2NvcmUvZGlzdC9jb21wb25lbnRzL2JxLXNsaWRlci5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZUJxU3Bpbm5lciB9IGZyb20gJ0BiZWVxL2NvcmUvZGlzdC9jb21wb25lbnRzL2JxLXNwaW5uZXIuanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVCcVN0YXR1cyB9IGZyb20gJ0BiZWVxL2NvcmUvZGlzdC9jb21wb25lbnRzL2JxLXN0YXR1cy5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZUJxU3RlcEl0ZW0gfSBmcm9tICdAYmVlcS9jb3JlL2Rpc3QvY29tcG9uZW50cy9icS1zdGVwLWl0ZW0uanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVCcVN0ZXBzIH0gZnJvbSAnQGJlZXEvY29yZS9kaXN0L2NvbXBvbmVudHMvYnEtc3RlcHMuanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVCcVN3aXRjaCB9IGZyb20gJ0BiZWVxL2NvcmUvZGlzdC9jb21wb25lbnRzL2JxLXN3aXRjaC5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZUJxVGFiIH0gZnJvbSAnQGJlZXEvY29yZS9kaXN0L2NvbXBvbmVudHMvYnEtdGFiLmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lQnFUYWJHcm91cCB9IGZyb20gJ0BiZWVxL2NvcmUvZGlzdC9jb21wb25lbnRzL2JxLXRhYi1ncm91cC5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZUJxVGFnIH0gZnJvbSAnQGJlZXEvY29yZS9kaXN0L2NvbXBvbmVudHMvYnEtdGFnLmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lQnFUZXh0IH0gZnJvbSAnQGJlZXEvY29yZS9kaXN0L2NvbXBvbmVudHMvYnEtdGV4dC5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZUJxVGV4dGFyZWEgfSBmcm9tICdAYmVlcS9jb3JlL2Rpc3QvY29tcG9uZW50cy9icS10ZXh0YXJlYS5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZUJxVG9hc3QgfSBmcm9tICdAYmVlcS9jb3JlL2Rpc3QvY29tcG9uZW50cy9icS10b2FzdC5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZUJxVG9vbHRpcCB9IGZyb20gJ0BiZWVxL2NvcmUvZGlzdC9jb21wb25lbnRzL2JxLXRvb2x0aXAuanMnO1xuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVCcUFjY29yZGlvbixcbiAgaW5wdXRzOiBbJ2FwcGVhcmFuY2UnLCAnZGlzYWJsZWQnLCAnZXhwYW5kZWQnLCAnbm9BbmltYXRpb24nLCAncm90YXRlJywgJ3NpemUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLWFjY29yZGlvbicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYXBwZWFyYW5jZScsICdkaXNhYmxlZCcsICdleHBhbmRlZCcsICdub0FuaW1hdGlvbicsICdyb3RhdGUnLCAnc2l6ZSddLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIEJxQWNjb3JkaW9uIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFBY2NvcmRpb25FbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydicUJsdXInLCAnYnFGb2N1cycsICdicU9wZW4nLCAnYnFBZnRlck9wZW4nLCAnYnFDbG9zZScsICdicUFmdGVyQ2xvc2UnLCAnYnFDbGljayddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcUFjY29yZGlvbiBleHRlbmRzIENvbXBvbmVudHMuQnFBY2NvcmRpb24ge1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgYWNjb3JkaW9uIGxvc2VzIGZvY3VzXG4gICAqL1xuICBicUJsdXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFBY2NvcmRpb25FbGVtZW50Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBhY2NvcmRpb24gZ2V0cyBmb2N1c1xuICAgKi9cbiAgYnFGb2N1czogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcUFjY29yZGlvbkVsZW1lbnQ+PjtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGFjY29yZGlvbiBpcyBvcGVuZWRcbiAgICovXG4gIGJxT3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcUFjY29yZGlvbkVsZW1lbnQ+PjtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIGFmdGVyIHRoZSBhY2NvcmRpb24gaXMgb3BlbmVkXG4gICAqL1xuICBicUFmdGVyT3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcUFjY29yZGlvbkVsZW1lbnQ+PjtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGFjY29yZGlvbiBpcyBjbG9zZWRcbiAgICovXG4gIGJxQ2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFBY2NvcmRpb25FbGVtZW50Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgYWNjb3JkaW9uIGlzIGNsb3NlZFxuICAgKi9cbiAgYnFBZnRlckNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxQWNjb3JkaW9uRWxlbWVudD4+O1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgYWNjb3JkaW9uIGlzIGNsaWNrZWRcbiAgICovXG4gIGJxQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFBY2NvcmRpb25FbGVtZW50Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVCcUFjY29yZGlvbkdyb3VwLFxuICBpbnB1dHM6IFsnYXBwZWFyYW5jZScsICdleHBhbmRBbGwnLCAnbXVsdGlwbGUnLCAnbm9BbmltYXRpb24nLCAnc2l6ZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtYWNjb3JkaW9uLWdyb3VwJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydhcHBlYXJhbmNlJywgJ2V4cGFuZEFsbCcsICdtdWx0aXBsZScsICdub0FuaW1hdGlvbicsICdzaXplJ10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQnFBY2NvcmRpb25Hcm91cCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxQWNjb3JkaW9uR3JvdXBFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcUFjY29yZGlvbkdyb3VwIGV4dGVuZHMgQ29tcG9uZW50cy5CcUFjY29yZGlvbkdyb3VwIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVCcUFsZXJ0LFxuICBpbnB1dHM6IFsnYXV0b0Rpc21pc3MnLCAnYm9yZGVyJywgJ2Rpc2FibGVDbG9zZScsICdoaWRlSWNvbicsICdvcGVuJywgJ3N0aWNreScsICd0aW1lJywgJ3R5cGUnXSxcbiAgbWV0aG9kczogWydoaWRlJywgJ3Nob3cnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLWFsZXJ0JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydhdXRvRGlzbWlzcycsICdib3JkZXInLCAnZGlzYWJsZUNsb3NlJywgJ2hpZGVJY29uJywgJ29wZW4nLCAnc3RpY2t5JywgJ3RpbWUnLCAndHlwZSddLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIEJxQWxlcnQge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcUFsZXJ0RWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYnFIaWRlJywgJ2JxU2hvdycsICdicUFmdGVyU2hvdycsICdicUFmdGVySGlkZSddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcUFsZXJ0IGV4dGVuZHMgQ29tcG9uZW50cy5CcUFsZXJ0IHtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGFsZXJ0IGlzIGhpZGRlblxuICAgKi9cbiAgYnFIaWRlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8YW55Pj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBhbGVydCBpcyBzaG93blxuICAgKi9cbiAgYnFTaG93OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8YW55Pj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgYWxlcnQgaGFzIGJlZW4gc2hvd25cbiAgICovXG4gIGJxQWZ0ZXJTaG93OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8YW55Pj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgYWxlcnQgaGFzIGJlZW4gaGlkZGVuXG4gICAqL1xuICBicUFmdGVySGlkZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PGFueT4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lQnFBdmF0YXIsXG4gIGlucHV0czogWydhbHRUZXh0JywgJ2ltYWdlJywgJ2luaXRpYWxzJywgJ2xhYmVsJywgJ3NoYXBlJywgJ3NpemUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLWF2YXRhcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYWx0VGV4dCcsICdpbWFnZScsICdpbml0aWFscycsICdsYWJlbCcsICdzaGFwZScsICdzaXplJ10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQnFBdmF0YXIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcUF2YXRhckVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxQXZhdGFyIGV4dGVuZHMgQ29tcG9uZW50cy5CcUF2YXRhciB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lQnFCYWRnZSxcbiAgaW5wdXRzOiBbJ2JhY2tncm91bmRDb2xvcicsICdzaXplJywgJ3RleHRDb2xvciddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtYmFkZ2UnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2JhY2tncm91bmRDb2xvcicsICdzaXplJywgJ3RleHRDb2xvciddLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIEJxQmFkZ2Uge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcUJhZGdlRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFCYWRnZSBleHRlbmRzIENvbXBvbmVudHMuQnFCYWRnZSB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lQnFCcmVhZGNydW1iLFxuICBpbnB1dHM6IFsnbGFiZWwnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLWJyZWFkY3J1bWInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2xhYmVsJ10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQnFCcmVhZGNydW1iIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFCcmVhZGNydW1iRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFCcmVhZGNydW1iIGV4dGVuZHMgQ29tcG9uZW50cy5CcUJyZWFkY3J1bWIge31cblxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IGRlZmluZUJxQnJlYWRjcnVtYkl0ZW0sXG4gIGlucHV0czogWydocmVmJywgJ3JlbCcsICd0YXJnZXQnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLWJyZWFkY3J1bWItaXRlbScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnaHJlZicsICdyZWwnLCAndGFyZ2V0J10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQnFCcmVhZGNydW1iSXRlbSB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxQnJlYWRjcnVtYkl0ZW1FbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydicUJsdXInLCAnYnFGb2N1cycsICdicUNsaWNrJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxQnJlYWRjcnVtYkl0ZW0gZXh0ZW5kcyBDb21wb25lbnRzLkJxQnJlYWRjcnVtYkl0ZW0ge1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiBpdGVtIGxvc2VzIGZvY3VzXG4gICAqL1xuICBicUJsdXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFCcmVhZGNydW1iSXRlbUVsZW1lbnQ+PjtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gaXRlbSBpcyBmb2N1c2VkXG4gICAqL1xuICBicUZvY3VzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxQnJlYWRjcnVtYkl0ZW1FbGVtZW50Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIGl0ZW0gaXMgY2xpY2tlZFxuICAgKi9cbiAgYnFDbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcUJyZWFkY3J1bWJJdGVtRWxlbWVudD4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lQnFCdXR0b24sXG4gIGlucHV0czogWydhcHBlYXJhbmNlJywgJ2Jsb2NrJywgJ2JvcmRlcicsICdkaXNhYmxlZCcsICdkb3dubG9hZCcsICdocmVmJywgJ2p1c3RpZnlDb250ZW50JywgJ2xvYWRpbmcnLCAnc2l6ZScsICd0YXJnZXQnLCAndHlwZScsICd2YXJpYW50J11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1idXR0b24nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2FwcGVhcmFuY2UnLCAnYmxvY2snLCAnYm9yZGVyJywgJ2Rpc2FibGVkJywgJ2Rvd25sb2FkJywgJ2hyZWYnLCAnanVzdGlmeUNvbnRlbnQnLCAnbG9hZGluZycsICdzaXplJywgJ3RhcmdldCcsICd0eXBlJywgJ3ZhcmlhbnQnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBCcUJ1dHRvbiB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxQnV0dG9uRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYnFCbHVyJywgJ2JxRm9jdXMnLCAnYnFDbGljayddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcUJ1dHRvbiBleHRlbmRzIENvbXBvbmVudHMuQnFCdXR0b24ge1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgYnV0dG9uIGxvc2VzIGZvY3VzXG4gICAqL1xuICBicUJsdXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFCdXR0b25FbGVtZW50Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZFxuICAgKi9cbiAgYnFGb2N1czogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcUJ1dHRvbkVsZW1lbnQ+PjtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gYnV0dG9uIGdldHMgZm9jdXNcbiAgICovXG4gIGJxQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFCdXR0b25FbGVtZW50Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVCcUNhcmQsXG4gIGlucHV0czogWydib3JkZXInLCAndHlwZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtY2FyZCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYm9yZGVyJywgJ3R5cGUnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBCcUNhcmQge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcUNhcmRFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcUNhcmQgZXh0ZW5kcyBDb21wb25lbnRzLkJxQ2FyZCB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lQnFDaGVja2JveCxcbiAgaW5wdXRzOiBbJ2JhY2tncm91bmRPbkhvdmVyJywgJ2NoZWNrZWQnLCAnZGlzYWJsZWQnLCAnZm9ybUlkJywgJ2Zvcm1WYWxpZGF0aW9uTWVzc2FnZScsICdpbmRldGVybWluYXRlJywgJ25hbWUnLCAncmVxdWlyZWQnLCAndmFsdWUnXSxcbiAgbWV0aG9kczogWyd2Q2xpY2snLCAndkZvY3VzJywgJ3ZCbHVyJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1jaGVja2JveCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYmFja2dyb3VuZE9uSG92ZXInLCAnY2hlY2tlZCcsICdkaXNhYmxlZCcsICdmb3JtSWQnLCAnZm9ybVZhbGlkYXRpb25NZXNzYWdlJywgJ2luZGV0ZXJtaW5hdGUnLCAnbmFtZScsICdyZXF1aXJlZCcsICd2YWx1ZSddLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIEJxQ2hlY2tib3gge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcUNoZWNrYm94RWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYnFDaGFuZ2UnLCAnYnFGb2N1cycsICdicUJsdXInXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFDaGVja2JveCBleHRlbmRzIENvbXBvbmVudHMuQnFDaGVja2JveCB7XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBjaGVja2JveCBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBicUNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHsgY2hlY2tlZDogYm9vbGVhbiB9Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBjaGVja2JveCBnZXRzIGZvY3VzXG4gICAqL1xuICBicUZvY3VzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxQ2hlY2tib3hFbGVtZW50Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBjaGVja2JveCBsb3NlcyBmb2N1c1xuICAgKi9cbiAgYnFCbHVyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxQ2hlY2tib3hFbGVtZW50Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVCcUNvbCxcbiAgaW5wdXRzOiBbJ3NpemUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLWNvbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnc2l6ZSddLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIEJxQ29sIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFDb2xFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcUNvbCBleHRlbmRzIENvbXBvbmVudHMuQnFDb2wge31cblxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IGRlZmluZUJxRGF0ZVBpY2tlcixcbiAgaW5wdXRzOiBbJ2F1dG9mb2N1cycsICdjbGVhckJ1dHRvbkxhYmVsJywgJ2Rpc2FibGVDbGVhcicsICdkaXNhYmxlZCcsICdkaXN0YW5jZScsICdmaXJzdERheU9mV2VlaycsICdmb3JtJywgJ2Zvcm1WYWxpZGF0aW9uTWVzc2FnZScsICdmb3JtYXRPcHRpb25zJywgJ2lzRGF0ZURpc2FsbG93ZWQnLCAnbG9jYWxlJywgJ21heCcsICdtaW4nLCAnbW9udGhzJywgJ21vbnRoc1BlclZpZXcnLCAnbmFtZScsICdvcGVuJywgJ3BhbmVsSGVpZ2h0JywgJ3BsYWNlaG9sZGVyJywgJ3BsYWNlbWVudCcsICdyZXF1aXJlZCcsICdzaG93T3V0c2lkZURheXMnLCAnc2tpZGRpbmcnLCAnc3RyYXRlZ3knLCAndGVudGF0aXZlJywgJ3R5cGUnLCAndmFsaWRhdGlvblN0YXR1cycsICd2YWx1ZSddLFxuICBtZXRob2RzOiBbJ2NsZWFyJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1kYXRlLXBpY2tlcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYXV0b2ZvY3VzJywgJ2NsZWFyQnV0dG9uTGFiZWwnLCAnZGlzYWJsZUNsZWFyJywgJ2Rpc2FibGVkJywgJ2Rpc3RhbmNlJywgJ2ZpcnN0RGF5T2ZXZWVrJywgJ2Zvcm0nLCAnZm9ybVZhbGlkYXRpb25NZXNzYWdlJywgJ2Zvcm1hdE9wdGlvbnMnLCAnaXNEYXRlRGlzYWxsb3dlZCcsICdsb2NhbGUnLCAnbWF4JywgJ21pbicsICdtb250aHMnLCAnbW9udGhzUGVyVmlldycsICduYW1lJywgJ29wZW4nLCAncGFuZWxIZWlnaHQnLCAncGxhY2Vob2xkZXInLCAncGxhY2VtZW50JywgJ3JlcXVpcmVkJywgJ3Nob3dPdXRzaWRlRGF5cycsICdza2lkZGluZycsICdzdHJhdGVneScsICd0ZW50YXRpdmUnLCAndHlwZScsICd2YWxpZGF0aW9uU3RhdHVzJywgJ3ZhbHVlJ10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQnFEYXRlUGlja2VyIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFEYXRlUGlja2VyRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYnFCbHVyJywgJ2JxQ2hhbmdlJywgJ2JxQ2xlYXInLCAnYnFGb2N1cyddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcURhdGVQaWNrZXIgZXh0ZW5kcyBDb21wb25lbnRzLkJxRGF0ZVBpY2tlciB7XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIGVtaXR0ZWQgd2hlbiB0aGUgaW5wdXQgbG9zZXMgZm9jdXNcbiAgICovXG4gIGJxQmx1cjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcURhdGVQaWNrZXJFbGVtZW50Pj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIGVtaXR0ZWQgd2hlbiB0aGUgaW5wdXQgdmFsdWUgaGFzIGNoYW5nZWQgYW5kIHRoZSBpbnB1dCBsb3NlcyBmb2N1cy5cblRoaXMgaGFuZGxlciBpcyBjYWxsZWQgd2hlbmV2ZXIgdGhlIHVzZXIgZmluaXNoZXMgdHlwaW5nIG9yIHBhc3RpbmcgdGV4dCBpbnRvIHRoZSBpbnB1dCBmaWVsZCBhbmQgdGhlbiBjbGlja3Mgb3V0c2lkZSBvZiB0aGUgaW5wdXQgZmllbGQuXG4gICAqL1xuICBicUNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHsgdmFsdWU6IHN0cmluZzsgZWw6IEhUTUxCcURhdGVQaWNrZXJFbGVtZW50IH0+PjtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgZW1pdHRlZCB3aGVuIHRoZSBpbnB1dCB2YWx1ZSBoYXMgYmVlbiBjbGVhcmVkXG4gICAqL1xuICBicUNsZWFyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxRGF0ZVBpY2tlckVsZW1lbnQ+PjtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgZW1pdHRlZCB3aGVuIHRoZSBpbnB1dCBoYXMgcmVjZWl2ZWQgZm9jdXNcbiAgICovXG4gIGJxRm9jdXM6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFEYXRlUGlja2VyRWxlbWVudD4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lQnFEaWFsb2csXG4gIGlucHV0czogWydib3JkZXInLCAnZGlzYWJsZUJhY2tkcm9wJywgJ2Rpc2FibGVDbG9zZUNsaWNrT3V0c2lkZScsICdkaXNhYmxlQ2xvc2VFc2NLZXlkb3duJywgJ2Zvb3RlckFwcGVhcmFuY2UnLCAnaGlkZUNsb3NlQnV0dG9uJywgJ29wZW4nLCAnc2l6ZSddLFxuICBtZXRob2RzOiBbJ3Nob3cnLCAnaGlkZScsICdjYW5jZWwnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLWRpYWxvZycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYm9yZGVyJywgJ2Rpc2FibGVCYWNrZHJvcCcsICdkaXNhYmxlQ2xvc2VDbGlja091dHNpZGUnLCAnZGlzYWJsZUNsb3NlRXNjS2V5ZG93bicsICdmb290ZXJBcHBlYXJhbmNlJywgJ2hpZGVDbG9zZUJ1dHRvbicsICdvcGVuJywgJ3NpemUnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBCcURpYWxvZyB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxRGlhbG9nRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYnFDYW5jZWwnLCAnYnFDbG9zZScsICdicU9wZW4nLCAnYnFBZnRlck9wZW4nLCAnYnFBZnRlckNsb3NlJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50cy5CcURpYWxvZyB7XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIGVtaXR0ZWQgd2hlbiB0aGUgZGlhbG9nIGhhcyBiZWVuIGNhbmNlbGVkIG9yIGRpc21pc3NlZFxuICAgKi9cbiAgYnFDYW5jZWw6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIGVtaXR0ZWQgd2hlbiB0aGUgZGlhbG9nIHdpbGwgY2xvc2VcbiAgICovXG4gIGJxQ2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIGVtaXR0ZWQgd2hlbiB0aGUgZGlhbG9nIHdpbGwgb3BlblxuICAgKi9cbiAgYnFPcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8dm9pZD4+O1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciBlbWl0dGVkIHdoZW4gdGhlIGRpYWxvZyBmaW5pc2ggb3BlbmluZ1xuICAgKi9cbiAgYnFBZnRlck9wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIGVtaXR0ZWQgd2hlbiB0aGUgZGlhbG9nIGZpbmlzaCBjbG9zaW5nXG4gICAqL1xuICBicUFmdGVyQ2xvc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx2b2lkPj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVCcURpdmlkZXIsXG4gIGlucHV0czogWydkYXNoZWQnLCAnb3JpZW50YXRpb24nLCAnc3Ryb2tlQmFzaXMnLCAnc3Ryb2tlQ29sb3InLCAnc3Ryb2tlRGFzaEdhcCcsICdzdHJva2VEYXNoV2lkdGgnLCAnc3Ryb2tlTGluZWNhcCcsICdzdHJva2VUaGlja25lc3MnLCAndGl0bGVBbGlnbm1lbnQnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLWRpdmlkZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2Rhc2hlZCcsICdvcmllbnRhdGlvbicsICdzdHJva2VCYXNpcycsICdzdHJva2VDb2xvcicsICdzdHJva2VEYXNoR2FwJywgJ3N0cm9rZURhc2hXaWR0aCcsICdzdHJva2VMaW5lY2FwJywgJ3N0cm9rZVRoaWNrbmVzcycsICd0aXRsZUFsaWdubWVudCddLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIEJxRGl2aWRlciB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxRGl2aWRlckVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxRGl2aWRlciBleHRlbmRzIENvbXBvbmVudHMuQnFEaXZpZGVyIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVCcURyYXdlcixcbiAgaW5wdXRzOiBbJ2Nsb3NlT25DbGlja091dHNpZGUnLCAnY2xvc2VPbkVzYycsICdlbmFibGVCYWNrZHJvcCcsICdvcGVuJywgJ3BsYWNlbWVudCcsICdwb3NpdGlvbiddLFxuICBtZXRob2RzOiBbJ2hpZGUnLCAnc2hvdyddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtZHJhd2VyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydjbG9zZU9uQ2xpY2tPdXRzaWRlJywgJ2Nsb3NlT25Fc2MnLCAnZW5hYmxlQmFja2Ryb3AnLCAnb3BlbicsICdwbGFjZW1lbnQnLCAncG9zaXRpb24nXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBCcURyYXdlciB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxRHJhd2VyRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYnFDbG9zZScsICdicU9wZW4nLCAnYnFBZnRlck9wZW4nLCAnYnFBZnRlckNsb3NlJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxRHJhd2VyIGV4dGVuZHMgQ29tcG9uZW50cy5CcURyYXdlciB7XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBkcmF3ZXIgaXMgY2xvc2VkXG4gICAqL1xuICBicUNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8YW55Pj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBkcmF3ZXIgaXMgb3BlbmVkXG4gICAqL1xuICBicU9wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxhbnk+PjtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgdG8gYmUgY2FsbGVkIGFmdGVyIHRoZSBkcmF3ZXIgaGFzIGJlZW4gb3BlbmVkXG4gICAqL1xuICBicUFmdGVyT3BlbjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PGFueT4+O1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGRyYXdlciBoYXMgYmVlbiBjbG9zZWRcbiAgICovXG4gIGJxQWZ0ZXJDbG9zZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PGFueT4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lQnFEcm9wZG93bixcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ2Rpc3RhbmNlJywgJ2tlZXBPcGVuT25TZWxlY3QnLCAnb3BlbicsICdwYW5lbEhlaWdodCcsICdwbGFjZW1lbnQnLCAnc2FtZVdpZHRoJywgJ3NraWRkaW5nJywgJ3N0cmF0ZWd5J11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1kcm9wZG93bicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnZGlzdGFuY2UnLCAna2VlcE9wZW5PblNlbGVjdCcsICdvcGVuJywgJ3BhbmVsSGVpZ2h0JywgJ3BsYWNlbWVudCcsICdzYW1lV2lkdGgnLCAnc2tpZGRpbmcnLCAnc3RyYXRlZ3knXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBCcURyb3Bkb3duIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFEcm9wZG93bkVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2JxT3BlbiddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcURyb3Bkb3duIGV4dGVuZHMgQ29tcG9uZW50cy5CcURyb3Bkb3duIHtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGRyb3Bkb3duIHBhbmVsIGlzIG9wZW5lZCBvciBjbG9zZWQuXG4gICAqL1xuICBicU9wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx7IG9wZW46IGJvb2xlYW4gfT4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lQnFFbXB0eVN0YXRlLFxuICBpbnB1dHM6IFsnc2l6ZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtZW1wdHktc3RhdGUnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ3NpemUnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBCcUVtcHR5U3RhdGUge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcUVtcHR5U3RhdGVFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcUVtcHR5U3RhdGUgZXh0ZW5kcyBDb21wb25lbnRzLkJxRW1wdHlTdGF0ZSB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lQnFHcmlkLFxuICBpbnB1dHM6IFsnZml4ZWQnLCAnbm9QYWRkaW5nJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1ncmlkJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydmaXhlZCcsICdub1BhZGRpbmcnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBCcUdyaWQge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcUdyaWRFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcUdyaWQgZXh0ZW5kcyBDb21wb25lbnRzLkJxR3JpZCB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lQnFJY29uLFxuICBpbnB1dHM6IFsnY29sb3InLCAnbGFiZWwnLCAnbmFtZScsICdzaXplJywgJ3NyYycsICd3ZWlnaHQnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLWljb24nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ2xhYmVsJywgJ25hbWUnLCAnc2l6ZScsICdzcmMnLCAnd2VpZ2h0J10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQnFJY29uIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFJY29uRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnc3ZnTG9hZGVkJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxSWNvbiBleHRlbmRzIENvbXBvbmVudHMuQnFJY29uIHtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIFNWRyBoYXMgbG9hZGVkXG4gICAqL1xuICBzdmdMb2FkZWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxhbnk+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IGRlZmluZUJxSW5wdXQsXG4gIGlucHV0czogWydhdXRvY2FwaXRhbGl6ZScsICdhdXRvY29tcGxldGUnLCAnYXV0b2NvcnJlY3QnLCAnYXV0b2ZvY3VzJywgJ2NsZWFyQnV0dG9uTGFiZWwnLCAnZGVib3VuY2VUaW1lJywgJ2Rpc2FibGVDbGVhcicsICdkaXNhYmxlZCcsICdmb3JtJywgJ2Zvcm1WYWxpZGF0aW9uTWVzc2FnZScsICdpbnB1dG1vZGUnLCAnbWF4JywgJ21heGxlbmd0aCcsICdtaW4nLCAnbWlubGVuZ3RoJywgJ25hbWUnLCAncGF0dGVybicsICdwbGFjZWhvbGRlcicsICdyZWFkb25seScsICdyZXF1aXJlZCcsICdzdGVwJywgJ3R5cGUnLCAndmFsaWRhdGlvblN0YXR1cycsICd2YWx1ZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtaW5wdXQnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2F1dG9jYXBpdGFsaXplJywgJ2F1dG9jb21wbGV0ZScsICdhdXRvY29ycmVjdCcsICdhdXRvZm9jdXMnLCAnY2xlYXJCdXR0b25MYWJlbCcsICdkZWJvdW5jZVRpbWUnLCAnZGlzYWJsZUNsZWFyJywgJ2Rpc2FibGVkJywgJ2Zvcm0nLCAnZm9ybVZhbGlkYXRpb25NZXNzYWdlJywgJ2lucHV0bW9kZScsICdtYXgnLCAnbWF4bGVuZ3RoJywgJ21pbicsICdtaW5sZW5ndGgnLCAnbmFtZScsICdwYXR0ZXJuJywgJ3BsYWNlaG9sZGVyJywgJ3JlYWRvbmx5JywgJ3JlcXVpcmVkJywgJ3N0ZXAnLCAndHlwZScsICd2YWxpZGF0aW9uU3RhdHVzJywgJ3ZhbHVlJ10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQnFJbnB1dCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxSW5wdXRFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydicUJsdXInLCAnYnFDaGFuZ2UnLCAnYnFDbGVhcicsICdicUZvY3VzJywgJ2JxSW5wdXQnXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFJbnB1dCBleHRlbmRzIENvbXBvbmVudHMuQnFJbnB1dCB7XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIGVtaXR0ZWQgd2hlbiB0aGUgaW5wdXQgbG9zZXMgZm9jdXNcbiAgICovXG4gIGJxQmx1cjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcUlucHV0RWxlbWVudD4+O1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciBlbWl0dGVkIHdoZW4gdGhlIGlucHV0IHZhbHVlIGhhcyBjaGFuZ2VkIGFuZCB0aGUgaW5wdXQgbG9zZXMgZm9jdXMuXG5UaGlzIGhhbmRsZXIgaXMgY2FsbGVkIHdoZW5ldmVyIHRoZSB1c2VyIGZpbmlzaGVzIHR5cGluZyBvciBwYXN0aW5nIHRleHQgaW50byB0aGUgaW5wdXQgZmllbGQgYW5kIHRoZW4gY2xpY2tzIG91dHNpZGUgb2YgdGhlIGlucHV0IGZpZWxkLlxuICAgKi9cbiAgYnFDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx7IHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBzdHJpbmdbXTsgZWw6IEhUTUxCcUlucHV0RWxlbWVudCB9Pj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIGVtaXR0ZWQgd2hlbiB0aGUgaW5wdXQgdmFsdWUgaGFzIGJlZW4gY2xlYXJlZFxuICAgKi9cbiAgYnFDbGVhcjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcUlucHV0RWxlbWVudD4+O1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciBlbWl0dGVkIHdoZW4gdGhlIGlucHV0IGhhcyByZWNlaXZlZCBmb2N1c1xuICAgKi9cbiAgYnFGb2N1czogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcUlucHV0RWxlbWVudD4+O1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciBlbWl0dGVkIHdoZW4gdGhlIGlucHV0IHZhbHVlIGNoYW5nZXMuXG5UaGlzIGhhbmRsZXIgaXMgY2FsbGVkIHdoZW5ldmVyIHRoZSB1c2VyIHR5cGVzIG9yIHBhc3RlcyB0ZXh0IGludG8gdGhlIGlucHV0IGZpZWxkLlxuICAgKi9cbiAgYnFJbnB1dDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHsgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IHN0cmluZ1tdOyBlbDogSFRNTEJxSW5wdXRFbGVtZW50IH0+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IGRlZmluZUJxTG9nbyxcbiAgaW5wdXRzOiBbJ3NpemUnLCAndHlwZScsICd2YXJpYW50J11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1sb2dvJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydzaXplJywgJ3R5cGUnLCAndmFyaWFudCddLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIEJxTG9nbyB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxTG9nb0VsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxTG9nbyBleHRlbmRzIENvbXBvbmVudHMuQnFMb2dvIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVCcU5vdGlmaWNhdGlvbixcbiAgaW5wdXRzOiBbJ2F1dG9EaXNtaXNzJywgJ2JvcmRlcicsICdkaXNhYmxlQ2xvc2UnLCAnaGlkZUljb24nLCAnb3BlbicsICd0aW1lJywgJ3R5cGUnXSxcbiAgbWV0aG9kczogWydoaWRlJywgJ3Nob3cnLCAndG9hc3QnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLW5vdGlmaWNhdGlvbicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYXV0b0Rpc21pc3MnLCAnYm9yZGVyJywgJ2Rpc2FibGVDbG9zZScsICdoaWRlSWNvbicsICdvcGVuJywgJ3RpbWUnLCAndHlwZSddLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIEJxTm90aWZpY2F0aW9uIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFOb3RpZmljYXRpb25FbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydicUhpZGUnLCAnYnFTaG93JywgJ2JxQWZ0ZXJPcGVuJywgJ2JxQWZ0ZXJDbG9zZSddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcU5vdGlmaWNhdGlvbiBleHRlbmRzIENvbXBvbmVudHMuQnFOb3RpZmljYXRpb24ge1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgbm90aWZpY2F0aW9uIGlzIGhpZGRlblxuICAgKi9cbiAgYnFIaWRlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8YW55Pj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBub3RpZmljYXRpb24gaXMgc2hvd25cbiAgICovXG4gIGJxU2hvdzogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PGFueT4+O1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIG5vdGlmaWNhdGlvbiBoYXMgYmVlbiBvcGVuZWRcbiAgICovXG4gIGJxQWZ0ZXJPcGVuOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8YW55Pj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgbm90aWZpY2F0aW9uIGhhcyBiZWVuIGNsb3NlZFxuICAgKi9cbiAgYnFBZnRlckNsb3NlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8YW55Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVCcU9wdGlvbixcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ2hpZGRlbicsICdzZWxlY3RlZCcsICd2YWx1ZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtb3B0aW9uJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydkaXNhYmxlZCcsICdoaWRkZW4nLCAnc2VsZWN0ZWQnLCAndmFsdWUnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBCcU9wdGlvbiB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxT3B0aW9uRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYnFCbHVyJywgJ2JxRm9jdXMnLCAnYnFDbGljaycsICdicUVudGVyJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxT3B0aW9uIGV4dGVuZHMgQ29tcG9uZW50cy5CcU9wdGlvbiB7XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIGl0ZW0gbG9zZXMgZm9jdXNcbiAgICovXG4gIGJxQmx1cjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcU9wdGlvbkVsZW1lbnQ+PjtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gaXRlbSBpcyBmb2N1c2VkXG4gICAqL1xuICBicUZvY3VzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxT3B0aW9uRWxlbWVudD4+O1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiBpdGVtIGlzIGNsaWNrZWRcbiAgICovXG4gIGJxQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFPcHRpb25FbGVtZW50Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCBvbiBlbnRlciBrZXkgcHJlc3NcbiAgICovXG4gIGJxRW50ZXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFPcHRpb25FbGVtZW50Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVCcU9wdGlvbkdyb3VwXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtb3B0aW9uLWdyb3VwJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogW10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQnFPcHRpb25Hcm91cCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxT3B0aW9uR3JvdXBFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcU9wdGlvbkdyb3VwIGV4dGVuZHMgQ29tcG9uZW50cy5CcU9wdGlvbkdyb3VwIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVCcU9wdGlvbkxpc3QsXG4gIGlucHV0czogWydhcmlhTGFiZWwnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLW9wdGlvbi1saXN0JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydhcmlhTGFiZWwnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBCcU9wdGlvbkxpc3Qge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcU9wdGlvbkxpc3RFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydicVNlbGVjdCddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcU9wdGlvbkxpc3QgZXh0ZW5kcyBDb21wb25lbnRzLkJxT3B0aW9uTGlzdCB7XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIGBicS1vcHRpb25gIGlzIHNlbGVjdGVkIChvbiBjbGljay9lbnRlciBwcmVzcykuXG4gICAqL1xuICBicVNlbGVjdDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHsgdmFsdWU6IHN0cmluZzsgaXRlbTogSFRNTEJxT3B0aW9uRWxlbWVudCB9Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVCcVBhZ2VUaXRsZVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLXBhZ2UtdGl0bGUnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBCcVBhZ2VUaXRsZSB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxUGFnZVRpdGxlRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFQYWdlVGl0bGUgZXh0ZW5kcyBDb21wb25lbnRzLkJxUGFnZVRpdGxlIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVCcVBhbmVsLFxuICBpbnB1dHM6IFsnZGlzdGFuY2UnLCAnb3BlbicsICdwbGFjZW1lbnQnLCAnc2FtZVdpZHRoJywgJ3NraWRkaW5nJywgJ3N0cmF0ZWd5J11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1wYW5lbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnZGlzdGFuY2UnLCAnb3BlbicsICdwbGFjZW1lbnQnLCAnc2FtZVdpZHRoJywgJ3NraWRkaW5nJywgJ3N0cmF0ZWd5J10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQnFQYW5lbCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxUGFuZWxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcVBhbmVsIGV4dGVuZHMgQ29tcG9uZW50cy5CcVBhbmVsIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVCcVByb2dyZXNzLFxuICBpbnB1dHM6IFsnYm9yZGVyU2hhcGUnLCAnZW5hYmxlVG9vbHRpcCcsICdpbmRldGVybWluYXRlJywgJ2xhYmVsJywgJ3RoaWNrbmVzcycsICd0eXBlJywgJ3ZhbHVlJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1wcm9ncmVzcycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYm9yZGVyU2hhcGUnLCAnZW5hYmxlVG9vbHRpcCcsICdpbmRldGVybWluYXRlJywgJ2xhYmVsJywgJ3RoaWNrbmVzcycsICd0eXBlJywgJ3ZhbHVlJ10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQnFQcm9ncmVzcyB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxUHJvZ3Jlc3NFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcVByb2dyZXNzIGV4dGVuZHMgQ29tcG9uZW50cy5CcVByb2dyZXNzIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVCcVJhZGlvLFxuICBpbnB1dHM6IFsnYmFja2dyb3VuZE9uSG92ZXInLCAnY2hlY2tlZCcsICdkaXNhYmxlZCcsICdmb3JtSWQnLCAnbmFtZScsICdyZXF1aXJlZCcsICd2YWx1ZSddLFxuICBtZXRob2RzOiBbJ3ZDbGljaycsICd2Rm9jdXMnLCAndkJsdXInLCAnZ2V0TmF0aXZlSW5wdXQnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLXJhZGlvJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydiYWNrZ3JvdW5kT25Ib3ZlcicsICdjaGVja2VkJywgJ2Rpc2FibGVkJywgJ2Zvcm1JZCcsICduYW1lJywgJ3JlcXVpcmVkJywgJ3ZhbHVlJ10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQnFSYWRpbyB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxUmFkaW9FbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydicUNsaWNrJywgJ2JxRm9jdXMnLCAnYnFCbHVyJywgJ2JxS2V5RG93biddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcVJhZGlvIGV4dGVuZHMgQ29tcG9uZW50cy5CcVJhZGlvIHtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHJhZGlvIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIGJxQ2xpY2s6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFSYWRpb0VsZW1lbnQ+PjtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHJhZGlvIGdldHMgZm9jdXNcbiAgICovXG4gIGJxRm9jdXM6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFSYWRpb0VsZW1lbnQ+PjtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHJhZGlvIGxvc2VzIGZvY3VzXG4gICAqL1xuICBicUJsdXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFSYWRpb0VsZW1lbnQ+PjtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHJhZGlvIGtleSBpcyBwcmVzc2VkXG4gICAqL1xuICBicUtleURvd246IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxLZXlib2FyZEV2ZW50Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVCcVJhZGlvR3JvdXAsXG4gIGlucHV0czogWydiYWNrZ3JvdW5kT25Ib3ZlcicsICdkZWJvdW5jZVRpbWUnLCAnZGlzYWJsZWQnLCAnZmllbGRzZXQnLCAnbmFtZScsICdvcmllbnRhdGlvbicsICdyZXF1aXJlZCcsICdyZXF1aXJlZFZhbGlkYXRpb25NZXNzYWdlJywgJ3ZhbHVlJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1yYWRpby1ncm91cCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYmFja2dyb3VuZE9uSG92ZXInLCAnZGVib3VuY2VUaW1lJywgJ2Rpc2FibGVkJywgJ2ZpZWxkc2V0JywgJ25hbWUnLCAnb3JpZW50YXRpb24nLCAncmVxdWlyZWQnLCAncmVxdWlyZWRWYWxpZGF0aW9uTWVzc2FnZScsICd2YWx1ZSddLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIEJxUmFkaW9Hcm91cCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxUmFkaW9Hcm91cEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2JxQ2hhbmdlJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxUmFkaW9Hcm91cCBleHRlbmRzIENvbXBvbmVudHMuQnFSYWRpb0dyb3VwIHtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHJhZGlvIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIGJxQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8eyB2YWx1ZTogc3RyaW5nOyB0YXJnZXQ6IEhUTUxCcVJhZGlvRWxlbWVudCB9Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVCcVJvd1xufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLXJvdycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFtdLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIEJxUm93IHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFSb3dFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcVJvdyBleHRlbmRzIENvbXBvbmVudHMuQnFSb3cge31cblxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IGRlZmluZUJxU2VsZWN0LFxuICBpbnB1dHM6IFsnYXV0b2ZvY3VzJywgJ2NsZWFyQnV0dG9uTGFiZWwnLCAnZGVib3VuY2VUaW1lJywgJ2Rpc2FibGVDbGVhcicsICdkaXNhYmxlZCcsICdkaXN0YW5jZScsICdmb3JtJywgJ2tlZXBPcGVuT25TZWxlY3QnLCAnbWF4VGFnc1Zpc2libGUnLCAnbXVsdGlwbGUnLCAnbmFtZScsICdvcGVuJywgJ3BhbmVsSGVpZ2h0JywgJ3BsYWNlaG9sZGVyJywgJ3BsYWNlbWVudCcsICdyZWFkb25seScsICdyZXF1aXJlZCcsICdzYW1lV2lkdGgnLCAnc2tpZGRpbmcnLCAnc3RyYXRlZ3knLCAndmFsaWRhdGlvblN0YXR1cycsICd2YWx1ZSddLFxuICBtZXRob2RzOiBbJ2NsZWFyJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1zZWxlY3QnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2F1dG9mb2N1cycsICdjbGVhckJ1dHRvbkxhYmVsJywgJ2RlYm91bmNlVGltZScsICdkaXNhYmxlQ2xlYXInLCAnZGlzYWJsZWQnLCAnZGlzdGFuY2UnLCAnZm9ybScsICdrZWVwT3Blbk9uU2VsZWN0JywgJ21heFRhZ3NWaXNpYmxlJywgJ211bHRpcGxlJywgJ25hbWUnLCAnb3BlbicsICdwYW5lbEhlaWdodCcsICdwbGFjZWhvbGRlcicsICdwbGFjZW1lbnQnLCAncmVhZG9ubHknLCAncmVxdWlyZWQnLCAnc2FtZVdpZHRoJywgJ3NraWRkaW5nJywgJ3N0cmF0ZWd5JywgJ3ZhbGlkYXRpb25TdGF0dXMnLCAndmFsdWUnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBCcVNlbGVjdCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxU2VsZWN0RWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYnFCbHVyJywgJ2JxQ2xlYXInLCAnYnFGb2N1cycsICdicVNlbGVjdCddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcVNlbGVjdCBleHRlbmRzIENvbXBvbmVudHMuQnFTZWxlY3Qge1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciBlbWl0dGVkIHdoZW4gdGhlIFNlbGVjdCBpbnB1dCBsb3NlcyBmb2N1c1xuICAgKi9cbiAgYnFCbHVyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxU2VsZWN0RWxlbWVudD4+O1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciBlbWl0dGVkIHdoZW4gdGhlIHNlbGVjdGVkIHZhbHVlIGhhcyBiZWVuIGNsZWFyZWRcbiAgICovXG4gIGJxQ2xlYXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFTZWxlY3RFbGVtZW50Pj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIGVtaXR0ZWQgd2hlbiB0aGUgU2VsZWN0IGlucHV0IGhhcyByZWNlaXZlZCBmb2N1c1xuICAgKi9cbiAgYnFGb2N1czogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcVNlbGVjdEVsZW1lbnQ+PjtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgZW1pdHRlZCB3aGVuIHRoZSBzZWxlY3RlZCB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgKi9cbiAgYnFTZWxlY3Q6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx7IHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBzdHJpbmdbXTsgaXRlbTogSFRNTEJxT3B0aW9uRWxlbWVudCB9Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVCcVNpZGVNZW51LFxuICBpbnB1dHM6IFsnYXBwZWFyYW5jZScsICdjb2xsYXBzZScsICdzaXplJ10sXG4gIG1ldGhvZHM6IFsndG9nZ2xlQ29sbGFwc2UnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLXNpZGUtbWVudScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYXBwZWFyYW5jZScsICdjb2xsYXBzZScsICdzaXplJ10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQnFTaWRlTWVudSB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxU2lkZU1lbnVFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydicUNvbGxhcHNlJywgJ2JxU2VsZWN0J10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxU2lkZU1lbnUgZXh0ZW5kcyBDb21wb25lbnRzLkJxU2lkZU1lbnUge1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgU2lkZSBtZW51IGNoYW5nZXMgaXRzIHdpZHRoIGZyb20gZXhwYW5kZWQgdG8gY29sbGFwc2UgYW5kIHZpY2UgdmVyc2FcbiAgICovXG4gIGJxQ29sbGFwc2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx7IGNvbGxhcHNlOiBib29sZWFuIH0+PjtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGFjdGl2ZS9zZWxlY3RlZCBtZW51IGl0ZW0gY2hhbmdlc1xuICAgKi9cbiAgYnFTZWxlY3Q6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFTaWRlTWVudUl0ZW1FbGVtZW50Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVCcVNpZGVNZW51SXRlbSxcbiAgaW5wdXRzOiBbJ2FjdGl2ZScsICdjb2xsYXBzZScsICdkaXNhYmxlZCddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtc2lkZS1tZW51LWl0ZW0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2FjdGl2ZScsICdjb2xsYXBzZScsICdkaXNhYmxlZCddLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIEJxU2lkZU1lbnVJdGVtIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFTaWRlTWVudUl0ZW1FbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydicUJsdXInLCAnYnFGb2N1cycsICdicUNsaWNrJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxU2lkZU1lbnVJdGVtIGV4dGVuZHMgQ29tcG9uZW50cy5CcVNpZGVNZW51SXRlbSB7XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBidXR0b24gbG9zZXMgZm9jdXNcbiAgICovXG4gIGJxQmx1cjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcVNpZGVNZW51SXRlbUVsZW1lbnQ+PjtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAqL1xuICBicUZvY3VzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxU2lkZU1lbnVJdGVtRWxlbWVudD4+O1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiBidXR0b24gZ2V0cyBmb2N1c1xuICAgKi9cbiAgYnFDbGljazogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcVNpZGVNZW51SXRlbUVsZW1lbnQ+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IGRlZmluZUJxU2xpZGVyLFxuICBpbnB1dHM6IFsnZGVib3VuY2VUaW1lJywgJ2Rpc2FibGVkJywgJ2VuYWJsZVRvb2x0aXAnLCAnZW5hYmxlVmFsdWVJbmRpY2F0b3InLCAnZ2FwJywgJ21heCcsICdtaW4nLCAnbmFtZScsICdzdGVwJywgJ3Rvb2x0aXBBbHdheXNWaXNpYmxlJywgJ3R5cGUnLCAndmFsdWUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLXNsaWRlcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnZGVib3VuY2VUaW1lJywgJ2Rpc2FibGVkJywgJ2VuYWJsZVRvb2x0aXAnLCAnZW5hYmxlVmFsdWVJbmRpY2F0b3InLCAnZ2FwJywgJ21heCcsICdtaW4nLCAnbmFtZScsICdzdGVwJywgJ3Rvb2x0aXBBbHdheXNWaXNpYmxlJywgJ3R5cGUnLCAndmFsdWUnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBCcVNsaWRlciB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxU2xpZGVyRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYnFDaGFuZ2UnLCAnYnFCbHVyJywgJ2JxRm9jdXMnXSk7XG4gIH1cbn1cblxuXG5pbXBvcnQgdHlwZSB7IFRTbGlkZXJWYWx1ZSBhcyBJQnFTbGlkZXJUU2xpZGVyVmFsdWUgfSBmcm9tICdAYmVlcS9jb3JlL2Rpc3QvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcVNsaWRlciBleHRlbmRzIENvbXBvbmVudHMuQnFTbGlkZXIge1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiBjaGFuZ2UgdGhlIHZhbHVlIG9uIHJhbmdlIGlucHV0c1xuICAgKi9cbiAgYnFDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx7IHZhbHVlOiBFeGNsdWRlPElCcVNsaWRlclRTbGlkZXJWYWx1ZSwgc3RyaW5nPjsgZWw6IEhUTUxCcVNsaWRlckVsZW1lbnQgfT4+O1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgc2xpZGVyIGxvc2VzIGZvY3VzXG4gICAqL1xuICBicUJsdXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFTbGlkZXJFbGVtZW50Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBzbGlkZXIgZ2V0cyBmb2N1c2VkXG4gICAqL1xuICBicUZvY3VzOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxU2xpZGVyRWxlbWVudD4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lQnFTcGlubmVyLFxuICBpbnB1dHM6IFsnYW5pbWF0aW9uJywgJ3NpemUnLCAndGV4dFBvc2l0aW9uJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1zcGlubmVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydhbmltYXRpb24nLCAnc2l6ZScsICd0ZXh0UG9zaXRpb24nXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBCcVNwaW5uZXIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcVNwaW5uZXJFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcVNwaW5uZXIgZXh0ZW5kcyBDb21wb25lbnRzLkJxU3Bpbm5lciB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lQnFTdGF0dXMsXG4gIGlucHV0czogWyd0eXBlJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1zdGF0dXMnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ3R5cGUnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBCcVN0YXR1cyB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxU3RhdHVzRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFTdGF0dXMgZXh0ZW5kcyBDb21wb25lbnRzLkJxU3RhdHVzIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVCcVN0ZXBJdGVtLFxuICBpbnB1dHM6IFsnc2l6ZScsICdzdGF0dXMnLCAndHlwZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtc3RlcC1pdGVtJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydzaXplJywgJ3N0YXR1cycsICd0eXBlJ10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQnFTdGVwSXRlbSB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxU3RlcEl0ZW1FbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydicUNsaWNrJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxU3RlcEl0ZW0gZXh0ZW5kcyBDb21wb25lbnRzLkJxU3RlcEl0ZW0ge1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciBlbWl0dGVkIHdoZW4gdGhlIHN0ZXAgaXRlbSBpcyBjbGlja2VkXG4gICAqL1xuICBicUNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8eyB0YXJnZXQ6IEhUTUxCcVN0ZXBJdGVtRWxlbWVudDsgdmFsdWU6IHN0cmluZyB9Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVCcVN0ZXBzLFxuICBpbnB1dHM6IFsnZGl2aWRlckNvbG9yJywgJ3NpemUnLCAndHlwZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtc3RlcHMnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2RpdmlkZXJDb2xvcicsICdzaXplJywgJ3R5cGUnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBCcVN0ZXBzIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFTdGVwc0VsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxU3RlcHMgZXh0ZW5kcyBDb21wb25lbnRzLkJxU3RlcHMge31cblxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IGRlZmluZUJxU3dpdGNoLFxuICBpbnB1dHM6IFsnYmFja2dyb3VuZE9uSG92ZXInLCAnY2hlY2tlZCcsICdkaXNhYmxlZCcsICdmb3JtVmFsaWRhdGlvbk1lc3NhZ2UnLCAnZnVsbFdpZHRoJywgJ2lubmVyTGFiZWwnLCAnanVzdGlmeUNvbnRlbnQnLCAnbmFtZScsICdyZXF1aXJlZCcsICdyZXZlcnNlT3JkZXInLCAndmFsdWUnXSxcbiAgbWV0aG9kczogWyd2Q2xpY2snLCAndkZvY3VzJywgJ3ZCbHVyJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS1zd2l0Y2gnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2JhY2tncm91bmRPbkhvdmVyJywgJ2NoZWNrZWQnLCAnZGlzYWJsZWQnLCAnZm9ybVZhbGlkYXRpb25NZXNzYWdlJywgJ2Z1bGxXaWR0aCcsICdpbm5lckxhYmVsJywgJ2p1c3RpZnlDb250ZW50JywgJ25hbWUnLCAncmVxdWlyZWQnLCAncmV2ZXJzZU9yZGVyJywgJ3ZhbHVlJ10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQnFTd2l0Y2gge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxCcVN3aXRjaEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2JxQ2hhbmdlJywgJ2JxRm9jdXMnLCAnYnFCbHVyJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxU3dpdGNoIGV4dGVuZHMgQ29tcG9uZW50cy5CcVN3aXRjaCB7XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBzd2l0Y2ggc3RhdGUgY2hhbmdlc1xuICAgKi9cbiAgYnFDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDx7IGNoZWNrZWQ6IGJvb2xlYW4gfT4+O1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgc3dpdGNoIGdldHMgZm9jdXNcbiAgICovXG4gIGJxRm9jdXM6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFTd2l0Y2hFbGVtZW50Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBzd2l0Y2ggbG9zZXMgZm9jdXNcbiAgICovXG4gIGJxQmx1cjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcVN3aXRjaEVsZW1lbnQ+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IGRlZmluZUJxVGFiLFxuICBpbnB1dHM6IFsnYWN0aXZlJywgJ2NvbnRyb2xzJywgJ2Rpc2FibGVkJywgJ29yaWVudGF0aW9uJywgJ3BsYWNlbWVudCcsICdzaXplJywgJ3RhYklkJ10sXG4gIG1ldGhvZHM6IFsndkNsaWNrJywgJ3ZGb2N1cycsICd2Qmx1ciddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtdGFiJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydhY3RpdmUnLCAnY29udHJvbHMnLCAnZGlzYWJsZWQnLCAnb3JpZW50YXRpb24nLCAncGxhY2VtZW50JywgJ3NpemUnLCAndGFiSWQnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBCcVRhYiB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxVGFiRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYnFDbGljaycsICdicUZvY3VzJywgJ2JxQmx1cicsICdicUtleURvd24nXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFUYWIgZXh0ZW5kcyBDb21wb25lbnRzLkJxVGFiIHtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHRhYiBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBicUNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxVGFiRWxlbWVudD4+O1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgdGFiIGdldHMgZm9jdXNcbiAgICovXG4gIGJxRm9jdXM6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFUYWJFbGVtZW50Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSB0YWIgbG9zZXMgZm9jdXNcbiAgICovXG4gIGJxQmx1cjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcVRhYkVsZW1lbnQ+PjtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHRhYiBrZXkgaXMgcHJlc3NlZFxuICAgKi9cbiAgYnFLZXlEb3duOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8S2V5Ym9hcmRFdmVudD4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lQnFUYWJHcm91cCxcbiAgaW5wdXRzOiBbJ2RlYm91bmNlVGltZScsICdkaXNhYmxlRGl2aWRlcicsICdvcmllbnRhdGlvbicsICdwbGFjZW1lbnQnLCAnc2l6ZScsICd2YWx1ZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtdGFiLWdyb3VwJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydkZWJvdW5jZVRpbWUnLCAnZGlzYWJsZURpdmlkZXInLCAnb3JpZW50YXRpb24nLCAncGxhY2VtZW50JywgJ3NpemUnLCAndmFsdWUnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBCcVRhYkdyb3VwIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFUYWJHcm91cEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2JxQ2hhbmdlJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEJxVGFiR3JvdXAgZXh0ZW5kcyBDb21wb25lbnRzLkJxVGFiR3JvdXAge1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgdGFiIHZhbHVlIGNoYW5nZXNcbiAgICovXG4gIGJxQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8eyB0YXJnZXQ6IEhUTUxCcVRhYkVsZW1lbnQ7IHZhbHVlOiBzdHJpbmcgfT4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lQnFUYWcsXG4gIGlucHV0czogWydib3JkZXInLCAnY2xpY2thYmxlJywgJ2NvbG9yJywgJ2Rpc2FibGVkJywgJ2hpZGRlbicsICdyZW1vdmFibGUnLCAnc2VsZWN0ZWQnLCAnc2l6ZScsICd2YXJpYW50J10sXG4gIG1ldGhvZHM6IFsnaGlkZScsICdzaG93J11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS10YWcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2JvcmRlcicsICdjbGlja2FibGUnLCAnY29sb3InLCAnZGlzYWJsZWQnLCAnaGlkZGVuJywgJ3JlbW92YWJsZScsICdzZWxlY3RlZCcsICdzaXplJywgJ3ZhcmlhbnQnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBCcVRhZyB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEJxVGFnRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYnFDbG9zZScsICdicU9wZW4nLCAnYnFCbHVyJywgJ2JxQ2xpY2snLCAnYnFGb2N1cyddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcVRhZyBleHRlbmRzIENvbXBvbmVudHMuQnFUYWcge1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgdGFnIGlzIGNsb3NlL2hpZGRlblxuICAgKi9cbiAgYnFDbG9zZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PGFueT4+O1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgdGFnIGlzIG5vdCBvcGVuL3Nob3duXG4gICAqL1xuICBicU9wZW46IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxhbnk+PjtcbiAgLyoqXG4gICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGFnIGxvc2VzIGZvY3VzXG4gICAqL1xuICBicUJsdXI6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFUYWdFbGVtZW50Pj47XG4gIC8qKlxuICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRhZyBpcyBjbGlja2VkXG4gICAqL1xuICBicUNsaWNrOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxVGFnRWxlbWVudD4+O1xuICAvKipcbiAgICogSGFuZGxlciB0byBiZSBjYWxsZWQgd2hlbiB0YWcgaXMgZm9jdXNlZFxuICAgKi9cbiAgYnFGb2N1czogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcVRhZ0VsZW1lbnQ+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IGRlZmluZUJxVGV4dCxcbiAgaW5wdXRzOiBbJ2JhY2tncm91bmRDb2xvcicsICdzaXplJywgJ3RleHRDb2xvciddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtdGV4dCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYmFja2dyb3VuZENvbG9yJywgJ3NpemUnLCAndGV4dENvbG9yJ10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQnFUZXh0IHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFUZXh0RWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFUZXh0IGV4dGVuZHMgQ29tcG9uZW50cy5CcVRleHQge31cblxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IGRlZmluZUJxVGV4dGFyZWEsXG4gIGlucHV0czogWydhdXRvR3JvdycsICdhdXRvY2FwaXRhbGl6ZScsICdhdXRvY29tcGxldGUnLCAnYXV0b2NvcnJlY3QnLCAnYXV0b2ZvY3VzJywgJ2RlYm91bmNlVGltZScsICdkaXNhYmxlUmVzaXplJywgJ2Rpc2FibGVkJywgJ2Zvcm0nLCAnZm9ybVZhbGlkYXRpb25NZXNzYWdlJywgJ21heGxlbmd0aCcsICduYW1lJywgJ3BsYWNlaG9sZGVyJywgJ3JlYWRvbmx5JywgJ3JlcXVpcmVkJywgJ3Jvd3MnLCAnc3BlbGxjaGVjaycsICd2YWxpZGF0aW9uU3RhdHVzJywgJ3ZhbHVlJywgJ3dyYXAnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JxLXRleHRhcmVhJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydhdXRvR3JvdycsICdhdXRvY2FwaXRhbGl6ZScsICdhdXRvY29tcGxldGUnLCAnYXV0b2NvcnJlY3QnLCAnYXV0b2ZvY3VzJywgJ2RlYm91bmNlVGltZScsICdkaXNhYmxlUmVzaXplJywgJ2Rpc2FibGVkJywgJ2Zvcm0nLCAnZm9ybVZhbGlkYXRpb25NZXNzYWdlJywgJ21heGxlbmd0aCcsICduYW1lJywgJ3BsYWNlaG9sZGVyJywgJ3JlYWRvbmx5JywgJ3JlcXVpcmVkJywgJ3Jvd3MnLCAnc3BlbGxjaGVjaycsICd2YWxpZGF0aW9uU3RhdHVzJywgJ3ZhbHVlJywgJ3dyYXAnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBCcVRleHRhcmVhIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFUZXh0YXJlYUVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2JxQmx1cicsICdicUNoYW5nZScsICdicUNsZWFyJywgJ2JxRm9jdXMnLCAnYnFJbnB1dCddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCcVRleHRhcmVhIGV4dGVuZHMgQ29tcG9uZW50cy5CcVRleHRhcmVhIHtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgZW1pdHRlZCB3aGVuIHRoZSB0ZXh0YXJlYSBsb3NlcyBmb2N1c1xuICAgKi9cbiAgYnFCbHVyOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxVGV4dGFyZWFFbGVtZW50Pj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIGVtaXR0ZWQgd2hlbiB0aGUgdGV4dGFyZWEgdmFsdWUgaGFzIGNoYW5nZWQgYW5kIHRoZSB0ZXh0YXJlYSBsb3NlcyBmb2N1cy5cblRoaXMgaGFuZGxlciBpcyBjYWxsZWQgd2hlbmV2ZXIgdGhlIHVzZXIgZmluaXNoZXMgdHlwaW5nIG9yIHBhc3RpbmcgdGV4dCBpbnRvIHRoZSB0ZXh0YXJlYSBmaWVsZCBhbmQgdGhlbiBjbGlja3Mgb3V0c2lkZSBvZiB0aGUgdGV4dGFyZWEgZmllbGQuXG4gICAqL1xuICBicUNoYW5nZTogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHsgdmFsdWU6IHN0cmluZzsgZWw6IEhUTUxCcVRleHRhcmVhRWxlbWVudCB9Pj47XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIGVtaXR0ZWQgd2hlbiB0aGUgdGV4dGFyZWEgdmFsdWUgaGFzIGJlZW4gY2xlYXJlZFxuICAgKi9cbiAgYnFDbGVhcjogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcVRleHRhcmVhRWxlbWVudD4+O1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciBlbWl0dGVkIHdoZW4gdGhlIHRleHRhcmVhIGhhcyByZWNlaXZlZCBmb2N1c1xuICAgKi9cbiAgYnFGb2N1czogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PEhUTUxCcVRleHRhcmVhRWxlbWVudD4+O1xuICAvKipcbiAgICogQ2FsbGJhY2sgaGFuZGxlciBlbWl0dGVkIHdoZW4gdGhlIHRleHRhcmVhIHZhbHVlIGNoYW5nZXMuXG5UaGlzIGhhbmRsZXIgaXMgY2FsbGVkIHdoZW5ldmVyIHRoZSB1c2VyIHR5cGVzIG9yIHBhc3RlcyB0ZXh0IGludG8gdGhlIHRleHRhcmVhIGZpZWxkLlxuICAgKi9cbiAgYnFJbnB1dDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PHsgdmFsdWU6IHN0cmluZzsgZWw6IEhUTUxCcVRleHRhcmVhRWxlbWVudCB9Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVCcVRvYXN0LFxuICBpbnB1dHM6IFsnYm9yZGVyJywgJ2hpZGVJY29uJywgJ29wZW4nLCAncGxhY2VtZW50JywgJ3RpbWUnLCAndHlwZSddLFxuICBtZXRob2RzOiBbJ3Nob3cnLCAnaGlkZScsICd0b2FzdCddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnEtdG9hc3QnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2JvcmRlcicsICdoaWRlSWNvbicsICdvcGVuJywgJ3BsYWNlbWVudCcsICd0aW1lJywgJ3R5cGUnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBCcVRvYXN0IHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFUb2FzdEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2JxSGlkZScsICdicVNob3cnXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFUb2FzdCBleHRlbmRzIENvbXBvbmVudHMuQnFUb2FzdCB7XG4gIC8qKlxuICAgKiBDYWxsYmFjayBoYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBub3RpZmljYXRpb24gaXMgaGlkZGVuXG4gICAqL1xuICBicUhpZGU6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxIVE1MQnFUb2FzdEVsZW1lbnQ+PjtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIG5vdGlmaWNhdGlvbiBpcyBzaG93blxuICAgKi9cbiAgYnFTaG93OiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ8SFRNTEJxVG9hc3RFbGVtZW50Pj47XG59XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVCcVRvb2x0aXAsXG4gIGlucHV0czogWydhbHdheXNWaXNpYmxlJywgJ2Rpc3BsYXlPbicsICdkaXN0YW5jZScsICdoaWRlQXJyb3cnLCAncGxhY2VtZW50JywgJ3NhbWVXaWR0aCcsICd2aXNpYmxlJ10sXG4gIG1ldGhvZHM6IFsnc2hvdycsICdoaWRlJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicS10b29sdGlwJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydhbHdheXNWaXNpYmxlJywgJ2Rpc3BsYXlPbicsICdkaXN0YW5jZScsICdoaWRlQXJyb3cnLCAncGxhY2VtZW50JywgJ3NhbWVXaWR0aCcsICd2aXNpYmxlJ10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQnFUb29sdGlwIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MQnFUb29sdGlwRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQnFUb29sdGlwIGV4dGVuZHMgQ29tcG9uZW50cy5CcVRvb2x0aXAge31cblxuXG4iXX0=