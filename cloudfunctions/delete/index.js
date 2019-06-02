// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: 'sjk-666'})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const id=event.crid

  await db.collection('kcxx').where({
    _id:id
  }).remove({
   success:res=>{
     console.log('yes')
  
   },fail:res=>{
   }
  })
  return {
     id
  }
}