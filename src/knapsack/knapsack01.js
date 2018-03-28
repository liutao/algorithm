// 0-1 背包问题
// 背包的容量固定，每件物品只有一件，且每件物品的重量和价值不同，求背包所能装下的最大价值

/**
 * @param  weights  每件物品的重量
 * @param  values  物品对应的价值
 * @param  weight 背包总容量
 * @return 背包可以装的最大价值
 * 思路，动态规划，f(i, j) = max(f(i-1,j), f(i-1, j-wi) + vi)
 */
export function knapsack01(weights, values, weight){
	let result = new Array([]);
	for (let i = 0; i <= weight; i++) {
		result[0][i] = 0;
	};
	for (let i = 1; i <= weights.length; i++) {
		result[i] = [];
		for (let j = 0; j <= weight; j++) {
			if (j < weights[i-1]) {
				result[i][j] = result[i-1][j];
			} else if (result[i-1][j] > result[i-1][j-weights[i-1]] + values[i-1]) {
				result[i][j] = result[i-1][j];
			} else {
				result[i][j] = result[i-1][j-weights[i-1]] + values[i-1];
			}
		};
	};
	return result[weights.length][weight];
}

/**
 * @param  weights  每件物品的重量
 * @param  values  物品对应的价值
 * @param  weight 背包总容量
 * @return 背包可以装的最大价值
 * 思路，因为我们之前每次比较，都是和上一个物品添加进去的时候比较，所以可以优化为使用两个数组来处理
 */
export function knapsack01_2(weights, values, weight){
	let last = new Array(),
		current = new Array(),
		temp = null;
	for (let i = 0; i <= weight; i++) {
		last[i] = 0;
	};
	for (let i = 1; i <= weights.length; i++) {
		for (let j = 0; j <= weight; j++) {
			if (j < weights[i-1]) {
				current[j] = last[j];
			} else if (last[j] > last[j-weights[i-1]] + values[i-1]) {
				current[j] = last[j];
			} else {
				current[j] = last[j-weights[i-1]] + values[i-1];
			}
		};
		temp = current
		current = last,
		last = temp;
	};
	return last[weight];
}

/**
 * @param  weights  每件物品的重量
 * @param  values  物品对应的价值
 * @param  weight 背包总容量
 * @return 背包可以装的最大价值
 * 思路，那么我们有没有办法使用一个一维数组来解决呢？如果我们使用一个一维数组从前向后循环的时候max(f(i-1,j), f(i-1, j-wi) + vi)，j会基于j-wi的值作比较，如果f(i-1, j-wi)的值改变，则
f(i-1,j)的值会受到影响，如果我们倒着循环呢？此时f(i-1, j-wi)的值还是旧值。
 */
export function knapsack01_3(weights, values, weight){
	let result = new Array();
	for (let i = 0; i <= weight; i++) {
		result[i] = 0;
	};
	for (let i = 1; i <= weights.length; i++) {
		for (let j = weight; j >= weights[i-1]; j--) {
			if (result[j] < result[j-weights[i-1]] + values[i-1]) {
				result[j] = result[j-weights[i-1]] + values[i-1];
			}
		};
	};
	return result[weight];
}


// 0-1背包问题的变种，求背包完全装满的时候，价值最大
/**
 * @param  weights  每件物品的重量
 * @param  values  物品对应的价值
 * @param  weight 背包总容量
 * @return 背包可以装的最大价值
 * 思路，还是回到我们基础的公式f(i, j) = max(f(i-1,j), f(i-1, j-wi) + vi)，我们设置重量为0的时候价值为0，在没有添加物品的时候背包容量为1-weight的时候都为-Infinity，这样在背包容量正好填满的时候，会基于weight=0来添加。
 */
export function knapsack01_cram(weights, values, weight){
	let result = new Array([0]);
	for (let i = 1; i <= weight; i++) {
		result[0][i] = -Infinity;
	};
	for (let i = 1; i <= weights.length; i++) {
		result[i] = [];
		for (let j = 0; j <= weight; j++) {
			if (j < weights[i-1]) {
				result[i][j] = result[i-1][j];
			} else if (result[i-1][j] > result[i-1][j-weights[i-1]] + values[i-1]) {
				result[i][j] = result[i-1][j];
			} else {
				result[i][j] = result[i-1][j-weights[i-1]] + values[i-1];
			}
		};
	};
	return result[weights.length][weight];
}

