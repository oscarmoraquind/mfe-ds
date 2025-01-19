import { EventEmitter } from '../../stencil-public-runtime';
import { TInputType, TInputValidation, TInputValue } from './bq-input.types';
/**
 * The Input component is a fundamental user interface element that allows users to input data by typing it into a text field.
 * It is commonly used in web and mobile applications for various purposes, such as collecting user information, search inputs, and login forms.
 *
 * @example How to use it
 * ```html
 * <bq-input name="username" label="Username" placeholder="Enter your username"></bq-input>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/980362-input
 * @status stable
 *
 * @dependency bq-button
 * @dependency bq-icon
 *
 * @attr {string} autocapitalize - Controls whether or not the input field should be capitalized and how.
 * @attr {string} autocomplete - Specifies whether or not the input field should have autocomplete enabled.
 * @attr {string} autocorrect - Controls whether or not the input field should have autocorrect enabled.
 * @attr {boolean} autofocus - If true, the input will be focused on component render.
 * @attr {string} clear-button-label - The clear button aria label.
 * @attr {number} debounce-time - The amount of time, in milliseconds, to wait before emitting the `bqInput` event after the input value changes.
 * @attr {boolean} disabled - Indicates whether the input is disabled or not.
 * @attr {boolean} disable-clear - If true, the clear button won't be displayed.
 * @attr {string} form - The ID of the form that the input field belongs to.
 * @attr {string} form-validation-message - The native form validation message (mandatory if `required` is set).
 * @attr {string} inputmode - The inputmode attribute specifies what kind of input mechanism would be most helpful for users entering content into the input field.
 * @attr {number | string} max - The maximum value that the input field can accept.
 * @attr {number} maxlength - The maximum number of characters that the input field can accept.
 * @attr {number | string} min - The minimum value that the input field can accept.
 * @attr {number} minlength - The minimum number of characters that the input field can accept.
 * @attr {string} name - The input field name.
 * @attr {string} pattern - Specifies a regular expression the form control's value should match.
 * @attr {string} placeholder - The input placeholder text value.
 * @attr {boolean} readonly - If true, the input field cannot be modified.
 * @attr {boolean} required - Indicates whether or not the input field is required to be filled out before submitting the form.
 * @attr {number | 'any'} step - A number that specifies the granularity that the value must adhere to.
 * @attr {string} type - The type attribute specifies the type of input field to display.
 * @attr {'none' | 'error' | 'warning' | 'success'} validation-status - The validation status of the input.
 * @attr {string | number | string[]} value - The input value, it can be used to reset the input to a previous value.
 *
 * @event bqBlur - Callback handler emitted when the input loses focus.
 * @event bqChange - Callback handler emitted when the input value has changed and the input loses focus.
 * @event bqClear - Callback handler emitted when the input value has been cleared.
 * @event bqFocus - Callback handler emitted when the input has received focus.
 * @event bqInput - Callback handler emitted when the input value changes.
 *
 * @slot label - The label slot container.
 * @slot prefix - The prefix slot container.
 * @slot suffix - The suffix slot container.
 * @slot helper-text - The helper text slot container.
 * @slot clear-icon - The clear icon slot container.
 *
 * @part base - The component's base wrapper.
 * @part button - The native HTML button used under the hood in the clear button.
 * @part clear-btn - The clear button.
 * @part control - The input control wrapper.
 * @part helper-text - The helper text slot container.
 * @part label - The label slot container.
 * @part input - The native HTML input element used under the hood.
 * @part prefix - The prefix slot container.
 * @part suffix - The suffix slot container.
 *
 * @cssprop --bq-input--background-color - Input background color
 * @cssprop --bq-input--border-color - Input border color
 * @cssprop --bq-input--border-color-focus - Input border color on focus
 * @cssprop --bq-input--border-radius - Input border radius
 * @cssprop --bq-input--border-width - Input border width
 * @cssprop --bq-input--border-style - Input border style
 * @cssprop --bq-input--gap - Gap between input content and prefix/suffix
 * @cssprop --bq-input--helper-margin-top - Helper text margin top
 * @cssprop --bq-input--helper-text-color - Helper text color
 * @cssprop --bq-input--helper-text-size - Helper text size
 * @cssprop --bq-input--icon-size - Icon size to use in prefix/suffix and clear button
 * @cssprop --bq-input--label-margin-bottom - Input label margin bottom
 * @cssprop --bq-input--label-text-color - Input label text color
 * @cssprop --bq-input--label-text-size - Input label text size
 * @cssprop --bq-input--padding-start - Input padding start
 * @cssprop --bq-input--padding-end - Input padding end
 * @cssprop --bq-input--paddingY - Input padding top and bottom
 * @cssprop --bq-input--text-color - Input text color
 * @cssprop --bq-input--text-size - Input text size
 * @cssprop --bq-input--text-placeholder-color - Input placeholder text color
 */
export declare class BqInput {
    private helperTextElem?;
    private inputElem?;
    private labelElem?;
    private prefixElem?;
    private suffixElem?;
    private debounceBqInput;
    private fallbackInputId;
    el: HTMLBqInputElement;
    internals: ElementInternals;
    hasHelperText: boolean;
    hasLabel: boolean;
    hasPrefix: boolean;
    hasSuffix: boolean;
    hasValue: boolean;
    /**
     * Controls whether or not the input field should be capitalized and how.
     * Possible values are 'off', 'none', 'on', 'sentences', 'words', and 'characters'.
     * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize
     */
    autocapitalize: string;
    /**
     * Specifies whether or not the input field should have autocomplete enabled.
     * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values
     */
    autocomplete: string;
    /**
     * Controls whether or not the input field should have autocorrect enabled.
     * Possible values are 'on' and 'off'.
     */
    autocorrect: 'on' | 'off';
    /** If true, the input will be focused on component render */
    autofocus: boolean;
    /** The clear button aria label */
    clearButtonLabel?: string;
    /**
     * The amount of time, in milliseconds, to wait before emitting the `bqInput` event after the input value changes.
     * A value of 0 means no debouncing will occur.
     */
    debounceTime?: number;
    /**
     * Indicates whether the input is disabled or not.
     * If `true`, the input is disabled and cannot be interacted with.
     */
    disabled?: boolean;
    /** If true, the clear button won't be displayed */
    disableClear?: boolean;
    /** The ID of the form that the input field belongs to. */
    form?: string;
    /** The native form validation message (mandatory if `required` is set) */
    formValidationMessage?: string;
    /**
     * The inputmode attribute specifies what kind of input mechanism would be most helpful for users entering content into the input field.
     * This allows a browser to display an appropriate virtual keyboard while editing.
     * Possible values are 'none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url', and 'date'.
     */
    inputmode?: string;
    /**
     * The maximum value that the input field can accept.
     * Only applies to date and number input types.
     */
    max?: number | string;
    /** The maximum number of characters that the input field can accept. */
    maxlength: number;
    /**
     * The minimum value that the input field can accept.
     * Only applies to date and number input types.
     */
    min?: number | string;
    /** The minimum number of characters that the input field can accept. */
    minlength: number;
    /** The input field name. */
    name: string;
    /**
     * Specifies a regular expression the form control's value should match.
     * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern
     */
    pattern?: string;
    /** The input placeholder text value */
    placeholder?: string;
    /** If true, the input field cannot be modified. */
    readonly?: boolean;
    /** Indicates whether or not the input field is required to be filled out before submitting the form. */
    required?: boolean;
    /**
     * A number that specifies the granularity that the value must adhere to.
     * Valid for date, month, week, time, datetime-local, number, and range.
     * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step
     */
    step: number | 'any';
    /**
     * The type attribute specifies the type of input field to display.
     * Possible values are 'text', 'password', 'email', 'number', 'tel', 'search', 'url', and more.
     * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
     */
    type: TInputType;
    /**
     * The validation status of the input.
     *
     * @remarks
     * This property is used to indicate the validation status of the input. It can be set to one of the following values:
     * - `'none'`: No validation status is set.
     * - `'error'`: The input has a validation error.
     * - `'warning'`: The input has a validation warning.
     * - `'success'`: The input has passed validation.
     */
    validationStatus: TInputValidation;
    /** The input value, it can be used to reset the input to a previous value */
    value: TInputValue;
    handleValueChange(): void;
    /** Callback handler emitted when the input loses focus */
    bqBlur: EventEmitter<HTMLBqInputElement>;
    /**
     * Callback handler emitted when the input value has changed and the input loses focus.
     * This handler is called whenever the user finishes typing or pasting text into the input field and then clicks outside of the input field.
     */
    bqChange: EventEmitter<{
        value: string | number | string[];
        el: HTMLBqInputElement;
    }>;
    /** Callback handler emitted when the input value has been cleared */
    bqClear: EventEmitter<HTMLBqInputElement>;
    /** Callback handler emitted when the input has received focus */
    bqFocus: EventEmitter<HTMLBqInputElement>;
    /**
     * Callback handler emitted when the input value changes.
     * This handler is called whenever the user types or pastes text into the input field.
     */
    bqInput: EventEmitter<{
        value: string | number | string[];
        el: HTMLBqInputElement;
    }>;
    componentWillLoad(): void;
    formAssociatedCallback(): void;
    formResetCallback(): void;
    private handleBlur;
    private handleFocus;
    private handleInput;
    private handleChange;
    private handleClear;
    private handleClearClick;
    private setFormValue;
    private updateFormValidity;
    private handleLabelSlotChange;
    private handlePrefixSlotChange;
    private handleSuffixSlotChange;
    private handleHelperTextSlotChange;
    render(): any;
}
