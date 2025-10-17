//  precedence of opertors
    //  (bodmas)

        //   |  1.()
        //   |  2.**
        //   |  3. * or / (same level par left to right solve)
        //   |  4.+ or - (same level par left to right solve)
        //   |  5  == or === or != or !== 
        //   |  6. && 
        //   |  7. 11
        //   |  8. =

// exmple 
let find = 2 + 3 * 4 > 10 && true || false
console.log(find)
