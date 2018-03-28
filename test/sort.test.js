import assert from 'assert';
import {quickSort} from '../src/sort/quickSort';

describe('快速排序', function() {
	it('输入非数组，返回一个空数组', function() {
		assert.deepEqual(quickSort(12), []);
	});
	it('输入一个数组，正常排序', function() {
		assert.deepEqual(quickSort([1,5,2,56,11,34,64,9,53,86,222]), [1, 2, 5, 9, 11, 34, 53, 56, 64, 86, 222]);
	});
});