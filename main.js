// Triangle Perimeter Assignment Start Code

//Click Button Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
    //Determine Vertex Values
    let xA = +document.getElementById("xA").value;
    let yA = +document.getElementById("yA").value;
    let xB = +document.getElementById("xB").value;
    let yB = +document.getElementById("yB").value;
    let xC = +document.getElementById("xC").value;
    let yC = +document.getElementById("yC").value;

    //Calculate For AB
    let distAB = dist(xA, yA, xB, yB);
    document.getElementById("distAB").innerHTML = distAB
    //Calculate For AC
    let distAC = dist(xA, yA, xC, yC);
    document.getElementById("distAC").innerHTML = distAC
    //Calculate For BC
    let distBC = dist(xB, yB, xC, yC);
    document.getElementById("distBC").innerHTML = distBC
    //Calculate Parimeter
    document.getElementById('parimeterABC').innerHTML = distAB + distAC + distBC
}

function dist(x1, y1, x2, y2) {
    let dist = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
    return dist;
}

