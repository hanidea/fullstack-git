/*
 * @Author: James 
 * @Date: 2019-01-02 13:21:37 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-01-02 14:25:29
 */

var _mm = {
    // 网络请求
    request : function(param){
        var _this = this;
        $.ajax({
            type     : param.method || 'get',
            url      : param.url    || '',
            dataType : param.type   || 'json',
            data     : param.data   || '',
            success  : function(res){
                //请求成功
                if(0 === res.status){
                    typeof param.success === 'function' && param.success(res.data, res.msg);
                }
                //没有登录状态，需要强制登录
                else if(10 === res.status){
                    _this.doLogin();
                }
                //
                else if(1 === res.status){
                    typeof param.error === 'function' && param.error(res.msg);
                }
            },
            error    : function(err){
                typeof param.error === 'function' && param.error(err.statusText);
            }

        });
    },
    // 统一登录处理
    doLogin : function(){
        window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href);
    }
};
module.exports = _mm;