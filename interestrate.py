SENTINEL = 0
annualInterestRate = float()
annualInterestRate = 1
year = int()
year =1
intMoney = int(input("What is your principal amount invested?:"))
initialPrincipal = intMoney

while annualInterestRate != SENTINEL:
    annualInterestRate = float(input("What is the interest rate for year " + str(year)+ "(in percent)?: "))
    interestRate = annualInterestRate / 100
    balance = initialPrincipal * (1 + interestRate)
    initialPrincipal = balance
    year += 1

yearCount = year - 2
avgYearlyInc = (balance - intMoney) / yearCount
print("At the end of", yearCount, "years, your investment will be worth", balance,"Your average yearly income is ", avgYearlyInc)
