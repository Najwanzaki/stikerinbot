let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, fla + 'donasi', `
┌「 *Donasi • Emoney* 」
├ https://saweria.co/Najwanzaky
├ https://trakteer.id/najwanzaky
├ 083872123464 (Axis)
├ 083872123464 (GoPay) 
├ 085773744917 (Dana)
├ All Payment Tanpa Verifikasi Ktp PM Owner
└────
`.trim(), '© Zaky', 'Donasi', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
