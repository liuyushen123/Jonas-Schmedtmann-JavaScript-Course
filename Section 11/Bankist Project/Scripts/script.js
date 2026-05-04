"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Yuchen Liu",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

let currentAccount;

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");
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
// LECTURES / My Code!

const emptyField = function (selector) {
  selector.value = "";
};

const selectorElementInvisiable = function (selector, decisionMaker = true) {
  decisionMaker ? (selector.style.opacity = 0) : (selector.style.opacity = 1);
};

const calcTotalBalance = function (account) {
  const balance = account.movements.reduce(function (
    accumulator,
    movement,
    index,
    array,
  ) {
    return accumulator + movement;
  }, 0);

  account.totalBalance = balance;
};

const calcTotalDeposit = function (movements) {
  const incomes = movements
    .filter(function (movement) {
      return movement > 0;
    })
    .reduce(function (accumulator, movement) {
      return (accumulator += movement);
    });

  return formatCurrency(incomes, "USD");
};

const calcTotalWithdrawal = function (movements) {
  const outcomes = movements
    .filter(function (movement) {
      return movement < 0;
    })
    .reduce(function (accumulator, movement) {
      return (accumulator -= movement);
    }, 0);

  return formatCurrency(Math.abs(outcomes), "USD");
};

const calculateTotalInterest = function (account) {
  const totalInterest =
    account.movements
      .filter(function (currentMovement) {
        return currentMovement > 0;
      })
      .map(function (currentMovement) {
        return currentMovement * account.interestRate;
      })
      .reduce(function (accumulator, movement) {
        return (accumulator += movement);
      }, 0) / 100;
  return Number(totalInterest.toFixed(2));
};

const updateUI = function (account) {
  const totalInterest = calculateTotalInterest(account);
  calcTotalBalance(account);

  labelSumInterest.textContent = formatCurrency(totalInterest);
  dateSelector.textContent = dateFormatter();
  labelBalance.textContent = formatCurrency(account.totalBalance);
  labelSumIn.textContent = calcTotalDeposit(account.movements);
  labelSumOut.textContent = calcTotalWithdrawal(account.movements);
  labelWelcome.textContent = `Welcome back, ${account.owner.split(" ")[0]}!`;
  displayMovements(account.movements);
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

const formatCurrency = function (value, desiredCurrency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: desiredCurrency,
  }).format(value);
};

const dateFormatter = function () {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;

  return formattedToday;
};

const displayMovements = function (movements) {
  if (!movements) return;
  containerMovements.innerHTML = "";
  const withdrwalClass = "movements__type--withdrawal";
  const depositeClass = "movements__type--deposit";
  movements.forEach(function (movement, index, array) {
    const type = movement > 0 ? "Deposit" : "Withdrawal";
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type.toLowerCase()}">${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${formatCurrency(movement, "USD")}</div>
    </div>
      `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const computeUsername = function (accountList) {
  accountList.forEach(function (currentAccount, accountIndex, accountArray) {
    currentAccount.userName = currentAccount.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

const findUserByUserName = function (username) {
  const desireAccount = accounts.find(function (account, index, array) {
    return account.userName === username;
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

computeUsername(accounts);

accounts.forEach(function (account) {
  calcTotalBalance(account);
});

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = findUserByUserName(inputLoginUsername.value);
  inputLoginUsername.blur();
  inputLoginPin.blur();
  verifyLogin(currentAccount);
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const transferAmount = Number(inputTransferAmount.value);
  const receiverAccount = findUserByUserName(inputTransferTo.value);

  if (transferAmount <= 0) {
    console.log("❌ Invalid amount");
    return;
  }

  if (!receiverAccount) {
    console.log("❌ Receiver not found");
    return;
  }

  if (currentAccount?.totalBalance < transferAmount) {
    console.log(currentAccount.totalBalance);
    console.log("❌ Not enough balance");
    return;
  }

  if (receiverAccount?.userName === currentAccount?.userName) {
    console.log("❌ Cannot transfer to yourself");
    return;
  }

  // ✅ If all pass
  currentAccount.movements.push(-transferAmount);
  receiverAccount.movements.push(transferAmount);

  updateUI(currentAccount);

  inputTransferAmount.value = "";
  inputTransferTo.value = "";

  inputTransferAmount.blur();
  inputTransferTo.blur();

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
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const requestLoanAmount = Number(inputLoanAmount.value);

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

  if (requestLoanAmount < 500) {
    console.log("❌ Amount of the loan requested is too low");
    return;
  }

  const isUserQualified = currentAccount.movements.some(function (movement) {
    return movement > (requestLoanAmount / 10).toFixed(2);
  });

  if (isUserQualified) {
    console.log("✅ Loan approved!");
    currentAccount.movements.push(requestLoanAmount);
    updateUI(currentAccount);
  } else {
    console.log("❌ Loan disapproved: No large enough deposits found.");
  }
});
/////////////////////////////////////////////////
