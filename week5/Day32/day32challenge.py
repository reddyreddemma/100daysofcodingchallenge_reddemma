# Ask the user to input their age
age = int(input("Please enter your age: "))

# Check the age and print a message accordingly
if age < 18:
    print("You are a minor.")
elif 18 <= age <= 65:
    print("You are an adult.")
else:
    print("You are a senior citizen.")

# Ask the user to input a number
number = float(input("Please enter a number: "))

# Check if the number is positive, negative, or zero and print the result
if number > 0:
    print("The number is positive.")
elif number < 0:
    print("The number is negative.")
else:
    print("The number is zero.")
