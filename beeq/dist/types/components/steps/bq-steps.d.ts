import { TStepsSize, TStepsType } from './bq-steps.types';
/**
 * The Steps Component is a UI element used to display a series of steps or stages in a process or task.
 * It is used to guide users through a process or task and to indicate their progress.
 *
 * @example How to use it
 * ```html
 * <bq-steps divider-color="stroke--primary" type="dot" size="medium">
 *   <bq-step-item status="completed"> ... </bq-step-item>
 *   <bq-step-item status="error"> ... </bq-step-item>
 *   <bq-step-item status="current"> ... </bq-step-item>
 *   <bq-step-item status="default"> ... </bq-step-item>
 * </bq-steps>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/896b66-stepper
 * @status stable
 *
 * @dependency bq-divider
 *
 * @attr {string} divider-color - The color of the line that connects the steps. It should be a valid declarative color token.
 * @attr {"medium" | "small"} size - The size of the steps
 * @attr {"numeric" | "icon" | "dot"} type - The type of prefix element to use on the step items
 *
 * @slot - The step items
 *
 * @part container - The container wrapper of the Steps component
 * @part divider-base - The base wrapper of the divider component
 * @part divider-dash-start - The dash start wrapper of the divider component
 * @part divider-dash-end - The dash end wrapper of the divider component
 *
 * @cssprop --bq-steps--divider-color - Divider color
 * @cssprop --bq-steps--gap - Gap between steps
 */
export declare class BqSteps {
    private stepElem;
    el: HTMLBqStepsElement;
    /** The color of the line that connects the steps. It should be a valid declarative color token. */
    dividerColor: string;
    /** The size of the steps */
    size: TStepsSize;
    /** The type of prefix element to use on the step items */
    type: TStepsType;
    checkPropValues(): void;
    componentDidLoad(): void;
    private get bqSteps();
    private setStepItemProps;
    render(): any;
}
