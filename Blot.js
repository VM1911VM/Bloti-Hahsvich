alert("Բարիողջույններս ձեզ , ոտներտ խերով իմ սայթ , \nլավ եք արէ որ հավքվել եք խաղալու \nսկսենք")
let partya = prompt("Շքամից եք խաղում");
partya = (partya === "")? 301 : partya;

function addRow() {
    

    let xosacac = {};
    xosacac["um"] = prompt("Ում ղոզնա || գրի  m // d");
    if (xosacac.um === "m" || xosacac.um === "d") {
        
        const table = document.getElementById("Table");

        const newRow = table.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);


        xosacac["boy"] = prompt("Բոյա թե ղոզ || գրի b // x");
        xosacac["tiv"] = prompt("Շքամա՞ || K // թիվ // Q // S \nK 27 Q S");
        xosacac["dsic"] = +prompt("Դսից ինչ կա || թիվ");
        xosacac["taracy"] = +prompt("Տարածը || թիվ");

        xosacac.tiv = xosacac.tiv.split(" ");

        if (xosacac.tiv.length === 1 && xosacac.boy === "x" && xosacac.tiv[0] != "K") {
            xoz(xosacac); 
            if (xosacac.um === "m") {
                cell1.innerHTML = xosacac.hanac;
                cell2.innerHTML = xosacac.taracy;
                cell3.innerHTML = xosacac.tiv.reduce(function(agr, val) { return agr + val; }, "");
            }else if(xosacac.um === "d") {
                cell1.innerHTML = xosacac.taracy;
                cell2.innerHTML = xosacac.hanac;
                cell3.innerHTML = xosacac.tiv.reduce(function(agr, val) { return agr + val; }, "");
            }
        }
    }




    hashiv(xosacac);
}

function hashvich(num) {
    num = num/10;
    const decimalPart = num - Math.floor(num);
    if (decimalPart >= 0.5) {
        return decimalPart > 0.5 ? Math.ceil(num) : Math.floor(num);
    } else {
        return Math.floor(num);
    }
}

function xoz(xosacac) {
    if(xosacac.taracy === 0){
        let hanac = +xosacac.tiv[0] + 25 + xosacac.dsic;
        xosacac.taracy = "K";
        xosacac.hanac = hanac;
        return xosacac;
    }
    let hanac = 162 - (+xosacac.tiv[0] - xosacac.dsic) * 10 - xosacac.taracy;
    hanac = hanac >= 0 ? +xosacac.tiv[0] + hashvich(162 - xosacac.taracy) + xosacac.dsic : "TK";
    debugger;
    if (hanac === "TK") {
        xosacac.taracy = +xosacac.tiv[0] + 16 + xosacac.dsic;
        xosacac.hanac = hanac;
        
    }else{
        xosacac.taracy = hashvich(xosacac.taracy); 
        xosacac.hanac = hanac;
    }
    return xosacac;
}


const vikluschator = document.getElementById("lus");
const selector = document.querySelector('#lus');
selector.addEventListener('click',() => {
    if (vikluschator.alt === "lus"){
        document.getElementById('body').style.backgroundColor = '#3C3D37'
        vikluschator.title = "միացնել"
        vikluschator.alt = "mut"
    }else{
        document.getElementById('body').style.backgroundColor = '#C9DABF'
        vikluschator.alt = "lus"
        vikluschator.title = "անջատել"
    }
})
   

const zibil = document.getElementById("vedro");
const vedro = document.querySelector('#vedro');
vedro.addEventListener('click',()=>{
    let table = document.getElementById('Table');

    while (table.rows.length > 1) {
    table.deleteRow(1); 
    }
    
})

function hashiv(xosacac){
    let table = document.getElementById('Table');
    let menq = 0;
    let duq = 0;

    for (let i = 0; i < table.rows.length; i++) {
        if (table.rows[i].cells[0]) {
            let cellValue1 = parseFloat(table.rows[i].cells[0].innerText); 
            if (!isNaN(cellValue1)) {
                menq += cellValue1;
            }
            let cellValue2 = parseFloat(table.rows[i].cells[1].innerText); 
            if (!isNaN(cellValue2)) {
                duq += cellValue2;
            }
    let hashiv = document.getElementById('sum');
    if (menq < partya && duq < partya){
        hashiv.innerHTML = menq +"  |  "+duq 
    }else if(menq >= partya && xosacac.hanac!="K" && xosacac.taracy!="K"){
        alert("Մենքը հաղտեց, աչքներտ լուս, դէ մի հատ պատիվ տալիս եք թաղուց խաղանք")
    }else if(duq >= partya && xosacac.hanac!="K" && xosacac.taracy!="K"){
        alert("Դուքը հաղտեց, աչքներտ լուս, դէ մի հատ պատիվ տալիս եք թաղուց խաղանք")
    }
    }
    }
}