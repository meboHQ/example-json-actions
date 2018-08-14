const Mebo = require('mebo');

@Mebo.register('myActionB')
class MyActionB extends Mebo.Action{
  constructor(){
    super();
    this.createInput('x: numeric');
    this.createInput('y: numeric');
  }

  _perform(data){
    return Promise.resolve(data.x + data.y);
  }
}

module.exports = MyActionB;
