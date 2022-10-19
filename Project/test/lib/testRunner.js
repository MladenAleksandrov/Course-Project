const chalk = require('chalk')


function suite(name, callback) {

    console.log(`Suite ${chalk.blueBright(name)}`);
    console.group();
    callback();
    console.groupEnd();
}

function test(name, callback) {

    try {
        callback();
        console.log(`Test ✔️ ${chalk.green(name)}`);
    }
    catch (error) {

        const messageIcon = (error.name == 'assertError') ? 'System' :'AssertError' ;

        console.log(`Test ❌ ${chalk.red(name)}`);
        console.log(`${messageIcon} ${chalk.grey(error.message)}`);
    }
   
    
}

module.exports = {
    suite, test
}