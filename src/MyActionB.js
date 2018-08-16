const Mebo = require('mebo');

@Mebo.register('myActionB')
class MyActionB extends Mebo.Action{
  constructor(){
    super();
    this.createInput('x: numeric');
    this.createInput('y: numeric');
  }

  async _perform(data){
    return data.x + data.y;
  }
}

module.exports = MyActionB;
