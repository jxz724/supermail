// import service from '../service.js'
// import qs from 'qs'

//作业列表获取表格数据
export function getTableData(root,url,params,arr){
  root.service.get(url,{params : params || {}})
  .then(res => {
    if(res.data.status ===200){
      root.tableData = res.data.data
      root.total = res.data.total
      root.tableData.map(item =>{
        console.log('tableData',root.tableData)
        console.log('item',item)
        console.log('arr',arr)
        arr.map(aItem =>[
          item[aItem] ? item[aItem + '_text'] = '是' : item[aItem + '_text'] = '否'
        ])
      })
      root.loading = false
    }
  })
  .catch(err => {
    throw err
  })
}