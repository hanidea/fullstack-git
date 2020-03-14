// components/episode/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:{
      type:Number,
      observer:function(newVal,oldVal,changedPath){
        // console.log(newVal)
        // console.log(oldVal)
        // console.log(changedPath)
        let val = newVal < 10?'0'+newVal:newVal
        this.setData({
          index:val
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    year:0,
    month:''
  },

  attached:function(){
    // console.log(typeof(Number))
    // console.log(Number)
    // console.log(this.properties)
    // console.log(this.data)
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
