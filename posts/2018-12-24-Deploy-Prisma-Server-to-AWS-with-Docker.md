# Deploy the Prisma Server to the AWS EC2 with Docker

by moondaddi on 2018-12-24

---

## Prisma?

Simply, the [Prisma](https://www.prisma.io/) is the new ORM([Object Relational Mapping](https://en.wikipedia.org/wiki/Object-relational_mapping)) based on GraphQL query language. The Prisma can make your whole workflow to set up the graphQL API a lot easier. All you need is only graphQL schema in order to set up the graphQL API.

> ex. GraphQL schema

```js
type Tweet {
  id: ID! @unique
  createdAt: DateTime!
  text: String!
  owner: User!
  location: Location!
}

type User {
  id: ID! @unique
  createdAt: DateTime!
  updatedAt: DateTime!
  handle: String! @unique
  name: String
  tweets: [Tweet!]!
}

type Location {
  latitude: Float!
  longitude: Float!
}
```

If you make your graphQL schema to `datamodel.prisma` file. It's all set. Prisma will deploy your schema to the connected DB(Prisma Cloud or your Remote DB/Local DB) and generate all kind of graphQL schema (types and resolvers) for you automatically. Fantastic, isn't it?

## Structure

![Prisma structure](/static/images/post_img/prisma_structure.jpg)

> GraphQL API Server = GraphQL API + Prisma Server

Prisma API Server consists of two parts, `GraphQL API` + `Prisma Server`. GraphQL API is the backend layer which contains your business logic, such as querying users, sign up, log in, locations, and so on. You can set it up with Express or GraphQL Yoga, etc. Otherwise, Prisma Server means the backend server which contains all the graphQL schema as per your data model and is connected to database. Prisma suggests the Docker in order to set up Prisma Server.

This post will explain how to deploy this Prisma Server to AWS ECS and ECR service.

## Deploy the Prisma Server

## Requirements

- Docker

  > (for mac) https://hub.docker.com/editions/community/docker-ce-desktop-mac

- Prisma Cli

```shell
$ npm i -g prisma
# or
$ yarn global add prisma
```

## (Option 1) Using Docker machine

This is using docker-machine in cli. The docker-machine will create a docker machine on AWS EC2 directly. and docker-compose will compose the prisma server along with `docker-compse.yml` in docker-machine.

### Create the docker machine on AWS EC2

```shell
$ docker-machine create --driver amazonec2 --amazonec2-region ap-northeast-2 --amazonec2-vpc-id __SPECIFIC_VPC__ prisma-server-example
```

- If creating EC2 instance is failed, check your AWS credentials and IAM policy.

### Activate new machine as active host

```shell
$ docker-machine prisma-server-example
$ eval $(docker-machine env prisma-server-example)

# check docker-machine
$ docker-machine ls
```

### `docker-compose.yml` file

```yml
version: "3"
services:
  prisma:
    image: prismagraphql/prisma:1.23
    restart: always
    ports:
      - "4466:4466"
    # logging available in AWS CloudWatch
    logging:
      driver: awslogs
      options:
        awslogs-group: __AWSLOG_GROUP__
        awslogs-region: ap-northeast-2
        awslogs-stream-prefix: __AWSLOG_STREAM_PREFIX__
    environment:
      PRISMA_CONFIG: |
        port: 4466
        # managementApiSecret: __SECRET_KEY__
        databases:
          default:
            connector: postgres # PostgreSQL
            host: __AWS_RDS_HOST__
            database: __DB_NAME__
            schema: __DB_SCHEMA__
            user: __DB_USERNAME__
            password: __DB_PASSWORD__
            rawAccess: true
            port: 5432
            migrations: false
```

### Compose Prisma Server in new docker machine

```shell
docker compose up -d
```

### Assign security group and check inbound rules

- Basically, EC2 is assigned new security group as defalut. You need to check its inbound rule and open 4466 port.

### Set the elastic load balancer (optional)

### Modify prisma.yml

```yml
endpoint: http://__AWS_EC2_ADDRESS__:4466
datamodel: datamodel.prisma

generate:
  - generator: javascript-client
    output: ./generated/prisma-client/
```

### Deploy datamodel.prisma to Prisma Server in AWS EC2

```shell
$ PRISMA_MANAGEMENT_API_SECRET=__SECRET_KEY__ prisma deploy
```

### Generate prisma client for GraphQL API

```shell
$ prisma generate
```

References

> https://docs.docker.com/machine/drivers/aws/ https://docs.docker.com/machine/examples/aws/#step-2-use-machine-to-create-the-instance

---

## (Option 2) Using AWS ECS Cli

### Create EC2 and ECS cluster

```shell
$ ecs-cli up --keypair __AWS_KEYPAIR_NAME__ --capability-iam --vpc __SPECIFIC_VPC__ --subnets __SUBNET_1__,__SUBNET_2__ --size 1 --instance-type t2.micro --cluster-config prisma-server-ecs
```

- It will generate the cloudformation which will proceed the whole process to generate EC2 instance and ECS cluster.

### Compose the Prisma Server to ECS container

```shell
$ ecs-cli compose up --create-log-groups --cluster-config prisma-server-ecs
```

- It will generate the new Task definition. You can check the new Task definition is runnig.

### Check if the new Task definition is running

```shell
$ esc-cli ps
```

- If your new Task definition is working well, you might want to make new service in ECS cluster in order to manage the task.

References

> https://docs.aws.amazon.com/ko_kr/AmazonECR/latest/userguide/ECR_AWSCLI.html > https://docs.aws.amazon.com/ko_kr/AmazonECS/latest/developerguide/ECS_CLI_tutorial_EC2.html
