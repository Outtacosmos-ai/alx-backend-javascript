# TypeScript Project Tasks

This project consists of several tasks to practice TypeScript concepts. Each task is in a separate directory with its own configuration files.

## Project Structure

- task_0/
- task_1/
- task_2/
- task_3/
- task_4/
- task_5/

Each task directory contains the following configuration files:
- package.json
- tsconfig.json
- webpack.config.js
- .eslintrc.js (in task_0 only)

## Task 0: Creating an interface for a student

In this task, you'll create an interface for a student and render a table with student information.

1. Create an interface named `Student`:

```typescript
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
```

2. Create two students and an array containing them:

```typescript
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "London"
};

const studentsList: Student[] = [student1, student2];
```

3. Render a table with the student information using Vanilla JavaScript.

## Task 1: Building a Teacher interface

Create an interface named `Teacher` with the following attributes:

```typescript
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}
```

Example usage:

```typescript
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
```

## Task 2: Extending the Teacher class

Create an interface named `Directors` that extends `Teacher`:

```typescript
interface Directors extends Teacher {
  numberOfReports: number;
}
```

Example usage:

```typescript
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
```

... (continue with other tasks)
