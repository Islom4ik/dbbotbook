const { Telegraf, 
    Markup 
} = require('telegraf');
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('ru.| Скину вам любые книги 9 класса чтобы не искать их 3 часа \neng.| I will send you any books of the 9th grade so that you don’t have to look for them for 3 hours \nНапиши команду /books и я скину тебе список книг \nPowered by М.Ислом @geemNp'));
bot.help((ctx) => ctx.reply('Команды бота: \n/start - запуск(перезапуск) бота \n/books - скинет список книг'));
bot.launch();

bot.command('books', async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>1. Литература 1 часть \n2. Литература 2 часть \n3. Алгебра \n4. Геометрия \n5. Биология \n6. Черчение \n7. Физика \n8. Информатика(учебник) \n9. Информатика(методика)</b> \n10. Воспитание \n11. Экономика \n12. География \n13. Всемирная История \n14. Химия \n15. ОКП(Основы Конституционного Права) \n16. ИНН(Идея Национальной Независимости) \n17. Узбекский Язык \n18. История Узбекистана \n19. Русский Язык \n20. Технология', Markup.inlineKeyboard(
            [
                [Markup.button.callback('1', 'b1'), Markup.button.callback('2', 'b2'), Markup.button.callback('3', 'b3'), Markup.button.callback('4', 'b4'), Markup.button.callback('5', 'b5')],
                [Markup.button.callback('6', 'b6'), Markup.button.callback('7', 'b7'), Markup.button.callback('8', 'b8'), Markup.button.callback('9', 'b9'), Markup.button.callback('10', 'b10')],
                [Markup.button.callback('11', 'b11'), Markup.button.callback('12', 'b12'), Markup.button.callback('13', 'b13'), Markup.button.callback('14', 'b14'), Markup.button.callback('15', 'b15')],
                [Markup.button.callback('16', 'b16'), Markup.button.callback('17', 'b17'), Markup.button.callback('18', 'b18'), Markup.button.callback('19', 'b19'), Markup.button.callback('20', 'b20')]
            ]
            
        ))
    } catch(e) {
        console.error(e);
    }
})

/* act */

bot.action('b1', async (ctx) => {
    try {
        await ctx.reply('Документ загружается...')
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/www.idum.uz__adabiyot_1qism_9_rus.pdf',
        })
    } catch(e) {
        console.error(e);
    }
    await ctx.reply('Документ успешно доставлен вам!')
})

bot.action('b2', async (ctx) => {
    try {
        await ctx.reply('Документ загружается...')
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/www.idum.uz__adabiyot_2qism_9_rus.pdf',
        })
        await ctx.reply('Документ успешно доставлен вам!')
    } catch(e) {
        console.error(e);
    }
})

bot.action('b3', async (ctx) => {
    try {
        await ctx.reply('Документ загружается...')
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/www.idum.uz__algebra_9_rus.pdf',
        })
        await ctx.reply('Документ успешно доставлен вам!')
    } catch(e) {
        console.error(e);
    }
})

bot.action('b4', async (ctx) => {
    try {
        await ctx.reply('Документ загружается...')
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/www.idum.uz__geometriya_9_rus.pdf',
        })
        await ctx.reply('Документ успешно доставлен вам!')
    } catch(e) {
        console.error(e);
    }
})

bot.action('b5', async (ctx) => {
    try {
        await ctx.reply('Документ загружается...')
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/www.idum.uz__biologiya_9_rus.pdf',
        })
        await ctx.reply('Документ успешно доставлен вам!')
    } catch(e) {
        console.error(e);
    }
})

bot.action('b6', async (ctx) => {
    try {
        await ctx.reply('Документ загружается...')
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/www.idum.uz__chizmachilik_9_rus.pdf',
        })
        await ctx.reply('Документ успешно доставлен вам!')
    } catch(e) {
        console.error(e);
    }
})

bot.action('b7', async (ctx) => {
    try {
        await ctx.reply('Документ загружается...')
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/www.idum.uz__fizika_9_rus.pdf',
        })
        await ctx.reply('Документ успешно доставлен вам!')
    } catch(e) {
        console.error(e);
    }
})

bot.action('b8', async (ctx) => {
    try {
        await ctx.reply('Документ загружается...')
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/Informatika_9_rus_2020_uchebnik.pdf',
        })
        await ctx.reply('Документ успешно доставлен вам!')
    } catch(e) {
        console.error(e);
    }
})

bot.action('b9', async (ctx) => {
    try {
        await ctx.reply('Документ загружается...')
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/www.idum.uz__9-informatika-metodika.pdf',
        })
        await ctx.reply('Документ успешно доставлен вам!')
    } catch(e) {
        console.error(e);
    }
})

bot.action('b10', async (ctx) => {
    try {
        await ctx.reply('Документ загружается...')
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/vospitaniye_9_rus_2020_www.idum.uz.pdf',
        })
        await ctx.reply('Документ успешно доставлен вам!')
    } catch(e) {
        console.error(e);
    }
})

bot.action('b11', async (ctx) => {
    try {
        await ctx.reply('Документ загружается...')
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/iqtisodiy_bilim_asoslari_9_rus.pdf',
        })
        await ctx.reply('Документ успешно доставлен вам!')
    } catch(e) {
        console.error(e);
    }
})

bot.action('b12', async (ctx) => {
    try {
        await ctx.reply('Документ загружается...')
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/jahon_ijtimoiy_iqtisodiy_geografiyasi_9_rus.pdf',
        })
        await ctx.reply('Документ успешно доставлен вам!')
    } catch(e) {
        console.error(e);
    }
})

bot.action('b13', async (ctx) => {
    try {
        await ctx.reply('Документ загружается...')
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/jahon_tarixi_9_rus.pdf',
        })
        await ctx.reply('Документ успешно доставлен вам!')
    } catch(e) {
        console.error(e);
    }
})

bot.action('b14', async (ctx) => {
    try {
        await ctx.reply('Документ загружается...')
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/kimyo_9_rus.pdf',
        })
        await ctx.reply('Документ успешно доставлен вам!')
    } catch(e) {
        console.error(e);
    }
})

bot.action('b15', async (ctx) => {
    try {
        await ctx.reply('Документ загружается...')
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/www.idum.uz__konstitutsiyaviy_huquq_asoslari_9_rus.pdf',
        })
        await ctx.reply('Документ успешно доставлен вам!')
    } catch(e) {
        console.error(e);
    }
})

bot.action('b16', async (ctx) => {
    try {
        await ctx.reply('Документ загружается...')
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/milliy_goya_9_rus.pdf',
        })
        await ctx.reply('Документ успешно доставлен вам!')
    } catch(e) {
        console.error(e);
    }
})

bot.action('b17', async (ctx) => {
    try {
        await ctx.reply('Документ загружается...')
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/ozbek_tili_9_rus.pdf',
        })
        await ctx.reply('Документ успешно доставлен вам!')
    } catch(e) {
        console.error(e);
    }
})

bot.action('b18', async (ctx) => {
    try {
        await ctx.reply('Документ загружается...')
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/ozbekiston_tarixi_9_rus.pdf',
        })
        await ctx.reply('Документ успешно доставлен вам!')
    } catch(e) {
        console.error(e);
    }
})

bot.action('b19', async (ctx) => {
    try {
        await ctx.reply('Документ загружается...')
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/rus_tili_9_rus.pdf',
        })
        await ctx.reply('Документ успешно доставлен вам!')
    } catch(e) {
        console.error(e);
    }
})

bot.action('b20', async (ctx) => {
    try {
        await ctx.reply('Документ загружается...')
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/www.idum.uz__texnologiya_9_rus.pdf',
        })
        await ctx.reply('Документ успешно доставлен вам!')
    } catch(e) {
        console.error(e);
    }
})
/* act */
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));