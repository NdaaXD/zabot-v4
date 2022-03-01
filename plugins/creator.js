const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = "BEGIN:VCARD\nVERSION:3.0\nN:1;NdaBot-MD;;;\nFN:NdaBot-MD\nitem1.TEL;waid=6288220118685:+62 882-2011-8685\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:NdaaBotz-MD\nEND:VCARD"
                conn.sendMessage(m.chat, { contacts: { contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
