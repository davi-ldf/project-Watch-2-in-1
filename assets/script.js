let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360/60) * second) - 90;
    let mDeg = ((360/60) * minute) - 90;
    let hDeg = ((360/12) * hour) - 90;
    //A conta calcula a movimentação em graus dos ponteiros
    //O -90 serve para compensar um acréscimo de 90º
    //Isso acontece pq o segundo 0 no CSS é posicionado de forma diferente do relógio analógico, 90 graus antes.  
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;

}

function fixZero(time) { //Resolve o bug 
    if(time < 10) {
        return '0'+time;
    } else {
        return time;
    }

    //return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
// A cada 1 segundo, executa a função de update.
updateClock();