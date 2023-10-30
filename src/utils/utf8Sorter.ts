function utf8Sorter(a: string, b: string) {
  return b.localeCompare(a, 'fa', { sensitivity: 'base' });
}
export default utf8Sorter;
