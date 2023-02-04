export const enToPerNum = (enNum) => {
  const enNumStr = enNum.toString();
  const perDigits = "۰۱۲۳۴۵۶۷۸۹".split("");
  const per_num = enNumStr.replace(/\d/g, (m) => perDigits[parseInt(m)]);
  return per_num;
};

export const getHahtagForm = (category) => {
  const underlined = category.replaceAll(" ", "_");
  return underlined + "#";
};

export const getExpalantoryDuration = (duration) => {
  const durationTimeSplit = duration.split(":").map((a) => +a);
  const hours = durationTimeSplit[0];
  const minutes = durationTimeSplit[1];
  return [hours, minutes];
};
