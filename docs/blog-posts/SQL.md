---
title: SQL
sidebar_label: SQL
description: Understanding SQL and its basics
---

# Introduction to SQL
SQL, or Structured Query Language, is a fundamental tool for managing relational databases. It allows users to create, modify, and query databases efficiently. In this blog, we'll explore some essential SQL concepts and provide examples to get you started.

![SQL Logo](/img/SQL.png)

---

## Essential SQL Concepts
### 1. SQL Basics
**CREATE Statement :**
Used to create database tables.
```
sql
CREATE TABLE <TABLENAME>(A1 datatype constraint, A2 datatype constraint,........,An datatype constraint);
```

**SELECT Statement :**
Used to retrieve data from a database table.
```
sql
SELECT * FROM <TABLENAME>;
```
**INSERT Statement :**
Adds new records to a table.
```
sql
INSERT INTO <TABLENAME> VALUES(VAL1,VAL2......);
```
**UPDATE Statement :**
Modifies existing records.
```
sql
UPDATE <TABLENAME> SET ....;
```
**DELETE Statement :**
Removes records from a table.
```
sql
DELETE FROM <TABLENAME>.....;
```

---
### 2. Data Integrity and Relationships
**1. Primary Key**
A unique identifier for each row in a table.
**2. Foreign Key**
Links data between tables, ensuring referential integrity.
**3. Unique Key**
Ensures all values in a column are unique, allowing one NULL value.

---

### An Example Demonstrating the 5 basic  Statements

Let us consider two tables Department and Student. In this example we will use all the above statements to demonstrate their working in various cases.

**1. Creating Both Tables**
```
CREATE TABLE Department(Dept_Name varchar(20) not null, 
Dept_Building varchar(20), 
Budget numeric(10,2));

CREATE TABLE Student(Student_ID int primary key, 
Student_Name varchar(20), Dept_Name varchar(20) not null,
foreign key(Dept_Name) on Department(Dept_Name) on delete cascade);
```
**2. Inserting records into tables**
```
INSERT INTO Department VALUES
('Biology','Crick',40000),
('English','Golden',26000),
('Maths','Newman',50000);

INSERT INTO Student VALUES
(1001,'Anthony','Biology'),
(1002,'Brianna','English'),
(1003,'George','Biology'),
(1004,'Jane','Maths');
```
**3. Select Queries(Different types)**
- Selecting all records from the Department Table
```
   SELECT * FROM Department;
```
**Output :**

*Department Table :*
| Dept_Name | Dept_Building | Budget |
| :-------: | :-----------: | :----: |
| Biology   | Crick         | 40000  |
| English   | Golden        | 26000  |
| Maths     | Newman        | 50000  |

  
- Selecting all records from the Student Table

```
  SELECT * FROM Student;
```
**Output :**

*Student Table :*
| Student_ID | Student_Name  | Department |
| :-------:  | :-----------: | :----:     |
| 1001       | Anthony       | Biology    |
| 1002       | Brianna       | English    |
| 1003       | George        | Biology    |


- Selecting only certain attributes
```
  SELECT Dept_Name, Budget FROM Department;
```
**Output :**

| Dept_Name | Budget |
| :-------: | :----: |
| Biology   | 40000  |
| English   | 26000  |
| Maths     | 50000  |

- Selecting specific records using WHERE Clause
```
  SELECT * FROM Student WHERE Student_ID = 1003;
```
**Output :**
| Student_ID | Student_Name  | Department |
| :-------:  | :-----------: | :----:     |
| 1003       | George        | Biology    |

**4. Update Queries**

Updating fields using the UPDATE Clause
```
UPDATE Department SET Budget = 60000 WHERE Dept_Name = 'Maths';
```

**Updated Table :**
| Dept_Name | Dept_Building | Budget |
| :-------: | :-----------: | :----: |
| Biology   | Crick         | 40000  |
| English   | Golden        | 26000  |
| Maths     | Newman        | 60000  |

**5. Delete Queries**

Deleting records using DELETE Clause
```
DELETE FROM Student WHERE Student_ID = 1001;
```
**Table after deletion :**
| Student_ID | Student_Name  | Department |
| :-------:  | :-----------: | :----:     |
| 1002       | Brianna       | English    |
| 1003       | George        | Biology    |

---

### 3. Advanced Concepts
**1. Views**
Virtual tables based on the result of a SELECT statement.
```
sql
CREATE VIEW employee_details AS SELECT name, age FROM employees;
```
**2. Subqueries**
Used to nest queries within other queries.
```
sql
SELECT name FROM employees WHERE salary > 
(SELECT AVG(salary) FROM employees);
```
**3. Joins**
Combine rows from two or more tables based on a related column.
```
sql
SELECT employees.name, orders.order_date
FROM employees
INNER JOIN orders ON employees.id = orders.employee_id;
```

---

## Conclusion
SQL is a powerful language that helps manage and analyze data efficiently. Understanding its basic and advanced concepts is crucial for any developer or data professional. Whether you're creating databases, querying data, or optimizing performance, SQL provides the tools you need to work effectively with relational databases.

---