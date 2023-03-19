export declare function parseString(str: string): string;
export declare function parseNumber(num: number, format?: 'octal' | 'hex' | 'bin' | 'base-10'): string;
export declare function parseBoolean(value: boolean): string;
export declare function parseDate(date: Date | number): string;
export declare function parseBigInt(value: BigInt | bigint): string;
export declare function parseFunction(fn: ((...args: any[]) => any) | Function): string;
export declare function parseSymbol(symbol: Symbol): string;
export declare function parseKey(key: string): string;
export declare function parseValue(value: unknown): string;
export declare function parseInlineObject(obj: Record<string, any>): string;
export declare function parseArray(arr: any[]): string;
export declare function defineCustomWriters(writers: Record<string, (obj: any) => string>): void;
export default function write(obj: Record<string, any>): string;
