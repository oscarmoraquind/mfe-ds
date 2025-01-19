import type { E2EPage } from '@stencil/core/testing';
export type BqHTMLTagNameMap = keyof {
    [TAG in keyof HTMLElementTagNameMap as TAG extends `bq-${string}` ? TAG : never]: TAG extends `bq-${string}` ? TAG : never;
};
/**
 * Enhances page to set and retrieve properties based on attributes parameter. It typed against bq web components
 * @param {E2EPage} page - stencil instance of puppeteer page
 * @param {String} element - element selector
 * @param {Object} attributes - attributes that will be set on element instance
 * @returns {Object} attributes that were set on element instance
 */
export declare const setProperties: <T extends keyof HTMLElementTagNameMap = "bq-checkbox" | "bq-switch" | "bq-radio-group" | "bq-select" | "bq-date-picker" | "bq-textarea" | "bq-input" | "bq-slider" | "bq-accordion" | "bq-accordion-group" | "bq-alert" | "bq-avatar" | "bq-badge" | "bq-breadcrumb" | "bq-breadcrumb-item" | "bq-button" | "bq-card" | "bq-col" | "bq-dialog" | "bq-divider" | "bq-drawer" | "bq-dropdown" | "bq-empty-state" | "bq-grid" | "bq-icon" | "bq-logo" | "bq-notification" | "bq-option" | "bq-option-group" | "bq-option-list" | "bq-page-title" | "bq-panel" | "bq-progress" | "bq-radio" | "bq-row" | "bq-side-menu" | "bq-side-menu-item" | "bq-spinner" | "bq-status" | "bq-step-item" | "bq-steps" | "bq-tab" | "bq-tab-group" | "bq-tag" | "bq-text" | "bq-toast" | "bq-tooltip">(page: E2EPage, element: T, attributes: Partial<HTMLElementTagNameMap[T]>) => Promise<{}>;
