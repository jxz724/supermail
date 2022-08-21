<template>
  <div class="map-view">
    <div id="main"></div>
  </div>
</template>

<script>
import geoJson from '../../assets/css/data.json'
export default{
  data(){
    return {}
  },
  mounted(){
     let myChart = this.$echarts.init(document.getElementById('main'))
     this.$echarts.registerMap('china',geoJson)      //注册可用的地图
     let option={
      backgroundColor:'rgb(121,145,209)',
      geo:{
        map:'china',
        aspectScale:0.75,  //地图长宽比
        zoom:1.1,      //缩放比  1：1
        itemStyle:{
          normal:{
            areaColor:{
              type:'radial',
              x:0.5,
              y:0.5,
              r:0.8,
              colorStops:[
                {
                  offset:0,
                  color:'#09132c'
                },
                {
                  offset:1,
                  color:'#274d68'
                }
              ],
              globalCoord:true
            }
          }
        },
        regions:[{
          name:'南海诸岛'
        }]
      },series:[   //配置地图相关参数，绘制地图
        {
          type:'map',
          label:{
            normal:{
              show:true
            }
          },
          zoom:1.1,
          name:'china',
          itemStyle:{
          normal:{
            backgroundColor:'rgb(147,235,248)',
            borderWidth:1,
            areaColor:{
              type:'radial',
              x:0.5,
              y:0.5,
              r:0.8,
              colorStops:[
                {
                  offset:0,
                  color:'rgb(31,54,150)'
                },
                {
                  offset:1,
                  color:'rgb(89,128,142)'
                }
              ],
            globalCoord:true
            }
          },
          emphasis:{
            areaColor:'rgb(46,229,206)',
            borderWidth:0.1
          }
        },}

      ]
     }
      myChart.setOption(option)
  }
  
}

</script>

<style lang="scss">
.map-view{
  width:100%;
  #main{
    width:100%;
    height:600px;
  }
}

</style>