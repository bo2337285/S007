/**
 * Created by lingjianfeng on 14-8-31.
 */

var MMBackgroundLayer = cc.Layer.extend({

    _sptBg     : null,
    _sptLogo   : null,
    
    ctor : function(){

        this._super()

        this.initBackground();

    },

    initBackground : function(){
    	
    	this._sptBg = new cc.Sprite(res.mm_menu_png, cc.rect(0, 0, 640, 500));
    	
    	this._sptLogo = new cc.Sprite(res.mm_background_jpg);
    	
        this._sptBg.attr({
            anchorX : 1,
            anchorY : 1,
            x: 640,
            y: 960
        });
        
        this._sptLogo.attr({
        	anchorX : 1,
        	anchorY : 1,
        	x: 640,
        	y: 960
        });
        this.addChild(this._sptLogo);
        this.addChild(this._sptBg);
        
    }
});