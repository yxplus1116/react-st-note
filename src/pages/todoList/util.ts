import { listItem } from "./types";

// 生成随机 id
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

// 传入一个数组和一个标题 判断是否有重复的
export const isRepeat = (
  arr: listItem[],
  title: string,
  isEdit: boolean = false
): boolean => {
  return arr.some((item) => {
    return item.title === title;
  });
};
