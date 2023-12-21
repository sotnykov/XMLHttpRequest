const positions = ['Investor', 'Manager', 'Assistant', 'Worker'];

const fs = require('fs');

positions.forEach(position => {
  const randomData = {
    name: `Name_${position}`,
    age: Math.floor(Math.random() * 30) + 20,
    salary: Math.floor(Math.random() * 5000) + 2000
  };

  fs.writeFile(`${position}.json`, JSON.stringify(randomData), (err) => {
    if (err) throw err;
    console.log(`File ${position}.json created!`);
  });
});