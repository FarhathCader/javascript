const function1 = async () => {
    console.log('function1 started');
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('function1 ended');
            resolve();
        }, 5000);
    });

}

const function2  = () => {
    console.log('function2 started');
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('function2 ended');
            resolve();
        }, 2000);
    });
}

const function3 = async () => {
    console.log("function 3 started")
    await function1();
    await function2();
}

function3();




