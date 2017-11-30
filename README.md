nodejs-dashboard + nodemon env vars
===================================

Experiment repo for: https://github.com/FormidableLabs/nodejs-dashboard/issues/75

## Install

```sh
$ yarn
```

## Scripts

The `./env.sh` script displays environment variables grepped to `nodejs-dashboard_`. We try different combinations of nodejs-dashboard + nodemon to make sure we have three variables show up like:

```
nodejs-dashboard_REFRESH_INTERVAL=1000                                             nodejs-dashboard_PORT=9838                                                        nodejs-dashboard_BLOCKED_THRESHOLD=10
```

Tasks:

- `yarn run db-env`: Run dashboard without nodemon.
- `yarn run nm-env`: Run dashboard with nodemon.

## Status

- @ryan-roemer: I see all three env vars for both tasks on Node 8.4.0 + Mac.
