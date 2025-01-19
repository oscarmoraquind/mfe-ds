import { EventEmitter } from '../../stencil-public-runtime';
import { Placement } from '../../services/interfaces';
import { TInputValidation } from '../input/bq-input.types';
export type TSelectValue = string | string[];
/**
 * The select input component lets users choose from a predefined list, commonly used in forms for easy data selection.
 *
 * @example How to use it
 * ```html
 * <bq-select placeholder="Placeholder">
 *   <label slot="label">Select label</label>
 *   <span slot="helper-text">
 *     <bq-icon name="star"></bq-icon>
 *       Helper text
 *   </span>
 *
 *   <bq-option value="1">Option 1</bq-option>
 *   <bq-option value="2">Option 2</bq-option>
 *   <bq-option value="3">Option 3</bq-option>
 * </bq-select>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/41989d-select/b/09d7b1
 * @status stable
 *
 * @dependency bq-button
 * @dependency bq-dropdown
 * @dependency bq-icon
 * @dependency bq-option-list
 * @dependency bq-tag
 *
 * @attr {boolean} autofocus - If `true`, the Select input will be focused on component render.
 * @attr {string} clear-button-label - The clear button aria label.
 * @attr {number} debounce-time - The amount of time, in milliseconds, to wait before emitting the `bqInput` event after the input value changes.
 * @attr {boolean} disable-clear - If `true`, the clear button won't be displayed.
 * @attr {boolean} disabled - Indicates whether the Select input is disabled and cannot be interacted with.
 * @attr {number} distance - Represents the distance (gutter or margin) between the Select panel and the input element.
 * @attr {string} form - The ID of the form that Select input field belongs to.
 * @attr {boolean} keep-open-on-select - If `true`, the Select panel will remain open after a selection is made.
 * @attr {number} max-tags-visible - The maximum number of tags to display when multiple selection is enabled.
 * @attr {boolean} multiple - If `true`, the Select input will allow multiple selections.
 * @attr {string} name - The Select input name.
 * @attr {boolean} open - If `true`, the Select panel will be visible.
 * @attr {string} panel-height - When set, it will override the height of the Select panel.
 * @attr {string} placeholder - The Select input placeholder text value.
 * @attr {"bottom" | "bottom-end" | "bottom-start" | "left" | "left-end" | "left-start" | "right" | "right-end" | "right-start" | "top" | "top-end" | "top-start"} placement - Position of the Select panel.
 * @attr {boolean} readonly - If `true`, the Select input cannot be modified.
 * @attr {boolean} required - Indicates whether or not the Select input is required to be filled out before submitting the form.
 * @attr {boolean} same-width - Whether the panel should have the Select same width as the input element.
 * @attr {number} skidding - Represents the skidding between the Select panel and the input element.
 * @attr {"absolute" | "fixed"} strategy - Defines the strategy to position the Select panel.
 * @attr {"error" | "success" | "warning" | "none"} validation-status - The validation status of the Select input.
 * @attr {"number" | "string" | "string[]"} value - The select input value can be used to reset the field to a previous value.
 *
 * @method clear - Method to be called to clear the selected value.
 *
 * @event bqBlur - The callback handler is emitted when the Select input loses focus.
 * @event bqClear - The callback handler is emitted when the selected value has been cleared.
 * @event bqFocus - A callback handler is emitted when the Select input has received focus.
 * @event bqSelect - The callback handler is emitted when the selected value has changed.
 *
 * @slot label - The label slot container.
 * @slot prefix - The prefix slot container.
 * @slot tags - The tags slot container.
 * @slot clear-icon - The clear icon slot container.
 * @slot suffix - The suffix slot container.
 * @slot helper-text - The helper text slot container.
 *
 * @part base - The component's base wrapper.
 * @part button - The native HTML button used under the hood in the clear button.
 * @part clear-btn - The clear button.
 * @part control - The input control wrapper.
 * @part input-outline - The input outline wrapper that holds the tags container and the native HTML input used under the hood.
 * @part helper-text - The helper text slot container.
 * @part input - The native HTML input element used under the hood.
 * @part label - The label slot container.
 * @part panel - The select panel container
 * @part prefix - The prefix slot container.
 * @part suffix - The suffix slot container.
 * @part tags - The tags container of the BqTags for multiple selection.
 * @part tag - The tag container of the BqTag for multiple selection.
 * @part tag__base - The base wrapper of the BqTag for multiple selection.
 * @part tag__prefix - The prefix slot container of the BqTag for multiple selection.
 * @part tag__text - The text slot container of the BqTag for multiple selection.
 * @part tag__btn-close - The close button of the BqTag for multiple selection.
 * @part option-list - The option list container.
 *
 * @cssprop --bq-select--background-color - Select background color
 * @cssprop --bq-select--border-color - Select border color
 * @cssprop --bq-select--border-color-focus - Select border color on focus
 * @cssprop --bq-select--border-color-disabled - Select border color when disabled
 * @cssprop --bq-select--border-radius - Select border radius
 * @cssprop --bq-select--border-width - Select border width
 * @cssprop --bq-select--border-style - Select border style
 * @cssprop --bq-select--gap - Gap between Select content and prefix/suffix
 * @cssprop --bq-select--helper-margin-top - Helper text margin top
 * @cssprop --bq-select--helper-text-color - Helper text color
 * @cssprop --bq-select--helper-text-size - Helper text size
 * @cssprop --bq-select--icon-size - Icon size to use in prefix/suffix and clear button
 * @cssprop --bq-select--label-margin-bottom - Select label margin bottom
 * @cssprop --bq-select--label-text-color - Select label text color
 * @cssprop --bq-select--label-text-size - Select label text size
 * @cssprop --bq-select--padding-start - Select padding start
 * @cssprop --bq-select--padding-end - Select padding end
 * @cssprop --bq-select--paddingY - Select padding top and bottom
 * @cssprop --bq-select--text-color - Select text color
 * @cssprop --bq-select--text-size - Select text size
 * @cssprop --bq-select--text-placeholder-color - Select placeholder text color
 */
export declare class BqSelect {
    private helperTextElem?;
    private inputElem?;
    private labelElem?;
    private prefixElem?;
    private suffixElem?;
    private debounceQuery;
    private fallbackInputId;
    el: HTMLBqSelectElement;
    internals: ElementInternals;
    displayValue?: string;
    hasHelperText: boolean;
    selectedOptions: HTMLBqOptionElement[];
    hasLabel: boolean;
    hasPrefix: boolean;
    hasSuffix: boolean;
    hasValue: boolean;
    /** If true, the Select input will be focused on component render */
    autofocus: boolean;
    /** The clear button aria label */
    clearButtonLabel?: string;
    /**
     * The amount of time, in milliseconds, to wait before emitting the `bqInput` event after the input value changes.
     * A value of 0 means no debouncing will occur.
     */
    debounceTime?: number;
    /**
     * Indicates whether the Select input is disabled or not.
     * If `true`, the Select is disabled and cannot be interacted with.
     */
    disabled?: boolean;
    /** If true, the clear button won't be displayed */
    disableClear?: boolean;
    /** Represents the distance (gutter or margin) between the Select panel and the input element. */
    distance?: number;
    /** The ID of the form that the Select input belongs to. */
    form?: string;
    /** If true, the Select panel will remain open after a selection is made. */
    keepOpenOnSelect?: boolean;
    /** The Select input name. */
    name: string;
    /** The maximum number of tags to display when multiple selection is enabled */
    maxTagsVisible: number;
    /** If true, the Select input will allow multiple selections. */
    multiple?: boolean;
    /** If true, the Select panel will be visible. */
    open?: boolean;
    /** When set, it will override the height of the Select panel. */
    panelHeight?: string;
    /** The Select input placeholder text value */
    placeholder?: string;
    /** Position of the Select panel */
    placement?: Placement;
    /** If true, the list of options cannot be filtered (searching won't be available) */
    readonly?: boolean;
    /** Indicates whether or not the Select input is required to be filled out before submitting the form. */
    required?: boolean;
    /** Whether the panel should have the Select same width as the input element */
    sameWidth?: boolean;
    /**  Represents the skidding between the Select panel and the input element. */
    skidding?: number;
    /** Defines the strategy to position the Select panel */
    strategy?: 'fixed' | 'absolute';
    /**
     * The validation status of the Select input.
     *
     * @remarks
     * This property is used to indicate the validation status of the select input. It can be set to one of the following values:
     * - `'none'`: No validation status is set.
     * - `'error'`: The input has a validation error.
     * - `'warning'`: The input has a validation warning.
     * - `'success'`: The input has passed validation.
     */
    validationStatus: TInputValidation;
    /** The select input value, it can be used to reset the field to a previous value */
    value: TSelectValue;
    handleValueChange(): void;
    /** Callback handler emitted when the Select input loses focus */
    bqBlur: EventEmitter<HTMLBqSelectElement>;
    /** Callback handler emitted when the selected value has been cleared */
    bqClear: EventEmitter<HTMLBqSelectElement>;
    /** Callback handler emitted when the Select input has received focus */
    bqFocus: EventEmitter<HTMLBqSelectElement>;
    /** Callback handler emitted when the selected value has changed */
    bqSelect: EventEmitter<{
        value: string | number | string[];
        item: HTMLBqOptionElement;
    }>;
    connectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    formAssociatedCallback(): void;
    formResetCallback(): Promise<void>;
    handleOpenChange(ev: CustomEvent<{
        open: boolean;
    }>): void;
    stopOptionFocusBlurPropagation(ev: CustomEvent): void;
    /**
     * Clears the selected value.
     *
     * @return {Promise<void>}
     * @memberof BqSelect
     */
    clear(): Promise<void>;
    private initMultipleValue;
    private handleBlur;
    private handleFocus;
    private handleSelect;
    private handleMultipleSelection;
    private handleSearchFilter;
    private handleClearClick;
    private handleTagRemove;
    private handleLabelSlotChange;
    private handlePrefixSlotChange;
    private handleSuffixSlotChange;
    private handleHelperTextSlotChange;
    private resetOptionsVisibility;
    private syncItemsFromValue;
    /**
     * Syncs the selected state of the BqOption elements which value is included in the `value` property.
     * Notice that value can be a string or an array of strings.
     *
     * @private
     * @memberof BqSelect
     */
    private syncSelectedOptionsState;
    /**
     * Updates the display value of the input element based on the selected option.
     *
     * @private
     * @memberof BqSelect
     */
    private updateDisplayLabel;
    private getOptionLabel;
    private get options();
    private get displayPlaceholder();
    private get displayTags();
    private get hasClearIcon();
    render(): any;
}
