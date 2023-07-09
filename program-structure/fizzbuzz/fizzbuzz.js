//Exercise is to print all numbers from 1 - 100 with 3 exceptions. Numbers divisible by 3 output 'fizz'. Numbers divisible by 5 output 'buzz' and numbers divisble by both output 'fizzbuzz'

for(let i = 1; i < 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('FIZZBUZZ')
    } else if (i % 3 === 0) {
        console.log('FIZZ')
    } else if (i % 5 === 0) {
        console.log('BUZZ')
    } else {
        console.log(i)
    }
}