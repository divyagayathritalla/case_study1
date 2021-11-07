var flag1,flag2,flag3,flag4,flag5,flag6;
function validate_num() {
    var number = document.getElementById("number").value;
    var regex = /^\d{10}$/g;
    let num = regex.test(number);
    if (num == true) {
        document.getElementById("msg3").innerHTML = "";
        document.getElementById("number").style.border = "3px solid palevioletred";
        document.getElementById("number").style.background="rgb(235, 211, 219);"
        flag1=1;
        final_validation();
        
    }
    else if (number == "") {
        document.getElementById("msg3").innerHTML = "";
        document.getElementById("number").style.border = "3px solid palevioletred";
        document.getElementById("number").style.background="rgb(235, 211, 219);"
        flag1=0;
    }
    else {
        document.getElementById("msg3").innerHTML = "Invalid!";
        document.getElementById("msg3").style.color = "red";
        document.getElementById("number").style.border = "solid red";
        flag1=0;
    }
}
function validate_email() {
    var val = document.getElementById("email").value;
    let verify = /^\w+[a-zA-Z0-9\.-]+@([a-z])+(\.[a-z]{2,3})+$/g
    let check = verify.test(val);
    if (check == true) {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("email").style.border = "3px solid palevioletred";
        document.getElementById("email").style.background="rgb(235, 211, 219);"
        flag2=1;
        final_validation();
    }
    else if (val == "") {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("email").style.border = "3px solid palevioletred";
        document.getElementById("email").style.background="rgb(235, 211, 219);"
        flag2=0;
    }
    else {
        document.getElementById("msg2").innerHTML = "Invalid!";
        document.getElementById("msg2").style.color = "red";
        document.getElementById("email").style.border = "solid red";
        flag2=0;
    }
}
function name_valid() {
    var val = document.getElementById("name").value;
    let verify = /^[a-zA-Z\s]{5,10}$/g;
    let check = verify.test(val);
    if (check == true) {
        document.getElementById("msg").innerHTML = ""
        document.getElementById("name").style.border = "3px solid palevioletred";
        document.getElementById("name").style.background="rgb(235, 211, 219);"
        flag3=1;
        final_validation();
    }
    else if (val == "") {
        document.getElementById("msg").innerHTML = ""
        document.getElementById("name").style.border = "3px solid palevioletred";
        document.getElementById("name").style.background="rgb(235, 211, 219);"
        flag3=0;
    }
    else {
        document.getElementById("msg").innerHTML = "Invalid!";
        document.getElementById("msg").style.color = "red";
        document.getElementById("name").style.border = "solid red";
        flag3=0;
    }
}
function validate_checkbox() {
    var list = [];
    x = document.getElementsByName("cc")
    for (let i = 0; i < x.length; i++) {
        if (x[i].checked) {
            list.push(x[i].value);
        }
    }
    if (list.length >= 2) {
        document.getElementById("msg5").innerHTML = "";
        flag4=1;
        final_validation();
    }
    if (list.length < 2) {
        document.getElementById("msg5").innerHTML = "Inavalid!";
        document.getElementById("msg5").style.color = "red";
        flag4=0;
    }
}
function validate_radiobutton(g) {
    document.getElementById("answer").value = g;
}
function validate_multi() {
    var list2 = [];
    x2 = document.getElementsByName("mm")
    for (let i = 0; i < x2.length; i++) {
        if (x2[i].selected) {
        list2.push(x2[i].value);
        }
    }
    if (list2.length >= 2) {
        document.getElementById("msg6").innerHTML = "";
        flag5=1;
        final_validation();
    }
    else if (list2.length < 2) {
        document.getElementById("msg6").innerHTML = "Select atleast 2 skills.";
        document.getElementById("msg6").style.color = "red";
        flag5=0;
    }
    else if (list2.length == 0) {
        document.getElementById("msg6").innerHTML = "";
        flag5=0;
    }
    else {
        document.getElementById("msg6").innerHTML = "";
        flag5=0;
    }
}
function validate_address() {
    var address = document.getElementById("address").value;
    var regex = /^[a-zA-Z0-9\s\W]{50,150}$/g
    var add = regex.test(address);
    if (add == true) {
        document.getElementById("msg4").innerHTML = "";
        document.getElementById("address").style.border = "3px solid palevioletred";
        document.getElementById("address").style.background="rgb(235, 211, 219);"
        flag6=1;
        final_validation();
    }
    else if (address == "") {
        document.getElementById("msg4").innerHTML = "";
        document.getElementById("address").style.border = "3px solid palevioletred";
        document.getElementById("address").style.background="rgb(235, 211, 219);"
        flag6=0;
    }
    else {
        document.getElementById("msg4").innerHTML = "Invalid address!";
        document.getElementById("address").style.border = " solid red";
        
        document.getElementById("msg4").style.color = "red";
        flag6=0;
    }
}
function final_validation(){
    if(flag1==1 && flag2==1 && flag3==1 && flag4==1 && flag5==1 && flag6==1){
        document.getElementById("submit").disabled=false;
    }
}
function button_disabled(){
    document.getElementById("submit").disabled=true;
}
