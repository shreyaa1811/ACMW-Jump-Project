---
title: Installing databases in Ubuntu
sidebar_label: Installation of databases
description: Steps to install databases(MySQL,PostgreSQL and MongoDB) on a Ubuntu system
---

# Installing various Databases on an Ubuntu System using the Terminal

Let us see how to set up MySQL, PostgreSQL and MongoDB on an Ubuntu System

---

## Installation of MySQL

![MySQL Logo](/img/SQL.png)

#### Steps :
1. Open the terminal on your ubuntu system 
2. Type the following commands
**(Replace dbadmin and YourStrongPassword)**
```
sudo apt update
sudo apt install mysql-server -y
```

```
sudo mysql_secure_installation
```

3. Choose 'Y' to set up VALIDATE PASSWORD component(recommended)
4. Set a strong password for root
5. Choose the options as indicated below for the following :
  - Remove anonymous users - Y
  - Disallow root login remotely - Y for security, N if you need root remote access
  - Remove test database - Y
  - Reload privilege tables - Y
6. Type the following commands
```
sudo mysql -u root -p
```

```
CREATE USER 'dbadmin'@'%' IDENTIFIED BY 'YourStrongPassword';
```
```
GRANT ALL PRIVILEGES ON *.* TO 'dbadmin'@'%' WITH GRANT OPTION;
```
```
FLUSH PRIVILEGES;
```
```
EXIT;
```
---

## Installation of PostgreSQL

![postgres Logo](/img/postgres.png)

#### Steps
1. Open the terminal on your ubuntu system
2. Type the following commands
**(Replace dbadmin and YourStrongPassword)**
```
sudo apt update
sudo apt install postgresql postgresql-contrib -y
```

```
sudo systemctl status postgresql
```

```
CREATE USER dbadmin WITH PASSWORD 'YourStrongPassword' SUPERUSER;
```
```
CREATE DATABASE testdb OWNER dbadmin;
```
```
\q
```

---

## Installation of MongoDB

![MongoDB Logo](/img/mongo.png)

