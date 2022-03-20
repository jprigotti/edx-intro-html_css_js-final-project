
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    if (principal != "" && principal > 0)
        {
    document.getElementById("result").innerHTML="If you deposit "+principal+" USD,\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+" USD,\<br\>in the year "+year+"\<br\>"
        }
        else
        {alert('You must enter an valid Amount');    
        }
}
        

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}


function clear_result(){
    document.getElementById("principal").value="";
    document.getElementById("result").innerHTML="";
}
/*
function readRate(){
    var rate = document.getElementById('rate');
    return rate.value;
}
*/