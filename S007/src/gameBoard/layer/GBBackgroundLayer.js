var GBBackgroundLayer = cc.Layer.extend({
	_sptBg : null,
	ctor : function(){

		this._super();

		this.initBackground();

	},

	initBackground : function(){
		this._sptBg = new cc.Sprite(res.gb_background_jpg);
        this._sptBg.attr({
            anchorX : 1,
            anchorY : 1,
            x: 640,
            y: 960
        });
		this.addChild(this._sptBg);
	}
});