SinonJS practices
=================

-> http://sinonjs.org/

1. Create an object which throws error on construct if localStorage does not exist, test this behavior !
2. Add a "get" function that do getItem from localStorage, test this behavior !
3. Check the argument type (string), throws an error it does not match, test this behavior !
4. Add a "setVisit" function which add the current timestamp in a localStorage "visit" key, test this behavior !
5. Add a "set" function that takes 2 args key and value, test if localStore setItem is always called with a string in first arg, a string or a number in second arg
6. Try to use a Mocked localStorage
