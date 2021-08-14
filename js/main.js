let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let ol = document.createElement("ol");
document.body.appendChild(ol);

cities.forEach(function (el) {
    let li = document.createElement("li");//tworzymy elementy li
    console.log(li)
    li.innerText = el;//dodajemy text do li
    li.className = el;//dodajemy klase do li

    ol.appendChild(li)//za każdą iteracją pętli dodajmy kolejny li do ol
})
