export type TFunction = (...args: any[]) => unknown;
type TDebounceFnReturn<T> = T extends unknown[] ? (...params: T) => void : (param: T) => void;
export type TDebounce<T> = TDebounceFnReturn<T> & {
    cancel: () => void;
} extends infer U ? U : never;
/**
 * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed
 * since the last time the debounced function was invoked.
 *
 * @param {Function} func - The function to debounce.
 * @param {Number} wait - The number of milliseconds to delay.
 * @param {Boolean} immediate - If `true`, the function triggers immediately and then waits for the interval before being called again.
 * @return {Function} The new debounced function.
 */
export declare const debounce: <TFunc extends TFunction>(func: TFunc, wait?: number, immediate?: boolean) => ((...args: Parameters<typeof func>) => void) & {
    cancel: () => void;
};
export {};
