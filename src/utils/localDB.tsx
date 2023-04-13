// Data Get Function
export const getItemsByKey = (key: string) => {
    let items = [];
    const localItems = localStorage.getItem(key);
    if (localItems) {
        items = JSON.parse(localItems)
    }
    return items;
}
// Data Set Function
export const setItemsByKey = (key: string, items: any[]) => {
    const localItems = JSON.stringify(items);
    localStorage.setItem(key, localItems);
}