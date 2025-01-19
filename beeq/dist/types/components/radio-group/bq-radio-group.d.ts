import { EventEmitter } from '../../stencil-public-runtime';
import { TRadioGroupOrientation } from './bq-radio-group.types';
/**
 * The radio group is a user interface component that groups radio buttons to enable a single selection within the group.
 *
 * @example How to use it
 * ```html
 * <bq-radio-group fieldset value="option1">
 *   <span slot="label">radio group</span>
 *   <bq-radio value="option1">Radio option 1</bq-radio>
 *   <bq-radio value="option2">Radio option 2</bq-radio>
 *   <bq-radio value="option3">Radio option 3</bq-radio>
 * </bq-radio-group>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/9718e1-radio-button/b/09d7b1
 * @status stable
 *
 * @attr {boolean} background-on-hover - If `true`, the radio displays background on hover
 * @attr {number} debounce-time - A number representing the delay time (in milliseconds) that bqChange event handler gets triggered once the value change
 * @attr {boolean} disabled - If `true` radio inputs are disabled
 * @attr {boolean} fieldset - If `true` displays fieldset
 * @attr {string} name - Name of the HTML input form control. Submitted with the form as part of a name/value pair
 * @attr {"horizontal" | "vertical"} orientation - The display orientation of the radio inputs
 * @attr {boolean} required - If `true`, the radio group is required
 * @attr {string} required-validation-message - The native form validation message when the radio group is required
 * @attr {string} value - The display orientation of the radio inputs
 *
 * @method vClick - Simulate a click event on the native `<input>` HTML element used under the hood
 * @method vFocus - Sets focus on the native `<input>` HTML element used under the hood
 * @method vBlur - Remove focus from the native `<input>` HTML element used under the hood
 *
 * @event bqChange - Handler to be called when the radio state changes
 *
 * @slot - The bq-radio items to group
 * @slot label - The label content of radio group
 *
 * @part base - The component's internal wrapper of the radio components.
 * @part label - The `<legend>` element that holds the text content.
 * @part group - The `<div>` element that holds the radio inputs.
 */
export declare class BqRadioGroup {
    private focusedBqRadio;
    private debouncedBqChange;
    internals: ElementInternals;
    el: HTMLBqRadioGroupElement;
    /** If true, all radio inputs in the group will display a background on hover */
    backgroundOnHover?: boolean;
    /** A number representing the delay time (in milliseconds) that `bqChange` event handler gets triggered once the value change */
    debounceTime: number;
    /** If true radio inputs are disabled */
    disabled?: boolean;
    /** If true displays fieldset */
    fieldset?: boolean;
    /** Name of the HTML input form control. Submitted with the form as part of a name/value pair.  */
    name: string;
    /** The display orientation of the radio inputs */
    orientation?: TRadioGroupOrientation;
    /** If true, the radio group is required */
    required?: boolean;
    /** The native form validation message when the radio group is required */
    requiredValidationMessage?: string;
    /** A string representing the value of the radio. */
    value?: string;
    handleGroupProperties(): void;
    checkPropValues(): void;
    checkDebounceChange(): void;
    handleRequiredChange(): Promise<void>;
    /** Handler to be called when the radio state changes */
    bqChange: EventEmitter<{
        value: string;
        target: HTMLBqRadioElement;
    }>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    formAssociatedCallback(): Promise<void>;
    formResetCallback(): void;
    onMouseDown(event: MouseEvent): void;
    onBqClick(event: CustomEvent<HTMLBqRadioElement>): void;
    onBqKeyDown(event: CustomEvent<KeyboardEvent>): void;
    onBqFocus(event: CustomEvent<HTMLBqRadioElement>): void;
    onBqBlur(event: CustomEvent<HTMLBqRadioElement>): void;
    private focusRadioInputSibling;
    private setCheckedRadioItem;
    private getNextRadioElement;
    private updateFormValidity;
    private get bqRadioElements();
    render(): any;
}
