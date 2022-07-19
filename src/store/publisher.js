import { writable } from "svelte/store";

export const publisher=writable({
    leave:0,
    leaveStateBorder:0,
    movedCongregation:0,
    noConnect:0,
    perished:0,
    returnCong:0,
    returnStateBorder:0,
    wounded:0
})
// export const publisher=writable(0)