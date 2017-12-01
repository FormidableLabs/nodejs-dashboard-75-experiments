nodejs-dashboard + nodemon env vars
===================================

Experiment repo for: https://github.com/FormidableLabs/nodejs-dashboard/issues/75

## Install

```sh
$ yarn
```

Docker:

```sh
# get docker, docker-compose
$ brew install docker docker-compose

# first time
$ docker-machine create default

# every other time
$ docker-machine start default
$ eval $(docker-machine env default)
```

## Scripts

The `./env.sh` script displays environment variables grepped to `nodejs-dashboard_`. We try different combinations of nodejs-dashboard + nodemon to make sure we have three variables show up like:

```
nodejs-dashboard_REFRESH_INTERVAL=1000
nodejs-dashboard_PORT=9838
nodejs-dashboard_BLOCKED_THRESHOLD=10
```

Local:

- `yarn run db-env`: Run dashboard without nodemon.
- `yarn run nm-env`: Run dashboard with nodemon.

Docker:


- `docker-compose run --rm yarn run db-env`: Run dashboard without nodemon.
- `docker-compose run --rm yarn run nm-env`: Run dashboard with nodemon.

## Status

- @ryan-roemer: I see all three env vars for both tasks on Node 8.4.0 + Mac.
