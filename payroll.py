# Program Name:     Payroll Calculations
#
# Author:           Akachi Benyeogor
#
# Date:             28-June-2020
#
# Description:      Payroll Calculation


#                   The app will first prompt the user for employee name, hours worked and hourly rate.

#                   Then a loop is begun that asks for the tax status of the employee. If the employee is tax exempt,the deduction percentage is zero,if not,
#                   the user is prompted for a percentage of gross pay that is deducted.

#                   The pay roll calculation is carried out

#                   The output is shown, depicting the employee's name, hours worked, hourly rate, gross pay, deduction and net pay.



# function that defines the tax status of the employee,user input is validated.

def taxStatus():
    taxExempt    = input("Is the employee tax exempt? [Y/N]")
    while taxExempt not in ["Y" or "N"] :
        print("***Error,incorrect value...Please enter [Y] or [N], you entered", taxExempt)
        taxExempt    = input("Is the employee tax exempt? [Y/N]")
    if taxExempt == "Y" :
        deductionPercentage = 0
    elif taxExempt == "N" :
        deductionPercentage = int(input ("Enter the percentage of gross pay that is deducted: "))

    return deductionPercentage


# function that caluclates the gross pay, deduction and net pay. Output is formatted.

def payrollData ():
    deductionPercentage      = taxStatus()
    grossPay                 = hoursWorked * hourlyRate
    dollarAmountOfDeductions = grossPay * (deductionPercentage / 100)
    netPay                  = grossPay - dollarAmountOfDeductions
    print ("---------------------------------------------------------------- \n" 
           "Employee Name:              ", employeeName," \n"
             
           "Hourly Rate:      $" + "          " + ("{:.2f}".format(hourlyRate)),"\n"
           
           "Hours Worked:               ",hoursWorked,"\n"
           
           "                       "    "------------------ \n" 
           "\n"
           "\n"
           " Gross Pay:       $" + "       " + ("{:.2f}".format(grossPay)), "\n"
           
           " Deductions:     -$" + "         " +("{:.2f}".format(dollarAmountOfDeductions))," \n"
           
           "                      "    "------------------ \n"
           
           " Net Pay:         $" + "       " +("{:.2f}".format(netPay))," \n" )
            
    
    return grossPay, dollarAmountOfDeductions, netPay

# prompts the user for input

employeeName = input("Enter the employee's name: ")

hoursWorked  = float(input("Enter the hours worked: "))

hourlyRate   = float(input("Enter the hourly rate of pay: "))

payrollData()