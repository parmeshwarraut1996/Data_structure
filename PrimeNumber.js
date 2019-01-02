var util=require('util');
module.exports = {

    range(min, max) {
        var flag;
        var k = 0;
        var primeNumber = new Array(max);
        for (var i = (min * 1) + 1; i < max; ++i) {
            flag = 0;
            for (var j = 2; j <= i / 2; ++j) {
                if (i % j == 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag == 0) {
                primeNumber.push(i);
              //  k++;
            }



        }
        
      //console.log(primeNumber.join(' '));
        return primeNumber;
        
    },
    // isAnagram(arr) {
    //     var a = new Array();
    //     var x = 0;
    //     for (var i = 0; i < arr.length; i++) {
    //         for (j = i + 1; j < arr.length; j++) {
    //             var p = '' + parseInt(arr[i]);
    //             var q = '' + parseInt(arr[j]);
    //             if ((((p.split('')).sort()).join()) === (((q.split()).sort()).join())) {
    //                 str = (p + '' + q);
    //                 a.push(str);
    //                 str = "";
    //                 arr2[x] = p;
    //                 x++;
    //                 arr2[x] = q;
    //                 x++;
    //             }
    //         }
    //     }
    //     return a;
    // }


}