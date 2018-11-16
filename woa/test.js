let woniu = {
    _name: '蜗牛',
    get name(){
        // console.log('获取值')
        // return '你好'
        return this._name
    },
    set name(val){
        console.log('new name is '+val)
        this._name = val
    }
}
console.log(woniu.name)
woniu.name = 'James'
console.log(woniu.name)