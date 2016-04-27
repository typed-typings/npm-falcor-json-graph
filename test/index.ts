/// <reference path="../bundle/main.d.ts" />
/// <reference path="../typings/main.d.ts" />

import jsonGraph = require('falcor-json-graph')
import assert = require('assert')

assert.deepEqual(jsonGraph.atom('test'), { $type: 'atom', value: 'test' })
assert.deepEqual(jsonGraph.error('test'), { $type: 'error', value: 'test' })
