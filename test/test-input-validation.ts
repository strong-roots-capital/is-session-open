import test from 'ava'

/**
 * Library under test
 */

import isSessionOpen from '../src/is-session-open'


/**
 * Note: has to be commented thanks to strong-types
 */
// test('should error when timeframe is not a string', t => {
//     const error = t.throws(() => {
//         isSessionOpen(4, new Date())
//     })
//     t.is(error.name, 'ArgumentError')
// })

test('should error when timeframe is not in trading-view format', t => {
    const error = t.throws(() => {
        isSessionOpen('!!', new Date())
    })
    t.is(error.name, 'ArgumentError')
})

/**
 * Note: has to be commented thanks to strong-types
 */
// test('should error when start is not a date', t => {
//     const error = t.throws(() => {
//         isSessionOpen('!!', 'horse')
//     })
//     t.is(error.name, 'ArgumentError')
// })
