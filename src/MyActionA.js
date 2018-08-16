const Mebo = require('mebo');

@Mebo.register('myActionA')
class MyActionA extends Mebo.Action{
  constructor(){
    super();
    this.createInput('message: text');
    this.createInput('repeat: numeric', {defaultValue: 10});
  }

  async _perform(data){
    const result = data.message.repeat(data.repeat);
    return result;
  }
}

module.exports = MyActionA;
