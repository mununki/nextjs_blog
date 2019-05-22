---
title: Commands for Postgres DB initial Setup
createdAt: 2019-02-25
filename: 2019-02-25-Commands-for-Postgres-DB-setup
category: ["backend"]
tag: ["postgres", "db"]
thumb: 2019-02-25_thumb.jpg
slug: Create DB, TABLE, USER, permission
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

## Alter database owner

```shell
postgres=# ALTER DATABASE [db_name] OWNER TO [myuser];
```

## Grant the privileges

```shell
postgres=# GRANT ALL PRIVILEGES ON DATABASE [db_name] TO [myuser];
```

## Grant a permission to create DB to user

```shell
postgres=# ALTER USER [myuser] WITH CREATEDB;
```
