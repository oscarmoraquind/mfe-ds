import { ComponentInterface } from '../../stencil-public-runtime';
/**
 * The bq-grid component provides a responsive grid layout system.
 *
 * @example Usage
 * ```html
 * <bq-grid fixed no-padding>Content</bq-grid>
 * ```
 *
 * @status progress
 * @slot - Content to display inside the grid.
 * @cssprop --bq-grid--margin - Margin for the grid container.
 */
export declare class BqGrid implements ComponentInterface {
    fixed: boolean;
    noPadding: boolean;
    render(): any;
}
