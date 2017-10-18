/*
	冲泡咖啡
	1. 将水煮沸
	2. 用沸水冲泡咖啡
	3. 把咖啡倒进杯子
	4. 加糖和牛奶
 */
var Coffer = function () {

}
Coffer.prototype.boilWater = function () {
	console.log('将水煮沸')
}
Coffer.prototype.brewCoffer = function () {
	console.log('用沸水冲泡咖啡')
}
Coffer.prototype.pourCup = function () {
	console.log('把咖啡倒进杯子')
}
Coffer.prototype.addSugarAndMilk = function () {
	console.log('加糖和牛奶')
}
Coffer.prototype.init = function () {
	this.boilWater();
	this.brewCoffer();
	this.pourCup();
	this.addSugarAndMilk();
}
var coffer = new Coffer();
coffer.init();

/*
	泡茶：
	1. 把水煮沸
	2. 用沸水浸泡茶叶
	3. 将茶水倒进杯子
	4. 加柠檬
 */
var Tea = function () {

}
Tea.prototype.boilWater = function () {
	console.log('将水煮沸');
}
Tea.prototype.steepTea = function () {
	console.log('用沸水浸泡茶叶');
}
Tea.prototype.pourCup = function () {
	console.log('将茶水倒进杯子')
}
Tea.prototype.addLemon = function () {
	console.log('加柠檬')
}
Tea.prototype.init = function () {
	this.boilWater();
	this.steepTea();
	this.pourCup();
	this.addLemon();
}
var tea = new Tea();
tea.init();