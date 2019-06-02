const cloud = require('wx-server-sdk')

cloud.init({ env: 'sjk-666' })
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const tcid = event.crid

  await db.collection('ddxq').where({
    tcid: tcid
  }).remove({
    success: res => {

    }, fail: res => {
    }
  })
  return {
    tcid
  }
}