export function callAllHandlers(...fns) {
    return function func(event) {
        fns.some((fn) => {
            fn === null || fn === void 0 ? void 0 : fn(event);
            return event === null || event === void 0 ? void 0 : event.defaultPrevented;
        });
    };
}
