const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923284356394";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_59_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjksXG4gICAgICAgIDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAxODcsXG4gICAgICAgIDY5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODQsXG4gICAgICAgIDExNixcbiAgICAgICAgODIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgODksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgyLFxuICAgICAgICAzNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxLFxuICAgICAgICAzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAwLFxuICAgICAgICAxMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxLFxuICAgICAgICA3MixcbiAgICAgICAgMTMsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDczLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDYyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDk0LFxuICAgICAgICA2NixcbiAgICAgICAgMTgsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDUzLFxuICAgICAgICA3NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY5LFxuICAgICAgICA4NCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNixcbiAgICAgICAgOTIsXG4gICAgICAgIDI3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgODIsXG4gICAgICAgIDczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3NixcbiAgICAgICAgNjYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQsXG4gICAgICAgIDk0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvZUYzaXEvdTEvVmFPdUcvK0dITzBQeWpqMVdZT0E2VlhuYkFENk5kMllvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPN2VWVzVRVFJBNlRoR2FheTlBVkNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYwNGRmNmFlLTg0MTUtNDkyOS05NWI3LTkxOTE3NWIxYjViMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjUsXG4gICAgICAxMTIsXG4gICAgICAxMzcsXG4gICAgICAxNjIsXG4gICAgICA3MixcbiAgICAgIDM0LFxuICAgICAgNzMsXG4gICAgICAyMDgsXG4gICAgICAxMjUsXG4gICAgICAxMSxcbiAgICAgIDE0NCxcbiAgICAgIDE4NyxcbiAgICAgIDI0NCxcbiAgICAgIDE0OSxcbiAgICAgIDE4LFxuICAgICAgMjMzLFxuICAgICAgOTUsXG4gICAgICAxNzIsXG4gICAgICAxNzMsXG4gICAgICAzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2LFxuICAgICAgMTkwLFxuICAgICAgMTQ1LFxuICAgICAgMTQwLFxuICAgICAgMTYzLFxuICAgICAgMjQ1LFxuICAgICAgMTYxLFxuICAgICAgNDMsXG4gICAgICAzOCxcbiAgICAgIDIyMCxcbiAgICAgIDczLFxuICAgICAgMTU5LFxuICAgICAgODgsXG4gICAgICA2MCxcbiAgICAgIDIxNyxcbiAgICAgIDExMSxcbiAgICAgIDY1LFxuICAgICAgMzIsXG4gICAgICAxMzUsXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ0RNRjJWWVlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA3OTA1OTk4Mzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2aq/CdmrTwnZCG8J2atfCdkIsg8J2as/CdkINcIixcbiAgICBcImxpZFwiOiBcIjIxOTY5MTc3MTYxODQwOjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmZXN3drUTE2bWJ0QVlZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjNmpwV0FMVzVCRjREdzhFNldaUmdVZC9yeW1NRXNWaDF1L1hGb2RpUkhjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtiZG1HMTJkR25neE9GY01jM1VxeTk3MERtbUFiSWYyZ0RSZkdvQnZGTHVGVXhPNCtQQytTcWJDVXg3ZEUwZEM1SDJuYlBKTmxlUEQrcUowUzF2SENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFDZnRjU1VzQWsxN1hTY3p5aDZRWHAzWDlmNnNqSFZCQVJDN0w4VGZlUTZseEt2R1F2YUQybEg1RFhpcTkyaE1tQVpsb3FMZi90djdlSkE5dmxVMml3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA3OTA1OTk4Mzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxMTIzNDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQSllcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBKWS5qc29uIjogIntcImtleURhdGFcIjpcInB5TWZXS1pJT3pEYXBLM1FBYitkOXAyaU1Nd3ZZQmtHVzV2QjNseVdMYlE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA3MDQwODcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODU2ODk5NjA5MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝓜𝓪𝓭𝓮 𝓑𝔂 𝓢𝓱𝓪𝓲𝓫𝓲",
  ownername:process.env.OWNER_NAME|| "it'x shaibi here",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
