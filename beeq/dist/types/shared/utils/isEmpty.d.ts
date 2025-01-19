type TCollection = Map<unknown, unknown> | Array<unknown> | Record<string, unknown> | Set<unknown> | null | undefined;
/**
 * Check if the value is an empty array, object, set, map
 * @param value the value to be checked
 * @returns {boolean} true if value is empty
 */
export declare const isEmpty: <T extends TCollection>(value: T) => boolean;
export {};
