import test, { describe } from "node:test";
import { Parse, Run } from "../src";
import assert from "node:assert";
import { ValueType } from "../src/types";
describe('Expression', () => {
    describe('Operators', () => {
        describe('number', () => {
            test('like', () => {
                assert.equal(SampleRunner('1 like 1'), true);
            })
            test('==', () => {
                assert.equal(SampleRunner('1 == 1'), true);
            })
            test('!=', () => {
                assert.equal(SampleRunner('1 != 2'), true);
            })
            test('>', () => {
                assert.equal(SampleRunner('1 > 0'), true);
            })
            test('>=', () => {
                assert.equal(SampleRunner('1 >= 1'), true);
            })
            test('<=', () => {
                assert.equal(SampleRunner('1 <= 1'), true);
            })
            test('<', () => {
                assert.equal(SampleRunner('1 < 2'), true);
            })
            test('-', () => {
                assert.equal(SampleRunner('1 - 1'), 0);
            })
            test('+', () => {
                assert.equal(SampleRunner('1 + 2'), 3);
            })
            test('/', () => {
                assert.equal(SampleRunner('1 / 2'), .5);
            })
            test('%', () => {
                assert.equal(SampleRunner('3 % 2'), 1);
            })
            test('*', () => {
                assert.equal(SampleRunner('3 * 2'), 6);
            })
            test('within', () => {
                assert.equal(SampleRunner('1 within 1 to 2'), true);
            })
            test('between', () => {
                assert.equal(SampleRunner('2 between 1 to 3'), true);
            })
        })
        describe('string', () => {
            test('contains', (context) => {
                context.todo();
            })
            test('like', (context) => {
                context.todo();
            })
            test('==', (context) => {
                context.todo();
            })
            test('!=', (context) => {
                context.todo();
            })
            test('..', (context) => {
                context.todo();
            })
        })
        describe('boolean', () => {
            test('like', (context) => {
                context.todo();
            })
            test('==', (context) => {
                context.todo();
            })
            test('!=', (context) => {
                context.todo();
            })
            test('!', (context) => {
                context.todo();
            })
            test('not', (context) => {
                context.todo();
            })
        })
        describe('array', () => {
            test('contains', (context) => {
                context.todo();
            })
            test('intersects', (context) => {
                context.todo();
            })
            test('like', (context) => {
                context.todo();
            })
            test('==', (context) => {
                context.todo();
            })
            test('!=', (context) => {
                context.todo();
            })
            test('..', (context) => {
                context.todo();
            })
            test('+', (context) => {
                context.todo();
            })
        })
        describe('object', () => {
            test('like', (context) => {
                context.todo();
            })
            test('==', (context) => {
                context.todo();
            })
            test('!=', (context) => {
                context.todo();
            })
            test('..', (context) => {
                context.todo();
            })
        })
    })
});

function SampleRunner(s) {
    const tree = Parse(s);
    const { value } = Run(tree) as ValueType;
    return value;
}