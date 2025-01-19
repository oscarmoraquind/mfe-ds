import { TStatusType } from './bq-status.types';
/**
 * The Status Component is a UI element that represents the current state or condition of an item, task, or process.
 *
 * @example How to use it
 * ```html
 * <bq-status type="alert">Alert status</bq-status>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/46c8d5-status/b/09d7b1
 * @status stable
 *
 * @dependency bq-badge
 *
 * @attr {"alert" | "danger" | "info" | "neutral" | "success"} type - It defines the type of status to display.
 *
 * @slot The content of the status component.
 *
 * @part base - The component's internal wrapper of the status component.
 * @part circle - The colored circle that marks the status type.
 * @part text - The `<div>` container that holds the text label of the status component.
 *
 * @cssprop --bq-status-circ - Status circle size.
 */
export declare class BqStatus {
    el: HTMLBqStatusElement;
    /** It defines the type of status to display  */
    type: TStatusType;
    checkPropValues(): void;
    componentWillLoad(): void;
    render(): any;
}
