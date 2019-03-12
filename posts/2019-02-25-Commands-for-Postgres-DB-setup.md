---
title: Commands for Postgres DB initial Setup
createdAt: 2019-02-25
filename: 2019-02-25-Commands-for-Postgres-DB-setup
category: ["backend"]
keyword: ["postgres", "db"]
---

# Commands for Postgres DB initial setup

by Moondaddi on 2019-02-25

---

## TL;DR;

## Create DB

```shell
postgres=# CREATE DATABASE [db_name];
```

## Create User with Password

```shell
postgres=# CREATE USER [myuser] WITH ENCRYPTED PASSWORD '[password]';
```

## Grant the privileges

```shell
postgres=# GRANT ALL PRIVILEGES ON DATABASE [db_name] TO [myuser];
```

## Grant a permission to create DB to user

```shell
postgres=# ALTER USER [myuser] WITH CREATEDB;
```
