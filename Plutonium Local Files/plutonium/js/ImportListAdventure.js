const _0x21f5b7=_0x4b06;function _0x5646(){const _0x516f83=['importAdventure','adventure','_content','monster','DISPLAY_NAME_TYPE_PLURAL','filter','map','169686RjMPKg','942084zPJXve','223786DiSvPt','6iQWYtI','Adventure','otherSources','Import\x20Adventure','_getAdditionalContentForTag','3416WlyxkC','pGetAllCreatures','source','SOURCE_JSON_TO_FULL','registerImpl','some','71829khvGkz','pGetAdventureIndex','11iGIHBw','adventureData','2455xuCQyS','_contentMetadata','10ejdHQr','pGetAdventureJournals','_pGetJournalDatas','_ALL_CREATURES','pPreRender','2433108rDOdyq','Adventures','5502hSeqRh','4NRkgrZ','adventures','1YNHVdE'];_0x5646=function(){return _0x516f83;};return _0x5646();}(function(_0x11f384,_0xce41b2){const _0x59b73b=_0x4b06,_0x5daa4f=_0x11f384();while(!![]){try{const _0xfdbc6f=-parseInt(_0x59b73b(0x103))/0x1*(parseInt(_0x59b73b(0x10d))/0x2)+parseInt(_0x59b73b(0x10b))/0x3*(-parseInt(_0x59b73b(0x101))/0x4)+parseInt(_0x59b73b(0x11d))/0x5*(parseInt(_0x59b73b(0x10e))/0x6)+-parseInt(_0x59b73b(0x126))/0x7*(-parseInt(_0x59b73b(0x113))/0x8)+-parseInt(_0x59b73b(0x119))/0x9*(-parseInt(_0x59b73b(0x11f))/0xa)+-parseInt(_0x59b73b(0x11b))/0xb*(-parseInt(_0x59b73b(0x124))/0xc)+-parseInt(_0x59b73b(0x10c))/0xd;if(_0xfdbc6f===_0xce41b2)break;else _0x5daa4f['push'](_0x5daa4f['shift']());}catch(_0x1e0c46){_0x5daa4f['push'](_0x5daa4f['shift']());}}}(_0x5646,0x4ab0a));import{ImportListAdventureBook}from'./ImportListAdventureBook.js';function _0x4b06(_0x150cea,_0x4ba3ca){const _0x564618=_0x5646();return _0x4b06=function(_0x4b0674,_0x42408b){_0x4b0674=_0x4b0674-0x101;let _0x74ef56=_0x564618[_0x4b0674];return _0x74ef56;},_0x4b06(_0x150cea,_0x4ba3ca);}import{Vetools}from'./Vetools.js';import{DataConverterAdventureBook}from'./DataConverterAdventureBook.js';class ImportListAdventure extends ImportListAdventureBook{static ['ID']='adventures';static [_0x21f5b7(0x108)]=_0x21f5b7(0x125);static ['_']=this[_0x21f5b7(0x117)](this);constructor(_0x1fff15){const _0xd4b15a=_0x21f5b7;super({'title':_0xd4b15a(0x111)},_0x1fff15,{'titleSearch':_0xd4b15a(0x102),'defaultFolderPath':[_0xd4b15a(0x125)],'dirsHomebrew':[_0xd4b15a(0x105)],'namespace':_0xd4b15a(0x105),'isFolderOnly':!![],'configGroup':_0xd4b15a(0x104)},{'fnGetIndex':Vetools[_0xd4b15a(0x11a)]['bind'](Vetools),'dataProp':_0xd4b15a(0x105),'brewDataProp':_0xd4b15a(0x11c),'title':_0xd4b15a(0x10f)});}async[_0x21f5b7(0x123)](..._0x1c8a4c){const _0x10ddcd=_0x21f5b7;await super[_0x10ddcd(0x123)](..._0x1c8a4c);if(ImportListAdventure[_0x10ddcd(0x122)])return;ImportListAdventure[_0x10ddcd(0x122)]=await Vetools[_0x10ddcd(0x114)]();}[_0x21f5b7(0x112)](_0x1ed925){const _0x149a79=_0x21f5b7;if(_0x1ed925!==ImportListAdventureBook['IMPORTABLE_TAG_CREATURE']['tag'])return;const _0x47ad45=this[_0x149a79(0x106)]?.[0x0]?.[_0x149a79(0x11e)]?.['source'];if(!Parser[_0x149a79(0x116)][_0x47ad45])return;return(ImportListAdventure[_0x149a79(0x122)]?.[_0x149a79(0x107)]||[])[_0x149a79(0x109)](_0x50f15a=>{const _0x3ade92=_0x149a79;if(_0x50f15a[_0x3ade92(0x115)]===_0x47ad45)return!![];return _0x50f15a[_0x3ade92(0x110)]&&_0x50f15a[_0x3ade92(0x110)][_0x3ade92(0x118)](_0x1978cb=>_0x1978cb[_0x3ade92(0x115)]===_0x47ad45);})[_0x149a79(0x10a)](_0x5da466=>({'source':_0x5da466[_0x149a79(0x115)],'hash':UrlUtil['URL_TO_HASH_BUILDER'][UrlUtil['PG_BESTIARY']](_0x5da466)}));}[_0x21f5b7(0x121)](){const _0x31036c=_0x21f5b7;return DataConverterAdventureBook[_0x31036c(0x120)](this[_0x31036c(0x106)][0x0]['data'],this['_content'][0x0][_0x31036c(0x11e)],{'isAddPermission':!![]});}}ImportListAdventure[_0x21f5b7(0x122)]=null;export{ImportListAdventure};