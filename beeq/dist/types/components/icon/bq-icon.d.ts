import { EventEmitter } from '../../stencil-public-runtime';
import { TIconWeight } from './bq-icon.types';
/**
 * The Icon component is an image that provides a visual representation of an object, action, or concept displayed on the screen.
 * It is a small graphical element that is used to enhance the user interface and improve user experience.
 *
 * @example How to use it
 * ```html
 * <bq-icon color="text--brand" name="bell-ringing" size="24"></bq-icon>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/675fad-icon
 * @status stable
 *
 * @attr {string} color - Set the stroke color of the SVG. The value should be a valid value of the palette color.
 * @attr {string} label - Label for the icon, used for accessibility.
 * @attr {string} name - Icon name to load. Please check all available icons [here](https://phosphoricons.com/).
 * @attr {string | number} size - Set the size of the SVG.
 * @attr {string} src - Set the source of the SVG. If the source is set, the name property will be ignored.
 *
 * @event svgLoaded - Callback handler to be called when the SVG has loaded.
 *
 * @part base - The component's internal wrapper that holds the icon SVG content.
 * @part svg - The `<svg>` tag element inside the component.
 *
 * @cssprop --bq-icon--color - The stroke color of the SVG.
 * @cssprop --bq-icon--size - The size of the SVG.
 */
export declare class BqIcon {
    private _svgContent;
    /** Label for the icon, used for accessibility */
    label?: string;
    /** Set the stroke color of the SVG. The value should be a valid value of the palette color */
    color?: string;
    /** Icon name to load. Please check all available icons [here](https://phosphoricons.com/) */
    name?: string;
    /** Set the size of the SVG */
    size?: string | number;
    /** Set the source of the SVG. If the source is set, the name property will be ignored */
    src?: string;
    /** @deprecated It set the icon weight/style */
    weight?: TIconWeight;
    handlePropsChange(): void;
    /**
     * !TO BE REMOVED: Delete this `@Watch()` once the deprecated `weight` property is removed
     * We need to maintain retro-compatibility until the next major release
     */
    handleWeightChange(): void;
    /** Callback handler to be called when the SVG has loaded */
    svgLoaded: EventEmitter;
    connectedCallback(): void;
    componentWillLoad(): void;
    private setupIconComponent;
    private getIconSource;
    private loadIcon;
    render(): any;
}
