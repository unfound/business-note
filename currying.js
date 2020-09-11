function currying (fn, initArgs) {
    const paramsLength = fn.length
    let _initArgs = initArgs || []

    return function (...args) {
        let _args = args.slice()
        _args.push(..._initArgs)

        if (_args.length < paramsLength) {
            return currying(fn, _args)
        }

        return fn(..._args)
    }
}

function throttle (fn, ms) {
    let timer = -1
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, ms)
    }
}
