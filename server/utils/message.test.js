var expect = require('expect')

var {generateMessage} = require('./message.js')
describe('generateMessage', () => {
it("should generate correct message", () => {
  var from = 'jen';
  var text = 'heyyy'
  var message = generateMessage(from,text);

  expect(message.createdAt).toBeA('number');
  expect(message).toInclude({
    from,
    text
  })
})
})
