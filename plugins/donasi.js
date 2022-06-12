let handler = async m => m.reply(`
╭─「 Silahkan Donasi Agar Bot Tetap Online 」
│ •  [Dana: 085784715971]
│ •  [Gopay: 085784715971]
| •  [Shopeepay: 085784715971]
| •  [Saweria: https://saweria.co/Yahya17YT]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
