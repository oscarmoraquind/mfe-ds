import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone } from '@angular/core';
import type { Components } from '@beeq/core/dist/components';
import type { TSliderValue as IBqSliderTSliderValue } from '@beeq/core/dist/components';
import * as i0 from "@angular/core";
export declare class BqAccordion {
    protected z: NgZone;
    protected el: HTMLBqAccordionElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqAccordion, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqAccordion, "bq-accordion", never, { "appearance": { "alias": "appearance"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "expanded": { "alias": "expanded"; "required": false; }; "noAnimation": { "alias": "noAnimation"; "required": false; }; "rotate": { "alias": "rotate"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqAccordion extends Components.BqAccordion {
    /**
     * Handler to be called when the accordion loses focus
     */
    bqBlur: EventEmitter<CustomEvent<HTMLBqAccordionElement>>;
    /**
     * Handler to be called when the accordion gets focus
     */
    bqFocus: EventEmitter<CustomEvent<HTMLBqAccordionElement>>;
    /**
     * Handler to be called when the accordion is opened
     */
    bqOpen: EventEmitter<CustomEvent<HTMLBqAccordionElement>>;
    /**
     * Handler to be called after the accordion is opened
     */
    bqAfterOpen: EventEmitter<CustomEvent<HTMLBqAccordionElement>>;
    /**
     * Handler to be called when the accordion is closed
     */
    bqClose: EventEmitter<CustomEvent<HTMLBqAccordionElement>>;
    /**
     * Handler to be called after the accordion is closed
     */
    bqAfterClose: EventEmitter<CustomEvent<HTMLBqAccordionElement>>;
    /**
     * Handler to be called when the accordion is clicked
     */
    bqClick: EventEmitter<CustomEvent<HTMLBqAccordionElement>>;
}
export declare class BqAccordionGroup {
    protected z: NgZone;
    protected el: HTMLBqAccordionGroupElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqAccordionGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqAccordionGroup, "bq-accordion-group", never, { "appearance": { "alias": "appearance"; "required": false; }; "expandAll": { "alias": "expandAll"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "noAnimation": { "alias": "noAnimation"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqAccordionGroup extends Components.BqAccordionGroup {
}
export declare class BqAlert {
    protected z: NgZone;
    protected el: HTMLBqAlertElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqAlert, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqAlert, "bq-alert", never, { "autoDismiss": { "alias": "autoDismiss"; "required": false; }; "border": { "alias": "border"; "required": false; }; "disableClose": { "alias": "disableClose"; "required": false; }; "hideIcon": { "alias": "hideIcon"; "required": false; }; "open": { "alias": "open"; "required": false; }; "sticky": { "alias": "sticky"; "required": false; }; "time": { "alias": "time"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqAlert extends Components.BqAlert {
    /**
     * Callback handler to be called when the alert is hidden
     */
    bqHide: EventEmitter<CustomEvent<any>>;
    /**
     * Callback handler to be called when the alert is shown
     */
    bqShow: EventEmitter<CustomEvent<any>>;
    /**
     * Callback handler to be called after the alert has been shown
     */
    bqAfterShow: EventEmitter<CustomEvent<any>>;
    /**
     * Callback handler to be called after the alert has been hidden
     */
    bqAfterHide: EventEmitter<CustomEvent<any>>;
}
export declare class BqAvatar {
    protected z: NgZone;
    protected el: HTMLBqAvatarElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqAvatar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqAvatar, "bq-avatar", never, { "altText": { "alias": "altText"; "required": false; }; "image": { "alias": "image"; "required": false; }; "initials": { "alias": "initials"; "required": false; }; "label": { "alias": "label"; "required": false; }; "shape": { "alias": "shape"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqAvatar extends Components.BqAvatar {
}
export declare class BqBadge {
    protected z: NgZone;
    protected el: HTMLBqBadgeElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqBadge, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqBadge, "bq-badge", never, { "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "size": { "alias": "size"; "required": false; }; "textColor": { "alias": "textColor"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqBadge extends Components.BqBadge {
}
export declare class BqBreadcrumb {
    protected z: NgZone;
    protected el: HTMLBqBreadcrumbElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqBreadcrumb, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqBreadcrumb, "bq-breadcrumb", never, { "label": { "alias": "label"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqBreadcrumb extends Components.BqBreadcrumb {
}
export declare class BqBreadcrumbItem {
    protected z: NgZone;
    protected el: HTMLBqBreadcrumbItemElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqBreadcrumbItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqBreadcrumbItem, "bq-breadcrumb-item", never, { "href": { "alias": "href"; "required": false; }; "rel": { "alias": "rel"; "required": false; }; "target": { "alias": "target"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqBreadcrumbItem extends Components.BqBreadcrumbItem {
    /**
     * Handler to be called when item loses focus
     */
    bqBlur: EventEmitter<CustomEvent<HTMLBqBreadcrumbItemElement>>;
    /**
     * Handler to be called when item is focused
     */
    bqFocus: EventEmitter<CustomEvent<HTMLBqBreadcrumbItemElement>>;
    /**
     * Handler to be called when item is clicked
     */
    bqClick: EventEmitter<CustomEvent<HTMLBqBreadcrumbItemElement>>;
}
export declare class BqButton {
    protected z: NgZone;
    protected el: HTMLBqButtonElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqButton, "bq-button", never, { "appearance": { "alias": "appearance"; "required": false; }; "block": { "alias": "block"; "required": false; }; "border": { "alias": "border"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "download": { "alias": "download"; "required": false; }; "href": { "alias": "href"; "required": false; }; "justifyContent": { "alias": "justifyContent"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "size": { "alias": "size"; "required": false; }; "target": { "alias": "target"; "required": false; }; "type": { "alias": "type"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqButton extends Components.BqButton {
    /**
     * Handler to be called when the button loses focus
     */
    bqBlur: EventEmitter<CustomEvent<HTMLBqButtonElement>>;
    /**
     * Handler to be called when the button is clicked
     */
    bqFocus: EventEmitter<CustomEvent<HTMLBqButtonElement>>;
    /**
     * Handler to be called when button gets focus
     */
    bqClick: EventEmitter<CustomEvent<HTMLBqButtonElement>>;
}
export declare class BqCard {
    protected z: NgZone;
    protected el: HTMLBqCardElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqCard, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqCard, "bq-card", never, { "border": { "alias": "border"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqCard extends Components.BqCard {
}
export declare class BqCheckbox {
    protected z: NgZone;
    protected el: HTMLBqCheckboxElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqCheckbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqCheckbox, "bq-checkbox", never, { "backgroundOnHover": { "alias": "backgroundOnHover"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "formId": { "alias": "formId"; "required": false; }; "formValidationMessage": { "alias": "formValidationMessage"; "required": false; }; "indeterminate": { "alias": "indeterminate"; "required": false; }; "name": { "alias": "name"; "required": false; }; "required": { "alias": "required"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqCheckbox extends Components.BqCheckbox {
    /**
     * Handler to be called when the checkbox state changes
     */
    bqChange: EventEmitter<CustomEvent<{
        checked: boolean;
    }>>;
    /**
     * Handler to be called when the checkbox gets focus
     */
    bqFocus: EventEmitter<CustomEvent<HTMLBqCheckboxElement>>;
    /**
     * Handler to be called when the checkbox loses focus
     */
    bqBlur: EventEmitter<CustomEvent<HTMLBqCheckboxElement>>;
}
export declare class BqCol {
    protected z: NgZone;
    protected el: HTMLBqColElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqCol, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqCol, "bq-col", never, { "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqCol extends Components.BqCol {
}
export declare class BqDatePicker {
    protected z: NgZone;
    protected el: HTMLBqDatePickerElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqDatePicker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqDatePicker, "bq-date-picker", never, { "autofocus": { "alias": "autofocus"; "required": false; }; "clearButtonLabel": { "alias": "clearButtonLabel"; "required": false; }; "disableClear": { "alias": "disableClear"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "distance": { "alias": "distance"; "required": false; }; "firstDayOfWeek": { "alias": "firstDayOfWeek"; "required": false; }; "form": { "alias": "form"; "required": false; }; "formValidationMessage": { "alias": "formValidationMessage"; "required": false; }; "formatOptions": { "alias": "formatOptions"; "required": false; }; "isDateDisallowed": { "alias": "isDateDisallowed"; "required": false; }; "locale": { "alias": "locale"; "required": false; }; "max": { "alias": "max"; "required": false; }; "min": { "alias": "min"; "required": false; }; "months": { "alias": "months"; "required": false; }; "monthsPerView": { "alias": "monthsPerView"; "required": false; }; "name": { "alias": "name"; "required": false; }; "open": { "alias": "open"; "required": false; }; "panelHeight": { "alias": "panelHeight"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "required": { "alias": "required"; "required": false; }; "showOutsideDays": { "alias": "showOutsideDays"; "required": false; }; "skidding": { "alias": "skidding"; "required": false; }; "strategy": { "alias": "strategy"; "required": false; }; "tentative": { "alias": "tentative"; "required": false; }; "type": { "alias": "type"; "required": false; }; "validationStatus": { "alias": "validationStatus"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqDatePicker extends Components.BqDatePicker {
    /**
     * Callback handler emitted when the input loses focus
     */
    bqBlur: EventEmitter<CustomEvent<HTMLBqDatePickerElement>>;
    /**
     * Callback handler emitted when the input value has changed and the input loses focus.
  This handler is called whenever the user finishes typing or pasting text into the input field and then clicks outside of the input field.
     */
    bqChange: EventEmitter<CustomEvent<{
        value: string;
        el: HTMLBqDatePickerElement;
    }>>;
    /**
     * Callback handler emitted when the input value has been cleared
     */
    bqClear: EventEmitter<CustomEvent<HTMLBqDatePickerElement>>;
    /**
     * Callback handler emitted when the input has received focus
     */
    bqFocus: EventEmitter<CustomEvent<HTMLBqDatePickerElement>>;
}
export declare class BqDialog {
    protected z: NgZone;
    protected el: HTMLBqDialogElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqDialog, "bq-dialog", never, { "border": { "alias": "border"; "required": false; }; "disableBackdrop": { "alias": "disableBackdrop"; "required": false; }; "disableCloseClickOutside": { "alias": "disableCloseClickOutside"; "required": false; }; "disableCloseEscKeydown": { "alias": "disableCloseEscKeydown"; "required": false; }; "footerAppearance": { "alias": "footerAppearance"; "required": false; }; "hideCloseButton": { "alias": "hideCloseButton"; "required": false; }; "open": { "alias": "open"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqDialog extends Components.BqDialog {
    /**
     * Callback handler emitted when the dialog has been canceled or dismissed
     */
    bqCancel: EventEmitter<CustomEvent<void>>;
    /**
     * Callback handler emitted when the dialog will close
     */
    bqClose: EventEmitter<CustomEvent<void>>;
    /**
     * Callback handler emitted when the dialog will open
     */
    bqOpen: EventEmitter<CustomEvent<void>>;
    /**
     * Callback handler emitted when the dialog finish opening
     */
    bqAfterOpen: EventEmitter<CustomEvent<void>>;
    /**
     * Callback handler emitted when the dialog finish closing
     */
    bqAfterClose: EventEmitter<CustomEvent<void>>;
}
export declare class BqDivider {
    protected z: NgZone;
    protected el: HTMLBqDividerElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqDivider, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqDivider, "bq-divider", never, { "dashed": { "alias": "dashed"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "strokeBasis": { "alias": "strokeBasis"; "required": false; }; "strokeColor": { "alias": "strokeColor"; "required": false; }; "strokeDashGap": { "alias": "strokeDashGap"; "required": false; }; "strokeDashWidth": { "alias": "strokeDashWidth"; "required": false; }; "strokeLinecap": { "alias": "strokeLinecap"; "required": false; }; "strokeThickness": { "alias": "strokeThickness"; "required": false; }; "titleAlignment": { "alias": "titleAlignment"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqDivider extends Components.BqDivider {
}
export declare class BqDrawer {
    protected z: NgZone;
    protected el: HTMLBqDrawerElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqDrawer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqDrawer, "bq-drawer", never, { "closeOnClickOutside": { "alias": "closeOnClickOutside"; "required": false; }; "closeOnEsc": { "alias": "closeOnEsc"; "required": false; }; "enableBackdrop": { "alias": "enableBackdrop"; "required": false; }; "open": { "alias": "open"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "position": { "alias": "position"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqDrawer extends Components.BqDrawer {
    /**
     * Callback handler to be called when the drawer is closed
     */
    bqClose: EventEmitter<CustomEvent<any>>;
    /**
     * Callback handler to be called when the drawer is opened
     */
    bqOpen: EventEmitter<CustomEvent<any>>;
    /**
     * Callback handler to be called after the drawer has been opened
     */
    bqAfterOpen: EventEmitter<CustomEvent<any>>;
    /**
     * Callback handler to be called after the drawer has been closed
     */
    bqAfterClose: EventEmitter<CustomEvent<any>>;
}
export declare class BqDropdown {
    protected z: NgZone;
    protected el: HTMLBqDropdownElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqDropdown, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqDropdown, "bq-dropdown", never, { "disabled": { "alias": "disabled"; "required": false; }; "distance": { "alias": "distance"; "required": false; }; "keepOpenOnSelect": { "alias": "keepOpenOnSelect"; "required": false; }; "open": { "alias": "open"; "required": false; }; "panelHeight": { "alias": "panelHeight"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "sameWidth": { "alias": "sameWidth"; "required": false; }; "skidding": { "alias": "skidding"; "required": false; }; "strategy": { "alias": "strategy"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqDropdown extends Components.BqDropdown {
    /**
     * Callback handler to be called when the dropdown panel is opened or closed.
     */
    bqOpen: EventEmitter<CustomEvent<{
        open: boolean;
    }>>;
}
export declare class BqEmptyState {
    protected z: NgZone;
    protected el: HTMLBqEmptyStateElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqEmptyState, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqEmptyState, "bq-empty-state", never, { "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqEmptyState extends Components.BqEmptyState {
}
export declare class BqGrid {
    protected z: NgZone;
    protected el: HTMLBqGridElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqGrid, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqGrid, "bq-grid", never, { "fixed": { "alias": "fixed"; "required": false; }; "noPadding": { "alias": "noPadding"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqGrid extends Components.BqGrid {
}
export declare class BqIcon {
    protected z: NgZone;
    protected el: HTMLBqIconElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqIcon, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqIcon, "bq-icon", never, { "color": { "alias": "color"; "required": false; }; "label": { "alias": "label"; "required": false; }; "name": { "alias": "name"; "required": false; }; "size": { "alias": "size"; "required": false; }; "src": { "alias": "src"; "required": false; }; "weight": { "alias": "weight"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqIcon extends Components.BqIcon {
    /**
     * Callback handler to be called when the SVG has loaded
     */
    svgLoaded: EventEmitter<CustomEvent<any>>;
}
export declare class BqInput {
    protected z: NgZone;
    protected el: HTMLBqInputElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqInput, "bq-input", never, { "autocapitalize": { "alias": "autocapitalize"; "required": false; }; "autocomplete": { "alias": "autocomplete"; "required": false; }; "autocorrect": { "alias": "autocorrect"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; "clearButtonLabel": { "alias": "clearButtonLabel"; "required": false; }; "debounceTime": { "alias": "debounceTime"; "required": false; }; "disableClear": { "alias": "disableClear"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "form": { "alias": "form"; "required": false; }; "formValidationMessage": { "alias": "formValidationMessage"; "required": false; }; "inputmode": { "alias": "inputmode"; "required": false; }; "max": { "alias": "max"; "required": false; }; "maxlength": { "alias": "maxlength"; "required": false; }; "min": { "alias": "min"; "required": false; }; "minlength": { "alias": "minlength"; "required": false; }; "name": { "alias": "name"; "required": false; }; "pattern": { "alias": "pattern"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; "step": { "alias": "step"; "required": false; }; "type": { "alias": "type"; "required": false; }; "validationStatus": { "alias": "validationStatus"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqInput extends Components.BqInput {
    /**
     * Callback handler emitted when the input loses focus
     */
    bqBlur: EventEmitter<CustomEvent<HTMLBqInputElement>>;
    /**
     * Callback handler emitted when the input value has changed and the input loses focus.
  This handler is called whenever the user finishes typing or pasting text into the input field and then clicks outside of the input field.
     */
    bqChange: EventEmitter<CustomEvent<{
        value: string | number | string[];
        el: HTMLBqInputElement;
    }>>;
    /**
     * Callback handler emitted when the input value has been cleared
     */
    bqClear: EventEmitter<CustomEvent<HTMLBqInputElement>>;
    /**
     * Callback handler emitted when the input has received focus
     */
    bqFocus: EventEmitter<CustomEvent<HTMLBqInputElement>>;
    /**
     * Callback handler emitted when the input value changes.
  This handler is called whenever the user types or pastes text into the input field.
     */
    bqInput: EventEmitter<CustomEvent<{
        value: string | number | string[];
        el: HTMLBqInputElement;
    }>>;
}
export declare class BqLogo {
    protected z: NgZone;
    protected el: HTMLBqLogoElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqLogo, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqLogo, "bq-logo", never, { "size": { "alias": "size"; "required": false; }; "type": { "alias": "type"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqLogo extends Components.BqLogo {
}
export declare class BqNotification {
    protected z: NgZone;
    protected el: HTMLBqNotificationElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqNotification, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqNotification, "bq-notification", never, { "autoDismiss": { "alias": "autoDismiss"; "required": false; }; "border": { "alias": "border"; "required": false; }; "disableClose": { "alias": "disableClose"; "required": false; }; "hideIcon": { "alias": "hideIcon"; "required": false; }; "open": { "alias": "open"; "required": false; }; "time": { "alias": "time"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqNotification extends Components.BqNotification {
    /**
     * Callback handler to be called when the notification is hidden
     */
    bqHide: EventEmitter<CustomEvent<any>>;
    /**
     * Callback handler to be called when the notification is shown
     */
    bqShow: EventEmitter<CustomEvent<any>>;
    /**
     * Callback handler to be called after the notification has been opened
     */
    bqAfterOpen: EventEmitter<CustomEvent<any>>;
    /**
     * Callback handler to be called after the notification has been closed
     */
    bqAfterClose: EventEmitter<CustomEvent<any>>;
}
export declare class BqOption {
    protected z: NgZone;
    protected el: HTMLBqOptionElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqOption, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqOption, "bq-option", never, { "disabled": { "alias": "disabled"; "required": false; }; "hidden": { "alias": "hidden"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqOption extends Components.BqOption {
    /**
     * Handler to be called when item loses focus
     */
    bqBlur: EventEmitter<CustomEvent<HTMLBqOptionElement>>;
    /**
     * Handler to be called when item is focused
     */
    bqFocus: EventEmitter<CustomEvent<HTMLBqOptionElement>>;
    /**
     * Handler to be called when item is clicked
     */
    bqClick: EventEmitter<CustomEvent<HTMLBqOptionElement>>;
    /**
     * Handler to be called on enter key press
     */
    bqEnter: EventEmitter<CustomEvent<HTMLBqOptionElement>>;
}
export declare class BqOptionGroup {
    protected z: NgZone;
    protected el: HTMLBqOptionGroupElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqOptionGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqOptionGroup, "bq-option-group", never, {}, {}, never, ["*"], true, never>;
}
export declare interface BqOptionGroup extends Components.BqOptionGroup {
}
export declare class BqOptionList {
    protected z: NgZone;
    protected el: HTMLBqOptionListElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqOptionList, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqOptionList, "bq-option-list", never, { "ariaLabel": { "alias": "ariaLabel"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqOptionList extends Components.BqOptionList {
    /**
     * Handler to be called when `bq-option` is selected (on click/enter press).
     */
    bqSelect: EventEmitter<CustomEvent<{
        value: string;
        item: HTMLBqOptionElement;
    }>>;
}
export declare class BqPageTitle {
    protected z: NgZone;
    protected el: HTMLBqPageTitleElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqPageTitle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqPageTitle, "bq-page-title", never, {}, {}, never, ["*"], true, never>;
}
export declare interface BqPageTitle extends Components.BqPageTitle {
}
export declare class BqPanel {
    protected z: NgZone;
    protected el: HTMLBqPanelElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqPanel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqPanel, "bq-panel", never, { "distance": { "alias": "distance"; "required": false; }; "open": { "alias": "open"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "sameWidth": { "alias": "sameWidth"; "required": false; }; "skidding": { "alias": "skidding"; "required": false; }; "strategy": { "alias": "strategy"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqPanel extends Components.BqPanel {
}
export declare class BqProgress {
    protected z: NgZone;
    protected el: HTMLBqProgressElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqProgress, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqProgress, "bq-progress", never, { "borderShape": { "alias": "borderShape"; "required": false; }; "enableTooltip": { "alias": "enableTooltip"; "required": false; }; "indeterminate": { "alias": "indeterminate"; "required": false; }; "label": { "alias": "label"; "required": false; }; "thickness": { "alias": "thickness"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqProgress extends Components.BqProgress {
}
export declare class BqRadio {
    protected z: NgZone;
    protected el: HTMLBqRadioElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqRadio, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqRadio, "bq-radio", never, { "backgroundOnHover": { "alias": "backgroundOnHover"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "formId": { "alias": "formId"; "required": false; }; "name": { "alias": "name"; "required": false; }; "required": { "alias": "required"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqRadio extends Components.BqRadio {
    /**
     * Handler to be called when the radio state changes
     */
    bqClick: EventEmitter<CustomEvent<HTMLBqRadioElement>>;
    /**
     * Handler to be called when the radio gets focus
     */
    bqFocus: EventEmitter<CustomEvent<HTMLBqRadioElement>>;
    /**
     * Handler to be called when the radio loses focus
     */
    bqBlur: EventEmitter<CustomEvent<HTMLBqRadioElement>>;
    /**
     * Handler to be called when the radio key is pressed
     */
    bqKeyDown: EventEmitter<CustomEvent<KeyboardEvent>>;
}
export declare class BqRadioGroup {
    protected z: NgZone;
    protected el: HTMLBqRadioGroupElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqRadioGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqRadioGroup, "bq-radio-group", never, { "backgroundOnHover": { "alias": "backgroundOnHover"; "required": false; }; "debounceTime": { "alias": "debounceTime"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "fieldset": { "alias": "fieldset"; "required": false; }; "name": { "alias": "name"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "required": { "alias": "required"; "required": false; }; "requiredValidationMessage": { "alias": "requiredValidationMessage"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqRadioGroup extends Components.BqRadioGroup {
    /**
     * Handler to be called when the radio state changes
     */
    bqChange: EventEmitter<CustomEvent<{
        value: string;
        target: HTMLBqRadioElement;
    }>>;
}
export declare class BqRow {
    protected z: NgZone;
    protected el: HTMLBqRowElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqRow, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqRow, "bq-row", never, {}, {}, never, ["*"], true, never>;
}
export declare interface BqRow extends Components.BqRow {
}
export declare class BqSelect {
    protected z: NgZone;
    protected el: HTMLBqSelectElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqSelect, "bq-select", never, { "autofocus": { "alias": "autofocus"; "required": false; }; "clearButtonLabel": { "alias": "clearButtonLabel"; "required": false; }; "debounceTime": { "alias": "debounceTime"; "required": false; }; "disableClear": { "alias": "disableClear"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "distance": { "alias": "distance"; "required": false; }; "form": { "alias": "form"; "required": false; }; "keepOpenOnSelect": { "alias": "keepOpenOnSelect"; "required": false; }; "maxTagsVisible": { "alias": "maxTagsVisible"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "name": { "alias": "name"; "required": false; }; "open": { "alias": "open"; "required": false; }; "panelHeight": { "alias": "panelHeight"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; "sameWidth": { "alias": "sameWidth"; "required": false; }; "skidding": { "alias": "skidding"; "required": false; }; "strategy": { "alias": "strategy"; "required": false; }; "validationStatus": { "alias": "validationStatus"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqSelect extends Components.BqSelect {
    /**
     * Callback handler emitted when the Select input loses focus
     */
    bqBlur: EventEmitter<CustomEvent<HTMLBqSelectElement>>;
    /**
     * Callback handler emitted when the selected value has been cleared
     */
    bqClear: EventEmitter<CustomEvent<HTMLBqSelectElement>>;
    /**
     * Callback handler emitted when the Select input has received focus
     */
    bqFocus: EventEmitter<CustomEvent<HTMLBqSelectElement>>;
    /**
     * Callback handler emitted when the selected value has changed
     */
    bqSelect: EventEmitter<CustomEvent<{
        value: string | number | string[];
        item: HTMLBqOptionElement;
    }>>;
}
export declare class BqSideMenu {
    protected z: NgZone;
    protected el: HTMLBqSideMenuElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqSideMenu, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqSideMenu, "bq-side-menu", never, { "appearance": { "alias": "appearance"; "required": false; }; "collapse": { "alias": "collapse"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqSideMenu extends Components.BqSideMenu {
    /**
     * Callback handler to be called when the Side menu changes its width from expanded to collapse and vice versa
     */
    bqCollapse: EventEmitter<CustomEvent<{
        collapse: boolean;
    }>>;
    /**
     * Callback handler to be called when the active/selected menu item changes
     */
    bqSelect: EventEmitter<CustomEvent<HTMLBqSideMenuItemElement>>;
}
export declare class BqSideMenuItem {
    protected z: NgZone;
    protected el: HTMLBqSideMenuItemElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqSideMenuItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqSideMenuItem, "bq-side-menu-item", never, { "active": { "alias": "active"; "required": false; }; "collapse": { "alias": "collapse"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqSideMenuItem extends Components.BqSideMenuItem {
    /**
     * Handler to be called when the button loses focus
     */
    bqBlur: EventEmitter<CustomEvent<HTMLBqSideMenuItemElement>>;
    /**
     * Handler to be called when the button is clicked
     */
    bqFocus: EventEmitter<CustomEvent<HTMLBqSideMenuItemElement>>;
    /**
     * Handler to be called when button gets focus
     */
    bqClick: EventEmitter<CustomEvent<HTMLBqSideMenuItemElement>>;
}
export declare class BqSlider {
    protected z: NgZone;
    protected el: HTMLBqSliderElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqSlider, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqSlider, "bq-slider", never, { "debounceTime": { "alias": "debounceTime"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "enableTooltip": { "alias": "enableTooltip"; "required": false; }; "enableValueIndicator": { "alias": "enableValueIndicator"; "required": false; }; "gap": { "alias": "gap"; "required": false; }; "max": { "alias": "max"; "required": false; }; "min": { "alias": "min"; "required": false; }; "name": { "alias": "name"; "required": false; }; "step": { "alias": "step"; "required": false; }; "tooltipAlwaysVisible": { "alias": "tooltipAlwaysVisible"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqSlider extends Components.BqSlider {
    /**
     * Handler to be called when change the value on range inputs
     */
    bqChange: EventEmitter<CustomEvent<{
        value: Exclude<IBqSliderTSliderValue, string>;
        el: HTMLBqSliderElement;
    }>>;
    /**
     * Handler to be called when the slider loses focus
     */
    bqBlur: EventEmitter<CustomEvent<HTMLBqSliderElement>>;
    /**
     * Handler to be called when the slider gets focused
     */
    bqFocus: EventEmitter<CustomEvent<HTMLBqSliderElement>>;
}
export declare class BqSpinner {
    protected z: NgZone;
    protected el: HTMLBqSpinnerElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqSpinner, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqSpinner, "bq-spinner", never, { "animation": { "alias": "animation"; "required": false; }; "size": { "alias": "size"; "required": false; }; "textPosition": { "alias": "textPosition"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqSpinner extends Components.BqSpinner {
}
export declare class BqStatus {
    protected z: NgZone;
    protected el: HTMLBqStatusElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqStatus, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqStatus, "bq-status", never, { "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqStatus extends Components.BqStatus {
}
export declare class BqStepItem {
    protected z: NgZone;
    protected el: HTMLBqStepItemElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqStepItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqStepItem, "bq-step-item", never, { "size": { "alias": "size"; "required": false; }; "status": { "alias": "status"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqStepItem extends Components.BqStepItem {
    /**
     * Callback handler emitted when the step item is clicked
     */
    bqClick: EventEmitter<CustomEvent<{
        target: HTMLBqStepItemElement;
        value: string;
    }>>;
}
export declare class BqSteps {
    protected z: NgZone;
    protected el: HTMLBqStepsElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqSteps, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqSteps, "bq-steps", never, { "dividerColor": { "alias": "dividerColor"; "required": false; }; "size": { "alias": "size"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqSteps extends Components.BqSteps {
}
export declare class BqSwitch {
    protected z: NgZone;
    protected el: HTMLBqSwitchElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqSwitch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqSwitch, "bq-switch", never, { "backgroundOnHover": { "alias": "backgroundOnHover"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "formValidationMessage": { "alias": "formValidationMessage"; "required": false; }; "fullWidth": { "alias": "fullWidth"; "required": false; }; "innerLabel": { "alias": "innerLabel"; "required": false; }; "justifyContent": { "alias": "justifyContent"; "required": false; }; "name": { "alias": "name"; "required": false; }; "required": { "alias": "required"; "required": false; }; "reverseOrder": { "alias": "reverseOrder"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqSwitch extends Components.BqSwitch {
    /**
     * Handler to be called when the switch state changes
     */
    bqChange: EventEmitter<CustomEvent<{
        checked: boolean;
    }>>;
    /**
     * Handler to be called when the switch gets focus
     */
    bqFocus: EventEmitter<CustomEvent<HTMLBqSwitchElement>>;
    /**
     * Handler to be called when the switch loses focus
     */
    bqBlur: EventEmitter<CustomEvent<HTMLBqSwitchElement>>;
}
export declare class BqTab {
    protected z: NgZone;
    protected el: HTMLBqTabElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqTab, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqTab, "bq-tab", never, { "active": { "alias": "active"; "required": false; }; "controls": { "alias": "controls"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "size": { "alias": "size"; "required": false; }; "tabId": { "alias": "tabId"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqTab extends Components.BqTab {
    /**
     * Handler to be called when the tab state changes
     */
    bqClick: EventEmitter<CustomEvent<HTMLBqTabElement>>;
    /**
     * Handler to be called when the tab gets focus
     */
    bqFocus: EventEmitter<CustomEvent<HTMLBqTabElement>>;
    /**
     * Handler to be called when the tab loses focus
     */
    bqBlur: EventEmitter<CustomEvent<HTMLBqTabElement>>;
    /**
     * Handler to be called when the tab key is pressed
     */
    bqKeyDown: EventEmitter<CustomEvent<KeyboardEvent>>;
}
export declare class BqTabGroup {
    protected z: NgZone;
    protected el: HTMLBqTabGroupElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqTabGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqTabGroup, "bq-tab-group", never, { "debounceTime": { "alias": "debounceTime"; "required": false; }; "disableDivider": { "alias": "disableDivider"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "size": { "alias": "size"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqTabGroup extends Components.BqTabGroup {
    /**
     * Handler to be called when the tab value changes
     */
    bqChange: EventEmitter<CustomEvent<{
        target: HTMLBqTabElement;
        value: string;
    }>>;
}
export declare class BqTag {
    protected z: NgZone;
    protected el: HTMLBqTagElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqTag, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqTag, "bq-tag", never, { "border": { "alias": "border"; "required": false; }; "clickable": { "alias": "clickable"; "required": false; }; "color": { "alias": "color"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "hidden": { "alias": "hidden"; "required": false; }; "removable": { "alias": "removable"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "size": { "alias": "size"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqTag extends Components.BqTag {
    /**
     * Callback handler to be called when the tag is close/hidden
     */
    bqClose: EventEmitter<CustomEvent<any>>;
    /**
     * Callback handler to be called when the tag is not open/shown
     */
    bqOpen: EventEmitter<CustomEvent<any>>;
    /**
     * Handler to be called when tag loses focus
     */
    bqBlur: EventEmitter<CustomEvent<HTMLBqTagElement>>;
    /**
     * Handler to be called when tag is clicked
     */
    bqClick: EventEmitter<CustomEvent<HTMLBqTagElement>>;
    /**
     * Handler to be called when tag is focused
     */
    bqFocus: EventEmitter<CustomEvent<HTMLBqTagElement>>;
}
export declare class BqText {
    protected z: NgZone;
    protected el: HTMLBqTextElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqText, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqText, "bq-text", never, { "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "size": { "alias": "size"; "required": false; }; "textColor": { "alias": "textColor"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqText extends Components.BqText {
}
export declare class BqTextarea {
    protected z: NgZone;
    protected el: HTMLBqTextareaElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqTextarea, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqTextarea, "bq-textarea", never, { "autoGrow": { "alias": "autoGrow"; "required": false; }; "autocapitalize": { "alias": "autocapitalize"; "required": false; }; "autocomplete": { "alias": "autocomplete"; "required": false; }; "autocorrect": { "alias": "autocorrect"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; "debounceTime": { "alias": "debounceTime"; "required": false; }; "disableResize": { "alias": "disableResize"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "form": { "alias": "form"; "required": false; }; "formValidationMessage": { "alias": "formValidationMessage"; "required": false; }; "maxlength": { "alias": "maxlength"; "required": false; }; "name": { "alias": "name"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; "rows": { "alias": "rows"; "required": false; }; "spellcheck": { "alias": "spellcheck"; "required": false; }; "validationStatus": { "alias": "validationStatus"; "required": false; }; "value": { "alias": "value"; "required": false; }; "wrap": { "alias": "wrap"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqTextarea extends Components.BqTextarea {
    /**
     * Callback handler emitted when the textarea loses focus
     */
    bqBlur: EventEmitter<CustomEvent<HTMLBqTextareaElement>>;
    /**
     * Callback handler emitted when the textarea value has changed and the textarea loses focus.
  This handler is called whenever the user finishes typing or pasting text into the textarea field and then clicks outside of the textarea field.
     */
    bqChange: EventEmitter<CustomEvent<{
        value: string;
        el: HTMLBqTextareaElement;
    }>>;
    /**
     * Callback handler emitted when the textarea value has been cleared
     */
    bqClear: EventEmitter<CustomEvent<HTMLBqTextareaElement>>;
    /**
     * Callback handler emitted when the textarea has received focus
     */
    bqFocus: EventEmitter<CustomEvent<HTMLBqTextareaElement>>;
    /**
     * Callback handler emitted when the textarea value changes.
  This handler is called whenever the user types or pastes text into the textarea field.
     */
    bqInput: EventEmitter<CustomEvent<{
        value: string;
        el: HTMLBqTextareaElement;
    }>>;
}
export declare class BqToast {
    protected z: NgZone;
    protected el: HTMLBqToastElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqToast, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqToast, "bq-toast", never, { "border": { "alias": "border"; "required": false; }; "hideIcon": { "alias": "hideIcon"; "required": false; }; "open": { "alias": "open"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "time": { "alias": "time"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqToast extends Components.BqToast {
    /**
     * Callback handler to be called when the notification is hidden
     */
    bqHide: EventEmitter<CustomEvent<HTMLBqToastElement>>;
    /**
     * Callback handler to be called when the notification is shown
     */
    bqShow: EventEmitter<CustomEvent<HTMLBqToastElement>>;
}
export declare class BqTooltip {
    protected z: NgZone;
    protected el: HTMLBqTooltipElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqTooltip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqTooltip, "bq-tooltip", never, { "alwaysVisible": { "alias": "alwaysVisible"; "required": false; }; "displayOn": { "alias": "displayOn"; "required": false; }; "distance": { "alias": "distance"; "required": false; }; "hideArrow": { "alias": "hideArrow"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "sameWidth": { "alias": "sameWidth"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface BqTooltip extends Components.BqTooltip {
}
