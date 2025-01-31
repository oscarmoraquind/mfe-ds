/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { type BqAccordionCustomEvent, type BqBreadcrumbItemCustomEvent, type BqButtonCustomEvent, type BqCheckboxCustomEvent, type BqDatePickerCustomEvent, type BqInputCustomEvent, type BqOptionCustomEvent, type BqOptionListCustomEvent, type BqRadioCustomEvent, type BqRadioGroupCustomEvent, type BqSelectCustomEvent, type BqSideMenuCustomEvent, type BqSideMenuItemCustomEvent, type BqSliderCustomEvent, type BqStepItemCustomEvent, type BqSwitchCustomEvent, type BqTabCustomEvent, type BqTabGroupCustomEvent, type BqTagCustomEvent, type BqTextareaCustomEvent, type BqToastCustomEvent, type TSliderValue } from "@beeq/core";
import { BqAccordionGroup as BqAccordionGroupElement } from "@beeq/core/dist/components/bq-accordion-group.js";
import { BqAccordion as BqAccordionElement } from "@beeq/core/dist/components/bq-accordion.js";
import { BqAlert as BqAlertElement } from "@beeq/core/dist/components/bq-alert.js";
import { BqAvatar as BqAvatarElement } from "@beeq/core/dist/components/bq-avatar.js";
import { BqBadge as BqBadgeElement } from "@beeq/core/dist/components/bq-badge.js";
import { BqBreadcrumbItem as BqBreadcrumbItemElement } from "@beeq/core/dist/components/bq-breadcrumb-item.js";
import { BqBreadcrumb as BqBreadcrumbElement } from "@beeq/core/dist/components/bq-breadcrumb.js";
import { BqButton as BqButtonElement } from "@beeq/core/dist/components/bq-button.js";
import { BqCard as BqCardElement } from "@beeq/core/dist/components/bq-card.js";
import { BqCheckbox as BqCheckboxElement } from "@beeq/core/dist/components/bq-checkbox.js";
import { BqCol as BqColElement } from "@beeq/core/dist/components/bq-col.js";
import { BqDatePicker as BqDatePickerElement } from "@beeq/core/dist/components/bq-date-picker.js";
import { BqDialog as BqDialogElement } from "@beeq/core/dist/components/bq-dialog.js";
import { BqDivider as BqDividerElement } from "@beeq/core/dist/components/bq-divider.js";
import { BqDrawer as BqDrawerElement } from "@beeq/core/dist/components/bq-drawer.js";
import { BqDropdown as BqDropdownElement } from "@beeq/core/dist/components/bq-dropdown.js";
import { BqEmptyState as BqEmptyStateElement } from "@beeq/core/dist/components/bq-empty-state.js";
import { BqGrid as BqGridElement } from "@beeq/core/dist/components/bq-grid.js";
import { BqIcon as BqIconElement } from "@beeq/core/dist/components/bq-icon.js";
import { BqInput as BqInputElement } from "@beeq/core/dist/components/bq-input.js";
import { BqLogo as BqLogoElement } from "@beeq/core/dist/components/bq-logo.js";
import { BqNotification as BqNotificationElement } from "@beeq/core/dist/components/bq-notification.js";
import { BqOptionGroup as BqOptionGroupElement } from "@beeq/core/dist/components/bq-option-group.js";
import { BqOptionList as BqOptionListElement } from "@beeq/core/dist/components/bq-option-list.js";
import { BqOption as BqOptionElement } from "@beeq/core/dist/components/bq-option.js";
import { BqPageTitle as BqPageTitleElement } from "@beeq/core/dist/components/bq-page-title.js";
import { BqPanel as BqPanelElement } from "@beeq/core/dist/components/bq-panel.js";
import { BqProgress as BqProgressElement } from "@beeq/core/dist/components/bq-progress.js";
import { BqRadioGroup as BqRadioGroupElement } from "@beeq/core/dist/components/bq-radio-group.js";
import { BqRadio as BqRadioElement } from "@beeq/core/dist/components/bq-radio.js";
import { BqRow as BqRowElement } from "@beeq/core/dist/components/bq-row.js";
import { BqSelect as BqSelectElement } from "@beeq/core/dist/components/bq-select.js";
import { BqSideMenuItem as BqSideMenuItemElement } from "@beeq/core/dist/components/bq-side-menu-item.js";
import { BqSideMenu as BqSideMenuElement } from "@beeq/core/dist/components/bq-side-menu.js";
import { BqSlider as BqSliderElement } from "@beeq/core/dist/components/bq-slider.js";
import { BqSpinner as BqSpinnerElement } from "@beeq/core/dist/components/bq-spinner.js";
import { BqStatus as BqStatusElement } from "@beeq/core/dist/components/bq-status.js";
import { BqStepItem as BqStepItemElement } from "@beeq/core/dist/components/bq-step-item.js";
import { BqSteps as BqStepsElement } from "@beeq/core/dist/components/bq-steps.js";
import { BqSwitch as BqSwitchElement } from "@beeq/core/dist/components/bq-switch.js";
import { BqTabGroup as BqTabGroupElement } from "@beeq/core/dist/components/bq-tab-group.js";
import { BqTab as BqTabElement } from "@beeq/core/dist/components/bq-tab.js";
import { BqTag as BqTagElement } from "@beeq/core/dist/components/bq-tag.js";
import { BqText as BqTextElement } from "@beeq/core/dist/components/bq-text.js";
import { BqTextarea as BqTextareaElement } from "@beeq/core/dist/components/bq-textarea.js";
import { BqToast as BqToastElement } from "@beeq/core/dist/components/bq-toast.js";
import { BqTooltip as BqTooltipElement } from "@beeq/core/dist/components/bq-tooltip.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
type BqAccordionEvents = {
    onBqBlur: EventName<BqAccordionCustomEvent<HTMLBqAccordionElement>>;
    onBqFocus: EventName<BqAccordionCustomEvent<HTMLBqAccordionElement>>;
    onBqOpen: EventName<BqAccordionCustomEvent<HTMLBqAccordionElement>>;
    onBqAfterOpen: EventName<BqAccordionCustomEvent<HTMLBqAccordionElement>>;
    onBqClose: EventName<BqAccordionCustomEvent<HTMLBqAccordionElement>>;
    onBqAfterClose: EventName<BqAccordionCustomEvent<HTMLBqAccordionElement>>;
    onBqClick: EventName<BqAccordionCustomEvent<HTMLBqAccordionElement>>;
};
export declare const BqAccordion: StencilReactComponent<BqAccordionElement, BqAccordionEvents>;
type BqAccordionGroupEvents = NonNullable<unknown>;
export declare const BqAccordionGroup: StencilReactComponent<BqAccordionGroupElement, BqAccordionGroupEvents>;
type BqAlertEvents = {
    onBqHide: EventName<CustomEvent<any>>;
    onBqShow: EventName<CustomEvent<any>>;
    onBqAfterShow: EventName<CustomEvent<any>>;
    onBqAfterHide: EventName<CustomEvent<any>>;
};
export declare const BqAlert: StencilReactComponent<BqAlertElement, BqAlertEvents>;
type BqAvatarEvents = NonNullable<unknown>;
export declare const BqAvatar: StencilReactComponent<BqAvatarElement, BqAvatarEvents>;
type BqBadgeEvents = NonNullable<unknown>;
export declare const BqBadge: StencilReactComponent<BqBadgeElement, BqBadgeEvents>;
type BqBreadcrumbEvents = NonNullable<unknown>;
export declare const BqBreadcrumb: StencilReactComponent<BqBreadcrumbElement, BqBreadcrumbEvents>;
type BqBreadcrumbItemEvents = {
    onBqBlur: EventName<BqBreadcrumbItemCustomEvent<HTMLBqBreadcrumbItemElement>>;
    onBqFocus: EventName<BqBreadcrumbItemCustomEvent<HTMLBqBreadcrumbItemElement>>;
    onBqClick: EventName<BqBreadcrumbItemCustomEvent<HTMLBqBreadcrumbItemElement>>;
};
export declare const BqBreadcrumbItem: StencilReactComponent<BqBreadcrumbItemElement, BqBreadcrumbItemEvents>;
type BqButtonEvents = {
    onBqBlur: EventName<BqButtonCustomEvent<HTMLBqButtonElement>>;
    onBqFocus: EventName<BqButtonCustomEvent<HTMLBqButtonElement>>;
    onBqClick: EventName<BqButtonCustomEvent<HTMLBqButtonElement>>;
};
export declare const BqButton: StencilReactComponent<BqButtonElement, BqButtonEvents>;
type BqCardEvents = NonNullable<unknown>;
export declare const BqCard: StencilReactComponent<BqCardElement, BqCardEvents>;
type BqCheckboxEvents = {
    onBqChange: EventName<CustomEvent<{
        checked: boolean;
    }>>;
    onBqFocus: EventName<BqCheckboxCustomEvent<HTMLBqCheckboxElement>>;
    onBqBlur: EventName<BqCheckboxCustomEvent<HTMLBqCheckboxElement>>;
};
export declare const BqCheckbox: StencilReactComponent<BqCheckboxElement, BqCheckboxEvents>;
type BqColEvents = NonNullable<unknown>;
export declare const BqCol: StencilReactComponent<BqColElement, BqColEvents>;
type BqDatePickerEvents = {
    onBqBlur: EventName<BqDatePickerCustomEvent<HTMLBqDatePickerElement>>;
    onBqChange: EventName<BqDatePickerCustomEvent<{
        value: string;
        el: HTMLBqDatePickerElement;
    }>>;
    onBqClear: EventName<BqDatePickerCustomEvent<HTMLBqDatePickerElement>>;
    onBqFocus: EventName<BqDatePickerCustomEvent<HTMLBqDatePickerElement>>;
};
export declare const BqDatePicker: StencilReactComponent<BqDatePickerElement, BqDatePickerEvents>;
type BqDialogEvents = {
    onBqCancel: EventName<CustomEvent<void>>;
    onBqClose: EventName<CustomEvent<void>>;
    onBqOpen: EventName<CustomEvent<void>>;
    onBqAfterOpen: EventName<CustomEvent<void>>;
    onBqAfterClose: EventName<CustomEvent<void>>;
};
export declare const BqDialog: StencilReactComponent<BqDialogElement, BqDialogEvents>;
type BqDividerEvents = NonNullable<unknown>;
export declare const BqDivider: StencilReactComponent<BqDividerElement, BqDividerEvents>;
type BqDrawerEvents = {
    onBqClose: EventName<CustomEvent<any>>;
    onBqOpen: EventName<CustomEvent<any>>;
    onBqAfterOpen: EventName<CustomEvent<any>>;
    onBqAfterClose: EventName<CustomEvent<any>>;
};
export declare const BqDrawer: StencilReactComponent<BqDrawerElement, BqDrawerEvents>;
type BqDropdownEvents = {
    onBqOpen: EventName<CustomEvent<{
        open: boolean;
    }>>;
};
export declare const BqDropdown: StencilReactComponent<BqDropdownElement, BqDropdownEvents>;
type BqEmptyStateEvents = NonNullable<unknown>;
export declare const BqEmptyState: StencilReactComponent<BqEmptyStateElement, BqEmptyStateEvents>;
type BqGridEvents = NonNullable<unknown>;
export declare const BqGrid: StencilReactComponent<BqGridElement, BqGridEvents>;
type BqIconEvents = {
    onSvgLoaded: EventName<CustomEvent<any>>;
};
export declare const BqIcon: StencilReactComponent<BqIconElement, BqIconEvents>;
type BqInputEvents = {
    onBqBlur: EventName<BqInputCustomEvent<HTMLBqInputElement>>;
    onBqChange: EventName<BqInputCustomEvent<{
        value: string | number | string[];
        el: HTMLBqInputElement;
    }>>;
    onBqClear: EventName<BqInputCustomEvent<HTMLBqInputElement>>;
    onBqFocus: EventName<BqInputCustomEvent<HTMLBqInputElement>>;
    onBqInput: EventName<BqInputCustomEvent<{
        value: string | number | string[];
        el: HTMLBqInputElement;
    }>>;
};
export declare const BqInput: StencilReactComponent<BqInputElement, BqInputEvents>;
type BqLogoEvents = NonNullable<unknown>;
export declare const BqLogo: StencilReactComponent<BqLogoElement, BqLogoEvents>;
type BqNotificationEvents = {
    onBqHide: EventName<CustomEvent<any>>;
    onBqShow: EventName<CustomEvent<any>>;
    onBqAfterOpen: EventName<CustomEvent<any>>;
    onBqAfterClose: EventName<CustomEvent<any>>;
};
export declare const BqNotification: StencilReactComponent<BqNotificationElement, BqNotificationEvents>;
type BqOptionEvents = {
    onBqBlur: EventName<BqOptionCustomEvent<HTMLBqOptionElement>>;
    onBqFocus: EventName<BqOptionCustomEvent<HTMLBqOptionElement>>;
    onBqClick: EventName<BqOptionCustomEvent<HTMLBqOptionElement>>;
    onBqEnter: EventName<BqOptionCustomEvent<HTMLBqOptionElement>>;
};
export declare const BqOption: StencilReactComponent<BqOptionElement, BqOptionEvents>;
type BqOptionGroupEvents = NonNullable<unknown>;
export declare const BqOptionGroup: StencilReactComponent<BqOptionGroupElement, BqOptionGroupEvents>;
type BqOptionListEvents = {
    onBqSelect: EventName<BqOptionListCustomEvent<{
        value: string;
        item: HTMLBqOptionElement;
    }>>;
};
export declare const BqOptionList: StencilReactComponent<BqOptionListElement, BqOptionListEvents>;
type BqPageTitleEvents = NonNullable<unknown>;
export declare const BqPageTitle: StencilReactComponent<BqPageTitleElement, BqPageTitleEvents>;
type BqPanelEvents = NonNullable<unknown>;
export declare const BqPanel: StencilReactComponent<BqPanelElement, BqPanelEvents>;
type BqProgressEvents = NonNullable<unknown>;
export declare const BqProgress: StencilReactComponent<BqProgressElement, BqProgressEvents>;
type BqRadioEvents = {
    onBqClick: EventName<BqRadioCustomEvent<HTMLBqRadioElement>>;
    onBqFocus: EventName<BqRadioCustomEvent<HTMLBqRadioElement>>;
    onBqBlur: EventName<BqRadioCustomEvent<HTMLBqRadioElement>>;
    onBqKeyDown: EventName<BqRadioCustomEvent<KeyboardEvent>>;
};
export declare const BqRadio: StencilReactComponent<BqRadioElement, BqRadioEvents>;
type BqRadioGroupEvents = {
    onBqChange: EventName<BqRadioGroupCustomEvent<{
        value: string;
        target: HTMLBqRadioElement;
    }>>;
};
export declare const BqRadioGroup: StencilReactComponent<BqRadioGroupElement, BqRadioGroupEvents>;
type BqRowEvents = NonNullable<unknown>;
export declare const BqRow: StencilReactComponent<BqRowElement, BqRowEvents>;
type BqSelectEvents = {
    onBqBlur: EventName<BqSelectCustomEvent<HTMLBqSelectElement>>;
    onBqClear: EventName<BqSelectCustomEvent<HTMLBqSelectElement>>;
    onBqFocus: EventName<BqSelectCustomEvent<HTMLBqSelectElement>>;
    onBqSelect: EventName<BqSelectCustomEvent<{
        value: string | number | string[];
        item: HTMLBqOptionElement;
    }>>;
};
export declare const BqSelect: StencilReactComponent<BqSelectElement, BqSelectEvents>;
type BqSideMenuEvents = {
    onBqCollapse: EventName<CustomEvent<{
        collapse: boolean;
    }>>;
    onBqSelect: EventName<BqSideMenuCustomEvent<HTMLBqSideMenuItemElement>>;
};
export declare const BqSideMenu: StencilReactComponent<BqSideMenuElement, BqSideMenuEvents>;
type BqSideMenuItemEvents = {
    onBqBlur: EventName<BqSideMenuItemCustomEvent<HTMLBqSideMenuItemElement>>;
    onBqFocus: EventName<BqSideMenuItemCustomEvent<HTMLBqSideMenuItemElement>>;
    onBqClick: EventName<BqSideMenuItemCustomEvent<HTMLBqSideMenuItemElement>>;
};
export declare const BqSideMenuItem: StencilReactComponent<BqSideMenuItemElement, BqSideMenuItemEvents>;
type BqSliderEvents = {
    onBqChange: EventName<BqSliderCustomEvent<{
        value: Exclude<TSliderValue, string>;
        el: HTMLBqSliderElement;
    }>>;
    onBqBlur: EventName<BqSliderCustomEvent<HTMLBqSliderElement>>;
    onBqFocus: EventName<BqSliderCustomEvent<HTMLBqSliderElement>>;
};
export declare const BqSlider: StencilReactComponent<BqSliderElement, BqSliderEvents>;
type BqSpinnerEvents = NonNullable<unknown>;
export declare const BqSpinner: StencilReactComponent<BqSpinnerElement, BqSpinnerEvents>;
type BqStatusEvents = NonNullable<unknown>;
export declare const BqStatus: StencilReactComponent<BqStatusElement, BqStatusEvents>;
type BqStepItemEvents = {
    onBqClick: EventName<BqStepItemCustomEvent<{
        target: HTMLBqStepItemElement;
        value: string;
    }>>;
};
export declare const BqStepItem: StencilReactComponent<BqStepItemElement, BqStepItemEvents>;
type BqStepsEvents = NonNullable<unknown>;
export declare const BqSteps: StencilReactComponent<BqStepsElement, BqStepsEvents>;
type BqSwitchEvents = {
    onBqChange: EventName<CustomEvent<{
        checked: boolean;
    }>>;
    onBqFocus: EventName<BqSwitchCustomEvent<HTMLBqSwitchElement>>;
    onBqBlur: EventName<BqSwitchCustomEvent<HTMLBqSwitchElement>>;
};
export declare const BqSwitch: StencilReactComponent<BqSwitchElement, BqSwitchEvents>;
type BqTabEvents = {
    onBqClick: EventName<BqTabCustomEvent<HTMLBqTabElement>>;
    onBqFocus: EventName<BqTabCustomEvent<HTMLBqTabElement>>;
    onBqBlur: EventName<BqTabCustomEvent<HTMLBqTabElement>>;
    onBqKeyDown: EventName<BqTabCustomEvent<KeyboardEvent>>;
};
export declare const BqTab: StencilReactComponent<BqTabElement, BqTabEvents>;
type BqTabGroupEvents = {
    onBqChange: EventName<BqTabGroupCustomEvent<{
        target: HTMLBqTabElement;
        value: string;
    }>>;
};
export declare const BqTabGroup: StencilReactComponent<BqTabGroupElement, BqTabGroupEvents>;
type BqTagEvents = {
    onBqClose: EventName<CustomEvent<any>>;
    onBqOpen: EventName<CustomEvent<any>>;
    onBqBlur: EventName<BqTagCustomEvent<HTMLBqTagElement>>;
    onBqClick: EventName<BqTagCustomEvent<HTMLBqTagElement>>;
    onBqFocus: EventName<BqTagCustomEvent<HTMLBqTagElement>>;
};
export declare const BqTag: StencilReactComponent<BqTagElement, BqTagEvents>;
type BqTextEvents = NonNullable<unknown>;
export declare const BqText: StencilReactComponent<BqTextElement, BqTextEvents>;
type BqTextareaEvents = {
    onBqBlur: EventName<BqTextareaCustomEvent<HTMLBqTextareaElement>>;
    onBqChange: EventName<BqTextareaCustomEvent<{
        value: string;
        el: HTMLBqTextareaElement;
    }>>;
    onBqClear: EventName<BqTextareaCustomEvent<HTMLBqTextareaElement>>;
    onBqFocus: EventName<BqTextareaCustomEvent<HTMLBqTextareaElement>>;
    onBqInput: EventName<BqTextareaCustomEvent<{
        value: string;
        el: HTMLBqTextareaElement;
    }>>;
};
export declare const BqTextarea: StencilReactComponent<BqTextareaElement, BqTextareaEvents>;
type BqToastEvents = {
    onBqHide: EventName<BqToastCustomEvent<HTMLBqToastElement>>;
    onBqShow: EventName<BqToastCustomEvent<HTMLBqToastElement>>;
};
export declare const BqToast: StencilReactComponent<BqToastElement, BqToastEvents>;
type BqTooltipEvents = NonNullable<unknown>;
export declare const BqTooltip: StencilReactComponent<BqTooltipElement, BqTooltipEvents>;
export {};
