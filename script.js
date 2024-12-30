const messages = [
    "Happy New Year meri Tubee , ye dusri new year hai sath me tuee.. abhi aane wali saari  bhi sath  me celebrate krenge  ❤️",
    "Keep smiling! 😊",
    "You light up our world! ✨",
    "Spread love everywhere you go! 🌹",
    "Have a fantastic Year and Life Tubee! 🌈",
    "   👻  ",
    "Ek aur saal gya jisme bahut kuchh sikhi tm bahut logon ka real face dekhi lekin usse tmhe tension nhi lena n please kyuki already hmlog ke pass bahut problem hai...aur hm dono ko jldi se kuch krna hai life me isliye ye new year se dono kuchh resolution bna lenge jo dono ko follow krna hai..",
    "Missing You!🫴",
    
];

let backgroundChanged = false; // Flag to track if background has changed

function openHeart() {
    const heart = document.getElementById('heart');
    heart.classList.add('animate');
    if (!backgroundChanged) {
        changeBackground(); // Change background only the first time
        backgroundChanged = true; // Set the flag to true
    }
}

function showMessage(event) {
    const messageBox = document.getElementById('message-box');
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    messageBox.innerText = randomMessage;
    messageBox.style.display = 'block';

    // setTimeout(() => {
    //     messageBox.style.display = 'none';
    // }, 6000); // Message disappears after 3 seconds
}

function changeBackground() {
    const backgroundImage = "url('pic2.jpg')"; // Set your background image path
    document.body.style.backgroundImage = backgroundImage;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.height = "100vh"; 
    document.body.style.margin = "0";
    document.body.style.transition = "background 0.5s ease";
}
