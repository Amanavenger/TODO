var ul = document.getElementById("list");
var li;


var addButton = document.getElementById("add");
addButton.addEventListener("click", addItems);


var removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItems);

var removeAllButton = document.getElementById("removeAll");
removeAllButton.addEventListener("click", removecomplete);


function addItems(){
    var inputs = document.getElementById('input').value;
    inputs = inputs.trim();
    var textNode = document.createTextNode(inputs);

    if(inputs === ""){
        alert("Enter String");
    }else{
        li = document.createElement("li");
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.setAttribute("id","check");

        var label = document.createElement('label');

        ul.appendChild(label);
        li.appendChild(checkBox);
        label.appendChild(textNode);
        li.appendChild(label);
        
        ul.insertBefore(li, ul.childNodes[0]);
       

        setTimeout(() => {
            li.className = "visual";
        }, 100);

        document.getElementById('input').value = '';
        
    }
}

function removeItems(){
    li = ul.children;

    for(var i=0; i<li.length; i++){

        while(li[i] && li[i].children[0].checked){
            ul.removeChild(li[i]);
        }
    }
}

function removecomplete(){
    li = ul.children;

    for(var i =0; i<li.length; i++){
        while(li[i] && li[i].children[0]){
            ul.removeChild(li[i]);
        }
    }
}