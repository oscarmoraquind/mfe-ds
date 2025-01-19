import { TBadgeSize } from './bq-badge.types';
/**
 * The Badge component is a visual indicator that can be added to various elements within a user interface.
 * It is typically used to highlight important or relevant information, such as alerts, notifications, or statuses.
 *
 * @example How to use it
 * ```html
 * <bq-badge background-color="ui--success" text-color="text--inverse" size="small">9</bq-badge>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/194fd1-badge
 * @status stable
 *
 * @attr {string} background-color - Badge background color. The value should be a valid value of the palette color.
 * @attr {string} text-color - Badge number color. The value should be a valid value of the palette color.
 * @attr {"small" | "medium" | "large"} size - The size of the badge. Relevant if badge has no content.
 *
 * @slot - The default slot is used to add content to the badge. The content can be a number or a text.
 *
 * @part base - The component's internal wrapper that holds the count.
 * @part number - The component's internal wrapper that holds the slot.
 *
 * @cssprop --bq-badge--background-color - The badge background color
 * @cssprop --bq-badge--box-shadow - The badge box shadow
 * @cssprop --bq-badge--border-color - The badge border color
 * @cssprop --bq-badge--border-radius - The badge border radius
 * @cssprop --bq-badge--border-style - The badge border style
 * @cssprop --bq-badge--border-width - The badge border width
 * @cssprop --bq-badge--size-small - The badge small size
 * @cssprop --bq-badge--size-medium - The badge medium size
 * @cssprop --bq-badge--size-large - The badge large size
 * @cssprop --bq-badge--text-color - The badge text color
 */
export declare class BqBadge {
    private spanElement?;
    private observer;
    el: HTMLBqBadgeElement;
    private contentLength;
    /** Badge background color. The value should be a valid value of the palette color */
    backgroundColor?: string;
    /** Badge number color. The value should be a valid value of the palette color */
    textColor?: string;
    /** The size of the badge. Relevant if badge has no content. */
    size?: TBadgeSize;
    handleSizePropChange(): void;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    private onSlotChange;
    private get slot();
    render(): any;
}
