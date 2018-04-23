
var Parabola = function(opts) {
	opts = opts || {};

	// 要求输入抛物线的起始点和终点
	if (!opts.start) {
      throw new Error('`startPos` is required in init options');
    }
    if (!opts.end) {
      throw new Error('`endPos` is required in init options');
    }


    // 动画运行时长， 默认是2000ms;
    opts.duration = opts.duration || 2000;
    this.a = 0.01;
	this.opts = opts;
    	
    console.log(this.opts);

    /*
	  抛物线函数 y = a*X*X + b*X + c;

	  即要求出这个抛物线方程，已知两点（起始点和终点），起始点设置为（0，0）；则c = 0; 通过相对位置求出终点的坐标位置(x1,y1)。

	  则抛物线方程 y1 = a*X1*X1 + b*X1 + 0;

	  a 为抛物线的弧度，因此我们可以把a当做是一个常数 默认a == -0.1;

	  因此可以求出b
	

	  b = (y1 - a*x1*x1)/x1;

    */

    this.calculateB();
}

Parabola.prototype.calculateB = function() {

	// 计算偏移的相对地址
	this.x = this.opts.end.left - this.opts.start.left;


	this.y =  this.opts.start.top - this.opts.end.top;



	this.b = (this.y - this.a * this.x * this.x ) / this.x;

	//console.log(this.b);

};

Parabola.prototype.position = function(progress){

	// progress代表整个过程，0=刚开始，1=结束
	// 通过progress计算下个位置的坐标(偏移量)

	var newX = this.x * progress;

	var newY = this.a * newX * newX + this.b * newX;

	return{
		x : newX,
		y : newY
	}


}
Parabola.prototype.start = function(){

	var opts = this.opts;
	var _this = this;

	var startTimeStamp = +new Date();

	var animationFrame = window.requestAnimationFrame  ||
      window.webkitRequestAnimationFrame  ||
      window.mozRequestAnimationFrame     ||
      window.oRequestAnimationFrame       ||
      window.msRequestAnimationFrame      ||
      function (callback) { window.setTimeout(callback, 1000 / 60); };

    function step(){
    	var currTimeStamp = +new Date();

    	var progress = Math.min((currTimeStamp - startTimeStamp)/opts.duration,1);

    	// console.log(progress);


    	if(progress === 1){
    		// 动画结束
    		return false;
    	}else{
    		// 动画未结束，执行下一帧
    		var position = _this.position(progress);
    		
    		opts.onStep && opts.onStep(position);

        	return true;
    	}
    }
    function progress () {
      if (step()) {
        animationFrame(progress);
      } else {
        if (typeof opts.onFinish === 'function') {
          opts.onFinish(opts.end);
        }
      }
    }

    animationFrame(progress);

}

export default Parabola;





