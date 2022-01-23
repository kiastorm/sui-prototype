import { Booleanish } from "./types";
export declare function canUseDOM(): boolean;
export declare const isBrowser: boolean;
export declare const dataAttr: (condition: boolean | undefined) => Booleanish;
export declare const ariaAttr: (condition: boolean | undefined) => true | undefined;
export declare const cx: (...classNames: any[]) => string;
//# sourceMappingURL=dom.d.ts.map