/**
 * The component description.
 *
 * @example How to use it
 * ```html
 * <bq-col>Stencil</bq-col>
 * ```
 *
 * @documentation - The documentation link.
 * @status progress
 *
 * @dependency bq-icon (Specify if the component uses other components)
 *
 * @attr {string} attribute-name - The attribute description, use always kebab-case.
 *
 * @method methodName - The method description.
 *
 * @event eventName - The event description.
 *
 * @slot - The default slot content.
 *
 * @part partName - The CSS shadow DOM part description.
 *
 * @cssprop --bq-col--margin - The margin of the component.
 */
export declare class BqCol {
    /**
     * The size of the column, expressed as a fraction of 12 (e.g., 6 for half width).
     * Can also be "auto" for automatic sizing.
     */
    size: string | undefined;
    render(): any;
}
