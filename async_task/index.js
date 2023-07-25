// There should be an async function named pause with one parameter which accepts an integer as milliseconds.
// When we call that function it should pause the script for the period that we pass as the parameter value
// Ex: async pause(1000) should pause the execution for 1 second
// The pause function should be defined in a separate js file named utils.js and should be able to use in any other js file by importing it.
// If we call the function without any parameter; Ex: async pause() , it should pause the execution for 1 second (ei: 1000 milliseconds)
// You should have a good understanding about how this function works and should be able to use/customize/update it real-time as per new requirement request.


const pause = require('./utils');


async function main() {

    console.log("start pause function")

    //  default value is 1000
    await pause()

    await pause(5000)
    console.log("end pause function")

}

main()
