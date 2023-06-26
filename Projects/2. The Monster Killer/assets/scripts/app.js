const PLAYER_ATTACK_VALUE = 10;
const PLAYER_STRONG_ATTACK_VALUE = 15;
const MONSTER_ATTACK_VALUE = 18;
const PLAYER_HEAL_VALUE = 20;
const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_PLAYER_ATTACK = 'ATTACK';
const LOG_PLAYER_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_HEAL_PLAYER = 'HEAL_PLAYER';
const LOG_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_GAME_OVER = 'GAME_OVER';

let enteredValue = parseInt(prompt("Enter Max life: ", 100));
let maxHealth;
if (isNaN(enteredValue) || enteredValue <= 0) {
    maxHealth = 100;
} else {
    maxHealth = enteredValue;
}

let playerHealth = maxHealth;
let monsterHealth = maxHealth;
let hasBonusLife = true;
let logEntries = [];
adjustHealthBars(maxHealth);

function writeToLog(event, value, playerHealth, monsterHealth) {
    let entries = {
        event: event,
        value: value,
        currentPlayerHealth: playerHealth,
        currentMonsterHealth: monsterHealth
    }

    if ((event === LOG_PLAYER_ATTACK) || (event === LOG_PLAYER_STRONG_ATTACK)) {
        entries.target = "MONSTER";
    } else if ((event === LOG_MONSTER_ATTACK) || (event === LOG_HEAL_PLAYER)) {
        entries.target = "PLAYER";
    }

    logEntries.push(entries);
}

function monsterAttack() {
    const damageToPlayer = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    playerHealth -= damageToPlayer;

    if (playerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        playerHealth += maxHealth;
        setPlayerHealth(playerHealth);
        alert('You have taken heavy damage and lost one life.');
    }

    writeToLog(LOG_MONSTER_ATTACK, damageToPlayer, playerHealth, monsterHealth);
        
    if (playerHealth > 0 && monsterHealth <= 0) {
        alert("Player Won!");
        writeToLog(LOG_GAME_OVER, 'PLAYER', playerHealth, monsterHealth);
    } else if (playerHealth <= 0 && monsterHealth > 0) {
        alert("Player Lost!");
        writeToLog(LOG_GAME_OVER, 'MONSTER', playerHealth, monsterHealth);
    } else if (playerHealth <= 0 && monsterHealth <= 0) {
        alert("It's a draw.")
        writeToLog(LOG_GAME_OVER, "It's a draw!", playerHealth, monsterHealth);
    }

    if (playerHealth <= 0 || monsterHealth <= 0) {
        resetGame(maxHealth);
    }
}

function attack(mode) {
    let attackValue;
    let event;
    if (mode === MODE_ATTACK) {
        attackValue = PLAYER_ATTACK_VALUE;
        event = LOG_PLAYER_ATTACK;
    } else if (mode === MODE_STRONG_ATTACK) {
        attackValue = PLAYER_STRONG_ATTACK_VALUE;
        event = LOG_PLAYER_STRONG_ATTACK;
    }
    const damageToMonster = dealMonsterDamage(attackValue);
    monsterHealth -= damageToMonster;
    writeToLog(event, damageToMonster, playerHealth, monsterHealth);
    monsterAttack();
}

function attackHandler() {
    attack(MODE_ATTACK);
}

function strongAttackHandler() {
    attack(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
    let healValue;
    if (playerHealth >= maxHealth - PLAYER_HEAL_VALUE) {
        healValue = maxHealth - playerHealth;
    } else {
        healValue = PLAYER_HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    playerHealth += healValue;
    monsterAttack();
}

function logPrintHandler() {
    console.log(logEntries);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', logPrintHandler);