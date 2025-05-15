const responses = {
    "sedih": "Aku sangat menghargai kamu yang sudah berbagi perasaan. Sedih adalah perasaan manusiawi, dan berbicara dengan orang yang tepat bisa sangat membantu untuk melewati ini. 😊",
    "stres": "Stres bisa datang saat kita merasa ada banyak yang harus dihadapi. Ambil waktu untuk diri sendiri, dan cobalah berbicara dengan seseorang yang bisa mendengarkanmu.",
    "cemas": "Kecemasan itu nyata, dan itu adalah hal yang wajar. Mengakui perasaan itu adalah langkah pertama yang baik. Apa yang membuatmu merasa cemas? Boleh cerita lebih lanjut.",
    "marah": "Marah sering kali datang karena perasaan yang tidak tersampaikan. Cobalah untuk menenangkan diri sejenak dan coba temukan penyebab dari perasaan itu. Aku siap mendengarkan jika kamu butuh bercerita.",
    "sendiri": "Terkadang kita merasa sendiri, tapi kamu nggak sendirian. Dukungan dari orang lain sangat penting, dan jika kamu ingin, aku bisa bantu carikan informasi dukungan profesional.",
    "lelah": "Kelelahan bisa datang dari banyak hal, baik fisik maupun emosional. Pastikan kamu memberi waktu untuk diri sendiri agar bisa pulih. Jangan ragu untuk berhenti sejenak dan merawat diri.",
    "depresi": "Depresi adalah kondisi yang serius dan perlu ditangani dengan perhatian khusus. Jika kamu merasa terjebak, bicarakan perasaan ini dengan seorang profesional yang bisa membantumu.",
};
  
const emergencyKeywords = [
    "bunuh diri", "mati saja", "gak mau hidup", "tidak ingin hidup", 
    "akhiri hidup", "mengakhiri hidup", "ingin mati", "ingin mengakhiri hidup",
    "mau mati rasanya", "aku mau mati", "mending mati"
];
  
const humorKeywords = [
    "garing", "jokes", "lucu", "kelakar", "humor", "lelucon"
];
  
const jokeRequestKeywords = [
    "lagi", "jokes lagi", "lelucon lagi"
];
  
const sapaan = [
    "halo", "hai", "selamat pagi", "selamat siang", "selamat malam", "assalamualaikum", "apa kabar"
];
  
const curhatList = [];
  
function sendMessage() {
    const input = document.getElementById("userInput");
    const chatbox = document.getElementById("chatbox");
    const message = input.value.trim();
  
    if (!message) return;
  
    const lowerMessage = message.toLowerCase();
    addMessage("user", message);
  
    // Deteksi kata darurat
    if (emergencyKeywords.some(kw => lowerMessage.includes(kw))) {
        addMessage("bot",
            "Aku sangat khawatir dengan apa yang kamu rasakan saat ini. 🧡 " +
            "Kamu sangat berharga, dan perasaan ini bisa sangat berat untuk ditanggung sendiri. " +
            "Tolong pertimbangkan untuk menghubungi layanan bantuan profesional atau orang yang kamu percayai. " +
            "Kamu tidak sendirian dalam hal ini, dan ada orang-orang yang siap membantu.");
        input.value = "";
        return;
    }
  
    // Respon keluar
    if (lowerMessage === "keluar") {
        addMessage("bot", "Terima kasih telah berbagi hari ini. Jika kamu membutuhkan bantuan lebih lanjut, jangan ragu untuk berkonsultasi dengan psikolog profesional, ini hanyalah sebuah langkah awal kamu untuk bercerita dengan orang lain🥹🫶🌱");
        input.value = "";
        return;
    }
  
    // Respon humoris
    if (humorKeywords.some(kw => lowerMessage.includes(kw))) {
        const jokes = [
            "Kenapa kucing nggak pernah minta gaji? Karena dia sudah punya banyak ‘meong’! 🐱😂",
            "Aku tanya ke teman, ‘Kenapa kamu selalu bawa pulpen?’ Dia jawab, ‘Biar kalau ada masalah, aku bisa ‘nulis’ solusi!’ ✍️😄",
            "Kenapa komputer suka banget makan? Karena dia butuh ‘byte’! 💻🍽️😆",
            "Kamu tahu nggak kenapa kita harus tidur cukup? Supaya jadi ‘refresh’ dan nggak ‘hang’ kayak komputer! 😴💻",
            "Aku punya teman yang sangat pandai matematika, dia selalu punya ‘solusi’! Bahkan dia bilang, ‘Saya juga punya masalah, tapi solusinya selalu dua-dua!’ 🧮😄"
        ];
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        addMessage("bot", randomJoke);
        input.value = "";
        return;
    }
  
    // Respon sapaan
    if (sapaan.some(kw => lowerMessage.includes(kw))) {
        const sapaanRespon = [
            "Halo juga! Senang bisa ngobrol denganmu hari ini 😊",
            "Hai! Aku di sini kalau kamu butuh teman cerita 🌻",
            "Halo! Semoga harimu baik-baik saja ya 🌈",
            "Hai! Apa kabar? Aku siap mendengarkanmu 💬🫶",
            "Halo! Kamu luar biasa bisa sampai sejauh ini 💪❤️"
        ];
        const randomSapaan = sapaanRespon[Math.floor(Math.random() * sapaanRespon.length)];
        addMessage("bot", randomSapaan);
        input.value = "";
        return;
    }
  
    // Respon emosi berdasarkan kata kunci di `responses`
    for (const [emotion, response] of Object.entries(responses)) {
        if (lowerMessage.includes(emotion)) {
            addMessage("bot", response);
            input.value = "";
            return;
        }
    }

    // Jika tidak ada kondisi yang cocok
    addMessage("bot", "Maaf, aku tidak sepenuhnya mengerti. Bisa jelaskan lebih lanjut? 😊");
    input.value = "";
}

function addMessage(sender, message) {
    const chatbox = document.getElementById("chatbox");
    const newMessage = document.createElement("div");
    newMessage.classList.add(sender);
    newMessage.innerText = message;
    chatbox.appendChild(newMessage);
}
