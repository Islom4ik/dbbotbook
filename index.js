const { Telegraf, 
    Markup,
    session
} = require('telegraf');
require('dotenv').config()
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.use(session());

bot.use((ctx,next)=>{
    if (typeof ctx.session === 'undefined'){
        ctx.session = {}
        
    }
    next()
})

bot.start((ctx) => ctx.reply('Бот скинет вам любые книги 9 класса чтобы не искать их 3 часа\nНапиши команду /books и я скину тебе список книг \nPowered by @geemNp'));
bot.help((ctx) => ctx.reply('Команды бота: \n/start - запуск(перезапуск) бота \n/books - скинет список книг'));
bot.launch(console.log('Бот готов к использованию...'));

bot.command('books', async (ctx) => {
    try {
        if (ctx.session?.booksRequest> (new Date().valueOf() - 5 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить список можно через 5 минут (@${ctx.message.from.username})`);
        ctx.session.booksRequest = new Date().valueOf();

        await ctx.replyWithHTML('<b>1. Литература 1 часть \n2. Литература 2 часть \n3. Алгебра \n4. Геометрия \n5. Биология \n6. Черчение \n7. Физика \n8. Информатика(учебник) \n9. Информатика(методика) \n10. Воспитание \n11. Экономика \n12. География \n13. Всемирная История \n14. Химия \n15. ОКП(Основы Конституционного Права) \n16. ИНН(Идея Национальной Независимости) \n17. Узбекский Язык \n18. История Узбекистана \n19. Русский Язык \n20. Технология</b>', Markup.inlineKeyboard(
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
});


/* act */

bot.action('b1', async (ctx) => {
    try {
        if (ctx.session?.b1Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b1Request = new Date().valueOf();
        /* main */
        if (ctx.session?.b2Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b2Request = new Date().valueOf();

        if (ctx.session?.b3Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b3Request = new Date().valueOf();
        
        if (ctx.session?.b4Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b4Request = new Date().valueOf();

        if (ctx.session?.b5Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b5Request = new Date().valueOf();

        if (ctx.session?.b6Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b6Request = new Date().valueOf();

        if (ctx.session?.b7Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b7Request = new Date().valueOf();

        if (ctx.session?.b8Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b8Request = new Date().valueOf();

        if (ctx.session?.b9Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b9Request = new Date().valueOf();

        if (ctx.session?.b10Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b10Request = new Date().valueOf();

        if (ctx.session?.b11Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b11Request = new Date().valueOf();

        if (ctx.session?.b12Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b12Request = new Date().valueOf();

        if (ctx.session?.b13Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b13Request = new Date().valueOf();

        if (ctx.session?.b14Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b14Request = new Date().valueOf();

        if (ctx.session?.b15Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b15Request = new Date().valueOf();

        if (ctx.session?.b16Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b16Request = new Date().valueOf();

        if (ctx.session?.b17Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b17Request = new Date().valueOf();

        if (ctx.session?.b18Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b18Request = new Date().valueOf();

        if (ctx.session?.b19Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b19Request = new Date().valueOf();

        if (ctx.session?.b20Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b20Request = new Date().valueOf();


        /* time reset */
        await ctx.reply(`‼ @${ctx.update.callback_query.from.username}, документ загружается, подождите немного...`)
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/Литература-1.pdf',
        })
    } catch(e) {
        console.error(e);
    }
    
})

bot.action('b2', async (ctx) => {
    try {
        if (ctx.session?.b2Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b2Request = new Date().valueOf();
        /* main */
        if (ctx.session?.b1Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b1Request = new Date().valueOf();

        if (ctx.session?.b3Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b3Request = new Date().valueOf();
        
        if (ctx.session?.b4Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b4Request = new Date().valueOf();

        if (ctx.session?.b5Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b5Request = new Date().valueOf();

        if (ctx.session?.b6Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b6Request = new Date().valueOf();

        if (ctx.session?.b7Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b7Request = new Date().valueOf();

        if (ctx.session?.b8Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b8Request = new Date().valueOf();

        if (ctx.session?.b9Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b9Request = new Date().valueOf();

        if (ctx.session?.b10Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b10Request = new Date().valueOf();

        if (ctx.session?.b11Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b11Request = new Date().valueOf();

        if (ctx.session?.b12Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b12Request = new Date().valueOf();

        if (ctx.session?.b13Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b13Request = new Date().valueOf();

        if (ctx.session?.b14Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username}) `);
        ctx.session.b14Request = new Date().valueOf();

        if (ctx.session?.b15Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b15Request = new Date().valueOf();

        if (ctx.session?.b16Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b16Request = new Date().valueOf();

        if (ctx.session?.b17Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b17Request = new Date().valueOf();

        if (ctx.session?.b18Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b18Request = new Date().valueOf();

        if (ctx.session?.b19Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b19Request = new Date().valueOf();

        if (ctx.session?.b20Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b20Request = new Date().valueOf();

        
        /* time reset */
        await ctx.reply(`‼ @${ctx.update.callback_query.from.username}, документ загружается, подождите немного...`)
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/Литература-2.pdf'
        })
        
    } catch(e) {
        console.error(e);
    }
})

bot.action('b3', async (ctx) => {
    try {
        if (ctx.session?.b3Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b3Request = new Date().valueOf();
        /* main */
        if (ctx.session?.b1Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b1Request = new Date().valueOf();

        if (ctx.session?.b2Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b2Request = new Date().valueOf();
        
        if (ctx.session?.b4Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b4Request = new Date().valueOf();

        if (ctx.session?.b5Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b5Request = new Date().valueOf();

        if (ctx.session?.b6Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b6Request = new Date().valueOf();

        if (ctx.session?.b7Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b7Request = new Date().valueOf();

        if (ctx.session?.b8Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b8Request = new Date().valueOf();

        if (ctx.session?.b9Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b9Request = new Date().valueOf();

        if (ctx.session?.b10Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b10Request = new Date().valueOf();

        if (ctx.session?.b11Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b11Request = new Date().valueOf();

        if (ctx.session?.b12Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b12Request = new Date().valueOf();

        if (ctx.session?.b13Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b13Request = new Date().valueOf();

        if (ctx.session?.b14Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b14Request = new Date().valueOf();

        if (ctx.session?.b15Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b15Request = new Date().valueOf();

        if (ctx.session?.b16Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b16Request = new Date().valueOf();

        if (ctx.session?.b17Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b17Request = new Date().valueOf();

        if (ctx.session?.b18Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b18Request = new Date().valueOf();

        if (ctx.session?.b19Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b19Request = new Date().valueOf();

        if (ctx.session?.b20Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b20Request = new Date().valueOf();


        /* time reset */
        await ctx.reply(`‼ @${ctx.update.callback_query.from.username}, документ загружается, подождите немного...`)
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/Алгебра.pdf',
        })
        
    } catch(e) {
        console.error(e);
    }
})

bot.action('b4', async (ctx) => {
    try {
        if (ctx.session?.b4Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b4Request = new Date().valueOf();

        /* main */
        if (ctx.session?.b1Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b1Request = new Date().valueOf();

        if (ctx.session?.b2Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b2Request = new Date().valueOf();
        
        if (ctx.session?.b3Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b3Request = new Date().valueOf();

        if (ctx.session?.b5Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b5Request = new Date().valueOf();

        if (ctx.session?.b6Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b6Request = new Date().valueOf();

        if (ctx.session?.b7Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b7Request = new Date().valueOf();

        if (ctx.session?.b8Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b8Request = new Date().valueOf();

        if (ctx.session?.b9Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b9Request = new Date().valueOf();

        if (ctx.session?.b10Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b10Request = new Date().valueOf();

        if (ctx.session?.b11Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b11Request = new Date().valueOf();

        if (ctx.session?.b12Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b12Request = new Date().valueOf();

        if (ctx.session?.b13Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b13Request = new Date().valueOf();

        if (ctx.session?.b14Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b14Request = new Date().valueOf();

        if (ctx.session?.b15Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b15Request = new Date().valueOf();

        if (ctx.session?.b16Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b16Request = new Date().valueOf();

        if (ctx.session?.b17Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b17Request = new Date().valueOf();

        if (ctx.session?.b18Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b18Request = new Date().valueOf();

        if (ctx.session?.b19Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b19Request = new Date().valueOf();

        if (ctx.session?.b20Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b20Request = new Date().valueOf();



        /* time reset */
        await ctx.reply(`‼ @${ctx.update.callback_query.from.username}, документ загружается, подождите немного...`)
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/Геометрия.pdf',
        })
        
    } catch(e) {
        console.error(e);
    }
})

bot.action('b5', async (ctx) => {
    try {
        if (ctx.session?.b5Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b5Request = new Date().valueOf();
        /* main */
        if (ctx.session?.b1Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b1Request = new Date().valueOf();

        if (ctx.session?.b2Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b2Request = new Date().valueOf();
        
        if (ctx.session?.b3Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b3Request = new Date().valueOf();

        if (ctx.session?.b4Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b4Request = new Date().valueOf();

        if (ctx.session?.b6Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b6Request = new Date().valueOf();

        if (ctx.session?.b7Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b7Request = new Date().valueOf();

        if (ctx.session?.b8Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b8Request = new Date().valueOf();

        if (ctx.session?.b9Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b9Request = new Date().valueOf();

        if (ctx.session?.b10Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b10Request = new Date().valueOf();

        if (ctx.session?.b11Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b11Request = new Date().valueOf();

        if (ctx.session?.b12Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b12Request = new Date().valueOf();

        if (ctx.session?.b13Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b13Request = new Date().valueOf();

        if (ctx.session?.b14Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b14Request = new Date().valueOf();

        if (ctx.session?.b15Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b15Request = new Date().valueOf();

        if (ctx.session?.b16Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b16Request = new Date().valueOf();

        if (ctx.session?.b17Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b17Request = new Date().valueOf();

        if (ctx.session?.b18Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b18Request = new Date().valueOf();

        if (ctx.session?.b19Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b19Request = new Date().valueOf();

        if (ctx.session?.b20Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b20Request = new Date().valueOf();


        /* time reset */
        await ctx.reply(`‼ @${ctx.update.callback_query.from.username}, документ загружается, подождите немного...`)
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/Биология.pdf',
        })
        
    } catch(e) {
        console.error(e);
    }
})

bot.action('b6', async (ctx) => {
    try {
        if (ctx.session?.b6Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b6Request = new Date().valueOf();
        /* main */
        if (ctx.session?.b1Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b1Request = new Date().valueOf();

        if (ctx.session?.b2Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b2Request = new Date().valueOf();
        
        if (ctx.session?.b3Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b3Request = new Date().valueOf();

        if (ctx.session?.b4Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b4Request = new Date().valueOf();

        if (ctx.session?.b5Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b5Request = new Date().valueOf();

        if (ctx.session?.b7Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b7Request = new Date().valueOf();

        if (ctx.session?.b8Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b8Request = new Date().valueOf();

        if (ctx.session?.b9Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b9Request = new Date().valueOf();

        if (ctx.session?.b10Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b10Request = new Date().valueOf();

        if (ctx.session?.b11Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b11Request = new Date().valueOf();

        if (ctx.session?.b12Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b12Request = new Date().valueOf();

        if (ctx.session?.b13Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b13Request = new Date().valueOf();

        if (ctx.session?.b14Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b14Request = new Date().valueOf();

        if (ctx.session?.b15Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b15Request = new Date().valueOf();

        if (ctx.session?.b16Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b16Request = new Date().valueOf();

        if (ctx.session?.b17Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b17Request = new Date().valueOf();

        if (ctx.session?.b18Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b18Request = new Date().valueOf();

        if (ctx.session?.b19Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b19Request = new Date().valueOf();

        if (ctx.session?.b20Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b20Request = new Date().valueOf();


        /* time reset */
        await ctx.reply(`‼ @${ctx.update.callback_query.from.username}, документ загружается, подождите немного...`)
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/Черчение.pdf',
        })
        
    } catch(e) {
        console.error(e);
    }
})

bot.action('b7', async (ctx) => {
    try {
        if (ctx.session?.b7Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b7Request = new Date().valueOf();
        /* main */
        if (ctx.session?.b1Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b1Request = new Date().valueOf();

        if (ctx.session?.b2Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b2Request = new Date().valueOf();
        
        if (ctx.session?.b3Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b3Request = new Date().valueOf();

        if (ctx.session?.b4Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b4Request = new Date().valueOf();

        if (ctx.session?.b5Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b5Request = new Date().valueOf();

        if (ctx.session?.b6Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b6Request = new Date().valueOf();

        if (ctx.session?.b8Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b8Request = new Date().valueOf();

        if (ctx.session?.b9Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b9Request = new Date().valueOf();

        if (ctx.session?.b10Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b10Request = new Date().valueOf();

        if (ctx.session?.b11Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b11Request = new Date().valueOf();

        if (ctx.session?.b12Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b12Request = new Date().valueOf();

        if (ctx.session?.b13Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b13Request = new Date().valueOf();

        if (ctx.session?.b14Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b14Request = new Date().valueOf();

        if (ctx.session?.b15Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b15Request = new Date().valueOf();

        if (ctx.session?.b16Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b16Request = new Date().valueOf();

        if (ctx.session?.b17Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b17Request = new Date().valueOf();

        if (ctx.session?.b18Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b18Request = new Date().valueOf();

        if (ctx.session?.b19Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b19Request = new Date().valueOf();

        if (ctx.session?.b20Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b20Request = new Date().valueOf();



        /* time reset */
        await ctx.reply(`‼ @${ctx.update.callback_query.from.username}, документ загружается, подождите немного...`)
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/Физика.pdf',
        })
        
    } catch(e) {
        console.error(e);
    }
})

bot.action('b8', async (ctx) => {
    try {
        if (ctx.session?.b8Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b8Request = new Date().valueOf();
        /* main */
        if (ctx.session?.b1Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b1Request = new Date().valueOf();

        if (ctx.session?.b2Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b2Request = new Date().valueOf();
        
        if (ctx.session?.b3Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b3Request = new Date().valueOf();

        if (ctx.session?.b4Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b4Request = new Date().valueOf();

        if (ctx.session?.b5Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b5Request = new Date().valueOf();

        if (ctx.session?.b6Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b6Request = new Date().valueOf();

        if (ctx.session?.b7Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b7Request = new Date().valueOf();

        if (ctx.session?.b9Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b9Request = new Date().valueOf();

        if (ctx.session?.b10Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b10Request = new Date().valueOf();

        if (ctx.session?.b11Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b11Request = new Date().valueOf();

        if (ctx.session?.b12Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b12Request = new Date().valueOf();

        if (ctx.session?.b13Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b13Request = new Date().valueOf();

        if (ctx.session?.b14Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b14Request = new Date().valueOf();

        if (ctx.session?.b15Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b15Request = new Date().valueOf();

        if (ctx.session?.b16Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b16Request = new Date().valueOf();

        if (ctx.session?.b17Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b17Request = new Date().valueOf();

        if (ctx.session?.b18Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b18Request = new Date().valueOf();

        if (ctx.session?.b19Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b19Request = new Date().valueOf();

        if (ctx.session?.b20Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b20Request = new Date().valueOf();


        /* time reset */
        await ctx.reply(`‼ @${ctx.update.callback_query.from.username}, документ загружается, подождите немного...`)
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/Информатика(учебник).pdf',
        })
        
    } catch(e) {
        console.error(e);
    }
})

bot.action('b9', async (ctx) => {
    try {
        if (ctx.session?.b9Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b9Request = new Date().valueOf();
        /* main */
        if (ctx.session?.b1Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b1Request = new Date().valueOf();

        if (ctx.session?.b2Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b2Request = new Date().valueOf();
        
        if (ctx.session?.b3Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b3Request = new Date().valueOf();

        if (ctx.session?.b4Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b4Request = new Date().valueOf();

        if (ctx.session?.b5Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b5Request = new Date().valueOf();

        if (ctx.session?.b6Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b6Request = new Date().valueOf();

        if (ctx.session?.b7Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b7Request = new Date().valueOf();

        if (ctx.session?.b8Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b8Request = new Date().valueOf();

        if (ctx.session?.b10Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b10Request = new Date().valueOf();

        if (ctx.session?.b11Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b11Request = new Date().valueOf();

        if (ctx.session?.b12Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b12Request = new Date().valueOf();

        if (ctx.session?.b13Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b13Request = new Date().valueOf();

        if (ctx.session?.b14Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b14Request = new Date().valueOf();

        if (ctx.session?.b15Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b15Request = new Date().valueOf();

        if (ctx.session?.b16Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b16Request = new Date().valueOf();

        if (ctx.session?.b17Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b17Request = new Date().valueOf();

        if (ctx.session?.b18Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b18Request = new Date().valueOf();

        if (ctx.session?.b19Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b19Request = new Date().valueOf();

        if (ctx.session?.b20Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b20Request = new Date().valueOf();

        
        /* time reset */
        await ctx.reply(`‼ @${ctx.update.callback_query.from.username}, документ загружается, подождите немного...`)
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/Информатика(методика).pdf',
        })
        
    } catch(e) {
        console.error(e);
    }
})

bot.action('b10', async (ctx) => {
    try {
        if (ctx.session?.b10Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b10Request = new Date().valueOf();
        /* main */
        if (ctx.session?.b1Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b1Request = new Date().valueOf();

        if (ctx.session?.b2Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b2Request = new Date().valueOf();
        
        if (ctx.session?.b3Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b3Request = new Date().valueOf();

        if (ctx.session?.b4Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b4Request = new Date().valueOf();

        if (ctx.session?.b5Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b5Request = new Date().valueOf();

        if (ctx.session?.b6Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b6Request = new Date().valueOf();

        if (ctx.session?.b7Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b7Request = new Date().valueOf();

        if (ctx.session?.b8Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b8Request = new Date().valueOf();

        if (ctx.session?.b9Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b9Request = new Date().valueOf();

        if (ctx.session?.b11Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b11Request = new Date().valueOf();

        if (ctx.session?.b12Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b12Request = new Date().valueOf();

        if (ctx.session?.b13Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b13Request = new Date().valueOf();

        if (ctx.session?.b14Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b14Request = new Date().valueOf();

        if (ctx.session?.b15Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b15Request = new Date().valueOf();

        if (ctx.session?.b16Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b16Request = new Date().valueOf();

        if (ctx.session?.b17Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b17Request = new Date().valueOf();

        if (ctx.session?.b18Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b18Request = new Date().valueOf();

        if (ctx.session?.b19Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b19Request = new Date().valueOf();

        if (ctx.session?.b20Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b20Request = new Date().valueOf();



        /* time reset */
        await ctx.reply(`‼ @${ctx.update.callback_query.from.username}, документ загружается, подождите немного...`)
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/Воспитание.pdf',
        })
        
    } catch(e) {
        console.error(e);
    }
})

bot.action('b11', async (ctx) => {
    try {
        if (ctx.session?.b11Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b11Request = new Date().valueOf();
        /* main */
        if (ctx.session?.b1Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b1Request = new Date().valueOf();

        if (ctx.session?.b2Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b2Request = new Date().valueOf();
        
        if (ctx.session?.b3Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b3Request = new Date().valueOf();

        if (ctx.session?.b4Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b4Request = new Date().valueOf();

        if (ctx.session?.b5Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b5Request = new Date().valueOf();

        if (ctx.session?.b6Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b6Request = new Date().valueOf();

        if (ctx.session?.b7Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b7Request = new Date().valueOf();

        if (ctx.session?.b8Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b8Request = new Date().valueOf();

        if (ctx.session?.b9Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b9Request = new Date().valueOf();

        if (ctx.session?.b10Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b10Request = new Date().valueOf();

        if (ctx.session?.b12Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b12Request = new Date().valueOf();

        if (ctx.session?.b13Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b13Request = new Date().valueOf();

        if (ctx.session?.b14Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b14Request = new Date().valueOf();

        if (ctx.session?.b15Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b15Request = new Date().valueOf();

        if (ctx.session?.b16Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b16Request = new Date().valueOf();

        if (ctx.session?.b17Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b17Request = new Date().valueOf();

        if (ctx.session?.b18Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b18Request = new Date().valueOf();

        if (ctx.session?.b19Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b19Request = new Date().valueOf();

        if (ctx.session?.b20Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b20Request = new Date().valueOf();



        /* time reset */
        await ctx.reply(`‼ @${ctx.update.callback_query.from.username}, документ загружается, подождите немного...`)
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/Экономика.pdf',
        })
        
    } catch(e) {
        console.error(e);
    }
})

bot.action('b12', async (ctx) => {
    try {
        if (ctx.session?.b12Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b12Request = new Date().valueOf();
        /* main */
        if (ctx.session?.b1Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b1Request = new Date().valueOf();

        if (ctx.session?.b2Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b2Request = new Date().valueOf();
        
        if (ctx.session?.b3Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b3Request = new Date().valueOf();

        if (ctx.session?.b4Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b4Request = new Date().valueOf();

        if (ctx.session?.b5Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b5Request = new Date().valueOf();

        if (ctx.session?.b6Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b6Request = new Date().valueOf();

        if (ctx.session?.b7Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b7Request = new Date().valueOf();

        if (ctx.session?.b8Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b8Request = new Date().valueOf();

        if (ctx.session?.b9Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b9Request = new Date().valueOf();

        if (ctx.session?.b10Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b10Request = new Date().valueOf();

        if (ctx.session?.b11Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b11Request = new Date().valueOf();

        if (ctx.session?.b13Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b13Request = new Date().valueOf();

        if (ctx.session?.b14Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b14Request = new Date().valueOf();

        if (ctx.session?.b15Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b15Request = new Date().valueOf();

        if (ctx.session?.b16Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b16Request = new Date().valueOf();

        if (ctx.session?.b17Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b17Request = new Date().valueOf();

        if (ctx.session?.b18Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b18Request = new Date().valueOf();

        if (ctx.session?.b19Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b19Request = new Date().valueOf();

        if (ctx.session?.b20Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b20Request = new Date().valueOf();



        /* time reset */
        await ctx.reply(`‼ @${ctx.update.callback_query.from.username}, документ загружается, подождите немного...`)
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/География.pdf',
        })
        
    } catch(e) {
        console.error(e);
    }
})

bot.action('b13', async (ctx) => {
    try {
        if (ctx.session?.b13Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b13Request = new Date().valueOf();
        /* main */
        if (ctx.session?.b1Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b1Request = new Date().valueOf();

        if (ctx.session?.b2Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b2Request = new Date().valueOf();
        
        if (ctx.session?.b3Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b3Request = new Date().valueOf();

        if (ctx.session?.b4Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b4Request = new Date().valueOf();

        if (ctx.session?.b5Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b5Request = new Date().valueOf();

        if (ctx.session?.b6Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b6Request = new Date().valueOf();

        if (ctx.session?.b7Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b7Request = new Date().valueOf();

        if (ctx.session?.b8Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b8Request = new Date().valueOf();

        if (ctx.session?.b9Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b9Request = new Date().valueOf();

        if (ctx.session?.b10Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b10Request = new Date().valueOf();

        if (ctx.session?.b11Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b11Request = new Date().valueOf();

        if (ctx.session?.b12Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b12Request = new Date().valueOf();

        if (ctx.session?.b14Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b14Request = new Date().valueOf();

        if (ctx.session?.b15Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b15Request = new Date().valueOf();

        if (ctx.session?.b16Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b16Request = new Date().valueOf();

        if (ctx.session?.b17Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b17Request = new Date().valueOf();

        if (ctx.session?.b18Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b18Request = new Date().valueOf();

        if (ctx.session?.b19Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b19Request = new Date().valueOf();

        if (ctx.session?.b20Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b20Request = new Date().valueOf();



        /* time reset */
        await ctx.reply(`‼ @${ctx.update.callback_query.from.username}, документ загружается, подождите немного...`)
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/История(Всемирная).pdf',
        })
        
    } catch(e) {
        console.error(e);
    }
})

bot.action('b14', async (ctx) => {
    try {
        if (ctx.session?.b14Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b14Request = new Date().valueOf();
        /* main */
        if (ctx.session?.b1Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b1Request = new Date().valueOf();

        if (ctx.session?.b2Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b2Request = new Date().valueOf();
        
        if (ctx.session?.b3Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b3Request = new Date().valueOf();

        if (ctx.session?.b4Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b4Request = new Date().valueOf();

        if (ctx.session?.b5Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b5Request = new Date().valueOf();

        if (ctx.session?.b6Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b6Request = new Date().valueOf();

        if (ctx.session?.b7Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b7Request = new Date().valueOf();

        if (ctx.session?.b8Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b8Request = new Date().valueOf();

        if (ctx.session?.b9Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b9Request = new Date().valueOf();

        if (ctx.session?.b10Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b10Request = new Date().valueOf();

        if (ctx.session?.b11Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b11Request = new Date().valueOf();

        if (ctx.session?.b12Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b12Request = new Date().valueOf();

        if (ctx.session?.b13Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b13Request = new Date().valueOf();

        if (ctx.session?.b15Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b15Request = new Date().valueOf();

        if (ctx.session?.b16Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b16Request = new Date().valueOf();

        if (ctx.session?.b17Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b17Request = new Date().valueOf();

        if (ctx.session?.b18Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b18Request = new Date().valueOf();

        if (ctx.session?.b19Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b19Request = new Date().valueOf();

        if (ctx.session?.b20Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b20Request = new Date().valueOf();


        /* time reset */
        await ctx.reply(`‼ @${ctx.update.callback_query.from.username}, документ загружается, подождите немного...`)
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/Химия.pdf',
        })
        
    } catch(e) {
        console.error(e);
    }
})

bot.action('b15', async (ctx) => {
    try {
        if (ctx.session?.b15Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b15Request = new Date().valueOf();
        /* main */

        if (ctx.session?.b1Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b1Request = new Date().valueOf();

        if (ctx.session?.b2Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b2Request = new Date().valueOf();
        
        if (ctx.session?.b3Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b3Request = new Date().valueOf();

        if (ctx.session?.b4Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b4Request = new Date().valueOf();

        if (ctx.session?.b5Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b5Request = new Date().valueOf();

        if (ctx.session?.b6Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b6Request = new Date().valueOf();

        if (ctx.session?.b7Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b7Request = new Date().valueOf();

        if (ctx.session?.b8Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b8Request = new Date().valueOf();

        if (ctx.session?.b9Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b9Request = new Date().valueOf();

        if (ctx.session?.b10Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b10Request = new Date().valueOf();

        if (ctx.session?.b11Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b11Request = new Date().valueOf();

        if (ctx.session?.b12Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b12Request = new Date().valueOf();

        if (ctx.session?.b13Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b13Request = new Date().valueOf();

        if (ctx.session?.b14Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b14Request = new Date().valueOf();

        if (ctx.session?.b16Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b16Request = new Date().valueOf();

        if (ctx.session?.b17Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b17Request = new Date().valueOf();

        if (ctx.session?.b18Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b18Request = new Date().valueOf();

        if (ctx.session?.b19Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b19Request = new Date().valueOf();

        if (ctx.session?.b20Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b20Request = new Date().valueOf();


        /* time reset */
        await ctx.reply(`‼ @${ctx.update.callback_query.from.username}, документ загружается, подождите немного...`)
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/ОКП.pdf',
        })
        
    } catch(e) {
        console.error(e);
    }
})

bot.action('b16', async (ctx) => {
    try {
        if (ctx.session?.b16Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b4Request = new Date().valueOf();
        /* main */
        if (ctx.session?.b1Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b1Request = new Date().valueOf();

        if (ctx.session?.b2Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b2Request = new Date().valueOf();
        
        if (ctx.session?.b3Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b3Request = new Date().valueOf();

        if (ctx.session?.b4Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b4Request = new Date().valueOf();

        if (ctx.session?.b5Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b5Request = new Date().valueOf();

        if (ctx.session?.b6Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b6Request = new Date().valueOf();

        if (ctx.session?.b7Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b7Request = new Date().valueOf();

        if (ctx.session?.b8Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b8Request = new Date().valueOf();

        if (ctx.session?.b9Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b9Request = new Date().valueOf();

        if (ctx.session?.b10Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b10Request = new Date().valueOf();

        if (ctx.session?.b11Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b11Request = new Date().valueOf();

        if (ctx.session?.b12Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b12Request = new Date().valueOf();

        if (ctx.session?.b13Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b13Request = new Date().valueOf();

        if (ctx.session?.b14Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b14Request = new Date().valueOf();

        if (ctx.session?.b15Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b15Request = new Date().valueOf();

        if (ctx.session?.b17Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b17Request = new Date().valueOf();

        if (ctx.session?.b18Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b18Request = new Date().valueOf();

        if (ctx.session?.b19Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b19Request = new Date().valueOf();

        if (ctx.session?.b20Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b20Request = new Date().valueOf();



        /* time reset */
        await ctx.reply(`‼ @${ctx.update.callback_query.from.username}, документ загружается, подождите немного...`)
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/ИНН.pdf',
        })
        
    } catch(e) {
        console.error(e);
    }
})

bot.action('b17', async (ctx) => {
    try {
        if (ctx.session?.b17Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b17Request = new Date().valueOf();
        /* main */
        if (ctx.session?.b1Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b1Request = new Date().valueOf();

        if (ctx.session?.b2Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b2Request = new Date().valueOf();
        
        if (ctx.session?.b3Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b3Request = new Date().valueOf();

        if (ctx.session?.b4Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b4Request = new Date().valueOf();

        if (ctx.session?.b5Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b5Request = new Date().valueOf();

        if (ctx.session?.b6Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b6Request = new Date().valueOf();

        if (ctx.session?.b7Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b7Request = new Date().valueOf();

        if (ctx.session?.b8Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b8Request = new Date().valueOf();

        if (ctx.session?.b9Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b9Request = new Date().valueOf();

        if (ctx.session?.b10Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b10Request = new Date().valueOf();

        if (ctx.session?.b11Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b11Request = new Date().valueOf();

        if (ctx.session?.b12Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b12Request = new Date().valueOf();

        if (ctx.session?.b13Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b13Request = new Date().valueOf();

        if (ctx.session?.b14Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b14Request = new Date().valueOf();

        if (ctx.session?.b15Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b15Request = new Date().valueOf();

        if (ctx.session?.b16Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b16Request = new Date().valueOf();

        if (ctx.session?.b18Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b18Request = new Date().valueOf();

        if (ctx.session?.b19Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b19Request = new Date().valueOf();

        if (ctx.session?.b20Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b20Request = new Date().valueOf();



        /* time reset */
        await ctx.reply(`‼ @${ctx.update.callback_query.from.username}, документ загружается, подождите немного...`)
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/Узбекский_Язык.pdf',
        })
        
    } catch(e) {
        console.error(e);
    }
})

bot.action('b18', async (ctx) => {
    try {
        if (ctx.session?.b18Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b18Request = new Date().valueOf();
        /* main */
        if (ctx.session?.b1Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b1Request = new Date().valueOf();

        if (ctx.session?.b2Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b2Request = new Date().valueOf();
        
        if (ctx.session?.b3Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b3Request = new Date().valueOf();

        if (ctx.session?.b4Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b4Request = new Date().valueOf();

        if (ctx.session?.b5Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b5Request = new Date().valueOf();

        if (ctx.session?.b6Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b6Request = new Date().valueOf();

        if (ctx.session?.b7Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b7Request = new Date().valueOf();

        if (ctx.session?.b8Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b8Request = new Date().valueOf();

        if (ctx.session?.b9Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b9Request = new Date().valueOf();

        if (ctx.session?.b10Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b10Request = new Date().valueOf();

        if (ctx.session?.b11Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b11Request = new Date().valueOf();

        if (ctx.session?.b12Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b12Request = new Date().valueOf();

        if (ctx.session?.b13Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b13Request = new Date().valueOf();

        if (ctx.session?.b14Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b14Request = new Date().valueOf();

        if (ctx.session?.b15Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b15Request = new Date().valueOf();

        if (ctx.session?.b16Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b16Request = new Date().valueOf();

        if (ctx.session?.b17Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b17Request = new Date().valueOf();

        if (ctx.session?.b19Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b19Request = new Date().valueOf();

        if (ctx.session?.b20Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b20Request = new Date().valueOf();


        /* time reset */
        await ctx.reply(`‼ @${ctx.update.callback_query.from.username}, документ загружается, подождите немного...`)
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/История(Узбекистан).pdf',
        })
        
    } catch(e) {
        console.error(e);
    }
})

bot.action('b19', async (ctx) => {
    try {
        if (ctx.session?.b19Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b19Request = new Date().valueOf();
        /* main */
        if (ctx.session?.b1Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b1Request = new Date().valueOf();

        if (ctx.session?.b2Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b2Request = new Date().valueOf();
        
        if (ctx.session?.b3Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b3Request = new Date().valueOf();

        if (ctx.session?.b4Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b4Request = new Date().valueOf();

        if (ctx.session?.b5Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b5Request = new Date().valueOf();

        if (ctx.session?.b6Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b6Request = new Date().valueOf();

        if (ctx.session?.b7Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b7Request = new Date().valueOf();

        if (ctx.session?.b8Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b8Request = new Date().valueOf();

        if (ctx.session?.b9Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b9Request = new Date().valueOf();

        if (ctx.session?.b10Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b10Request = new Date().valueOf();

        if (ctx.session?.b11Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b11Request = new Date().valueOf();

        if (ctx.session?.b12Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b12Request = new Date().valueOf();

        if (ctx.session?.b13Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b13Request = new Date().valueOf();

        if (ctx.session?.b14Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b14Request = new Date().valueOf();

        if (ctx.session?.b15Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b15Request = new Date().valueOf();

        if (ctx.session?.b16Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b16Request = new Date().valueOf();

        if (ctx.session?.b17Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b17Request = new Date().valueOf();

        if (ctx.session?.b18Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b18Request = new Date().valueOf();

        if (ctx.session?.b20Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b20Request = new Date().valueOf();
        

        /* time reset */
        await ctx.reply(`‼ @${ctx.update.callback_query.from.username}, документ загружается, подождите немного...`)
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/Русский_Язык.pdf',
        })
        
    } catch(e) {
        console.error(e);
    }
})

bot.action('b20', async (ctx) => {
    try {
        if (ctx.session?.b20Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b20Request = new Date().valueOf();
        /* main */
        if (ctx.session?.b1Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b1Request = new Date().valueOf();

        if (ctx.session?.b2Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b2Request = new Date().valueOf();
        
        if (ctx.session?.b3Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b3Request = new Date().valueOf();

        if (ctx.session?.b4Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b4Request = new Date().valueOf();

        if (ctx.session?.b5Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b5Request = new Date().valueOf();

        if (ctx.session?.b6Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b6Request = new Date().valueOf();

        if (ctx.session?.b7Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b7Request = new Date().valueOf();

        if (ctx.session?.b8Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b8Request = new Date().valueOf();

        if (ctx.session?.b9Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b9Request = new Date().valueOf();

        if (ctx.session?.b10Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b10Request = new Date().valueOf();

        if (ctx.session?.b11Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b11Request = new Date().valueOf();

        if (ctx.session?.b12Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b12Request = new Date().valueOf();

        if (ctx.session?.b13Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b13Request = new Date().valueOf();

        if (ctx.session?.b14Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b14Request = new Date().valueOf();

        if (ctx.session?.b15Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b15Request = new Date().valueOf();

        if (ctx.session?.b16Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b16Request = new Date().valueOf();

        if (ctx.session?.b17Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b17Request = new Date().valueOf();

        if (ctx.session?.b18Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b18Request = new Date().valueOf();

        if (ctx.session?.b19Request> (new Date().valueOf() - 2 * 60 * 1000)) return await ctx.reply(`⚠ Повторно запросить документ можно через 2 минут (@${ctx.update.callback_query.from.username})`);
        ctx.session.b19Request = new Date().valueOf();

        /* time reset */
        await ctx.reply(`‼ @${ctx.update.callback_query.from.username}, документ загружается, подождите немного...`)
        await ctx.answerCbQuery()
        await ctx.replyWithDocument({
            source: './books/Технология.pdf',
        })
        
    } catch(e) {
        console.error(e);
    }
})
/* act */
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));