/*
🎯 任务
转换年龄
如果狗 ≤ 2 岁：
👉 人类年龄 = 2 × 狗年龄
如果狗 > 2 岁：
👉 人类年龄 = 16 + 狗年龄 × 4
筛选成年狗
只保留人类年龄 ≥ 18 的狗
计算平均年龄
求所有成年狗的人类平均年龄
用测试数据运行函数
[5, 2, 4, 1, 15, 8, 3]
[16, 6, 10, 5, 6, 1, 4]
*/

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const humanAge = data1.map(function (age, index, array) {
  if (age <= 2) {
    age *= 2;
  } else {
    age = age * 4 + 16;
  }
  return age;
});

const filteredHumanAge = humanAge.filter(function (humanAge, index, array) {
  return humanAge >= 18;
});

const averageFilteredHumanAge =
  filteredHumanAge.reduce(function (
    accumulator,
    filteredHumanAge,
    index,
    array,
  ) {
    return accumulator + filteredHumanAge;
  }, 0) / filteredHumanAge.length;

console.log(humanAge);
console.log(filteredHumanAge);
console.log(averageFilteredHumanAge);
