var g_GameBoardLayer;

var GameBoardLayer=cc.Layer.extend({
	
	_backgroundLayer : null,
	_touchLayer : null,
	ctor : function(){
		this._super();
		
		g_GameBoardLayer= this;
		
		this.addCache();
		
		this.addBackgroundLayer();
		
		this.addTouchLayer();
	},
	
	addCache : function(){},
	
	addBackgroundLayer : function(){
		this._backgroundLayer= new GBBackgroundLayer();
		
		this.addChild(this._backgroundLayer);
	},
	addTouchLayer : function(){
		this._touchLayer = new GBTouchLayer();
		
		this.addChild(this._touchLayer);
	}
});

var GameBoardScene = cc.Scene.extend({
	onEnter:function(){
		this._super();
		
		var layer = new GameBoardLayer();
		this.addChild(layer);
	}
});

