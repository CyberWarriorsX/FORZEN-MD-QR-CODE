
/*

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                      // 
//                                                                                                      // 
//                                         Ｖ：１．０．１                                                 // 
//                                                        
//
//           SAKURA MD
//           
//
//  
// 
//                                                  
//                                                                                                    
//                                                         
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : SAKURA-MD
   * @author : SalmanYtOfficial
   * @youtube : https://www.youtube.com/@YASIYA_YT
   * @description : Get baileys qr, where session id Converted into 'base64'. You can change it According to your needs.
   * @version 1.0.0
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By DARK YASIYA X TEAM.
   * © 2023 SAKURA MD
*/

const fs   = require("fs-extra");
const pino = require("pino");
let qrcode = require("qrcode-terminal");


if (fs.existsSync('./auth_info_baileys')) {
  fs.emptyDirSync(__dirname + '/auth_info_baileys');
  require('child_process').exec('rm -rf auth_info_baileys')
  console.log('\nPlease Wait... Removing Cache files');
  setTimeout(() => {   console.log(' ')    }, 100);
  setTimeout(() => {   console.log('Q')    }, 300);
  setTimeout(() => {   console.log('R')    }, 500);
  setTimeout(() => {   console.log(' ')    }, 700);
  setTimeout(() => {   console.log('B')    }, 900);
  setTimeout(() => {   console.log('Y')    }, 1100);
  setTimeout(() => {   console.log(' ')    }, 1300);
  setTimeout(() => {   console.log('F')    }, 1500);
  setTimeout(() => {   console.log('O')    }, 1700);
  setTimeout(() => {   console.log('R')    }, 1900);
  setTimeout(() => {   console.log('Z')    }, 2100);
  setTimeout(() => {   console.log('E')    }, 2300);
  setTimeout(() => {   console.log('N')    }, 2500);
  setTimeout(() => {   console.log(' ')    }, 2700);
  setTimeout(() => {   console.log('M')    }, 2900);
  setTimeout(() => {   console.log('D')    }, 3000);
  setTimeout(() => {   console.log('Cache Cleared..!\nRun The Script Again')    }, 3200);
  setTimeout(() => {   process.exit()      }, 3400)
};
setTimeout(() => {
  const { default: makeWASocket, useMultiFileAuthState, Browsers, delay, makeInMemoryStore, } = require("@sampandey001/baileys");
  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
  async function sᴜʜᴀɪʟ_ʙᴀɪʟᴇʏs_ǫʀ() {
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys')
    try {
      let session = makeWASocket({ printQRInTerminal: true, logger: pino({ level: "silent" }), browser: Browsers.macOS("Desktop"), auth: state });
      session.ev.on("connection.update", async (s) => {
        const { connection, lastDisconnect, qr } = s;
        if (connection == "open")
        {
          await delay(500);
          let user = session.user.id;         // User = Number of that user who just Scanned the Qr

//===========================================================================================
//===============================  SESSION ID   =============================================
//===========================================================================================
          let unique = fs.readFileSync(__dirname + '/auth_info_baileys/creds.json') //GETTING CREDS FROM CREDS.json TO GENERATE SESSION ID 
          c = Buffer.from(unique).toString('base64'); // CHANGE 'base64' ACCORDING TO YOUR NEEDS 
          console.log(`
====================  SESSION ID  ===========================                   
SESSION-ID ==> ${c}\n\n
Don't provide your SESSION_ID to anyone otherwise that user can access your account.
Thanks.
-------------------  SESSION CLOSED   -----------------------
`)   

let cc = `╔════✪
║『 ᴛʜᴀɴᴋ ꜰʀᴏ ʏᴏᴜ ᴄʜᴏᴏꜱɪɴɢ ғᴏʀᴢᴇɴ ᴍᴅ 』
║ You complete first step to making Bot.
╚════════════════════════╝
╔═════✪
╎  【 ғᴏʀᴢᴇɴ ꜱɪꜱꜱɪᴏɴ ᴄᴏᴅᴇ  】

┋🥷*Repo* : [  https://github.com/yasiyaofc1/FORZEN-MD]

┋🥷*Owner* : [ https://wa.me/94760018802 ]

┋🥷*Support*  : [ https://chat.whatsapp.com/L2i6oDCjljt4mtBTUvTh7t]

┋🥷*Note* :ᴅᴏɴ'ᴛ ᴘʀᴏᴠɪᴅᴇ ʏᴏᴜʀ ꜱᴇꜱꜱɪᴏɴ ɪᴅ

 ❄️ ғᴏʀᴢᴇɴ ᴍᴅ ❄️
 💃🏼 ᴅᴇᴠᴀʟᴏᴘᴇʀ ʙʏ ᴅᴀʀᴋ ʏᴀsɪʏᴀ x ᴛᴇᴀᴍ 💃🏼
╚════════════════════════╝
`;
          let session_id = await session.sendMessage(user, { text: "FORZEN-MD;;;"+ c });
   //SENDING 'base64' SESSION ID TO USER NUMBER
          await session.sendMessage(user, { text: cc } , { quoted : session_id });
          await require('child_process').exec('rm -rf auth_info_baileys')     //CLEAR 'auth_info_baileys' SO THAT NEXT TIME IT CLEARED FOR SCANNING
          process.exit(1)   // STOPPING PROCESS AFTER GETTING SESSION ID
        }
        session.ev.on('creds.update', saveCreds)
       if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) { sᴜʜᴀɪʟ_ʙᴀɪʟᴇʏs_ǫʀ(); } // IF ANY ERROR< THEN PRINT QR AGAIN
      });
    } catch (err) {console.log(err);await require('child_process').exec('rm -rf auth_info_baileys');process.exit(1);}
  }
  sᴜʜᴀɪʟ_ʙᴀɪʟᴇʏs_ǫʀ();
}, 3000)
