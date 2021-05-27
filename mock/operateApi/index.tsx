export default {
    'GET /app/tenantUser/operate/Allappraise': {
        code: '00000',
        message: '执行成功',
        data: [
            {
                key: 1,
                content: `
                B08XQ43ZPG（Non come da immagine）发现新中差评（来自 camilla marci）
                ASIN：B08XQ43ZPG   店铺：Amazon-WX-IT 意大利`,
                type: 32,
                time: `London, Park Lane no. `,
                Unread:true,
            },
            {
                key: 2,
                content: `Edward King `,
                type: 32,
                time: `London, Park Lane no. `,
                Unread:true,
            },
            {
                key: 3,
                content: `Edward King `,
                type: 32,
                time: `这是未读的`,
                Unread:false,
            }
        ],
      },
      'POST operate/Allappraise/unread': {
        code: '00000',
        message: '执行成功',
        data: [
            {
                key: 1,
                content: `Edward King `,
                type: 32,
                time: `这是未读的`,
                Unread:false,
            }
        ],
      },
}