ES6 Classes Project
This project focuses on implementing various ES6 classes to demonstrate object-oriented programming concepts in JavaScript. It covers topics such as class creation, inheritance, getters, setters, and static methods.

Prerequisites
Node.js (version 12.x.x or higher)
npm (Node Package Manager)
Installation
Clone the repository:

git clone https://github.com/your-username/alx-backend-javascript.git
Navigate to the project directory:

cd alx-backend-javascript/0x02-ES6_classes
Install the dependencies:

npm install
Usage
To run any of the JavaScript files, use the following command:

npm run dev <filename>
Replace <filename> with the name of the file you want to run.

Tasks
ClassRoom (0-classroom.js)

Implement a class named ClassRoom.
Accept a maxStudentsSize attribute.
Initialize Rooms (1-make_classrooms.js)

Import the ClassRoom class.
Implement a function that returns an array of 3 ClassRoom objects.
HolbertonCourse (2-hbtn_course.js)

Implement a class named HolbertonCourse.
Constructor attributes: name, length, students.
Implement getters and setters for each attribute.
Currency (3-currency.js)

Implement a class named Currency.
Constructor attributes: code, name.
Implement getters and setters for each attribute.
Implement a method named displayFullCurrency.
Pricing (4-pricing.js)

Implement a class named Pricing.
Constructor attributes: amount, currency.
Implement getters and setters for each attribute.
Implement a method named displayFullPrice.
Implement a static method named convertPrice.
Building (5-building.js)

Implement a class named Building.
Constructor attribute: sqft.
Consider this class as an abstract class.
SkyHighBuilding (6-sky_high.js)

Implement a class named SkyHighBuilding that extends from Building.
Constructor attributes: sqft, floors.
Override the evacuationWarningMessage method.
Airport (7-airport.js)

Implement a class named Airport.
Constructor attributes: name, code.
Override the default string description of the class.
HolbertonClass (8-hbtn_class.js)

Implement a class named HolbertonClass.
Constructor attributes: size, location.
When cast into a Number, it should return the size.
When cast into a String, it should return the location.
Hoisting (9-hoisting.js)

Fix the code and make it work.
Car (10-car.js)

Implement a class named Car.
Constructor attributes: brand, motor, color.
Implement a method named cloneCar.
Testing
Each task comes with a main file that you can use to test your implementation. To run the tests, use the command:

npm run dev <main-file>
Replace <main-file> with the name of the main file for the task you want to test.

Project Structure
0x02-ES6_classes/
├── 0-classroom.js
├── 1-make_classrooms.js
├── 2-hbtn_course.js
├── 3-currency.js
├── 4-pricing.js
├── 5-building.js
├── 6-sky_high.js
├── 7-airport.js
├── 8-hbtn_class.js
├── 9-hoisting.js
├── 10-car.js
├── package.json
└── README.md
Contributing
Contributions to this project are welcome. Please ensure that your code adheres to the existing style and passes all tests before submitting a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
ALX Africa for providing the project requirements and guidance.
The ES6 specification for introducing class syntax to JavaScript.
Author
Mohamed ESSRHIR

Contact
If you have any questions or feedback, please contact m.essrhir98@gmail.com
