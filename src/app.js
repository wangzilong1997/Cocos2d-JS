
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    redSprite:null,
    speed:0,
    num:0,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        this.addChild(new cc.LayerColor(cc.color.WHITE));
        this.redSprite = new cc.Sprite(res.Red_png);
        this.redSprite.x = size.width/2;
        this.redSprite.y = 400;
        this.addChild(this.redSprite);
        this.redSprite.setLocalZOrder(3);
        //估计这块控制时间表
        this.schedule(this.myCallBack,0.02,cc.REPEAT_FOREVER,0);
        return true;
    },
    update:function (dt) {
        cc.log("Timer"+dt)
        this.num++
        if (this.num > 1000){
            this.unscheduleAllCallbacks()
        }
    },
    myCallBack:function () {
        cc.log(this.redSprite.y)
        this.redSprite.y -= this.speed;
        if(this.redSprite.y < 0){
            this.speed = -12.6
        }else{
            this.speed += 0.2;
        }
    }
       
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

