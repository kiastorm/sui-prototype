export function addItem<T>(array: T[], item: T): T[] {
    return [...array, item];
}

export function removeItem<T>(array: T[], item: T): T[] {
    return array.filter((eachItem) => eachItem !== item);
}
