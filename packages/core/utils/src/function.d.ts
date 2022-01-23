import { FunctionArguments } from "./types";
export declare function callAllHandlers<T extends (event: any) => void>(...fns: (T | undefined)[]): (event: FunctionArguments<T>[0]) => void;
//# sourceMappingURL=function.d.ts.map