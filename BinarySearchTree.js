module.exports = {

    /**to give out the factorial of a given number */
    factorial(a) {
        var fact = 1;

        for (var i = 1; i <= a; i++) {
            fact = fact * i;

        }
        return fact;


    }
}
