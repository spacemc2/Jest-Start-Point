const {sum,fromDollarToYen,fromEuroToDollar,fromYanToPound} = require('./app')

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

////////////////////////////*****///////////////////////////
test("One dollar should be  aprox 106.6 yens", function(){

    const dollars = fromDollarToYen(3.5)

    const expected = (3.5/ 1.2)*127.9; 
     expect(Math.floor(fromDollarToYen(3.5))).toBe(373); 
})


test("One yen should be aprox 0.00625 pounds", function(){
    // use the function like its suppoed to be used
    const dollars = fromYanToPound(1000)

    const expected = (1000/127.9)*0.8; 

     expect(fromYanToPound(1000).toFixed(2)).toBe("6.25"); 
})