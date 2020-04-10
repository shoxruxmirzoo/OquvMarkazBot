const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
// add
const Router = require('telegraf/router')

const token = "1147428421:AAHtHqqX_75S5tHtg8V7xaOUYZZ0jzd86kI"
const bot = new Telegraf(token)
// bot.use(Telegraf.log())


// const inlineMessageRatingKeyboard = Markup.inlineKeyboard([
//     Markup.callbackButton('👍', 'like'),
//     Markup.callbackButton('👎', 'dislike')
// ]).extra()

// bot.on('message', (ctx) =>  {
//   return ctx.reply('Like?',inlineMessageRatingKeyboard)
// }
// )

// bot.action('like', (ctx) => ctx.editMessageText('🎉 Awesome! 🎉'))
// bot.action('dislike', (ctx) => ctx.editMessageText('okey'))

// bot.startPolling()

const asosiyMenyu = Markup.keyboard([
  ["🔎 Jamoa", "📕 Kurslar"],
  ["📞 Aloqa", "💬 Izohlar"],
  ["📢 Yangiliklar", "🏠 Biz haqimizda", "🗨 Share"],  
]).resize().extra()

const aloqaButton = Extra.markup((markup => {
  return markup.resize().
    keyboard([ 
      [markup.contactRequestButton('Telefon raqam'),
      markup.locationRequestButton('Manzilni yuborish')],
      ['🏠 Menyu']
    ])
}))


const followUs = Extra.markup((m) => 
    m.inlineKeyboard([
      m.urlButton('Telegram', 't.me/aytishnikuz'),
      m.urlButton('Instagram', 'https://instagram.com/aytishnikuz'),
      m.urlButton('Facebook', 'https://instagram.com/aytishnikuz')      
      ]))


const kurslarList = Extra.markup((m) => 
    m.inlineKeyboard([
      // Birinchi qator
      [m.callbackButton('English', 'English'),
      m.callbackButton('Rus tili', 'Rus_tili'),
      m.callbackButton('Arab', 'Arab_tili')],
      // Ikkinchi qator
      [m.callbackButton('Grafik', 'Grafik'),
      m.callbackButton('Moush grafika', 'Moush grafika'),
      m.callbackButton('SMM', 'SMM')],
      // Uchinchi qator
      [m.callbackButton('Frontend', 'Frontend'),
      m.callbackButton('Backend', 'Backend'),
      m.callbackButton('Full-stack', 'Full-stack')]  
      ])
  )

const jamoaList = Extra.markup((markup => {
  return markup.resize().
    keyboard([ 
      ['Administratsiya', 'Xorijiy tillar'],
      ['Dizaynerlar', 'Dasturchilar'],
      ['Moushn Grafika', 'Marketologlar'],
      ['🏠 Menyu', 'Qabul']
    ])
}))


bot.start( ({reply}) => {
  return reply('Markaz aloqada', asosiyMenyu)
})

bot.hears('🏠 Menyu', ctx => {
  return ctx.reply('Menyu', asosiyMenyu)
})

bot.hears('📞 Aloqa', ctx => {
  return ctx.reply('Biz bilan aloqaga chiqing!', aloqaButton)
})

bot.hears('🏠 Biz haqimizda', (ctx) => {
  return ctx.reply('Bizni kuzatib boring!', followUs) 
})

bot.hears('📕 Kurslar', (ctx) => {
  return ctx.reply('Kurslarni tanlang!', kurslarList)
})

bot.hears('🔎 Jamoa', (ctx) => {
  return ctx.reply('Bizning jamoa bilan tanishing!', jamoaList)
})



bot.action('English', (ctx) => {
  ctx.answerCbQuery('English')
  return ctx.editMessageText("Ingliz tili kursi", Extra.markup((m) => 
    m.inlineKeyboard([
      [m.callbackButton("📄 Ma'lumot", "En_Info"),
      m.callbackButton('🖋 Qabul', 'En_Qabul'),
      m.callbackButton('💰 Narx', 'Narx')],
      [m.callbackButton('📕 Kurslar', 'Kurslar')]
      ])
    ))
})




bot.action('Rus_tili', (ctx, next) => {
  ctx.answerCbQuery('Pусский')
  return ctx.editMessageText('Rus tili kursi', Extra.markup((m) => 
    m.inlineKeyboard([
      [m.callbackButton("📄 Ma'lumot", "Ru_Info"),
      m.callbackButton('🖋 Qabul', 'Ru_Qabul'),
      m.callbackButton('💰 Narx', 'Narx')],
      [m.callbackButton('📕 Kurslar', 'Kurslar')]
      ])
    )).then(() => next())
})



bot.action('Kurslar', (ctx, next) => {
  return ctx.editMessageText('Kurslarni tanlang!', kurslarList)
})


bot.action('Narx', (ctx, next) => {
  return ctx.answerCbQuery('300.000 UZS')
})




bot.launch()
