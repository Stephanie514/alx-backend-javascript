const http = require('http');
const fs = require('fs');

const PORT = 1245;

// Function that reads database
function readDatabase(databasePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(databasePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        resolve(data);
      }
    });
  });
}

// Create HTTP server
const app = http.createServer((req, res) => {
  // Handling requests for '/'
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  }
  // Handling requests for '/students'
  else if (req.url === '/students') {
    readDatabase(process.argv[2])
      .then((data) => {
        const lines = data.split('\n').filter(line => line.trim() !== '');

        if (lines.length === 0) {
          throw new Error('Cannot load the database');
        }

        const students = lines.slice(1).map(line => line.split(',')).filter(student => student.length === 4);
        const numberOfStudents = students.length;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${numberOfStudents}\n`);

        const fields = {};

        students.forEach(([firstname, , , field]) => {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        });

        for (const [field, names] of Object.entries(fields)) {
          res.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
        }
        res.end();
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
