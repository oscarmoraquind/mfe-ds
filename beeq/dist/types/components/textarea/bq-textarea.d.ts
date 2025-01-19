import { EventEmitter } from '../../stencil-public-runtime';
import { TTextareaAutoCapitalize, TTextareaWrap } from './bq-textarea.types';
import { TInputValidation } from '../input/bq-input.types';
/**
 * The Textarea component is a multi-line text input control that is often used in a form to collect user inputs like comments or reviews.
 *
 * @example How to use it
 * ```html
 * <bq-textarea maxlength="0" name="textarea" placeholder="Placeholder..." rows="5">
 *   <label slot="label">Label</label>
 *   <span class="flex items-center gap-xs" slot="helper-text">
 *     <bq-icon name="star"></bq-icon>
 *     Helper text
 *   </span>
 * </bq-textarea>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/16792c-textarea
 * @status stable
 *
 * @attr {string} autocapitalize - Controls whether or not the textarea field should be capitalized and how.
 * @attr {string} autocomplete - Specifies whether or not the textarea field should have autocomplete enabled.
 * @attr {string} autocorrect - Controls whether or not the textarea field should have autocorrect enabled.
 * @attr {boolean} autofocus - If `true`, the textarea will be focused on component render.
 * @attr {boolean} auto-grow - If `true`, the textarea will automatically grow and shrink to fit its contents.
 * @attr {number} debounce-time - The amount of time, in milliseconds, to wait before emitting the `bqInput` event after the textarea value changes.
 * @attr {boolean} disabled - If `true`, the user cannot interact with the textarea.
 * @attr {boolean} disable-resize - If `true`, it will block the user's ability to resize the textarea.
 * @attr {string} form - The ID of the form that the textarea field belongs to.
 * @attr {string} form-validation-message - The native form validation message.
 * @attr {number} maxlength - The maximum number of characters that can be entered into the textarea (`0`: no limit).
 * @attr {string} name - The name of the textarea element.
 * @attr {string} placeholder - The placeholder text to show when there is no value.
 * @attr {boolean} readonly - If `true`, the textarea field cannot be modified.
 * @attr {boolean} required - Indicates whether or not the textarea field is required to be filled out before submitting the form.
 * @attr {number} rows - The number of visible text lines for the control. It must be a positive integer.
 * @attr {boolean} spellcheck - If `true`, the textarea content may be checked for spelling errors.
 * @attr {"error" | "none" | "success" | "warning"} validation-status - The validation status of the textarea.
 * @attr {string} value - The value of the textarea. It can be used to reset the textarea to a previous value.
 * @attr {"soft" | "hard"} wrap - Specifies how the text in a text area is to be wrapped when submitted in a form.
 *
 * @event bqBlur - Handler to be called when the textarea loses focus.
 * @event bqChange - Handler to be called when the textarea value has changed and the textarea loses focus.
 * @event bqClear - Handler to be called when the textarea value has been cleared.
 * @event bqFocus - Handler to be called when the textarea has received focus.
 * @event bqInput - Handler to be called when the textarea value changes.
 *
 * @slot label - The textarea label.
 * @slot helper-text - The helper text.
 *
 * @part base - The component's base wrapper.
 * @part input - The textarea element.
 * @part label - The textarea label.
 * @part helper-info - The helper info container.
 * @part helper-text - The helper text.
 * @part helper-counter - The helper counter.
 *
 * @cssprop --bq-textarea--background-color - Textarea background color
 * @cssprop --bq-textarea--border-color - Textarea border color
 * @cssprop --bq-textarea--border-color-focus - Textarea border color on focus
 * @cssprop --bq-textarea--border-radius - Textarea border radius
 * @cssprop --bq-textarea--border-width - Textarea border width
 * @cssprop --bq-textarea--border-style - Textarea border style
 * @cssprop --bq-textarea--helper-margin-top - Textarea helper text margin top
 * @cssprop --bq-textarea--helper-text-color - Textarea helper text color
 * @cssprop --bq-textarea--helper-text-size - Textarea helper text size
 * @cssprop --bq-textarea--label-margin-bottom - Textarea label margin bottom
 * @cssprop --bq-textarea--label-text-color - Textarea label text color
 * @cssprop --bq-textarea--label-text-size - Textarea label text size
 * @cssprop --bq-textarea--paddingY - Textarea padding top and bottom
 * @cssprop --bq-textarea--padding-start - Textarea padding start
 * @cssprop --bq-textarea--padding-end - Textarea padding end
 * @cssprop --bq-textarea--text-color - Textarea text color
 * @cssprop --bq-textarea--text-size - Textarea text size
 * @cssprop --bq-textarea--text-placeholder-color - Textarea placeholder text color
 */
export declare class BqTextarea {
    private debounceBqInput;
    private fallbackId;
    private helperTextElem?;
    private labelElem?;
    private textarea;
    internals: ElementInternals;
    el: HTMLBqTextareaElement;
    private hasHelperText;
    private hasLabel;
    /**
     * Controls whether or not the textarea field should be capitalized and how.
     * Possible values are 'off', 'none', 'on', 'sentences', 'words', and 'characters'.
     * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize
     */
    autocapitalize: TTextareaAutoCapitalize;
    /**
     * Specifies whether or not the textarea field should have autocomplete enabled.
     * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values
     */
    autocomplete: string;
    /**
     * Controls whether or not the textarea field should have autocorrect enabled.
     * Possible values are 'on' and 'off'.
     */
    autocorrect: 'on' | 'off';
    /** If true, the textarea will be focused on component render */
    autofocus: boolean;
    /**
     * If `true`, the textarea will automatically grow and shrink to fit its contents.
     * If `false`, the textarea will have a fixed height specified by the `rows` property.
     */
    autoGrow: boolean;
    /**
     * The amount of time, in milliseconds, to wait before emitting the `bqInput` event after the textarea value changes.
     * A value of 0 means no debouncing will occur.
     */
    debounceTime?: number;
    /** If `true`, the user cannot interact with the textarea. */
    disabled: boolean;
    /** If `true`, it will block the user's ability to resize the textarea. */
    disableResize?: boolean;
    /** The ID of the form that the textarea field belongs to. */
    form?: string;
    /** The native form validation message */
    formValidationMessage?: string;
    /**
     * The maximum number of characters that can be entered into the textarea (`0`: no limit).
     * When enabled, a character counter will be shown underneath the textarea.
     */
    maxlength: number;
    /** The name of the textarea element. */
    name: string;
    /** The placeholder text to show when there is no value. */
    placeholder: string;
    /** If true, the textarea field cannot be modified. */
    readonly?: boolean;
    /** Indicates whether or not the textarea field is required to be filled out before submitting the form. */
    required?: boolean;
    /** The number of visible text lines for the control. It must be a positive integer. */
    rows: number;
    /** If true, the textarea content may be checked for spelling errors. */
    spellcheck: boolean;
    /**
     * The validation status of the textarea.
     *
     * @remarks
     * This property is used to indicate the validation status of the textarea. It can be set to one of the following values:
     * - `'none'`: No validation status is set.
     * - `'error'`: The textarea has a validation error.
     * - `'warning'`: The textarea has a validation warning.
     * - `'success'`: The textarea has passed validation.
     */
    validationStatus: TInputValidation;
    /** The value of the textarea. It can be used to reset the textarea to a previous value. */
    value: string;
    /** Specifies how the text in a text area is to be wrapped when submitted in a form */
    wrap: TTextareaWrap;
    handleValueChange(): void;
    handleRequiredPropChange(): void;
    /** Callback handler emitted when the textarea loses focus */
    bqBlur: EventEmitter<HTMLBqTextareaElement>;
    /**
     * Callback handler emitted when the textarea value has changed and the textarea loses focus.
     * This handler is called whenever the user finishes typing or pasting text into the textarea field and then clicks outside of the textarea field.
     */
    bqChange: EventEmitter<{
        value: string;
        el: HTMLBqTextareaElement;
    }>;
    /** Callback handler emitted when the textarea value has been cleared */
    bqClear: EventEmitter<HTMLBqTextareaElement>;
    /** Callback handler emitted when the textarea has received focus */
    bqFocus: EventEmitter<HTMLBqTextareaElement>;
    /**
     * Callback handler emitted when the textarea value changes.
     * This handler is called whenever the user types or pastes text into the textarea field.
     */
    bqInput: EventEmitter<{
        value: string;
        el: HTMLBqTextareaElement;
    }>;
    componentDidLoad(): void;
    formAssociatedCallback(): void;
    formResetCallback(): void;
    private get numberOfCharacters();
    private handleBlur;
    private handleFocus;
    private handleChange;
    private handleInput;
    private autoResize;
    private handleLabelSlotChange;
    private handleHelperTextSlotChange;
    private setFormValue;
    private updateFormValidity;
    private clearSelection;
    render(): any;
}
