function saklar(params) {
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");

    if (params == 'on1') {
        lampu1.src = 'assets/images/on.png';
    }
    else if (params == 'on2') {
        lampu2.src = 'assets/images/on.png';
    }
    else if (params == 'on3') {
        lampu3.src = 'assets/images/on.png';
    }
    else if (params == 'off1') {
        lampu1.src = 'assets/images/off.png';
    }
    else if (params == 'off2') {
        lampu2.src = 'assets/images/off.png';
    }
    else if (params == 'off3') {
        lampu3.src = 'assets/images/off.png';
    }

    
    
}