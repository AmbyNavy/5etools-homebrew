const _0xcf99b=_0x16bf;(function(_0x3471eb,_0x32b876){const _0x54c018=_0x16bf,_0x34a9e2=_0x3471eb();while(!![]){try{const _0x300104=parseInt(_0x54c018(0x263))/0x1+-parseInt(_0x54c018(0x241))/0x2*(-parseInt(_0x54c018(0x27f))/0x3)+-parseInt(_0x54c018(0x273))/0x4+-parseInt(_0x54c018(0x20b))/0x5+parseInt(_0x54c018(0x26e))/0x6+parseInt(_0x54c018(0x20d))/0x7+parseInt(_0x54c018(0x284))/0x8*(-parseInt(_0x54c018(0x289))/0x9);if(_0x300104===_0x32b876)break;else _0x34a9e2['push'](_0x34a9e2['shift']());}catch(_0xc44d1e){_0x34a9e2['push'](_0x34a9e2['shift']());}}}(_0x3372,0x20202));import{ModalFilterSpellsFvtt}from'./UtilModalFilter.js';import{UtilApplications}from'./UtilApplications.js';import{LGT}from'./Util.js';class Charactermancer_AdditionalSpellsUtil{static[_0xcf99b(0x1ff)](_0x139bb9){const _0x273b40=_0xcf99b;return _0x139bb9=MiscUtil['copy'](_0x139bb9),_0x139bb9[_0x273b40(0x230)](_0x2e6855=>{const _0x4879d7=_0x273b40,_0x2f4e25={},_0xa6e93e={},_0x27ecd3=[];return Object[_0x4879d7(0x25f)](_0x2e6855)['forEach'](([_0x3ad3f1,_0x2583c8])=>{const _0x5d8c7a=_0x4879d7;_0x27ecd3[_0x5d8c7a(0x1e5)](_0x3ad3f1);switch(_0x3ad3f1){case _0x5d8c7a(0x288):case _0x5d8c7a(0x233):_0x2f4e25[_0x3ad3f1]=_0x2583c8;break;case _0x5d8c7a(0x209):break;case _0x5d8c7a(0x1ea):case _0x5d8c7a(0x20f):case _0x5d8c7a(0x1df):case _0x5d8c7a(0x202):{this['_getFlatData_doProcessAdditionMeta']({'additionType':_0x3ad3f1,'additionMeta':_0x2583c8,'outSpells':_0xa6e93e,'keyPath':_0x27ecd3,'resourceName':_0x2e6855['resourceName']});break;}default:throw new Error(_0x5d8c7a(0x253)+_0x3ad3f1+'\x22');}_0x27ecd3[_0x5d8c7a(0x211)]();}),{'meta':_0x2f4e25,'spells':_0xa6e93e};});}static[_0xcf99b(0x1ee)](_0x3cf4d3){const _0xf06386=_0xcf99b,{additionMeta:_0x2dfab2,keyPath:_0xd3f87b}=_0x3cf4d3;Object['entries'](_0x2dfab2)[_0xf06386(0x1ec)](([_0x2e864d,_0x40c69c])=>{const _0x52ca51=_0xf06386;_0xd3f87b[_0x52ca51(0x1e5)](_0x2e864d),_0x40c69c instanceof Array?_0x40c69c[_0x52ca51(0x1ec)]((_0x4d755a,_0x4ccf0c)=>this['_getFlatData_doProcessSpellItem']({..._0x3cf4d3,'levelOrCasterLevel':_0x2e864d,'spellItem':_0x4d755a,'ix':_0x4ccf0c})):Object[_0x52ca51(0x25f)](_0x40c69c)[_0x52ca51(0x1ec)](([_0x3edcaf,_0x4abf8f])=>{const _0x2ae13a=_0x52ca51;this[_0x2ae13a(0x286)]({..._0x3cf4d3,'levelOrCasterLevel':_0x2e864d,'rechargeType':_0x3edcaf,'levelMetaInner':_0x4abf8f});}),_0xd3f87b[_0x52ca51(0x211)]();});}static['_getFlatData_doProcessSpellItem'](_0x4f0afe){const _0x2c0720=_0xcf99b,{additionType:_0x216cbb,additionMeta:_0x33be18,outSpells:_0x1fc63c,keyPath:_0x10c462,spellItem:_0x4fe55a,ix:_0xe10dca,rechargeType:_0x591713,uses:_0x3e2c0d,usesPer:_0x565e39,levelOrCasterLevel:_0x5c095b,consumeType:_0x5e2d2a,consumeAmount:_0x1a4102,consumeTarget:_0x1d27bf,vetConsumes:_0x1fd663}=_0x4f0afe;_0x10c462[_0x2c0720(0x1e5)](_0xe10dca);const _0x3af8fe={'isExpanded':_0x216cbb===_0x2c0720(0x202),'isAlwaysPrepared':_0x216cbb===_0x2c0720(0x1df),'isAlwaysKnown':_0x216cbb==='known','isPrepared':_0x216cbb==='prepared'||_0x216cbb===_0x2c0720(0x1ea)||_0x216cbb===_0x2c0720(0x20f),'preparationMode':_0x216cbb===_0x2c0720(0x1df)||_0x216cbb===_0x2c0720(0x20f)?'always':_0x2c0720(0x1ea),'consumeType':_0x5e2d2a,'consumeAmount':_0x1a4102,'consumeTarget':_0x1d27bf,'vetConsumes':_0x1fd663};if(_0x5c095b!=='_'){const _0x55dfca=/^s(\d+)$/[_0x2c0720(0x262)](_0x5c095b);if(_0x55dfca)_0x3af8fe[_0x2c0720(0x248)]=Number(_0x55dfca[0x1]);else{if(!isNaN(_0x5c095b))_0x3af8fe[_0x2c0720(0x232)]=Number(_0x5c095b);}}if(_0x591713)switch(_0x591713){case'rest':case _0x2c0720(0x1e3):break;case _0x2c0720(0x27d):case _0x2c0720(0x240):case _0x2c0720(0x226):{_0x3af8fe['preparationMode']=_0x2c0720(0x266),_0x3af8fe['isPrepared']=_0x591713!=='ritual';break;}case'_':break;default:throw new Error(_0x2c0720(0x259)+_0x591713+'\x22');}if(_0x3e2c0d)_0x3af8fe[_0x2c0720(0x20e)]=_0x3e2c0d;if(_0x565e39)_0x3af8fe[_0x2c0720(0x1e8)]=_0x565e39;if(typeof _0x4fe55a===_0x2c0720(0x260)){const _0x207fe4=_0x10c462[_0x2c0720(0x22c)]('__');_0x1fc63c[_0x207fe4]=new Charactermancer_AdditionalSpellsUtil[(_0x2c0720(0x22a))]({'type':'spell','key':_0x207fe4,..._0x3af8fe,'uid':_0x4fe55a});}else{if(_0x4fe55a[_0x2c0720(0x23e)]!=null){if(typeof _0x4fe55a[_0x2c0720(0x23e)]===_0x2c0720(0x260)){const _0x523ecd=_0x4fe55a[_0x2c0720(0x1eb)]||0x1;for(let _0x1ade5f=0x0;_0x1ade5f<_0x523ecd;++_0x1ade5f){_0x10c462[_0x2c0720(0x1e5)](_0x1ade5f);const _0x1eb31e=_0x10c462['join']('__');_0x1fc63c[_0x1eb31e]=new Charactermancer_AdditionalSpellsUtil[(_0x2c0720(0x22a))]({'type':_0x2c0720(0x23e),'key':_0x1eb31e,..._0x3af8fe,'filterExpression':_0x4fe55a[_0x2c0720(0x23e)]}),_0x10c462[_0x2c0720(0x211)]();}}else{if(_0x4fe55a[_0x2c0720(0x23e)][_0x2c0720(0x216)]){const _0x2dd7b4=_0x4fe55a[_0x2c0720(0x23e)]['count']||0x1,_0x3720b0=CryptUtil[_0x2c0720(0x1d6)]();[..._0x4fe55a[_0x2c0720(0x23e)][_0x2c0720(0x216)]][_0x2c0720(0x24a)]((_0x528dc3,_0x5a4480)=>SortUtil[_0x2c0720(0x249)](_0x528dc3,_0x5a4480))[_0x2c0720(0x1ec)]((_0x614e48,_0x21b1aa)=>{const _0x34f968=_0x2c0720;_0x10c462['push'](_0x21b1aa);const _0x5abb6c=_0x10c462[_0x34f968(0x22c)]('__');_0x1fc63c[_0x5abb6c]=new Charactermancer_AdditionalSpellsUtil['FlatSpell']({'type':_0x34f968(0x271),'key':_0x5abb6c,..._0x3af8fe,'uid':_0x614e48,'chooseFromGroup':_0x3720b0,'chooseFromCount':_0x2dd7b4}),_0x10c462[_0x34f968(0x211)]();});}else throw new Error(_0x2c0720(0x257)+JSON['stringify'](_0x4fe55a)+'\x22');}}else throw new Error('Unhandled\x20additional\x20spell\x20format:\x20\x22'+JSON[_0x2c0720(0x279)](_0x4fe55a)+'\x22');}_0x10c462[_0x2c0720(0x211)]();}static[_0xcf99b(0x286)](_0x37df80){const _0x41600f=_0xcf99b,{additionType:_0x559704,additionMeta:_0x47bafc,outSpells:_0x388149,keyPath:_0x3271ec,resourceName:_0x19cd21,levelOrCasterLevel:_0x33a168,rechargeType:_0x4cf127,levelMetaInner:_0x22930e}=_0x37df80;_0x3271ec[_0x41600f(0x1e5)](_0x4cf127);switch(_0x4cf127){case'rest':case _0x41600f(0x1e3):{const _0x1bc800=_0x4cf127===_0x41600f(0x20a)?'sr':'lr';Object['entries'](_0x22930e)[_0x41600f(0x1ec)](([_0x10bfd8,_0x59186c])=>{const _0x3dffa4=_0x41600f;_0x3271ec[_0x3dffa4(0x1e5)](_0x10bfd8),_0x10bfd8=_0x10bfd8[_0x3dffa4(0x276)](/^(\d+)e$/,'$1');const _0x4220d8=Number(_0x10bfd8);_0x59186c[_0x3dffa4(0x1ec)]((_0x51499b,_0x581f99)=>this[_0x3dffa4(0x22e)]({..._0x37df80,'spellItem':_0x51499b,'ix':_0x581f99,'uses':_0x4220d8,'usesPer':_0x1bc800})),_0x3271ec[_0x3dffa4(0x211)]();});break;}case'resource':{Object[_0x41600f(0x25f)](_0x22930e)[_0x41600f(0x1ec)](([_0x13aca3,_0x509b79])=>{const _0x54f462=_0x41600f;_0x3271ec[_0x54f462(0x1e5)](_0x13aca3),_0x509b79[_0x54f462(0x1ec)]((_0x17ff32,_0xa432b8)=>this['_getFlatData_doProcessSpellItem']({..._0x37df80,'spellItem':_0x17ff32,'ix':_0xa432b8,'vetConsumes':{'name':_0x19cd21,'amount':Number(_0x13aca3)}})),_0x3271ec['pop']();});break;}case _0x41600f(0x27d):case _0x41600f(0x240):case'_':{_0x22930e['forEach']((_0x513d28,_0x360452)=>this[_0x41600f(0x22e)]({..._0x37df80,'spellItem':_0x513d28,'ix':_0x360452}));break;}default:throw new Error(_0x41600f(0x252)+_0x4cf127+'\x22');}_0x3271ec[_0x41600f(0x211)]();}}function _0x16bf(_0x86e7eb,_0x147eba){const _0x337247=_0x3372();return _0x16bf=function(_0x16bf4b,_0xa8b5a0){_0x16bf4b=_0x16bf4b-0x1d4;let _0x549a5e=_0x337247[_0x16bf4b];return _0x549a5e;},_0x16bf(_0x86e7eb,_0x147eba);}Charactermancer_AdditionalSpellsUtil[_0xcf99b(0x22a)]=class{constructor(_0x2b882b){const _0x61a941=_0xcf99b;this[_0x61a941(0x234)]=_0x2b882b[_0x61a941(0x234)],this[_0x61a941(0x1fd)]=_0x2b882b[_0x61a941(0x1fd)],this[_0x61a941(0x1fe)]=_0x2b882b[_0x61a941(0x1fe)],this[_0x61a941(0x22d)]=_0x2b882b['isPrepared'],this[_0x61a941(0x27a)]=_0x2b882b[_0x61a941(0x27a)],this[_0x61a941(0x1db)]=_0x2b882b['isAlwaysPrepared'],this[_0x61a941(0x1f8)]=_0x2b882b[_0x61a941(0x1f8)],this['requiredCasterLevel']=_0x2b882b[_0x61a941(0x248)],this[_0x61a941(0x232)]=_0x2b882b[_0x61a941(0x232)],this['uses']=_0x2b882b[_0x61a941(0x20e)],this[_0x61a941(0x1e8)]=_0x2b882b[_0x61a941(0x1e8)],this['consumeType']=_0x2b882b['consumeType'],this[_0x61a941(0x25a)]=_0x2b882b['consumeAmount'],this[_0x61a941(0x22b)]=_0x2b882b['consumeTarget'],this[_0x61a941(0x223)]=_0x2b882b[_0x61a941(0x223)],this[_0x61a941(0x274)]=![],this[_0x61a941(0x1d6)]=null,this[_0x61a941(0x24b)]=null;if(_0x2b882b[_0x61a941(0x1d6)]){const {uid:_0x3fe728,isCantrip:_0x47a3e3,castAtLevel:_0x32069b}=Charactermancer_AdditionalSpellsUtil['FlatSpell'][_0x61a941(0x255)](_0x2b882b['uid']);this[_0x61a941(0x1d6)]=_0x3fe728,this['isCantrip']=_0x47a3e3,this['castAtLevel']=_0x32069b;}this[_0x61a941(0x215)]=_0x2b882b[_0x61a941(0x215)];_0x2b882b['filterExpression']&&_0x2b882b[_0x61a941(0x215)][_0x61a941(0x245)]('|')[_0x61a941(0x261)](Boolean)[_0x61a941(0x242)](_0x1fa633=>/^level=0$/i[_0x61a941(0x208)](_0x1fa633[_0x61a941(0x21b)]()))&&(this[_0x61a941(0x274)]=!![]);this['chooseFromGroup']=_0x2b882b[_0x61a941(0x282)],this[_0x61a941(0x205)]=_0x2b882b[_0x61a941(0x205)];if(this[_0x61a941(0x274)]&&!this[_0x61a941(0x1fe)])this[_0x61a941(0x27a)]=!![];}static[_0xcf99b(0x255)](_0x19e0f2){const _0xa6fbe4=_0xcf99b,[_0x2c9a59,_0x298cb9]=_0x19e0f2[_0xa6fbe4(0x245)]('#')[_0xa6fbe4(0x230)](_0x2f3a86=>_0x2f3a86[_0xa6fbe4(0x21b)]())[_0xa6fbe4(0x261)](Boolean);let [_0x45899d,_0x4a58d7]=Renderer[_0xa6fbe4(0x26a)](_0x2c9a59['toLowerCase']());_0x4a58d7=_0x4a58d7||SRC_PHB[_0xa6fbe4(0x1f5)]();const _0x844b1a=_0x45899d+'|'+_0x4a58d7,_0x565eee=_0x298cb9&&_0x298cb9[_0xa6fbe4(0x1f5)]()==='c',_0x3c4813=_0x565eee?null:_0x298cb9&&!isNaN(_0x298cb9)?Number(_0x298cb9):null;return{'uid':_0x844b1a,'isCantrip':_0x565eee,'castAtLevel':_0x3c4813};}};function _0x3372(){const _0x350f36=['rest','608595qWhmiE','_isAnyExpanded','552503JlsYNy','uses','known','pApplyFormDataToActor','pop','append','inherit','<div\x20class=\x22ve-flex-v-center\x20py-1\x22>\x0a\x09\x09\x09<div\x20class=\x22col-3\x20text-center\x22>Level</div>\x0a\x09\x09\x09<div\x20class=\x22col-9\x22>Spells</div>\x0a\x09\x09</div>','filterExpression','from','_render_renderOptions','<div\x20class=\x22mr-2\x22>,</div>','html','active','trim','MAX_SAFE_INTEGER','consumeType','_sourceHintText','includes','getOrdinalForm','sourceJson','render','vetConsumes','addHookAlwaysKnownSpells','propPulse','resource','modalFilterSpells','<div\x20class=\x22ve-small\x20ve-flex-v-center\x20my-1\x20w-100\x20italic\x20ve-muted\x22>No\x20spells\x20at\x20this\x20level</div>','meta','FlatSpell','consumeTarget','join','isPrepared','_getFlatData_doProcessSpellItem','_isAnyInnatePreparedExpanded','map','_additionalSpells','requiredLevel','ability','type','selectedValues','spellsExpanded','notifications','_getProps_chooseFrom','./ImportListSpell.js','MIN_SAFE_INTEGER','state','targetLevel','pGetFormData','choose','Choose\x20Additional\x20Spell\x20Set','ritual','4708KsJFvk','some','appendTo','segregate','split','_isChooseAbility','_getFlatInnatePreparedSpellsInRange','requiredCasterLevel','ascSortLower','sort','castAtLevel','_render_addLastExpandedSpellsHook','every','_state','PG_SPELLS','</div>','\x22></div>','Unhandled\x20spell\x20recharge\x20type\x20\x22','Unhandled\x20spell\x20addition\x20type\x20\x22','addClass','_getExpandedUid','_render_$getRows','Unhandled\x20additional\x20spell\x20format:\x20\x22','spellLevelHigh','Unhandled\x20recharge\x20type\x20\x22','consumeAmount','additionalSpells','pCacheAndGet','_proxyAssignSimple','ascSort','entries','string','filter','exec','131802hTHCWz','_additionalSpellsFlat','_isAnyInnatePrepared','atwill','_modalFilterSpells','_getFlatSpellsInRange','toSpellCase','splitTagByPipe','Charactermancer_AdditionalSpellsSelect.spells','spellLevelLow','toggleVe','774036XBhtOL','getMetaWrpMultipleChoice_getPropIsAcceptable','<button\x20class=\x22btn\x20btn-default\x20btn-xxs\x20mr-1\x22\x20title=\x22Choose\x20a\x20Spell\x22><span\x20class=\x22fas\x20fa-fw\x20fa-search\x22></span></button>','chooseFrom','_render_$getSelChooseAbility','204588QHQmDK','isCantrip','pGetImportCompApplicationFormData','replace','_render_addLastAlwaysPreparedSpellsHook','addHookExpandedSpells','stringify','isAlwaysKnown','getComp','mergeMap','will','addHookAlwaysPreparedSpells','96louCRj','isNoChoice','prop','chooseFromGroup','spellsAlwaysKnown','294968KlQYvk','modalTitle','_getFlatData_doProcessSpellRechargeBlock','constructor','name','27WiwKMH','ixSet','copy','uid','sourceHintText','<div\x20class=\x22ve-flex-v-center\x20py-1\x22>\x0a\x09\x09\x09<div\x20class=\x22col-3\x20text-center\x22>Spell\x20Level</div>\x0a\x09\x09\x09<div\x20class=\x22col-9\x22>Spells</div>\x0a\x09\x09</div>','getFormData','_addHookBase','isAlwaysPrepared','{@spell\x20','hover','<div\x20class=\x22italic\x20ve-muted\x22>(select\x20a\x20spell)</div>','prepared','<div\x20class=\x22ve-flex-v-center\x22></div>','pulseChoose','parentAbilityAbv','daily','ml-1','push','<button\x20class=\x22btn\x20btn-xs\x20ve-flex-1\x22\x20title=\x22Select\x20Spell\x20Set\x22>','</button>','usesPer','curLevel','innate','count','forEach','_isRequiredLevelInRange','_getFlatData_doProcessAdditionMeta','data','abilityAbv','_render_addLastBoolSpellsHook','warn','<div\x20class=\x22ve-flex-col\x20w-100\x22></div>','pGetUserInput','toLowerCase','get','spellsAlwaysPrepared','preparationMode','spells','length','rowMetas','isAcceptable','key','isExpanded','getFlatData','chooseFrom_','<div\x20class=\x22ve-flex-v-center\x20ve-flex-wrap\x20w-100\x20btn-group\x20','expanded','_isRequiredCasterLevelInRange','_getDefaultState','chooseFromCount','values','setEq','test','resourceName'];_0x3372=function(){return _0x350f36;};return _0x3372();}class Charactermancer_AdditionalSpellsSelect extends BaseComponent{static async[_0xcf99b(0x1f4)](_0x5deeb9){const _0x100e8a=_0xcf99b;_0x5deeb9=_0x5deeb9||{};const {additionalSpells:_0x42a15e}=_0x5deeb9;if(!_0x42a15e||!_0x42a15e[_0x100e8a(0x1fa)])return{'isFormComplete':!![],'data':[]};const _0x3c7988=this['getComp'](_0x5deeb9);if(_0x3c7988['isNoChoice']({'curLevel':_0x5deeb9[_0x100e8a(0x1e9)],'targetLevel':_0x5deeb9[_0x100e8a(0x23c)],'isStandalone':_0x5deeb9['isStandalone']}))return _0x3c7988[_0x100e8a(0x23d)]();return UtilApplications[_0x100e8a(0x275)]({'comp':_0x3c7988,'width':0x280,'height':0xdc});}static[_0xcf99b(0x27b)](_0x5c5579){const _0x226627=_0xcf99b;_0x5c5579=_0x5c5579||{};const _0x463f27=_0x5c5579[_0x226627(0x227)]||new ModalFilterSpellsFvtt({'namespace':_0x226627(0x26b),'isRadio':!![]}),_0x34e632=new this({..._0x5c5579,'modalFilterSpells':_0x463f27});return _0x34e632['curLevel']=_0x5c5579[_0x226627(0x1e9)],_0x34e632[_0x226627(0x23c)]=_0x5c5579[_0x226627(0x23c)],_0x34e632[_0x226627(0x26c)]=_0x5c5579[_0x226627(0x26c)],_0x34e632['spellLevelHigh']=_0x5c5579[_0x226627(0x258)],_0x34e632;}static async[_0xcf99b(0x210)](_0x263fbe,_0x405c53,_0x5ab228){const _0x4f4650=_0xcf99b;_0x5ab228=_0x5ab228||{};if(!_0x405c53||!_0x405c53?.[_0x4f4650(0x1ef)]?.[_0x4f4650(0x1fa)])return;const _0x55d287=(_0x5ab228[_0x4f4650(0x1f0)]===_0x4f4650(0x213)?_0x5ab228[_0x4f4650(0x1e2)]:_0x5ab228[_0x4f4650(0x1f0)])||(_0x405c53[_0x4f4650(0x1f0)]===_0x4f4650(0x213)?_0x5ab228['parentAbilityAbv']:_0x405c53[_0x4f4650(0x1f0)]),{ImportListSpell:_0x394c53}=await import(_0x4f4650(0x239)),_0x3d4406=new _0x394c53({'actor':_0x263fbe});for(const _0x3086a8 of _0x405c53[_0x4f4650(0x1ef)]){if(_0x3086a8['isExpanded'])continue;let [_0x441c34,_0x3c3b94]=_0x3086a8[_0x4f4650(0x1d6)]['split']('|');if(!_0x3c3b94)_0x3c3b94=SRC_PHB;const _0xdac5c5=UrlUtil['URL_TO_HASH_BUILDER'][UrlUtil[_0x4f4650(0x24f)]]({'name':_0x441c34,'source':_0x3c3b94}),_0x202c51=await Renderer[_0x4f4650(0x1dd)][_0x4f4650(0x25c)](UrlUtil[_0x4f4650(0x24f)],_0x3c3b94,_0xdac5c5);if(!_0x202c51){const _0x405a7c='Could\x20not\x20find\x20spell\x20\x22'+_0xdac5c5+'\x22\x20when\x20applying\x20additional\x20spells!';ui[_0x4f4650(0x237)][_0x4f4650(0x1f2)](_0x405a7c),console[_0x4f4650(0x1f2)](...LGT,_0x405a7c);continue;}await _0x3d4406['pImportEntry'](_0x202c51,{'opts_pGetSpellItem':{'abilityAbv':_0x55d287,'usesMax':_0x3086a8[_0x4f4650(0x20e)],'usesCurrent':_0x3086a8[_0x4f4650(0x20e)],'usesPer':_0x3086a8['usesPer'],'consumeType':_0x3086a8[_0x4f4650(0x21d)],'consumeAmount':_0x3086a8[_0x4f4650(0x25a)],'consumeTarget':_0x3086a8['consumeTarget'],'vetConsumes':_0x3086a8['vetConsumes'],'isPrepared':_0x3086a8[_0x4f4650(0x22d)],'preparationMode':_0x3086a8['preparationMode'],'castAtLevel':_0x3086a8[_0x4f4650(0x24b)],'isIgnoreExisting':!![]}});}}static[_0xcf99b(0x280)](_0x2df0be,{additionalSpellsFlat:additionalSpellsFlat=null,curLevel:curLevel=null,targetLevel:targetLevel=null,isStandalone:isStandalone=![]}={}){const _0x254236=_0xcf99b;if(_0x2df0be[_0x254236(0x1fa)]!==0x1)return![];additionalSpellsFlat=additionalSpellsFlat||Charactermancer_AdditionalSpellsUtil[_0x254236(0x1ff)](_0x2df0be);const _0xf2d3c7=curLevel??Number['MIN_SAFE_INTEGER'],_0x4a9e1a=targetLevel??Number[_0x254236(0x21c)],_0x2f9016=additionalSpellsFlat[_0x254236(0x242)](_0x3edade=>Object['values'](_0x3edade[_0x254236(0x1f9)])[_0x254236(0x242)](_0x5209d3=>(!isStandalone||!_0x5209d3[_0x254236(0x1fe)])&&(_0x5209d3[_0x254236(0x232)]==null||_0x5209d3['requiredLevel']>=_0xf2d3c7&&_0x5209d3[_0x254236(0x232)]<=_0x4a9e1a)));if(!_0x2f9016)return!![];return!additionalSpellsFlat['some'](_0xeb7e32=>_0xeb7e32[_0x254236(0x229)][_0x254236(0x233)]?.[_0x254236(0x23e)]||Object[_0x254236(0x206)](_0xeb7e32['spells'])[_0x254236(0x242)](_0x413d3c=>_0x413d3c[_0x254236(0x215)]!=null||_0x413d3c['chooseFromGroup']!=null));}constructor(_0x363a06){const _0x5abe66=_0xcf99b;_0x363a06=_0x363a06||{},super(),this[_0x5abe66(0x231)]=_0x363a06['additionalSpells'],this[_0x5abe66(0x21e)]=_0x363a06[_0x5abe66(0x1d7)],this['_modalFilterSpells']=_0x363a06['modalFilterSpells'],this[_0x5abe66(0x264)]=Charactermancer_AdditionalSpellsUtil[_0x5abe66(0x1ff)](_0x363a06[_0x5abe66(0x25b)]);}get[_0xcf99b(0x285)](){const _0x1aae64=_0xcf99b;return _0x1aae64(0x23f)+(this['_sourceHintText']?'\x20('+this['_sourceHintText']+')':'');}set['curLevel'](_0x36099e){const _0x3d82a8=_0xcf99b;this[_0x3d82a8(0x24e)]['curLevel']=_0x36099e;}set[_0xcf99b(0x23c)](_0x393400){const _0x58cc44=_0xcf99b;this[_0x58cc44(0x24e)][_0x58cc44(0x23c)]=_0x393400;}set['spellLevelLow'](_0x288f0e){const _0x1a6b55=_0xcf99b;this[_0x1a6b55(0x24e)][_0x1a6b55(0x26c)]=_0x288f0e;}set[_0xcf99b(0x258)](_0x4f59c9){const _0xa03030=_0xcf99b;this[_0xa03030(0x24e)][_0xa03030(0x258)]=_0x4f59c9;}[_0xcf99b(0x27e)](_0x1f815c){const _0x2f9f59=_0xcf99b;this[_0x2f9f59(0x1da)](_0x2f9f59(0x1f7),_0x1f815c);}[_0xcf99b(0x278)](_0x4cc621){const _0x209f08=_0xcf99b;this[_0x209f08(0x1da)](_0x209f08(0x236),_0x4cc621);}[_0xcf99b(0x224)](_0x5901ff){const _0x4b0f86=_0xcf99b;this[_0x4b0f86(0x1da)]('spellsAlwaysKnown',_0x5901ff);}get[_0xcf99b(0x1f7)](){return this['_state']['spellsAlwaysPrepared'];}get[_0xcf99b(0x236)](){const _0x23e255=_0xcf99b;return this['_state'][_0x23e255(0x236)];}get['spellsAlwaysKnown'](){const _0x3b0b15=_0xcf99b;return this['_state'][_0x3b0b15(0x283)];}[_0xcf99b(0x277)](){const _0x5a6fe2=_0xcf99b;return this[_0x5a6fe2(0x1f1)]({'propState':'spellsAlwaysPrepared','propIsBool':_0x5a6fe2(0x1db)});}[_0xcf99b(0x24c)](){const _0x25b008=_0xcf99b;return this[_0x25b008(0x1f1)]({'propState':_0x25b008(0x236),'propIsBool':_0x25b008(0x1fe)});}['_render_addLastAlwaysKnownSpellsHook'](){const _0x403796=_0xcf99b;return this[_0x403796(0x1f1)]({'propState':'spellsAlwaysKnown','propIsBool':'isAlwaysKnown'});}[_0xcf99b(0x1f1)]({propState:_0x5bbf66,propIsBool:_0x1e57c0}){const _0xa0db37=_0xcf99b,_0x639ea7=()=>{const _0x5844b6=_0x16bf,_0x292b33=this[_0x5844b6(0x1d9)](),_0xb3d8a0=_0x292b33[_0x5844b6(0x1ef)]['filter'](_0x16552f=>_0x16552f[_0x1e57c0])[_0x5844b6(0x230)](_0x1612cd=>_0x1612cd[_0x5844b6(0x1d6)]['toLowerCase']()),_0x1d8b48=new Set(this[_0x5844b6(0x24e)][_0x5bbf66]),_0x50b43a=new Set(_0xb3d8a0);if(!CollectionUtil[_0x5844b6(0x207)](_0x1d8b48,_0x50b43a))this[_0x5844b6(0x24e)][_0x5bbf66]=_0xb3d8a0;};this[_0xa0db37(0x1da)]('ixSet',_0x639ea7),this[_0xa0db37(0x1da)](_0xa0db37(0x1e9),_0x639ea7),this['_addHookBase'](_0xa0db37(0x23c),_0x639ea7),this[_0xa0db37(0x1da)](_0xa0db37(0x26c),_0x639ea7),this[_0xa0db37(0x1da)](_0xa0db37(0x258),_0x639ea7),this[_0xa0db37(0x1da)](_0xa0db37(0x1e1),_0x639ea7),_0x639ea7();}[_0xcf99b(0x222)](_0x160968){const _0x4d2372=_0xcf99b;this[_0x4d2372(0x277)](),this[_0x4d2372(0x24c)](),this['_render_addLastAlwaysKnownSpellsHook']();const _0x581768=$(_0x4d2372(0x201)+(this[_0x4d2372(0x264)][_0x4d2372(0x1fa)]>0x1?'mb-1':'')+_0x4d2372(0x251)),_0x1a7900=$(_0x4d2372(0x1f3));for(let _0x403cd2=0x0;_0x403cd2<this[_0x4d2372(0x264)][_0x4d2372(0x1fa)];++_0x403cd2)this['_render_renderOptions'](_0x581768,_0x1a7900,_0x403cd2);$$(_0x160968)`
			${_0x581768}
			${_0x1a7900}
		`;}[_0xcf99b(0x217)](_0x597922,_0x141c56,_0x496147){const _0xdbb44a=_0xcf99b,_0x2830c7=this[_0xdbb44a(0x264)][_0x496147],_0x874993=this['_additionalSpellsFlat']['length']===0x1?null:$(_0xdbb44a(0x1e6)+(_0x2830c7[_0xdbb44a(0x229)]['name']??'Spell\x20Set\x20'+(_0x496147+0x1))+_0xdbb44a(0x1e7))['click'](()=>this[_0xdbb44a(0x24e)][_0xdbb44a(0x1d4)]=_0x496147),_0x2c809c=this[_0xdbb44a(0x265)](_0x496147),_0x5008e5=this[_0xdbb44a(0x20c)](_0x496147),_0x58d582=Object[_0xdbb44a(0x206)](_0x2830c7[_0xdbb44a(0x1f9)])[_0xdbb44a(0x24a)]((_0x3c14a6,_0x39845f)=>SortUtil[_0xdbb44a(0x25e)](_0x3c14a6[_0xdbb44a(0x232)]||0x0,_0x39845f[_0xdbb44a(0x232)]||0x0)||SortUtil[_0xdbb44a(0x25e)](_0x3c14a6[_0xdbb44a(0x248)]||0x0,_0x39845f[_0xdbb44a(0x248)]||0x0)),_0x55c688=_0x2c809c?$(_0xdbb44a(0x214)):null,_0x2dd2fe=_0x5008e5?$(_0xdbb44a(0x1d8)):null,_0x252378=_0x2c809c?this['_render_$getRows'](_0x496147,_0x58d582,{'isExpandedMatch':![]}):null,_0x23701b=_0x5008e5?this[_0xdbb44a(0x256)](_0x496147,_0x58d582,{'isExpandedMatch':!![]}):null,_0x3fce12=_0x2c809c?$(_0xdbb44a(0x228)):null,_0x564653=_0x5008e5?$(_0xdbb44a(0x228)):null,_0x5cb344=()=>{const _0x4ce06e=_0xdbb44a,_0x331af1=!!this[_0x4ce06e(0x247)](_0x496147)[_0x4ce06e(0x1fa)];if(_0x55c688)_0x55c688[_0x4ce06e(0x26d)](_0x331af1);if(_0x3fce12)_0x3fce12['toggleVe'](!_0x331af1);const _0x2fab46=!!this['_getFlatExpandedSpellsInRange'](_0x496147)[_0x4ce06e(0x1fa)];if(_0x2dd2fe)_0x2dd2fe[_0x4ce06e(0x26d)](_0x2fab46);if(_0x564653)_0x564653[_0x4ce06e(0x26d)](!_0x2fab46);};this[_0xdbb44a(0x1da)]('spellLevelLow',_0x5cb344),this[_0xdbb44a(0x1da)](_0xdbb44a(0x258),_0x5cb344),this[_0xdbb44a(0x1da)]('curLevel',_0x5cb344),this[_0xdbb44a(0x1da)](_0xdbb44a(0x23c),_0x5cb344),this[_0xdbb44a(0x1da)]('ixSet',_0x5cb344),_0x5cb344();const _0x990613=_0x2c809c?$$`<div class="ve-flex-col">
			<div class="bold my-0">Innate/Prepared/Known Spells</div>
			${_0x55c688}
			${_0x252378}
			${_0x3fce12}
		</div>`:null,_0x388069=_0x5008e5?$$`<div class="ve-flex-col">
			<div class="bold my-0">Expanded Spell List</div>
			${_0x2dd2fe}
			${_0x23701b}
			${_0x564653}
		</div>`:null,_0x5de558=this['_isChooseAbility'](_0x496147),_0x425779=_0x5de558?this[_0xdbb44a(0x272)](_0x496147):null,_0x4906cf=_0x5de558?$$`<div class="split-v-center">
			<div class="bold my-0 no-shrink mr-2">Ability Score</div>
			${_0x425779}
		</div>`:null;if(_0x874993)_0x597922[_0xdbb44a(0x212)](_0x874993);const _0x4e1e37=$$`<div class="ve-flex-col">
			${_0x990613}
			${_0x388069}
			${_0x4906cf}
		</div>`[_0xdbb44a(0x243)](_0x141c56);if(this['_additionalSpellsFlat'][_0xdbb44a(0x1fa)]!==0x1){const _0x23bf72=()=>{const _0x450fdf=_0xdbb44a;_0x874993['toggleClass'](_0x450fdf(0x21a),this[_0x450fdf(0x24e)]['ixSet']===_0x496147),_0x4e1e37[_0x450fdf(0x26d)](this[_0x450fdf(0x24e)]['ixSet']===_0x496147);};this['_addHookBase']('ixSet',_0x23bf72),_0x23bf72();const _0x2a8365=(_0x365c1a,_0xd2b655,_0x3c4d93)=>{const _0x44bb77=_0xdbb44a,_0x12eefb=this[_0x44bb77(0x264)][_0x3c4d93],_0x11fe15=Object['values'](_0x12eefb[_0x44bb77(0x1f9)])[_0x44bb77(0x27c)](_0x50fbd3=>({[_0x50fbd3['key']]:null}));this[_0x44bb77(0x25d)](_0x44bb77(0x23b),_0x11fe15);};this[_0xdbb44a(0x1da)](_0xdbb44a(0x1d4),_0x2a8365);}}['_getProps_chooseFrom']({groupUid:_0x4b9ed0}){const _0x4c9c6d=_0xcf99b;return{'propBase':_0x4c9c6d(0x200)+_0x4b9ed0};}[_0xcf99b(0x256)](_0x2acb48,_0x551c54,{isExpandedMatch:_0x20b707}){const _0x3b6344=_0xcf99b;if(!_0x551c54['length'])return null;const _0x3371b0={};return _0x551c54['forEach'](_0x56c61b=>{const _0x392b65=_0x16bf;if(_0x56c61b['isExpanded']!==_0x20b707)return;const _0x31f38f=_0x56c61b[_0x392b65(0x248)]||_0x56c61b['requiredLevel'];(_0x3371b0[_0x31f38f]=_0x3371b0[_0x31f38f]||[])[_0x392b65(0x1e5)](_0x56c61b);}),Object[_0x3b6344(0x25f)](_0x3371b0)[_0x3b6344(0x24a)](([_0x51b641],[_0x4b1cef])=>SortUtil[_0x3b6344(0x25e)](Number(_0x51b641),Number(_0x4b1cef)))[_0x3b6344(0x230)](([,_0x690216])=>{const _0x11f3be=_0x3b6344,_0x252d04=_0x690216[0x0]['requiredLevel'],_0x172d7f=_0x690216[0x0][_0x11f3be(0x248)],_0x3c7cde=_0x690216[0x0][_0x11f3be(0x248)]!=null,_0x5bb393=_0x690216[0x0][_0x11f3be(0x232)]!=null,_0x27ed27={};_0x690216=_0x690216[_0x11f3be(0x261)](_0x140b80=>{const _0x4ed6a6=_0x11f3be;if(!_0x140b80['chooseFromGroup'])return!![];return _0x27ed27[_0x140b80[_0x4ed6a6(0x282)]]=_0x27ed27[_0x140b80['chooseFromGroup']]||{'from':[],'count':_0x140b80[_0x4ed6a6(0x205)]??0x1},_0x27ed27[_0x140b80[_0x4ed6a6(0x282)]]['from']['push'](_0x140b80),![];});const [_0x526197,_0x4e9021]=_0x690216[_0x11f3be(0x244)](_0x26e3d4=>_0x26e3d4[_0x11f3be(0x215)]==null);_0x526197[_0x11f3be(0x24a)]((_0x3d12db,_0x229897)=>SortUtil[_0x11f3be(0x249)](_0x3d12db['uid'],_0x229897[_0x11f3be(0x1d6)])),_0x4e9021[_0x11f3be(0x24a)]((_0x27244b,_0x12c3c3)=>SortUtil['ascSortLower'](_0x27244b[_0x11f3be(0x215)],_0x12c3c3['filterExpression']));const _0x480980=$$`<div class="col-9 ve-flex-v-center ve-flex-wrap">
					<div>${Renderer[_0x11f3be(0x1f6)]()[_0x11f3be(0x222)](_0x526197[_0x11f3be(0x230)](_0x5b0ad1=>_0x11f3be(0x1dc)+_0x5b0ad1[_0x11f3be(0x1d6)][_0x11f3be(0x269)]()+'}')[_0x11f3be(0x22c)](',\x20'))}</div>
				</div>`;_0x4e9021[_0x11f3be(0x1ec)]((_0x26e3b1,_0x4cb8d6)=>{const _0x15a00c=_0x11f3be,_0x2919b7=$(_0x15a00c(0x1e0)),_0x377aa9=()=>{const _0x189afd=_0x15a00c;_0x2919b7[_0x189afd(0x219)](this['_state'][_0x26e3b1[_0x189afd(0x1fd)]]!=null&&this[_0x189afd(0x24e)][_0x189afd(0x1d4)]===_0x2acb48?'<div>'+Renderer['get']()['render'](_0x189afd(0x1dc)+this['_state'][_0x26e3b1['key']]['toLowerCase']()+'}')+_0x189afd(0x250):_0x189afd(0x1de));};this[_0x15a00c(0x1da)](_0x26e3b1[_0x15a00c(0x1fd)],_0x377aa9);this[_0x15a00c(0x264)][_0x15a00c(0x1fa)]!==0x1&&this[_0x15a00c(0x1da)](_0x15a00c(0x1d4),_0x377aa9);_0x377aa9();const _0x30e09d=$(_0x15a00c(0x270))['click'](async()=>{const _0x20990d=_0x15a00c,_0x5a91ef=await this[_0x20990d(0x267)]['pGetUserSelection']({'filterExpression':_0x26e3b1[_0x20990d(0x215)]});if(_0x5a91ef==null||!_0x5a91ef[_0x20990d(0x1fa)])return;const _0x46cdbf=_0x5a91ef[0x0];this[_0x20990d(0x24e)][_0x26e3b1[_0x20990d(0x1fd)]]=_0x46cdbf[_0x20990d(0x288)]+'|'+_0x46cdbf['values'][_0x20990d(0x221)],this[_0x20990d(0x24e)][_0x20990d(0x1e1)]=!this['_state']['pulseChoose'];});if(this[_0x15a00c(0x264)]['length']!==0x1){const _0x14da58=()=>_0x30e09d[_0x15a00c(0x281)]('disabled',this[_0x15a00c(0x24e)]['ixSet']!==_0x2acb48);this['_addHookBase'](_0x15a00c(0x1d4),_0x14da58),_0x14da58();}if(_0x526197[_0x15a00c(0x1fa)]||_0x4cb8d6)_0x480980[_0x15a00c(0x212)]('<div\x20class=\x22mr-2\x22>,</div>');$$`<div class="ve-flex-v-center">${_0x30e09d}${_0x2919b7}</div>`[_0x15a00c(0x243)](_0x480980);}),Object[_0x11f3be(0x25f)](_0x27ed27)[_0x11f3be(0x1ec)](([_0x264465,_0x3080b2],_0x14bf8f)=>{const _0xd10257=_0x11f3be,{propBase:_0x5d3552}=this[_0xd10257(0x238)]({'groupUid':_0x264465}),_0xd7e1b2=ComponentUiUtil['getMetaWrpMultipleChoice'](this,_0x5d3552,{'values':_0x3080b2[_0xd10257(0x216)][_0xd10257(0x230)](_0x445a0f=>_0x445a0f[_0xd10257(0x1d6)]),'fnDisplay':_0x4e87c0=>Renderer[_0xd10257(0x1f6)]()['render'](_0xd10257(0x1dc)+_0x4e87c0+'}'),'count':_0x3080b2[_0xd10257(0x1eb)]}),_0x21b615=()=>this[_0xd10257(0x24e)][_0xd10257(0x1e1)]=!this[_0xd10257(0x24e)][_0xd10257(0x1e1)];this[_0xd10257(0x1da)](_0xd7e1b2[_0xd10257(0x225)],_0x21b615);if(this[_0xd10257(0x264)][_0xd10257(0x1fa)]!==0x1){const _0x2382e1=()=>{const _0x126142=_0xd10257;_0xd7e1b2[_0x126142(0x1fb)][_0x126142(0x1ec)](({$cb:_0x2e78c9})=>_0x2e78c9['prop']('disabled',this['_state'][_0x126142(0x1d4)]!==_0x2acb48));};this[_0xd10257(0x1da)](_0xd10257(0x1d4),_0x2382e1),_0x2382e1();}const _0x53fc46=[];_0xd7e1b2[_0xd10257(0x1fb)][_0xd10257(0x1ec)](({$cb:_0x14e16e,displayValue:_0x5974db})=>{const _0x594df4=_0xd10257;_0x53fc46[_0x594df4(0x1e5)]($$`<div class="ve-flex-v-center mr-2 no-wrap">${_0x5974db}${_0x14e16e[_0x594df4(0x254)](_0x594df4(0x1e4))}</div>`);});if(_0x526197[_0xd10257(0x1fa)]||_0x4e9021['length']||_0x14bf8f)_0x480980['append'](_0xd10257(0x218));$$`<div class="ve-flex-v-center ve-flex-wrap"><i class="mr-1 ve-muted no-wrap">Choose ${_0x3080b2[_0xd10257(0x1eb)]===0x1?'':_0x3080b2[_0xd10257(0x1eb)]+'\x20'}from:</i>${_0x53fc46}</div>`[_0xd10257(0x243)](_0x480980);});const _0x46db13=$$`<div class="py-1 ve-flex-v-center stripe-even">
					<div class="col-3 text-center">${Parser[_0x11f3be(0x220)](_0x172d7f||_0x252d04)||'<i\x20class=\x22ve-muted\x22>Current</i>'}</div>
					${_0x480980}
				</div>`;if(_0x3c7cde){const _0x25a8d2=()=>_0x46db13[_0x11f3be(0x26d)](this[_0x11f3be(0x203)](_0x172d7f));this[_0x11f3be(0x1da)](_0x11f3be(0x26c),_0x25a8d2),this['_addHookBase']('spellLevelHigh',_0x25a8d2),_0x25a8d2();}else{if(_0x5bb393){const _0x25d096=()=>_0x46db13['toggleVe'](this['_isRequiredLevelInRange'](_0x252d04));this[_0x11f3be(0x1da)](_0x11f3be(0x1e9),_0x25d096),this['_addHookBase'](_0x11f3be(0x23c),_0x25d096),_0x25d096();}else _0x46db13['showVe']();}return _0x46db13;});}['_render_$getSelChooseAbility'](_0x597b2d){const _0x91037=_0xcf99b;return ComponentUiUtil['$getSelEnum'](this,_0x91037(0x233),{'values':this['_additionalSpells'][_0x597b2d][_0x91037(0x233)][_0x91037(0x23e)],'fnDisplay':_0x27e878=>Parser['attAbvToFull'](_0x27e878),'isAllowNull':!![]});}[_0xcf99b(0x1ed)](_0xfe87f9){const _0x555154=_0xcf99b;return _0xfe87f9>(this[_0x555154(0x24e)][_0x555154(0x1e9)]??Number[_0x555154(0x21c)])&&_0xfe87f9<=(this[_0x555154(0x24e)][_0x555154(0x23c)]==null?Number[_0x555154(0x23a)]:this[_0x555154(0x24e)][_0x555154(0x23c)]);}[_0xcf99b(0x203)](_0x9d7afa){const _0x42e33d=_0xcf99b;return _0x9d7afa>=(this[_0x42e33d(0x24e)][_0x42e33d(0x26c)]??Number[_0x42e33d(0x21c)])&&_0x9d7afa<=(this[_0x42e33d(0x24e)][_0x42e33d(0x258)]==null?Number[_0x42e33d(0x23a)]:this['_state'][_0x42e33d(0x258)]);}['_getFlatSpellsInRange'](_0x268d74,{isExpandedMatch:isExpandedMatch=null}={}){const _0x3fbb3=_0xcf99b;if(_0x268d74==null)_0x268d74=this['_state'][_0x3fbb3(0x1d4)];return Object[_0x3fbb3(0x206)]((this[_0x3fbb3(0x264)][_0x268d74]||{'spells':[]})[_0x3fbb3(0x1f9)])[_0x3fbb3(0x261)](_0x4541a1=>{const _0x559e1a=_0x3fbb3;if(isExpandedMatch!=null){if(_0x4541a1['isExpanded']!==isExpandedMatch)return![];}if(_0x4541a1['requiredCasterLevel']!=null)return this[_0x559e1a(0x203)](_0x4541a1[_0x559e1a(0x248)]);else{if(_0x4541a1[_0x559e1a(0x232)]!=null)return this[_0x559e1a(0x1ed)](_0x4541a1[_0x559e1a(0x232)]);}return!![];});}[_0xcf99b(0x247)](_0x4cbd60){return this['_getFlatSpellsInRange'](_0x4cbd60,{'isExpandedMatch':![]});}['_getFlatExpandedSpellsInRange'](_0x24f376){const _0x5c36ed=_0xcf99b;return this[_0x5c36ed(0x268)](_0x24f376,{'isExpandedMatch':!![]});}[_0xcf99b(0x265)](_0x33e8f1){return this['_isAnyInnatePreparedExpanded'](_0x33e8f1,{'isExpandedMatch':![]});}[_0xcf99b(0x20c)](_0x22e141){const _0x501015=_0xcf99b;return this[_0x501015(0x22f)](_0x22e141,{'isExpandedMatch':!![]});}[_0xcf99b(0x22f)](_0x5af6ce,{isExpandedMatch:_0x48ea83}){const _0xddda3f=_0xcf99b;if(_0x5af6ce==null)_0x5af6ce=this[_0xddda3f(0x24e)][_0xddda3f(0x1d4)];return Object[_0xddda3f(0x206)]((this['_additionalSpellsFlat'][_0x5af6ce]||{'spells':[]})['spells'])['some'](_0x4aa045=>_0x4aa045[_0xddda3f(0x1fe)]===_0x48ea83);}[_0xcf99b(0x246)](_0x4707c5){const _0x482206=_0xcf99b;if(_0x4707c5==null)_0x4707c5=this[_0x482206(0x24e)][_0x482206(0x1d4)];return(this[_0x482206(0x231)][_0x4707c5]?.[_0x482206(0x233)]?.['choose']?.[_0x482206(0x1fa)]??0x0)>0x1;}[_0xcf99b(0x280)]({curLevel:_0xca9d09,targetLevel:_0x2c24ee,isStandalone:_0x434bbd}={}){const _0x4a2eb4=_0xcf99b;return this[_0x4a2eb4(0x287)]['isNoChoice'](this['_additionalSpells'],{'additionalSpellsFlat':this[_0x4a2eb4(0x264)],'curLevel':_0xca9d09,'targetLevel':_0x2c24ee,'isStandalone':_0x434bbd});}[_0xcf99b(0x1d9)](){const _0x5a0204=_0xcf99b;let _0x5ac370=MiscUtil[_0x5a0204(0x1d5)](this[_0x5a0204(0x268)]());const _0x47710e={};_0x5ac370['forEach'](_0x50768d=>{const _0x42b965=_0x5a0204;if(!_0x50768d['chooseFromGroup'])return;_0x47710e[_0x50768d[_0x42b965(0x282)]]=_0x47710e[_0x50768d['chooseFromGroup']]||{'from':[],'selectedValues':[],'isAcceptable':![],'count':_0x50768d[_0x42b965(0x205)]??0x1},_0x47710e[_0x50768d[_0x42b965(0x282)]]['from'][_0x42b965(0x1e5)](_0x50768d);}),Object[_0x5a0204(0x25f)](_0x47710e)[_0x5a0204(0x1ec)](([_0x1ee3d4,_0x138772])=>{const _0x5d133e=_0x5a0204,{propBase:_0x4cb179}=this['_getProps_chooseFrom']({'groupUid':_0x1ee3d4});_0x138772[_0x5d133e(0x1fc)]=this['_state'][ComponentUiUtil[_0x5d133e(0x26f)](_0x4cb179)],_0x138772[_0x5d133e(0x235)]=ComponentUiUtil['getMetaWrpMultipleChoice_getSelectedValues'](this,_0x4cb179,{'values':_0x138772['from'][_0x5d133e(0x230)](_0x3e5c89=>_0x3e5c89['uid'])});});let _0x574798=0x0;_0x5ac370=_0x5ac370[_0x5a0204(0x261)](_0x309ca4=>{const _0x2cbe1c=_0x5a0204;if(_0x309ca4[_0x2cbe1c(0x215)]!=null){const _0x4fb2fb=this[_0x2cbe1c(0x24e)][_0x309ca4[_0x2cbe1c(0x1fd)]];if(!_0x4fb2fb)return _0x574798++,![];return delete _0x309ca4[_0x2cbe1c(0x215)],_0x309ca4[_0x2cbe1c(0x1d6)]=this['_state'][_0x309ca4['key']],!![];}if(_0x309ca4['chooseFromGroup']!=null)return _0x47710e[_0x309ca4[_0x2cbe1c(0x282)]][_0x2cbe1c(0x235)][_0x2cbe1c(0x21f)](_0x309ca4['uid']);return!![];});let _0x59f6cd;if(this['_isChooseAbility'](this[_0x5a0204(0x24e)][_0x5a0204(0x1d4)])){_0x59f6cd=this[_0x5a0204(0x24e)][_0x5a0204(0x233)];if(_0x59f6cd==null)_0x574798++;}else _0x59f6cd=(this['_additionalSpellsFlat'][this['_state'][_0x5a0204(0x1d4)]]||{'meta':{}})[_0x5a0204(0x229)]['ability'];return{'isFormComplete':_0x574798===0x0&&Object[_0x5a0204(0x206)](_0x47710e)[_0x5a0204(0x24d)](_0x33191e=>_0x33191e[_0x5a0204(0x1fc)]),'data':_0x5ac370,'abilityAbv':_0x59f6cd};}[_0xcf99b(0x23d)](){const _0x36af27=_0xcf99b;return this[_0x36af27(0x1d9)]();}[_0xcf99b(0x204)](){return{'ixSet':0x0,'curLevel':null,'targetLevel':null,'spellLevelLow':null,'spellLevelHigh':null,'spellsAlwaysPrepared':[],'spellsExpanded':[],'spellsAlwaysKnown':[],'ability':null,'pulseChoose':![]};}}export{Charactermancer_AdditionalSpellsSelect};