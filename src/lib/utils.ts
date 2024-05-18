export function groupByField(
  arr: MenuItemType[],
  field: keyof MenuItemType
): Record<string, MenuItemType[]> {
  return arr.reduce((acc, item) => {
    const key = item[field];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
}
