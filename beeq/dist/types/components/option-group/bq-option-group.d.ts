/**
 * The option group component is a container for multiple option elements.
 * It allows to manage the appearance and size of all options at once.
 *
 * @example How to use it
 * ```html
 * <bq-option-group class="hydrated">
 *   <span slot="header-label">Sport</span>
 *   <bq-option value="football">Football</bq-option>
 *   <bq-option value="basketball">Basketball</bq-option>
 *   <bq-option value="tennis">Tennis</bq-option>
 * </bq-option-group>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/3b1b7b-option-group
 * @status stable
 *
 * @slot header-label - The label of the option group
 * @slot header-prefix - The prefix of the label
 * @slot header-suffix - The suffix of the label
 * @slot - The option items
 *
 * @part label - The `legend` tag element which acts as a container for the label
 * @part prefix - The prefix of the label
 * @part label - The text of the label
 * @part suffix - The suffix of the label
 * @part group - The `div` element which holds the option items
 *
 * @cssprop --bq-option-group--background - option group background color
 * @cssprop --bq-option-group--font-size - option group font size
 * @cssprop --bq-option-group--line-height - option group line height
 * @cssprop --bq-option-group--label-padding-start - option group header padding start
 * @cssprop --bq-option-group--label-padding-end - option group header padding start
 * @cssprop --bq-option-group--label-paddingY - option group header padding Y axis
 * @cssprop --bq-option-group--label-text-padding-start - option group text within label padding start
 * @cssprop --bq-option-group--label-text-padding-end - option group text within label padding start
 * @cssprop --bq-option-group--container-padding-start - option group container padding start
 */
export declare class BqOptionGroup {
    el: HTMLElement;
    render(): any;
}
