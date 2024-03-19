function updateClock() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    document.getElementById('hour').textContent = (hour < 10 ? '0' : '') + hour;
    document.getElementById('minute').textContent = (minute < 10 ? '0' : '') + minute;
    document.getElementById('second').textContent = (second < 10 ? '0' : '') + second;
}

setInterval(updateClock, 1000);
updateClock(); // inicializa o relógio imediatamente
