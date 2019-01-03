module.exports = {

    /**
     * method returns factorial of number;
     */
    factorial(a) {
        var fact = 1;

        for (var i = 1; i <= a; i++) {
            /**
             * calculate factorial of number
             */
            fact = fact * i;

        }
        return fact;


    }
}
