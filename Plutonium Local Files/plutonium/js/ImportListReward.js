var _0x17c74f=_0x1c09;function _0x1c09(_0x51beea,_0x348070){var _0x1f0894=_0x1f08();return _0x1c09=function(_0x1c0985,_0x50bc9e){_0x1c0985=_0x1c0985-0xd4;var _0x8c0866=_0x1f0894[_0x1c0985];return _0x8c0866;},_0x1c09(_0x51beea,_0x348070);}(function(_0x45cf7b,_0x1e4e2e){var _0x2dba16=_0x1c09,_0x56a7cf=_0x45cf7b();while(!![]){try{var _0x446f5b=-parseInt(_0x2dba16(0xfd))/0x1+parseInt(_0x2dba16(0xec))/0x2+parseInt(_0x2dba16(0x116))/0x3+-parseInt(_0x2dba16(0xe2))/0x4*(-parseInt(_0x2dba16(0xd6))/0x5)+parseInt(_0x2dba16(0x10b))/0x6+-parseInt(_0x2dba16(0xd7))/0x7+-parseInt(_0x2dba16(0x106))/0x8;if(_0x446f5b===_0x1e4e2e)break;else _0x56a7cf['push'](_0x56a7cf['shift']());}catch(_0x27dbc2){_0x56a7cf['push'](_0x56a7cf['shift']());}}}(_0x1f08,0x368f8));import{Vetools}from'./Vetools.js';import{Config}from'./Config.js';function _0x1f08(){var _0x125fac=['_pGetEntityItem','_pHasSideLoadedEffects','Reward','_list','_pGetSources','SRD','type','_pMutActorUpdateFeature','absorbFnBindListenersRadio','550850WNiCXu','Source','_activateListeners_absorbListItems','Upload\x20File','Import\x20Supernatural\x20Gifts\x20and\x20Rewards','source','absorbFnBindListeners','with','registerImpl','items','_pGetSourcesHomebrew','isStreamerMode','text-center','DISPLAY_NAME_TYPE_PLURAL','Select\x20Supernatural\x20Gift\x20or\x20Reward','reward','sourceJsonToColor','270117jROcAT','_pGetSideData','DataSourceUrl','_pImportEntry_pImportToDirectoryGeneric_pGetImportableData','name','absorbFnGetData','5etools','SOURCE_TYP_OFFICIAL_ALL','pGetInitRewardFeatureLoadeds','3258832oSUkwR','_actor','pMutActorUpdateReward','pGetRewardItemEffects','Select','2129448VMGbwq','SOURCE_TYP_CUSTOM','rewards','pGetSideLoadedMatch','supernatural\x20gifts\x20and\x20rewards','_content','getData','map','_initCreateSheetItemHook','sourceLong','pHasRewardSideLoadedEffects','91449ahpaSM','DataSourceFile','mutateForFilters','1605eFCysc','986244wqORZQ','_pGetDereferencedFeatureItem','_pageFilter','Supernatural\x20Gifts\x20and\x20Rewards','sourceShort','sourceStyle','_pGetItemEffects','_page','doAbsorbItems','supernatural\x20gift/reward','pGetRewardItem','4748ENMKZb'];_0x1f08=function(){return _0x125fac;};return _0x1f08();}import{UtilList2}from'./UtilList2.js';import{UtilDataSource}from'./UtilDataSource.js';import{DataConverterReward}from'./DataConverterReward.js';import{ImportListFeature}from'./ImportListFeature.js';import{MixinUserChooseImporter}from'./ImportList.js';class ImportListReward extends ImportListFeature{static ['ID']=_0x17c74f(0x10d);static [_0x17c74f(0xf9)]='Supernatural\x20Gifts\x20&\x20Rewards';static ['_']=this[_0x17c74f(0xf4)](this);static['init'](){var _0x2a5c03=_0x17c74f;this[_0x2a5c03(0x113)]({'prop':_0x2a5c03(0xfb),'importerName':_0x2a5c03(0xe5)});}constructor(_0x10205d={},_0x4576f5={},_0x5cb31f={}){var _0x57dcdc=_0x17c74f;super({'title':_0x57dcdc(0xf0),..._0x4576f5},_0x10205d,{'props':['reward'],'dirsHomebrew':['reward'],'titleSearch':_0x57dcdc(0x10f),'sidebarTab':_0x57dcdc(0xf5),'gameProp':_0x57dcdc(0xf5),'defaultFolderPath':[_0x57dcdc(0xda)],'pageFilter':new PageFilterRewards(),'page':UrlUtil['PG_REWARDS'],'isPreviewable':!![],'isDedupable':!![],'configGroup':'importReward',..._0x5cb31f},{'titleLog':_0x57dcdc(0xe0)});}async[_0x17c74f(0xe7)](){var _0x5b17a6=_0x17c74f;return[new UtilDataSource['DataSourceUrl'](Config['get']('ui',_0x5b17a6(0xf7))?_0x5b17a6(0xe8):_0x5b17a6(0x103),Vetools['DATA_URL_REWARDS'],{'filterTypes':[UtilDataSource[_0x5b17a6(0x104)]],'isDefault':!![]}),new UtilDataSource[(_0x5b17a6(0xff))]('Custom\x20URL','',{'filterTypes':[UtilDataSource['SOURCE_TYP_CUSTOM']]}),new UtilDataSource[(_0x5b17a6(0xd4))](_0x5b17a6(0xef),{'filterTypes':[UtilDataSource[_0x5b17a6(0x10c)]]}),...await this[_0x5b17a6(0xf6)]()];}[_0x17c74f(0x111)](){var _0x4daa0a=_0x17c74f;return{...super[_0x4daa0a(0x111)](),'cols':[{'name':'Type','width':0x2,'field':'type','rowClassName':_0x4daa0a(0xf8)},{'name':'Name','width':0x7,'field':'name'},{'name':_0x4daa0a(0xed),'width':0x2,'field':_0x4daa0a(0xf1),'titleProp':_0x4daa0a(0x114),'displayProp':_0x4daa0a(0xdb),'classNameProp':'sourceClassName','styleProp':_0x4daa0a(0xdc),'rowClassName':_0x4daa0a(0xf8)}],'rows':this[_0x4daa0a(0x110)][_0x4daa0a(0x112)]((_0x43698d,_0x7a6317)=>{var _0x4d8461=_0x4daa0a;return this[_0x4d8461(0xd9)]['constructor'][_0x4d8461(0xd5)](_0x43698d),{'name':_0x43698d[_0x4d8461(0x101)],'type':_0x43698d[_0x4d8461(0xe9)],'source':_0x43698d['source'],'sourceShort':Parser['sourceJsonToAbv'](_0x43698d[_0x4d8461(0xf1)]),'sourceLong':Parser['sourceJsonToFull'](_0x43698d[_0x4d8461(0xf1)]),'sourceClassName':Parser[_0x4d8461(0xfc)](_0x43698d[_0x4d8461(0xf1)]),'sourceStyle':BrewUtil['sourceJsonToStylePart'](_0x43698d[_0x4d8461(0xf1)]),'ix':_0x7a6317};})};}[_0x17c74f(0xee)](){var _0x2454ed=_0x17c74f;this[_0x2454ed(0xe6)][_0x2454ed(0xdf)](this[_0x2454ed(0x110)],{'fnGetName':_0x42ef66=>_0x42ef66[_0x2454ed(0x101)],'fnGetValues':_0x4b80f3=>({'source':_0x4b80f3[_0x2454ed(0xf1)],'type':_0x4b80f3[_0x2454ed(0xe9)],'hash':UrlUtil['URL_TO_HASH_BUILDER'][this[_0x2454ed(0xde)]](_0x4b80f3)}),'fnGetData':UtilList2[_0x2454ed(0x102)],'fnBindListeners':_0x1b353b=>this['_isRadio']?UtilList2[_0x2454ed(0xeb)](this[_0x2454ed(0xe6)],_0x1b353b):UtilList2[_0x2454ed(0xf2)](this[_0x2454ed(0xe6)],_0x1b353b)});}static async[_0x17c74f(0xe3)](_0x4ee255,_0x3d4e06){var _0x5fb2b7=_0x17c74f;return DataConverterReward[_0x5fb2b7(0xe1)](_0x3d4e06,{'actor':_0x4ee255});}static async[_0x17c74f(0xfe)](_0x221b35,_0xd3900b){var _0x2c9c7d=_0x17c74f;return DataConverterReward[_0x2c9c7d(0x10e)](_0xd3900b);}static async[_0x17c74f(0xe4)](_0x6a2f53,_0x1321f3){var _0x1e2d8c=_0x17c74f;return DataConverterReward[_0x1e2d8c(0x115)](_0x6a2f53,_0x1321f3);}static async[_0x17c74f(0xdd)](_0x537022,_0x9f126,_0x4efc03,_0x504733){var _0x88570d=_0x17c74f;return DataConverterReward[_0x88570d(0x109)](_0x537022,_0x9f126,_0x4efc03);}async[_0x17c74f(0xea)](_0xc9eea1,_0xb48322,_0x183ec3){var _0x4df507=_0x17c74f;await DataConverterReward[_0x4df507(0x108)](this[_0x4df507(0x107)],_0xb48322,_0xc9eea1,_0x183ec3);}[_0x17c74f(0x100)](_0x31ec3a,_0x216fdd){var _0x273f76=_0x17c74f;return DataConverterReward[_0x273f76(0xe1)](_0x31ec3a,_0x216fdd);}static async[_0x17c74f(0xd8)](_0x5be837){return DataConverterReward['pGetDereferencedRewardFeatureItem'](_0x5be837);}static async['_pGetInitFeatureLoadeds'](_0x2f6351,{actor:_0x4c30a2}={}){var _0x2947fa=_0x17c74f;return DataConverterReward[_0x2947fa(0x105)](_0x2f6351,{'actor':_0x4c30a2});}}ImportListReward['UserChoose']=class extends MiscUtil['mix'](ImportListReward)[_0x17c74f(0xf3)](MixinUserChooseImporter){constructor(_0x89dff7){var _0x481d79=_0x17c74f;super(_0x89dff7,{'title':_0x481d79(0xfa)},{'titleButtonRun':_0x481d79(0x10a)});}};export{ImportListReward};