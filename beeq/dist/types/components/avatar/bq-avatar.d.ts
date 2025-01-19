import { TAvatarShape, TAvatarSize } from './bq-avatar.types';
/**
 * The Avatar component is a simple and customizable element that displays an image or initials in a circular or square shape.
 * This component is useful for displaying user profile pictures or any other image that represents a person or an entity.
 *
 * @example How to use it
 * ```html
 * <bq-avatar
 *   alt-text="John Doe profile picture"
 *   image="/image/url/photo-1524593689594.jpeg"
 *   label="John Doe profile picture"
 *   shape="circle"
 *   size="medium"
 * >
 *   <bq-badge slot="badge" text-color="#fff">9</bq-badge>
 * </bq-avatar>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/148da7-avatar
 * @status stable
 *
 * @attr {string} alt-text - Alternate text for the avatar image if the image cannot be displayed.
 * @attr {string} image - The image source to load on the avatar (this can be also a base64 encoded image).
 * @attr {string} label - A text to use for describing the avatar on assistive devices.
 * @attr {string} initials - The text to display on avatar.
 * @attr {"circle" | "square"} shape - The shape of the avatar.
 * @attr {"xsmall" | "small" | "medium" | "large"} size - The size of the avatar.
 *
 * @slot badge - The badge slot is used to add a badge to the avatar. The badge is a small circle or square that can be used to display a number or a status.
 *
 * @part base - The component's internal wrapper.
 * @part img - The `<image>` tag element that load the image source.
 * @part text - The `<span>` tag element that rendered the `Initials` text string.
 * @part badge - The container that wraps the badge slot element.
 *
 * @cssprop --bq-avatar--background - Avatar background color
 *
 * @cssprop --bq-avatar--border-color - Avatar border color
 * @cssprop --bq-avatar--border-style - Avatar border style
 * @cssprop --bq-avatar--border-width - Avatar border width
 *
 * @cssprop --bq-avatar--border-radius-circle - Avatar border radius for circle & any size
 * @cssprop --bq-avatar--border-radius-squareXs - Avatar border radius for square & size xsmall
 * @cssprop --bq-avatar--border-radius-squareS - Avatar border radius for square & size small
 * @cssprop --bq-avatar--border-radius-squareM - Avatar border radius for square & size medium/large
 *
 * @cssprop --bq-avatar--size-xsmall - Avatar xsmall size
 * @cssprop --bq-avatar--size-small - Avatar small size
 * @cssprop --bq-avatar--size-medium - Avatar medium size
 * @cssprop --bq-avatar--size-large - Avatar large size
 *
 * @cssprop --bq-avatar--badge-top-square - Badge top position shape square
 * @cssprop --bq-avatar--badge-left-square - Badge left position shape square
 * @cssprop --bq-avatar--badge-top-circle - Badge top position shape circle
 * @cssprop --bq-avatar--badge-left-circle - Badge left position shape circle
 */
export declare class BqAvatar {
    trimmedInitials: string;
    el: HTMLBqAvatarElement;
    hasError: boolean;
    /** Alternate text for the avatar image if the image cannot be displayed */
    altText: string;
    /** The image source to load on the avatar (this can be also a base64 encoded image) */
    image: string;
    /** A text to use for describing the avatar on assistive devices */
    label: string;
    /** The text to display on avatar */
    initials: string;
    /** The shape of the avatar */
    shape: TAvatarShape;
    /** The size of the avatar */
    size: TAvatarSize;
    handleImagePropChange(): void;
    checkPropValues(): void;
    onInitialsChange(): void;
    componentWillLoad(): void;
    private onImageError;
    private trimInitialsBasedOnSize;
    private getIndex;
    render(): any;
}
