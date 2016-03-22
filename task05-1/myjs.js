/**
 * Created by Administrator on 15-11-29.
 */
/*思路：1、获取用户输入内容
 2、判断输入内容是否为空
 3、判断输入内容是否为数字
 4、判断输入内容是否在0~100之间
 */

function mygrade() {
    var x = document.getElementById("score").value; //获取用户输入值赋值给变量转换成float赋给变量x
    if (x) {      //判断输入内容是否为空
        x = parseFloat(x);//将x值转换成float
        if (!isNaN(x)) {     //判断输入内容是否为数字
            if (x >= 0 && x <= 100) {     //判断输入数字是否在0~100之间
                if (x >= 90 && x <= 100) {
                    document.getElementById("grade").innerHTML = "一等生";
                } else if (x >= 80 && x < 90) {
                    document.getElementById("grade").innerHTML = "二等生";
                } else if (x >= 70 && x < 80) {
                    document.getElementById("grade").innerHTML = "三等生";
                } else if (x >= 60 && x < 70) {
                    document.getElementById("grade").innerHTML = "四等生";
                } else if (x >= 50 && x < 60) {
                    document.getElementById("grade").innerHTML = "五等生";
                } else if (x >= 40 && x < 50) {
                    document.getElementById("grade").innerHTML = "六等生";
                } else if (x >= 30 && x < 40) {
                    document.getElementById("grade").innerHTML = "七等生";
                } else if (x >= 20 && x < 30) {
                    document.getElementById("grade").innerHTML = "八等生";
                } else if (x >= 10 && x < 20) {
                    document.getElementById("grade").innerHTML = "九等生";
                } else {
                    document.getElementById("grade").innerHTML = "十等生";
                }
            } else {
                document.getElementById("grade").innerHTML = "请输入0-100的整数！";
            }
        } else {
            document.getElementById("grade").innerHTML = "请输入合法的数字！";
        }
    } else {
        document.getElementById("grade").innerHTML = "内容为空，请输入成绩。"
    }
}
