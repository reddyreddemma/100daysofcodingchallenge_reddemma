# Use a for loop to print the square of each number from 1 to 5
for i in range(1, 6):
    print(i**2)

# Use a while loop to print the cube of each number from 1 to 3
j = 1
while j <= 3:
    print(j**3)
    j += 1

# Create a list of favorite books and use a for loop to print each book's title
favorite_books = ["1984", "To Kill a Mockingbird", "The Great Gatsby"]
for book in favorite_books:
    print(book)

# Use a while loop to continuously ask the user to enter a number until they enter 0
sum_of_numbers = 0
while True:
    number = int(input("Please enter a number (0 to stop): "))
    if number == 0:
        break
    sum_of_numbers += number

# Print the sum of all entered numbers
print("The sum of all entered numbers is:", sum_of_numbers)
