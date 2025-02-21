const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Kipkogeimeshack6@gmail.com"
global.location="Nairobi,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/DJ-MESH/Suhail-Md-V5";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagAqpD3gvWdo0IxmZ2Z";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagAqpD3gvWdo0IxmZ2Z" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/DJ-MESH/Suhail-Md-V5/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ MESH-TECH" 


global.devs = "254707541188" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254707541188";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254707541188,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_20_02_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4LFxuICAgICAgICAzNixcbiAgICAgICAgODMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY1LFxuICAgICAgICA3NixcbiAgICAgICAgMjksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc4LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDk0LFxuICAgICAgICA1NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA5MixcbiAgICAgICAgMTEsXG4gICAgICAgIDk4LFxuICAgICAgICA0MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDg1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk2LFxuICAgICAgICAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MixcbiAgICAgICAgMjI5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDYyLFxuICAgICAgICAyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI4LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg3LFxuICAgICAgICA3MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjksXG4gICAgICAgIDI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDkzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjl2enFQMTIydXpqVUI0WlcwcUtNaDNFTVpXMS85cTcrOU1ZL3BXQnBBZzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZfOWVnRnY0VEllTTRwTDJMT2lualFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzY2OGI0MWUtMzM3Mi00MDU1LWI0MmItOTI0YmZjMDQ5Y2Y2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM1LFxuICAgICAgMTgzLFxuICAgICAgMjI3LFxuICAgICAgNjEsXG4gICAgICAyMjYsXG4gICAgICAxMDUsXG4gICAgICAzNSxcbiAgICAgIDI0MSxcbiAgICAgIDE4MCxcbiAgICAgIDEyOSxcbiAgICAgIDMxLFxuICAgICAgNzksXG4gICAgICAyMTksXG4gICAgICA2MyxcbiAgICAgIDIyNyxcbiAgICAgIDEwNixcbiAgICAgIDE2MSxcbiAgICAgIDIxMixcbiAgICAgIDExOCxcbiAgICAgIDE5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOCxcbiAgICAgIDkzLFxuICAgICAgODYsXG4gICAgICA0LFxuICAgICAgMTM1LFxuICAgICAgNixcbiAgICAgIDE2MyxcbiAgICAgIDI3LFxuICAgICAgMjAwLFxuICAgICAgODcsXG4gICAgICAxOTAsXG4gICAgICAyNTUsXG4gICAgICAzLFxuICAgICAgMTcxLFxuICAgICAgNTgsXG4gICAgICA4NCxcbiAgICAgIDc2LFxuICAgICAgMTkyLFxuICAgICAgNDQsXG4gICAgICAxMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVlKVERFUE1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwNzU0MTE4ODo3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA3NjMyMDU2OTk2MDc3Ojc5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xtWDErRUVFTUR1NEwwR0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiekoxdndsd0tON2s4UkgxVzZ0RldaUTFHR05DOE1CRkhCOEJCNWpsYm9IWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpV3Z0YW9JNTIvbVgydUpsaUdSOGRFZnJFRTBIREdnaWx0ZHFLSFdwRkFWdnpyWFBOOG80bjVHNnlVdXRaR0hiZ1pzTExqSW1oaEVBclUxcmNRSUpBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3elBySGhVWXFUTU15ajNISE9OeVQ5WlppVXIyQ0FHbERWZGhNZ1JVRXI1aDVlWFVKYm5lNk5WYW5EOUEwZStlZ1hsb0ZMT090YURlanNOSndZMWVoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDc1NDExODg6NzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDAxMjYwMTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNcFNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1wUy5qc29uIjogIntcImtleURhdGFcIjpcInFpcUN0REV6QlpzYnRXSXJia01TMkxUQ0k0SDBKSFFkQ3JDb3pmQTgyVHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI3ODU5Mzk3NyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MESH 』```", //*『sᴜʙsᴄʀɪʙᴇ • MESH TECH』*\n youtube.com/@MeshKip"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MESH-TECH",
  ownername:process.env.OWNER_NAME|| "MESH KE",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "MESH"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
