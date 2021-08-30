(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099CC").ss(1,1,1).p("AAACpIAAlR");
	this.shape.setTransform(0,16.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-1,-1,2,35.8), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099CC").ss(1,1,1).p("Ai7AAIF3AA");
	this.shape.setTransform(18.75,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1,-1,39.5,2), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099CC").ss(1,1,1).p("AAAioIAAFR");
	this.shape.setTransform(0,16.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1,-1,2,35.8), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099CC").ss(1,1,1).p("Ai7ioIF3AAIAAFRIl3AAg");
	this.shape.setTransform(18.75,16.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,39.5,35.8), null);


// stage content:
(lib.canvas1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_11
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099CC").ss(1,1,1).p("Ar6AAIX1AA");
	this.shape.setTransform(80,82);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	// Layer_12
	this.instance = new lib.Symbol1();
	this.instance.setTransform(33.3,65.15,1,1,0,0,0,18.8,16.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36).to({_off:false},0).wait(1).to({y:62.3},0).wait(1).to({y:59.45},0).wait(1).to({y:56.6},0).wait(1).to({y:53.75},0).wait(1).to({y:50.9},0).wait(1).to({y:48.05},0).wait(1).to({y:45.2},0).wait(1).to({y:42.35},0).wait(1).to({y:39.5},0).wait(1).to({y:36.65},0).wait(1).to({y:33.8},0).wait(1).to({y:30.95},0).wait(1).to({y:28.15},0).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(61.75,82,1,1,0,0,0,22.5,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).wait(6).to({x:56.75,y:75.2},0).wait(1).to({x:51.85,y:68.5},0).wait(1).to({x:46.85,y:61.7},0).wait(1).to({x:41.9,y:54.95},0).wait(1).to({x:37,y:48.25},0).to({_off:true},1).wait(14));

	// Layer_9
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(51.95,82,1,1,90,0,0,0,33.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).wait(8).to({regX:0.1,rotation:59.9996,x:52,y:82.15},0).wait(1).to({rotation:29.9996,x:52.1,y:82.05},0).wait(1).to({regX:0,rotation:0,x:52},0).to({_off:true},1).wait(14));

	// Layer_10
	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(4.2,82,1,1,90,0,0,0,33.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).wait(4).to({regX:0.1,regY:33.7,rotation:77.1428,x:5.75,y:82.1},0).wait(1).to({regY:33.8,rotation:64.2854,x:7.15},0).wait(1).to({rotation:51.4285,x:8.6},0).wait(1).to({regX:0,rotation:38.5715,x:10.1,y:82.05},0).wait(1).to({rotation:25.7146,x:11.55},0).wait(1).to({regX:0.1,rotation:12.8572,x:13.1},0).wait(1).to({regX:0,rotation:0,x:14.5},0).to({_off:true},1).wait(14));

	// Layer_5
	this.instance_4 = new lib.Symbol3();
	this.instance_4.setTransform(37,48.25,1,1,0,0,0,22.5,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).wait(1).to({regX:18.8,x:38.25,y:55},0).wait(1).to({x:43.2,y:61.75},0).wait(1).to({x:48.15,y:68.5},0).wait(1).to({x:53.1,y:75.25},0).wait(1).to({x:58.05,y:82},0).wait(5).to({_off:true},1).wait(25));

	// Layer_4
	this.instance_5 = new lib.Symbol2();
	this.instance_5.setTransform(52,82.05,1,1,0,0,0,0,33.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).wait(1).to({regY:16.9,rotation:30,x:60.4,y:67.4},0).wait(1).to({rotation:60,x:66.55,y:73.55},0).wait(1).to({rotation:90,x:68.85,y:82},0).wait(7).to({_off:true},1).wait(25));

	// Layer_6
	this.instance_6 = new lib.Symbol4();
	this.instance_6.setTransform(14.5,82.05,1,1,0,0,0,0,33.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).wait(1).to({regY:16.9,rotation:12.8571,x:16.75,y:65.55},0).wait(1).to({rotation:25.7143,x:18.85,y:66.8},0).wait(1).to({rotation:38.5714,x:20.55,y:68.8},0).wait(1).to({rotation:51.4286,x:21.8,y:71.5},0).wait(1).to({rotation:64.2857,x:22.3,y:74.7},0).wait(1).to({rotation:77.1429,x:22.1,y:78.2},0).wait(1).to({rotation:90,x:21.1,y:82},0).wait(3).to({_off:true},1).wait(25));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AC8AAIl3AA");
	this.shape_1.setTransform(33.25,82);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(14).to({_off:false},0).to({_off:true},22).wait(14));

	// Layer_1
	this.instance_7 = new lib.Symbol1();
	this.instance_7.setTransform(33.3,28.15,1,1,0,0,0,18.8,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({y:30.95},0).wait(1).to({y:33.8},0).wait(1).to({y:36.65},0).wait(1).to({y:39.5},0).wait(1).to({y:42.35},0).wait(1).to({y:45.2},0).wait(1).to({y:48.05},0).wait(1).to({y:50.9},0).wait(1).to({y:53.75},0).wait(1).to({y:56.6},0).wait(1).to({y:59.45},0).wait(1).to({y:62.3},0).wait(1).to({y:65.15},0).to({_off:true},1).wait(36));

	// Layer_7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-2.6,0,0,0.1,0,25.3).s().p("Ai7CpIAAlRIF3AAIAAFRg");
	this.shape_2.setTransform(33.25,28.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-2.5,0,0,0.1,0,25.3).s().p("Ai7CpIAAlRIF3AAIAAFRg");
	this.shape_3.setTransform(33.25,36.675);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-2.4,0,0,0.1,0,25.3).s().p("Ai7CpIAAlRIF3AAIAAFRg");
	this.shape_4.setTransform(33.25,48.025);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-2.3,0,0,0.1,0,25.3).s().p("Ai7CpIAAlRIF3AAIAAFRg");
	this.shape_5.setTransform(33.25,59.425);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-3.2,0,0,-0.7,0,26.6).s().p("AitCXIgakaQCeglC2AkIA7Ebg");
	this.shape_6.setTransform(38.8,66.9373);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-4.1,0,0,-1.4,0,27.9).s().p("AifCEIg1jiQCBhKCzBIIB0Dkg");
	this.shape_7.setTransform(44.3,68.7557);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-4.9,-1.5,0,-2.2,-1.5,29.2).s().p("AiRBjIhPirQBqgzCoAwICvCug");
	this.shape_8.setTransform(49.825,72.0614);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-5.9,-2.9,0,-3,-2.9,30.4).s().p("AiEBCIhph0QBUgdCdAYIDqB5g");
	this.shape_9.setTransform(55.35,75.3566);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-6.7,-4.4,0,-3.7,-4.4,31.8).s().p("Ah2AiIiDg9QA+gGCTAAIEiBDg");
	this.shape_10.setTransform(60.875,78.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-5.4,-2.9,0,-2.2,-2.9,33).s().p("Ah/AfIibgpQAqgdC+AOIAPADIE+A0IgBABg");
	this.shape_11.setTransform(64.1,78.9471);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-4.3,-1.4,0,-1,-1.4,34.3).s().p("AiKAbIizgUQAWgzDnAcIARADIFuAog");
	this.shape_12.setTransform(67.65,79.285);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-3.3,0,0,0.1,0,35.6).s().p("AliAYQADhMEkAvIGeAdg");
	this.shape_13.setTransform(71.25,79.6015);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-3.8,-0.2,0,0.1,-0.2,39.4).s().p("AmGAVQCgg9DgAeQDrAAChAfg");
	this.shape_14.setTransform(67.7,79.9109);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-4.1,-0.4,0,0.1,-0.4,43.1).s().p("AmpATQE9guCbANQEIgPBzAwg");
	this.shape_15.setTransform(64.175,80.1242);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-4.7,0,0,0.1,0,46.9).s().p("AnMAXQHZgfBXgEQElgeBEBBg");
	this.shape_16.setTransform(60.625,79.7304);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-4.2,-0.3,0,0.1,-0.3,44.1).s().p("AmyAUQFlgqCJAIQEQgSBnA0g");
	this.shape_17.setTransform(63.275,80.0357);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-4,-0.3,0,0.1,-0.3,41.3).s().p("AmXAUQDvg2C8AWQD6gICKAog");
	this.shape_18.setTransform(65.95,80.0459);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-3.6,-0.1,0,0.1,-0.1,38.4).s().p("Al9AWQB5hBDxAiQDkAECsAbg");
	this.shape_19.setTransform(68.6,79.8328);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-5.2,-2.9,0,-2.2,-2.9,33).s().p("Ah/AfIibgpQAqgdC+AOIAPADIE+A0IgBABg");
	this.shape_20.setTransform(64.1,78.9471);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-6.6,-4.4,0,-3.7,-4.4,31.8).s().p("Ah2AiIiDg9QA+gGCTAAIEiBDg");
	this.shape_21.setTransform(60.875,78.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-5.7,-2.9,0,-3,-2.9,30.4).s().p("AiEBCIhph0QBUgdCdAYIDqB5g");
	this.shape_22.setTransform(55.35,75.3566);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-4.8,-1.5,0,-2.2,-1.5,29.2).s().p("AiRBjIhPirQBqgzCoAwICvCug");
	this.shape_23.setTransform(49.825,72.0614);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-4,0,0,-1.4,0,27.9).s().p("AifCEIg1jiQCBhKCzBIIB0Dkg");
	this.shape_24.setTransform(44.3,68.7557);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-3.1,0,0,-0.7,0,26.6).s().p("AitCXIgakaQCeglC2AkIA7Ebg");
	this.shape_25.setTransform(38.8,66.9373);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-2.4,0,0,0.1,0,25.9).s().p("Ai7CpIAAlRIF3AAIAAFRg");
	this.shape_26.setTransform(33.25,62.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-2.4,0,0,0.1,0,26.5).s().p("Ai7CpIAAlRIF3AAIAAFRg");
	this.shape_27.setTransform(33.25,59.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-2.5,0,0,0.1,0,27.1).s().p("Ai7CpIAAlRIF3AAIAAFRg");
	this.shape_28.setTransform(33.25,56.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-2.6,0,0,0.1,0,27.7).s().p("Ai7CpIAAlRIF3AAIAAFRg");
	this.shape_29.setTransform(33.25,53.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-2.6,0,0,0.1,0,28.3).s().p("Ai7CpIAAlRIF3AAIAAFRg");
	this.shape_30.setTransform(33.25,50.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-2.7,0,0,0.1,0,28.9).s().p("Ai7CpIAAlRIF3AAIAAFRg");
	this.shape_31.setTransform(33.25,48.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-2.7,0,0,0.1,0,29.5).s().p("Ai7CpIAAlRIF3AAIAAFRg");
	this.shape_32.setTransform(33.25,45.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-2.8,0,0,0.1,0,30.1).s().p("Ai7CpIAAlRIF3AAIAAFRg");
	this.shape_33.setTransform(33.25,42.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-2.8,0,0,0.1,0,30.7).s().p("Ai7CpIAAlRIF3AAIAAFRg");
	this.shape_34.setTransform(33.25,39.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-2.9,0,0,0.1,0,31.4).s().p("Ai7CpIAAlRIF3AAIAAFRg");
	this.shape_35.setTransform(33.25,36.675);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-3,0,0,0.1,0,32).s().p("Ai7CpIAAlRIF3AAIAAFRg");
	this.shape_36.setTransform(33.25,33.825);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-3,0,0,0.1,0,32.6).s().p("Ai7CpIAAlRIF3AAIAAFRg");
	this.shape_37.setTransform(33.25,30.975);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0,1],-3.1,0,0,0.1,0,33.2).s().p("Ai7CpIAAlRIF3AAIAAFRg");
	this.shape_38.setTransform(33.25,28.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{y:28.125}}]}).to({state:[{t:this.shape_2,p:{y:30.975}}]},1).to({state:[{t:this.shape_2,p:{y:33.825}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(3).to({_off:false},0).wait(1).to({y:39.525},0).wait(1).to({y:42.375},0).wait(1).to({y:45.225},0).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(7).to({_off:false},0).wait(1).to({y:50.875},0).wait(1).to({y:53.725},0).wait(1).to({y:56.575},0).to({_off:true},1).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(11).to({_off:false},0).wait(1).to({y:62.275},0).wait(1).to({y:65.125},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(13));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(82.8,55.8,74.50000000000001,27.299999999999997);
// library properties:
lib.properties = {
	id: 'CD2E8A702005A74FB825DA2E6E9AE12E',
	width: 160,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CD2E8A702005A74FB825DA2E6E9AE12E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;