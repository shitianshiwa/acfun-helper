/**
 * 配置导入导出
 */
class PlayerConfig {
    constructor(){

    }

    PConfProc(){
        chrome.storage.local.get(['SyncPlayerConfigNeed'], function(data){
            let SycnPlayerConfFlag = data.SyncPlayerConfigNeed;
            console.log(SycnPlayerConfFlag);
        if(!SycnPlayerConfFlag){
            let AcGConf={};
            let AcPlayerConfig = localStorage['AcfunH5player::'];
            let AcExPlayerConfig = localStorage['config'];
            let AcPlayHist = localStorage['playHistory'];
            let AcSearchHist = localStorage['searchCache'];
            AcGConf['AcPlayerConfig']=AcPlayerConfig;
            AcGConf['AcExPlayerConfig']=AcExPlayerConfig;
            AcGConf['AcPlayHist']=AcPlayHist;
            AcGConf['AcSearchHist']=AcSearchHist;
            chrome.storage.local.set({AcGConf: AcGConf});
        }else{
            chrome.storage.local.get(['AcGConf'],function(data){
                localStorage.setItem('AcfunH5player::',data.AcGConf.AcPlayerConfig);
                localStorage.setItem('config',data.AcGConf.AcExPlayerConfig);
                localStorage.setItem('playHistory',data.AcGConf.AcPlayHist);
                localStorage.setItem('searchCache',data.AcGConf.AcSearchHist);
            })
            chrome.storage.local.set({SyncPlayerConfigNeed:0});
        }
    });
}
}
