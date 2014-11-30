var MMTouchLayer = cc.Layer.extend({
	
	ctor : function(){
		this._super();
		this.initMenu();
	},
	initMenu : function() {
		var newGameNormal = new cc.Sprite(res.mm_menu_png, cc.rect(0, 500, 200, 100));
		var newGameSelected = new cc.Sprite(res.mm_menu_png, cc.rect(200, 500, 200, 100));
		var newGameDisabled = new cc.Sprite(res.mm_menu_png, cc.rect(400, 500, 200, 100));

		var equipSettingsNormal = new cc.Sprite(res.mm_menu_png, cc.rect(0, 600, 200, 100));
		var equipSettingsSelected = new cc.Sprite(res.mm_menu_png, cc.rect(200, 600, 200, 100));
		var equipSettingsDisabled = new cc.Sprite(res.mm_menu_png, cc.rect(400, 600, 200, 100));
	
		var aboutNormal = new cc.Sprite(res.mm_menu_png, cc.rect(0, 700, 200, 100));
		var aboutSelected = new cc.Sprite(res.mm_menu_png, cc.rect(200, 700, 200, 100));
		var aboutDisabled = new cc.Sprite(res.mm_menu_png, cc.rect(400, 700, 200, 100));


	
	var newGame = new cc.MenuItemSprite(
			newGameNormal,
			newGameSelected,
			newGameDisabled,
			this.onNewGame,
			this
	);
	var equipSettings = new cc.MenuItemSprite(
			equipSettingsNormal,
			equipSettingsSelected,
			equipSettingsDisabled,
			function(){
			}.bind(this)
	);

	var about = new cc.MenuItemSprite(
			aboutNormal,
			aboutSelected,
			aboutDisabled,
			function(){
			}.bind(this)
	);
	var menu = new cc.Menu(newGame,equipSettings,about);
	menu.alignItemsVerticallyWithPadding(0);
	menu.x= 320;
	menu.y= 260;
	this.addChild(menu);
	},
    onNewGame : function(){
        cc.director.runScene(new cc.TransitionFade(1.2, new GameBoardScene()));
    },
})