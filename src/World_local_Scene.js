var World_Local_layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;

        //本地坐标系与世界坐标系
        this.addChild(new cc.LayerColor(cc.color.WHITE));
        for(var i=0;i<20;i++){
            var xLine = new cc.LayerColor(cc.color.RED,1,size.height);
            xLine.x = i * 100;
            this.addChild(xLine);

            var yLine = new cc.LayerColor(cc.color.RED,size.width,1);
            yLine.y = i*100;
            this.addChild(yLine);
        }
        //红色方块
        var redSprite = new cc.Sprite(res.Red_png);
        redSprite.x = 200;
        redSprite.y = 200;
        this.addChild(redSprite);

        //黄色方块
        var yellowSprite = new cc.Sprite(res.Yellow_png);
        yellowSprite.x = 100;
        yellowSprite.y = 100;

        redSprite.addChild(yellowSprite);
        cc.log('调试输出部分World—local—scene')
        return true;
    }
});

var World_Local_Scene = cc.Scene.extend({
   onEnter:function () {
       this._super();
       var layer = new World_Local_layer();
       this.addChild(layer)
   }
});