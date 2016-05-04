[![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url]

Konga
==================

> Make with all your local npm modules

Make is a great tool for automating builds and running interdependant tasks.
However running `make` is always preceeded by the `./configure` hassle of
assembling all your dependencies.

`npmake` allows you to describe your Makefile targets using binaries
distributed as npm modules. You just have to include them in your
`devDependencies` and npmake will do the rest.

Installation
------------

    npm install -g npmake


Usage
-----

    $ npmake

This will run the Makefile in the current working directory


    $ npmake test

This will run the `test` target from the local Makefile


    $ npmake -B

Make all targets, regardless of their last modified date


You can get the exhaustive documentation of `make` (hence `npmake` as well) with
the following command

    $ man make

Dependencies
------------

You need make installed on your system.

In the future, `npmake` may be able to automatically install it.

Test
----

You can run the tests with `npm test`. written with [mocha][mocha-url]

Contributing
------------

Anyone is welcome to submit issues and pull requests

License
-------

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016 Florent Jaby

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[travis-image]: http://img.shields.io/travis/Floby/npmake/master.svg?style=flat
[travis-url]: https://travis-ci.org/Floby/npmake
[coveralls-image]: http://img.shields.io/coveralls/Floby/npmake/master.svg?style=flat
[coveralls-url]: https://coveralls.io/r/Floby/npmake
[mocha-url]: https://github.com/visionmedia/mocha
[kong-url]: http://getkong.org

