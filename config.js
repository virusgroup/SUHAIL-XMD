const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923300795089";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923300795089";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923300795089";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_04_10_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc5LFxuICAgICAgICA1MixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDMxLFxuICAgICAgICA1NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTk1LFxuICAgICAgICA0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NixcbiAgICAgICAgMjIwLFxuICAgICAgICA4NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY4LFxuICAgICAgICA4NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgODAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0LFxuICAgICAgICA1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDk4LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDk0LFxuICAgICAgICAyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQwLFxuICAgICAgICA5NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA5NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDk4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MixcbiAgICAgICAgMTY0LFxuICAgICAgICAzOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDkyLFxuICAgICAgICA1NSxcbiAgICAgICAgODksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAzNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDk4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk5LFxuICAgICAgICA3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODksXG4gICAgICAgIDMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODAsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVUlhZ0hZTE1iNERZbkw4Z1dKaDFlS1duWmExbExZQ2gxbmc5QWlRUFRYUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMDA3OTUwODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdGM0NBNUNEQzIwMTQ3M0EwOEI4NTIyRDNBOTdFRjY2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTI0OTQ0NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzc2hZcnllZ1FJT0FIeUtFdmhHd1hnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjczOGRiMDc4LTNhMjktNDA0OC04MzZjLWNlNWMzYTRjMzViN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTcsXG4gICAgICAxOSxcbiAgICAgIDI1MCxcbiAgICAgIDI2LFxuICAgICAgMjQzLFxuICAgICAgMjE1LFxuICAgICAgMTM3LFxuICAgICAgNzksXG4gICAgICAyMixcbiAgICAgIDg4LFxuICAgICAgNSxcbiAgICAgIDk2LFxuICAgICAgMjIsXG4gICAgICAyMjYsXG4gICAgICAxODIsXG4gICAgICA3MSxcbiAgICAgIDMyLFxuICAgICAgMjIwLFxuICAgICAgMSxcbiAgICAgIDUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMwLFxuICAgICAgMTEzLFxuICAgICAgMTAxLFxuICAgICAgMTQ5LFxuICAgICAgNzcsXG4gICAgICA1MyxcbiAgICAgIDI0NixcbiAgICAgIDE3NCxcbiAgICAgIDIwNyxcbiAgICAgIDQ4LFxuICAgICAgMTQ3LFxuICAgICAgMTY0LFxuICAgICAgMTUsXG4gICAgICAxNDEsXG4gICAgICAxMzIsXG4gICAgICA4LFxuICAgICAgMjA5LFxuICAgICAgMTY4LFxuICAgICAgMjUyLFxuICAgICAgMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVk5S1NRM1pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMwMDc5NTA4OTo3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzUyMjY4MjIwMDQ5NjM6NzNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1M1L2RrR0VKcUJ5YmdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2TW1xcXdEcVlqZzBrZ20yYTg4Mlg0NjBTNHJpdW1DREhZbndXbFpoRVNJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjFkNmdDSHFDSTVIOUtJQnh1VmM0L2FVNUltMnZycmNYQlM1aXZjZE1jOTFmVzkyaU53Z1U4b3RoaDFURm5zU2JMSW5tcUlsL04zWTdBcXRIVzRoUkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInB6a3F2Qy9zUWVhakIyLzN2dFdBMVJMQnJEdEZ0UC9Jd2lJVDB1bnNpRGk2VFpaM2tDcjBMMFBlc0sxNWtjcWY1bENsVW42RkRiYW5vVkp5V2NKVUJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMwMDc5NTA4OTo3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjkyNDk0MzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFUGJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVQYi5qc29uIjogIntcImtleURhdGFcIjpcIm40SXk1cDhTMXBLVWE4cWlna2JKNHM1TDl5YlUrNklodlF1VVJsaC9IdkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc5OTMxNDU5MixcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyLDZdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
