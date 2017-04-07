const {Subject, Observable} = require("rxjs");

console.log("stream [1,2,3] ==> stream 1,2,3");
Observable.of([1,2,3]).flatMap(e=>e).subscribe(val => {
    console.log(val);
});

console.log();
console.log("stream of [stream 1,stream 2,stream 3] ==> stream of 1,2,3");
Observable.from([
    Observable.of(1),
    Observable.of(2),
    Observable.of(3)]
).flatMap(e=>e).subscribe(val => {
    console.log(val);
});

