const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', ()=>{
  it('should generate correct message object', ()=>{
    //store res in variable
    //assert from match
    //assert text match
    //assert createdAt is number
    const from = 'Jen';
    const text = 'Some message';
    const message = generateMessage(from,text);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from,text})
  })

})
