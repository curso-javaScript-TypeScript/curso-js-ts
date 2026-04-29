function recursiva(max) {
  console.log(max);
  if (max >= 960) return;
  max++;
  recursiva(max);
}

recursiva(0);

/*
function recursiva(max) {
  if (max >= 10) return;
  max++;
  console.log(max);
  recursiva(max);
}

recursiva(0);
*/