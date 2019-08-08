const date = new Date();
export const year = date.getFullYear();
export const month = date.getMonth() + 1;
export const day = date.getDate();
export const hours = date.getHours();
export const minutes = date.getMinutes();

// 根据当前年月日获取当月第一天是星期几
export function firstDay(year, month) {
  return new Date(Date.UTC(year, month - 1, 1)).getDay();
}

//根据年月得出当月共有多少天
export function numberDay(year, month) {
  //闰年每月的天数
  const arr1 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  //平年每月的天数
  const arr2 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  //能被 4 整除 但是不能被100整除 或者能被四百整除
  if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    return arr1[month - 1];
  } else {
    return arr2[month - 1];
  }
}

export function week(year,month,day) {
  const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const date = new Date(year,month-1,day).getDay();
  return weeks[date];
}

/**
 * 时间原始值转换为date对象
 * @param {Nummber} dateVal -时间原始值
 */
function conversion(dateVal) {
  return new Date(dateVal);
}
