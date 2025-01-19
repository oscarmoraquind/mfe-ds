import { EventEmitter } from '../../stencil-public-runtime';
import { TSliderType, TSliderValue } from './bq-slider.types';
/**
 * Sliders provide a visual representation of adjustable content, enabling users to change values by dragging a handle along a horizontal track.
 *
 * @example How to use it
 * ```html
 * <bq-slider max="100" value="30"></bq-slider>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/509cbc-slider/b/09d7b1
 * @status stable
 *
 * @dependency bq-tooltip
 *
 * @attr {number} debounce-time - The amount of time, in milliseconds, to wait to trigger the bqChange event after each value change.
 * @attr {boolean} disabled - If `true` the slider is disabled.
 * @attr {boolean} enable-tooltip - If `true`, a tooltip will be shown displaying the progress value.
 * @attr {boolean} enable-value-indicator - If `true` it will show the value label on the side of the slider track area.
 * @attr {number} gap - A number representing the amount to remain between the minimum and maximum values (only for range type).
 * @attr {number} max - A number representing the max value of the slider.
 * @attr {number} min - A number representing the min value of the slider.
 * @attr {number} step - A number represents the step of the slider. ⚠️ Please notice that the value (or list of values if the slider type is range) will be rounded to the nearest multiple of step.
 * @attr {boolean} tooltip-always-visible - If `true`, a tooltip will always display the progress value. It relies on enableTooltip and if enableTooltip is false, tooltipAlwaysVisible cannot be true.
 * @attr {"range" | "single"} type - It defines the type of slider to display.
 * @attr {"[number, number]" | "number" | "string"} value - The value of the slider. If the slider type is single, the value is a number.
 * If the slider type is range, the value is an array of two numbers (the first number represents the min value and the second number represents the max value).
 *
 * @event bqBlur - Handler to be called when the slider loses focus.
 * @event bqChange - Handler to be called when changing the value on range inputs.
 * @event bqFocus - Handler to be called when the slider gets focused.
 *
 * @part base - The component's base wrapper.
 * @part container - The container of the slider.
 * @part track-area - The track area of the slider.
 * @part progress-area - The progress area of the slider.
 * @part input-min - The input element for the value when the slider type is `single` or the minimum value when the slider type is `range`.
 * @part input-max - The input element for the maximum value.
 * @part label-start - The label for the value when the slider type is `single` or the minimum value when the slider type is `range`.
 * @part label-end - The label for maximum value when the slider type is `range`.
 *
 * @cssprop --bq-slider--size - The height of the slider track/progress area
 * @cssprop --bq-slider--border-radius - Slider border radius
 * @cssprop --bq-slider--thumb-size - Slider hover thumb size
 * @cssprop --bq-slider--progress-color - Slider progress background color
 * @cssprop --bq-slider--trackarea-color - Slider track background color
 */
export declare class BqSlider {
    private inputMinElem;
    private inputMaxElem;
    private minTooltipElem;
    private maxTooltipElem;
    private progressElem;
    private trackElem;
    private debounceBqChange;
    internals: ElementInternals;
    el: HTMLBqSliderElement;
    /**
     * The `minValue` state is the only value when the slider type is `single`
     * and the minimum value when the slider type is `range`.
     */
    minValue: number;
    /** The `maxValue` state is only used when the slider type is `range`. */
    maxValue: number;
    /** It hold the left position of the Thumb for the value or the minimum value (if the slider type is `range`) */
    minThumbPosition: number;
    /** It hold the left position of the Thumb for the maximum value (if the slider type is `range`) */
    maxThumbPosition: number;
    /** The amount of time, in milliseconds, to wait to trigger the `bqChange` event after each value change. */
    debounceTime: number;
    /** If `true` the slider is disabled. */
    disabled?: boolean;
    /** If `true` it will show the value label on a side of the slider track area */
    enableValueIndicator?: boolean;
    /** A number representing the amount to remain between the minimum and maximum values (only for range type). */
    gap: number;
    /** A number representing the max value of the slider. */
    max: number;
    /** A number representing the min value of the slider. */
    min: number;
    /** Name of the form control. Submitted with the form as part of a name/value pair */
    name: string;
    /**
     * A number representing the step of the slider.
     * ⚠️ Please notice that the value (or list of values if the slider type is `range`) will be rounded to the nearest multiple of `step`.
     */
    step: number;
    /** It defines the type of slider to display  */
    type: TSliderType;
    /**
     * The value of the slider.
     * - If the slider type is `single`, the value is a number.
     * - If the slider type is `range`, the value is an array of two numbers (the first number represents the `min` value and the second number represents the `max` value).
     */
    value: TSliderValue;
    /** If `true`, a tooltip will be shown displaying the progress value */
    enableTooltip: boolean;
    /**
     * If `true`, a tooltip will always display the progress value.
     * It relies on enableTooltip and if enableTooltip is false, tooltipAlwaysVisible cannot be true.
     */
    tooltipAlwaysVisible: boolean;
    handleValuePropChange(newValue: TSliderValue): void;
    handleStepPropChange(): void;
    handleGapChange(newValue: number): void;
    /** Handler to be called when change the value on range inputs */
    bqChange: EventEmitter<{
        value: Exclude<TSliderValue, string>;
        el: HTMLBqSliderElement;
    }>;
    /** Handler to be called when the slider loses focus */
    bqBlur: EventEmitter<HTMLBqSliderElement>;
    /** Handler to be called when the slider gets focused */
    bqFocus: EventEmitter<HTMLBqSliderElement>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    formAssociatedCallback(): void;
    private init;
    private runUpdates;
    private setState;
    private setThumbPosition;
    private syncInputsValue;
    private stringToObject;
    private handleInputChange;
    private calculatePercent;
    private updateProgressTrack;
    private calculateThumbPosition;
    private thumbPosition;
    private emitBqChange;
    private handleBlur;
    private handleFocus;
    private handleMouseDown;
    private handleMouseUp;
    private handleTooltipVisibility;
    private get decimalCount();
    private get isRangeType();
    private get isTooltipAlwaysVisible();
    private renderLabel;
    private renderInput;
    private renderTooltip;
    render(): any;
}
