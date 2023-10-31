import { Prettify } from '../../types';

function pickProperties<T extends Record<string, unknown>>(obj: T, keys: string[]) {
  return keys.reduce(
    (acc, key) => {
      if (obj.hasOwnProperty(key)) {
        acc[key] = obj[key];
      }
      return acc;
    },
    {} as Prettify<Pick<T, (typeof keys)[number]>>,
  );
}
export default pickProperties;
