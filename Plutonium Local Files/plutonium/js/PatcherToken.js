const _0x104130=_0x2251;(function(_0x4bfd54,_0x25dfbb){const _0x587e46=_0x2251,_0x508cc9=_0x4bfd54();while(!![]){try{const _0x340dbe=parseInt(_0x587e46(0xa8))/0x1+parseInt(_0x587e46(0xd9))/0x2+-parseInt(_0x587e46(0xe3))/0x3+parseInt(_0x587e46(0xd4))/0x4*(-parseInt(_0x587e46(0xcc))/0x5)+-parseInt(_0x587e46(0xce))/0x6*(-parseInt(_0x587e46(0xe8))/0x7)+parseInt(_0x587e46(0xa7))/0x8+-parseInt(_0x587e46(0xc7))/0x9;if(_0x340dbe===_0x25dfbb)break;else _0x508cc9['push'](_0x508cc9['shift']());}catch(_0x4863ec){_0x508cc9['push'](_0x508cc9['shift']());}}}(_0x9e8b,0x2e424));import{libWrapper,UtilLibWrapper}from'./PatcherLibWrapper.js';import{SharedConsts}from'../shared/SharedConsts.js';function _0x2251(_0x4a11bc,_0x468444){const _0x9e8b27=_0x9e8b();return _0x2251=function(_0x225180,_0x29733e){_0x225180=_0x225180-0xa3;let _0x2445ce=_0x9e8b27[_0x225180];return _0x2445ce;},_0x2251(_0x4a11bc,_0x468444);}function _0x9e8b(){const _0x49766f=['fontSize','fill','anchor','tokens','position','671392vhAqwS','153161LkZcPK','isAllowNameplateFontWrap','_handleConfigUpdate_displayDamageDealt','max','_handleConfigUpdate_displayDamageDealt_doAddDisplay','set','style','actor','_handleConfigUpdate_doDraw','wordWrapWidth','refresh','attributes','Token.prototype.refresh','parent','removeChild','_doRemove','isMonksLittleDetailsActive','text','MonksLittleDetails','TokenDocument.prototype._onUpdateTokenActor','show-bloodsplat','_pDoTokenFakeDraw','handleFailedInitConfigApplication','nameplateFontWrapWidthMultiplier','_isForceDisabled','_handleConfigUpdate_displayDamageDealt_doRefreshTokens','_drawHUD','Token.prototype._onUpdate','C_USE_GAME_DEFAULT','placeables','nameplateFontSizeMultiplier','1168371KXqqWI','_handleConfigUpdate_displayDamageDealt_','init','get','MODULE_MONKS_LITTLE_DETAILS','395HIdvWn','_handleConfigUpdate_isDoDraw','1187832IGMFPc','damageDealtBloodiedThreshold','handleConfigUpdate','clone','register','wordWrap','1388hSzXVG','_handleConfigUpdate_displayDamageDealt_doUpdateDisplay','LIBWRAPPER_MODE_WRAPPER','some','warn','400996VxLhRF','MODULE_NAME','getSafe','isDisplayDamageDealt','visible','data','floor','min','drawEffects','value','866541EmfzTd','_plutonium_xDispDamageDealt','canvasTextStyle','Failed\x20to\x20update\x20\x22damage\x20dealt\x22\x20display\x20for\x20token\x20\x22','Failed\x20to\x20refresh\x20token\x20\x22','7KBZqgY'];_0x9e8b=function(){return _0x49766f;};return _0x9e8b();}import{Config}from'./Config.js';import{LGT}from'./Util.js';import{ConfigConsts}from'./ConfigConsts.js';import{UtilCompat}from'./UtilCompat.js';import{UtilGameSettings}from'./UtilGameSettings.js';class Patcher_Token{static[_0x104130(0xc9)](){const _0x1dcb25=_0x104130;libWrapper[_0x1dcb25(0xd2)](SharedConsts[_0x1dcb25(0xda)],_0x1dcb25(0xb4),function(_0x4f9ffb,..._0x3c3fea){const _0x338726=_0x1dcb25;if(Config[_0x338726(0xca)](_0x338726(0xa5),_0x338726(0xdc)))Patcher_Token[_0x338726(0xd5)](this);return _0x4f9ffb(..._0x3c3fea);},UtilLibWrapper[_0x1dcb25(0xd6)]),libWrapper[_0x1dcb25(0xd2)](SharedConsts['MODULE_NAME'],_0x1dcb25(0xc3),function(_0x15bc19,..._0x53cac5){const _0x58ed9b=_0x1dcb25;if(Config[_0x58ed9b(0xca)](_0x58ed9b(0xa5),_0x58ed9b(0xdc)))Patcher_Token[_0x58ed9b(0xd5)](this);return _0x15bc19(..._0x53cac5);},UtilLibWrapper['LIBWRAPPER_MODE_WRAPPER']),libWrapper['register'](SharedConsts[_0x1dcb25(0xda)],_0x1dcb25(0xbb),function(_0x262725,..._0x5a58d4){const _0x5306fd=_0x1dcb25;if(Config[_0x5306fd(0xca)]('tokens','isDisplayDamageDealt'))Patcher_Token[_0x5306fd(0xd5)](this['object']);return _0x262725(..._0x5a58d4);},UtilLibWrapper[_0x1dcb25(0xd6)]),libWrapper['register'](SharedConsts[_0x1dcb25(0xda)],'TokenDocument.prototype._onUpdateBaseActor',function(_0x1e27be,..._0x5a9f8c){const _0x129c21=_0x1dcb25;if(Config[_0x129c21(0xca)](_0x129c21(0xa5),'isDisplayDamageDealt'))Patcher_Token['_handleConfigUpdate_displayDamageDealt_doUpdateDisplay'](this['object']);return _0x1e27be(..._0x5a9f8c);},UtilLibWrapper[_0x1dcb25(0xd6)]),libWrapper[_0x1dcb25(0xd2)](SharedConsts[_0x1dcb25(0xda)],'Token.prototype._getTextStyle',function(_0x476d6b,..._0x1e6e0e){const _0x234fe6=_0x1dcb25,_0x4e5053=_0x476d6b(..._0x1e6e0e),_0x4d9440=Config[_0x234fe6(0xca)](_0x234fe6(0xa5),'nameplateFontSizeMultiplier');if(_0x4d9440!=null){if(_0x4e5053[_0x234fe6(0xe9)]!=null)_0x4e5053['fontSize']*=_0x4d9440;}const _0x2994d3=Config[_0x234fe6(0xca)]('tokens',_0x234fe6(0xa9));_0x2994d3!==ConfigConsts[_0x234fe6(0xc4)]&&(_0x4e5053[_0x234fe6(0xd3)]=!!_0x2994d3);const _0x52592f=Config[_0x234fe6(0xca)](_0x234fe6(0xa5),_0x234fe6(0xbf));if(_0x52592f!=null){if(_0x4e5053[_0x234fe6(0xb1)]!=null)_0x4e5053['wordWrapWidth']*=_0x52592f;}return _0x4e5053;},UtilLibWrapper[_0x1dcb25(0xd6)]);}static[_0x104130(0xd0)]({isInit:isInit=![],current:_0x544da2,previous:_0x59bd8c}={}){const _0x37109b=_0x104130,_0x430aa8=MiscUtil[_0x37109b(0xca)](canvas,_0x37109b(0xa5),_0x37109b(0xc5))||[];this[_0x37109b(0xaa)]({'isInit':isInit,'tokens':_0x430aa8});if(!this[_0x37109b(0xcd)]({'isInit':isInit,'current':_0x544da2,'previous':_0x59bd8c}))return;this[_0x37109b(0xb0)]({'tokens':_0x430aa8});}static[_0x104130(0xc0)](_0x2e41a0){const _0xc548af=_0x104130;if(UtilCompat[_0xc548af(0xb8)]()&&UtilGameSettings[_0xc548af(0xdb)](UtilCompat[_0xc548af(0xcb)],_0xc548af(0xbc))&&UtilCompat[_0xc548af(0xba)]['isDefeated'](_0x2e41a0))return!![];return![];}static[_0x104130(0xcd)]({isInit:_0x543d38,current:_0x15271e,previous:_0x8f9d42}){const _0x1981be=_0x104130;if(_0x543d38)return!![];if(!_0x15271e||!_0x8f9d42)return![];const _0x1a67c6=[_0x1981be(0xdc),_0x1981be(0xcf),_0x1981be(0xc6),_0x1981be(0xa9),_0x1981be(0xbf)];return _0x1a67c6[_0x1981be(0xd7)](_0x4ebfde=>MiscUtil[_0x1981be(0xca)](_0x15271e,_0x1981be(0xa5),_0x4ebfde)!==MiscUtil[_0x1981be(0xca)](_0x8f9d42,_0x1981be(0xa5),_0x4ebfde));}static[_0x104130(0xb0)]({tokens:_0x29a91f}){const _0x76d5ca=_0x104130;for(const _0x298a2d of _0x29a91f){try{const _0x1b6ee4=_0x298a2d[_0x76d5ca(0xdd)];this[_0x76d5ca(0xbd)]({'token':_0x298a2d}),_0x298a2d[_0x76d5ca(0xdd)]=_0x1b6ee4;}catch(_0x33b9ef){console[_0x76d5ca(0xd8)](...LGT,_0x76d5ca(0xe7)+_0x298a2d['id']+'\x22!',_0x33b9ef);}}}static async[_0x104130(0xbd)]({token:_0x317875}){const _0x2f2dd1=_0x104130;_0x317875[_0x2f2dd1(0xc2)](),_0x317875[_0x2f2dd1(0xb2)](),await _0x317875[_0x2f2dd1(0xe1)](),_0x317875['drawBars']();}static['_handleConfigUpdate_displayDamageDealt']({isInit:isInit=![],tokens:_0x3bf26b}={}){const _0x459d1=_0x104130;try{return this[_0x459d1(0xc8)]({'tokens':_0x3bf26b});}catch(_0x4b158d){if(!isInit)throw _0x4b158d;Config[_0x459d1(0xbe)](_0x459d1(0xa5),_0x459d1(0xdc),_0x4b158d);}}static[_0x104130(0xc8)]({tokens:_0x42f4a0}){const _0x35a64e=_0x104130;this[_0x35a64e(0xc1)]({'tokens':_0x42f4a0,'isRemoveDisplays':!Config['get'](_0x35a64e(0xa5),'isDisplayDamageDealt')});}static[_0x104130(0xc1)]({tokens:_0x311b5f,isRemoveDisplays:_0x54492f}){const _0x2dc888=_0x104130;for(const _0x16e914 of _0x311b5f){try{if(_0x54492f)Patcher_Token[_0x2dc888(0xb7)](_0x16e914);}catch(_0x174dbb){}}}static[_0x104130(0xb7)](_0x33aefb){const _0x3a949c=_0x104130;if(!_0x33aefb[_0x3a949c(0xe4)])return;_0x33aefb[_0x3a949c(0xb6)](_0x33aefb[_0x3a949c(0xe4)]),_0x33aefb[_0x3a949c(0xe4)]=null;}static['_handleConfigUpdate_displayDamageDealt_doUpdateDisplay'](_0x5c3939){const _0x3defaf=_0x104130;try{if(this[_0x3defaf(0xc0)](_0x5c3939)){Patcher_Token[_0x3defaf(0xb7)](_0x5c3939);return;}this[_0x3defaf(0xac)](_0x5c3939);const _0x42f68e=MiscUtil[_0x3defaf(0xca)](_0x5c3939[_0x3defaf(0xaf)],_0x3defaf(0xde),_0x3defaf(0xde),_0x3defaf(0xb3),'hp',_0x3defaf(0xab))||0x0,_0x5c4983=MiscUtil['get'](_0x5c3939[_0x3defaf(0xaf)],_0x3defaf(0xde),_0x3defaf(0xde),'attributes','hp',_0x3defaf(0xe2))||0x0,_0x5885c0=Math[_0x3defaf(0xe0)](_0x42f68e,Math['max'](0x0,_0x42f68e-_0x5c4983));_0x5c3939[_0x3defaf(0xe4)][_0x3defaf(0xb9)]='-'+_0x5885c0,_0x5c3939['_plutonium_xDispDamageDealt']['visible']=!!_0x5885c0;if(_0x5c4983<=Math[_0x3defaf(0xdf)](_0x42f68e*Config['get'](_0x3defaf(0xa5),_0x3defaf(0xcf))))_0x5c3939[_0x3defaf(0xe4)][_0x3defaf(0xae)][_0x3defaf(0xa3)]=0xff0000;else _0x5c3939['_plutonium_xDispDamageDealt'][_0x3defaf(0xae)][_0x3defaf(0xa3)]=0xffffff;}catch(_0x2eb161){console[_0x3defaf(0xd8)](...LGT,_0x3defaf(0xe6)+_0x5c3939['id']+'\x22!',_0x2eb161);}}static['_handleConfigUpdate_displayDamageDealt_doAddDisplay'](_0x3bec79){const _0x9bc0d7=_0x104130;if(_0x3bec79[_0x9bc0d7(0xe4)]&&_0x3bec79[_0x9bc0d7(0xe4)][_0x9bc0d7(0xb5)])return;_0x3bec79['_plutonium_xDispDamageDealt']&&!_0x3bec79[_0x9bc0d7(0xe4)][_0x9bc0d7(0xb5)]&&(_0x3bec79[_0x9bc0d7(0xb6)](_0x3bec79[_0x9bc0d7(0xe4)]),_0x3bec79[_0x9bc0d7(0xe4)]=null),_0x3bec79[_0x9bc0d7(0xe4)]=new PreciseText('',CONFIG[_0x9bc0d7(0xe5)][_0x9bc0d7(0xd1)]()),_0x3bec79[_0x9bc0d7(0xe4)][_0x9bc0d7(0xae)][_0x9bc0d7(0xe9)]=0x18,_0x3bec79['_plutonium_xDispDamageDealt'][_0x9bc0d7(0xa4)][_0x9bc0d7(0xad)](0x1,0x1),_0x3bec79[_0x9bc0d7(0xe4)][_0x9bc0d7(0xa6)][_0x9bc0d7(0xad)](_0x3bec79['w']-0x3,_0x3bec79['h']-0x1),_0x3bec79['addChild'](_0x3bec79[_0x9bc0d7(0xe4)]);}}export{Patcher_Token};