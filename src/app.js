
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var sp1 = new cc.Sprite(res.Page_png);
        // position the label on the center of the screen
        sp1.x = size.width / 2;
        sp1.y = size.height / 2;
        // add the label as a child to this layer
        this.addChild(sp1);

        sp1.setAnchorPoint(1,1);
        sp1.runAction(cc.repeatForever(cc.rotateBy(5,30)));

        cc.log("调试输出部分")

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

