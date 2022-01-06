/**
 * 处理router
 * 添加parantKeys
 * (扩展运算符单层浅拷贝数组引用地址)
 */
export function handleRouterInfo(
  preRouter: any[],
  parentKeys: string[],
): returnType[] {
  const result: returnType[] = preRouter?.map(function (item, _, arr) {
    const children = item?.children;
    if (children) {
      const temp = [...parentKeys] ?? [];
      item.parentKeys = [...temp];
      temp.push(item.key);
      const subParentKeys = [...temp];
      handleRouterInfo(item.children, subParentKeys);
    } else {
      const temp: string[] = item.parentKeys ?? [];
      item.parentKeys = [...temp, ...parentKeys];
    }
    return item;
  });
  return result;
}
type returnType =
  | { key: string; title: string; path: string; parentKeys: string[] }
  | false;

/**
 * 递归 查询匹配的key
 */
export function findCurrentMenuKey(
  datasource: any[],
  pathname: string,
): returnType {
  if (!pathname || pathname === '/') return false;
  let tempObj = null;
  const find = datasource.some((item) => {
    const path = item?.path;
    const children = item?.children;
    if (children) {
      const children = item?.children;
      tempObj = findCurrentMenuKey(children, pathname);
      return tempObj;
    } else if (path && path === pathname) {
      tempObj = item;
      return tempObj;
    }
  });
  if (find && tempObj) {
    return tempObj;
  } else {
    return false;
  }
}
