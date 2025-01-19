import { EventEmitter } from '../../stencil-public-runtime';
/**
 * The checkbox is a UI component that allows users to select one or more options from a list of choices.
 * It is commonly used in forms, surveys, and settings pages.
 *
 * @example How to use it
 * ```html
 * <bq-checkbox name="bq-checkbox" value="checkbox-value" background-on-hover>
 *   Checkbox label
 * </bq-checkbox>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/431f17-checkbox
 * @status stable
 *
 * @attr {boolean} background-on-hover - If true checkbox displays background on hover
 * @attr {string} form-id - The form ID that the checkbox is associated with
 * @attr {string} form-validation-message - The native form validation message
 * @attr {boolean} checked - If true checkbox is checked
 * @attr {boolean} disabled - If true checkbox is disabled
 * @attr {boolean} indeterminate - A state that is neither checked nor unchecked
 * @attr {string} name - Name of the HTML input form control. Submitted with the form as part of a name/value pair
 * @attr {boolean} required - If `true`, it will indicate that the user must specify a value for the checkbox before the owning form can be submitted
 * @attr {string} value - A string representing the value of the checkbox. Primarily used to differentiate a list of related checkboxes that have the same name
 *
 * @method vClick - Simulate a click event on the native `<input>` HTML element used under the hood
 * @method vFocus - Sets focus on the native `<input>` HTML element used under the hood
 * @method vBlur - Remove focus from the native `<input>` HTML element used under the hood
 *
 * @event bqChange - Handler to be called when the checkbox state changes
 * @event bqFocus - Handler to be called when the checkbox gets focus
 * @event bqBlur - Handler to be called when the checkbox loses focus
 *
 * @slot - The content of the checkbox component
 *
 * @part base - The component's internal wrapper of the checkbox component.
 * @part control - The container `<div>` element that holds the custom checkbox.
 * @part input - The native HTML `<input type="checkbox">` used under the hood.
 * @part checkbox - The `<span>` element that renders the custom checked/indeterminate state.
 * @part label - The `<span>` element that holds the text content.
 *
 * @cssprop --bq-checkbox--size - Checkbox size
 * @cssprop --bq-checkbox--border-radius - Checkbox border radius
 * @cssprop --bq-checkbox--border-width - Checkbox border width
 */
export declare class BqCheckbox {
    private inputElem;
    private prevCheckedValue;
    el: HTMLBqCheckboxElement;
    internals: ElementInternals;
    /** If true checkbox displays background on hover */
    backgroundOnHover?: boolean;
    /** The form ID that the checkbox is associated with */
    formId?: string;
    /** The native form validation message */
    formValidationMessage?: string;
    /** If true checkbox is checked */
    checked?: boolean;
    /** If true checkbox is disabled */
    disabled?: boolean;
    /** A state that is neither checked nor unchecked */
    indeterminate?: boolean;
    /** Name of the HTML input form control. Submitted with the form as part of a name/value pair.  */
    name: string;
    /** If `true`, it will indicate that the user must specify a value for the checkbox before the owning form can be submitted */
    required?: boolean;
    /** A string representing the value of the checkbox. Primarily used to differentiate a list of related checkboxes that have the same name.  */
    value: string;
    handleIndeterminatePropChange(): void;
    handleRequiredPropChange(): void;
    /** Handler to be called when the checkbox state changes */
    bqChange: EventEmitter<{
        checked: boolean;
    }>;
    /** Handler to be called when the checkbox gets focus */
    bqFocus: EventEmitter<HTMLBqCheckboxElement>;
    /** Handler to be called when the checkbox loses focus */
    bqBlur: EventEmitter<HTMLBqCheckboxElement>;
    componentWillLoad(): void;
    componentDidUpdate(): void;
    formAssociatedCallback(): void;
    formResetCallback(): void;
    /**
     * Simulate a click event on the native `<input>` HTML element used under the hood.
     * Use this method instead of the global `element.click()`.
     */
    vClick(): Promise<void>;
    /**
     * Sets focus on the native `<input>` HTML element used under the hood.
     * Use this method instead of the global `element.focus()`.
     */
    vFocus(): Promise<void>;
    /**
     * Remove focus from the native `<input>` HTML element used under the hood.
     * Use this method instead of the global `element.blur()`.
     */
    vBlur(): Promise<void>;
    private setFormValue;
    private updateFormValidity;
    private handleChange;
    private handleOnFocus;
    private handleOnBlur;
    render(): any;
}
