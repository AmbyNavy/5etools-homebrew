const _0x2032c7=_0x4b04;(function(_0x13bba7,_0x41c30a){const _0x524d90=_0x4b04,_0x36a6f0=_0x13bba7();while(!![]){try{const _0x1521ac=parseInt(_0x524d90(0x90))/0x1+-parseInt(_0x524d90(0xa6))/0x2+parseInt(_0x524d90(0x9c))/0x3*(parseInt(_0x524d90(0x95))/0x4)+parseInt(_0x524d90(0x9f))/0x5+-parseInt(_0x524d90(0x94))/0x6*(-parseInt(_0x524d90(0x9e))/0x7)+parseInt(_0x524d90(0x99))/0x8+-parseInt(_0x524d90(0xaa))/0x9;if(_0x1521ac===_0x41c30a)break;else _0x36a6f0['push'](_0x36a6f0['shift']());}catch(_0x5e7723){_0x36a6f0['push'](_0x36a6f0['shift']());}}}(_0x7006,0x25b65));import{UtilGameSettings}from'./UtilGameSettings.js';function _0x7006(){const _0x378958=['pGetWorld','4436271BycLhA','pSetWorld','178272XZqpnf','pGetClient','settings','plutonium_world','328218PQpuwr','4NdsZEB','plutonium','world','client','1053912GVyqBx','_registerWorld','pSetClient','645837aqWDEy','register','7JritGC','660070YVKweG','_STORE_KEY_CLIENT','getSafe','_register','plutonium_client','SETTINGS_KEY','set','129238FRQHXu','_registerClient','_STORE_KEY_WORLD'];_0x7006=function(){return _0x378958;};return _0x7006();}function _0x4b04(_0x3da003,_0x50d74f){const _0x700625=_0x7006();return _0x4b04=function(_0x4b04ef,_0x4c30ae){_0x4b04ef=_0x4b04ef-0x90;let _0x14b6af=_0x700625[_0x4b04ef];return _0x14b6af;},_0x4b04(_0x3da003,_0x50d74f);}class GameStorage{static['_registerClient'](_0x15658e){const _0x17703e=_0x4b04;return this[_0x17703e(0xa2)](_0x15658e,{'type':_0x17703e(0x98)});}static[_0x2032c7(0x9a)](_0x47132f){const _0xb76b66=_0x2032c7;return this[_0xb76b66(0xa2)](_0x47132f,{'type':'world'});}static[_0x2032c7(0xa2)](_0x5577a9,{type:type=_0x2032c7(0x98)}={}){const _0x1b0f52=_0x2032c7,_0x5a793a=type===_0x1b0f52(0x97)?GameStorage[_0x1b0f52(0xa8)]:GameStorage[_0x1b0f52(0xa0)];return _0x5577a9=_0x5a793a+'_'+_0x5577a9,game[_0x1b0f52(0x92)][_0x1b0f52(0x9d)](GameStorage[_0x1b0f52(0xa4)],_0x5577a9,{'name':_0x5577a9,'hint':_0x5577a9,'scope':type,'config':![],'default':{},'type':Object}),_0x5577a9;}static async[_0x2032c7(0x91)](_0x3f4288){const _0x1eb49e=_0x2032c7,_0x5cbeaa=this['_registerClient'](_0x3f4288);return(UtilGameSettings[_0x1eb49e(0xa1)](GameStorage[_0x1eb49e(0xa4)],_0x5cbeaa)||{})['_'];}static async[_0x2032c7(0x9b)](_0x4ee068,_0x4bc30c){const _0x1f6a1b=_0x2032c7,_0x58b2f2=this[_0x1f6a1b(0xa7)](_0x4ee068);await game[_0x1f6a1b(0x92)][_0x1f6a1b(0xa5)](GameStorage['SETTINGS_KEY'],_0x58b2f2,{'_':_0x4bc30c});}static async[_0x2032c7(0xa9)](_0x395718){const _0x167d8e=_0x2032c7,_0x43cc48=this[_0x167d8e(0x9a)](_0x395718);return(UtilGameSettings[_0x167d8e(0xa1)](GameStorage['SETTINGS_KEY'],_0x43cc48)||{})['_'];}static async[_0x2032c7(0xab)](_0x4acda9,_0x296ba9){const _0x35c3f7=_0x2032c7,_0x55c8ee=this[_0x35c3f7(0x9a)](_0x4acda9);await game[_0x35c3f7(0x92)]['set'](GameStorage[_0x35c3f7(0xa4)],_0x55c8ee,{'_':_0x296ba9});}}GameStorage[_0x2032c7(0xa4)]=_0x2032c7(0x96),GameStorage['_STORE_KEY_CLIENT']=_0x2032c7(0xa3),GameStorage['_STORE_KEY_WORLD']=_0x2032c7(0x93);export{GameStorage};