import { cloneDeep } from 'lodash';

/**
 * 过滤对象中的 undefined & null
 * @param obj
 */
export const filterObj = (obj: Record<string | number, any>) => {
  const result = cloneDeep(obj);
  for (let [name, v] of Object.entries(result)) {
    if (v === undefined || v === null) {
      delete result[name];
    }
  }
  return result;
};
