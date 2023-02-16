function login_validation(callback){
    let uname=document.getElementById("uname");
    let pwd=document.getElementById("pwd");
    username="admin";
    password="12345";
    if((uname.value.trim()===username) && (pwd.value.trim()===password)){
        callback();
    }
    else{
        alert("Incorrect username or password");
        uname.innerHTML="";
        pwd.innerHTML="";
        return false;
    }
}

function redirect(){
    window.location.href="home.html";
    alert("Successfully logged in");
}

function todolist(){
    try{
        let request=new XMLHttpRequest();
        request.open("GET","https://jsonplaceholder.typicode.com/todos",true);
        request.onreadystatechange=function(){
            if(this.readyState==4&&this.status==200){
               let response = JSON.parse(this.responseText);
                displaytodo(response);
            } 
        }
        request.send(); 
    }catch(error){
        console.log("error",error)
    } 
}

function displaytodo(list){
    let table = document.getElementById("todotable");
    for(var i=0;i<list.length;i++){
        let rowcount = table.rows.length;
        var row = table.insertRow(rowcount);
        var col1 = row.insertCell(0);
        col1.innerHTML=list[i].id;

        var col2 = row.insertCell(1);
        col2.innerHTML=list[i].title;

        var col3 = row.insertCell(2);
        var element= document.createElement("input");
        element.type="checkbox";

        if(list[i].completed===true){
            element.setAttribute("checked","true");
            element.setAttribute("disabled","true");
        }
        element.addEventListener('change',(e)=>{
            if(e.currentTarget.checked){
                count++;
                checkCount();
            }
            else{
                count--;
            }
        })
        col3.appendChild(element);
    }
}

var count =0;
function checkCount(){
    let promise = new Promise(function(resolve,reject){
        if(count==5){
            resolve("Congrats. 5 tasks have been successfully completed");
        }
    })
    promise.then(function(e){
        alert(e);
    })
}

function logout(){
    window.location.href="index.html";
    alert("Successfully logged out");
}
