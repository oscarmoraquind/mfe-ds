/**
 * The Page Title component is a versatile and essential element used to display the main title of a page or section within an application.
 *
 * @example How to use it
 * ```html
 * <bq-page-title>
 *   <bq-button appearance="link" slot="back">
 *     <bq-icon
 *       color="text--primary"
 *       name="arrow-left"
 *       weight="bold"
 *       role="img"
 *       title="Navigate back to the previous page"
 *     ></bq-icon>
 *   </bq-button>
 *   Title
 *   <div slot="sub-title">Sub-title</div>
 * </bq-page-title>
 * ```
 *
 * @documentation https://storybook.beeq.design/?path=/docs/components-page-title--overview
 * @status stable
 *
 * @slot back - The back navigation button.
 * @slot - The main title content.
 * @slot sub-title - The sub-title content.
 * @slot suffix - The suffix content.
 *
 * @part base - The inner container `<div>`of element that contains the base page title component.
 * @part content - Defines the main container of the page title component, which includes the title and subtitle elements.
 * @part title-suffix - Defines the container that holds the title and any suffix content.
 * @part back - The container `<div>` page title element that acts as back slot container.
 * @part title - The `<h1>` element serves as a container for the page title content, to improve accessibility.
 * @part suffix - The `<div>` page title element that acts as suffix slot container.
 * @part sub-title - The `<div>` page title element that acts as sub-title slot container.
 *
 * @cssprop --paddingY - Padding top and bottom of the page title wrapper
 * @cssprop --subtitle-borderBlockEnd - Page title border end color
 * @cssprop --subtitle-fontWeight - Page title font weight for subtitle
 * @cssprop --subtitle-textColor - Page title color for sub-title
 * @cssprop --subtitle-textSize - Page title text size for subtitle
 * @cssprop --title-fontWeight - Page title font weight for title
 * @cssprop --title-lineHeight - Page title text line height
 * @cssprop --title-textColor - Page title color for title
 * @cssprop --title-textSize - Page title text size for title
 */
export declare class BqPageTitle {
    private backNavigationElem;
    private suffixElem;
    private subTitleElem;
    el: HTMLBqPageTitleElement;
    private haveBackNavigation;
    private hasSuffix;
    private hasSubTitle;
    private handleSlotChange;
    render(): any;
}
