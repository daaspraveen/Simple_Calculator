let regx = /[0-9]/;
let opbtncount = null
let Allop = document.querySelectorAll(".op");

    // Selecting the operation  --------------------------
    Addbtn = ()=>{
        Allop = document.querySelectorAll(".op");
        Allop.forEach(element => {
            element.style.backgroundColor="lightblue";
            element.style.color='black';
        });
        let Add = document.getElementById('add') ;
        Add.style.backgroundColor= 'blue';
        Add.style.color= 'white';
        opbtncount = '+';}  

    Subbtn = ()=>{
        Allop = document.querySelectorAll(".op");
        Allop.forEach(element => {
            element.style.backgroundColor="lightblue";
            element.style.color='black';
        });
        let Sub = document.getElementById('sub') ;
        Sub.style.backgroundColor='blue';
        Sub.style.color= 'white';
        opbtncount = '-';}
    Mulbtn = ()=>{
        Allop = document.querySelectorAll(".op");
        Allop.forEach(element => {
            element.style.backgroundColor="lightblue";
            element.style.color='black';
        });
        let Mul = document.getElementById('mul') ;
        Mul.style.backgroundColor='blue';
        Mul.style.color= 'white';
        opbtncount = '*';}
    Divbtn = ()=>{
        Allop = document.querySelectorAll(".op");
        Allop.forEach(element => {
            element.style.backgroundColor="lightblue";
            element.style.color='black';
        });
        let Div = document.getElementById('div') ;
        Div.style.backgroundColor='blue';
        Div.style.color= 'white';
        opbtncount = '/';}
    

function resultBtn () {
    // checking input by regex using filtering ------------------
    var input_value1 = document.getElementById('value1');
    let value1_value = input_value1.value;

    var input_value2 = document.getElementById('value2');
    let value2_value = input_value2.value;

    let Regex_Check = false;

    if (regx.test(value1_value)  && regx.test(value2_value)){
        console.log(value1_value,value2_value) ;
        Regex_Check = true ;
    }else{
        reset();
        alert("Enter Input Values only in Numbers ");
    } // checked input values using regex filtering


    
    // DOING OPERATION --------------------------
    let resultNum = 0;
    let operation = opbtncount=='+'? resultNum = Number(value1_value)+Number(value2_value):
                    opbtncount=='-'? resultNum = Number(value1_value)-Number(value2_value):
                    opbtncount=='*'? resultNum = Number(value1_value)*Number(value2_value):
                    opbtncount=='/'? resultNum = Number(value1_value)/Number(value2_value):
                    alert("Select the Operation ");

    // Printing output Result --------------------------operation !== NaN && opbtncount!==null
    if (Regex_Check && resultNum!==NaN ){
        let ResultLine = document.getElementById("result-line");
        ResultLine.innerHTML = resultNum ;
        ResultLine.style.display="block";
    }

    // Resetting form after 10 seconds after inputing --------------------------
    let form = document.getElementById('Form');
    setTimeout(() => {
        form.reset(); // Resetting form by default rest function
      }, 20000); // 10000 milliseconds (10 seconds)
    
};




