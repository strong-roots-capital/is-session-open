import test from 'ava'
import moment from 'moment'

/**
 * Library under test
 */

import isSessionOpen from '../src/is-session-open'

test('should return false when date is not a session open', t => {
    const date = moment.utc().startOf('year').add(1, 'day').toDate()
    t.false(isSessionOpen('12M', date))
})

test('should return true when date is a session open', t => {
    const date = moment.utc().startOf('year').toDate()
    t.true(isSessionOpen('12M', date))
})
