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
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923300795089";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923300795089";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_05_10_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxODAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDg3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDMxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NixcbiAgICAgICAgMTcxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxODksXG4gICAgICAgIDAsXG4gICAgICAgIDQwLFxuICAgICAgICA5MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NixcbiAgICAgICAgNTEsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDMyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxODksXG4gICAgICAgIDc1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDMxLFxuICAgICAgICA3NixcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYyLFxuICAgICAgICAzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDYyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDkyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNixcbiAgICAgICAgODksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDkyLFxuICAgICAgICAzMixcbiAgICAgICAgMjA2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDczLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1MixcbiAgICAgICAgODYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvOC9ReWpRY1pqKzdEaGJtTXpRTXRBVUZRRDJ1cU42UGZBQmxZRlJaUG1VPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlU2FQSVBHWlNuS3NLMGJIWTZSYWVnXCIsXG4gIFwicGhvbmVJZFwiOiBcImRmNjA4N2I2LTEyMjYtNDhlOS05YWFlLWFkNThjNDBiYTNkMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDcsXG4gICAgICA3LFxuICAgICAgMTc3LFxuICAgICAgMTAyLFxuICAgICAgMjEsXG4gICAgICAxODgsXG4gICAgICAzMyxcbiAgICAgIDEzLFxuICAgICAgMTQzLFxuICAgICAgMjQ0LFxuICAgICAgMjQ0LFxuICAgICAgNTQsXG4gICAgICAxMDUsXG4gICAgICAyMjQsXG4gICAgICA4NixcbiAgICAgIDM0LFxuICAgICAgOTQsXG4gICAgICAxOSxcbiAgICAgIDIwNixcbiAgICAgIDI0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDgsXG4gICAgICAxNTAsXG4gICAgICAxNTMsXG4gICAgICA5MyxcbiAgICAgIDc5LFxuICAgICAgMTYyLFxuICAgICAgMjUxLFxuICAgICAgMjEzLFxuICAgICAgMjMwLFxuICAgICAgMjM3LFxuICAgICAgNTAsXG4gICAgICAxNzIsXG4gICAgICA4MSxcbiAgICAgIDE3NCxcbiAgICAgIDAsXG4gICAgICAxNDIsXG4gICAgICA3OSxcbiAgICAgIDIyOCxcbiAgICAgIDAsXG4gICAgICA4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFUE5RTjFCTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzAwNzk1MDg5OjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NTIyNjgyMjAwNDk2Mzo2MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLQzUvZGtHRUxTOCtiY0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZNbXFxd0RxWWpnMGtnbTJhODgyWDQ2MFM0cml1bUNESFlud1dsWmhFU0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ3MzOTRtRkJYMVZvbkxWK2ZLd2lqWG1aNnBDVnV0MWVVMEF2TEhrTFoyOXU3N3duZWFhSklTL0lVbktCUW5ZL2hMK29WT3pJTzJKZ2EwOUdVeHV4RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibGhlU3dvcHdxdEpQNXFObFNTUjZQTWhGWllLZU0vdXN6REgrUnhxOFFOaFR3azZFODNKeWN5OWNGQi9qQk5CdjROMEpoY3VsYWo0Tm9CdGQvazFPQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzAwNzk1MDg5OjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzk0NjI5OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVQWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRVBZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSzdWUFRtMGtZVXdMYjljbEJWNG5XUk8xeGQvR0RXTXFmbzVHNzAyR0t4MD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzk5MzE0NTkyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjc3OTk1Nzk0ODdcIn0iCn0="  // PUT your SESSION_ID 


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
