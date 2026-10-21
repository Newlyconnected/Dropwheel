(function(root){
'use strict';
const version='1.5.0',tag='desktop-v'+version,base='https://github.com/Newlyconnected/Dropwheel/releases/download/'+tag+'/';
function assetName(platform){return 'dropwheel-v'+version+'-'+(platform==='Windows'?'win-x64.exe':'linux-x64.tar.gz');}
function assetFor(release,platform){
 if(!release||release.draft||release.tag_name!==tag||!['Windows','Linux'].includes(platform))return null;
 const name=assetName(platform);
 return (release.assets||[]).find(a=>a.name===name&&a.state==='uploaded'&&a.browser_download_url===base+name)||null;
}
if(typeof module!=='undefined'){module.exports={assetFor,assetName};return;}
async function load(){
 const status=document.getElementById('desktop-status');if(!status)return;
 const c=new AbortController(),timer=setTimeout(()=>c.abort(),8000);
 try{
  const response=await fetch('https://api.github.com/repos/Newlyconnected/Dropwheel/releases/tags/'+tag,{signal:c.signal,headers:{Accept:'application/vnd.github+json'}});
  if(!response.ok)throw Error('Not published');const release=await response.json();
  const win=assetFor(release,'Windows'),linux=assetFor(release,'Linux');if(!win||!linux)throw Error('Packages incomplete');
  for(const [id,asset,label] of [['windows-download',win,'Download for Windows x64'],['linux-download',linux,'Download Linux x64 beta']]){
   const a=document.getElementById(id);a.href=asset.browser_download_url;a.textContent=label+' ↓';a.removeAttribute('aria-disabled');
  }
  const current=new URLSearchParams(location.search);status.textContent=current.get('platform')==='desktop'&&current.get('version')===version?'You have Dropwheel '+version+' for Windows/Linux, the version offered here.':'Dropwheel '+version+' for Windows and Linux is available. Installed copies on Windows update from Settings › System.';
 }catch{status.textContent='Windows/Linux downloads are not published yet or could not be checked. Browse releases for the current availability; no unverified download is offered here.';}
 finally{clearTimeout(timer);}
}
load();
})(typeof window!=='undefined'?window:this);
