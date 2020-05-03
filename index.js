function huiFu(HP,PP){
    this.HP = HP;
    this.PP = PP;
}
huiFu.prototype = {
    bigHP: function(){
            mystate.HP = this.HP + 64;
    },
    smallHP: function(){
          mystate.HP = this.HP + 32;
    },
    bigPP: function(){
          mystate.PP = this.HP + 32;
    },
    smallPP: function(){
          mystate.PP = this.HP + 32;
    }
}
var mystate = new huiFu(65, 45);//创建实例
function bigHp(){
    var HP = document.getElementById("HPvalue");
    mystate.bigHP();//实例继承了类方法
    if(mystate.HP < 301){
    var beforeX = mystate.HP - 64;//之前的血量
    var xue = document.getElementById("xue");//红色方块元素
    HP.innerHTML = mystate.HP + '/' + 301;
    if(mystate.HP >  200){ 
        var color = "green";
        xue.style.background = color;
    }// js 没有块级的作用域，而且是词法作用域
    var animationModel = [{width: beforeX+"px",background: "red"},{width: mystate.HP +"px",background: color}];//动画的模型
    var animationTime ={ duration: 3000}//时序模型
    xue.animate(animationModel,animationTime);//将模型传入animate方法
    xue.style.width = mystate.HP +"px";//记录每次动画的HP值 去掉的话动画后没有宽度
    }
}