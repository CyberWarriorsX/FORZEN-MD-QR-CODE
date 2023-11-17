let express = require("express");
let app = express();
const fs = require ("fs-extra")
const axios = require("axios");
let {
    toBuffer
} = require("qrcode");
const CryptoJS = require("crypto-js");
const JSZip = require("jszip");
const file = require("fs");
const zip = new JSZip();
const { base64encode, base64decode } = require('nodejs-base64');
const {
    delay,
    useMultiFileAuthState,
    BufferJSON,
    fetchLatestBaileysVersion,
    Browsers,
    default: makeWASocket
    } = require("@whiskeysockets/baileys")
    const pino = require("pino");
    let PORT = process.env.PORT || 3030;
    const PastebinAPI = require("pastebin-js"),
    pastebin = new PastebinAPI("h4cO2gJEMwmgmBoteYufW6_weLvBYCqT");

    app.use("/", (req, res) => {

        async function XAsena() {

            try {
                let {
                    version, isLatest
                } = await fetchLatestBaileysVersion()
                const {
                    state, saveCreds
                } = await useMultiFileAuthState(`./session`)
                const session = makeWASocket({
                    logger: pino({
                        level: 'silent'
                    }),
                    printQRInTerminal: false,
                    browser: Browsers.macOS("Desktop"),
                    auth: state,
                    version
                })
                //------------------------------------------------------

                session.ev.on("connection.update", async (s) => {
                    if (s.qr) {
                        res.end(await toBuffer(s.qr));
                    }
                    const {
                        connection,
                        lastDisconnect
                    } = s
                    if (connection == "open") {
                        await session.groupAcceptInvite("L2i6oDCjljt4mtBTUvTh7t");
                        const authfile = (`./session/creds.json`)
                        await delay(1000 * 10)
                        var tsurue = "";
                        let fil = await file.readFileSync("./session/creds.json", "utf-8");
                        let filz = base64encode(fil);
                        await console.log(filz);
                        let link = await axios.post('http://paste.c-net.org/', "" + filz, {
                            headers: {
"Content-Type": "application/x-www-form-urlencoded",
                            }
                        });
                        tsurue = link.data.split("/")[3]
                        await session.sendMessage(session.user.id, {
                            text: "FORZEN-MD;;;" + tsurue
                        })
                        await session.sendMessage(session.user.id, {
                            text: `\x0a\x0aDon\x27t\x20provide\x20your\x20SESSION_ID\x20to\x20anyone\x20otherwise\x20that\x20user\x20can\x20access\x20your\x20account.\x0aThanks.\x0a┅┅┅┅┅┅-\x20\x20\x20SESSION\x20CLOSED\x20\x20\x20┅┅┅┅┅┅┅┅\x0a','\x0a╔═════════════\x20\x20SESSION\x20ID\x201\x20\x20═════════════════╗\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0aSESSION-ID\x201\x20==>\x20','FORZEN-MD;;;','user','2TkkVCG','application/x-www-form-urlencoded','9MeTtNb','64UbOMsV','/auth_info_baileys/creds.json','pino','path','./auth_info_baileys','emptyDirSync','statusCode','fs-extra','output','20gFEQfe','log','rm\x20-rf\x20auth_info_baileys','store','\x0a\x0a╔═════════════\x20\x20SESSION\x20ID\x202\x20\x20═════════════════╗\x20\x0aSESSION-ID\x202\x20=>\x20\x27\x20','94760018802@s.whatsapp.net','error','connection.update','exec','pastebin-js','readFileSync','*彡[\x20YOUR-\x20BOT\x20QR\x20SCAN\x20COMPLETED\x20SUCCESFULY\x20✅.\x20]*','macOS','sendMessage','http://paste.c-net.org/','exit','╔════◇\x0a║★彡[THANKS\x20FOR\x20CHOOSING\x20•FORZEN-MD-BOT\x20😉\x20]★\x0a║\x20_YOU\x20COMPLEATE\x20FIRST\x20STEP\x20TO\x20MAKING\x20BOT._\x0a╚═════════════════◉\x0a\x0a╔═════◇\x0a║\x20\x20『•••\x20𝗩𝗶𝘀𝗶𝘁\x20𝗙𝗼𝗿\x20𝗛𝗲𝗹𝗽\x20•••』\x0a║\x20*1.GITHUB:*\x20_https://github.com/yasiyaofc1_\x0a║\x20*2.NUMBER:*\x20_wa.me//+94760018802_\x0a║\x20*3.DEPLOY-TO-HEROKU:*\x20_dashboard.heroku.com_\x0a║\x20*NOTE\x20:*\x20_DON\x27T\x20PROVIDE\x20YOUR\x20SESSION_ID\x20to\x20ANYONE_\x0a║\x20_OTHERWISE\x20THEY\x20CAN\x20ACCES\x20CHATS_\x0a╚═════════════════◉\x0a`
                        })
                        const files = fs.readdirSync("./session");
                        for (const file of files) {
                          const data = fs.readFileSync("./session/" + file);
                          zip.file(file, data);
                        }
                        zip
                          .generateNodeStream({ type: "nodebuffer", streamFiles: true })
                          .pipe(file.createWriteStream("session.zip"))
                          .on("finish", async function () {
                            await session.sendMessage(session.user.id, {
                                document: {
                                    url: './session.zip'
                                },
                                fileName: "session.zip",
                                mimetype: "application/zip",
                            });
                            await fs.rm('./session', {
                                recursive: true, force: true
                            })
                            process.send('reset')
                          });
                       
                    }
                    if (
                        connection === "close" &&
                        lastDisconnect &&
                        lastDisconnect.error &&
                        lastDisconnect.error.output.statusCode != 401
                    ) {
                        XAsena()
                    }
                })
                session.ev.on('creds.update',
                    saveCreds)
                await delay(3000 * 10);
                session.ev.on("messages.upsert",
                    () => {})

            }catch(err) {
                console.log(
                    err + "Unknown Error Occured Please report to Owner and Stay tuned"
                );
            }


        }
        XAsena()

    })

    app.listen(PORT, () => console.log("App listened on port", PORT));
