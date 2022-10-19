const fs = require('fs');
const testRuner = require('./lib/testRunner.js');
const customAssert = require('./lib/customAssert.js');



testRuner.suite('Check if all folder and file are avaliable', function () {

    testRuner.test('Check accout type are avaliable', function () {

        const test_dir_src = '../src/test_scenarious';
        const scenarioDirList = fs.readdirSync(test_dir_src)

        customAssert.isTrue(scenarioDirList.includes('normal'), 'Normal directory is Not avaliable');
        customAssert.isTrue(scenarioDirList.includes('restricted'), 'Restricted directory is Not avaliable');
        customAssert.isTrue(scenarioDirList.includes('vip'), 'Vip directory is Not avaliable');

    });

    testRuner.test('Check if NORMAL account type countent is avaliable', function () {
        const test_Normal_dir_src = '../src/test_scenarious/normal';
        const accoutNormalContent = fs.readdirSync(test_Normal_dir_src);

        customAssert.isTrue(accoutNormalContent.includes('ida4fnorm234Wfn'), 'Normal userId directory is Not avaliable');
        customAssert.isTrue(accoutNormalContent.includes('config.json'), 'JSON file is Not avaliable')
    });

    testRuner.test('Check if RESTRICTED account type countent is avaliable', function () {
        const test_Rest_dir_src = '../src/test_scenarious/restricted';
        const accoutRestrictedContent = fs.readdirSync(test_Rest_dir_src);

        customAssert.isTrue(accoutRestrictedContent.includes('id34545rest4332p'), 'Restricted user directory is Not avaliable');
        customAssert.isTrue(accoutRestrictedContent.includes('config.json'), 'JSON file is Not avaliable')

    });

    testRuner.test('Check if VIP account type countent is avaliable', function () {
        const test_Vip_dir_src = '../src/test_scenarious/vip';
        const accoutVipContent = fs.readdirSync(test_Vip_dir_src);

        customAssert.isTrue(accoutVipContent.includes('id3455vip789'), 'Restricted user directory is Not avaliable');
        customAssert.isTrue(accoutVipContent.includes('config.json'), 'JSON file is Not avaliable')

    })

});


testRuner.suite('Chesck if all account type (normal, restricted and vip) userID files are avaliable', function () {

    testRuner.test('Check if normal account type userID files are avaliable', function () {

        const normal_User_Id_Dir = '../src/test_scenarious/normal/ida4fnorm234Wfn';
        const userIdcontent = fs.readdirSync(`${normal_User_Id_Dir}`);

        customAssert.isTrue(userIdcontent.includes('friends')), 'friends file is not avaliable';
        customAssert.isTrue(userIdcontent.includes('photos')), 'photos file is not avaliable';
        customAssert.isTrue(userIdcontent.includes('videos')), 'videos file is not avaliable';
    });

    testRuner.test('Check if restricted account type userID files are avaliable', function () {

        const restricted_User_Id_Dir = '../src/test_scenarious/restricted/id34545rest4332p';
        const userIdcontent = fs.readdirSync(`${restricted_User_Id_Dir}`);

        customAssert.isTrue(userIdcontent.includes("friends")), 'friends file is not avaliable';
        customAssert.isTrue(userIdcontent.includes('photos')), 'photos file is not avaliable';
        customAssert.isTrue(userIdcontent.includes('videos')), 'videos file is not avaliable';
    });

    testRuner.test('Check if vip account type userID files are avaliable', function () {

        const vip_User_Id_Dir = '../src/test_scenarious/vip/id3455vip789';
        const userIdcontent = fs.readdirSync(`${vip_User_Id_Dir}`);

        customAssert.isTrue(userIdcontent.includes('friends')), 'friends file is not avaliable';
        customAssert.isTrue(userIdcontent.includes('photos')), 'photos file is not avaliable';
        customAssert.isTrue(userIdcontent.includes('videos')), 'videos file is not avaliable';
    });
})

testRuner.suite('Chesck if all account type user files are whith correct content', function () {

    testRuner.suite('Check if Vip account type userID files are whith correct content', function () {

        testRuner.test('Check if Vip account type user Friends file is whith correct content ', function () {

            const test_dir_src = '../src/test_scenarious/vip/id3455vip789';
            const vipFriendAccount = fs.readFileSync(`${test_dir_src}\\friends`);

            customAssert.isEvenNumber(vipFriendAccount, 'Vip account friend file should be have only even number countent ')
        });

    });

    testRuner.suite('Check if Norma user account Friend, Photos and Videos are whith correct content', function () {

        testRuner.test('Check if Normal account type user Friends file is whith correct content', function () {

            const test_dir_src = '../src/test_scenarious/normal/ida4fnorm234Wfn';
            const normalFriendContent = fs.readFileSync(`${test_dir_src}\\friends`);

            customAssert.baundaryCheck(normalFriendContent, '150', 'Normal account must be have max 150 number of friends');


        });

        testRuner.test('Check if normal account type user Photos file are whith correct content', function () {

            const test_dir_src = '../src/test_scenarious/normal/ida4fnorm234Wfn';
            const normalPhotosContent = fs.readFileSync(`${test_dir_src}\\photos`);

            customAssert.baundaryCheck(normalPhotosContent, '150', 'Normal account must be have max 150 number of photos');

        });

        testRuner.test('Check if normal account type user Videos file are whith correct content', function () {

            const test_dir_src = '../src/test_scenarious/normal/ida4fnorm234Wfn';
            const normalVideosContent = fs.readFileSync(`${test_dir_src}\\photos`);

            customAssert.baundaryCheck(normalVideosContent, '50', 'Normal account must be have max 150 number of photos');


        });
    });

    testRuner.suite('Check if Restricted user account Friend, Photos and Videos files are whith correct content', function () {

        testRuner.test('Check if Restricted account type user Friends file is whith correct content', function () {

            const test_dir_src = '../src/test_scenarious/restricted/id34545rest4332p';
            const friendContent = fs.readFileSync(`${test_dir_src}\\friends`);

            customAssert.baundaryCheck(friendContent, '50', 'Restricted account shoud be have max 50 number of friends');

        });

        testRuner.test('Check if Restricted account type user Photos file is whith correct content', function () {

            const test_dir_src = '../src/test_scenarious/restricted/id34545rest4332p';
            const photoContent = fs.readFileSync(`${test_dir_src}\\photos`);

            customAssert.baundaryCheck(photoContent, '0', 'Restricted account shoud not be have any photos');

        });

        testRuner.test('Check if Restricted account type user Videos file is whith correct content', function () {

            const test_dir_src = '../src/test_scenarious/restricted/id34545rest4332p';
            const photoContent = fs.readFileSync(`${test_dir_src}\\videos`);

            customAssert.baundaryCheck(photoContent, '0', 'Restricted account shoud not be have any videos');

        });
    });

    testRuner.suite('Check if JSON file content is correct according to accout type ', function () {

        testRuner.test('Check if Normal account json file content is correct', function () {

            const test_dir_src = '../src/test_scenarious/normal';
            const fileData = fs.readFileSync(`${test_dir_src}\\config.json`);
            const jsObject = JSON.parse(fileData)
            const accountType = jsObject.accountType;
            const accoutRestricted = jsObject.isAccountRestricted;

            customAssert.isEqual(accountType, 'NORMAL', 'accountType shoud be NORMAL');
            customAssert.isEqual(accoutRestricted, false, 'isAccountRestricte should be false')
        });

        testRuner.test('Check if Restricted account json file content is correct', function () {

            const test_dir_src = '../src/test_scenarious/restricted';
            const fileData = fs.readFileSync(`${test_dir_src}\\config.json`);
            const jsObject = JSON.parse(fileData)
            const accountType = jsObject.accountType;
            const accoutRestricted = jsObject.isAccountRestricted;

            customAssert.isEqual(accountType, 'RESTRICTED', 'accountType shoud be RESTRICTED');
            customAssert.isEqual(accoutRestricted, true, 'isAccountRestricte should be true');
        });

        testRuner.test('Check if Vip account json file content is correct', function () {

            const test_dir_src = '../src/test_scenarious/vip';
            const fileData = fs.readFileSync(`${test_dir_src}\\config.json`);
            const jsObject = JSON.parse(fileData)
            const accountType = jsObject.accountType;
            const accoutRestricted = jsObject.isAccountRestricted;

            customAssert.isEqual(accountType, 'VIP', 'accountType shoud be VIP');
            customAssert.isEqual(accoutRestricted, false, 'FisAccountRestricte should be false');
        })
    })

});





