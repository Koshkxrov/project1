let noClickCount = 0;

function showOopsPage() {
    document.getElementById("registration").style.display = "none";
    document.getElementById("oopsPage").style.display = "block";
}

function showSurprise() {
    document.getElementById("oopsPage").style.display = "none";
    document.getElementById("surprise").style.display = "block";
}

function moveNoButton() {
    let button = document.getElementById("noButton");

    if (noClickCount < 5) {
        let x = Math.random() * (window.innerWidth - button.clientWidth);
        let y = Math.random() * (window.innerHeight - button.clientHeight);
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
        noClickCount++;
    }

    if (noClickCount === 5) {
        document.getElementById("noChoice").classList.remove("hidden");
        setTimeout(showCelebration, 2000);
    }
}

function showCelebration() {
    document.getElementById("surprise").style.display = "none";
    document.getElementById("celebration").style.display = "block";
    document.getElementById("customMessage").innerHTML = `
        Жаным сол, я приглашаю тебя на свидание!🥹♥️♥️♥️ <br><br>

        Мое самое самое самое любимое солнышко, <br><br>

        День Святого Валентина – это еще один повод напомнить тебе, как сильно я тебя люблю🥹♥️♥️♥️ <br><br>

        И я хочу провести этот вечер только с тобой🥹♥️♥️♥️ <br><br>

        Предлагаю тебе освободить вечер, потому что нас ждет уютное и теплое время вместе🥹♥️♥️♥️ <br><br>

        Наш план на день: мы выбираем классный фильм, заказываем что-нибудь вкусное, смеемся, разговариваем и просто наслаждаемся друг другом🥹♥️♥️♥️ <br><br>

        Я хочу, чтобы этот день стал для нас особенным, чтобы ты чувствовала, как важна ты для меня🥹♥️♥️♥️♥️ <br><br>

        Жду тебя, жаным сол🥹♥️♥️♥️ <br>
        Давай сделаем этот вечер незабываемым🥹♥️♥️♥️ <br><br>

        Я тебя безумно безумно сильно люблю🥹♥️♥️♥️♥️ <br><br>

        И сладко сладко тебя целую 🥹♥️♥️♥️♥️ <br><br>

        Муа муа муа муа🥹♥️♥️♥️♥️
    `;
}
