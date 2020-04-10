
const Telegraf = require('telegraf')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Scene = require('telegraf/scenes/base')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const { leave } = Stage
const stage = new Stage


const token = "975210690:AAGvHMxodqqxuv6Jbhq2UhSttNVZRR5mWaM"
const bot = new Telegraf(token)
const admin = "-1001346501962"

// bot.use(Telegraf.log())

const Ism = new Scene('Ism')
stage.register(Ism)

const Yosh = new Scene('Yosh')
stage.register(Yosh)

const Kurs = new Scene('Kurs')
stage.register(Kurs)

const Telefon = new Scene('Telefon')
stage.register(Telefon)

const Tekshir = new Scene('Tekshir')
stage.register(Tekshir)

bot.use(session())
bot.use(stage.middleware())




const boshMenyu = Extra.markup((markup) => {
		return markup.resize()
			.keyboard([
				["👥 Jamoa", "📕 Kurslar"],
				["📞 Aloqa", "🖋 Qabul"],
				["💬 Izohlar", "🏠 Markaz", "🗨 Share"],
				])})


const aloqa = Extra.markup((markup) => {
		return markup.resize()
			.keyboard([
				[markup.contactRequestButton('Telefon raqam'),
				markup.locationRequestButton('Manzilni yuborish')],
				['🏠 Menyu']
				])})


const bizHaqimizda = Extra.markup((m) => 
		m.inlineKeyboard([
			[m.urlButton('Telegram', 't.me/aytishnikuz'),
			m.urlButton('Instagram', 'https://instagram.com/aytishnikuz'),
			m.urlButton('Facebook', 'https://instagram.com/aytishnikuz')],			
			[m.urlButton('Website', 'http://shoxruxmirzo.uz'),
			m.callbackButton('Manzil', 'Manzil')]			
			]))
		

const jamoa = Extra.markup((markup) => {
		return markup.resize()
			.keyboard([
				["Administratsiya","Fanlar"],
				["Xorijiy tilar", "Dasturchilar"],
				["🏠 Menyu"]
				])})

const qabul = Extra.markup((markup) => {
		return markup.resize()
			.keyboard([
				["Administratsiya","Fanlar"],
				["Xorijiy tilar", "Dasturchilar"],
				["🏠 Menyu"]
				])})

const kurslar = Extra.markup((m) => 
		m.inlineKeyboard([
			// Birinchi qator
			[m.callbackButton('English', 'English'),
			m.callbackButton('Rus tili', 'Rus_tili'),
			m.callbackButton('Korean', 'Korean')],
			// Ikkinchi qator
			[m.callbackButton('Matematika', 'Matematika'),
			m.callbackButton('Fizika', 'Fizika'),
			m.callbackButton('Tarix', 'Tarix')],
			// Uchinchi qator
			[m.callbackButton('Web dasturlash', 'Web_dasturlash'),
			m.callbackButton('Android', 'Android'),
			m.callbackButton('Scratch', 'Scratch')]
			]) )


// QABUL BUTTONLARI
const qabul_button = Extra.markup((markup) => {
    return markup.resize()
      .keyboard([
        ["⬅️ Ortga", "🏠 Menyu"]
        ])})

const tel_button =  Extra.markup((markup) => {
    return markup.resize()
      .keyboard([
        [markup.contactRequestButton('Telefon raqam')],
        ["⬅️ Ortga",'🏠 Menyu']
        ]) })

const tekshir_button = Extra.markup((markup) => {
    return markup.resize()
      .keyboard([
        ["✅ Jo'natish"],
        ["⬅️ Ortga",'🏠 Menyu']
        ]) })

const start_button = Extra.markup((markup) => {
    return markup.resize()
      .keyboard([
        ["🏠 Menyu"]
        ])})




bot.start(({reply}) => {
	return reply('Markaz', boshMenyu)
})

bot.hears('🏠 Menyu', ctx => {
	return ctx.reply('Menyu', boshMenyu)
})

bot.hears('📞 Aloqa', ctx => {
	return ctx.reply('Biz bilan aloqaga chiqing!', aloqa)
})

bot.hears('🏠 Markaz', (ctx) => {
	return ctx.reply('Bizni kuzatib boring!', bizHaqimizda)
})

bot.hears('👥 Jamoa', (ctx) => {
	return ctx.reply('Bizning jamoa bilan tanishing!', jamoa)
})

bot.hears('📕 Kurslar', (ctx) => {
	return ctx.reply('Kurslarni tanlang!', kurslar)
})



// QABULXONA
bot.hears('🖋 Qabul', (ctx) => {
	ctx.reply(
    "Ism-Familiyangiz?", start_button )
  	ctx.scene.enter('Ism')
})

Ism.on('text', async (ctx) => {
  ctx.session.name = ctx.message.text
  ctx.reply(
    "Yoshingiz?", start_button)
  await ctx.scene.leave('Ism')
  ctx.scene.enter('Yosh')
})

Yosh.hears('⬅️ Ortga', async (ctx) =>{
   ctx.reply(
    "Ism-Familiyangiz?", start_button)
  await ctx.scene.leave('Yosh')
  ctx.scene.enter('Ism')
})

Yosh.hears(/^[0-9]{2}$/, async (ctx) => {
  ctx.session.age = ctx.message.text
  ctx.reply(
    "Kurslarni tanlang", qabul_button)
  await ctx.scene.leave('Yosh')
  ctx.scene.enter('Kurs')
})

Yosh.on('text', async (ctx) => {
  ctx.reply("Ismingizni raqamda yozing.\nNamuna: 20", qabul_button)
})


Kurs.hears("⬅️ Ortga", async (ctx) => {
  ctx.reply(
    "Yoshingiz?", qabul_button)

  await ctx.scene.leave('Kurs')
  ctx.scene.enter('Yosh')
})

Kurs.on('text', async (ctx) => {
  ctx.session.course = ctx.message.text
  ctx.reply(
    "Telefon kiriting", tel_button)
  await ctx.scene.leave('Kurs')
  ctx.scene.enter('Telefon')
})


Telefon.hears('⬅️ Ortga', async (ctx)=> {
  ctx.reply(
    "Kurslarni tanlang", qabul_button)
  await ctx.scene.leave('Telefon')
  ctx.scene.enter('Kurs') 
})


Telefon.on('contact', async (ctx) => {
  ctx.session.num = ctx.message.contact.phone_number
  var ism = ctx.session.name
  var yosh = ctx.session.age
  var kurs = ctx.session.course
  var number = ctx.session.num

  ctx.reply(
    `Ma'lumotlarni tekshiring!\n\nIsm-Familiya: ${ism}\n\nYosh: ${yosh}\n\nKurs: ${kurs}\n\nTelefon: ${number}`,
    tekshir_button
    )
  await ctx.scene.leave('Telefon')
  ctx.scene.enter('Tekshir') 
})


Tekshir.hears("⬅️ Ortga", async (ctx) => {
  ctx.reply(
    "Telefon kiriting", tel_button)
  await ctx.scene.leave('Tekshir')
  ctx.scene.enter('Telefon')
})

Tekshir.hears("✅ Jo'natish", async (ctx) => {
  ctx.reply("Raxmat siz qabulga olindingiz. Tez orada siz bilan bog'lanamiz", tekshir_button)


  var ism = ctx.session.name
  var yosh = ctx.session.age
  var kurs = ctx.session.course
  var number = ctx.session.num

  // adminga xat

  ctx.telegram.sendMessage(admin, 
    `Yangi a'zo!\n\nIsm-Familiya: ${ism}\n\nUsername: @${ctx.from.username}\n\nYosh: ${yosh}\n\nKurs: ${kurs}\n\nTelefon: ${number}`
    )

  ctx.scene.leave('Tekshir')
  ctx.session = null
})


bot.action('English', (ctx, next) => {
	ctx.answerCbQuery('Ingliz tili')

	return ctx.editMessageText('English kursi tanlandi', Extra.markup((m) => 
		m.inlineKeyboard([
			// Birinchi qator
			[m.callbackButton("Ma'lumot", "En_Ma'lumot"),
			m.callbackButton('Registratsiya', 'Registratsiya'),
			m.callbackButton('Narxi', 'Narxi')],
			])
		)).then(() => next())
})


bot.action('Rus_tili', (ctx, next) => {
	ctx.answerCbQuery('Rus tili tili')

	return ctx.editMessageText('Rus tili kursi tanlandi', Extra.markup((m) => 
		m.inlineKeyboard([
			// Birinchi qator
			[m.callbackButton("Ma'lumot", "Ru_Ma'lumot"),
			m.callbackButton('Registratsiya', 'Registratsiya'),
			m.callbackButton('Narxi', 'Narxi')],
			])
		)).then(() => next())
})


bot.action("En_Ma'lumot", (ctx) => {
	return ctx.editMessageText("English kursi haqida ma'lumot yoziladi", Extra.markup((m) => 
		m.inlineKeyboard([
			// Birinchi qator
			[m.callbackButton('Registratsiya', 'Registratsiya'),
			m.callbackButton('Narxi', 'Narxi')],
			[m.callbackButton('English', 'English'),
			m.callbackButton('Kurslar', 'Kurslar')]
			])
		))
})


bot.action("Ru_Ma'lumot", (ctx) => {
	return ctx.editMessageText("Rus tili kursi haqida ma'lumot yoziladi", Extra.markup((m) => 
		m.inlineKeyboard([
			// Birinchi qator
			[m.callbackButton('Registratsiya', 'Registratsiya'),
			m.callbackButton('Narxi', 'Narxi')],
			[m.callbackButton('Rus tili', 'Rus_tili'),
			m.callbackButton('Kurslar', 'Kurslar')]
			])
		))
})

bot.action('Registratsiya', (ctx) => {

})




bot.action('Narxi', (ctx) => {
	return ctx.answerCbQuery('300.000 UZS')
})



bot.action('Manzil', (ctx) => {
	return ctx.telegram.sendLocation(ctx.chat.id, 41.3111391, 69.277404,17)
})
// CallBackQuery


bot.launch()



