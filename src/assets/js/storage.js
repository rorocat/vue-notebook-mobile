/**
 * 用于对storage的操作
 */

/**
 * 
 * @param {Object} item 
 */
export function setStorage(item) {
  //获取localStorage中的数据并转为对象
  const record = JSON.parse(localStorage.getItem('record'));
  record.data.unshift(item);
  console.log(record);
  localStorage.setItem('record',JSON.stringify(record));
}