import { EventEmitter } from '../../stencil-public-runtime';
/**
 * The radio button is a user interface element that allows users to select a single option.
 *
 * @example How to use it
 * ```html
 * <bq-radio value="option1">Radio option 1</bq-radio>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/9718e1-radio-button/b/09d7b1
 * @status stable
 *
 * @attr {boolean} background-on-hover - If `true`, the radio displays background on hover
 * @attr {boolean} checked - If `true` radio input is checked
 * @attr {boolean} disabled - If `true` radio input is disabled
 * @attr {string} form-id - The form ID that the radio input is associated with
 * @attr {string} name - Name of the HTML input form control. Submitted with the form as part of a name/value pair
 * @attr {boolean} required - If `true`, it will indicate that the user must specify a value for the radio before the owning form can be submitted
 * @attr {boolean} value - A string representing the value of the radio
 *
 * @method vClick - Simulate a click event on the native `<input>` HTML element used under the hood
 * @method vFocus - Sets focus on the native `<input>` HTML element used under the hood
 * @method vBlur - Remove focus from the native `<input>` HTML element used under the hood
 * @method getNativeInput - Returns the native `<input>` HTML element used under the hood
 *
 * @event bqBlur - Handler to be called when the radio loses focus
 * @event bqClick - Handler to be called when the radio state changes
 * @event bqFocus - Handler to be called when the radio gets focused
 * @event bqKeyDown - The handler is to be called when the radio key is pressed
 *
 * @slot - The bq-radio item
 *
 * @part base - The component's internal wrapper of the radio component.
 * @part input - The native HTML `<input type="radio">` used under the hood.
 * @part radio - The component's internal wrapper of the radio component.
 * @part label - The `<span>` element that holds the text content.
 *
 * @cssprop --bq-radio--size - Radio size
 * @cssprop --bq-radio--border-width - Radio border width
 */
export declare class BqRadio {
    private inputElement;
    el: HTMLBqRadioElement;
    /** If true radio input is checked */
    checked?: boolean;
    /** If true radio input is disabled */
    disabled?: boolean;
    /** If true radio displays background on hover */
    backgroundOnHover?: boolean;
    /** The form ID that the radio input is associated with */
    formId?: string;
    /** Name of the HTML input form control. Submitted with the form as part of a name/value pair.  */
    name: string;
    /** If `true`, it will indicate that the user must specify a value for the radio before the owning form can be submitted */
    required?: boolean;
    /** A string representing the value of the radio. */
    value: string;
    /** Handler to be called when the radio state changes */
    bqClick: EventEmitter<HTMLBqRadioElement>;
    /** Handler to be called when the radio gets focus */
    bqFocus: EventEmitter<HTMLBqRadioElement>;
    /** Handler to be called when the radio loses focus */
    bqBlur: EventEmitter<HTMLBqRadioElement>;
    /** Handler to be called when the radio key is pressed */
    bqKeyDown: EventEmitter<KeyboardEvent>;
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
    /**
     * Returns the native `<input>` HTML element used under the hood.
     */
    getNativeInput(): Promise<HTMLInputElement>;
    private handleClick;
    private handleOnFocus;
    private handleOnBlur;
    private handleOnKeyDown;
    private get tabindex();
    render(): any;
}
