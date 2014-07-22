'use strict';

var Clock = require('../');

describe('Clock', function() {
  describe('.tick', function() {
    it('should increment local time', function() {
      var c = new Clock('foo');
      c.tick();
      c.clocks.foo.should.equal(1);
    });
  });
  describe('.get', function() {
    it('should return local time without id param', function() {
      var c = new Clock('foo');
      c.tick();
      c.get().should.equal(1);
    });
    it('should return 0 for unknown clocks', function() {
      var c = new Clock('foo');
      c.tick();
      c.get('bar').should.equal(0);
    });
    it('should return the local time for the given clock', function() {
      var c = new Clock('foo');
      c.clocks.bar = 123;
      c.get('bar').should.equal(123);
    });
  });
  describe('.update', function() {
    it('should increment local time', function() {
      var c = new Clock('foo');
      var d = new Clock('bar');
      c.update(d);
      c.get().should.equal(1);
    });
    it('should sync with the given values', function() {
      var c = new Clock('foo');
      var d = new Clock('bar');
      d.clocks.baz = 123;
      c.update(d);
      c.get('baz').should.equal(123);
    });
    it('should add transit time to the local clock of the sender', function() {
      var c = new Clock('foo');
      var d = new Clock('bar');
      c.update(d);
      c.get('bar').should.equal(1);
    });
    it('should not not decrement time', function() {
      var c = new Clock('foo');
      var d = new Clock('bar');
      c.clocks.bar = 2;
      c.update(d);
      c.get('bar').should.equal(2);
    });
  });
});
