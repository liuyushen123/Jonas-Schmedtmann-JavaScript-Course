"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
let accounts;

let currentAccount;
let isSorted = false;

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");
const labelAsOf = document.querySelector(".balance__as-of");
const labelCurrentBalance = document.querySelector(".balance__label");
const labelIn = document.querySelector(".summary__label--in");
const labelOut = document.querySelector(".summary__label--out");
const labelTransfer = document.querySelector(".transfer__operation__text");
const labelInterest = document.querySelector(".summary__label--interest");
const labelTransferTo = document.querySelector(".transfer__to__label");
const labelAmount = document.querySelectorAll(".amount__label");
const dateSelector = document.querySelector(".date");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// AI codes! Will fix after async section!!!!!!

const initializeData = async function () {
  try {
    // 1. Check if we already have saved data in the browser
    const storedData = localStorage.getItem("bankistAccounts");

    if (storedData) {
      // ✅ We have saved data! Parse it and use it.
      accounts = JSON.parse(storedData);
      console.log("💾 Data loaded from localStorage");
    } else {
      // 🌐 No saved data. Fetch the default data from your JSON file!
      const response = await fetch("Data/accounts.json");

      if (!response.ok) throw new Error("Could not fetch accounts.json");

      const data = await response.json();
      accounts = data; // Assign the fetched data to our variable

      // Immediately save this fresh data to localStorage for next time
      localStorage.setItem("bankistAccounts", JSON.stringify(accounts));
      console.log("🌐 Data fetched from JSON and saved to browser");
    }
  } catch (error) {
    console.error("❌ Error initializing data:", error);
  }
};

const saveProgress = function () {
  localStorage.setItem("bankistAccounts", JSON.stringify(accounts));
};

// Call the function immediately so the data loads before the user does anything
initializeData();

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES / My Code!

const emptyField = function (selector) {
  selector.value = "";
};

const selectorElementInvisiable = function (selector, isVisible = true) {
  selector.style.opacity = isVisible ? 0 : 1;
};

const calcTotalBalance = function (account) {
  const balance = account.movements.reduce(function (
    accumulator,
    movement,
    index,
    array,
  ) {
    return accumulator + movement.amount;
  }, 0);

  return balance;
};

const calcTotalDeposit = function (account) {
  const incomes = account.movements
    .filter(function (movement) {
      return movement.amount > 0;
    })
    .reduce(function (accumulator, movement) {
      return accumulator + movement.amount;
    }, 0);

  return formatCurrency(incomes, account.currency, account.locale);
};

const calcTotalWithdrawal = function (account) {
  const outcomes = account.movements
    .filter(function (movement) {
      return movement.amount < 0;
    })
    .reduce(function (accumulator, movement) {
      return (accumulator -= movement.amount);
    }, 0);

  return formatCurrency(Math.abs(outcomes), account.currency, account.locale);
};

const calculateTotalInterest = function (account) {
  const totalInterest =
    account.movements
      .filter(function (currentMovement) {
        return currentMovement.amount > 0;
      })
      .map(function (currentMovement) {
        return currentMovement.amount * account.interestRate;
      })
      .reduce(function (accumulator, movement) {
        return (accumulator += movement);
      }, 0) / 100;
  return Number(totalInterest.toFixed(2));
};

const updateLanguage = function (account) {
  const i18n = {
    "en-US": {
      // Login
      user: "User",
      pin: "PIN",

      // Welcome
      welcomeBack: "Welcome back",

      // Balance
      currentBalance: "Current balance",
      asOf: "As of",

      // Operations
      transferTitle: "Transfer money",
      loanTitle: "Request loan",
      closeTitle: "Close account",

      // Form Labels
      transferTo: "Transfer to",
      amount: "Amount",

      // Close Account
      confirmUser: "Confirm user",
      confirmPin: "Confirm PIN",

      // Movement Types
      deposit: "Deposit",
      withdrawal: "Withdrawal",

      // Relative Dates
      today: "Today",
      yesterday: "Yesterday",
      daysAgo: "days ago",

      // Summary
      in: "In",
      out: "Out",
      interest: "Interest",

      // Logout timer
      logoutTimer: "You will be logged out in",

      // Sort
      sort: "Sort",
    },

    "zh-CN": {
      // Login
      user: "用户名",
      pin: "密码",

      welcomeBack: "欢迎回来",

      currentBalance: "当前余额",
      asOf: "更新于",

      transferTitle: "转账",
      loanTitle: "申请贷款",
      closeTitle: "注销账户",

      transferTo: "转账对象",
      amount: "金额",

      confirmUser: "确认用户",
      confirmPin: "确认密码",

      deposit: "存款",
      withdrawal: "取款",

      today: "今天",
      yesterday: "昨天",
      daysAgo: "天前",

      in: "收入",
      out: "支出",
      interest: "利息",

      logoutTimer: "您将在以下时间后退出登录",

      sort: "排序",
    },

    "en-GB": {
      // Login
      user: "User",
      pin: "PIN",

      welcomeBack: "Welcome back",

      currentBalance: "Current balance",
      asOf: "As of",

      transferTitle: "Transfer funds",
      loanTitle: "Request loan",
      closeTitle: "Close account",

      transferTo: "Transfer to",
      amount: "Amount",

      confirmUser: "Confirm user",
      confirmPin: "Confirm PIN",

      deposit: "Deposit",
      withdrawal: "Withdrawal",

      today: "Today",
      yesterday: "Yesterday",
      daysAgo: "days ago",

      in: "In",
      out: "Out",
      interest: "Interest",

      logoutTimer: "You will be logged out in",

      sort: "Sort",
    },

    "ja-JP": {
      // Login
      user: "ユーザー",
      pin: "暗証番号",

      welcomeBack: "お帰りなさい",

      currentBalance: "現在の残高",
      asOf: "時点",

      transferTitle: "送金",
      loanTitle: "ローン申請",
      closeTitle: "口座解約",

      transferTo: "送金先",
      amount: "金額",

      confirmUser: "ユーザー確認",
      confirmPin: "暗証番号確認",

      deposit: "入金",
      withdrawal: "出金",

      today: "今日",
      yesterday: "昨日",
      daysAgo: "日前",

      in: "入金",
      out: "出金",
      interest: "利息",

      logoutTimer: "次の時間でログアウトされます",

      sort: "並び替え",
    },

    "ko-KR": {
      // Login
      user: "사용자",
      pin: "비밀번호",

      welcomeBack: "다시 오신 것을 환영합니다",

      currentBalance: "현재 잔액",
      asOf: "기준",

      transferTitle: "송금",
      loanTitle: "대출 신청",
      closeTitle: "계좌 해지",

      transferTo: "송금 대상",
      amount: "금액",

      confirmUser: "사용자 확인",
      confirmPin: "비밀번호 확인",

      deposit: "입금",
      withdrawal: "출금",

      today: "오늘",
      yesterday: "어제",
      daysAgo: "일 전",

      in: "입금",
      out: "출금",
      interest: "이자",

      logoutTimer: "다음 시간 후 로그아웃됩니다",

      sort: "정렬",
    },
  };

  return i18n[account.locale];
};

const updateUI = function (account) {
  const userLanguagePack = updateLanguage(account);
  const totalInterest = calculateTotalInterest(account);
  account.totalBalance = calcTotalBalance(account);

  labelSumInterest.textContent = formatCurrency(
    totalInterest,
    account.currency,
    account.locale,
  );

  dateSelector.textContent = formatCurrentDate(account);
  labelBalance.textContent = formatCurrency(
    account.totalBalance,
    account.currency,
    account.locale,
  );

  labelAsOf.textContent = userLanguagePack.asOf;
  labelCurrentBalance.textContent = userLanguagePack.currentBalance;
  labelIn.textContent = userLanguagePack.in;
  labelOut.textContent = userLanguagePack.out;
  labelInterest.textContent = userLanguagePack.interest;
  labelTransfer.textContent = userLanguagePack.transferTitle;
  labelTransferTo.textContent = userLanguagePack.transferTo;
  labelAmount.textContent = userLanguagePack.amount;

  btnSort.textContent = `↓ ${userLanguagePack.sort}`;

  labelSumIn.textContent = calcTotalDeposit(account);
  labelSumOut.textContent = calcTotalWithdrawal(account);

  labelWelcome.textContent = `${userLanguagePack.welcomeBack}, ${account.owner.split(" ")[0]}!`;
  displayMovements(account, userLanguagePack);
};

const verifyLogin = function (account) {
  if (Number(inputLoginPin.value) !== account?.pin) {
    console.log("Thats is the wrong password or user does not exists");
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginUsername.blur();
    inputClosePin.blur();
    return;
  }
  updateUI(account);
  selectorElementInvisiable(containerApp, false);
  emptyField(inputLoginUsername);
  emptyField(inputLoginPin);
};

const formatCurrency = function (
  value,
  desiredCurrency = "USD",
  locale = "en-US",
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: desiredCurrency,
  }).format(value);
};

const formatCurrentDate = function (account, date = new Date()) {
  return new Intl.DateTimeFormat(account.locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

const formatMovementDate = function (
  account,
  date,
  { today, yesterday, daysAgo },
) {
  const currentDate = new Date();
  const difference = Math.round(
    Math.abs(date - currentDate) / (1000 * 60 * 60 * 24),
  );
  if (difference === 0) return today;
  if (difference === 1) return yesterday;
  if (difference <= 7) return `${difference} ${daysAgo}`;

  return new Intl.DateTimeFormat(account.locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
};
const displayMovements = function (
  account,
  userLanguagePack,
  sortDecisionMaker = false,
) {
  if (!account.movements) return;

  const movements = sortDecisionMaker
    ? account.movements.slice().sort((a, b) => a.amount - b.amount)
    : account.movements;

  containerMovements.innerHTML = "";

  movements.forEach(function (movement, index, array) {
    const movementType = movement.amount > 0 ? "deposit" : "withdrawal";
    const movementLabel = userLanguagePack[movementType];

    const date = formatMovementDate(
      account,
      new Date(movement.date),
      userLanguagePack,
    );
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${movementType}">${movementLabel}</div>
      <div class="movements__date">${date}</div>
      <div class="movements__value">${formatCurrency(movement.amount, account.currency, account.locale)}</div>
    </div>
      `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const findUserByUserName = function (username) {
  const desireAccount = accounts.find(function (account, index, array) {
    return account.username === username;
  });

  // This will return the object that match the passed in username
  return desireAccount;
};

const findAccountIndex = function (account) {
  const desireAccount = accounts.findIndex(function (acc) {
    return acc === account;
  });

  return desireAccount;
};

const appendMovement = function (account, amount, date = new Date()) {
  account.movements.push({
    amount,
    date: date.toISOString(),
  });
};

const convertCurrency = async function (
  toAccount,
  fromAccount,
  amountToTransfer = 0,
) {
  try {
    const apiKey = "03484341a0f7578ef5f312ca";

    const requestUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromAccount.currency}`;

    const apiResponse = await fetch(requestUrl);

    if (!apiResponse.ok) throw new Error("Failed to fetch exchange rates");

    const exchangeData = await apiResponse.json();

    const targetExchangeRate =
      exchangeData.conversion_rates[toAccount.currency];

    if (!targetExchangeRate) throw new Error("Unsupported currency");

    const convertedAmount = Number(
      (amountToTransfer * targetExchangeRate).toFixed(2),
    );

    console.log(
      `${amountToTransfer} * ${targetExchangeRate} = ${convertedAmount}`,
    );

    return {
      convertedAmount,
      exchangeRate: targetExchangeRate,
      fromCurrency: fromAccount.currency,
      toCurrency: toAccount.currency,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  const foundAccount = findUserByUserName(inputLoginUsername.value);
  if (!foundAccount) {
    console.log("❌ Account not found!");
    return;
  }

  currentAccount = foundAccount;
  inputLoginUsername.blur();
  inputLoginPin.blur();
  verifyLogin(currentAccount);
});

btnTransfer.addEventListener("click", async function (e) {
  e.preventDefault();
  const receiverAccount = findUserByUserName(inputTransferTo.value);

  const transferAmount = Number(inputTransferAmount.value);

  if (transferAmount <= 0) {
    console.log("❌ Invalid amount");
    return;
  }

  if (!receiverAccount) {
    console.log("❌ Receiver not found");
    return;
  }

  const conversionData = await convertCurrency(
    receiverAccount,
    currentAccount,
    transferAmount,
  );

  if (currentAccount?.totalBalance < transferAmount) {
    console.log(currentAccount.totalBalance);
    console.log("❌ Not enough balance");
    return;
  }

  if (receiverAccount?.username === currentAccount?.username) {
    console.log("❌ Cannot transfer to yourself");
    return;
  }

  if (!conversionData) {
    console.log("❌  Cannot convert currency");
    return;
  }

  // ✅ If all pass

  console.log(
    `Converting from ${conversionData.fromCurrency} to ${conversionData.toCurrency}
  with exchange rate of ${conversionData.exchangeRate}`,
  );

  appendMovement(currentAccount, -transferAmount);
  appendMovement(receiverAccount, conversionData.convertedAmount);

  updateUI(currentAccount);

  inputTransferAmount.value = "";
  inputTransferTo.value = "";

  inputTransferAmount.blur();
  inputTransferTo.blur();
  saveProgress();
  console.log("✅ Transfer valid");
});
btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  const username = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);

  const account = findUserByUserName(username);

  // Empty the field
  inputCloseUsername.value = inputClosePin.value = "";
  inputCloseUsername.blur();
  inputClosePin.blur();

  // Checking account exists or not
  if (!account) {
    console.log("❌ Account does not exist");
    return;
  }
  // Check if the pin is right
  if (account.pin !== pin) {
    console.log("❌ Incorrect PIN");
    return;
  }

  const index = findAccountIndex(account);

  console.log("Validating passed ✅");
  console.log(`Deleting ${username}`);
  console.log(`Deleting account at index ${index}`);

  accounts.splice(index, 1);

  // If user is deleting the current account
  // We will reset it to login
  if (!currentAccount || account === currentAccount) {
    labelWelcome.textContent = "Log in to get started";
    selectorElementInvisiable(containerApp);
  }
  saveProgress();
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const requestLoanAmount = Math.floor(inputLoanAmount.value);

  inputLoanAmount.value = "";
  inputLoanAmount.blur();
  if (isNaN(requestLoanAmount)) {
    console.log("❌ Can not take string as input!!");
    return;
  }

  if (!currentAccount) {
    console.log("❌ Can not find the current account");
    return;
  }

  // if (requestLoanAmount < 500) {
  //   console.log("❌ Amount of the loan requested is too low");
  //   return;
  // }

  const isUserQualified = currentAccount.movements.some(function (movement) {
    return movement.amount > requestLoanAmount * 0.1;
  });

  if (isUserQualified) {
    console.log("✅ Loan approved!");
    appendMovement(currentAccount, requestLoanAmount, new Date());
    updateUI(currentAccount);
  } else {
    console.log("❌ Loan disapproved: No large enough deposits found.");
  }

  saveProgress();
});

btnSort.addEventListener("click", function (e) {
  e.preventDefault();

  displayMovements(currentAccount, !isSorted);
  isSorted = !isSorted;
});
/////////////////////////////////////////////////
