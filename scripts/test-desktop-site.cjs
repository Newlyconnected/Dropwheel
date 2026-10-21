const assert=require('node:assert/strict');const {assetFor,assetName}=require('../docs/assets/desktop.js');
assert.equal(assetName('Windows'),'dropwheel-v1.5.0-win-x64.exe');assert.equal(assetName('Linux'),'dropwheel-v1.5.0-linux-x64.tar.gz');
for(const platform of ['Windows','Linux']){
 const name=assetName(platform);
 const asset={name,state:'uploaded',browser_download_url:'https://github.com/Newlyconnected/Dropwheel/releases/download/desktop-v1.5.0/'+name};
 const release={tag_name:'desktop-v1.5.0',draft:false,prerelease:false,assets:[asset]};
 assert.equal(assetFor(release,platform),asset);assert.equal(assetFor({...release,draft:true},platform),null);assert.equal(assetFor({...release,tag_name:'v0.1.9'},platform),null);assert.equal(assetFor({...release,assets:[{...asset,browser_download_url:'https://evil.example/a'}]},platform),null);
}
assert.equal(assetFor(null,'Windows'),null);assert.equal(assetFor({},'ARM'),null);
console.log('PASS desktop release and exact download URL validation');
