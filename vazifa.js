const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

//bot nomi @organish1bot
// const token = "768925887:AAEmOwRDwMAXEHXghX3ldIxNI5Ptu7YRUxc"
const token ="975210690:AAGvHMxodqqxuv6Jbhq2UhSttNVZRR5mWaM"
const bot = new Telegraf(token)

bot.use(Telegraf.log())

//menyu qismi
bot.start(({reply}) =>{
    return reply(`Salom Elegant o'quv markaziga xush kelibsiz!`, Markup
        .keyboard ([
            ["👤 Jamoa", "📕 Kurslar"],
            ["📞 Aloqa", "💬 Izohlar"],
            ["📢 Yangiliklar", "🏠 Biz haqimizda", "🗨 Share"]
        ])
    //.oneTime()
    .resize()
    .extra()
    )
})
bot.hears('🏠 Menyu', ctx =>{
    return ctx.reply('Menyu', Markup
        .keyboard ([
            ["👤 Jamoa", "📕 Kurslar"],
            ["📞 Aloqa", "💬 Izohlar"],
            ["📢 Yangiliklar", "🏠 Biz haqimizda", "🗨 Share"]
        ])
    //.oneTime()
    .resize()
    .extra()
    )
})

//Jamoa
bot.hears("👤 Jamoa", (ctx) =>{
    return ctx.reply('Bu yerda bizning jamoa bilan tanishishingiz mumkin!', Extra.markup((m) =>
        m.inlineKeyboard([
            //birinchi qator
            [m.callbackButton('English', 'teacher_English'),
            m.callbackButton('Rus tili', 'teacher_Rus_tili'),
            m.callbackButton('Korean', 'teacher_Korean')],
            //ikkinchi qator
            [m.callbackButton('Matematika', 'teacher_Matematika'),
            m.callbackButton('Fizika', 'teacher_Fizika'),
            m.callbackButton('Tarix', 'teacher_Tarix')],
            //uchinchi qator
            [m.callbackButton('Web dasturlash', 'teacher_Web_dasturlash'),
            m.callbackButton('Android', 'teacher_Android'),
            m.callbackButton('Scratch', 'teacher_Scratch')]
        ])
    ))
})

bot.action('teacher_English', (ctx) => {
    return ctx.reply(" Ism: Umidjom \n Familiya: Nasridinov \n Tajribasi: 3 yil")
})
bot.action('teacher_Rus_tili', (ctx) => {
    return ctx.reply(" Ism: Ulug'bek \n Familiya: Mirkomilov \n Tajribasi: 4 yil")
})
bot.action('teacher_Korean', (ctx) => {
    return ctx.reply(" Ism: Muhammadali \n Familiya: Xamdamov \n Tajribasi: 2 yil")
})
bot.action('teacher_Matematika', (ctx) => {
    return ctx.reply(" Ism: Odilbek \n Familiya: Yoqobov \n Tajribasi: 3 yil")
})
bot.action('teacher_Fizika', (ctx) => {
    return ctx.reply(" Ism: Ibroxim \n Familiya: Xaydarov \n Tajribasi: 3 yil")
})
bot.action('teacher_Tarix', (ctx) => {
    return ctx.reply("Ism: Nasibaxon \nFamiliya: Madaminova \nTajribasi: 5 yil")
})
bot.action('teacher_Web_dasturlash', (ctx) => {
    return ctx.reply(" Ism: Islomjon \n Familiya: Nosirov \n Tajribasi: 1 yil")
})
bot.action('teacher_Android', (ctx) => {
    return ctx.reply(" Ism: Jasurbek \n Familiya: Obidov \n Tajribasi: 3 yil")
})
bot.action('teacher_Scratch', (ctx) => {
    return ctx.reply(" Ism: Feruzbek \n Familiya: Abdumalikov \n Tajribasi: 2 yil")
})

//Kurslar bosh qism
bot.hears("📕 Kurslar", (ctx) =>{
    return ctx.reply('Kursni tanlang!', Extra.markup((m) =>
        m.inlineKeyboard([
            //birinchi qator
            [m.callbackButton('English', 'English'),
            m.callbackButton('Rus tili', 'Rus_tili'),
            m.callbackButton('Korean', 'Korean')],
            //ikkinchi qator
            [m.callbackButton('Matematika', 'Matematika'),
            m.callbackButton('Fizika', 'Fizika'),
            m.callbackButton('Tarix', 'Tarix')],
            //uchinchi qator
            [m.callbackButton('Web dasturlash', 'Web_dasturlash'),
            m.callbackButton('Android', 'Android'),
            m.callbackButton('Scratch', 'Scratch')]
        ])
    ))
})

//Kurslar bo`lim scratch
bot.action('Scratch', (ctx) =>{
    return ctx.reply('Scratch kursi tanlandi', Extra.markup((m) =>
        m.inlineKeyboard([
            [m.callbackButton("Ma`lumot", "scr_Ma`lumot"),
            m.callbackButton('Registratsiya', 'Registratsiya'),
            m.callbackButton('Narxi', 'scr_Narxi')]
        ])
    ))
})
bot.action('scr_Ma`lumot', (ctx) => {
    return ctx.reply("Scratch kurslari haftada 3kun 2 soatdan bo'lib o'tadi. Kurs haqida ko'proq ma'lumotga ega bo'lmoqchi bo'lsangiz, quyidagi raqamga qo'ng'iroq qiling: +998905636333", Extra.markup((m) =>
        m.inlineKeyboard(
        [m.callbackButton("⬅️ Ortga", "Scratch")])
    ))
})
bot.action('scr_Narxi', (ctx) => {
    return ctx.reply("Scratch narxi: 350 ming so'm (bir oy uchun)", Extra.markup((m) =>
        m.inlineKeyboard(
        [m.callbackButton("⬅️ Ortga", "Scratch")])
    ))
})

//Kurslar bo`lim web dasturlash
bot.action('Web_dasturlash', (ctx) =>{
    return ctx.reply('Web dasturlash kursi tanlandi', Extra.markup((m) =>
        m.inlineKeyboard([
            [m.callbackButton("Ma`lumot", "web_Ma`lumot"),
            m.callbackButton('Registratsiya', 'Registratsiya'),
            m.callbackButton('Narxi', 'web_Narxi')]
        ])
    ))
})
bot.action('web_Ma`lumot', (ctx) => {
    return ctx.reply("Web dasturlash kurslari haftada 3kun 2 soatdan bo'lib o'tadi. Kurs haqida ko'proq ma'lumotga ega bo'lmoqchi bo'lsangiz, quyidagi raqamga qo'ng'iroq qiling: +998905636333", Extra.markup((m) =>
        m.inlineKeyboard(
        [m.callbackButton("⬅️ Ortga", "Web_dasturlash")])
    ))
})
bot.action('web_Narxi', (ctx) => {
    return ctx.reply("Web dasturlash narxi: 350 ming so'm (bir oy uchun)", Extra.markup((m) =>
        m.inlineKeyboard(
        [m.callbackButton("⬅️ Ortga", "Web_dasturlash")])
    ))
})

//Kurslar bo`lim english
bot.action('English', (ctx) =>{
    return ctx.reply('English kursi tanlandi', Extra.markup((m) =>
        m.inlineKeyboard([
            [m.callbackButton("Ma`lumot", "eng_Ma`lumot"),
            m.callbackButton('Registratsiya', 'Registratsiya'),
            m.callbackButton('Narxi', 'eng_Narxi')]
        ])
    ))
})
bot.action('eng_Ma`lumot', (ctx) => {
    return ctx.reply("Ingliz tili kurslari haftada 3kun 2 soatdan bo'lib o'tadi. Kurs mobaynida faqatgina so'zlashuv usullari o'rgatib o'tiladi. Kurs haqida ko'proq ma'lumotga ega bo'lmoqchi bo'lsangiz, quyidagi raqamga qo'ng'iroq qiling: +998905636333", Extra.markup((m) =>
        m.inlineKeyboard(
        [m.callbackButton("⬅️ Ortga", "English")])
    ))
})
bot.action('eng_Narxi', (ctx) => {
    return ctx.reply("English kursi narxi: 300 ming so'm (bir oy uchun)", Extra.markup((m) =>
        m.inlineKeyboard(
        [m.callbackButton("⬅️ Ortga", "English")])
    ))
})

//Kurslar bo`lim rus tili
bot.action('Rus_tili', (ctx) =>{
    return ctx.reply('Rus tili kursi tanlandi', Extra.markup((m) =>
        m.inlineKeyboard([
            [m.callbackButton("Ma`lumot", "rus_Ma`lumot"),
            m.callbackButton('Registratsiya', 'Registratsiya'),
            m.callbackButton('Narxi', 'rus_Narxi')]
        ])
    ))
})
bot.action('rus_Ma`lumot', (ctx) => {
    return ctx.reply("Rus tili kurslari haftada 3kun 2 soatdan bo'lib o'tadi. Kurs mobaynida faqatgina so'zlashuv usullari o'rgatib o'tiladi  Kurs haqida ko'proq ma'lumotga ega bo'lmoqchi bo'lsangiz, quyidagi raqamga qo'ng'iroq qiling: +998905636333", Extra.markup((m) =>
        m.inlineKeyboard(
        [m.callbackButton("⬅️ Ortga", "Rus_tili")])
    ))
})
bot.action('rus_Narxi', (ctx) => {
    return ctx.reply("Rus tili kursi narxi: 300 ming so'm (bir oy uchun)", Extra.markup((m) =>
        m.inlineKeyboard(
        [m.callbackButton("⬅️ Ortga", "Rus_tili")])
    ))
})

//Kurslar bo`lim korean
bot.action('Korean', (ctx) =>{
    return ctx.reply('Koreys tili kursi tanlandi', Extra.markup((m) =>
        m.inlineKeyboard([
            [m.callbackButton("Ma`lumot", "kor_Ma`lumot"),
            m.callbackButton('Registratsiya', 'Registratsiya'),
            m.callbackButton('Narxi', 'kor_Narxi')]
        ])
    ))
})
bot.action('kor_Ma`lumot', (ctx) => {
    return ctx.reply("Koreys tili kurslari haftada 3kun 2 soatdan bo'lib o'tadi. Kurs mobaynida faqatgina so'zlashuv usullari o'rgatib o'tiladi  Kurs haqida ko'proq ma'lumotga ega bo'lmoqchi bo'lsangiz, quyidagi raqamga qo'ng'iroq qiling: +998905636333", Extra.markup((m) =>
        m.inlineKeyboard(
        [m.callbackButton("⬅️ Ortga", "Korean")])
    ))
})
bot.action('kor_Narxi', (ctx) => {
    return ctx.reply("Koreys tili kursi narxi: 250 ming so'm (bir oy uchun)", Extra.markup((m) =>
        m.inlineKeyboard(
        [m.callbackButton("⬅️ Ortga", "Korean")])
    ))
})

//Kurslar bo`lim matematika
bot.action('Matematika', (ctx) =>{
    return ctx.reply('Matematika kursi tanlandi', Extra.markup((m) =>
        m.inlineKeyboard([
            [m.callbackButton("Ma`lumot", "mat_Ma`lumot"),
            m.callbackButton('Registratsiya', 'Registratsiya'),
            m.callbackButton('Narxi', 'mat_Narxi')]
        ])
    ))
})
bot.action('mat_Ma`lumot', (ctx) => {
    return ctx.reply("Matematika kurslari haftada 3kun 2 soatdan bo'lib o'tadi. Kurs haqida ko'proq ma'lumotga ega bo'lmoqchi bo'lsangiz, quyidagi raqamga qo'ng'iroq qiling: +998905636333", Extra.markup((m) =>
        m.inlineKeyboard(
        [m.callbackButton("⬅️ Ortga", "Matematika")])
    ))
})
bot.action('mat_Narxi', (ctx) => {
    return ctx.reply("Matematika kursi narxi: 280 ming so'm (bir oy uchun)", Extra.markup((m) =>
        m.inlineKeyboard(
        [m.callbackButton("⬅️ Ortga", "Matematika")])
    ))
})

//Kurslar bo`lim fizika
bot.action('Fizika', (ctx) =>{
    return ctx.reply('Fizika kursi tanlandi', Extra.markup((m) =>
        m.inlineKeyboard([
            [m.callbackButton("Ma`lumot", "fiz_Ma`lumot"),
            m.callbackButton('Registratsiya', 'Registratsiya'),
            m.callbackButton('Narxi', 'fiz_Narxi')]
        ])
    ))
})
bot.action('fiz_Ma`lumot', (ctx) => {
    return ctx.reply("Fizika kurslari haftada 3kun 2 soatdan bo'lib o'tadi. Kurs haqida ko'proq ma'lumotga ega bo'lmoqchi bo'lsangiz, quyidagi raqamga qo'ng'iroq qiling: +998905636333", Extra.markup((m) =>
        m.inlineKeyboard(
        [m.callbackButton("⬅️ Ortga", "Fizika")])
    ))
})
bot.action('fiz_Narxi', (ctx) => {
    return ctx.reply("Fizika kursi narxi: 280 ming so'm (bir oy uchun)", Extra.markup((m) =>
        m.inlineKeyboard(
        [m.callbackButton("⬅️ Ortga", "Fizika")])
    ))
})

//Kurslar bo`lim tarix
bot.action('Tarix', (ctx) =>{
    return ctx.reply('Tarix kursi tanlandi', Extra.markup((m) =>
        m.inlineKeyboard([
            [m.callbackButton("Ma`lumot", "tar_Ma`lumot"),
            m.callbackButton('Registratsiya', 'Registratsiya'),
            m.callbackButton('Narxi', 'tar_Narxi')]
        ])
    ))
})
bot.action('tar_Ma`lumot', (ctx) => {
    return ctx.reply("Tarix kurslari haftada 3kun 2 soatdan bo'lib o'tadi. Kurs haqida ko'proq ma'lumotga ega bo'lmoqchi bo'lsangiz, quyidagi raqamga qo'ng'iroq qiling: +998905636333", Extra.markup((m) =>
        m.inlineKeyboard(
        [m.callbackButton("⬅️ Ortga", "Tarix")])
    ))
})
bot.action('tar_Narxi', (ctx) => {
    return ctx.reply("Tarix kursi narxi: 280 ming so'm (bir oy uchun)", Extra.markup((m) =>
        m.inlineKeyboard(
        [m.callbackButton("⬅️ Ortga", "Tarix")])
    ))
})

//Kurslar bo`lim android
bot.action('Android', (ctx) =>{
    return ctx.reply('Android dasturlash kursi tanlandi', Extra.markup((m) =>
        m.inlineKeyboard([
            [m.callbackButton("Ma`lumot", "and_Ma`lumot"),
            m.callbackButton('Registratsiya', 'Registratsiya'),
            m.callbackButton('Narxi', 'and_Narxi')]
        ])
    ))
})
bot.action('and_Ma`lumot', (ctx) => {
    return ctx.reply("Android dasturlash kurslari haftada 3kun 2 soatdan bo'lib o'tadi. Kurs haqida ko'proq ma'lumotga ega bo'lmoqchi bo'lsangiz, quyidagi raqamga qo'ng'iroq qiling: +998905636333", Extra.markup((m) =>
        m.inlineKeyboard(
        [m.callbackButton("⬅️ Ortga", "Android")])
    ))
})
bot.action('and_Narxi', (ctx) => {
    return ctx.reply("Android dasturlash narxi: 350 ming so'm (bir oy uchun)", Extra.markup((m) =>
        m.inlineKeyboard(
        [m.callbackButton("⬅️ Ortga", "Android")])
    ))
})



//Share
bot.hears('🗨 Share', ctx => {
    return ctx.reply("Do`stlaringizga ulashish uchun bizning bot ssilkasi @organish1bot")
})

//Yangiliklar
bot.hears('📢 Yangiliklar', ctx => {
    return ctx.reply('Bu yerda yangiliklar bilan tanishishingiz mumkin.', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                ['🏠 Menyu']]
            )
    }))
})
//Izohlar
bot.hears('💬 Izohlar', ctx => {
    return ctx.reply('Bu yerga biz haqimizdagi fikringizni yozib qoldirishingiz mumkin.', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                ['🏠 Menyu']]
            )
    }))
})

//Biz haqimizda
bot.hears('🏠 Biz haqimizda', ctx => {
    return ctx.reply("ELEGANT O'QUV MARKAZI ilk bor 2012-yil 17-aprelda Buxoro shaxrida Elegant master Klass nomi bilan Namangan viloyati filiali sifatida o'z faoliyatini boshladi. 2015-yil qayta ro'yxatdan o'tib 2016-yil 3-avgust oyida O'ZBEKISTON Respublikasi Xalq ta'limi vazirligi Davlat test markazi tomonidan litsenziyalandi. Shu kundan boshlab markaz yangi ELEGANT BUXORO O'QUV SERVIS nomi bilan o'z ish faoliyatini davom ettira boshladi. O'quv markazining asosiy maqsadi: Yosh avlodni malakali kadr qilib tayyorlash, qizlarni namunali uy bekasi bo'lishiga yaqindan ko'maklashish. O'quv markazda siz malakali mutaxasislar tomonidan: matematika, fizika, tarix, rus, ingliz, koreys, tillari mukammal o'rgatib boriladi. Shu kunga qadar o'quv markazimizda 15000 dan ortiq xotin-qizlar hunar sirlarini o'rganib chiqqan. Shularning orasisidan 1000 dan ortigi o'z yo'nalishi bo'yicha alohida tadbirkorlik faoliyatini yuritishmoqda, 7800 dan ortigi turli korxonalarda ishlab kelmoqda, qolgan qismi esa oilasi davrasida o'z istedodlari bilan oilalarini baxtli qilib kelishmoqda.")
})

//Aloqa
bot.hears('📞 Aloqa', ctx => {
    return ctx.reply('Biz bilan aloqaga chiqing!', Extra.markup((markup) => {
        return markup.resize()
            .keyboard([
                [markup.contactRequestButton('Telefon raqam'),
                markup.locationRequestButton('Manzilni yuborish')],
                ['🏠 Menyu']]
            )
    }))
})


bot.launch()