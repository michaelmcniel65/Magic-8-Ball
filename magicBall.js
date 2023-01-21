const ballOptions = ['ABSOLUTELY', 'DEFINITELY NOT', 'YES', 'NO', 'PROBABLY', 'PROBABLY NOT', 'PERHAPS', 'NOT SURE. TRY ASKING AGAIN!'];
let firstClick = false;
let usedChoice = [];

function ballShake() {
    if (firstClick = false) {
        const shake = Math.floor(Math.random() * ballOptions.length);
        const reAdd = ballOptions.splice(shake, 1);
        usedChoice.push(reAdd);
        document.getElementById("result").innerText = usedChoice;
        console.log(usedChoice);
        firstClick = true;
        return;
    }

    if (firstClick = true) {
        const shake = Math.floor(Math.random() * ballOptions.length);
        const reAdd = ballOptions.splice(shake, 1);
        ballOptions.push(...usedChoice);
        usedChoice.splice(0, 1);
        usedChoice.push(reAdd);
        document.getElementById("result").innerText = usedChoice;
        console.log(usedChoice);
        return;
    }
};

function normalTheme() {
    document.documentElement.style.setProperty('--glowStart', '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #2e00e6, 0 0 40px #6300e6, 0 0 50px #c300e6, 0 0 60px #e200e6, 0 0 70px #e600ca');
    document.documentElement.style.setProperty('--glowEnd', '0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6');
    document.getElementById("back").style.backgroundImage = 'url(https://wallpaper.dog/large/20374212.jpg)';
    document.getElementById("ball").style.backgroundColor = 'black';
}

function classyTheme() {
    document.documentElement.style.setProperty('--glowStart', '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e68e00, 0 0 40px #e68e00, 0 0 50px #e6cb00, 0 0 60px #e6cb00, 0 0 70px #e6cb00');
    document.documentElement.style.setProperty('--glowEnd', '0 0 20px #fff, 0 0 30px #d74800, 0 0 40px #d74800, 0 0 50px #d74800, 0 0 60px #d74800, 0 0 70px #d74800, 0 0 80px #d74800');
    document.getElementById("back").style.backgroundImage = 'url(https://i.pinimg.com/originals/c3/b0/7b/c3b07b99c453be419d6f9829ecebc59f.jpg)';
    document.getElementById("ball").style.backgroundColor = 'rgb(139, 7, 7)';
};

function forestTheme() {
    document.documentElement.style.setProperty('--glowStart', '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00e68e, 0 0 40px #00e68e, 0 0 50px #016d21, 0 0 60px #016d21, 0 0 70px #016d21');
    document.documentElement.style.setProperty('--glowEnd', '0 0 20px #fff, 0 0 30px #42f011, 0 0 40px #42f011, 0 0 50px #42f011, 0 0 60px #42f011, 0 0 70px #42f011, 0 0 80px #42f011');
    document.getElementById("back").style.backgroundImage = 'url(https://th.bing.com/th/id/R.6f5e2cf54d6f1e8705d368b88a5cd67d?rik=UGWRJUXaGEa5MA&pid=ImgRaw&r=0)';
    document.getElementById("ball").style.backgroundColor = 'rgb(1, 58, 6)';
}

