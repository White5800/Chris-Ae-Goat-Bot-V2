const {get} = require('axios');
const url = "https://markdevs-last-api.onrender.com";
module.exports = {
    config: {
       name: "ai",
       version: "1.0.0",
       hasPermission: 0,
       credits: "unknown",
       description: "OpenAI official AI with no prefix",
       commandCategory: "education",
       usePrefix: false,
       usages: "...",
       cooldowns: 0
    },
    run: async function({api, event, args}){
            let prompt = args.join(' '), id = event.senderID;
           async function r(msg){
                 api.sendMessage(msg, event.threadID, event.messageID)
             }
            if(!prompt) return r("𝑉𝑒𝑢𝑖𝑙𝑙𝑒𝑧 𝑑'𝑎𝑏𝑜𝑟𝑑 𝑝𝑜𝑠𝑒𝑟 𝑢𝑛𝑒 𝑞𝑢𝑒𝑠𝑡𝑖𝑜𝑛.");
            r("𝑆'𝑖𝑙 𝑣𝑜𝑢𝑠 𝑝𝑙𝑎î𝑡, 𝑠𝑜𝑦𝑒𝑧 𝑝𝑎𝑡𝑖𝑒𝑛𝑡 𝑎𝑣𝑒𝑐 𝑚𝑜𝑖 𝑝𝑒𝑛𝑑𝑎𝑛𝑡 𝑞𝑢𝑒 𝑗𝑒 𝑟é𝑓𝑙é𝑐ℎ𝑖𝑠 à 𝑣𝑜𝑡𝑟𝑒 𝑑𝑒𝑚𝑎𝑛𝑑𝑒...");
            try {
                const res = await get(url+"/gpt4?prompt="+prompt+"&uid="+id);
                const answer = res.data.gpt4;
                return r(`📦𝗚𝗣𝗧4+ 𝗖𝗢𝗡𝗧𝗜𝗡𝗨𝗘𝗦 𝗔𝗜\n━━━━━━━━━━━━━━━━━━\n𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻: ${prompt}\n━━━━━━━━━━━━━━━━━━\n𝗔𝗻𝘀𝘄𝗲𝗿: ${answer}\n\ncredits: www.facebook.com/mark.dev69`);
            } catch (e){
                return r(e.message)
            }
    }
      }
