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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_03_01_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMzksXG4gICAgICAgIDgyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEsXG4gICAgICAgIDEyLFxuICAgICAgICA5NixcbiAgICAgICAgMzYsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxLFxuICAgICAgICA2MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDczLFxuICAgICAgICA3MixcbiAgICAgICAgMjA4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ1LFxuICAgICAgICA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDUsXG4gICAgICAgIDU1LFxuICAgICAgICAyNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjMxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyLFxuICAgICAgICA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMCxcbiAgICAgICAgNDksXG4gICAgICAgIDg1LFxuICAgICAgICA4OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzLFxuICAgICAgICAwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDYyLFxuICAgICAgICA3NSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzLFxuICAgICAgICAxMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1NyxcbiAgICAgICAgMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODEsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MixcbiAgICAgICAgNTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJibGlqMUxqWDZGSVlnZzV6OHdBaldlWWdadEQvdXVEOEJZWHpoeGI4clprPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1WnN3RmloSFRpZWExbXRud1JfRTJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg5ZTIxYjc5LTM0NjktNGU5MC05ODM3LTIxZjkwMGUxMjdkNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzgsXG4gICAgICA4LFxuICAgICAgMTQ0LFxuICAgICAgMjUsXG4gICAgICAxOTksXG4gICAgICAxNzUsXG4gICAgICAxODYsXG4gICAgICAxMDksXG4gICAgICA1OCxcbiAgICAgIDIyNyxcbiAgICAgIDEzMixcbiAgICAgIDUzLFxuICAgICAgMTE0LFxuICAgICAgMTI0LFxuICAgICAgNDgsXG4gICAgICAxNzUsXG4gICAgICAyMDIsXG4gICAgICAyMDIsXG4gICAgICAxNCxcbiAgICAgIDg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MSxcbiAgICAgIDIyMyxcbiAgICAgIDIyNixcbiAgICAgIDE2NyxcbiAgICAgIDI1MCxcbiAgICAgIDIzNixcbiAgICAgIDE2OSxcbiAgICAgIDExOCxcbiAgICAgIDY1LFxuICAgICAgMTksXG4gICAgICAyLFxuICAgICAgMTgzLFxuICAgICAgNjcsXG4gICAgICAxNTQsXG4gICAgICAxNTIsXG4gICAgICAxNDEsXG4gICAgICA2MSxcbiAgICAgIDMsXG4gICAgICAxNzMsXG4gICAgICAyNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNkI0QzdQWFlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwNzU0MTE4ODo3NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA3NjMyMDU2OTk2MDc3Ojc0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xtWDErRUVFSzdvOUxzR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiekoxdndsd0tON2s4UkgxVzZ0RldaUTFHR05DOE1CRkhCOEJCNWpsYm9IWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNRFdCeElKR0MvRmlYVmNZbmFTTUU1LzdiU1V5Z3pGQVgvdUNGbmdXbkVVWlprVkw0NCtiZ3EzVEltMW9vamF5ZkM0K3JpdnpvSEE3V2dteFhqVUlBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPV2ptK1dlZE11S0RrWTBhci9ZMGRwSjVvNFFjUkE0Yk82S3pCTzEvVHBVMnZleEhDVnBLTGRBN3ZGM1lzSFBGMHhMT0w1Tk5IRTZpdFBuVU9SNGVCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDc1NDExODg6NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzYyNTg2MTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNcFNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1wUy5qc29uIjogIntcImtleURhdGFcIjpcInFpcUN0REV6QlpzYnRXSXJia01TMkxUQ0k0SDBKSFFkQ3JDb3pmQTgyVHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI3ODU5Mzk3NyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM2MjU4NDY2MjY3XCJ9Igp9"  // PUT your SESSION_ID 


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
