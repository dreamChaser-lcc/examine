export default {
    'GET /operate/Allappraise': {
        code: '00000',
        message: '执行成功',
        data: [
            {
                key: 1,
                id:'1',
                content: `
                B08XQ43ZPG（Non come da immagine）发现新中差评（来自 camilla marci）
                ASIN：B08XQ43ZPG   店铺：Amazon-WX-IT 意大利`,
                type: '中评',
                store:'Amazon-WX-IT 意大利',
                buyersInfo:'买家信息',
                grade:3,
                evaluate:'1231231243',
                evaluateTime:'2021-05-27 18:00',
                time: `2021-05-28 18:00`,
                Unread:true,
                ASUI:'B08XQ43ZPG'
            },
            {
                key: 2,
                id:'2',
                content: `Edward King `,
                type: '差评',
                store:'Amazon-WX-IT 意大利',
                buyersInfo:'买家信息',
                grade:1,
                evaluate:'1231231243',
                evaluateTime:'2021-05-27 18:00',
                time: `London, Park Lane no. `,
                Unread:true,
                ASUI:'123123'
            },
            {
                key: 3,
                id:'3',
                content: `Edward King `,
                type: '好评',
                grade:5,
                time: `这是未读的`,
                Unread:false,
                ASUI:'222222'
            }
        ],
      },
      'POST /operate/Allappraise/unread': {
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