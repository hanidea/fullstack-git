import MUtil from 'util/mm.jsx';
const _mm = new MUtil();

class Product{
    //获取商品列表
    getProductList(pageNum){
        return _mm.request({
            type    : 'post',
            url     : '/manage/product/list.do',
            data    : {
                pageNum : pageNum
            }
        });
    }
}

export default Product;