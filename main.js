// Triangle Perimeter Assignment Start Code
function btnClicked {
    //Determine Vertex Values
    let xA = +document.getElementById("xA").value;
    let yA = +document.getElementById("yA").value;
    let xB = +document.getElementById("xB").value;
    let yB = +document.getElementById("yB").value;
    let xC = +document.getElementById("xC").value;
    let yC = +document.getElementById("yC").value;

    //Calculate For AB
    document.getElementById("lengthAB").innerHTML = dist()
    //Calculate For AC
    document.getElementById("lengthAC").innerHTML = dist()
    //Calculate For BC
    document.getElementById("lengthBC").innerHTML = dist()
}

function dist() {

}