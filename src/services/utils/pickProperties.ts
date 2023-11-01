import { Prettify } from '../../types';

function pickProperties<T extends Record<string, unknown>>(obj: T, keys: string[]) {
  return keys.reduce(
    (acc, key) => {
      if (obj.hasOwnProperty(key)) {
        //@ts-expect-error mysterious errot
        acc[key] = obj[key];
      }
      return acc;
    },
    {} as Prettify<Pick<T, (typeof keys)[number]>>,
  );
}
export default pickProperties;
