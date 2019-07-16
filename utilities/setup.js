const fs = require('fs');
const path = require('path');
try {
    const obj = JSON.parse(fs.readFileSync(path.join(__dirname, '../keys.json'), 'utf8'));
    global.proKeys = obj;
} catch (e) {
    console.log('+++++++++++++++++Enable To Read Keys+++++++++++++++++');
    process.exit();
}
