import { Placement } from '../../services/interfaces';
/**
 * The Tooltip component is a small pop-up box that appears when a user hovers over or clicks on an element, providing additional information or context.
 *
 * @example How to use it
 * ```html
 * <bq-tooltip visible>
 *   Yuhu! I'm a tooltip 🙃
 *   <bq-button slot="trigger">Hover me!</bq-button>
 * </bq-tooltip>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/64c562-tooltip
 * @status stable
 *
 * @attr {boolean} always-visible - If true, the tooltip will always be visible
 * @attr {number} distance - Distance between trigger element and tooltip
 * @attr {boolean} hide-arrow - If true, the arrow on the tooltip content won't be shown
 * @attr {"top" | "right" | "bottom" | "left"} placement - Defines the position of the tooltip
 * @attr {boolean} same-width - Whether the tooltip should have the same width as the trigger element (applicable only for content shorter than the trigger element)
 * @attr {"click" | "hover"} display-on - Set the action when the tooltip should be displayed, on hover (default) or click
 * @attr {boolean} visible - Indicates whether or not the tooltip is visible when the component is first rendered, and when interacting with the trigger
 *
 * @method show - Shows the tooltip
 * @method hide - Hides the tooltip
 *
 * @slot trigger - The element which displays tooltip on hover
 * @slot - The tooltip content
 *
 * @part base - The component wrapper container inside the shadow DOM
 * @part trigger - The `<div>` container that holds the element which displays tooltip on hover
 * @part panel - The `<div>` container that holds the tooltip content
 *
 * @cssprop --bq-tooltip--background-color - Tooltip background color
 * @cssprop --bq-tooltip--box-shadow - Tooltip box shadow
 * @cssprop --bq-tooltip--font-size - Tooltip font size
 * @cssprop --bq-tooltip--line-height - Tooltip line height
 * @cssprop --bq-tooltip--text-color - Tooltip text color
 * @cssprop --bq-tooltip--paddingX - Tooltip horizontal padding
 * @cssprop --bq-tooltip--paddingY - Tooltip vertical padding
 * @cssprop --bq-tooltip--border-color - Tooltip border color
 * @cssprop --bq-tooltip--border-radius - Tooltip border radius
 * @cssprop --bq-tooltip--border-style - Tooltip border style
 * @cssprop --bq-tooltip--border-width - Tooltip border width
 * @cssprop --bq-tooltip--z-index: Tooltip z-index
 */
export declare class BqTooltip {
    private trigger;
    private panel;
    private arrow;
    private floatingUI;
    el: HTMLBqTooltipElement;
    /** If true, the tooltip will always be visible */
    alwaysVisible?: boolean;
    /** Distance between trigger element and tooltip */
    distance?: number;
    /** If true, the arrow on the tooltip content won't be shown */
    hideArrow?: boolean;
    placement?: Placement;
    /** Whether the tooltip should have the same width as the trigger element
     * (applicable only for content shorter than the trigger element) */
    sameWidth?: boolean;
    /** Set the action when the tooltip should be displayed, on hover (default) or click */
    displayOn: 'click' | 'hover';
    /**
     * Indicates whether or not the tooltip is visible when the component is first rendered,
     * and when interacting with the trigger
     */
    visible?: boolean;
    handleVisibleChange(): Promise<void>;
    handleFloatingUIOptionsChange(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleDocumentMouseDown(event: MouseEvent): Promise<void>;
    /** Shows the tooltip */
    show(): Promise<void>;
    /** Hides the tooltip */
    hide(): Promise<void>;
    private handleTriggerMouseOver;
    private handleTriggerMouseLeave;
    private handleTriggerOnClick;
    private showTooltip;
    private hideTooltip;
    private get isHidden();
    render(): any;
}
