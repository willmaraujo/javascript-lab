function counter() {
    var count = 0;
    
    return {
        add: function(increment) {
            count += increment;
        },
        get: function() {
            return count;
        }
    }
}

let mCounter = counter();
mCounter.add(3);
mCounter.add(4);

console.log(mCounter.get());