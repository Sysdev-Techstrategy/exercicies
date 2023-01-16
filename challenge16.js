function cyclops(n) {
    let num = n;
    let binaryNum = n.toString(2);
    let zeros = 0;
    let ones = 0;
    if (binaryNum.length % 2 != 0) {
        for (let i = 0; i < binaryNum.length; i++) {
            if (binaryNum[i] == 0) {
                zeros += 1;
            } else {
                ones += 1;
            }
        }
        return ones == 1 || zeros == 1 ? true : false;
    } else {
        return false;
    }
}