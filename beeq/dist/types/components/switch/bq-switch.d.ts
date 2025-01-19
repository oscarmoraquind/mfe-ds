import { EventEmitter } from '../../stencil-public-runtime';
import { TSwitchInnerLabel, TSwitchJustifyContent } from './bq-switch.types';
/**
 * Toggle switches are digital on/off switches.
 * They should provide immediate results, giving users the freedom to control their preferences as needed.
 *
 * @example How to use it
 * ```html
 * <bq-switch inner-label="default" justify-content="start" name="bq-switch" value="Switch value">
 *   Toggle me!
 * </bq-switch>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/49d9c9-switch
 * @status stable
 *
 * @dependency bq-icon
 *
 * @attr {boolean} background-on-hover - If `true`, a background will be displayed on hover
 * @attr {boolean} checked - It indicates whether if the switch is `ON` by default (when the page loads)
 * @attr {boolean} disabled - If `true`, the switch control will be disabled and no interaction will be allowed
 * @attr {string} form-validation-message - The native form validation message
 * @attr {boolean} full-width - If `true`, the component will take the full width space available on the parent container
 * @attr {"default" | "icon"} inner-label - It indicates how to to display the on/off marks inside the control, with icons or none (default)
 * @attr {"start" | "end" | "center" | "space-between" | "space-around" | "space-evenly"} justify-content - It defines how to distribute the space between and around the control and the label text
 * @attr {string} name - Name of the form control. Submitted with the form as part of a name/value pair
 * @attr {boolean} required - If `true`, it will indicate that the user must switch `ON` the element before the owning form can be submitted
 * @attr {boolean} reverse-order - If `true`, the order of the control and the label text will be changed
 * @attr {string} value - The input control's value, submitted as a name/value pair with form data
 *
 * @event bqChange - Handler to be called when the switch state changes
 * @event bqFocus - Handler to be called when the switch gets focus
 * @event bqBlur - Handler to be called when the switch loses focus
 *
 * @slot - The switch label text
 *
 * @part base - HTML `<label>` root container
 * @part control - HTML `<div>` element for the custom control
 * @part dot - HTML `<div>` element that acts as changing dot
 * @part icon-off - HTMLBqIcon `<pk-icon>` element used as the `OFF` mark inner label
 * @part icon-on - HTMLBqIcon `<pk-icon>` element used as the `ON` mark inner label
 * @part label - HTML `<span>` element that holds the label text
 *
 * @cssprop --bq-switch--height - Switch height
 * @cssprop --bq-switch--justify-content - Switch justify content
 * @cssprop --bq-switch--width - Switch width
 * @cssprop --bq-switch--dot-size - Switch dot size
 */
export declare class BqSwitch {
    private labelElem;
    private inputElem;
    private prevCheckedValue;
    internals: ElementInternals;
    el: HTMLBqSwitchElement;
    hasLabel: boolean;
    /** If true, a background will be displayed on hover */
    backgroundOnHover?: boolean;
    /** It indicates whether if the switch is `ON` by default (when the page loads) */
    checked?: boolean;
    /** If true, the switch control will be disabled and no interaction will be allowed */
    disabled?: boolean;
    /** The native form validation message */
    formValidationMessage?: string;
    /** If true, the component will take the full width space available on the parent container */
    fullWidth?: boolean;
    /** It indicates how to to display the on/off marks inside the control, with icons or none (default)  */
    innerLabel?: TSwitchInnerLabel;
    /**
     * It defines how to distribute the space between and around the control and the label text
     * (https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
     */
    justifyContent?: TSwitchJustifyContent;
    /** Name of the form control. Submitted with the form as part of a name/value pair */
    name: string;
    /** If `true`, it will indicate that the user must switch `ON` the element before the owning form can be submitted */
    required?: boolean;
    /** If true, the order of the control and the label text will be changed  */
    reverseOrder?: boolean;
    /** The input control's value, submitted as a name/value pair with form data. */
    value?: string;
    handleRequiredChange(): void;
    /** Handler to be called when the switch state changes */
    bqChange: EventEmitter<{
        checked: boolean;
    }>;
    /** Handler to be called when the switch gets focus */
    bqFocus: EventEmitter<HTMLBqSwitchElement>;
    /** Handler to be called when the switch loses focus */
    bqBlur: EventEmitter<HTMLBqSwitchElement>;
    componentWillLoad(): void;
    componentDidLoad(): void;
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
    private handleChange;
    private handleOnFocus;
    private handleOnBlur;
    private handleSlotChange;
    private setFormValue;
    private updateFormValidity;
    render(): any;
}
