import { EventEmitter } from '../../stencil-public-runtime';
import { TAccordionAppearance, TAccordionSize } from './bq-accordion.types';
/**
 * The Accordion is a UI component that allows users to toggle between showing and hiding content sections. It provides a collapsible functionality, where only one section can be expanded at a time, while the others remain collapsed.
 *
 * @example How to use it
 * ```html
 * <bq-accordion appearance="filled" size="medium">
 *   <bq-avatar size="xsmall" image="/image/url/img.png" slot="prefix"></bq-avatar>
 *   <h3 slot="header">Header</h3>
 *   <div>Lorem ipsum dolor...</div>
 * </bq-accordion>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/713eae-accordion
 * @status stable
 *
 * @dependency bq-icon
 *
 * @attr {"filled" | "ghost"} [appearance="filled"] - The appearance style of the Accordion
 * @attr {boolean} [disabled=false] - If true, the Accordion is disabled
 * @attr {boolean} [expanded=false] - If true, the Accordion is expanded
 * @attr {boolean} [no-animation=false] - Animation is set through JS when the browser does not support CSS calc-size() If true, the Accordion animation, will be disabled. No animation will be applied.
 * @attr {boolean} [rotate=false] - If true, the Accordion expand icon is rotate 180deg when expanded
 * @attr {"small" | "medium"} [size="medium"] - The size of the the Accordion
 *
 * @event bqOpen - Handler to be called when the accordion is opened
 * @event bqAfterOpen - Handler to be called after the accordion is opened
 * @event bqClose - Handler to be called when the accordion is closed
 * @event bqAfterClose - Handler to be called after the accordion is closed
 * @event bqFocus - Handler to be called when the accordion gets focus
 * @event bqClick - Handler to be called when the accordion is clicked
 * @event bqBlur - Handler to be called when the accordion loses focus
 *
 * @slot - The accordion panel content
 * @slot collapse - The accordion collapse icon
 * @slot expand - The accordion expand icon
 * @slot header - The accordion header content
 * @slot prefix - The accordion prefix content (icon or avatar)
 * @slot suffix - The accordion suffix content (icon or avatar)
 *
 * @part base - The `<details>` that holds the accordion content
 * @part header - The `<summary>` that holds the accordion header content
 * @part panel - The `<div>` that holds the accordion panel content
 * @part prefix - The `<div>` that holds the accordion prefix content
 * @part suffix - The `<div>` that holds the accordion suffix content
 * @part text - The `<div>` that holds the accordion header text content
 *
 * @cssprop --bq-accordion--small-padding-y - Accordion small vertical padding
 * @cssprop --bq-accordion--small-padding-start - Accordion small start padding
 * @cssprop --bq-accordion--small-padding-end - Accordion small end padding
 * @cssprop --bq-accordion--small-padding-gap - Accordion small gap distance between suffix, title and prefix
 * @cssprop --bq-accordion--small-radius - Accordion small border radius
 *
 * @cssprop --bq-accordion--medium-padding-y - Accordion medium vertical padding
 * @cssprop --bq-accordion--medium-padding-start - Accordion medium start padding
 * @cssprop --bq-accordion--medium-padding-end - Accordion medium end padding
 * @cssprop --bq-accordion--medium-padding-gap - Accordion medium gap distance between suffix, title and prefix
 * @cssprop --bq-accordion--medium-radius - Accordion medium border radius
 *
 * @cssprop --bq-accordion--collapsed-border-color - Accordion collapsed border color
 * @cssprop --bq-accordion--collapsed-border-style - Accordion collapsed border style
 * @cssprop --bq-accordion--collapsed-border-width - Accordion collapsed border width
 *
 * @cssprop --bq-accordion--expanded-border-color - Accordion expanded border color
 * @cssprop --bq-accordion--expanded-border-style - Accordion expanded border style
 * @cssprop --bq-accordion--expanded-border-width - Accordion expanded border width
 *
 * @cssprop --bq-accordion--filled-collapsed-background - Accordion filled collapsed header background
 * @cssprop --bq-accordion--filled-collapsed-text-color - Accordion filled collapsed header text color
 * @cssprop --bq-accordion--filled-expanded-background - Accordion filled expanded header background
 * @cssprop --bq-accordion--filled-expanded-collapsed-hover - Accordion filled expanded header color on hover
 * @cssprop --bq-accordion--filled-expanded-text-color - Accordion filled expanded header text color
 *
 * @cssprop --bq-accordion--ghost-collapsed-background - Accordion ghost collapsed header background
 * @cssprop --bq-accordion--ghost-collapsed-text-color - Accordion ghost collapsed header text color
 * @cssprop --bq-accordion--ghost-expanded-background - Accordion ghost expanded header background
 * @cssprop --bq-accordion--ghost-expanded-collapsed-hover - Accordion ghost expanded header color on hover
 * @cssprop --bq-accordion--ghost-expanded-text-color - Accordion ghost expanded header text color
 *
 * @cssprop --bq-accordion--panel-filled-border-color - Accordion filled panel border color
 * @cssprop --bq-accordion--panel-filled-border-style - Accordion filled panel border style
 * @cssprop --bq-accordion--panel-filled-border-width - Accordion filled panel border width
 * @cssprop --bq-accordion--panel-small-filled-padding-y - Accordion small filled panel vertical padding
 * @cssprop --bq-accordion--panel-small-filled-padding-start - Accordion small filled panel start padding
 * @cssprop --bq-accordion--panel-small-filled-padding-end - Accordion small filled panel end padding
 * @cssprop --bq-accordion--panel-medium-filled-padding-y - Accordion medium filled panel vertical padding
 * @cssprop --bq-accordion--panel-medium-filled-padding-start - Accordion medium filled panel start padding
 * @cssprop --bq-accordion--panel-medium-filled-padding-end - Accordion medium filled panel end padding
 *
 * @cssprop --bq-accordion--panel-ghost-border-color - Accordion ghost panel border color
 * @cssprop --bq-accordion--panel-ghost-border-style - Accordion ghost panel border style
 * @cssprop --bq-accordion--panel-ghost-border-width - Accordion ghost panel border width
 * @cssprop --bq-accordion--panel-small-ghost-padding-y - Accordion small ghost panel vertical padding
 * @cssprop --bq-accordion--panel-small-ghost-padding-start - Accordion small ghost panel start padding
 * @cssprop --bq-accordion--panel-small-ghost-padding-end - Accordion small ghost panel end padding
 * @cssprop --bq-accordion--panel-medium-ghost-padding-y - Accordion medium ghost panel vertical padding
 * @cssprop --bq-accordion--panel-medium-ghost-padding-start - Accordion medium ghost panel start padding
 * @cssprop --bq-accordion--panel-medium-ghost-padding-end - Accordion medium ghost panel end padding
 */
export declare class BqAccordion {
    private accordion;
    private prefixElem;
    private suffixElem;
    private detailsElem;
    el: HTMLBqAccordionElement;
    private hasPrefix;
    private hasSuffix;
    /** The appearance style of the Accordion */
    appearance: TAccordionAppearance;
    /** If true, the Accordion is disabled */
    disabled: boolean;
    /** If true, the Accordion is expanded */
    expanded: boolean;
    /**
     * Animation is set through JS when the browser does not support CSS calc-size()
     * If true, the Accordion animation, will be disabled. No animation will be applied.
     */
    noAnimation: boolean;
    /** If true, the Accordion expand icon is rotate 180deg when expanded */
    rotate: boolean;
    /** The size of the Accordion */
    size: TAccordionSize;
    checkPropValues(): void;
    handleExpandedChange(): void;
    handleDisabledChange(): void;
    handleJsAnimation(): void;
    /** Handler to be called when the accordion loses focus */
    bqBlur: EventEmitter<HTMLBqAccordionElement>;
    /** Handler to be called when the accordion gets focus */
    bqFocus: EventEmitter<HTMLBqAccordionElement>;
    /** Handler to be called when the accordion is opened */
    bqOpen: EventEmitter<HTMLBqAccordionElement>;
    /** Handler to be called after the accordion is opened */
    bqAfterOpen: EventEmitter<HTMLBqAccordionElement>;
    /** Handler to be called when the accordion is closed */
    bqClose: EventEmitter<HTMLBqAccordionElement>;
    /** Handler to be called after the accordion is closed */
    bqAfterClose: EventEmitter<HTMLBqAccordionElement>;
    /** Handler to be called when the accordion is clicked */
    bqClick: EventEmitter<HTMLBqAccordionElement>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    onAccordionTransitionEnd(event: CustomEvent): void;
    private handleClick;
    private handleFocus;
    private handleBlur;
    private handlePrefixSlotChange;
    private handleSuffixSlotChange;
    private get open();
    private get isCssInterpolateSizeSupported();
    render(): any;
}
