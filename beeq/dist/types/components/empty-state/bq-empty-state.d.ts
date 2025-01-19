import { TEmptyStateSize } from './bq-empty-state.types';
/**
 * An Empty State is a UI component displayed when there is no data or content available, often used in dynamic or inactive application states.
 *
 * @example How to use it
 * ```html
 * <bq-empty-state size="medium">Title</bq-empty-state>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/673ae0-empty-state/b/09d7b1
 * @status stable
 *
 * @dependency bq-icon
 *
 * @attr {"large" | "medium" | "small"} size - The size of the empty state component
 *
 * @slot thumbnail - The element that wraps the thumbnail element
 * @slot body - The content to be displayed after the thumbnail section
 * @slot footer - The content to be displayed after the body section as footer
 *
 * @part body - The container `<div>` that wraps the alert description content
 * @part footer - The container `<div>` that wraps the alert footer content
 * @part icon - The `<bq-icon>` element used to render a predefined icon size based on the empty state size (small, medium, large)
 * @part thumbnail - The container `<div>` that wraps the thumbnail element
 * @part title - The container `<div>` that wraps the empty state title content
 * @part wrapper - The wrapper container `<div>` of the element inside the shadow DOM
 */
export declare class BqEmptyState {
    private bodyElem;
    private footerElem;
    el: HTMLBqEmptyStateElement;
    private hasBody;
    private hasFooter;
    /** The size of the empty state component */
    size: TEmptyStateSize;
    checkPropValues(): void;
    componentWillLoad(): void;
    private handleContentSlotChange;
    private handleFooterSlotChange;
    private get iconSize();
    render(): any;
}
