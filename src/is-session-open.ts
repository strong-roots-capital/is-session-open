/**
 * is-session-open
 * Test if a date represents a timeframe's session-open
 */

import ow from 'ow'
import session from 'market-session'
import { inTradingviewFormat } from '@strong-roots-capital/is-tradingview-format'

/**
 * Test if a date represents a timeframe's session-open.
 *
 * @param
 * @param
 * @returns
 */
export default function isSessionOpen(timeframe: string, date: Date): boolean {

    ow(timeframe, ow.string)
    ow(timeframe, ow.string.is(inTradingviewFormat))
    ow(date, ow.date)

    return session(date, [timeframe]).includes(timeframe)
}
