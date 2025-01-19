export declare const INPUT_TYPE: readonly ["date", "datetime-local", "email", "number", "password", "search", "tel", "text", "time", "url"];
export type TInputType = (typeof INPUT_TYPE)[number];
export declare const INPUT_VALIDATION: readonly ["error", "none", "success", "warning"];
export type TInputValidation = (typeof INPUT_VALIDATION)[number];
export type TInputValue = string | number | string[];
