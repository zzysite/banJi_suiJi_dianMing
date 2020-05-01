function getAcyclicRandomNumber(number){
	var nums = [];
	for (var i = 0; i < number; i++) {
		nums[i] = Math.floor(Math.random()*classmates.length);
		for (var j = 0; j < i; j++) {
			if (nums[j] == nums[i]) {
				i--;
			}
		}
	}
	return nums;
}
