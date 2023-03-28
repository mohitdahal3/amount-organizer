let basebtn = document.getElementById("input-btn")
let bases = [1];
let modalbtn = document.getElementById("launch")

basebtn.addEventListener('click' , ()=>{
    let value = document.getElementById("base-input").value 
    if(value.trim() != "" && value != null && isNaN(value) == false && Number(value) > 0){
        if(!bases.includes(parseInt(value))){
            bases.push(parseInt(value.trim()))
            bases = bases.sort((a,b)=>a-b)
            let str = `<div style="font-size: large;" class="p-2">Base Amounts: </div>`;
            for(let i = 0; i < bases.length; i++){
                str += `
                <div class="p-2"><h4><span class="badge bg-secondary">${bases[i]}</span></h4></div>
                `
            }
            document.getElementById("stack").innerHTML = str
        }
    }
})


let amtbtn = document.getElementById("amount-btn")
amtbtn.addEventListener('click' , ()=>{
    let value = parseInt(document.getElementById("amount-input").value)
    if(!isNaN(value)){
        let str = `${value} = `;
        for(let i = bases.length-1; i >= 0; i--){
            if(value / bases[i] >= 1){
                str += `${bases[i]} X ${parseInt(value/bases[i])} + `
                value = value - (bases[i] * parseInt(value/bases[i]))
            }
        }
        str = str.substring(0, str.length - 2)
        document.getElementById("modal-body").innerText = str
        modalbtn.click();
    }
})