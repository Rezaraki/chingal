import { Prettify } from '../../types';

function omitProperties<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const omitted = {} as Omit<T, K>;
  for (const key in obj) {
    //@ts-expect-error room for some type wrestle
    if (!keys.includes(key as K)) {
      //@ts-expect-error room for some type wrestle
      omitted[key] = obj[key];
    }
  }
  return omitted as Prettify<Omit<T, K>>;
}
export default omitProperties;
