import type { E2EPage } from '@stencil/core/testing';
/**
 * Enhances page to retrieve element style by a given selector
 * @param {E2EPage} page - stencil instance of puppeteer page
 * @param {String} selector - selector to be passed to querySelector, it supports stencil `>>>` selector
 * @returns {Object} style declaration
 */
export declare const computedStyle: <T extends keyof CSSStyleDeclaration>(page: E2EPage, selector: string, filter?: ReadonlyArray<T>) => Promise<Pick<CSSStyleDeclaration, T>>;
