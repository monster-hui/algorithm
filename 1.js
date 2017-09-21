/*
 *   求两个字符串的最长公共子串
 */
function findSameStr(str1, str2) {
    //两个字符串相等时，直接返回。
    var ans = [];
    if (str1 == str2) {
        ans.push(str1)
        return ans;
    }
    //将长的赋给str1,短的存入str2.
    if (str1.length < str2.length) {
        var temp = str2;
        str2 = str1;
        str1 = temp;
        temp = null;
    }
    //循环求出最长子字符串。
    var maxStr = [];
    max = 0;
    var st = "";
    for (var i = 0; i < str2.length; i++) {
        st += str2[i];
        if (str1.indexOf(st) < 0) {
            //不匹配时取前面匹配部分，i=max，与最长子串相同长度，i>max，当前为最长子串，更新最长子串数组，和长度。
            if (i > max) {
                maxStr = [];
                max = st.length - 1;
                maxStr.push(st.substr(0, max));
            } else if (i == max) {
                maxStr.push(st.substr(0, max));
            }
            str2 = str2.substr(1);
            if (str2.length < max) {
                break;
            }
            ;
            st = str2.substr(0, max - 1);
            i = max - 2;
        } else if (i == str2.length - 1) {
            //当遍历到最后一个切匹配时，存储次字符串，并停止循环
            if (i > max - 1) {
                maxStr = [];
                max = st.length;
                maxStr.push(st.substr(0, max));
            } else if (i == max - 1) {
                maxStr.push(st.substr(0, max));
            }
            str2 = str2.substr(1);
            break;

        }
    }
    //去除重复部分。
    var ansStr = ''
    for (var j = 0; j < maxStr.length; j++) {
        var t = maxStr[j];
        if (ansStr.indexOf(t) < 0) {
            ans.push(t);
            ansStr += "," + t;
        }
    }
    return ans;
}

//测试数据;;
//console.log(findSameStr("abcd", "abcd"));
//console.log(findSameStr("abcd", "abcf"));
//console.log(findSameStr("abcf", "abcfabcf"));
//console.log(findSameStr("abcfabcf", "abcfbabcf"));
//console.log(findSameStr("fabbc", "abcfbabcbff"));
