const { Telegraf, 
    Markup,
    session
} = require('telegraf');
require('dotenv').config()


const bot = new Telegraf(process.env.BOT_TOKEN);
const { MongoClient, ObjectId } = require('mongodb');
const url = process.env.DB;
const client = new MongoClient(url);
client.connect();
const db = client.db('bot');
const collection = db.collection('books');
bot.use(session());

bot.use((ctx,next)=>{
    if (typeof ctx.session === 'undefined'){
        ctx.session = {}
        
    }
    next()
})

bot.start((ctx) => ctx.replyWithHTML(`📚 <b>Государственные книги:</b>\n1. Литература 1 часть \n2. Литература 2 часть \n3. Алгебра \n4. Геометрия \n5. Биология \n6. Черчение \n7. Физика \n8. Информатика(учебник) \n9. Информатика(методика) \n10. Воспитание \n11. Экономика \n12. География \n13. Всемирная История \n14. Химия \n15. ОКП(Основы Конституционного Права) \n16. ИНН(Идея Национальной Независимости) \n17. Узбекский Язык \n18. История Узбекистана \n19. Русский Язык \n20. Технология\n\n📚 <b>Дополнительные книги:</b>\n- Mindset\n- 4000 Essential Words 4`, Markup.inlineKeyboard(
    [
        [Markup.button.callback('1', 'b1'), Markup.button.callback('2', 'b2'), Markup.button.callback('3', 'b3'), Markup.button.callback('4', 'b4'), Markup.button.callback('5', 'b5')],
        [Markup.button.callback('6', 'b6'), Markup.button.callback('7', 'b7'), Markup.button.callback('8', 'b8'), Markup.button.callback('9', 'b9'), Markup.button.callback('10', 'b10')],
        [Markup.button.callback('11', 'b11'), Markup.button.callback('12', 'b12'), Markup.button.callback('13', 'b13'), Markup.button.callback('14', 'b14'), Markup.button.callback('15', 'b15')],
        [Markup.button.callback('16', 'b16'), Markup.button.callback('17', 'b17'), Markup.button.callback('18', 'b18'), Markup.button.callback('19', 'b19'), Markup.button.callback('20', 'b20')],
        [Markup.button.callback('MINDSET', 'MS')],
        [Markup.button.callback('4000EW', 'FF')]
    ]
)));

bot.launch({dropPendingUpdates: true});

bot.command('books', async (ctx) => {
    try {
        await ctx.replyWithHTML(`📚 <b>Государственные книги:</b>\n1. Литература 1 часть \n2. Литература 2 часть \n3. Алгебра \n4. Геометрия \n5. Биология \n6. Черчение \n7. Физика \n8. Информатика(учебник) \n9. Информатика(методика) \n10. Воспитание \n11. Экономика \n12. География \n13. Всемирная История \n14. Химия \n15. ОКП(Основы Конституционного Права) \n16. ИНН(Идея Национальной Независимости) \n17. Узбекский Язык \n18. История Узбекистана \n19. Русский Язык \n20. Технология\n\n📚 <b>Дополнительные книги:</b>\n- Mindset\n- 4000 Essential Words 4`, Markup.inlineKeyboard(
            [
                [Markup.button.callback('1', 'b1'), Markup.button.callback('2', 'b2'), Markup.button.callback('3', 'b3'), Markup.button.callback('4', 'b4'), Markup.button.callback('5', 'b5')],
                [Markup.button.callback('6', 'b6'), Markup.button.callback('7', 'b7'), Markup.button.callback('8', 'b8'), Markup.button.callback('9', 'b9'), Markup.button.callback('10', 'b10')],
                [Markup.button.callback('11', 'b11'), Markup.button.callback('12', 'b12'), Markup.button.callback('13', 'b13'), Markup.button.callback('14', 'b14'), Markup.button.callback('15', 'b15')],
                [Markup.button.callback('16', 'b16'), Markup.button.callback('17', 'b17'), Markup.button.callback('18', 'b18'), Markup.button.callback('19', 'b19'), Markup.button.callback('20', 'b20')],
                [Markup.button.callback('MINDSET', 'MS')],
                [Markup.button.callback('4000EW', 'FF')]
            ]
        ))
    } catch(e) {
        console.error(e);
    }
});


bot.on('document', async ctx => console.log(ctx.message.document))

/* act */

bot.action('b1', async (ctx) => {
    try {
        await ctx.reply(`Документ загружается, подождите немного...`)
        await ctx.replyWithDocument({
            source: './books/Литература-1.pdf',
        })
        await ctx.answerCbQuery('Документ доставлен', {show_alert: false})
    } catch(e) {
        console.error(e);
    }
    
})

bot.action('b2', async (ctx) => {
    try {
        await ctx.reply(`Документ загружается, подождите немного...`)
        await ctx.replyWithDocument({
            source: './books/Литература-2.pdf'
        })
        await ctx.answerCbQuery('Документ доставлен', {show_alert: false})
    } catch(e) {
        console.error(e);
    }
})

bot.action('b3', async (ctx) => {
    try {
        await ctx.reply(`Документ загружается, подождите немного...`)
        await ctx.replyWithDocument({
            source: './books/Алгебра.pdf',
        }) 
        await ctx.answerCbQuery('Документ доставлен', {show_alert: false})
    } catch(e) {
        console.error(e);
    }
})

bot.action('b4', async (ctx) => {
    try {
        await ctx.reply(`Документ загружается, подождите немного...`)
        await ctx.replyWithDocument({
            source: './books/Геометрия.pdf',
        }) 
        await ctx.answerCbQuery('Документ доставлен', {show_alert: false})
    } catch(e) {
        console.error(e);
    }
})

bot.action('b5', async (ctx) => {
    try {
        await ctx.reply(`Документ загружается, подождите немного...`)
        await ctx.replyWithDocument({
            source: './books/Биология.pdf',
        })
        await ctx.answerCbQuery('Документ доставлен', {show_alert: false})
    } catch(e) {
        console.error(e);
    }
})

bot.action('b6', async (ctx) => {
    try {
        await ctx.reply(`Документ загружается, подождите немного...`)
        await ctx.replyWithDocument({
            source: './books/Черчение.pdf',
        })
        await ctx.answerCbQuery('Документ доставлен', {show_alert: false})
    } catch(e) {
        console.error(e);
    }
})

bot.action('b7', async (ctx) => {
    try {
        await ctx.reply(`Документ загружается, подождите немного...`)
        await ctx.replyWithDocument({
            source: './books/Физика.pdf',
        })
        await ctx.answerCbQuery('Документ доставлен', {show_alert: false})
    } catch(e) {
        console.error(e);
    }
})

bot.action('b8', async (ctx) => {
    try {
        await ctx.reply(`Документ загружается, подождите немного...`)
        await ctx.replyWithDocument({
            source: './books/Информатика(учебник).pdf',
        })
        await ctx.answerCbQuery('Документ доставлен', {show_alert: false})
    } catch(e) {
        console.error(e);
    }
})

bot.action('b9', async (ctx) => {
    try {
        await ctx.reply(`Документ загружается, подождите немного...`)
        await ctx.replyWithDocument({
            source: './books/Информатика(методика).pdf',
        })
        await ctx.answerCbQuery('Документ доставлен', {show_alert: false})
    } catch(e) {
        console.error(e);
    }
})

bot.action('b10', async (ctx) => {
    try {
        await ctx.reply(`Документ загружается, подождите немного...`)
        await ctx.replyWithDocument({
            source: './books/Воспитание.pdf',
        })
        await ctx.answerCbQuery('Документ доставлен', {show_alert: false})
    } catch(e) {
        console.error(e);
    }
})

bot.action('b11', async (ctx) => {
    try {
        await ctx.reply(`Документ загружается, подождите немного...`)
        await ctx.replyWithDocument({
            source: './books/Экономика.pdf',
        })
        await ctx.answerCbQuery('Документ доставлен', {show_alert: false})
    } catch(e) {
        console.error(e);
    }
})

bot.action('b12', async (ctx) => {
    try {
        await ctx.reply(`Документ загружается, подождите немного...`)
        await ctx.replyWithDocument({
            source: './books/География.pdf',
        })
        await ctx.answerCbQuery('Документ доставлен', {show_alert: false})
    } catch(e) {
        console.error(e);
    }
})

bot.action('b13', async (ctx) => {
    try {
        await ctx.reply(`Документ загружается, подождите немного...`)
        await ctx.replyWithDocument({
            source: './books/История(Всемирная).pdf',
        })
        await ctx.answerCbQuery('Документ доставлен', {show_alert: false})
    } catch(e) {
        console.error(e);
    }
})

bot.action('b14', async (ctx) => {
    try {
        await ctx.reply(`Документ загружается, подождите немного...`)
        await ctx.replyWithDocument({
            source: './books/Химия.pdf',
        })
        await ctx.answerCbQuery('Документ доставлен', {show_alert: false})
    } catch(e) {
        console.error(e);
    }
})

bot.action('b15', async (ctx) => {
    try {
        await ctx.reply(`Документ загружается, подождите немного...`)
        await ctx.replyWithDocument({
            source: './books/ОКП.pdf',
        })
        await ctx.answerCbQuery('Документ доставлен', {show_alert: false})
    } catch(e) {
        console.error(e);
    }
})

bot.action('b16', async (ctx) => {
    try {
        await ctx.reply(`Документ загружается, подождите немного...`)
        await ctx.replyWithDocument({
            source: './books/ИНН.pdf',
        })
        await ctx.answerCbQuery('Документ доставлен', {show_alert: false})
    } catch(e) {
        console.error(e);
    }
})

bot.action('b17', async (ctx) => {
    try {
        await ctx.reply(`Документ загружается, подождите немного...`)
        await ctx.replyWithDocument({
            source: './books/Узбекский_Язык.pdf',
        })
        await ctx.answerCbQuery('Документ доставлен', {show_alert: false})
    } catch(e) {
        console.error(e);
    }
})

bot.action('b18', async (ctx) => {
    try {
        await ctx.reply(`Документ загружается, подождите немного...`)
        await ctx.replyWithDocument({
            source: './books/История(Узбекистан).pdf',
        })
        await ctx.answerCbQuery('Документ доставлен', {show_alert: false})
    } catch(e) {
        console.error(e);
    }
})

bot.action('b19', async (ctx) => {
    try {
        await ctx.reply(`Документ загружается, подождите немного...`)
        await ctx.replyWithDocument({
            source: './books/Русский_Язык.pdf',
        })
        await ctx.answerCbQuery('Документ доставлен', {show_alert: false})
    } catch(e) {
        console.error(e);
    }
})

bot.action('b20', async (ctx) => {
    try {
        await ctx.reply(`Документ загружается, подождите немного...`)
        await ctx.replyWithDocument({
            source: './books/Технология.pdf',
        })
        await ctx.answerCbQuery('Документ доставлен', {show_alert: false})
    } catch(e) {
        console.error(e);
    }
})

bot.action('MS', async ctx => {
    try {
        await ctx.reply(`Документ загружается, подождите немного...`)
        await ctx.replyWithDocument({
            source: './books/mindset.pdf',
        })
        await ctx.answerCbQuery('Документ доставлен', {show_alert: false})
    } catch (e) {
        console.error(e);
    }
})
bot.action('FF', async ctx => {
    try {
        await ctx.reply(`Документ загружается, подождите немного...`)
        await ctx.replyWithDocument({
            source: './books/4000.Essential.English.Words-4.pdf',
        })
        await ctx.answerCbQuery('Документ доставлен', {show_alert: false})
    } catch (e) {
        console.error(e);
    }
})
/* act */
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));