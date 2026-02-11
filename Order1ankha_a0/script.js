function show(pageId) {
  document.querySelectorAll('.container').forEach(div => {
    div.classList.add('hidden');
  });
  document.getElementById(pageId).classList.remove('hidden');
}

function yesClick() {
  launchConfetti();
  show('page3');
}


function noClick() {
  show('page2');
}

function goBouquet() {
  show('page1');
}

function goConfirm() {
  show('page4');
}

function restart() {
  show('page1');
}
function launchConfetti() {
  const confettiContainer = document.getElementById('confetti');
  confettiContainer.innerHTML = '';

  for (let i = 0; i < 90; i++) {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');

    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.backgroundColor = randomColor();

    // Доош унах хугацаа
    const fallTime = Math.random() * 2 + 4; // 4–6s
    piece.style.animationDuration = `${fallTime}s, ${Math.random() * 1.5 + 2}s`;

    // Савлалтын delay
    piece.style.animationDelay = `${Math.random()}s, 0s`;

    confettiContainer.appendChild(piece);

    setTimeout(() => piece.remove(), (fallTime + 1) * 1000);
  }
}

function randomColor() {
  const colors = ['#ff5fa2', '#ff85b3', '#ffd6e8', '#ff4d6d'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function show(pageId) {
  document.querySelectorAll('.container').forEach(div => div.classList.add('hidden'));
  document.getElementById(pageId).classList.remove('hidden');
}

function yesClick() {
  launchConfetti();
  show('page3');
}

function noClick() {
  show('page2');
}

function goBack() {
  show('page1');
}

// "Үгүй" товчлуур дээр очиход зугтах функц (хөгжилтэй)
function moveNo() {
  const btn = document.getElementById('noBtn');
  const x = Math.random() * (window.innerWidth - btn.offsetWidth);
  const y = Math.random() * (window.innerHeight - btn.offsetHeight);
  btn.style.position = 'absolute';
  btn.style.left = x + 'px';
  btn.style.top = y + 'px';
}

function checkName() {
  const name = document.getElementById('nameInput').value.toLowerCase();
  if(name.length > 2) {
    alert("I love you, " + name + "! ❤️");
    launchConfetti();
  } else {
    alert("Please enter your real name! ✨");
  }
}

// Зураг дээр дарах үед дуудагдах функц
function openImage(element) {
  const viewer = document.getElementById("imageViewer");
  const fullImg = document.getElementById("fullImage");
  
  viewer.style.display = "flex";
  fullImg.src = element.src; // Дарагдсан зургийн src-г авна
}

// Хаах функц
function closeImage() {
  document.getElementById("imageViewer").style.display = "none";
}
// Хуудас солих функц
function show(pageId) {
  document.querySelectorAll('.container').forEach(c => c.classList.add('hidden'));
  document.getElementById(pageId).classList.remove('hidden');
}

// Нэр шалгах функц
function checkName() {
  const name = document.getElementById("nameInput").value.trim().toLowerCase();
  const correctName = "maralma"; // Энд өөрийнхөө нэрийг/хайртынхаа нэрийг бичнэ

  if (name === correctName) {
    show('page9');
  } else if (name === "") {
    alert("Нэрээ бичээрэй! 🥰");
  } else {
    alert("Зөвхөн миний хайртай хүн л харах эрхтэй. 😉");
  }
}

// Зураг томруулах
function openImage(element) {
  const viewer = document.getElementById("imageViewer");
  const fullImg = document.getElementById("fullImage");
  viewer.style.display = "flex";
  fullImg.src = element.src;
}

function closeImage() {
  document.getElementById("imageViewer").style.display = "none";
}
let currentPlayingCard = null;

function playMusic(fileUrl, cardElement) {
    const audio = document.getElementById('audioPlayer');
    
    // Хэрэв ижилхэн дуун дээр дарвал зогсооно/үргэлжлүүлнэ
    if (audio.src.includes(fileUrl)) {
        if (audio.paused) {
            audio.play();
            cardElement.querySelector('.play-icon').innerText = '⏸';
        } else {
            audio.pause();
            cardElement.querySelector('.play-icon').innerText = '▶';
        }
    } else {
        // Шинэ дуу тоглуулах
        if (currentPlayingCard) {
            currentPlayingCard.querySelector('.play-icon').innerText = '▶';
            currentPlayingCard.classList.remove('active-track');
        }
        
        audio.src = fileUrl;
        audio.play();
        cardElement.querySelector('.play-icon').innerText = '⏸';
        cardElement.classList.add('active-track');
        currentPlayingCard = cardElement;
    }
}

// Гэр лүүгээ буцах эсвэл хуудас солиход дууг зогсоох
function stopMusic() {
    const audio = document.getElementById('audioPlayer');
    audio.pause();
    if (currentPlayingCard) {
        currentPlayingCard.querySelector('.play-icon').innerText = '▶';
    }
    show('page4');
}
// Жагсаалтад шинэ зүйл нэмэх
function addItem() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    
    if (text !== "") {
        const li = document.createElement('li');
        li.innerHTML = `✨ ${text}`;
        document.getElementById('todoList').appendChild(li);
        input.value = ""; // Оролтыг цэвэрлэх
    }
}

// Текст файл болгож татаж авах
function downloadList() {
    const listItems = document.querySelectorAll('#todoList li');
    let content = "--- БИДНИЙ ХАМТДАА ХИЙХ ЗҮЙЛС --- \n\n";
    
    listItems.forEach((item) => {
        content += item.innerText + "\n";
    });
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    
    a.href = url;
    a.download = 'БИДНИЙ_ХАМТДАА_ХИЙХ_ЗҮЙЛС.txt'; // Файлын нэр
    a.click();
    window.URL.revokeObjectURL(url);
}
let stream = null;

async function openPhotoBooth() {
    show('page12');
    const video = document.getElementById('video');
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        video.srcObject = stream;
    } catch (err) {
        alert("Камер нээхэд алдаа гарлаа! 🎥");
    }
}

function startTimer() {
    const timerOptions = document.getElementsByName('timer');
    let timeLeft = 3;
    for (const option of timerOptions) {
        if (option.checked) timeLeft = parseInt(option.value);
    }

    const countdownEl = document.getElementById('countdown');
    const snapBtn = document.getElementById('snapBtn');
    const timerSelector = document.getElementById('timerOptions');

    snapBtn.disabled = true;
    timerSelector.style.opacity = "0.3";
    countdownEl.classList.remove('hidden');
    
    const timerInterval = setInterval(() => {
        countdownEl.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            countdownEl.classList.add('hidden');
            takePhoto();
            snapBtn.disabled = false;
            timerSelector.style.opacity = "1";
        }
        timeLeft--;
    }, 1000);
}

function takePhoto() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('photoCanvas');
    const shutter = document.getElementById('shutterSound');
    const context = canvas.getContext('2d');

    // Дуу тоглуулах
    shutter.play();

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Зургийг авах (Mirror эффект хадгалах)
    context.translate(canvas.width, 0);
    context.scale(-1, 1);
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    video.classList.add('hidden');
    canvas.classList.remove('hidden');
    document.getElementById('snapBtn').classList.add('hidden');
    document.getElementById('afterPhotoBtns').classList.remove('hidden');
    document.getElementById('timerOptions').classList.add('hidden');

    // Баярын цаас цацах эффект
    launchConfetti(); 
}

function retakePhoto() {
    document.getElementById('video').classList.remove('hidden');
    document.getElementById('photoCanvas').classList.add('hidden');
    document.getElementById('snapBtn').classList.remove('hidden');
    document.getElementById('afterPhotoBtns').classList.add('hidden');
    document.getElementById('timerOptions').classList.remove('hidden');
}

function downloadPhoto() {
    const canvas = document.getElementById('photoCanvas');
    const link = document.createElement('a');
    link.download = `Us_${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
}

function closePhotoBooth() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }
    show('page4');
}
// Шүүлтүүр хэрэглэх функц (Шинэчилсэн)
function applyFilter(filterValue, element) {
    const video = document.getElementById('video');
    const canvas = document.getElementById('photoCanvas');
    
    // Идэвхтэй товчлуурын стилийг солих
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if(element) element.classList.add('active');

    let filterCSS = "";
    switch (filterValue) {
        case "soft": filterCSS = "brightness(1.1) saturate(1.2) blur(0.2px)"; break;
        case "vintage": filterCSS = "sepia(0.5) contrast(1.1)"; break;
        case "bw": filterCSS = "grayscale(1)"; break;
        case "warm": filterCSS = "sepia(0.2) saturate(1.4)"; break;
        default: filterCSS = "none";
    }

    video.style.filter = filterCSS;
    const ctx = canvas.getContext('2d');
    ctx.filter = filterCSS;
}

// Зураг авах функц (ЗАСВАР ОРСОН)
function takePhoto() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('photoCanvas');
    const shutter = document.getElementById('shutterSound');
    const ctx = canvas.getContext('2d');

    // Камерын дуу тоглуулах
    if(shutter) shutter.play();

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Одоо байгаа шүүлтүүрийг канваст оноох
    ctx.filter = getComputedStyle(video).filter;

    // Толь шиг харуулах (Mirror)
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Харагдах байдлыг солих хэсэг:
    video.classList.add('hidden'); // Видеог нуух
    canvas.classList.remove('hidden'); // Канвасыг (зураг) гаргах
    
    document.getElementById('snapBtn').classList.add('hidden'); // "Зураг авах" товчийг нуух
    document.getElementById('afterPhotoBtns').classList.remove('hidden'); // "Хадгалах/Устгах" товчийг гаргах
    
    // Сонгох хэсгүүдийг нуух (илүү цэвэрхэн харагдуулахын тулд)
    if(document.querySelector('.filter-wrapper')) {
        document.querySelector('.filter-wrapper').classList.add('hidden');
    }
    if(document.getElementById('timerOptions')) {
        document.getElementById('timerOptions').classList.add('hidden');
    }
}

// Дахиад авах (Устгах) функц
function retakePhoto() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('photoCanvas');
    
    video.classList.remove('hidden'); // Видеог буцааж гаргах
    canvas.classList.add('hidden'); // Зургийг нуух
    
    document.getElementById('snapBtn').classList.remove('hidden'); // "Зураг авах" товчийг гаргах
    document.getElementById('afterPhotoBtns').classList.add('hidden'); // "Хадгалах/Устгах"-ыг нуух
    
    // Сонгох хэсгүүдийг буцааж гаргах
    if(document.querySelector('.filter-wrapper')) {
        document.querySelector('.filter-wrapper').classList.remove('hidden');
    }
    if(document.getElementById('timerOptions')) {
        document.getElementById('timerOptions').classList.remove('hidden');
    }
}
function pauseVideo() {
    const video = document.getElementById('specialVideo');
    video.pause(); // Бичлэгийг зогсоох
    show('page4'); // Цэс рүү буцах
}
const loveMessages = [
    "Чи миний амьдралын хамгийн тод од ✨",
    "Өнөөдөр үнэхээр хөөрхөн харагдаж байна шүү 🌸",
    "Чамтай байхад цаг хугацаа зогсчихдог мэт... ❤️",
    "Миний зүрхний цохилт бүхэн чамд зориулагдсан 💓",
    "Чи бол миний хамгийн дуртай дуу 🎶",
    "Хамтдаа туулсан мөч бүхэн нандин 💎",
    "Би чамдаа хязгааргүй их хайртай! 🥰",
    "Чи миний ертөнцийг гэрэлтүүлдэг ☀️",
    "Хоол сайн идээрэй, хайрт минь! 🍰",
    "Өнөөдөр чамд гайхалтай зүйл тохиолдох болно ✨"
];

function openBottlePage() {
    show('page15');
    document.getElementById('letterPopup').classList.add('hidden');
    document.getElementById('bottle').classList.remove('hidden');
}

function openMessage() {
    const bottle = document.getElementById('bottle');
    const popup = document.getElementById('letterPopup');
    const msgArea = document.getElementById('randomMessage');

    // Санамсаргүй зурвас сонгох
    const randomIndex = Math.floor(Math.random() * loveMessages.length);
    msgArea.innerText = loveMessages[randomIndex];

    // Лонхыг нууж, зурвасыг харуулах
    bottle.classList.add('hidden');
    popup.classList.remove('hidden');
    
    // Баярын эффект
    launchConfetti();
}

function closeLetter(event) {
    event.stopPropagation(); // Лонх дахин дарагдахаас сэргийлнэ
    document.getElementById('letterPopup').classList.add('hidden');
    document.getElementById('bottle').classList.remove('hidden');
}
function randomizeDecorations() {
    const decos = document.querySelectorAll('.deco');
    
    decos.forEach(deco => {
        // Дэлгэцийн өргөн, өндрийн 10-90% хооронд санамсаргүй тоо гаргана
        // Ингэснээр GIF-үүд дэлгэцийн захаар тасарч харагдахгүй
        const randomX = Math.floor(Math.random() * 80) + 10; 
        const randomY = Math.floor(Math.random() * 80) + 10;
        
        deco.style.left = `${randomX}%`;
        deco.style.top = `${randomY}%`;
        
        // Бага зэрэг хэмжээг нь бас өөрчилбөл илүү "random" харагдана (заавал биш)
        const randomScale = Math.random() * (1.2 - 0.8) + 0.8;
        deco.style.transform = `scale(${randomScale})`;
    });
}

// Хуудас ачаалагдах үед ажиллуулна
window.onload = randomizeDecorations;

// Хэрэв чи хуудас солигдох (show функц ажиллах) болгонд 
// GIF-үүдийг солихыг хүсвэл show функц дотроо randomizeDecorations();-ыг дуудаж болно.
// Хулганы баруун товч дарахыг хориглох (Зураг хуулахаас сэргийлэх)
document.addEventListener('contextmenu', event => event.preventDefault());

// Text сонгохыг (Copy) идэвхгүй болгох (заавал биш)
// document.addEventListener('selectstart', event => event.preventDefault());