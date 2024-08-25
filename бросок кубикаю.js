function rollDice(sides) {
  let player = 0;
  let pc = 0;
  while (player < 3 || pc < 3) {
    // Бросаем первый кубик (Player)
    let res = Math.floor(Math.random() * sides) + 1;
    console.log(res);
    // Бросаем 2 кубик (PC)
    let res_2 = Math.floor(Math.random() * sides) + 1;
    console.log(res_2);
    if (res > res_2) {
      player++;
    }
    if (res < res_2) {
      pc++;
    }
  }
  if (player === 3) {
    console.log("Cчет " + `${player}` + "Player выйграл!");
  } else {
    console.log("Cчет " + `${pc}` + " Pc выйграл!");
  }
}

rollDice(4);
