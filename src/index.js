const util = require('util');
const fs = require('fs');
const Mebo = require('mebo');

const readFile = util.promisify(fs.readFile);

// this example uses es6/es7 spec to make things easier to play with.
// In a production environment please consider transpiling beforehand
require('babel-register');

// loading actions
require('./MyActionA');
require('./MyActionB');

async function run(){
  // the process below recreates "action a" based on a previously serialized data
  const serializedActionA = await readFile('data/myActionASerialized.json', 'utf8');
  const recreatedActionA = Mebo.Action.createFromJSON(serializedActionA);
  const resultA = await recreatedActionA.run();

  // the process below recreates a new instance of "action b" through
  // serialization and parsing process
  const actionB = Mebo.Action.create('myActionB');
  actionB.input('x').setValue(1);
  actionB.input('y').setValue(5);

  const recreatedActionB = Mebo.Action.createFromJSON(await actionB.bakeToJSON());
  const resultB = await recreatedActionB.run();

  return Promise.resolve({
    a: resultA,
    b: resultB
  });
}

// running example
run().then((result) => {
  console.log(result);

}).catch((err) => {
  console.error(err.message);
});
