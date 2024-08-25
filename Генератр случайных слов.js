function f() {
  let words = ["24/7","solt","paper","fox","dream","beer"];
  let searsh_1 = Math.floor(Math.random() * words.length);
  let searsh_2 = Math.floor(Math.random() * words.length);
  let searsh_3 = Math.floor(Math.random() * words.length);
  let phrase = words[searsh_1] + " " + words[searsh_2] + " " + words[searsh_3];
  alert(phrase);
}

f();
