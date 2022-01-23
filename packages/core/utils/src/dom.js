export function canUseDOM() {
    return !!(typeof window !== "undefined" &&
        window.document &&
        window.document.createElement);
}
export const isBrowser = canUseDOM();
export const dataAttr = (condition) => (condition ? "" : undefined);
export const ariaAttr = (condition) => condition ? true : undefined;
export const cx = (...classNames) => classNames.filter(Boolean).join(" ");
