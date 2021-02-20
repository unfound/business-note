function defineReactive (data, key, val) {
    let dep = new Dep() // 依赖

    if (typeof val === 'object') {
        new Observer(val)
    }
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            dep.depend()
            console.log(`调用get，值为${val}`)
            return val
        },
        set: function (newVal) {
            console.log(`调用set，值为${newVal}`)
            if (val == newVal) {
                return
            }
            val = newVal
            dep.notify()
        }
    })
}

class Dep {
    constructor () {
        this.subs = []
    }

    addSub (sub) {
        this.subs.push(sub)
    }

    removeSub (sub) {
        const index = this.subs.indexOf(sub)
        if (index > -1) {
            this.subs.splice(index, 1)
        }
    }

    depend () {
        if (window.target) {
            this.addSub(window.target)
        }
    }

    notify () {
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}

class Watcher {
    constructor (vm, expOrFn, cb) {
        this.vm = vm
        this.getter = parsePath(expOrFn)
        this.cb = cb
        this.value = this.get()
    }

    get () {
        window.target = this
        let value = this.getter(this.vm)
        window.target = undefined
        return value
    }

    update () {
        const oldValue = this.value
        this.value = this.get()
        this.cb.call(this.vm, this.value, oldValue)
    }
}

function parsePath (path) {
    // 除了数字、字母、下划线、.、$以外的字符都不行
    const pathRE = /[^\w.$]/g
    if (pathRE.test(path)) {
        return
    }

    const segments = path.split('.')
    return function (obj) {
        segments.forEach(segment => {
            if (!obj) return
            obj = obj[segment]
        })

        return obj
    }
}

class Observer {
    constructor (value) {
        this.value = value

        if (Array.isArray(value)) {
            this.observeArray(value)
        } else {
            this.walk(value)
        }
    }

    walk (obj) {
        const keys = Object.keys(obj)
        keys.forEach(key => {
            defineReactive(obj, key, obj[key])
        })
    }

    observeArray (arr) {
        arr.forEach(item => {
            observer(item)
        })
    }
}

function observer (value) {
    if (typeof value !== 'object') {
        return
    }

    return new Observer(value)
}

let data = {
    name: 'cmx',
    blog: 'www',
    arr: [1,2],
    arrList: [
        {
            name: '123'
        }, {
            name: '345'
        }
    ]
}

new Observer(data)
