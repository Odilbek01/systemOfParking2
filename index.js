let enter = document.querySelector(`.innerEnter`)
let exit = document.querySelector(`.innerExit`)
let prev = document.querySelector(`.prev`)
let next = document.querySelector(`.next`)


prev.addEventListener(`click` , ()=>{
    const dateEnter = new Date();
    const min = dateEnter.getMinutes()
    const hour = dateEnter.getHours()
    const second = dateEnter.getSeconds()
    // console.log(`${hour}:${min}`);
    enter.innerHTML = `${hour}:${min}:${second}`
    next.addEventListener(`click` , ()=>{
        const dateExit = new Date();
        const minexit = dateExit.getMinutes()
        const hourexit = dateExit.getHours()
        const secondexit = dateExit.getSeconds()
        exit.innerHTML = `${hourexit}:${minexit}:${secondexit}`
        console.log(hourexit-hour);
        console.log(minexit-min);
        console.log(secondexit-second);














        // let our = ``
        // for(let i = 0  ; i<=enter.innerHTML.length-1; i++){
        //     our +=enter.innerHTML[i]
        // }
        // // console.log(our);
        // let our2 = +our.slice(3)
        // let exitOur
        // // console.log(our2);
    })
})
