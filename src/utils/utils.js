export const enToPerNum = (enNum) => { 
    const enNumStr = enNum.toString();
    const perDigits = '۰۱۲۳۴۵۶۷۸۹'.split('');
    const per_num = enNumStr.replace(/\d/g, m => perDigits[parseInt(m)]);
    return per_num;
 }