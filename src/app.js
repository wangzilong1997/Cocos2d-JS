
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        this.addChild(new cc.LayerColor(cc.color.WHITE));

        var musicOnItem = new cc.MenuItemImage(res.MusicOnNormal_png,res.MusicOnSelected_png,function(){

        },this);
        var musicOffItem = new cc.MenuItemImage(res.MusicOffNormal_png,res.MusicOffSelected_png,function(){
            ``
        },this);
        var ls = cc.sys.localStorage;
        var toggleItem = new cc.MenuItemToggle(musicOnItem,musicOffItem,function () {
            if (0 == toggleItem.getSelectedIndex()){
                ls.setItem("isOn",0);
            }else {
                ls.setItem("isOn",1);
            }
        },this);

        if(null == ls.getItem("isOn")){

        }else if(0 == ls.getItem("isOn")){
            toggleItem.setSelectedIndex(0);
        }else if(1 == ls.getItem("isOn")){
            toggleItem.setSelectedIndex(1);
        }

        var menu = new cc.Menu(toggleItem);
        this.addChild(menu);
        return true;

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

