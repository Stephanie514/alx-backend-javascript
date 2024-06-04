//program named 1-stdin
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
  if (process.stdin.isTTY) {
    process.stdin.end();
  } else {
    process.stdout.write('This important software is now closing\n');
    process.stdin.end();
  }
});

process.stdin.on('end', () => {
  process.exit(0);
});
