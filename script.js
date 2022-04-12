var container=document.createElement("div");
container.setAttribute=("class","container");
var h3=document.createElement("h3");
h3.setAttribute=("class","display-4");
h3.innerHTML="Open Brewery API";
document.body.append(container,h3);
async function getdata(){
    try{
    let data=await fetch("https://api.openbrewerydb.org/breweries");
    let objectdata=await data.json();
    // console.log(objectdata);
    for(var i=0;i<objectdata.length;i++){      
        // console.log(objectdata[i].name);
//<!----------create dynamically html in DOM-------------->
var container=document.createElement("div");
container.className="container";
var res=document.createElement("div");
res.className="table-responsive";
var table=document.createElement("table");
table.className="table table-sm table-bordered table-success border-success table-hover mt-2";
var thead=document.createElement("thead");
thead.className="thead-dark";
var tr=document.createElement("tr");
var th=foo("th","Name");
var th1=foo("th","Type");
var th2=foo("th","Address");
var th3=foo("th","website url");
var th4=foo("th","Phone no");
// <-----------------thead append---------------------->
tr.append(th,th1,th2,th3,th4,);
thead.append(tr);
// <-----------------tbody--------------------------------->
var tbody=document.createElement("tbody");
var tr=document.createElement("tr");
var td=foo("td",`${objectdata[i].name}`);
var td1=foo("td",`${objectdata[i].brewery_type}`);
var td2=foo("td",`Street: ${objectdata[i].street}<br>State: ${objectdata[i].state}
<br>Country: ${objectdata[i].country}<br>Postal Code: ${objectdata[i].postal_code}`);
var td3=foo("td",`${objectdata[i].website_url}`);
var td4=foo("td",`${objectdata[i].phone}`);
// <-----------------tbody append-------------------------->
tr.append(td,td1,td2,td3,td4);
tbody.append(tr);

// <------------------total append=tbody+thead---------------------------->
table.append(thead,tbody);
res.append(table);
container.append(res);
document.body.append(container);
// <--------------function, reduce code in this method--------------->
function foo(element, values){
    var ele=document.createElement(element);
    ele.innerHTML=values;
    return ele;
}
}
// <!-------------error handling--------------->
}catch(error){
    console.log(error);
}
}
getdata();