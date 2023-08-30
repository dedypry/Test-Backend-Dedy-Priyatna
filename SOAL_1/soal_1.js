function looping() {
  const rows = 5;
  const cols = 5;

  for (let i = 1; i <= rows; i++) {
    let row = '';

    for (let j = 1; j <= cols; j++) {
      row += (i * j) + ' ';
    }

    console.log(row);
  }
}

looping();
