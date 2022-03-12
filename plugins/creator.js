const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = "BEGIN:VCARD\nVERSION:3.0\nN:1;;Fito;;\nFN:Fito\nitem1.TEL;waid=6285860278865:+62 858-6027-8865\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:NdaaBotz-MD\nEND:VCARD"
                conn.sendMessage(m.chat, { contacts: { contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
