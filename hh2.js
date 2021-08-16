const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const matchObj = RE_DATE.exec('1999-12-31');

console.log(matchObj.groups);
// groups: [Object: null prototype] { year: '1999', month: '12', day: '31' }
