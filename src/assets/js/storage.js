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

/**
 * @param {String} key -localStorage的key值
 * @returns {Object} -返回对象格式的数据
 */
export function getStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}

/**
 * 返回单条记录
 * @param {Number} id -记录id 
 * @returns {Object} -记录的数据对象
 */
export function getSingleRecord(id) { 
  const list = getStorage('record').data;
  let single = null;
  //遍历查询
  for (let i = 0; i < list.length; i++) {
    if(list[i].id == id){
      single = list[i];
      break;
    }
  }
  return single;
}

/**
 * 
 * @param {Number} id 
 */
export function delSingleRecord(id) {
  const record = getStorage('record');
  let flag = false;
  //遍历查询
  for (let i = 0; i < record.data.length; i++) {
    if(record.data[i].id == id){
      record.data.splice(i,1);
      flag = true;
      break;
    }
  }
  //覆盖新数据
  localStorage.setItem('record',JSON.stringify(record));
  return flag;
}