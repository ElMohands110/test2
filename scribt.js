
// ================== task one ====================
// 1- Given two numbers A and B. Print "Yes" if A is greater than or equal to B. Otherwise print "No".


// ============ answer one ==========

var A = 11 , B = 10;
if(  A >=  B ){
    console.log("yes")
}else{
    console.log("no")

}


// -----------------------

// 2- THE BROTHERS

// Given two person names.
// Each person has {"the first name" + "the second name"}
// Determine whether they are brothers or not.


// ============== answer two =======
var f1 = "nadia", s1 = "meshaal" , f2 = "ahmed" , s2 = "meshaal" ;
if(s1==s2){
    console.log("same family")
}else{
    console.log("diferrent")
}


// 3- CALCULATOR

// Given a mathematical expression. The expression will be one of the following expressions: 𝐴+𝐵, 𝐴−𝐵, 𝐴∗𝐵 and 𝐴/𝐵.

// Print the result of the mathematical expression.
var A = 5 , B = 6 , X = 50;
if(A + B == X ){
console.log(A+B)
}else if(A - B == X){
    console.log(A-B)
}else if(A * B == X){
    console.log(A * B)
}else if(A / B == X){
    console.log(A/B)
}else{
    console.log("wrong input")
}

// ======== with switch =============
switch( X ) {
    case A+B :
        console.log(A+B)
        break;

    case A - B  :
        console.log(A-B)
        break;

    case A * B :
        console.log(A*B)
        break;

    case A / B  :
        console.log(A/B)
        break;
    default:
            console.log("wrong input")

}


















