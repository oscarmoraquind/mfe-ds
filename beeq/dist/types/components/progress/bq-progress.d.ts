import { TProgressBorderShape, TProgressThickness, TProgressType } from './bq-progress.types';
/**
 * The progress bar is a user interface component that visually represents the completion status of a task or process.
 *
 * @example How to use it
 * ```html
 * <bq-progress value="50"></bq-progress>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/691cb3-progress
 * @status stable
 *
 * @dependency bq-tooltip
 *
 * @attr {"rounded" | "rounded-full"} border-shape - It will set the border style of the progress bar
 * @attr {boolean} enable-tooltip - If `true`, a tooltip will be shown displaying the progress value
 * @attr {boolean} indeterminate - If `true` the indeterminate state of progress bar is enabled
 * @attr {boolean} label - If `true`, a label text showing the value (in percentage) will be shown
 * @attr {"small" | "medium" | "large"} thickness - Progress bar thickness
 * @attr {"default" | "error"} type - Progress type
 * @attr {number} value - A number representing the current value of the progress bar
 *
 * @part wrapper - The component wrapper container inside the shadow DOM
 * @part progress - The `<div>` container that holds the native progress element
 * @part progress-bar - The native html for progress element
 * @part label - The `<div>` container that holds the label value (in percentage)
 * @part indeterminate - The `<div>` container that holds the indeterminate progress bar
 * @part base - The base container for the tooltip component inside the shadow DOM when hovering over the progress bar
 * @part trigger - The container holding the element that triggers the tooltip display when hovering over the progress bar
 * @part panel - The container holding the content of the tooltip when hovering over the progress bar
 *
 * @cssprop --bq-progress-bar--height - The progress bars height
 * @cssprop --bq-progress-bar--indeterminateWidth - The progress bar width when its indeterminate
 * @cssprop --bq-progress-bar--indicatorColor - The progress bar color (inside the track area)
 * @cssprop --bq-progress-bar--trackColor - The progress bar track area (the grey one)
 */
export declare class BqProgress {
    el: HTMLBqProgressElement;
    /** It will set the border style of the progress bar */
    borderShape: TProgressBorderShape;
    /** If `true`, a tooltip will be shown displaying the progress value */
    enableTooltip: boolean;
    /** If `true` the indeterminate state of progress bar is enabled */
    indeterminate: boolean;
    /** If `true, a label text showing the value (in percentage) will be shown */
    label: boolean;
    /** Progress bar thickness */
    thickness: TProgressThickness;
    /** Progress type */
    type: TProgressType;
    /** A number representing the current value of the progress bar */
    value: number;
    handleTypePropChange(): void;
    handleValuePropChange(newValue: number): void;
    componentWillLoad(): void;
    private validateValue;
    render(): any;
}
