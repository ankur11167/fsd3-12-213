# EventLoop
JS is synchronous and single threaded
btdefault 

## there can be async beahviour
- with BrowsreAPI setTimeout , setinterval,setimmediate,.nextTick
- with promises
- with event handlers

## Promise
- A function not executed immediately but it must be executed after a while, meanwhile it has some status during the execution. At final it may resolve (success) or reject

## modern js is divided into two categories 
1. commonjs (.cjs)-> supports OOPs -> require
2. ModuleJS (.mjs) -> follow modular approach -> import
   - priority (Promise , nextTick , setImmediate/setTimeout)