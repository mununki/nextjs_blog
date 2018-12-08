# Making virtualenv for staring Django project on MacOS

by Moondaddi on 2018-08-25

---

### Commands examples to make a virtualenv and prerequisites for Django project start on MacOS

<br />

> The below commands are working only for MacOS

<br />

## 1. Make the project foler

```code
$ mkdir some_project
$ cd some_project
```

<br />

## 2. Set up Virtualenv

```code
$ python -m venv env_some_project
```

> I'm using pyenv for version control of python

<br />

## 3. Activate the virtualenv

```code
$ source ./env_some_project/bin/activate
```

> Note: prefix (env_some_project) will appear when virtual env is activated successfully

<br />

## 4. Install Django

```code
$ pip3 install django
```

<br />

## 5. Start project

```code
$ django-admin startproject some_project
```

<br />

## 6. Start app

```code
$ python manage.py startapp some_app
```

<br />

## 7. settings.py

<br />

### 7-1. Add app in [INSTALLED_APPS]

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.humanize',
    'some_app',
]
```

<br />

### 7-2. Setting DB

> postgres

```python
if 'RDS_DB_NAME' in os.environ:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': os.environ['RDS_DB_NAME'],
            'USER': os.environ['RDS_USERNAME'],
            'PASSWORD': os.environ['RDS_PASSWORD'],
            'HOST': os.environ['RDS_HOSTNAME'],
            'PORT': os.environ['RDS_PORT'],
        }
    }
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': DB_NAME,
            'USER': DB_USER,
            'PASSWORD': DB_PASSWORD,
            'HOST': 'localhost',
            'PORT': '',
        }
    }
```
