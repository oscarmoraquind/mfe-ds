import { Placement } from '../../services/interfaces';
/**
 * The Panel component is a versatile and essential element used to wrap and display content in a floating panel.
 *
 * @example How to use it
 * ```html
 * <bq-panel open>
 *   <div>Panel content</div>
 * </bq-panel>
 * ```
 *
 * @status stable
 *
 * @attr {number} distance - Represents the distance (gutter or margin) between the panel and the trigger element.
 * @attr {"top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end"} placement - Position of the panel.
 * @attr {boolean} open - If true, the panel will be visible.
 * @attr {boolean} same-width - Whether the panel should have the same width as the trigger element.
 * @attr {number} skidding - Represents the skidding between the panel and the trigger element.
 * @attr {"fixed" | "absolute"} strategy - Defines the strategy to position the panel.
 *
 * @slot - The content of the panel.
 *
 * @part panel - The `<div>` element used to display and style the panel
 *
 * @prop --bq-panel--background - Panel background color
 * @prop --bq-panel--border-color - Panel border color
 * @prop --bq-panel--border-radius - Panel border radius
 * @prop --bq-panel--border-style - Panel border style
 * @prop --bq-panel--border-width - Panel border width
 * @prop --bq-panel--box-shadow - Panel box shadow
 * @prop --bq-panel--padding - Panel padding
 * @prop --bq-panel--height - Panel height
 * @prop --bq-panel--width - Panel width
 * @prop --bq-panel-z-index - Panel z-index applied when opened
 */
export declare class BqPanel {
    private panel;
    private floatingUI;
    private trigger;
    el: HTMLBqPanelElement;
    /** Represents the distance (gutter or margin) between the panel and the trigger element. */
    distance?: number;
    /** Position of the panel */
    placement?: Placement;
    /** If true, the panel will be visible. */
    open?: boolean;
    /** Whether the panel should have the same width as the trigger element */
    sameWidth?: boolean;
    /**  Represents the skidding between the panel and the trigger element. */
    skidding?: number;
    /** Defines the strategy to position the panel */
    strategy?: 'fixed' | 'absolute';
    handleOpenChange(): void;
    onPropChange(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private showPanel;
    private hidePanel;
    private get options();
    render(): any;
}
