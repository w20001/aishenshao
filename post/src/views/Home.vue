<template>
  <div class="home-page">
    <div class="header">
   <img src="../assets/images/avatar.jpg" alt="">
    </div>
  <div class="text">
    <p class="title">爱声声色</p>
    <p class="tips">公告：欢迎光临，流行爆款请京造下单....</p>
  </div>
   <!-- 排序导航 -->
   <div class="nav">
         <div class="nav-item" v-for="(item,index) in navList" :key="index" :class="{active:index==currentIndex}" @click="sort(index)">{{item}}</div>
         
   </div>
    <!-- 商品列表 -->
    <div class="list">
      <div class="good" v-for="(item,index) in goodList" :key="index">
         <div class="pic">
   <img :src="item.pic" alt="">
         </div>
         <div class="text">
        <div class="name">{{item.name}}</div>
        <div class="buyCount">已售:{item.buyCount}件</div>
        <div class="price">单价：￥{{item.price}}</div>
         </div>
      </div>
      <div class="btn">加入购物车</div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
export default {
  data:function(){
    return {
      currentIndex:0,//保存当前点击导航的索引
      navList:['价格升序↑','价格降序↓','销量升序↑','销量降序↓'],
      goodList:[]//保存所有的商品数据
    }
  },
  name: 'home',
  components: {  
 
  },
  methods:{
  sort:function(index)
  {
    // console.log(this)
   this.currentIndex=index
   if(index==0)//价格升序
   {
 this.goodList.sort(function(goodA,goodB){
   return goodA.price - goodB.price
 });
   }
   else if(index==1)//价格降序
   {
this.goodList.sort(function(goodA,goodB){
   return goodB.price - goodA.price
 });
   }
   else if(index ==2)//销量升序
   {
this.goodList.sort(function(goodA,goodB){
   return goodA.buyCount - goodB.buyCount;
 });
   }
   else//销量降序
   {
this.goodList.sort(function(goodA,goodB){
   return goodB.buyCount - goodA.buyCount;
 });
   }
  },
  },
  mounted:function()
  {
    //发送ajax请求
    axios.get("http://yantianfeng.com/api/goodList").then((res)=>{
      console.log(res.data);
      this.goodList=res.data.goodList;
    })
  }
}
</script>
<style>
.home-page .header{
  height: 200px;
  background-size:cover;
  position: relative;
  background-position-x: center;
  background-image: url("../assets/images/banner-2.png")
} 
.home-page .header img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  bottom: -40px;
  left: 50%;
  margin-left: -40px;
}
.home-page>.text{
  margin: 30px 0;
  line-height: 40px;
  text-align: center;
}
.home-page>.text .title{
  font-size: 20px;
  font-weight: bold;
}
.home-page>.text .tips{
  color: #888888;
}
.home-page .nav{
  display: flex;
  justify-content: space-between;
  margin: 20px;
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;

}
.home-page .nav .nav-item.active{
   color: red;
}
.home-page .list{
  margin: 20px;
}
.home-page .list .good{
  margin: 20px 0;
  display: flex;

}
.home-page .list .good .pic{
  width: 30%;
  margin-right: 15px;
 
}
.home-page .list .good .pic img{
  width: 100%; 
}
.home-page .list .good .text{
  line-height: 30px;
  width: 70%;
}
.home-page .list .good .text .name{
  white-space: nowrap;/*不换行*/
  overflow: hidden;
  text-overflow: ellipsis;/*显示省略号*/
}
.home-page .list .good .btn{
  position:  absolute;
  right: 0;
  bottom: 0;
  background-color: red;
  color: white;
  text-align: center;
  padding: 5px 15px;
  font-size: 14px;

}
.home-page .list .good .btn:active{
  opacity: 0.6;
}
</style>
