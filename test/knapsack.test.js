import assert from 'assert';
import {knapsack01, knapsack01_2, knapsack01_3, knapsack01_cram} from '../src/knapsack/knapsack01';

describe('0-1背包问题', function() {
	it('使用二维数组', function() {
		assert.equal(knapsack01([4,5,6,2,2],[6,4,5,3,6],10), 15);
	});
	it('使用两个一维数组', function() {
		assert.equal(knapsack01_2([4,5,6,2,2],[6,4,5,3,6],10), 15);
	});
	it('使用一个一维数组', function() {
		assert.equal(knapsack01_3([4,5,6,2,2],[6,4,5,3,6],10), 15);
	});
	it('刚好填满', function() {
		assert.equal(knapsack01_cram([4,5,6,2,2],[6,4,5,3,6],10), 14);
	});
});