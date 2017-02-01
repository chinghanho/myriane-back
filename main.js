(function () {

    'use strict'

    let end =  new Date(2017, 1, 3, 12, 59)

    let $hours = document.querySelector('.js-hours')
    let $mins  = document.querySelector('.js-mins')
    let $sec   = document.querySelector('.js-sec')


    function init() {
        update(fromNow(end))
        counting()
    }

    function counting() {
        setInterval(() => {
            update(fromNow(end))
        }, 1000)
    }


    function fromNow(end) {

        let now = new Date()

        let period = end - now                     // ms
        let periodPercised = parseInt(period / 1000) // second

        let hours  = Math.floor(periodPercised / 3600)
        let mins   = Math.floor((periodPercised - (hours * 3600)) / 60)
        let second = periodPercised - (hours * 3600) - (mins * 60)

        if (hours   < 10) { hours   = '0' + hours; }
        if (mins < 10)    { mins = '0' + mins;     }
        if (second < 10)  { second = '0' + second; }

        return [hours, mins, second]
    }


    function update(time) {
        $hours.textContent = time[0]
        $mins.textContent  = time[1]
        $sec.textContent   = time[2]
    }

    init()

})()
