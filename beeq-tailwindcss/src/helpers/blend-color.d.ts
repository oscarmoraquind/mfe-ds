type blendOptions = {
    color: string;
    base: string;
    percentage?: number;
    property?: string;
};
export declare const blendColor: ({ color, base, percentage, property }: blendOptions) => {
    [x: string]: string;
};
export {};
