"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const now = new Date();

console.log(new Intl.DateTimeFormat("zh-CN").format(now));

const regions = new Intl.DisplayNames(["zh-CN"], {
  type: "region",
});

const languages = new Intl.DisplayNames(["zh-CN"], {
  type: "language",
});

console.log(regions.of("US"));
console.log(languages.of("fr"));
