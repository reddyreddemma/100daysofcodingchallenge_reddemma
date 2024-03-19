# Define a function called calculate_area
def calculate_area(length, width):
    return length * width

# Use the calculate_area function to find the area of a rectangle with dimensions 8x5
rectangle_area = calculate_area(8, 5)
print(f"The area of the rectangle is {rectangle_area} square units.")

# Create a dictionary representing a person's information
person = {
    "name": "Akbar",
    "age": 30,
    "city": "Landon"
}

# Define a function called print_person_info
def print_person_info(person):
    print(f"Name: {person['name']}")
    print(f"Age: {person['age']}")
    print(f"City: {person['city']}")

# Use the print_person_info function to display the information of the person
print_person_info(person)
