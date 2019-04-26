import isSessionOpen from '../src/is-session-open'
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
