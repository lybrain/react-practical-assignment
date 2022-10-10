export const addRemoveByKey = (key: string, target?: string[], toClean?:string[]) => {
  const isExist = target?.includes(key);
  const newArray = isExist
    ? target?.filter((user) => user !== key)
    : [...(target ?? []), key];
  return [newArray, toClean?.filter(k=>k!== key)];
};
