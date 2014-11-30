var g_GBTouchLayer;

var GBTouchLayer = cc.Layer.extend({
	
	map:null,
	writePath:null,
	
	item : null,
	char : null,
	
	// 构造函数
	ctor : function(){
		this._super();
		
		g_GBTouchLayer=this;
		
		cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: true,
			onTouchBegan: this.onTouchBegan,
			onTouchMoved: this.onTouchMoved,
			onTouchEnded: this.onTouchEnded,
		}, 99);
		
		writePath=jsb.fileUtils.getWritablePath();
		
		g_GBMessageLayer = new GBMessageLayer();
		
		this.loadLevel();
		
		this.loadMessage();
	},
	
	// 按下事件
	onTouchBegan : function (touch, event) {
		var delta = touch.getDelta(); 
		return true;
	},
	
	// 拖动事件
	onTouchMoved : function (touch, event) {

	},
	
	// 抬起事件
	onTouchEnded : function (touch, event) {
		var delta = touch.getDelta(); 
	},
	
	// 读取关卡
	loadLevel : function (){
		var message=jsb.fileUtils.getStringFromFile("src/data/message.json");
		g_GBMessageLayer._messageList= JSON.parse(message);
	},
	
	// 读取信息
	loadMessage : function (){
		if(g_GBMessageLayer._messageList.length!=0){
			g_GameBoardLayer.addChild(g_GBMessageLayer);
			g_GBMessageLayer.nextMessage();
		}
	},
	
	// 存储信息
	saveMessage : function (){
		log(jsb.fileUtils.writeToFile(map,writePath+"test.json"));
		map = jsb.fileUtils.getValueMapFromFile("test.json");
	},
	
	// 显示信息
	showOneMessage : function (){
		
	}
	
});