var doubleClick = false;
//开始按钮
function clickLightBtn(e){
    if(!doubleClick){
        startInterval = setInterval(lightFn,1000);
        setBtnColor(e);
        doubleClick = true;
    }

}
//结束按钮
function  clickStopBtn(e) {
    try{
        clearInterval (startInterval);
        doubleClick = false;
    }catch (e) {

    }
    clearColor();
    setBtnColor(e);
}
//开始闪
function  lightFn() {
    //清空原有颜色
    clearColor();
    //随机li
    var indexArr = new Array(3);
    //随机颜色
    var colorArr = new Array(3);
    var liArr = document.getElementsByTagName("li");
    indexArr[0] = getTempIndex("liIndex");
    indexArr[1] = getTempIndex("liIndex",indexArr[0]);
    indexArr[2] = getTempIndex("liIndex",indexArr);
    colorArr[0] = getTempIndex("colorIndex");
    colorArr[1] = getTempIndex("colorIndex",colorArr[0]);
    colorArr[2] = getTempIndex("colorIndex",colorArr);
    indexArr.forEach((value, index) => {
        document.getElementsByTagName("li")[value].style.backgroundColor = colorArr[index];
    });
}

//获取数组中不存在的index或者颜色
function  getTempIndex(kind,pre) {
    if("liIndex" === kind){
        var temp = Math.floor(Math.random()*9);
    }else{
        var temp = getRandomColor();
        if ("#FFA500" === temp) {
            getTempIndex(kind,pre);
        }
    }
    if(pre instanceof Array){
        if(pre[0] != temp && pre[1] != temp){
            return temp;
        }else {
            getTempIndex(kind,pre);
        }
    }else{
        if (temp !== pre) {
            return temp;
        }else {
            getTempIndex(kind,pre);
        }
    }
    return temp;
}
//获取随机颜色
function getRandomColor() {
    var color = "#";
    for(var i = 0;i < 6;i++) {
        color += (Math.random() * 16 | 0).toString(16);
    }
    return color;
}
//清空随机颜色
function clearColor(){
    for(var ind = 0;ind < 9;ind++){
        document.getElementsByTagName("li")[ind].style.backgroundColor = "orange";
    }
}
//设置按钮点击颜色
function setBtnColor(e){
    var curEle = e.id;
    e.style.backgroundColor = "#f39c06";
    e.style.color = "#fff"
    if("startBtn" === curEle){
        document.getElementById("stopBtn").style.backgroundColor = "#fff";
        document.getElementById("stopBtn").style.color = "orange";
    }else{
        document.getElementById("startBtn").style.backgroundColor = "#fff";
        document.getElementById("startBtn").style.color = "orange";
    }

}
