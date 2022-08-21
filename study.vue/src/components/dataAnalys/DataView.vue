<template>
  <div class="data-view">
    <el-card>
      <div id="main1"></div>
    </el-card>
    <el-card>
      <div id="main2"></div>
    </el-card>
  </div>
</template>

<script>
import { dataview } from '../../api/api'
export default{
  data(){
    return{}
  },
  created(){
    dataview().then(res => {
      // console.log(res)
      let { legend,xAxis,series } = res.data.data
      this.draw(legend,xAxis,series)
    }).chatch(err => {
      throw err
    })
  },
  mounted(){
    let myChart = this.$echarts.init(document.getElementById('main1'))
    console.log('111')
    console.log(myChart)
    myChart.setOption({
      title:{
        text:'进阶班'
      },
      tooltip:{},
      xAxis:{
        data:['一班','二班','三班','四班','五班','六班']
      },
      yAxis:{
      },
      series:[
        {
          type:'bar',
          name:'人数',
          data:[45,42,51,49,50,48]
        }
      ]
    
    })
  },
  methods:{
    draw(legend,xAxis,series){
      let myChart2 = this.$echarts.init(document.getElementById('main2'))
      let option ={
        title:{
          text:'会话量'   //图表标题
        },
        tooltip:{
          trigger:'axis'  //触发类型，默认为:'item',数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用；
                                         //'axis'，坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用；
        },
        legend:{
          show:true ,   //图表中对图形的解释部分：
          top:'20px'
        },
        xAxis:{
          type:'category',
          data:xAxis
        },
        yAxis:{
          type:'value'
        },
        series:series
      }
      myChart2.setOption(option)
    }
  }
}
</script>

<style lang="scss">
.data-view{
  width:100%;
  display:flex;
  justify-content: space-between;
  .el-card{
    width:50%;
    #main1,#main2{
      height:500px;
    }
  }
}
</style>