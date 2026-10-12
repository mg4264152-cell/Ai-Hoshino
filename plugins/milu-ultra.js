let handler = async (m, { conn, command, text, usedPrefix }) => {
let who = m.mentionedJid[0] || m.sender
let tag = '@' + who.split('@')[0]
let r = (arr) => arr[Math.floor(Math.random()*arr.length)]

// ---- FUNCION PARA RESPONDER CON TAG ----
let replyTag = (txt) => conn.sendMessage(m.chat, { text: txt, mentions: [who] }, { quoted: m })

// ===== MILU =====
if (/^(milu|milumenu|menumilu)$/i.test(command)) return conn.reply(m.chat, `🌸 *MILU ULTRA 150* 🌸

💗 AMOR:.teamo.celos.enamorado.corazon.romantico.amiga.mejoramigo.extrañar.olvidar.beso.abrazo.ship.amor
😂 CHISTES:.chiste2.chiste3.random.sarcasmo.aburrido.fiesta.mood.insulto.susto.aplausos.8ball
🗣️ TEXTOS:.say.mimensaje.saludartodos.gracias.perdoname.buenastardes.buenasnoches2.motivacion2.piropo
🎮 JUEGOS:.caraocruz.dado2.adivina.piedrapapel.numerosecreto.trivia.animal.monstruo.sorteo.gay.topgays
🇦🇷 ARGENTO:.pepe.pepeargento.moni.coqui.dardo.maria.mate.asado.fernet.boca.river.messi.argento
🔞 MOD:.menu18.filtro18.aviso18.bloquear18.reglas18.consentimiento

TODOS:.menuamor.menuchistes.menujuegos2.menutextos`, m)

// ===== TUS COMANDOS ORIGINALES =====
if (/^(teamo)$/i.test(command)) return replyTag(`❤️ ${tag} ¡El amor se demuestra con acciones!`)
if (/^(celos)$/i.test(command)) return replyTag(`👀 ¡Uy ${tag} tiene celitos!`)
if (/^(enamorado)$/i.test(command)) return replyTag(`💘 ¡Parece que ${tag} está enamorado!`)
if (/^(corazon)$/i.test(command)) return replyTag(`💖💗💓💞💕 ¡Mucho amor para ${tag}!`)
if (/^(romantico)$/i.test(command)) return replyTag(`🌹 ${tag} Eres una casualidad bonita.`)
if (/^(amiga)$/i.test(command)) return replyTag(`🩷 ¡Una buena amiga vale muchísimo! ${tag}`)
if (/^(mejoramigo)$/i.test(command)) return replyTag(`🤝 ¡La amistad verdadera se demuestra! ${tag}`)
if (/^(extrañar)$/i.test(command)) return replyTag(`🥹 ${tag} A veces extrañamos más de lo que decimos.`)
if (/^(olvidar)$/i.test(command)) return replyTag(`🌷 ${tag} Date tiempo, cada día aprendes algo nuevo.`)
if (/^abrazo grupal$/i.test(command)) return conn.reply(m.chat, `🫂 ¡Abrazo grupal para todos!`, m)

if (/^(chiste2)$/i.test(command)) return conn.reply(m.chat, '😂 ¿Qué le dijo un techo a otro? Techo de menos.', m)
if (/^(chiste3)$/i.test(command)) return conn.reply(m.chat, '🤣 ¿Qué hace una compu con frío? ¡Cierra Windows!', m)
if (/^(random)$/i.test(command)) return conn.reply(m.chat, r(['🎲 ¡Hoy es tu día!','😂 Modo payaso activado.','✨ Vibra bonita.','🍀 La suerte te acompaña.']), m)
if (/^(sarcasmo)$/i.test(command)) return conn.reply(m.chat, '🙃 Claro que sí, porque todo sale perfecto siempre.', m)
if (/^(aburrido)$/i.test(command)) return conn.reply(m.chat, '🎮 ¡Propongo un juego para acabar con el aburrimiento!', m)
if (/^(fiesta)$/i.test(command)) return conn.reply(m.chat, '🎉 ¡Que empiece la fiesta!', m)
if (/^(mood)$/i.test(command)) return conn.reply(m.chat, r(['😴 Modo sueño','😂 Modo risas','😎 Modo pro','🩷 Modo tierno']), m)
if (/^(insulto)$/i.test(command)) return replyTag(`🤡 ${tag} eres más despistado que un pingüino en el desierto 😂`)
if (/^(susto)$/i.test(command)) return conn.reply(m.chat, '👻 ¡BUUU! ¿Te asustaste?', m)
if (/^(aplausos)$/i.test(command)) return conn.reply(m.chat, '👏👏👏 ¡Un aplauso!', m)

if (/^(say|decir)$/i.test(command)) { if (!text) return conn.reply(m.chat, '✍️ Escribe:.say Hola', m); return conn.reply(m.chat, text, m) }
if (/^(mimensaje)$/i.test(command)) { if (!text) return conn.reply(m.chat, '✍️ Escribe el mensaje', m); return conn.sendMessage(m.chat, { text: text }) }
if (/^(saludartodos)$/i.test(command)) return conn.reply(m.chat, '👋 ¡Holaaa, gente bonita! ¿Cómo están?', m)
if (/^(gracias)$/i.test(command)) return conn.reply(m.chat, '🥹 ¡Muchísimas gracias, de corazón!', m)
if (/^(perdoname)$/i.test(command)) return conn.reply(m.chat, '🩷 Perdón si te hice sentir mal.', m)
if (/^(buenastardes)$/i.test(command)) return conn.reply(m.chat, '🌤️ ¡Buenas tardes para todos!', m)
if (/^(buenasnoches2)$/i.test(command)) return conn.reply(m.chat, '🌙 Que tengan una noche tranquila y bonita.', m)
if (/^(motivacion2)$/i.test(command)) return conn.reply(m.chat, '🌟 Confía en tu proceso y sigue adelante.', m)

if (/^(caraocruz)$/i.test(command)) return conn.reply(m.chat, Math.random()<0.5?'🪙 ¡Salió cara!':'🪙 ¡Salió cruz!', m)
if (/^(dado2)$/i.test(command)) return conn.reply(m.chat, '🎲 Sacaste un '+(Math.floor(Math.random()*6)+1), m)
if (/^(adivina)$/i.test(command)) return conn.reply(m.chat, '🧠 Tengo agujas y no sé coser. ¿Qué soy? ⏰', m)
if (/^(piedrapapel)$/i.test(command)) return conn.reply(m.chat, '✊ ¡Piedra, papel o tijera! Escribe tu elección.', m)
if (/^(numerosecreto)$/i.test(command)) return conn.reply(m.chat, '🔢 Piensa un número del 1 al 10', m)
if (/^(trivia)$/i.test(command)) return conn.reply(m.chat, '🌎 ¿Planeta rojo?', m)
if (/^(animal)$/i.test(command)) return conn.reply(m.chat, r(['🐱 Gato','🐶 Perro','🦊 Zorro','🐼 Panda']), m)
if (/^(monstruo)$/i.test(command)) return conn.reply(m.chat, '👾 ¡Un monstruo salvaje apareció!', m)

// ===== MAS COMANDOS PARA QUE NO SEAN POQUITOS =====
if (/^(amor)$/i.test(command)) return replyTag(`💘 ${tag} tiene ${Math.floor(Math.random()*101)}% de amor`)
if (/^(pareja|ship)$/i.test(command)) return replyTag(`💑 ${tag} hacen linda pareja con ${Math.floor(Math.random()*101)}%`)
if (/^(gay)$/i.test(command)) return replyTag(`🏳️‍🌈 ${tag} es ${Math.floor(Math.random()*101)}% gay`)
if (/^(topgays)$/i.test(command)) return conn.reply(m.chat, `🏳️‍🌈 TOP GAYS DEL GRUPO...`, m)
if (/^(beso)$/i.test(command)) return replyTag(`😘 ${tag} te dio un beso`)
if (/^(abrazo)$/i.test(command)) return replyTag(`🫂 ${tag} te dio un abrazo`)
if (/^(8ball|pregunta)$/i.test(command)) return conn.reply(m.chat, r(['Sí','No','Tal vez','Obvio que sí','Ni en pedo','Pregunta de nuevo']), m)
if (/^(piropo)$/i.test(command)) return replyTag(r([`🌹 ${tag} si fueras WiFi me conectaría sin contraseña`,`✨ ${tag} eres más linda que el pan recién hecho`]))
if (/^(chiste)$/i.test(command)) return conn.reply(m.chat, r(['¿Qué hace un pez? Nada','Toc toc... ¿Quién es? Nadie']), m)
if (/^(sorteo)$/i.test(command)) return replyTag(`🎉 Felicidades ${tag} ganaste el sorteo!`)

// ARGENTO
if (/^(pepe|pepeargento)$/i.test(command)) return conn.reply(m.chat, '¡La puta madre! - Pepe Argento', m)
if (/^(moni)$/i.test(command)) return conn.reply(m.chat, '¡Pepe! ¡Pepe! - Moni Argento', m)
if (/^(coqui|koki)$/i.test(command)) return conn.reply(m.chat, '¡Hola! Soy Coqui Argento, el campeón de... de algo', m)
if (/^(dardo)$/i.test(command)) return conn.reply(m.chat, '¡Soy Dardo, el vecino fachero!', m)
if (/^(maria|mariaelena)$/i.test(command)) return conn.reply(m.chat, '¡Maria Elena, la santa!', m)
if (/^(argento)$/i.test(command)) return conn.reply(m.chat, '🇦🇷 ¡Aguante Argentina, la concha de la lora!', m)
if (/^(mate)$/i.test(command)) return conn.reply(m.chat, '🧉 ¡Unos mates, che!', m)
if (/^(asado)$/i.test(command)) return conn.reply(m.chat, '🥩 ¡Prendamos el fuego para el asado!', m)
if (/^(fernet)$/i.test(command)) return conn.reply(m.chat, '🥃 ¡Fernet con coca, papá!', m)
if (/^(messi)$/i.test(command)) return conn.reply(m.chat, '🐐 ¡Messi,
