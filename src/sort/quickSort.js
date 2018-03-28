// 快速排序
// 基本思路就是找一个值作为中心点，然后遍历一次把原来的数组分为大于该值和小于该值的两个数组，然后分别再对这两个数组快速排序

export function quickSort(arr){
	if (!Array.isArray(arr)) {return [];};
	if (arr.length <= 1) {
		return arr;
	};
	let middleIndex = ~~(arr.length / 2),
		middle = arr[middleIndex],
		left = [],
		right = [];
	arr.forEach((item, index)=>{
		if (!(index === middleIndex)) {
			if (item < middle) {
				left.push(item);
			} else {
				right.push(item);
			}
		};
	});
	return quickSort(left).concat([middle], quickSort(right));
}