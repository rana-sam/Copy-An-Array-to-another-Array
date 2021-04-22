let num=[12,4,378,6,5,87,5,9]
let i=0;
let y=[];

function array(num) {

    for (let c = 0; c < num.length; c++) 
    {
        
         y[i]=num[c] ;
        i++;
    }
    return y;
}

let num2=array(num);
console.log(num2);