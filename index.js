'use strict';

function Clock(id) {
  this.id = id;
  this.clocks = {};
  this.clocks[id] = 0;
}

Clock.prototype.tick = function tick() {
  this.clocks[this.id]++;
};

Clock.prototype.get = function get(id) {
  id = id || this.id;
  return this.clocks[id] || 0;
};

Clock.prototype.update = function update(clock) {
  this.tick();
  if(this.get(clock.id) <= clock.clocks[clock.id]) {
    this.clocks[clock.id] = clock.clocks[clock.id] + 1;
  }
  Object.keys(clock.clocks).forEach(function(id) {
    this.clocks[id] = Math.max(this.get(id), clock.clocks[id]);
  }, this);
};

module.exports = Clock;
