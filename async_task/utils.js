const pause = (seconds = 1000) => {


    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {

            // i use ready for testing
            isReady = true

            isReady ? resolve("ready") : reject("not ready")

        }, seconds)

    })

    return promise
}

module.exports = pause


