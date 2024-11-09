// Slot Machine ASCII - eseguibile nel CMD con numeri
// Per eseguirla: salva il codice in un file "ascii-slot.js" e avvia con "node ascii-slot.js"

const symbols = ["7", "5", "3", "1", "9"]; // simboli numerici della slot machine

// Funzione per generare un simbolo casuale
function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Funzione per disegnare la slot machine con i simboli generati
function drawSlotMachine(slot1, slot2, slot3) {
    console.clear();
    console.log("╭───────────────╮");
    console.log("│               │");
    console.log(`│   ${slot1}   ${slot2}   ${slot3}   │`);
    console.log("│               │");
    console.log("╰───────────────╯");
}

// Funzione per far girare i rulli
function spin() {
    const slot1 = getRandomSymbol();
    const slot2 = getRandomSymbol();
    const slot3 = getRandomSymbol();

    drawSlotMachine(slot1, slot2, slot3);

    // Controlla se i simboli sono uguali (vittoria)
    if (slot1 === slot2 && slot2 === slot3) {
        console.log("\n🎉 Vincita! Tre simboli uguali! 🎉\n");
    } else {
        console.log("\n💀 Riprova... 💀\n");
    }
}

// Funzione principale per avviare il gioco
function play() {
    spin();
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('do you want still play? (s/n): ', risposta => {
        if (risposta.toLowerCase() === 's') {
            readline.close();
            play();
        } else {
            console.log("Grazie per aver giocato! 🎉");
            readline.close();
        }
    });
}

play();
