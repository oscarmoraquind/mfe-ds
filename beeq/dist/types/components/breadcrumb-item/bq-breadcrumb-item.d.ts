import { EventEmitter } from '../../stencil-public-runtime';
/**
 * The Breadcrumb Item helps users understand their current location within a website or application's hierarchical structure.
 *
 * @example How to use it
 * ```html
 * <bq-breadcrumb-item label="Home page">
 *   <bq-icon name="house-line" size="16"></bq-icon>
 *   Home
 * </bq-breadcrumb-item>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/61d6c0-breadcrumb
 * @status stable
 *
 * @attr {string} href - If set, the breadcrumb item will be rendered as an `<a>` with this `href`, otherwise, a `<button>` will be rendered.
 * @attr {string} target - Where to display the link in the browser context. Relevant only if `href` is set.
 * @attr {string} rel - Where to display the link in the browser context. Relevant only if `href` is set.
 *
 * @event bqFocus - Handler to be called when item is focused
 * @event bqClick - Handler to be called when item is clicked
 * @event bqBlur - Handler to be called when item loses focus
 *
 * @slot - The default slot is used to add content to the breadcrumb item.
 *
 * @part base - The component wrapper container
 * @part content - The `span` tag that wraps the content item
 * @part item - The breadcrumb item wrapper (`button` or `a`)
 * @part separator - The `span` tag that wraps the separator element
 *
 * @cssprop --bq-breadcrumb-item--background - Background color of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--box-shadow - Box shadow of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--border-color - Border color of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--border-style - Border style of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--border-width - Border width of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--border-radius - Border radius of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--line-height - Line height of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--text-color - Text color of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--text-color-current - Text color of the current breadcrumb item (active)
 * @cssprop --bq-breadcrumb-item--text-size - Text size of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--text-size-separator - Text size of the breadcrumb item separator
 * @cssprop --bq-breadcrumb-item--padding-start - Padding start of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--padding-end - Padding end of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--paddingY - Padding top and bottom of the breadcrumb item
 * @cssprop --bq-breadcrumb-item--padding-start-separator - Padding start of the breadcrumb item separator
 * @cssprop --bq-breadcrumb-item--padding-end-separator - Padding end of the breadcrumb item separator
 */
export declare class BqBreadcrumbItem {
    el: HTMLBqBreadcrumbItemElement;
    /** If set, the breadcrumb item will be rendered as an `<a>` with this `href`, otherwise, a `<button>` will be rendered. */
    href: string;
    /** Where to display the link in the browser context. Relevant only if `href` is set. */
    target: '_blank' | '_parent' | '_self' | '_top';
    /** Where to display the link in the browser context. Relevant only if `href` is set. */
    rel: string;
    /** Handler to be called when item loses focus */
    bqBlur: EventEmitter<HTMLBqBreadcrumbItemElement>;
    /** Handler to be called when item is focused */
    bqFocus: EventEmitter<HTMLBqBreadcrumbItemElement>;
    /** Handler to be called when item is clicked */
    bqClick: EventEmitter<HTMLBqBreadcrumbItemElement>;
    private onBlur;
    private onFocus;
    private onClick;
    render(): any;
}
