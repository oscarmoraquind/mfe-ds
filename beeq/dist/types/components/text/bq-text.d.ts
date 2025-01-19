import { TTextSize } from './bq-text.types';
/**
 * El componente `bq-text` muestra texto con estilos controlados (tamaño, color, fondo).
 *
 * @example How to use it
 * ```html
 * <bq-text size="medium" color="text--primary">Hola mundo</bq-text>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/194fd1-text
 * @status stable
 *
 * @attr {string} background-color - text background color. The value should be a valid value of the palette color.
 * @attr {string} text-color - text number color. The value should be a valid value of the palette color.
 * @attr {"small" | "medium" | "large"} size - The size of the text. Relevant if text has no content.
 *
 * @slot - The default slot is used to add content to the text. The content can be a number or a text.
 *
 * @part base - The component's internal wrapper that holds the count.
 * @part number - The component's internal wrapper that holds the slot.
 *
 * @cssprop --bq-text--background-color - The text background color
 * @cssprop --bq-text--box-shadow - The text box shadow
 * @cssprop --bq-text--border-color - The text border color
 * @cssprop --bq-text--border-radius - The text border radius
 * @cssprop --bq-text--border-style - The text border style
 * @cssprop --bq-text--border-width - The text border width
 * @cssprop --bq-text--size-small - The text small size
 * @cssprop --bq-text--size-medium - The text medium size
 * @cssprop --bq-text--size-large - The text large size
 * @cssprop --bq-text--text-color - The text text color
 */
export declare class BqText {
    el: HTMLBqTextElement;
    /** text background color. The value should be a valid value of the palette color */
    backgroundColor?: any;
    /** text number color. The value should be a valid value of the palette color */
    textColor?: string;
    /** The size of the text. Relevant if text has no content. */
    size?: TTextSize;
    handleSizePropChange(): void;
    componentWillLoad(): void;
    render(): any;
}
