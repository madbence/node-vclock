# vclock [![Build Status](https://travis-ci.org/madbence/node-vclock.svg)](https://travis-ci.org/madbence/node-vclock)

Vector clock implementation in js.
[Vector clocks](http://en.wikipedia.org/wiki/Vector_clock) can be used to generate
[partial ordering](http://en.wikipedia.org/wiki/Partial_ordering)
of events in a distributed system.

Implements the asynchronous algorithm described in
[Timestamps in Message-Passing Systems That Preserve the Partial Ordering](http://zoo.cs.yale.edu/classes/cs426/2012/lab/bib/fidge88timestamps.pdf).

## Install

Install the [package](http://npmjs.org/package/vclock)
with [npm](http://npmjs.org):

```sh
$ npm install vclock
```

## API

### new Clock(id)

Creates a new `Clock`. `id` is used as a key in the clock hash.

### .tick()

Increment the clock.

### .get([id])

Get the current local clock value for clock `id`.
`id` defaults to the clocks `id`.

Unknown clocks have value `0`.

### .update(clock)

Update the local clock with values from `clock`.

## License

MIT
