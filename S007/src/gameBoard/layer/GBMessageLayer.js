var g_GBMessageLayer;

var GBMessageLayer=cc.Layer.extend({
	
	_messageBoxUp : null,
	_messageBoxDown : null,
	_portraitUp : null,
	_portraitDown : null,
	_textBoxUp : null,
	_textBoxDown : null,
	_gMessageManager : null,
	
	_messageList : null,
	
	
	ctor : function(){
		this._super();
		g_GBMessageLayer=this;
		cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: true,
			onTouchBegan: this.onTouchBegan,
			onTouchMoved: this.onTouchMoved,
			onTouchEnded: this.onTouchEnded,
		}, 1);
	},
	
	onTouchBegan : function (touch, event) {
		var delta = touch.getDelta(); 
		return true;
	},

	// 拖动事件
	onTouchMoved : function (touch, event) {

	},
	
	// 抬起事件
	onTouchEnded : function (touch, event) {
		g_GBMessageLayer.nextMessage();
	},
	
	// 下一发消息
	nextMessage : function(){
		_gMessageManager= new MessageManager(this._messageList);
		temp = _gMessageManager.getMessage();
		this.removeAllChildren(true);
		if(temp!=null){
			if(temp.up==true){
				this._messageBoxUp = new cc.Sprite(res.UiModule_png,cc.rect(0, 0, 640, 200));
				this._messageBoxUp.attr({
					anchorX : 0.5,
					anchorY : 0.5,
					x: 320,
					y: 550
				});
				this.addChild(this._messageBoxUp,900);
				
				this._portraitUp = new cc.Sprite(temp.portrait,cc.rect(0, 0, 100, 100));
				this._portraitUp.attr({
					anchorX : 0.5,
					anchorY : 0.5,
					x: 150,
					y: 550
				});
				this.addChild(this._portraitUp,900);
				
				this._textBoxUp = new cc.LabelTTF(temp.text, "Arial", 20);
				this._textBoxUp.attr({
					x: 320,
					y: 550,
				color : cc.color(0, 0, 0)
			});
				this.addChild(this._textBoxUp, 1000);
			}
			else{
				this._messageBoxDown = new cc.Sprite(res.UiModule_png,cc.rect(0, 0, 640, 200));
				this._messageBoxDown.attr({
					anchorX : 0.5,
					anchorY : 0.5,
					x: 320,
					y: 260
				});
				this.addChild(this._messageBoxDown,900);
				
				this._portraitDown = new cc.Sprite(temp.portrait,cc.rect(0, 0, 100, 100));
				this._portraitDown.attr({
					anchorX : 0.5,
					anchorY : 0.5,
					x: 150,
					y: 260
				});
				this.addChild(this._portraitDown,900);
				
				this._textBoxDown = new cc.LabelTTF(temp.text, "Arial", 20);
				this._textBoxDown.attr({
					x: 320,
					y: 260,
					color : cc.color(0, 0, 0)
				});
				this.addChild(this._textBoxDown, 1000);
			}
		}
		else
			{
			this.removeFromParent(true);
			}
	},
	
})