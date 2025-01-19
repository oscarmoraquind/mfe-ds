/**
 * Implements setTimeout using requestAnimationFrame. Uses setTimeout if wait is 0.
 *
 * @param {Function} func - The function to timeout.
 * @param {Number} wait - The number of milliseconds to delay.
 * @param {Any[]} args - The arguments of func.
 * @returns {void}
 */
export declare const setRafTimeout: <TFunc extends (...args: any[]) => void>(func: TFunc, wait: number, ...args: Parameters<TFunc>) => (() => void);
