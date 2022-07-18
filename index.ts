import { IFlagsmith } from './types';

import fetch from "unfetch"
import AsyncStorage from "@callstack/async-storage";
import core from './flagsmith-core'
import EventSource from 'reconnecting-eventsource'
const flagsmith = core({AsyncStorage, fetch, eventSource:EventSource});
if (typeof window !== "undefined") {
    // @ts-ignore
    window.flagsmith = flagsmith;
}
export default flagsmith;
export const createFlagsmithInstance = ():IFlagsmith=>{
    return core({AsyncStorage, fetch, eventSource:EventSource})
}
