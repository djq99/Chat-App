const expect = require('expect');
const {generateMessage,generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', ()=>{
  it('should generate correct location object', ()=>{
    const latitude = 1;
    const longitude = 1;
    const from = 'Jiaqi';

    const url = 'https://www.google.com/maps?q=1,1'
    const message = generateLocationMessage(from,latitude,longitude);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from,url})
  })
})
