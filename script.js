window.onload = function() {
    let zodis1 = "grazinti";
    let zodis2 = "vaziuoti";
    let zodis3 = "Masina";
    let paskutineRaide1 = PaskutineRaide(zodis1);
    console.log(paskutineRaide1);
    let paskutineRaide2 = PaskutineRaide(zodis2);
    console.log(paskutineRaide2);
    let paskutineRaide3 = PaskutineRaide(zodis3);
    console.log(paskutineRaide3);
}
function PaskutineRaide(zodis1){
    return zodis1[((zodis1.length)-1)];
}