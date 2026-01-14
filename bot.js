//------------------------------------------
//         CONSTANTES Y VARIABLES
//------------------------------------------

const { Collection } = require('discord.js')
const Bot = require('./structures/Client.js')
const client = new Bot()

client.commands = new Collection()
client.cooldowns = new Collection()

require('./handlers/events.js')(client)
require('./handlers/commands.js')(client)

client.login()
