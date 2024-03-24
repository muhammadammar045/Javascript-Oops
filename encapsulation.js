class BankAccount {
    #accountNumber;
    #accountHolderName;
    #balance;

    constructor(accountNumber, accountHolderName, balance) {

        if (typeof accountNumber === 'string' && typeof accountHolderName === 'string' && typeof balance === 'number' && !isNaN(balance)) {

            this.#accountNumber = accountNumber;
            this.#accountHolderName = accountHolderName;
            this.#balance = balance;

        } else {
            console.log("Invalid input. Please provide valid account details.");
        }
    }

    showAccountDetails() {
        console.log('===========================================================================')
        console.log(`Account Number: ${this.#accountNumber}`);
        console.log(`Account Holder Name: ${this.#accountHolderName}`);
        console.log(`Balance: ${this.#balance}`);
        console.log('===========================================================================')

    }

    // without validation

    // deposit(amount) {
    //     this.#balance += amount;
    //     this.showAccountDetails();
    // }

    deposit(amount) {
        if (amount >= 0) {
            this.#balance += amount;
        } else {
            console.log("Balance cannot be negative.");
        }
        this.showAccountDetails();
    }

    withdraw(amount) {
        if (this.#balance >= amount) {
            this.#balance -= amount;
            this.showAccountDetails();
        } else {
            console.log("Insufficient Balance");
        }
    }

    set updateBalance(newBalance) {
        if (newBalance >= 0) {
            this.#balance = newBalance;
            this.showAccountDetails();

        } else {
            console.log("Balance cannot be negative.");
        }
    }
}

let myBankAccount = new BankAccount("123456", "AMMAR AFRIDI", 200);
myBankAccount.showAccountDetails();

// thats why setters are needed so we can validate the input
// myBankAccount.deposit("hello");
// myBankAccount.deposit(200);

// myBankAccount.updateBalance(200);  // Wrong Way
// myBankAccount.updateBalance = 200; // Right Way


// myBankAccount.withdraw(0)




// undefined bcz its is not accessible here

// console.log(myBankAccount.accountNumber)
// console.log(myBankAccount.accountHolderName)
// console.log(myBankAccount.balance)