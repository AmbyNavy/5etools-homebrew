const _0x144a99=_0x17fa;(function(_0x5d8bb7,_0x5426cf){const _0x4c1fdc=_0x17fa,_0x1013b5=_0x5d8bb7();while(!![]){try{const _0x2bd66b=parseInt(_0x4c1fdc(0x192))/0x1*(-parseInt(_0x4c1fdc(0x1c2))/0x2)+-parseInt(_0x4c1fdc(0x17a))/0x3*(parseInt(_0x4c1fdc(0x170))/0x4)+parseInt(_0x4c1fdc(0x1a9))/0x5+parseInt(_0x4c1fdc(0x1b4))/0x6*(-parseInt(_0x4c1fdc(0x19e))/0x7)+-parseInt(_0x4c1fdc(0x168))/0x8*(parseInt(_0x4c1fdc(0x16d))/0x9)+parseInt(_0x4c1fdc(0x1c1))/0xa*(parseInt(_0x4c1fdc(0x17b))/0xb)+-parseInt(_0x4c1fdc(0x1ca))/0xc*(-parseInt(_0x4c1fdc(0x188))/0xd);if(_0x2bd66b===_0x5426cf)break;else _0x1013b5['push'](_0x1013b5['shift']());}catch(_0x272d7e){_0x1013b5['push'](_0x1013b5['shift']());}}}(_0xecb2,0xb195d));import{Config}from'./Config.js';import{Vetools}from'./Vetools.js';import{Consts}from'./Consts.js';import{SharedConsts}from'../shared/SharedConsts.js';class UtilDataConverter{static[_0x144a99(0x191)](_0x214976,{displayName:displayName=null,isActorItem:isActorItem=![]}={}){const _0xb05ee7=_0x144a99;return''+(displayName||''+(_0x214976[_0xb05ee7(0x152)]===_0xb05ee7(0x163)?_0xb05ee7(0x15c):'')+Renderer[_0xb05ee7(0x15a)](_0x214976['_displayName']||_0x214976['name']||''))+(!isActorItem&&_0x214976['source']&&Config['get'](_0xb05ee7(0x194),_0xb05ee7(0x1c7))?'\x20('+Parser['sourceJsonToAbv'](_0x214976['source'])+')':'');}static[_0x144a99(0x198)](_0x145263){const _0x429a56=_0x144a99;return''+Parser[_0x429a56(0x1c9)](_0x145263['source'])+(Config[_0x429a56(0x14c)]('import',_0x429a56(0x1a6))&&_0x145263[_0x429a56(0x161)]?''+UtilDataConverter[_0x429a56(0x154)]+_0x145263['page']:'');}static async['pGetItemWeaponType'](_0x5c5427){const _0x5249b1=_0x144a99;_0x5c5427=_0x5c5427['toLowerCase']()[_0x5249b1(0x190)]();if(UtilDataConverter['WEAPONS_MARTIAL']['includes'](_0x5c5427))return'martial';if(UtilDataConverter[_0x5249b1(0x16e)][_0x5249b1(0x1a0)](_0x5c5427))return _0x5249b1(0x1ab);let [_0x5b559f,_0x3b6c7a]=Renderer[_0x5249b1(0x1c5)](_0x5c5427);_0x3b6c7a=_0x3b6c7a||_0x5249b1(0x16b);const _0x538ee2=UrlUtil[_0x5249b1(0x19b)][UrlUtil[_0x5249b1(0x199)]]({'name':_0x5b559f,'source':_0x3b6c7a});if(Renderer['hover'][_0x5249b1(0x17d)](UrlUtil['PG_ITEMS'],_0x3b6c7a,_0x538ee2))return Renderer[_0x5249b1(0x1a2)][_0x5249b1(0x146)](UrlUtil[_0x5249b1(0x199)],_0x3b6c7a,_0x538ee2)?.[_0x5249b1(0x182)];if(Renderer['hover'][_0x5249b1(0x165)](UrlUtil[_0x5249b1(0x199)],_0x3b6c7a))return null;const _0x36e44a=await Renderer[_0x5249b1(0x1a2)]['pCacheAndGet'](UrlUtil[_0x5249b1(0x199)],_0x3b6c7a,_0x538ee2);return _0x36e44a?.[_0x5249b1(0x182)];}static async[_0x144a99(0x175)]({sheetItem:_0x3b3a9f,cache:cache=null}={}){const _0x1913c5=_0x144a99;cache=cache||{};if(!cache[_0x1913c5(0x193)]&&!cache[_0x1913c5(0x176)]){const _0x4e38f2=await DataUtil[_0x1913c5(0x1b2)][_0x1913c5(0x184)](),_0x53cb10=await BrewUtil[_0x1913c5(0x17e)]();cache[_0x1913c5(0x193)]=[..._0x4e38f2['class']||[],..._0x53cb10?.[_0x1913c5(0x1b2)]||[]],cache[_0x1913c5(0x176)]=[..._0x4e38f2[_0x1913c5(0x1bd)]||[],..._0x53cb10?.[_0x1913c5(0x1bd)]||[]];}const _0x2aa712=_0x3b3a9f[_0x1913c5(0x166)][_0x1913c5(0x1a5)]()[_0x1913c5(0x190)](),_0x37c76f=(UtilDataConverter[_0x1913c5(0x173)](_0x3b3a9f)['source']||'')[_0x1913c5(0x1a5)](),_0x59ed8c=cache[_0x1913c5(0x193)][_0x1913c5(0x169)](_0x1be351=>_0x1be351['name'][_0x1913c5(0x1a5)]()===_0x2aa712&&(!Config[_0x1913c5(0x14c)](_0x1913c5(0x194),_0x1913c5(0x155))||_0x37c76f===Parser['sourceJsonToAbv'](_0x1be351[_0x1913c5(0x156)])[_0x1913c5(0x1a5)]()));if(!_0x59ed8c[_0x1913c5(0x16a)])return{'matchingClasses':[],'matchingSubclasses':[],'sheetItem':_0x3b3a9f};if(!(_0x3b3a9f[_0x1913c5(0x14b)]['data'][_0x1913c5(0x1bd)]||'')[_0x1913c5(0x190)]())return{'matchingClasses':_0x59ed8c,'matchingSubclasses':[],'sheetItem':_0x3b3a9f};const _0x5aea4f=_0x59ed8c['map'](_0x32e677=>cache[_0x1913c5(0x176)][_0x1913c5(0x169)](_0x2c482b=>_0x2c482b['className']===_0x32e677[_0x1913c5(0x166)]&&_0x2c482b['classSource']===_0x32e677[_0x1913c5(0x156)]&&_0x2c482b[_0x1913c5(0x166)][_0x1913c5(0x1a5)]()===_0x3b3a9f[_0x1913c5(0x14b)][_0x1913c5(0x14b)][_0x1913c5(0x1bd)][_0x1913c5(0x1a5)]()[_0x1913c5(0x190)]()))['flat']();return{'matchingClasses':_0x59ed8c,'matchingSubclasses':_0x5aea4f,'sheetItem':_0x3b3a9f};}static[_0x144a99(0x173)](_0x59566f){const _0x2fadb2=_0x144a99;if(_0x59566f[_0x2fadb2(0x14b)][_0x2fadb2(0x1c4)]?.[SharedConsts[_0x2fadb2(0x18a)]]?.['source'])return{'source':_0x59566f[_0x2fadb2(0x14b)][_0x2fadb2(0x1c4)]?.[SharedConsts[_0x2fadb2(0x18a)]]?.[_0x2fadb2(0x156)],'isExact':!![]};let _0x1e386f=_0x59566f[_0x2fadb2(0x14b)]||{};if(_0x1e386f[_0x2fadb2(0x14b)])_0x1e386f=_0x1e386f['data'];let _0x257b49=_0x1e386f['source'];if(_0x257b49 instanceof Array)_0x257b49=_0x257b49[0x0];if(!_0x257b49)return{'source':null};const _0x3ad36c=_0x257b49['split'](UtilDataConverter['_SOURCE_PAGE_PREFIX_RE'])[0x0]['trim']();return{'source':_0x3ad36c,'isExact':![]};}static[_0x144a99(0x187)]({totalSpellcastingLevels:_0x51b4a3}){const _0x252507=_0x144a99;if(!_0x51b4a3)return 0x0;const _0x3d62e1=UtilDataConverter[_0x252507(0x1b1)][_0x252507(0x1af)][_0x51b4a3-0x1]||UtilDataConverter[_0x252507(0x1b1)][_0x252507(0x1af)][0x0];return _0x3d62e1[_0x252507(0x1cb)]((_0x246ee0,_0x1d19db)=>{const _0x449400=_0x1d19db+0x1;return Parser['spLevelToSpellPoints'](_0x449400)*_0x246ee0;})['sum']();}static[_0x144a99(0x145)]({totalMysticLevels:_0x22c10e}){const _0xfefb61=_0x144a99;if(!_0x22c10e||isNaN(_0x22c10e)||_0x22c10e<0x0)return 0x0;return _0x22c10e=Math['round'](Math['min'](_0x22c10e,Consts[_0xfefb61(0x144)])),[0x4,0x6,0xe,0x11,0x1b,0x20,0x26,0x2c,0x39,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x40,0x47,0x47,0x47][_0x22c10e-0x1];}static async[_0x144a99(0x143)](_0x6d2958,{actorId:actorId=null,tagHashItemIdMap:tagHashItemIdMap=null}={}){const _0x3c1062=_0x144a99,_0x748651=(_0x8ee923,_0x4518f0)=>this[_0x3c1062(0x18e)](_0x8ee923,_0x4518f0),_0x2312c4=(_0x49e69b,_0x13d195)=>{const _0x356d2a=_0x3c1062,_0x47f544='{'+_0x49e69b+'\x20'+_0x13d195+'}',_0x299110=this[_0x356d2a(0x1b8)]({'tag':_0x49e69b,'text':_0x13d195,'tagHashItemIdMap':tagHashItemIdMap}),_0x468136=this[_0x356d2a(0x164)](_0x47f544,{'actorId':actorId,'itemId':_0x299110});if(_0x47f544===_0x468136)return null;return _0x468136;},_0x4c73f7=(_0x4190f1,_0x3e85e0)=>{const _0x366294=_0x3c1062,_0x59b592=Vetools[_0x366294(0x1c3)]({'originalUrl':_0x3e85e0});return Vetools[_0x366294(0x14f)]({'originalUrl':_0x3e85e0,'force':!![]})[_0x366294(0x1a8)](null)[_0x366294(0x19c)](()=>{}),_0x59b592;};Renderer['get']()['addPlugin'](_0x3c1062(0x197),_0x748651);if(Config[_0x3c1062(0x14c)](_0x3c1062(0x194),'isRenderLinksAsTags'))Renderer['get']()['addPlugin'](_0x3c1062(0x160),_0x2312c4);Config[_0x3c1062(0x14c)](_0x3c1062(0x194),_0x3c1062(0x1a3))&&(Renderer[_0x3c1062(0x14c)]()[_0x3c1062(0x18f)](_0x3c1062(0x159),_0x4c73f7),Renderer[_0x3c1062(0x14c)]()[_0x3c1062(0x18f)](_0x3c1062(0x171),_0x4c73f7));let _0x41f579;try{_0x41f579=await _0x6d2958();}finally{Renderer[_0x3c1062(0x14c)]()[_0x3c1062(0x1a4)]('link_attributesHover',_0x748651),Renderer[_0x3c1062(0x14c)]()[_0x3c1062(0x1a4)](_0x3c1062(0x160),_0x2312c4),Renderer[_0x3c1062(0x14c)]()[_0x3c1062(0x1a4)](_0x3c1062(0x159),_0x4c73f7),Renderer['get']()['removePlugin'](_0x3c1062(0x171),_0x4c73f7);}return _0x41f579;}static['_pGetWithDescriptionPlugins_getTagItemId']({tag:_0x439381,text:_0x1d86cf,tagHashItemIdMap:_0x138836}){const _0x418f47=_0x144a99,_0x751b5b=_0x439381['slice'](0x1);if(!_0x138836?.[_0x751b5b])return null;const _0x302e1e=Parser[_0x418f47(0x1b9)][_0x751b5b];if(!_0x302e1e)return null;const _0x293911=Renderer[_0x418f47(0x1a2)][_0x418f47(0x1bc)][_0x751b5b];if(!_0x293911)return null;const _0x1d0158=UrlUtil[_0x418f47(0x19b)][_0x293911];if(!_0x1d0158)return null;let [_0x3b7f5c,_0x48d78c]=_0x1d86cf['split']('|');_0x48d78c=_0x48d78c||_0x302e1e;const _0x4d8206=_0x1d0158({'name':_0x3b7f5c,'source':_0x48d78c});return _0x138836?.[_0x751b5b]?.[_0x4d8206];}static[_0x144a99(0x18e)](_0x37cfaf,_0x52545c){const _0x58b49a=_0x144a99,_0x266613=_0x37cfaf[_0x58b49a(0x148)][_0x58b49a(0x1a2)]['page'],_0x3d6f3e=_0x37cfaf['href'][_0x58b49a(0x1a2)]['source'],_0x44d206=_0x52545c,_0x57e5f3=_0x37cfaf[_0x58b49a(0x148)][_0x58b49a(0x1a2)]['preloadId'];return{'attributesHoverReplace':['data-plut-hover=\x22'+!![]+_0x58b49a(0x1bb)+_0x266613['qq']()+_0x58b49a(0x15f)+_0x3d6f3e['qq']()+'\x22\x20data-plut-hover-hash=\x22'+_0x44d206['qq']()+'\x22\x20'+(_0x57e5f3?'data-plut-hover-preload-id=\x22'+_0x57e5f3['qq']()+'\x22':'')]};}static[_0x144a99(0x164)](_0x2daf8d,{actorId:_0x2b75d5,itemId:_0x911cd8}={}){const _0x2854f2=_0x144a99;UtilDataConverter[_0x2854f2(0x181)]=UtilDataConverter['_LINK_TAG_METAS']||Object[_0x2854f2(0x1a1)](Parser[_0x2854f2(0x1b9)])['map'](_0x50d10b=>({'tag':_0x50d10b,'re':RegExp(_0x2854f2(0x179)+_0x50d10b+'\x20(?<text>[^}]+)}$','g')}));for(const {tag:_0x59b90b,re:_0x5999fd}of UtilDataConverter[_0x2854f2(0x181)])_0x2daf8d=_0x2daf8d[_0x2854f2(0x18d)](_0x5999fd,(..._0x4dced3)=>this[_0x2854f2(0x19d)]({'tag':_0x59b90b,'text':_0x4dced3[_0x2854f2(0x16f)]()[_0x2854f2(0x147)],'actorId':_0x2b75d5,'itemId':_0x911cd8}));return _0x2daf8d;}static[_0x144a99(0x16c)](_0x5717ac){const _0x156a10=_0x144a99;if(!_0x5717ac)return _0x5717ac;return UtilDataConverter[_0x156a10(0x172)][_0x156a10(0x19f)](MiscUtil[_0x156a10(0x17c)](_0x5717ac),{'string':_0x56c821=>{const _0x283e26=_0x156a10,_0x1d9002=[''];return this[_0x283e26(0x178)](_0x56c821,_0x1d9002),_0x1d9002[_0x283e26(0x1aa)]('');}});}static[_0x144a99(0x178)](_0x4a63b5,_0x544ccb){const _0x265bc3=_0x144a99,_0x41ebee=Renderer[_0x265bc3(0x14a)](_0x4a63b5),_0x3fd5a0=_0x41ebee[_0x265bc3(0x16a)];for(let _0x387756=0x0;_0x387756<_0x3fd5a0;++_0x387756){const _0x4880e9=_0x41ebee[_0x387756];if(!_0x4880e9)continue;if(_0x4880e9[_0x265bc3(0x19a)]('{@')){const _0x528c6f=this[_0x265bc3(0x164)](_0x4880e9);if(_0x528c6f!==_0x4880e9){_0x544ccb[0x0]+=_0x528c6f;continue;}_0x544ccb[0x0]+=_0x4880e9[_0x265bc3(0x15d)](0x0,0x1),this[_0x265bc3(0x178)](_0x4880e9[_0x265bc3(0x15d)](0x1,-0x1),_0x544ccb),_0x544ccb[0x0]+=_0x4880e9[_0x265bc3(0x15d)](-0x1);continue;}_0x544ccb[0x0]+=_0x4880e9;}}static[_0x144a99(0x19d)]({tag:_0x54074e,text:_0x8d4f3c,actorId:_0x32d174,itemId:_0x306239}){const _0x10ac91=_0x144a99;if(_0x32d174&&_0x306239){const [,,_0x74c168]=_0x8d4f3c[_0x10ac91(0x186)]('|');return _0x10ac91(0x1b3)+_0x32d174+']['+_0x306239+']'+(_0x74c168?'{'+_0x74c168+'}':'');}return'@'+_0x54074e+'['+_0x8d4f3c+']';}static async[_0x144a99(0x18b)]({str:_0x2bbce6,re:_0x4abdff,tag:_0x4edba1}){const _0x43250d=_0x144a99;let _0x5e47eb;while(_0x5e47eb=_0x4abdff[_0x43250d(0x14e)](_0x2bbce6)){const _0x139daf=_0x2bbce6[_0x43250d(0x15d)](0x0,_0x5e47eb['index']),_0x30cb13=_0x2bbce6[_0x43250d(0x15d)](_0x4abdff[_0x43250d(0x1ad)]),_0x730331=this[_0x43250d(0x19d)]({'tag':_0x4edba1,'m':_0x5e47eb});_0x2bbce6=''+_0x139daf+_0x730331+_0x30cb13,_0x4abdff['lastIndex']=_0x139daf['length']+_0x730331[_0x43250d(0x16a)];}return _0x2bbce6;}static [_0x144a99(0x1cc)]={'round':null,'restShort':'sr','restLong':'lr','dawn':_0x144a99(0x1bf),'dusk':_0x144a99(0x1bf),'midnight':_0x144a99(0x1bf),'special':null};static[_0x144a99(0x18c)](_0x3f0709,{isStrict:isStrict=!![]}={}){const _0x59e0ef=_0x144a99;if(isStrict&&!this[_0x59e0ef(0x1cc)][_0x3f0709])return null;return Parser[_0x59e0ef(0x174)](this[_0x59e0ef(0x1cc)],_0x3f0709);}}UtilDataConverter[_0x144a99(0x17f)]=MiscUtil[_0x144a99(0x167)]({'isNoModification':!![],'keyBlacklist':MiscUtil[_0x144a99(0x180)]}),UtilDataConverter[_0x144a99(0x172)]=MiscUtil['getWalker']({'keyBlacklist':MiscUtil['GENERIC_WALKER_ENTRIES_KEY_BLACKLIST']}),UtilDataConverter['SOURCE_PAGE_PREFIX']='\x20pg.\x20',UtilDataConverter['_SOURCE_PAGE_PREFIX_RE']=new RegExp(UtilDataConverter[_0x144a99(0x154)]+_0x144a99(0x1be)),UtilDataConverter['_LINK_TAG_METAS']=null,UtilDataConverter[_0x144a99(0x1c8)]=[_0x144a99(0x1b7),_0x144a99(0x151),'flail|phb',_0x144a99(0x1c0),'greataxe|phb',_0x144a99(0x177),_0x144a99(0x1b5),_0x144a99(0x183),_0x144a99(0x153),_0x144a99(0x150),'longbow|phb',_0x144a99(0x1ac),'maul|phb',_0x144a99(0x15b),_0x144a99(0x162),'pike|phb','rapier|phb','scimitar|phb',_0x144a99(0x158),'trident|phb','war\x20pick|phb',_0x144a99(0x15e),'whip|phb'],UtilDataConverter[_0x144a99(0x16e)]=[_0x144a99(0x1a7),_0x144a99(0x185),_0x144a99(0x1b0),_0x144a99(0x157),_0x144a99(0x1c6),_0x144a99(0x149),_0x144a99(0x196),_0x144a99(0x195),'mace|phb',_0x144a99(0x1b6),_0x144a99(0x1ba),_0x144a99(0x189),_0x144a99(0x1ae),_0x144a99(0x14d)],UtilDataConverter[_0x144a99(0x1b1)]={'full':[[0x2,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x3,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x4,0x2,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x4,0x3,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x4,0x3,0x2,0x0,0x0,0x0,0x0,0x0,0x0],[0x4,0x3,0x3,0x0,0x0,0x0,0x0,0x0,0x0],[0x4,0x3,0x3,0x1,0x0,0x0,0x0,0x0,0x0],[0x4,0x3,0x3,0x2,0x0,0x0,0x0,0x0,0x0],[0x4,0x3,0x3,0x3,0x1,0x0,0x0,0x0,0x0],[0x4,0x3,0x3,0x3,0x2,0x0,0x0,0x0,0x0],[0x4,0x3,0x3,0x3,0x2,0x1,0x0,0x0,0x0],[0x4,0x3,0x3,0x3,0x2,0x1,0x0,0x0,0x0],[0x4,0x3,0x3,0x3,0x2,0x1,0x1,0x0,0x0],[0x4,0x3,0x3,0x3,0x2,0x1,0x1,0x0,0x0],[0x4,0x3,0x3,0x3,0x2,0x1,0x1,0x1,0x0],[0x4,0x3,0x3,0x3,0x2,0x1,0x1,0x1,0x0],[0x4,0x3,0x3,0x3,0x2,0x1,0x1,0x1,0x1],[0x4,0x3,0x3,0x3,0x3,0x1,0x1,0x1,0x1],[0x4,0x3,0x3,0x3,0x3,0x2,0x1,0x1,0x1],[0x4,0x3,0x3,0x3,0x3,0x2,0x2,0x1,0x1]],'artificer':[[0x2,0x0,0x0,0x0,0x0],[0x2,0x0,0x0,0x0,0x0],[0x3,0x0,0x0,0x0,0x0],[0x3,0x0,0x0,0x0,0x0],[0x4,0x2,0x0,0x0,0x0],[0x4,0x2,0x0,0x0,0x0],[0x4,0x3,0x0,0x0,0x0],[0x4,0x3,0x0,0x0,0x0],[0x4,0x3,0x2,0x0,0x0],[0x4,0x3,0x2,0x0,0x0],[0x4,0x3,0x3,0x0,0x0],[0x4,0x3,0x3,0x0,0x0],[0x4,0x3,0x3,0x1,0x0],[0x4,0x3,0x3,0x1,0x0],[0x4,0x3,0x3,0x2,0x0],[0x4,0x3,0x3,0x2,0x0],[0x4,0x3,0x3,0x3,0x1],[0x4,0x3,0x3,0x3,0x1],[0x4,0x3,0x3,0x3,0x2],[0x4,0x3,0x3,0x3,0x2]],'1/2':[[0x0,0x0,0x0,0x0,0x0],[0x2,0x0,0x0,0x0,0x0],[0x3,0x0,0x0,0x0,0x0],[0x3,0x0,0x0,0x0,0x0],[0x4,0x2,0x0,0x0,0x0],[0x4,0x2,0x0,0x0,0x0],[0x4,0x3,0x0,0x0,0x0],[0x4,0x3,0x0,0x0,0x0],[0x4,0x3,0x2,0x0,0x0],[0x4,0x3,0x2,0x0,0x0],[0x4,0x3,0x3,0x0,0x0],[0x4,0x3,0x3,0x0,0x0],[0x4,0x3,0x3,0x1,0x0],[0x4,0x3,0x3,0x1,0x0],[0x4,0x3,0x3,0x2,0x0],[0x4,0x3,0x3,0x2,0x0],[0x4,0x3,0x3,0x3,0x1],[0x4,0x3,0x3,0x3,0x1],[0x4,0x3,0x3,0x3,0x2],[0x4,0x3,0x3,0x3,0x2]],'1/3':[[0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0],[0x2,0x0,0x0,0x0],[0x3,0x0,0x0,0x0],[0x3,0x0,0x0,0x0],[0x3,0x0,0x0,0x0],[0x4,0x2,0x0,0x0],[0x4,0x2,0x0,0x0],[0x4,0x2,0x0,0x0],[0x4,0x3,0x0,0x0],[0x4,0x3,0x0,0x0],[0x4,0x3,0x0,0x0],[0x4,0x3,0x2,0x0],[0x4,0x3,0x2,0x0],[0x4,0x3,0x2,0x0],[0x4,0x3,0x3,0x0],[0x4,0x3,0x3,0x0],[0x4,0x3,0x3,0x0],[0x4,0x3,0x3,0x1],[0x4,0x3,0x3,0x1]],'pact':[[0x1,0x0,0x0,0x0,0x0],[0x2,0x0,0x0,0x0,0x0],[0x0,0x2,0x0,0x0,0x0],[0x0,0x2,0x0,0x0,0x0],[0x0,0x0,0x2,0x0,0x0],[0x0,0x0,0x2,0x0,0x0],[0x0,0x0,0x0,0x2,0x0],[0x0,0x0,0x0,0x2,0x0],[0x0,0x0,0x0,0x0,0x2],[0x0,0x0,0x0,0x0,0x2],[0x0,0x0,0x0,0x0,0x3],[0x0,0x0,0x0,0x0,0x3],[0x0,0x0,0x0,0x0,0x3],[0x0,0x0,0x0,0x0,0x3],[0x0,0x0,0x0,0x0,0x3],[0x0,0x0,0x0,0x0,0x3],[0x0,0x0,0x0,0x0,0x4],[0x0,0x0,0x0,0x0,0x4],[0x0,0x0,0x0,0x0,0x4],[0x0,0x0,0x0,0x0,0x4]]};function _0x17fa(_0x480ee0,_0x43f42a){const _0xecb2a8=_0xecb2();return _0x17fa=function(_0x17fa8a,_0x5168dc){_0x17fa8a=_0x17fa8a-0x143;let _0x55cc57=_0xecb2a8[_0x17fa8a];return _0x55cc57;},_0x17fa(_0x480ee0,_0x43f42a);}export{UtilDataConverter};function _0xecb2(){const _0x34f924=['211nqiLOX','_allClasses','import','light\x20hammer|phb','light\x20crossbow|phb','link_attributesHover','getSourceWithPagePart','PG_ITEMS','startsWith','URL_TO_HASH_BUILDER','catch','_replaceEntityLinks_getReplacement','7RSFrjQ','walk','includes','keys','hover','isSaveImagesToServer','removePlugin','toLowerCase','isAddPageNumberToSource','club|phb','then','179925RPGyfC','join','simple','longsword|phb','lastIndex','sling|phb','full','dart|phb','CASTER_TYPE_TO_PROGRESSION','class','@ActorEmbeddedItem[','1763604mdCAuj','halberd|phb','quarterstaff|phb','battleaxe|phb','_pGetWithDescriptionPlugins_getTagItemId','TAG_TO_DEFAULT_SOURCE','shortbow|phb','\x22\x20data-plut-hover-page=\x22','TAG_TO_PAGE','subclass','\x5cd+','day','glaive|phb','2628580HLglTV','13498Xodwck','getImageSavedToServerUrl','flags','splitTagByPipe','handaxe|phb','isAddSourceToName','WEAPONS_MARTIAL','sourceJsonToAbv','12lzJMTW','map','_RECHARGE_TYPES','pGetWithDescriptionPlugins','CHAR_MAX_LEVEL','getPsiPointTotal','getFromCache','text','href','javelin|phb','splitByTags','data','get','spear|phb','exec','pSaveImageToServerAndGetUrl','lance|phb','blowgun|phb','type','heavy\x20crossbow|phb','SOURCE_PAGE_PREFIX','isStrictMatching','source','greatclub|phb','shortsword|phb','image_urlPostProcess','stripTags','morningstar|phb','Variant:\x20','slice','warhammer|phb','\x22\x20data-plut-hover-source=\x22','string_tag','page','net|phb','variant','_getConvertedTagLinkString','isPageSourceCached','name','getWalker','16apNnpw','filter','length','phb','getConvertedTagLinkEntries','338553ZDGNuq','WEAPONS_SIMPLE','last','49652CArwPs','image_urlThumbnailPostProcess','WALKER_GENERIC','getItemSource','_parse_aToB','pGetClassItemClassAndSubclass','_allSubclasses','greatsword|phb','_getConvertedTagLinkEntries_recurse','^{@','291YXDaCK','22xuroIj','copy','isCached','pAddBrewData','WALKER_READONLY_GENERIC','GENERIC_WALKER_ENTRIES_KEY_BLACKLIST','_LINK_TAG_METAS','weaponCategory','hand\x20crossbow|phb','loadJSON','dagger|phb','split','getSpellPointTotal','41118428NQLkbU','sickle|phb','MODULE_NAME_FAKE','_pReplaceEntityLinks_pReplace','getFvttUsesPer','replace','_pGetWithDescriptionPlugins_fnPlugin','addPlugin','trim','getNameWithSourcePart'];_0xecb2=function(){return _0x34f924;};return _0xecb2();}