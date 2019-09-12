var calcButton = document.getElementById('calcButt'),
    output = document.getElementById('output');
window.onload = () => {
    calcButton.addEventListener("click", () => {
        let freePop = parseFloat(document.getElementById('freePop').value),
            slavePop = parseFloat(document.getElementById('slavePop').value),
            totalPop = freePop + slavePop,
            compPop = freePop + (slavePop * (3 / 5)),
            fRep = Math.round(freePop / 30000),
            aRep = Math.round(totalPop / 30000),
            sRep = Math.round(compPop / 30000);
        console.log(typeof freePop, typeof slavePop, totalPop, compPop)
        output.innerHTML = `<h4>North State Plan House Rep: ${fRep}</h4>
        <h4>South State Plan House Rep:${aRep}</h4>
        <h4>3/5 Compromise Plan House Rep:${sRep}</h4>`;
    });
}