import { writable } from "svelte/store";

export const family=writable({
    leave:0,
    leaveStateBorder:0,
    
    perished:0,
    returnCong:0,
    returnStateBorder:0,
    wounded:0
})