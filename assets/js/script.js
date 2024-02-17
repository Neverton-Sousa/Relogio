function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('horas').textContent = hours;
    document.getElementById('minutos').textContent = minutes;
    document.getElementById('segundos').textContent = seconds;

    let greeting;
    if (hours >= 5 && hours < 12) {
        greeting = 'Bom dia';
    } else if (hours >= 12 && hours < 18) {
        greeting = 'Boa tarde';
    } else {
        greeting = 'Boa noite';
    }
    document.getElementById('greeting').textContent = greeting;
}

updateTime();
setInterval(updateTime, 1000);