import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { Components } from '@beeq/core';
import type { TSliderValue as IBqSliderTSliderValue } from '@beeq/core';
import * as i0 from "@angular/core";
export declare class BqAccordion {
    protected z: NgZone;
    protected el: HTMLBqAccordionElement;
    /**
   * The appearance style of the Accordion
   */
    set appearance(_: Components.BqAccordion['appearance']);
    /**
   * If true, the Accordion is disabled
   */
    set disabled(_: Components.BqAccordion['disabled']);
    /**
   * If true, the Accordion is expanded
   */
    set expanded(_: Components.BqAccordion['expanded']);
    /**
   * Animation is set through JS when the browser does not support CSS calc-size()
If true, the Accordion animation, will be disabled. No animation will be applied.
   */
    set noAnimation(_: Components.BqAccordion['noAnimation']);
    /**
   * If true, the Accordion expand icon is rotate 180deg when expanded
   */
    set rotate(_: Components.BqAccordion['rotate']);
    /**
   * The size of the Accordion
   */
    set size(_: Components.BqAccordion['size']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqAccordion, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqAccordion, "bq-accordion", never, { "appearance": { "alias": "appearance"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "expanded": { "alias": "expanded"; "required": false; }; "noAnimation": { "alias": "noAnimation"; "required": false; }; "rotate": { "alias": "rotate"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * The appearance style of accordion to be applied to all accordions
   */
    set appearance(_: Components.BqAccordionGroup['appearance']);
    /**
   * If true all accordions are expanded
   */
    set expandAll(_: Components.BqAccordionGroup['expandAll']);
    /**
   * Animation is set through JS when the browser does not support CSS calc-size()
If true, the accordion animation, will be disabled. No animation will be applied.
   */
    set noAnimation(_: Components.BqAccordionGroup['noAnimation']);
    /**
   * If true multiple accordions can be expanded at the same time
   */
    set multiple(_: Components.BqAccordionGroup['multiple']);
    /**
   * The size of accordion to be applied to all accordions
   */
    set size(_: Components.BqAccordionGroup['size']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqAccordionGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqAccordionGroup, "bq-accordion-group", never, { "appearance": { "alias": "appearance"; "required": false; }; "expandAll": { "alias": "expandAll"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "noAnimation": { "alias": "noAnimation"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface BqAccordionGroup extends Components.BqAccordionGroup {
}
export declare class BqAlert {
    protected z: NgZone;
    protected el: HTMLBqAlertElement;
    /**
   * If true, the alert will automatically hide after the specified amount of time
   */
    set autoDismiss(_: Components.BqAlert['autoDismiss']);
    /**
   * The corner radius of the alert component
   */
    set border(_: Components.BqAlert['border']);
    /**
   * If true, the close button at the top right of the alert won't be shown
   */
    set disableClose(_: Components.BqAlert['disableClose']);
    /**
   * If true, the alert icon won't be shown
   */
    set hideIcon(_: Components.BqAlert['hideIcon']);
    /**
   * If true, the alert will be shown
   */
    set open(_: Components.BqAlert['open']);
    /**
   * The length of time, in milliseconds, after which the alert will close itself. Only valid if `autoDismiss="true"`
   */
    set time(_: Components.BqAlert['time']);
    /**
   * Type of Alert
   */
    set type(_: Components.BqAlert['type']);
    /**
   * If true, the alert component will remain fixed at the top of the page, occupying the full viewport
   */
    set sticky(_: Components.BqAlert['sticky']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqAlert, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqAlert, "bq-alert", never, { "autoDismiss": { "alias": "autoDismiss"; "required": false; }; "border": { "alias": "border"; "required": false; }; "disableClose": { "alias": "disableClose"; "required": false; }; "hideIcon": { "alias": "hideIcon"; "required": false; }; "open": { "alias": "open"; "required": false; }; "sticky": { "alias": "sticky"; "required": false; }; "time": { "alias": "time"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * Alternate text for the avatar image if the image cannot be displayed
   */
    set altText(_: Components.BqAvatar['altText']);
    /**
   * The image source to load on the avatar (this can be also a base64 encoded image)
   */
    set image(_: Components.BqAvatar['image']);
    /**
   * A text to use for describing the avatar on assistive devices
   */
    set label(_: Components.BqAvatar['label']);
    /**
   * The text to display on avatar
   */
    set initials(_: Components.BqAvatar['initials']);
    /**
   * The shape of the avatar
   */
    set shape(_: Components.BqAvatar['shape']);
    /**
   * The size of the avatar
   */
    set size(_: Components.BqAvatar['size']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqAvatar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqAvatar, "bq-avatar", never, { "altText": { "alias": "altText"; "required": false; }; "image": { "alias": "image"; "required": false; }; "initials": { "alias": "initials"; "required": false; }; "label": { "alias": "label"; "required": false; }; "shape": { "alias": "shape"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface BqAvatar extends Components.BqAvatar {
}
export declare class BqBadge {
    protected z: NgZone;
    protected el: HTMLBqBadgeElement;
    /**
   * Badge background color. The value should be a valid value of the palette color
   */
    set backgroundColor(_: Components.BqBadge['backgroundColor']);
    /**
   * Badge number color. The value should be a valid value of the palette color
   */
    set textColor(_: Components.BqBadge['textColor']);
    /**
   * The size of the badge. Relevant if badge has no content.
   */
    set size(_: Components.BqBadge['size']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqBadge, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqBadge, "bq-badge", never, { "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "size": { "alias": "size"; "required": false; }; "textColor": { "alias": "textColor"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface BqBadge extends Components.BqBadge {
}
export declare class BqBreadcrumb {
    protected z: NgZone;
    protected el: HTMLBqBreadcrumbElement;
    /**
   * The `aria-label` attribute to describe the type of navigation
   */
    set label(_: Components.BqBreadcrumb['label']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqBreadcrumb, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqBreadcrumb, "bq-breadcrumb", never, { "label": { "alias": "label"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface BqBreadcrumb extends Components.BqBreadcrumb {
}
export declare class BqBreadcrumbItem {
    protected z: NgZone;
    protected el: HTMLBqBreadcrumbItemElement;
    /**
   * If set, the breadcrumb item will be rendered as an `<a>` with this `href`, otherwise, a `<button>` will be rendered.
   */
    set href(_: Components.BqBreadcrumbItem['href']);
    /**
   * Where to display the link in the browser context. Relevant only if `href` is set.
   */
    set target(_: Components.BqBreadcrumbItem['target']);
    /**
   * Where to display the link in the browser context. Relevant only if `href` is set.
   */
    set rel(_: Components.BqBreadcrumbItem['rel']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqBreadcrumbItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqBreadcrumbItem, "bq-breadcrumb-item", never, { "href": { "alias": "href"; "required": false; }; "rel": { "alias": "rel"; "required": false; }; "target": { "alias": "target"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * The appearance style to apply to the button
   */
    set appearance(_: Components.BqButton['appearance']);
    /**
   * If `true`, it will make the button fit to its parent width.
   */
    set block(_: Components.BqButton['block']);
    /**
   * The corner radius of the button
   */
    set border(_: Components.BqButton['border']);
    /**
   * If true, the button will be disabled (no interaction allowed)
   */
    set disabled(_: Components.BqButton['disabled']);
    /**
   * Tells the browser to treat the linked URL as a download. Only used when `href` is set.
Details: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download
   */
    set download(_: Components.BqButton['download']);
    /**
   * When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`
   */
    set href(_: Components.BqButton['href']);
    /**
   * It determinate how the content should be aligned
   */
    set justifyContent(_: Components.BqButton['justifyContent']);
    /**
   * If `true` it will display the button in a loading state
   */
    set loading(_: Components.BqButton['loading']);
    /**
   * The size of the button
   */
    set size(_: Components.BqButton['size']);
    /**
   * Where to display the linked URL, as the name for a browsing context (a `tab`, `window`, or `<iframe>`)
Details: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
   */
    set target(_: Components.BqButton['target']);
    /**
   * The default behavior of the button
   */
    set type(_: Components.BqButton['type']);
    /**
   * The variant of button to apply on top of the appearance (applicable only to `appearance="primary"`)
   */
    set variant(_: Components.BqButton['variant']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqButton, "bq-button", never, { "appearance": { "alias": "appearance"; "required": false; }; "block": { "alias": "block"; "required": false; }; "border": { "alias": "border"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "download": { "alias": "download"; "required": false; }; "href": { "alias": "href"; "required": false; }; "justifyContent": { "alias": "justifyContent"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "size": { "alias": "size"; "required": false; }; "target": { "alias": "target"; "required": false; }; "type": { "alias": "type"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * Type of card component
   */
    set type(_: Components.BqCard['type']);
    /**
   * The corner radius of the card component
   */
    set border(_: Components.BqCard['border']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqCard, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqCard, "bq-card", never, { "border": { "alias": "border"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface BqCard extends Components.BqCard {
}
export declare class BqCheckbox {
    protected z: NgZone;
    protected el: HTMLBqCheckboxElement;
    /**
   * If true checkbox displays background on hover
   */
    set backgroundOnHover(_: Components.BqCheckbox['backgroundOnHover']);
    /**
   * The form ID that the checkbox is associated with
   */
    set formId(_: Components.BqCheckbox['formId']);
    /**
   * The native form validation message
   */
    set formValidationMessage(_: Components.BqCheckbox['formValidationMessage']);
    /**
   * If true checkbox is checked
   */
    set checked(_: Components.BqCheckbox['checked']);
    /**
   * If true checkbox is disabled
   */
    set disabled(_: Components.BqCheckbox['disabled']);
    /**
   * A state that is neither checked nor unchecked
   */
    set indeterminate(_: Components.BqCheckbox['indeterminate']);
    /**
   * Name of the HTML input form control. Submitted with the form as part of a name/value pair.
   */
    set name(_: Components.BqCheckbox['name']);
    /**
   * If `true`, it will indicate that the user must specify a value for the checkbox before the owning form can be submitted
   */
    set required(_: Components.BqCheckbox['required']);
    /**
   * A string representing the value of the checkbox. Primarily used to differentiate a list of related checkboxes that have the same name.
   */
    set value(_: Components.BqCheckbox['value']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqCheckbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqCheckbox, "bq-checkbox", never, { "backgroundOnHover": { "alias": "backgroundOnHover"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "formId": { "alias": "formId"; "required": false; }; "formValidationMessage": { "alias": "formValidationMessage"; "required": false; }; "indeterminate": { "alias": "indeterminate"; "required": false; }; "name": { "alias": "name"; "required": false; }; "required": { "alias": "required"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * The size of the column, expressed as a fraction of 12 (e.g., 6 for half width).
Can also be "auto" for automatic sizing.
   */
    set size(_: Components.BqCol['size']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqCol, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqCol, "bq-col", never, { "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface BqCol extends Components.BqCol {
}
export declare class BqDatePicker {
    protected z: NgZone;
    protected el: HTMLBqDatePickerElement;
    /**
   * If `true`, the Date picker input will be focused on component render
   */
    set autofocus(_: Components.BqDatePicker['autofocus']);
    /**
   * The clear button aria label
   */
    set clearButtonLabel(_: Components.BqDatePicker['clearButtonLabel']);
    /**
   * If `true`, the clear button won't be displayed
   */
    set disableClear(_: Components.BqDatePicker['disableClear']);
    /**
   * Indicates whether the Date picker input is disabled or not.
If `true`, the Date picker is disabled and cannot be interacted with.
   */
    set disabled(_: Components.BqDatePicker['disabled']);
    /**
   * Represents the distance (gutter or margin) between the Date picker panel and the input element.
   */
    set distance(_: Components.BqDatePicker['distance']);
    /**
   * The first day of the week, where Sunday is 0, Monday is 1, etc
   */
    set firstDayOfWeek(_: Components.BqDatePicker['firstDayOfWeek']);
    /**
   * The options to use when formatting the displayed value.
Details: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options
   */
    set formatOptions(_: Components.BqDatePicker['formatOptions']);
    /**
   * The ID of the form that the Date picker input belongs to.
   */
    set form(_: Components.BqDatePicker['form']);
    /**
   * The native form validation message (mandatory if `required` is set)
   */
    set formValidationMessage(_: Components.BqDatePicker['formValidationMessage']);
    /**
   * A function that takes a date and returns true if the date should not be selectable
   */
    set isDateDisallowed(_: Components.BqDatePicker['isDateDisallowed']);
    /**
   * The locale for formatting dates. If not set, will use the browser's locale.
Details: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
   */
    set locale(_: Components.BqDatePicker['locale']);
    /**
   * The latest date that can be selected
   */
    set max(_: Components.BqDatePicker['max']);
    /**
   * The earliest date that can be selected
   */
    set min(_: Components.BqDatePicker['min']);
    /**
   * Number of months to show when range is `true`
   */
    set months(_: Components.BqDatePicker['months']);
    /**
   * Specifies how the next/previous buttons should navigate the calendar.
- single: The buttons will navigate by a single month at a time.
- months: The buttons will navigate by the number of months displayed per view.
   */
    set monthsPerView(_: Components.BqDatePicker['monthsPerView']);
    /**
   * The Date picker input name.
   */
    set name(_: Components.BqDatePicker['name']);
    /**
   * If `true`, the Date picker panel will be visible.
   */
    set open(_: Components.BqDatePicker['open']);
    /**
   * When set, it will override the height of the Date picker panel.
   */
    set panelHeight(_: Components.BqDatePicker['panelHeight']);
    /**
   * The Date picker input placeholder text value
   */
    set placeholder(_: Components.BqDatePicker['placeholder']);
    /**
   * Position of the Date picker panel
   */
    set placement(_: Components.BqDatePicker['placement']);
    /**
   * Indicates whether or not the Date picker input is required to be filled out before submitting the form.
   */
    set required(_: Components.BqDatePicker['required']);
    /**
   * Represents the skidding between the Date picker panel and the input element.
   */
    set skidding(_: Components.BqDatePicker['skidding']);
    /**
   * Whether to show days outside the month
   */
    set showOutsideDays(_: Components.BqDatePicker['showOutsideDays']);
    /**
   * Defines the strategy to position the Date picker panel
   */
    set strategy(_: Components.BqDatePicker['strategy']);
    /**
   * The date that is tentatively selected e.g. the start of a range selection
   */
    set tentative(_: Components.BqDatePicker['tentative']);
    /**
   * It defines how the calendar will behave, allowing single date selection, range selection, or multiple date selection
   */
    set type(_: Components.BqDatePicker['type']);
    /**
   * The validation status of the Select input. @remarks This property is used to indicate the validation status of the select input. It can be set to one of the following values:
- `'none'`: No validation status is set.
- `'error'`: The input has a validation error.
- `'warning'`: The input has a validation warning.
- `'success'`: The input has passed validation.
   */
    set validationStatus(_: Components.BqDatePicker['validationStatus']);
    /**
   * The select input value represents the currently selected date or range and can be used to reset the field to a previous value.
All dates are expected in ISO-8601 format (YYYY-MM-DD).
   */
    set value(_: Components.BqDatePicker['value']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqDatePicker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqDatePicker, "bq-date-picker", never, { "autofocus": { "alias": "autofocus"; "required": false; }; "clearButtonLabel": { "alias": "clearButtonLabel"; "required": false; }; "disableClear": { "alias": "disableClear"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "distance": { "alias": "distance"; "required": false; }; "firstDayOfWeek": { "alias": "firstDayOfWeek"; "required": false; }; "form": { "alias": "form"; "required": false; }; "formValidationMessage": { "alias": "formValidationMessage"; "required": false; }; "formatOptions": { "alias": "formatOptions"; "required": false; }; "isDateDisallowed": { "alias": "isDateDisallowed"; "required": false; }; "locale": { "alias": "locale"; "required": false; }; "max": { "alias": "max"; "required": false; }; "min": { "alias": "min"; "required": false; }; "months": { "alias": "months"; "required": false; }; "monthsPerView": { "alias": "monthsPerView"; "required": false; }; "name": { "alias": "name"; "required": false; }; "open": { "alias": "open"; "required": false; }; "panelHeight": { "alias": "panelHeight"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "required": { "alias": "required"; "required": false; }; "showOutsideDays": { "alias": "showOutsideDays"; "required": false; }; "skidding": { "alias": "skidding"; "required": false; }; "strategy": { "alias": "strategy"; "required": false; }; "tentative": { "alias": "tentative"; "required": false; }; "type": { "alias": "type"; "required": false; }; "validationStatus": { "alias": "validationStatus"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * Border radius of the dialog component
   */
    set border(_: Components.BqDialog['border']);
    /**
   * If true, the backdrop overlay won't be shown when the dialog opens
   */
    set disableBackdrop(_: Components.BqDialog['disableBackdrop']);
    /**
   * If true, the dialog will not close when the [Esc] key is press
   */
    set disableCloseEscKeydown(_: Components.BqDialog['disableCloseEscKeydown']);
    /**
   * If true, the dialog will not close when clicking on the backdrop overlay
   */
    set disableCloseClickOutside(_: Components.BqDialog['disableCloseClickOutside']);
    /**
   * The appearance of footer
   */
    set footerAppearance(_: Components.BqDialog['footerAppearance']);
    /**
   * If true, it hides the close button
   */
    set hideCloseButton(_: Components.BqDialog['hideCloseButton']);
    /**
   * If true, the dialog will be shown as open
   */
    set open(_: Components.BqDialog['open']);
    /**
   * The size of the dialog
   */
    set size(_: Components.BqDialog['size']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqDialog, "bq-dialog", never, { "border": { "alias": "border"; "required": false; }; "disableBackdrop": { "alias": "disableBackdrop"; "required": false; }; "disableCloseClickOutside": { "alias": "disableCloseClickOutside"; "required": false; }; "disableCloseEscKeydown": { "alias": "disableCloseEscKeydown"; "required": false; }; "footerAppearance": { "alias": "footerAppearance"; "required": false; }; "hideCloseButton": { "alias": "hideCloseButton"; "required": false; }; "open": { "alias": "open"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * If true, the divider has a dashed pattern
   */
    set dashed(_: Components.BqDivider['dashed']);
    /**
   * The default orientation of the divider
   */
    set orientation(_: Components.BqDivider['orientation']);
    /**
   * Set the stroke color of the divider. The value should be a valid value of the palette color
   */
    set strokeColor(_: Components.BqDivider['strokeColor']);
    /**
   * Set the alignment of the title on the main axis of the divider (horizontal / vertical)
   */
    set titleAlignment(_: Components.BqDivider['titleAlignment']);
    /**
   * Set the width of each dash of the divider's stroke. This is applicable when the stroke is dashed
   */
    set strokeDashWidth(_: Components.BqDivider['strokeDashWidth']);
    /**
   * Set the gap of the divider's stroke. This is applicable when the stroke is dashed
   */
    set strokeDashGap(_: Components.BqDivider['strokeDashGap']);
    /**
   * Set the thickness of the divider's stroke. Value expressed in px
   */
    set strokeThickness(_: Components.BqDivider['strokeThickness']);
    /**
   * Set the min width of the divider's stroke when text is not centered. Value expressed in px
   */
    set strokeBasis(_: Components.BqDivider['strokeBasis']);
    /**
   * Set the line of the divider's stroke. This is applicable when the stroke is dashed
   */
    set strokeLinecap(_: Components.BqDivider['strokeLinecap']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqDivider, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqDivider, "bq-divider", never, { "dashed": { "alias": "dashed"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "strokeBasis": { "alias": "strokeBasis"; "required": false; }; "strokeColor": { "alias": "strokeColor"; "required": false; }; "strokeDashGap": { "alias": "strokeDashGap"; "required": false; }; "strokeDashWidth": { "alias": "strokeDashWidth"; "required": false; }; "strokeLinecap": { "alias": "strokeLinecap"; "required": false; }; "strokeThickness": { "alias": "strokeThickness"; "required": false; }; "titleAlignment": { "alias": "titleAlignment"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface BqDivider extends Components.BqDivider {
}
export declare class BqDrawer {
    protected z: NgZone;
    protected el: HTMLBqDrawerElement;
    /**
   * If true, the backdrop overlay will be shown when the drawer opens
   */
    set enableBackdrop(_: Components.BqDrawer['enableBackdrop']);
    /**
   * If true, the drawer will not close when clicking outside the panel
   */
    set closeOnClickOutside(_: Components.BqDrawer['closeOnClickOutside']);
    /**
   * If true, the dialog will not close when the [Esc] key is pressed
   */
    set closeOnEsc(_: Components.BqDrawer['closeOnEsc']);
    /**
   * If true, the drawer component will be shown
   */
    set open(_: Components.BqDrawer['open']);
    /**
   *  @deprecated Defines the position of the drawer
   */
    set placement(_: Components.BqDrawer['placement']);
    /**
   * Defines the position of the drawer
   */
    set position(_: Components.BqDrawer['position']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqDrawer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqDrawer, "bq-drawer", never, { "closeOnClickOutside": { "alias": "closeOnClickOutside"; "required": false; }; "closeOnEsc": { "alias": "closeOnEsc"; "required": false; }; "enableBackdrop": { "alias": "enableBackdrop"; "required": false; }; "open": { "alias": "open"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "position": { "alias": "position"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * If true, the dropdown panel will be visible and won't be shown.
   */
    set disabled(_: Components.BqDropdown['disabled']);
    /**
   * Represents the distance (gutter or margin) between the panel and the trigger element.
   */
    set distance(_: Components.BqDropdown['distance']);
    /**
   * If true, the panel will remain open after a selection is made.
   */
    set keepOpenOnSelect(_: Components.BqDropdown['keepOpenOnSelect']);
    /**
   * Position of the panel
   */
    set placement(_: Components.BqDropdown['placement']);
    /**
   * If true, the panel will be visible.
   */
    set open(_: Components.BqDropdown['open']);
    /**
   * When set, it will override the height of the dropdown panel
   */
    set panelHeight(_: Components.BqDropdown['panelHeight']);
    /**
   * Whether the panel should have the same width as the trigger element
   */
    set sameWidth(_: Components.BqDropdown['sameWidth']);
    /**
   * Represents the skidding between the panel and the trigger element.
   */
    set skidding(_: Components.BqDropdown['skidding']);
    /**
   * Defines the strategy to position the panel
   */
    set strategy(_: Components.BqDropdown['strategy']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqDropdown, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqDropdown, "bq-dropdown", never, { "disabled": { "alias": "disabled"; "required": false; }; "distance": { "alias": "distance"; "required": false; }; "keepOpenOnSelect": { "alias": "keepOpenOnSelect"; "required": false; }; "open": { "alias": "open"; "required": false; }; "panelHeight": { "alias": "panelHeight"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "sameWidth": { "alias": "sameWidth"; "required": false; }; "skidding": { "alias": "skidding"; "required": false; }; "strategy": { "alias": "strategy"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * The size of the empty state component
   */
    set size(_: Components.BqEmptyState['size']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqEmptyState, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqEmptyState, "bq-empty-state", never, { "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface BqEmptyState extends Components.BqEmptyState {
}
export declare class BqGrid {
    protected z: NgZone;
    protected el: HTMLBqGridElement;
    set fixed(_: Components.BqGrid['fixed']);
    set noPadding(_: Components.BqGrid['noPadding']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqGrid, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqGrid, "bq-grid", never, { "fixed": { "alias": "fixed"; "required": false; }; "noPadding": { "alias": "noPadding"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface BqGrid extends Components.BqGrid {
}
export declare class BqIcon {
    protected z: NgZone;
    protected el: HTMLBqIconElement;
    /**
   * Label for the icon, used for accessibility
   */
    set label(_: Components.BqIcon['label']);
    /**
   * Set the stroke color of the SVG. The value should be a valid value of the palette color
   */
    set color(_: Components.BqIcon['color']);
    /**
   * Icon name to load. Please check all available icons [here](https://phosphoricons.com/)
   */
    set name(_: Components.BqIcon['name']);
    /**
   * Set the size of the SVG
   */
    set size(_: Components.BqIcon['size']);
    /**
   * Set the source of the SVG. If the source is set, the name property will be ignored
   */
    set src(_: Components.BqIcon['src']);
    /**
   *  @deprecated It set the icon weight/style
   */
    set weight(_: Components.BqIcon['weight']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqIcon, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqIcon, "bq-icon", never, { "color": { "alias": "color"; "required": false; }; "label": { "alias": "label"; "required": false; }; "name": { "alias": "name"; "required": false; }; "size": { "alias": "size"; "required": false; }; "src": { "alias": "src"; "required": false; }; "weight": { "alias": "weight"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * Controls whether or not the input field should be capitalized and how.
Possible values are 'off', 'none', 'on', 'sentences', 'words', and 'characters'.
See: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize
   */
    set autocapitalize(_: Components.BqInput['autocapitalize']);
    /**
   * Specifies whether or not the input field should have autocomplete enabled.
See: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values
   */
    set autocomplete(_: Components.BqInput['autocomplete']);
    /**
   * Controls whether or not the input field should have autocorrect enabled.
Possible values are 'on' and 'off'.
   */
    set autocorrect(_: Components.BqInput['autocorrect']);
    /**
   * If true, the input will be focused on component render
   */
    set autofocus(_: Components.BqInput['autofocus']);
    /**
   * The clear button aria label
   */
    set clearButtonLabel(_: Components.BqInput['clearButtonLabel']);
    /**
   * The amount of time, in milliseconds, to wait before emitting the `bqInput` event after the input value changes.
A value of 0 means no debouncing will occur.
   */
    set debounceTime(_: Components.BqInput['debounceTime']);
    /**
   * Indicates whether the input is disabled or not.
If `true`, the input is disabled and cannot be interacted with.
   */
    set disabled(_: Components.BqInput['disabled']);
    /**
   * If true, the clear button won't be displayed
   */
    set disableClear(_: Components.BqInput['disableClear']);
    /**
   * The ID of the form that the input field belongs to.
   */
    set form(_: Components.BqInput['form']);
    /**
   * The native form validation message (mandatory if `required` is set)
   */
    set formValidationMessage(_: Components.BqInput['formValidationMessage']);
    /**
   * The inputmode attribute specifies what kind of input mechanism would be most helpful for users entering content into the input field.
This allows a browser to display an appropriate virtual keyboard while editing.
Possible values are 'none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url', and 'date'.
   */
    set inputmode(_: Components.BqInput['inputmode']);
    /**
   * The maximum value that the input field can accept.
Only applies to date and number input types.
   */
    set max(_: Components.BqInput['max']);
    /**
   * The maximum number of characters that the input field can accept.
   */
    set maxlength(_: Components.BqInput['maxlength']);
    /**
   * The minimum value that the input field can accept.
Only applies to date and number input types.
   */
    set min(_: Components.BqInput['min']);
    /**
   * The minimum number of characters that the input field can accept.
   */
    set minlength(_: Components.BqInput['minlength']);
    /**
   * The input field name.
   */
    set name(_: Components.BqInput['name']);
    /**
   * Specifies a regular expression the form control's value should match.
See: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern
   */
    set pattern(_: Components.BqInput['pattern']);
    /**
   * The input placeholder text value
   */
    set placeholder(_: Components.BqInput['placeholder']);
    /**
   * If true, the input field cannot be modified.
   */
    set readonly(_: Components.BqInput['readonly']);
    /**
   * Indicates whether or not the input field is required to be filled out before submitting the form.
   */
    set required(_: Components.BqInput['required']);
    /**
   * A number that specifies the granularity that the value must adhere to.
Valid for date, month, week, time, datetime-local, number, and range.
See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step
   */
    set step(_: Components.BqInput['step']);
    /**
   * The type attribute specifies the type of input field to display.
Possible values are 'text', 'password', 'email', 'number', 'tel', 'search', 'url', and more.
See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
   */
    set type(_: Components.BqInput['type']);
    /**
   * The validation status of the input. @remarks This property is used to indicate the validation status of the input. It can be set to one of the following values:
- `'none'`: No validation status is set.
- `'error'`: The input has a validation error.
- `'warning'`: The input has a validation warning.
- `'success'`: The input has passed validation.
   */
    set validationStatus(_: Components.BqInput['validationStatus']);
    /**
   * The input value, it can be used to reset the input to a previous value
   */
    set value(_: Components.BqInput['value']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqInput, "bq-input", never, { "autocapitalize": { "alias": "autocapitalize"; "required": false; }; "autocomplete": { "alias": "autocomplete"; "required": false; }; "autocorrect": { "alias": "autocorrect"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; "clearButtonLabel": { "alias": "clearButtonLabel"; "required": false; }; "debounceTime": { "alias": "debounceTime"; "required": false; }; "disableClear": { "alias": "disableClear"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "form": { "alias": "form"; "required": false; }; "formValidationMessage": { "alias": "formValidationMessage"; "required": false; }; "inputmode": { "alias": "inputmode"; "required": false; }; "max": { "alias": "max"; "required": false; }; "maxlength": { "alias": "maxlength"; "required": false; }; "min": { "alias": "min"; "required": false; }; "minlength": { "alias": "minlength"; "required": false; }; "name": { "alias": "name"; "required": false; }; "pattern": { "alias": "pattern"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; "step": { "alias": "step"; "required": false; }; "type": { "alias": "type"; "required": false; }; "validationStatus": { "alias": "validationStatus"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * Tamaño del logo (normal o small)
   */
    set size(_: Components.BqLogo['size']);
    /**
   * Tipo del logo (completo = logo o responsivo = isotype)
   */
    set type(_: Components.BqLogo['type']);
    /**
   * Variante de color (full-color, green, white)
   */
    set variant(_: Components.BqLogo['variant']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqLogo, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqLogo, "bq-logo", never, { "size": { "alias": "size"; "required": false; }; "type": { "alias": "type"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface BqLogo extends Components.BqLogo {
}
export declare class BqNotification {
    protected z: NgZone;
    protected el: HTMLBqNotificationElement;
    /**
   * If true, the notification will automatically hide after the specified amount of time
   */
    set autoDismiss(_: Components.BqNotification['autoDismiss']);
    /**
   * The corder radius of the notification component
   */
    set border(_: Components.BqNotification['border']);
    /**
   * If true, the close button at the top right of the notification won't be shown
   */
    set disableClose(_: Components.BqNotification['disableClose']);
    /**
   * If true, the notification icon won't be shown
   */
    set hideIcon(_: Components.BqNotification['hideIcon']);
    /**
   * If true, the notification will be shown
   */
    set open(_: Components.BqNotification['open']);
    /**
   * The length of time, in milliseconds, after which the notification will close itself. Only valid if `autoDismiss="true"`
   */
    set time(_: Components.BqNotification['time']);
    /**
   * Type of Notification
   */
    set type(_: Components.BqNotification['type']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqNotification, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqNotification, "bq-notification", never, { "autoDismiss": { "alias": "autoDismiss"; "required": false; }; "border": { "alias": "border"; "required": false; }; "disableClose": { "alias": "disableClose"; "required": false; }; "hideIcon": { "alias": "hideIcon"; "required": false; }; "open": { "alias": "open"; "required": false; }; "time": { "alias": "time"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * If true, the option is hidden.
   */
    set hidden(_: Components.BqOption['hidden']);
    /**
   * If true, the option is disabled.
   */
    set disabled(_: Components.BqOption['disabled']);
    /**
   * A string representing the value of the option. Can be used to identify the item
   */
    set value(_: Components.BqOption['value']);
    /**
   * If true, the option is selected and active.
   */
    set selected(_: Components.BqOption['selected']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqOption, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqOption, "bq-option", never, { "disabled": { "alias": "disabled"; "required": false; }; "hidden": { "alias": "hidden"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<BqOptionGroup, "bq-option-group", never, {}, {}, never, ["*"], false, never>;
}
export declare interface BqOptionGroup extends Components.BqOptionGroup {
}
export declare class BqOptionList {
    protected z: NgZone;
    protected el: HTMLBqOptionListElement;
    /**
   * Aria label for the list.
   */
    set ariaLabel(_: Components.BqOptionList['ariaLabel']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqOptionList, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqOptionList, "bq-option-list", never, { "ariaLabel": { "alias": "ariaLabel"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<BqPageTitle, "bq-page-title", never, {}, {}, never, ["*"], false, never>;
}
export declare interface BqPageTitle extends Components.BqPageTitle {
}
export declare class BqPanel {
    protected z: NgZone;
    protected el: HTMLBqPanelElement;
    /**
   * Represents the distance (gutter or margin) between the panel and the trigger element.
   */
    set distance(_: Components.BqPanel['distance']);
    /**
   * Position of the panel
   */
    set placement(_: Components.BqPanel['placement']);
    /**
   * If true, the panel will be visible.
   */
    set open(_: Components.BqPanel['open']);
    /**
   * Whether the panel should have the same width as the trigger element
   */
    set sameWidth(_: Components.BqPanel['sameWidth']);
    /**
   * Represents the skidding between the panel and the trigger element.
   */
    set skidding(_: Components.BqPanel['skidding']);
    /**
   * Defines the strategy to position the panel
   */
    set strategy(_: Components.BqPanel['strategy']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqPanel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqPanel, "bq-panel", never, { "distance": { "alias": "distance"; "required": false; }; "open": { "alias": "open"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "sameWidth": { "alias": "sameWidth"; "required": false; }; "skidding": { "alias": "skidding"; "required": false; }; "strategy": { "alias": "strategy"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface BqPanel extends Components.BqPanel {
}
export declare class BqProgress {
    protected z: NgZone;
    protected el: HTMLBqProgressElement;
    /**
   * It will set the border style of the progress bar
   */
    set borderShape(_: Components.BqProgress['borderShape']);
    /**
   * If `true`, a tooltip will be shown displaying the progress value
   */
    set enableTooltip(_: Components.BqProgress['enableTooltip']);
    /**
   * If `true` the indeterminate state of progress bar is enabled
   */
    set indeterminate(_: Components.BqProgress['indeterminate']);
    /**
   * If `true, a label text showing the value (in percentage) will be shown
   */
    set label(_: Components.BqProgress['label']);
    /**
   * Progress bar thickness
   */
    set thickness(_: Components.BqProgress['thickness']);
    /**
   * Progress type
   */
    set type(_: Components.BqProgress['type']);
    /**
   * A number representing the current value of the progress bar
   */
    set value(_: Components.BqProgress['value']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqProgress, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqProgress, "bq-progress", never, { "borderShape": { "alias": "borderShape"; "required": false; }; "enableTooltip": { "alias": "enableTooltip"; "required": false; }; "indeterminate": { "alias": "indeterminate"; "required": false; }; "label": { "alias": "label"; "required": false; }; "thickness": { "alias": "thickness"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface BqProgress extends Components.BqProgress {
}
export declare class BqRadio {
    protected z: NgZone;
    protected el: HTMLBqRadioElement;
    /**
   * If true radio input is checked
   */
    set checked(_: Components.BqRadio['checked']);
    /**
   * If true radio input is disabled
   */
    set disabled(_: Components.BqRadio['disabled']);
    /**
   * If true radio displays background on hover
   */
    set backgroundOnHover(_: Components.BqRadio['backgroundOnHover']);
    /**
   * The form ID that the radio input is associated with
   */
    set formId(_: Components.BqRadio['formId']);
    /**
   * Name of the HTML input form control. Submitted with the form as part of a name/value pair.
   */
    set name(_: Components.BqRadio['name']);
    /**
   * If `true`, it will indicate that the user must specify a value for the radio before the owning form can be submitted
   */
    set required(_: Components.BqRadio['required']);
    /**
   * A string representing the value of the radio.
   */
    set value(_: Components.BqRadio['value']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqRadio, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqRadio, "bq-radio", never, { "backgroundOnHover": { "alias": "backgroundOnHover"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "formId": { "alias": "formId"; "required": false; }; "name": { "alias": "name"; "required": false; }; "required": { "alias": "required"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * If true, all radio inputs in the group will display a background on hover
   */
    set backgroundOnHover(_: Components.BqRadioGroup['backgroundOnHover']);
    /**
   * A number representing the delay time (in milliseconds) that `bqChange` event handler gets triggered once the value change
   */
    set debounceTime(_: Components.BqRadioGroup['debounceTime']);
    /**
   * If true radio inputs are disabled
   */
    set disabled(_: Components.BqRadioGroup['disabled']);
    /**
   * If true displays fieldset
   */
    set fieldset(_: Components.BqRadioGroup['fieldset']);
    /**
   * Name of the HTML input form control. Submitted with the form as part of a name/value pair.
   */
    set name(_: Components.BqRadioGroup['name']);
    /**
   * The display orientation of the radio inputs
   */
    set orientation(_: Components.BqRadioGroup['orientation']);
    /**
   * If true, the radio group is required
   */
    set required(_: Components.BqRadioGroup['required']);
    /**
   * The native form validation message when the radio group is required
   */
    set requiredValidationMessage(_: Components.BqRadioGroup['requiredValidationMessage']);
    /**
   * A string representing the value of the radio.
   */
    set value(_: Components.BqRadioGroup['value']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqRadioGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqRadioGroup, "bq-radio-group", never, { "backgroundOnHover": { "alias": "backgroundOnHover"; "required": false; }; "debounceTime": { "alias": "debounceTime"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "fieldset": { "alias": "fieldset"; "required": false; }; "name": { "alias": "name"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "required": { "alias": "required"; "required": false; }; "requiredValidationMessage": { "alias": "requiredValidationMessage"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<BqRow, "bq-row", never, {}, {}, never, ["*"], false, never>;
}
export declare interface BqRow extends Components.BqRow {
}
export declare class BqSelect {
    protected z: NgZone;
    protected el: HTMLBqSelectElement;
    /**
   * If true, the Select input will be focused on component render
   */
    set autofocus(_: Components.BqSelect['autofocus']);
    /**
   * The clear button aria label
   */
    set clearButtonLabel(_: Components.BqSelect['clearButtonLabel']);
    /**
   * The amount of time, in milliseconds, to wait before emitting the `bqInput` event after the input value changes.
A value of 0 means no debouncing will occur.
   */
    set debounceTime(_: Components.BqSelect['debounceTime']);
    /**
   * Indicates whether the Select input is disabled or not.
If `true`, the Select is disabled and cannot be interacted with.
   */
    set disabled(_: Components.BqSelect['disabled']);
    /**
   * If true, the clear button won't be displayed
   */
    set disableClear(_: Components.BqSelect['disableClear']);
    /**
   * Represents the distance (gutter or margin) between the Select panel and the input element.
   */
    set distance(_: Components.BqSelect['distance']);
    /**
   * The ID of the form that the Select input belongs to.
   */
    set form(_: Components.BqSelect['form']);
    /**
   * If true, the Select panel will remain open after a selection is made.
   */
    set keepOpenOnSelect(_: Components.BqSelect['keepOpenOnSelect']);
    /**
   * The Select input name.
   */
    set name(_: Components.BqSelect['name']);
    /**
   * The maximum number of tags to display when multiple selection is enabled
   */
    set maxTagsVisible(_: Components.BqSelect['maxTagsVisible']);
    /**
   * If true, the Select input will allow multiple selections.
   */
    set multiple(_: Components.BqSelect['multiple']);
    /**
   * If true, the Select panel will be visible.
   */
    set open(_: Components.BqSelect['open']);
    /**
   * When set, it will override the height of the Select panel.
   */
    set panelHeight(_: Components.BqSelect['panelHeight']);
    /**
   * The Select input placeholder text value
   */
    set placeholder(_: Components.BqSelect['placeholder']);
    /**
   * Position of the Select panel
   */
    set placement(_: Components.BqSelect['placement']);
    /**
   * If true, the list of options cannot be filtered (searching won't be available)
   */
    set readonly(_: Components.BqSelect['readonly']);
    /**
   * Indicates whether or not the Select input is required to be filled out before submitting the form.
   */
    set required(_: Components.BqSelect['required']);
    /**
   * Whether the panel should have the Select same width as the input element
   */
    set sameWidth(_: Components.BqSelect['sameWidth']);
    /**
   * Represents the skidding between the Select panel and the input element.
   */
    set skidding(_: Components.BqSelect['skidding']);
    /**
   * Defines the strategy to position the Select panel
   */
    set strategy(_: Components.BqSelect['strategy']);
    /**
   * The validation status of the Select input. @remarks This property is used to indicate the validation status of the select input. It can be set to one of the following values:
- `'none'`: No validation status is set.
- `'error'`: The input has a validation error.
- `'warning'`: The input has a validation warning.
- `'success'`: The input has passed validation.
   */
    set validationStatus(_: Components.BqSelect['validationStatus']);
    /**
   * The select input value, it can be used to reset the field to a previous value
   */
    set value(_: Components.BqSelect['value']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqSelect, "bq-select", never, { "autofocus": { "alias": "autofocus"; "required": false; }; "clearButtonLabel": { "alias": "clearButtonLabel"; "required": false; }; "debounceTime": { "alias": "debounceTime"; "required": false; }; "disableClear": { "alias": "disableClear"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "distance": { "alias": "distance"; "required": false; }; "form": { "alias": "form"; "required": false; }; "keepOpenOnSelect": { "alias": "keepOpenOnSelect"; "required": false; }; "maxTagsVisible": { "alias": "maxTagsVisible"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "name": { "alias": "name"; "required": false; }; "open": { "alias": "open"; "required": false; }; "panelHeight": { "alias": "panelHeight"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; "sameWidth": { "alias": "sameWidth"; "required": false; }; "skidding": { "alias": "skidding"; "required": false; }; "strategy": { "alias": "strategy"; "required": false; }; "validationStatus": { "alias": "validationStatus"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * It sets a predefined appearance of the side menu
   */
    set appearance(_: Components.BqSideMenu['appearance']);
    /**
   * If true, the container will reduce its width
   */
    set collapse(_: Components.BqSideMenu['collapse']);
    /**
   * It sets the size of the navigation menu items
   */
    set size(_: Components.BqSideMenu['size']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqSideMenu, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqSideMenu, "bq-side-menu", never, { "appearance": { "alias": "appearance"; "required": false; }; "collapse": { "alias": "collapse"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * If true, the menu item will be shown as active/selected.
   */
    set active(_: Components.BqSideMenuItem['active']);
    /**
   * If true, the item label and suffix will be hidden and the with will be reduce according to its parent
   */
    set collapse(_: Components.BqSideMenuItem['collapse']);
    /**
   * If true, the menu item will be disabled (no interaction allowed)
   */
    set disabled(_: Components.BqSideMenuItem['disabled']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqSideMenuItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqSideMenuItem, "bq-side-menu-item", never, { "active": { "alias": "active"; "required": false; }; "collapse": { "alias": "collapse"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * The amount of time, in milliseconds, to wait to trigger the `bqChange` event after each value change.
   */
    set debounceTime(_: Components.BqSlider['debounceTime']);
    /**
   * If `true` the slider is disabled.
   */
    set disabled(_: Components.BqSlider['disabled']);
    /**
   * If `true` it will show the value label on a side of the slider track area
   */
    set enableValueIndicator(_: Components.BqSlider['enableValueIndicator']);
    /**
   * A number representing the amount to remain between the minimum and maximum values (only for range type).
   */
    set gap(_: Components.BqSlider['gap']);
    /**
   * A number representing the max value of the slider.
   */
    set max(_: Components.BqSlider['max']);
    /**
   * A number representing the min value of the slider.
   */
    set min(_: Components.BqSlider['min']);
    /**
   * Name of the form control. Submitted with the form as part of a name/value pair
   */
    set name(_: Components.BqSlider['name']);
    /**
   * A number representing the step of the slider.
⚠️ Please notice that the value (or list of values if the slider type is `range`) will be rounded to the nearest multiple of `step`.
   */
    set step(_: Components.BqSlider['step']);
    /**
   * It defines the type of slider to display
   */
    set type(_: Components.BqSlider['type']);
    /**
   * The value of the slider.
- If the slider type is `single`, the value is a number.
- If the slider type is `range`, the value is an array of two numbers (the first number represents the `min` value and the second number represents the `max` value).
   */
    set value(_: Components.BqSlider['value']);
    /**
   * If `true`, a tooltip will be shown displaying the progress value
   */
    set enableTooltip(_: Components.BqSlider['enableTooltip']);
    /**
   * If `true`, a tooltip will always display the progress value.
It relies on enableTooltip and if enableTooltip is false, tooltipAlwaysVisible cannot be true.
   */
    set tooltipAlwaysVisible(_: Components.BqSlider['tooltipAlwaysVisible']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqSlider, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqSlider, "bq-slider", never, { "debounceTime": { "alias": "debounceTime"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "enableTooltip": { "alias": "enableTooltip"; "required": false; }; "enableValueIndicator": { "alias": "enableValueIndicator"; "required": false; }; "gap": { "alias": "gap"; "required": false; }; "max": { "alias": "max"; "required": false; }; "min": { "alias": "min"; "required": false; }; "name": { "alias": "name"; "required": false; }; "step": { "alias": "step"; "required": false; }; "tooltipAlwaysVisible": { "alias": "tooltipAlwaysVisible"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * If `false`, the animation on the icon element will be stopped
   */
    set animation(_: Components.BqSpinner['animation']);
    /**
   * It defines the position of the label text
   */
    set textPosition(_: Components.BqSpinner['textPosition']);
    /**
   * It defines the size of the icon element displayed
   */
    set size(_: Components.BqSpinner['size']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqSpinner, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqSpinner, "bq-spinner", never, { "animation": { "alias": "animation"; "required": false; }; "size": { "alias": "size"; "required": false; }; "textPosition": { "alias": "textPosition"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface BqSpinner extends Components.BqSpinner {
}
export declare class BqStatus {
    protected z: NgZone;
    protected el: HTMLBqStatusElement;
    /**
   * It defines the type of status to display
   */
    set type(_: Components.BqStatus['type']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqStatus, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqStatus, "bq-status", never, { "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface BqStatus extends Components.BqStatus {
}
export declare class BqStepItem {
    protected z: NgZone;
    protected el: HTMLBqStepItemElement;
    /**
   * It defines prefix size
   */
    set size(_: Components.BqStepItem['size']);
    /**
   * It defines step item appearance based on its status
   */
    set status(_: Components.BqStepItem['status']);
    /**
   * It defines the step item type used
   */
    set type(_: Components.BqStepItem['type']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqStepItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqStepItem, "bq-step-item", never, { "size": { "alias": "size"; "required": false; }; "status": { "alias": "status"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * The color of the line that connects the steps. It should be a valid declarative color token.
   */
    set dividerColor(_: Components.BqSteps['dividerColor']);
    /**
   * The size of the steps
   */
    set size(_: Components.BqSteps['size']);
    /**
   * The type of prefix element to use on the step items
   */
    set type(_: Components.BqSteps['type']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqSteps, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqSteps, "bq-steps", never, { "dividerColor": { "alias": "dividerColor"; "required": false; }; "size": { "alias": "size"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface BqSteps extends Components.BqSteps {
}
export declare class BqSwitch {
    protected z: NgZone;
    protected el: HTMLBqSwitchElement;
    /**
   * If true, a background will be displayed on hover
   */
    set backgroundOnHover(_: Components.BqSwitch['backgroundOnHover']);
    /**
   * It indicates whether if the switch is `ON` by default (when the page loads)
   */
    set checked(_: Components.BqSwitch['checked']);
    /**
   * If true, the switch control will be disabled and no interaction will be allowed
   */
    set disabled(_: Components.BqSwitch['disabled']);
    /**
   * The native form validation message
   */
    set formValidationMessage(_: Components.BqSwitch['formValidationMessage']);
    /**
   * If true, the component will take the full width space available on the parent container
   */
    set fullWidth(_: Components.BqSwitch['fullWidth']);
    /**
   * It indicates how to to display the on/off marks inside the control, with icons or none (default)
   */
    set innerLabel(_: Components.BqSwitch['innerLabel']);
    /**
   * It defines how to distribute the space between and around the control and the label text
(https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
   */
    set justifyContent(_: Components.BqSwitch['justifyContent']);
    /**
   * Name of the form control. Submitted with the form as part of a name/value pair
   */
    set name(_: Components.BqSwitch['name']);
    /**
   * If `true`, it will indicate that the user must switch `ON` the element before the owning form can be submitted
   */
    set required(_: Components.BqSwitch['required']);
    /**
   * If true, the order of the control and the label text will be changed
   */
    set reverseOrder(_: Components.BqSwitch['reverseOrder']);
    /**
   * The input control's value, submitted as a name/value pair with form data.
   */
    set value(_: Components.BqSwitch['value']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqSwitch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqSwitch, "bq-switch", never, { "backgroundOnHover": { "alias": "backgroundOnHover"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "formValidationMessage": { "alias": "formValidationMessage"; "required": false; }; "fullWidth": { "alias": "fullWidth"; "required": false; }; "innerLabel": { "alias": "innerLabel"; "required": false; }; "justifyContent": { "alias": "justifyContent"; "required": false; }; "name": { "alias": "name"; "required": false; }; "required": { "alias": "required"; "required": false; }; "reverseOrder": { "alias": "reverseOrder"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * If true tab is active
   */
    set active(_: Components.BqTab['active']);
    /**
   * The tab panel id that the tab controls
   */
    set controls(_: Components.BqTab['controls']);
    /**
   * If true tab is disabled
   */
    set disabled(_: Components.BqTab['disabled']);
    /**
   * The direction that tab should be render
   */
    set orientation(_: Components.BqTab['orientation']);
    /**
   * The placement that tab should be render
   */
    set placement(_: Components.BqTab['placement']);
    /**
   * The size of the tab
   */
    set size(_: Components.BqTab['size']);
    /**
   * The id of the tab
   */
    set tabId(_: Components.BqTab['tabId']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqTab, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqTab, "bq-tab", never, { "active": { "alias": "active"; "required": false; }; "controls": { "alias": "controls"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "size": { "alias": "size"; "required": false; }; "tabId": { "alias": "tabId"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * A number representing the delay value applied to bqChange event handler
   */
    set debounceTime(_: Components.BqTabGroup['debounceTime']);
    /**
   * If true, the underline divider below the tabs won't be shown
   */
    set disableDivider(_: Components.BqTabGroup['disableDivider']);
    /**
   * The direction that tab should be render
   */
    set orientation(_: Components.BqTabGroup['orientation']);
    /**
   * The placement that tab should be render
   */
    set placement(_: Components.BqTabGroup['placement']);
    /**
   * The size of the tab
   */
    set size(_: Components.BqTabGroup['size']);
    /**
   * A string representing the id of the selected tab.
   */
    set value(_: Components.BqTabGroup['value']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqTabGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqTabGroup, "bq-tab-group", never, { "debounceTime": { "alias": "debounceTime"; "required": false; }; "disableDivider": { "alias": "disableDivider"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "size": { "alias": "size"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * The corner radius of the Tag (will override size's predefined border)
   */
    set border(_: Components.BqTag['border']);
    /**
   * If true, the Tag can be clickable
   */
    set clickable(_: Components.BqTag['clickable']);
    /**
   * The color style of the Tag
   */
    set color(_: Components.BqTag['color']);
    /**
   * If true, the Tag will be disabled (only if clickable = `true`, no interaction allowed)
   */
    set disabled(_: Components.BqTag['disabled']);
    /**
   * If true, the Tag component will hidden (only if removable = `true`)
   */
    set hidden(_: Components.BqTag['hidden']);
    /**
   * If true, the Tag component can be removed
   */
    set removable(_: Components.BqTag['removable']);
    /**
   * If true, the Tag is selected (only if clickable = `true`)
   */
    set selected(_: Components.BqTag['selected']);
    /**
   * The size of the Tag component
   */
    set size(_: Components.BqTag['size']);
    /**
   * The variant of Tag to apply on top of the variant
   */
    set variant(_: Components.BqTag['variant']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqTag, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqTag, "bq-tag", never, { "border": { "alias": "border"; "required": false; }; "clickable": { "alias": "clickable"; "required": false; }; "color": { "alias": "color"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "hidden": { "alias": "hidden"; "required": false; }; "removable": { "alias": "removable"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "size": { "alias": "size"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * text background color. The value should be a valid value of the palette color
   */
    set backgroundColor(_: Components.BqText['backgroundColor']);
    /**
   * text number color. The value should be a valid value of the palette color
   */
    set textColor(_: Components.BqText['textColor']);
    /**
   * The size of the text. Relevant if text has no content.
   */
    set size(_: Components.BqText['size']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqText, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqText, "bq-text", never, { "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "size": { "alias": "size"; "required": false; }; "textColor": { "alias": "textColor"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface BqText extends Components.BqText {
}
export declare class BqTextarea {
    protected z: NgZone;
    protected el: HTMLBqTextareaElement;
    /**
   * Controls whether or not the textarea field should be capitalized and how.
Possible values are 'off', 'none', 'on', 'sentences', 'words', and 'characters'.
See: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize
   */
    set autocapitalize(_: Components.BqTextarea['autocapitalize']);
    /**
   * Specifies whether or not the textarea field should have autocomplete enabled.
See: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values
   */
    set autocomplete(_: Components.BqTextarea['autocomplete']);
    /**
   * Controls whether or not the textarea field should have autocorrect enabled.
Possible values are 'on' and 'off'.
   */
    set autocorrect(_: Components.BqTextarea['autocorrect']);
    /**
   * If true, the textarea will be focused on component render
   */
    set autofocus(_: Components.BqTextarea['autofocus']);
    /**
   * If `true`, the textarea will automatically grow and shrink to fit its contents.
If `false`, the textarea will have a fixed height specified by the `rows` property.
   */
    set autoGrow(_: Components.BqTextarea['autoGrow']);
    /**
   * The amount of time, in milliseconds, to wait before emitting the `bqInput` event after the textarea value changes.
A value of 0 means no debouncing will occur.
   */
    set debounceTime(_: Components.BqTextarea['debounceTime']);
    /**
   * If `true`, the user cannot interact with the textarea.
   */
    set disabled(_: Components.BqTextarea['disabled']);
    /**
   * If `true`, it will block the user's ability to resize the textarea.
   */
    set disableResize(_: Components.BqTextarea['disableResize']);
    /**
   * The ID of the form that the textarea field belongs to.
   */
    set form(_: Components.BqTextarea['form']);
    /**
   * The native form validation message
   */
    set formValidationMessage(_: Components.BqTextarea['formValidationMessage']);
    /**
   * The maximum number of characters that can be entered into the textarea (`0`: no limit).
When enabled, a character counter will be shown underneath the textarea.
   */
    set maxlength(_: Components.BqTextarea['maxlength']);
    /**
   * The name of the textarea element.
   */
    set name(_: Components.BqTextarea['name']);
    /**
   * The placeholder text to show when there is no value.
   */
    set placeholder(_: Components.BqTextarea['placeholder']);
    /**
   * If true, the textarea field cannot be modified.
   */
    set readonly(_: Components.BqTextarea['readonly']);
    /**
   * Indicates whether or not the textarea field is required to be filled out before submitting the form.
   */
    set required(_: Components.BqTextarea['required']);
    /**
   * The number of visible text lines for the control. It must be a positive integer.
   */
    set rows(_: Components.BqTextarea['rows']);
    /**
   * If true, the textarea content may be checked for spelling errors.
   */
    set spellcheck(_: Components.BqTextarea['spellcheck']);
    /**
   * The validation status of the textarea. @remarks This property is used to indicate the validation status of the textarea. It can be set to one of the following values:
- `'none'`: No validation status is set.
- `'error'`: The textarea has a validation error.
- `'warning'`: The textarea has a validation warning.
- `'success'`: The textarea has passed validation.
   */
    set validationStatus(_: Components.BqTextarea['validationStatus']);
    /**
   * The value of the textarea. It can be used to reset the textarea to a previous value.
   */
    set value(_: Components.BqTextarea['value']);
    /**
   * Specifies how the text in a text area is to be wrapped when submitted in a form
   */
    set wrap(_: Components.BqTextarea['wrap']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqTextarea, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqTextarea, "bq-textarea", never, { "autoGrow": { "alias": "autoGrow"; "required": false; }; "autocapitalize": { "alias": "autocapitalize"; "required": false; }; "autocomplete": { "alias": "autocomplete"; "required": false; }; "autocorrect": { "alias": "autocorrect"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; "debounceTime": { "alias": "debounceTime"; "required": false; }; "disableResize": { "alias": "disableResize"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "form": { "alias": "form"; "required": false; }; "formValidationMessage": { "alias": "formValidationMessage"; "required": false; }; "maxlength": { "alias": "maxlength"; "required": false; }; "name": { "alias": "name"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; "rows": { "alias": "rows"; "required": false; }; "spellcheck": { "alias": "spellcheck"; "required": false; }; "validationStatus": { "alias": "validationStatus"; "required": false; }; "value": { "alias": "value"; "required": false; }; "wrap": { "alias": "wrap"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * The corder radius of the toast component
   */
    set border(_: Components.BqToast['border']);
    /**
   * Type of toast
   */
    set type(_: Components.BqToast['type']);
    /**
   * Placement of toast
   */
    set placement(_: Components.BqToast['placement']);
    /**
   * If true will hide toast icon
   */
    set hideIcon(_: Components.BqToast['hideIcon']);
    /**
   * If true, the toast will be shown
   */
    set open(_: Components.BqToast['open']);
    /**
   * The length of time, in milliseconds, after which the toast will close itself
   */
    set time(_: Components.BqToast['time']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqToast, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqToast, "bq-toast", never, { "border": { "alias": "border"; "required": false; }; "hideIcon": { "alias": "hideIcon"; "required": false; }; "open": { "alias": "open"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "time": { "alias": "time"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], false, never>;
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
    /**
   * If true, the tooltip will always be visible
   */
    set alwaysVisible(_: Components.BqTooltip['alwaysVisible']);
    /**
   * Distance between trigger element and tooltip
   */
    set distance(_: Components.BqTooltip['distance']);
    /**
   * If true, the arrow on the tooltip content won't be shown
   */
    set hideArrow(_: Components.BqTooltip['hideArrow']);
    set placement(_: Components.BqTooltip['placement']);
    /**
   * Whether the tooltip should have the same width as the trigger element
(applicable only for content shorter than the trigger element)
   */
    set sameWidth(_: Components.BqTooltip['sameWidth']);
    /**
   * Set the action when the tooltip should be displayed, on hover (default) or click
   */
    set displayOn(_: Components.BqTooltip['displayOn']);
    /**
   * Indicates whether or not the tooltip is visible when the component is first rendered,
and when interacting with the trigger
   */
    set visible(_: Components.BqTooltip['visible']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<BqTooltip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BqTooltip, "bq-tooltip", never, { "alwaysVisible": { "alias": "alwaysVisible"; "required": false; }; "displayOn": { "alias": "displayOn"; "required": false; }; "distance": { "alias": "distance"; "required": false; }; "hideArrow": { "alias": "hideArrow"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "sameWidth": { "alias": "sameWidth"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface BqTooltip extends Components.BqTooltip {
}
