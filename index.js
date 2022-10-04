function receivesAFunction(someFunction) {
    return someFunction();
}

function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return () => 1337;
}