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