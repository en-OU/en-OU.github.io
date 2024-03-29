"use strict";
let R = null;

let b1 = document.querySelector("#b1");
let Chart1 = null; // for the chart to be shown in c1 canvas

async function LoadData() {
    //fetch()
    let url = `https://juxinglong.github.io/static/data/states.json`;

    let r = await fetch(url); // async = await
    let rj = await r.json();

    let c1 = document.querySelector("#c1");
    if (Chart1 != null)
    {
        Chart1.destroy(); // if already chart, delete it
    }

c1.innerHTML = ``; // clean canvas

let opts = {
    type: "pie",
    data: {
        labels: rj.map(x => x.st),
        datasets: [
            { data: rj.map(x => x.p),  },
        ],
    }
};
Chart1 = new Chart(c1, opts);

    R = rj;
    console.log(R);

    Swal.fire("Load data");
}

b1.addEventListener("click", LoadData);