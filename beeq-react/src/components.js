'use client';
import { BqAccordionGroup as BqAccordionGroupElement, defineCustomElement as defineBqAccordionGroup } from "@beeq/core/dist/components/bq-accordion-group.js";
import { BqAccordion as BqAccordionElement, defineCustomElement as defineBqAccordion } from "@beeq/core/dist/components/bq-accordion.js";
import { BqAlert as BqAlertElement, defineCustomElement as defineBqAlert } from "@beeq/core/dist/components/bq-alert.js";
import { BqAvatar as BqAvatarElement, defineCustomElement as defineBqAvatar } from "@beeq/core/dist/components/bq-avatar.js";
import { BqBadge as BqBadgeElement, defineCustomElement as defineBqBadge } from "@beeq/core/dist/components/bq-badge.js";
import { BqBreadcrumbItem as BqBreadcrumbItemElement, defineCustomElement as defineBqBreadcrumbItem } from "@beeq/core/dist/components/bq-breadcrumb-item.js";
import { BqBreadcrumb as BqBreadcrumbElement, defineCustomElement as defineBqBreadcrumb } from "@beeq/core/dist/components/bq-breadcrumb.js";
import { BqButton as BqButtonElement, defineCustomElement as defineBqButton } from "@beeq/core/dist/components/bq-button.js";
import { BqCard as BqCardElement, defineCustomElement as defineBqCard } from "@beeq/core/dist/components/bq-card.js";
import { BqCheckbox as BqCheckboxElement, defineCustomElement as defineBqCheckbox } from "@beeq/core/dist/components/bq-checkbox.js";
import { BqCol as BqColElement, defineCustomElement as defineBqCol } from "@beeq/core/dist/components/bq-col.js";
import { BqDatePicker as BqDatePickerElement, defineCustomElement as defineBqDatePicker } from "@beeq/core/dist/components/bq-date-picker.js";
import { BqDialog as BqDialogElement, defineCustomElement as defineBqDialog } from "@beeq/core/dist/components/bq-dialog.js";
import { BqDivider as BqDividerElement, defineCustomElement as defineBqDivider } from "@beeq/core/dist/components/bq-divider.js";
import { BqDrawer as BqDrawerElement, defineCustomElement as defineBqDrawer } from "@beeq/core/dist/components/bq-drawer.js";
import { BqDropdown as BqDropdownElement, defineCustomElement as defineBqDropdown } from "@beeq/core/dist/components/bq-dropdown.js";
import { BqEmptyState as BqEmptyStateElement, defineCustomElement as defineBqEmptyState } from "@beeq/core/dist/components/bq-empty-state.js";
import { BqGrid as BqGridElement, defineCustomElement as defineBqGrid } from "@beeq/core/dist/components/bq-grid.js";
import { BqIcon as BqIconElement, defineCustomElement as defineBqIcon } from "@beeq/core/dist/components/bq-icon.js";
import { BqInput as BqInputElement, defineCustomElement as defineBqInput } from "@beeq/core/dist/components/bq-input.js";
import { BqLogo as BqLogoElement, defineCustomElement as defineBqLogo } from "@beeq/core/dist/components/bq-logo.js";
import { BqNotification as BqNotificationElement, defineCustomElement as defineBqNotification } from "@beeq/core/dist/components/bq-notification.js";
import { BqOptionGroup as BqOptionGroupElement, defineCustomElement as defineBqOptionGroup } from "@beeq/core/dist/components/bq-option-group.js";
import { BqOptionList as BqOptionListElement, defineCustomElement as defineBqOptionList } from "@beeq/core/dist/components/bq-option-list.js";
import { BqOption as BqOptionElement, defineCustomElement as defineBqOption } from "@beeq/core/dist/components/bq-option.js";
import { BqPageTitle as BqPageTitleElement, defineCustomElement as defineBqPageTitle } from "@beeq/core/dist/components/bq-page-title.js";
import { BqPanel as BqPanelElement, defineCustomElement as defineBqPanel } from "@beeq/core/dist/components/bq-panel.js";
import { BqProgress as BqProgressElement, defineCustomElement as defineBqProgress } from "@beeq/core/dist/components/bq-progress.js";
import { BqRadioGroup as BqRadioGroupElement, defineCustomElement as defineBqRadioGroup } from "@beeq/core/dist/components/bq-radio-group.js";
import { BqRadio as BqRadioElement, defineCustomElement as defineBqRadio } from "@beeq/core/dist/components/bq-radio.js";
import { BqRow as BqRowElement, defineCustomElement as defineBqRow } from "@beeq/core/dist/components/bq-row.js";
import { BqSelect as BqSelectElement, defineCustomElement as defineBqSelect } from "@beeq/core/dist/components/bq-select.js";
import { BqSideMenuItem as BqSideMenuItemElement, defineCustomElement as defineBqSideMenuItem } from "@beeq/core/dist/components/bq-side-menu-item.js";
import { BqSideMenu as BqSideMenuElement, defineCustomElement as defineBqSideMenu } from "@beeq/core/dist/components/bq-side-menu.js";
import { BqSlider as BqSliderElement, defineCustomElement as defineBqSlider } from "@beeq/core/dist/components/bq-slider.js";
import { BqSpinner as BqSpinnerElement, defineCustomElement as defineBqSpinner } from "@beeq/core/dist/components/bq-spinner.js";
import { BqStatus as BqStatusElement, defineCustomElement as defineBqStatus } from "@beeq/core/dist/components/bq-status.js";
import { BqStepItem as BqStepItemElement, defineCustomElement as defineBqStepItem } from "@beeq/core/dist/components/bq-step-item.js";
import { BqSteps as BqStepsElement, defineCustomElement as defineBqSteps } from "@beeq/core/dist/components/bq-steps.js";
import { BqSwitch as BqSwitchElement, defineCustomElement as defineBqSwitch } from "@beeq/core/dist/components/bq-switch.js";
import { BqTabGroup as BqTabGroupElement, defineCustomElement as defineBqTabGroup } from "@beeq/core/dist/components/bq-tab-group.js";
import { BqTab as BqTabElement, defineCustomElement as defineBqTab } from "@beeq/core/dist/components/bq-tab.js";
import { BqTag as BqTagElement, defineCustomElement as defineBqTag } from "@beeq/core/dist/components/bq-tag.js";
import { BqText as BqTextElement, defineCustomElement as defineBqText } from "@beeq/core/dist/components/bq-text.js";
import { BqTextarea as BqTextareaElement, defineCustomElement as defineBqTextarea } from "@beeq/core/dist/components/bq-textarea.js";
import { BqToast as BqToastElement, defineCustomElement as defineBqToast } from "@beeq/core/dist/components/bq-toast.js";
import { BqTooltip as BqTooltipElement, defineCustomElement as defineBqTooltip } from "@beeq/core/dist/components/bq-tooltip.js";
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';
export const BqAccordion = /*@__PURE__*/ createComponent({
    tagName: 'bq-accordion',
    elementClass: BqAccordionElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onBqBlur: 'bqBlur',
        onBqFocus: 'bqFocus',
        onBqOpen: 'bqOpen',
        onBqAfterOpen: 'bqAfterOpen',
        onBqClose: 'bqClose',
        onBqAfterClose: 'bqAfterClose',
        onBqClick: 'bqClick'
    },
    defineCustomElement: defineBqAccordion
});
export const BqAccordionGroup = /*@__PURE__*/ createComponent({
    tagName: 'bq-accordion-group',
    elementClass: BqAccordionGroupElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {},
    defineCustomElement: defineBqAccordionGroup
});
export const BqAlert = /*@__PURE__*/ createComponent({
    tagName: 'bq-alert',
    elementClass: BqAlertElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onBqHide: 'bqHide',
        onBqShow: 'bqShow',
        onBqAfterShow: 'bqAfterShow',
        onBqAfterHide: 'bqAfterHide'
    },
    defineCustomElement: defineBqAlert
});
export const BqAvatar = /*@__PURE__*/ createComponent({
    tagName: 'bq-avatar',
    elementClass: BqAvatarElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {},
    defineCustomElement: defineBqAvatar
});
export const BqBadge = /*@__PURE__*/ createComponent({
    tagName: 'bq-badge',
    elementClass: BqBadgeElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {},
    defineCustomElement: defineBqBadge
});
export const BqBreadcrumb = /*@__PURE__*/ createComponent({
    tagName: 'bq-breadcrumb',
    elementClass: BqBreadcrumbElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {},
    defineCustomElement: defineBqBreadcrumb
});
export const BqBreadcrumbItem = /*@__PURE__*/ createComponent({
    tagName: 'bq-breadcrumb-item',
    elementClass: BqBreadcrumbItemElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onBqBlur: 'bqBlur',
        onBqFocus: 'bqFocus',
        onBqClick: 'bqClick'
    },
    defineCustomElement: defineBqBreadcrumbItem
});
export const BqButton = /*@__PURE__*/ createComponent({
    tagName: 'bq-button',
    elementClass: BqButtonElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onBqBlur: 'bqBlur',
        onBqFocus: 'bqFocus',
        onBqClick: 'bqClick'
    },
    defineCustomElement: defineBqButton
});
export const BqCard = /*@__PURE__*/ createComponent({
    tagName: 'bq-card',
    elementClass: BqCardElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {},
    defineCustomElement: defineBqCard
});
export const BqCheckbox = /*@__PURE__*/ createComponent({
    tagName: 'bq-checkbox',
    elementClass: BqCheckboxElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onBqChange: 'bqChange',
        onBqFocus: 'bqFocus',
        onBqBlur: 'bqBlur'
    },
    defineCustomElement: defineBqCheckbox
});
export const BqCol = /*@__PURE__*/ createComponent({
    tagName: 'bq-col',
    elementClass: BqColElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {},
    defineCustomElement: defineBqCol
});
export const BqDatePicker = /*@__PURE__*/ createComponent({
    tagName: 'bq-date-picker',
    elementClass: BqDatePickerElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onBqBlur: 'bqBlur',
        onBqChange: 'bqChange',
        onBqClear: 'bqClear',
        onBqFocus: 'bqFocus'
    },
    defineCustomElement: defineBqDatePicker
});
export const BqDialog = /*@__PURE__*/ createComponent({
    tagName: 'bq-dialog',
    elementClass: BqDialogElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onBqCancel: 'bqCancel',
        onBqClose: 'bqClose',
        onBqOpen: 'bqOpen',
        onBqAfterOpen: 'bqAfterOpen',
        onBqAfterClose: 'bqAfterClose'
    },
    defineCustomElement: defineBqDialog
});
export const BqDivider = /*@__PURE__*/ createComponent({
    tagName: 'bq-divider',
    elementClass: BqDividerElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {},
    defineCustomElement: defineBqDivider
});
export const BqDrawer = /*@__PURE__*/ createComponent({
    tagName: 'bq-drawer',
    elementClass: BqDrawerElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onBqClose: 'bqClose',
        onBqOpen: 'bqOpen',
        onBqAfterOpen: 'bqAfterOpen',
        onBqAfterClose: 'bqAfterClose'
    },
    defineCustomElement: defineBqDrawer
});
export const BqDropdown = /*@__PURE__*/ createComponent({
    tagName: 'bq-dropdown',
    elementClass: BqDropdownElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onBqOpen: 'bqOpen' },
    defineCustomElement: defineBqDropdown
});
export const BqEmptyState = /*@__PURE__*/ createComponent({
    tagName: 'bq-empty-state',
    elementClass: BqEmptyStateElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {},
    defineCustomElement: defineBqEmptyState
});
export const BqGrid = /*@__PURE__*/ createComponent({
    tagName: 'bq-grid',
    elementClass: BqGridElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {},
    defineCustomElement: defineBqGrid
});
export const BqIcon = /*@__PURE__*/ createComponent({
    tagName: 'bq-icon',
    elementClass: BqIconElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onSvgLoaded: 'svgLoaded' },
    defineCustomElement: defineBqIcon
});
export const BqInput = /*@__PURE__*/ createComponent({
    tagName: 'bq-input',
    elementClass: BqInputElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onBqBlur: 'bqBlur',
        onBqChange: 'bqChange',
        onBqClear: 'bqClear',
        onBqFocus: 'bqFocus',
        onBqInput: 'bqInput'
    },
    defineCustomElement: defineBqInput
});
export const BqLogo = /*@__PURE__*/ createComponent({
    tagName: 'bq-logo',
    elementClass: BqLogoElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {},
    defineCustomElement: defineBqLogo
});
export const BqNotification = /*@__PURE__*/ createComponent({
    tagName: 'bq-notification',
    elementClass: BqNotificationElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onBqHide: 'bqHide',
        onBqShow: 'bqShow',
        onBqAfterOpen: 'bqAfterOpen',
        onBqAfterClose: 'bqAfterClose'
    },
    defineCustomElement: defineBqNotification
});
export const BqOption = /*@__PURE__*/ createComponent({
    tagName: 'bq-option',
    elementClass: BqOptionElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onBqBlur: 'bqBlur',
        onBqFocus: 'bqFocus',
        onBqClick: 'bqClick',
        onBqEnter: 'bqEnter'
    },
    defineCustomElement: defineBqOption
});
export const BqOptionGroup = /*@__PURE__*/ createComponent({
    tagName: 'bq-option-group',
    elementClass: BqOptionGroupElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {},
    defineCustomElement: defineBqOptionGroup
});
export const BqOptionList = /*@__PURE__*/ createComponent({
    tagName: 'bq-option-list',
    elementClass: BqOptionListElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onBqSelect: 'bqSelect' },
    defineCustomElement: defineBqOptionList
});
export const BqPageTitle = /*@__PURE__*/ createComponent({
    tagName: 'bq-page-title',
    elementClass: BqPageTitleElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {},
    defineCustomElement: defineBqPageTitle
});
export const BqPanel = /*@__PURE__*/ createComponent({
    tagName: 'bq-panel',
    elementClass: BqPanelElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {},
    defineCustomElement: defineBqPanel
});
export const BqProgress = /*@__PURE__*/ createComponent({
    tagName: 'bq-progress',
    elementClass: BqProgressElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {},
    defineCustomElement: defineBqProgress
});
export const BqRadio = /*@__PURE__*/ createComponent({
    tagName: 'bq-radio',
    elementClass: BqRadioElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onBqClick: 'bqClick',
        onBqFocus: 'bqFocus',
        onBqBlur: 'bqBlur',
        onBqKeyDown: 'bqKeyDown'
    },
    defineCustomElement: defineBqRadio
});
export const BqRadioGroup = /*@__PURE__*/ createComponent({
    tagName: 'bq-radio-group',
    elementClass: BqRadioGroupElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onBqChange: 'bqChange' },
    defineCustomElement: defineBqRadioGroup
});
export const BqRow = /*@__PURE__*/ createComponent({
    tagName: 'bq-row',
    elementClass: BqRowElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {},
    defineCustomElement: defineBqRow
});
export const BqSelect = /*@__PURE__*/ createComponent({
    tagName: 'bq-select',
    elementClass: BqSelectElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onBqBlur: 'bqBlur',
        onBqClear: 'bqClear',
        onBqFocus: 'bqFocus',
        onBqSelect: 'bqSelect'
    },
    defineCustomElement: defineBqSelect
});
export const BqSideMenu = /*@__PURE__*/ createComponent({
    tagName: 'bq-side-menu',
    elementClass: BqSideMenuElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onBqCollapse: 'bqCollapse',
        onBqSelect: 'bqSelect'
    },
    defineCustomElement: defineBqSideMenu
});
export const BqSideMenuItem = /*@__PURE__*/ createComponent({
    tagName: 'bq-side-menu-item',
    elementClass: BqSideMenuItemElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onBqBlur: 'bqBlur',
        onBqFocus: 'bqFocus',
        onBqClick: 'bqClick'
    },
    defineCustomElement: defineBqSideMenuItem
});
export const BqSlider = /*@__PURE__*/ createComponent({
    tagName: 'bq-slider',
    elementClass: BqSliderElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onBqChange: 'bqChange',
        onBqBlur: 'bqBlur',
        onBqFocus: 'bqFocus'
    },
    defineCustomElement: defineBqSlider
});
export const BqSpinner = /*@__PURE__*/ createComponent({
    tagName: 'bq-spinner',
    elementClass: BqSpinnerElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {},
    defineCustomElement: defineBqSpinner
});
export const BqStatus = /*@__PURE__*/ createComponent({
    tagName: 'bq-status',
    elementClass: BqStatusElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {},
    defineCustomElement: defineBqStatus
});
export const BqStepItem = /*@__PURE__*/ createComponent({
    tagName: 'bq-step-item',
    elementClass: BqStepItemElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onBqClick: 'bqClick' },
    defineCustomElement: defineBqStepItem
});
export const BqSteps = /*@__PURE__*/ createComponent({
    tagName: 'bq-steps',
    elementClass: BqStepsElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {},
    defineCustomElement: defineBqSteps
});
export const BqSwitch = /*@__PURE__*/ createComponent({
    tagName: 'bq-switch',
    elementClass: BqSwitchElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onBqChange: 'bqChange',
        onBqFocus: 'bqFocus',
        onBqBlur: 'bqBlur'
    },
    defineCustomElement: defineBqSwitch
});
export const BqTab = /*@__PURE__*/ createComponent({
    tagName: 'bq-tab',
    elementClass: BqTabElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onBqClick: 'bqClick',
        onBqFocus: 'bqFocus',
        onBqBlur: 'bqBlur',
        onBqKeyDown: 'bqKeyDown'
    },
    defineCustomElement: defineBqTab
});
export const BqTabGroup = /*@__PURE__*/ createComponent({
    tagName: 'bq-tab-group',
    elementClass: BqTabGroupElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onBqChange: 'bqChange' },
    defineCustomElement: defineBqTabGroup
});
export const BqTag = /*@__PURE__*/ createComponent({
    tagName: 'bq-tag',
    elementClass: BqTagElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onBqClose: 'bqClose',
        onBqOpen: 'bqOpen',
        onBqBlur: 'bqBlur',
        onBqClick: 'bqClick',
        onBqFocus: 'bqFocus'
    },
    defineCustomElement: defineBqTag
});
export const BqText = /*@__PURE__*/ createComponent({
    tagName: 'bq-text',
    elementClass: BqTextElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {},
    defineCustomElement: defineBqText
});
export const BqTextarea = /*@__PURE__*/ createComponent({
    tagName: 'bq-textarea',
    elementClass: BqTextareaElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onBqBlur: 'bqBlur',
        onBqChange: 'bqChange',
        onBqClear: 'bqClear',
        onBqFocus: 'bqFocus',
        onBqInput: 'bqInput'
    },
    defineCustomElement: defineBqTextarea
});
export const BqToast = /*@__PURE__*/ createComponent({
    tagName: 'bq-toast',
    elementClass: BqToastElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onBqHide: 'bqHide',
        onBqShow: 'bqShow'
    },
    defineCustomElement: defineBqToast
});
export const BqTooltip = /*@__PURE__*/ createComponent({
    tagName: 'bq-tooltip',
    elementClass: BqTooltipElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {},
    defineCustomElement: defineBqTooltip
});
//# sourceMappingURL=components.js.map