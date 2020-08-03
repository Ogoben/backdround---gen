# program to calculate the average of three quiz mark, and then output the result

#get input from the user consisting of their name and three marks

studentName = input("Please enter the name of the student: ")

quiz1 = int(input("Enter the first quiz1 mark: "))
quiz2 = int(input("Enter the second quiz2 mark: "))
quiz3= int(input("Enter the third quiz3 mark: "))

# calculate the average and output the result

average = (quiz1 + quiz2 + quiz3) / 3
print ("The average for", studentName, "is" ,average)

# if the avg is above or equal to 80
if average >= 80:
    print("******You are a star student!")
    
else:
    #print("You need to work harder :(")
    if average >= 60 :
        print("***** Keep up the good work!")
    else :
            print("****Parent Signature Required!")