module.exports = {

    isPrime(a) {
        var i;
        var prime = new Array()
        if (a == 1) {


            for (i = 0; i <= 1000; i++) {
                var count = 0;
                for (var j = 2; j <= i / 2; j++) {
                    if (i % j == 0) {

                        count++;


                    }


                }
                if (count == 0) {

                    prime.push(i);
                }
            }
        }
        console.log(prime);

    },

}