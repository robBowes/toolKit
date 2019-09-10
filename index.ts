export const tap = (fn: (arg: any) => void) => (arg: any) => (fn(arg), arg)

export const trace = tap(console.log)
