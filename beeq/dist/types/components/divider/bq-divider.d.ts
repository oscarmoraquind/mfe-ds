import { TDividerOrientation, TDividerStrokeLinecap, TDividerTitleAlignment } from './bq-divider.types';
/**
 * The Divider component is used to visually separate content in a layout.
 *
 * @example How to use it
 * ```html
 * <bq-divider orientation="horizontal" stroke-color="stroke--primary" title-alignment="middle">
 *   <span slot="title">Divider Title</span>
 * </bq-divider>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/53dfe6-divider
 * @status stable
 *
 * @attr {boolean} dashed - If true, the divider has a dashed pattern.
 * @attr {"horizontal" | "vertical"} orientation - The default orientation of the divider.
 * @attr {string} stroke-color - Set the stroke color of the divider. The value should be a valid value of the palette color.
 * @attr {"start" | "middle" | "end"} title-alignment - Set the alignment of the title on the main axis of the divider (horizontal / vertical).
 * @attr {number} stroke-dash-width - Set the width of each dash of the divider's stroke. This is applicable when the stroke is dashed.
 * @attr {number} stroke-dash-gap - Set the gap of the divider's stroke. This is applicable when the stroke is dashed.
 * @attr {number} stroke-thickness - Set the thickness of the divider's stroke. Value expressed in px.
 * @attr {number} stroke-basis - Set the min width of the divider's stroke when text is not centered. Value expressed in px.
 * @attr {"square" | "round" | "butt"} stroke-linecap - Set the line of the divider's stroke. This is applicable when the stroke is dashed.
 *
 * @slot - The title content of the divider.
 *
 * @part base - The component's internal wrapper.
 * @part dash-start - The component's internal svg wrapper for the start line of the divider's stroke.
 * @part dash-end - The component's internal svg wrapper for the end line of the divider's stroke.
 * @part dash-start-line - The component's internal line component of the divider's stroke.
 * @part dash-end-line - The component's internal line component of the divider's stroke.
 *
 * @cssprop --bq-divider--color - Divider color
 * @cssprop --bq-divider--title-marginX - Divider space between title and delimiters
 */
export declare class BqDivider {
    private titleElem;
    el: HTMLBqDividerElement;
    private hasTitle;
    /** If true, the divider has a dashed pattern */
    dashed: boolean;
    /** The default orientation of the divider */
    orientation: TDividerOrientation;
    /** Set the stroke color of the divider. The value should be a valid value of the palette color */
    strokeColor?: string;
    /** Set the alignment of the title on the main axis of the divider (horizontal / vertical) */
    titleAlignment?: TDividerTitleAlignment;
    /** Set the width of each dash of the divider's stroke. This is applicable when the stroke is dashed */
    strokeDashWidth?: number;
    /** Set the gap of the divider's stroke. This is applicable when the stroke is dashed */
    strokeDashGap?: number;
    /** Set the thickness of the divider's stroke. Value expressed in px*/
    strokeThickness?: number;
    /** Set the min width of the divider's stroke when text is not centered. Value expressed in px */
    strokeBasis?: number;
    /** Set the line of the divider's stroke. This is applicable when the stroke is dashed */
    strokeLinecap?: TDividerStrokeLinecap;
    checkPropValues(): void;
    connectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private handleSlotChange;
    private get strokeAttributes();
    private get strokeDrawPositions();
    private get strokeDasharray();
    render(): any;
}
