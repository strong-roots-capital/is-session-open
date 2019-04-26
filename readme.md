# is-session-open [![Build status](https://travis-ci.org/strong-roots-capital/is-session-open.svg?branch=master)](https://travis-ci.org/strong-roots-capital/is-session-open) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/is-session-open.svg)](https://npmjs.org/package/@strong-roots-capital/is-session-open) [![codecov](https://codecov.io/gh/strong-roots-capital/is-session-open/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/is-session-open)

> Test if a date represents a timeframe's session-open

## Install

```shell
npm install @strong-roots-capital/is-session-open
```

## Use

```typescript
import isSessionOpen from '@strong-roots-capital/is-session-open'
import moment from 'moment'

const now = moment.utc().toDate()
console.log(now.toISOString())
//=>2019-04-26T18:45:20.522Z

console.log(isSessionOpen('1D', now))
//=>false

const startOfDay = moment.utc().startOf('day').toDate()
console.log(startOfDay.toISOString())
//=>2019-04-26T00:00:00.000Z

console.log(isSessionOpen('1D', startOfDay))
//=>true

```

## Related

- [market-session](https://github.com/strong-roots-capital/market-session)
- [is-tradingview-format](https://github.com/strong-roots-capital/is-tradingview-format)
