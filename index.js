import { Client } from 'RIOTIX';
import { group, access } from "./system/control.js";
import UltraDB from "./system/UltraDB.js";
import sub from './sub.js';

/* =========== Client ========== */
const client = new Client({
  phoneNumber: '966570920082', // Bot number
  prefix: [".", "/", "!"],
  fromMe: false, 
  owners: [
  // Owner 1
    { name: "VA", lid: "247579682029763@lid", jid: "972569311531@s.whatsapp.net" },
  // Owner 2
    { name: "emam", lid: "221307316789354@lid", jid: "201144480436@s.whatsapp.net" },
  // Owner 3
    { name: "Sukuna", jid: "201033024135@s.whatsapp.net", lid: "50414477168824@lid" },
  // Owner 4 
   { name: "عمورتي", jid: "201050079089@s.whatsapp.net", lid: "51664513925368@lid" },
  //owner 5
    { name: "RIOTIX", jid: "966570920082@s.whatsapp.net", lid: "50414477168824@lid" },
  ],
  settings: { noWelcome: false },
  commandsPath: './plugins'
});

client.onGroupEvent(group);
client.onCommandAccess(access);

/* =========== Database ========== */
if (!global.db) {
    global.db = new UltraDB();
}

/* =========== Config ========== */
const { config } = client;
config.info = { 
  nameBot: "♡ Aizen〈", 
  nameChannel: "Aizen ~ Bot", 
  idChannel: "120363225356834044@newsletter",
  urls: {
    repo: "https://github.com/deveni0/Pomni-AI",
    channel: "https//whatsapp/com/channel/0029VbCsaGv5a24CpLHkYb2D"
  },
  copyright: { 
    pack: 'ڤـ ـ VA ـ ـا', 
    author: 'VA'
  },
  images: [
    "https://i1-c.pinimg.com/1200x/91/18/c0/9118c02f0625ba39e07536f37d7322c7.jpg",
    "https://i.pinimg.com/originals/77/55/ba/7755ba3ebb02fdad823772dea6d6622f.gif",
    "https://i1-c.pinimg.com/1200x/fe/4f/c5/fe4fc5a58da3f4476be6241ad037f223.jpg"
  ]
};

/* =========== Start ========== */
client.start();

setTimeout(async () => {
if (client.commandSystem) { 
sub(client)
  }
}, 2000);


/* =========== Catch Errors ========== */
process.on('uncaughtException', (e) => {
    if (e.message.includes('rate-overlimit')) {}
});

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err)
});


/* 
=========== Memory Monitor ========== 

setInterval(() => {
    const used = process.memoryUsage().rss / 1024 / 1024
    if (used > 800) {
        console.log(`🔄 Bot memory full (${used.toFixed(1)}MB), restarting...`)
        process.exit(1) 
    }
}, 300_000) 

*/
