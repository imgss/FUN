
const to = 'D:\\code\\js\\imgss.github.io'
const dist = __dirname + "\\dist"
const fse = require('fs-extra');


(async function() {
    //去掉旧的blog代码
    await fse.remove(to + '\\index.html')
    await fse.remove(to + '\\static')

    //复制新的blog代码
    try{
        await fse.copy(dist + '\\index.html', to + '\\index.html')
    } catch(e){
        console.log('error')
    }
    console.log('copy index.html success!')

    await fse.copy(dist + '\\static', to+ '\\static')
    console.log('copy static success!')
})();



