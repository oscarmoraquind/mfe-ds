import { TCardBorderRadius, TCardType } from './bq-card.types';
/**
 * The Card component serves as a versatile container designed for flexible content presentation within user interfaces.
 * Its structure accommodates various styles, allowing users to customize and adapt it according to their design preferences.
 *
 * @example How to use it
 * ```html
 * <bq-card type="default" border="m">
 *   <div class="p-m">
 *     <h3 class="text-xl font-bold">Card Title</h3>
 *     <p class="text-m">Card content goes here</p>
 *   </div>
 * </bq-card>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/522abb-card
 * @status stable
 *
 * @attr {"default" | "minimal"} type - Type of card component
 * @attr {"none" | "xs2" | "xs" | "s" | "m" | "l" | "full"} border - The corner radius of the card component
 *
 * @slot - The content of the card component
 *
 * @part wrapper - The wrapper container `<div>` of the element inside the shadow DOM
 *
 * @cssprop --bq-card--borderColor - Card border color
 * @cssprop --bq-card--borderRadius - Card border radius
 * @cssprop --bq-card--borderStyle - Card border style
 * @cssprop --bq-card--borderWidth - Card border width
 *
 * @cssprop --bq-card--padding - Card padding
 * @cssprop --bq-card--paddingMinimal - Minimal card padding
 * @cssprop --bq-card--background - Card background color
 */
export declare class BqCard {
    el: HTMLBqCardElement;
    /** Type of card component */
    type: TCardType;
    /** The corner radius of the card component */
    border: TCardBorderRadius;
    checkPropValue(): void;
    componentWillLoad(): void;
    render(): any;
}
