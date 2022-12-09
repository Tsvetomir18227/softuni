function maxNumber(input){

    let i = 0;
    let j = 2;
    let maxNumber = 0;
    let inputedNum = input[i];

     while(inputedNum !== "Stop"){
        let number = Number(input[i]);
        let previousNum = Number(input[j - 1]);
        if(number >= previousNum){
            maxNumber = number;
        } else {
            maxNumber = previousNum;
        }
        i++;
        inputedNum = input[i];
        j++;

     }
     console.log(maxNumber);


}
maxNumber(["100",
"99",
"80",
"70",
"Stop"]);