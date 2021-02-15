const sundry = (x) => {
    if(!x) return x;
    let MAX = 2** 31 - 1, MIN = -(2**31);

    // 先去结尾的0
    while(x % 10 === 0){
        x = x / 10
    }
    // 溢出判断
    let max = MAX.toString().split("");
    let min = MIN.toString().split("").slice(1);
    let s = x.toString(), sign = x < 0 ? "-": "";
    s = s.replace(sign, "").split("").reverse();
    if(s.length === max.length){
        let i = 0;
        while(i < s.length){
            let n = Number(s[i]);
            if(n < Number(max[i]) || (sign && (n < Number(min[i])))) break;
            if(n > Number(max[i])) return 0;
            if(sign && (n > Number(min[i]))) return 0;
            i++
        }
    }

    return Number(sign + s.join(""))

};


const isPalindrome = (x) => {
    if(x < 0) return false;

    let n = 0, y = x;
    while(y){
        n = n * 10 + y % 10;
        y = Math.floor(y / 10)
    }
    return n === x;
};

const removeElement = (nums, val) => {
    let i = 0;
    for(let j = 0; j < nums.length; j++){
        if(nums[j] !== val){
            nums[i] = nums[j]
            i++
        }
    }
    return i
};

const strStr = (haystack, needle) => {
    if(!needle) return 0;
    if(haystack.length < needle.length) return -1;
    for(let i = 0; i < haystack.length; i++){
        let success = true;
        for(let j = 0; j < needle.length; j++){
            if(haystack.charAt(i + j) !== needle.charAt(j)){
                success = false
                break;
            }
        }
        if(success) return i;
    }
    return -1;
};

const countAndSay = function(n) {
    if(n === 1) return "1"
    let nums = countAndSay(n - 1).split("")
    let result = "", prev = "", count = 0;
    nums.forEach(num => {
        if(num === prev){
            count++
        } else {
            if(prev){
                result += `${count}${prev}`
            }
            prev = num;
            count = 1
        }
    })
    return result + `${count}${prev}`;
};

const checkPossibility = function(nums) {

    if(nums.length <= 2) return true;

    let prev = -Infinity, alter = -Infinity;
    for(let i = 0; i < nums.length - 1; i++){
        let cur = nums[i], next = nums[i + 1];
        if(prev < 0) prev = cur;
        if(cur > next) {
            alter = prev;
            prev = cur;
        }
        if(alter > next && prev > next) return false
    }

    return true;
};



module.exports = {
    reverse: sundry, isPalindrome, removeElement, strStr, countAndSay, checkPossibility,

};
