/**
 * Basic I/O operations
 *
 */
const stream = process.stdin;

setImmediate(function(){
    stream.push('');
});

console.log("Hi there");

stream.pipe(process.stdout);