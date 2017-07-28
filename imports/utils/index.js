export const coalesce = (...args) =>  (
    args.find((a) => (a !== null && a !== undefined))
)
