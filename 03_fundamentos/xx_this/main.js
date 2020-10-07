
// function test() {
//     // var i = 0;

//     for (let i = 0; i<4; i++) {
//         setTimeout(function () {
//             console.log(this)
//         }, 1000)
//         // setTimeout(() => console.log(i))
//         var _this = this
//     }
// }

// test()

'use strict'

for (var i = 0; i<4; i++) {
    setTimeout(function () {
        console.log(i)
    }, 1000)
}