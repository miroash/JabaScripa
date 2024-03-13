function counter(n) {
    let current = n;
    const intervalId = setInterval(() => {
        console.log(current);
        if (current === 0) {
            clearInterval(intervalId);
        }
        current--;
    }, 1000);
}
function createCounter(n) {
    let current = n;
    let intervalId;

    return {
        start: function() {
            intervalId = setInterval(() => {
                console.log(current);
                if (current === 0) {
                    clearInterval(intervalId);
                }
                current--;
            }, 1000);
        },
        pause: function() {
            clearInterval(intervalId);
        },
        stop: function() {
            clearInterval(intervalId);
            current = n;
        }
    };
}

counter(8); 
const myCounter = createCounter(8); 
myCounter.start();
myCounter.pause();
myCounter.stop();
