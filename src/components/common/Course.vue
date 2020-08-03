<template>
    <div class="course" style="width: 1200px;margin: 0 auto">
        <div class="container clearfix">
            <!-- 课程分类 -->
            <div>
                <ul class="coursebox" style="height: 40px">
                    <li v-for="(category,index) in categoryList" :key="index" style="float: left;margin-right: 50px">
                        {{category.name}}
                    </li>
                </ul>
            </div>
            <div class="courseList">
                <ul>
                    <li>
                        <div class="detail">
                            <div class="head">
                                <img src="" alt="" class="backImg">
                                <b class="mask"></b>
                                <p style="height: 80px;text-align: center;background-color: #008cff;line-height:66px;font-size: 30px;color: #fff">Python开发21天入门</p>
                            </div>
                            <div class="content" style="height:100px">
                                <p style="height:60px;padding-top: 20px;padding-bottom: 20px">Python以其简洁、优雅、高效的特点，称为目前最流行的4大主流开发语言</p>
                                <div class="content-detail">
                                    <div>
                                        <!--                                        <img src="../../assets/common/img/header/PY1.png" alt="">-->
                                        <span>1836 </span>
                                        <span>初级</span>
                                        <span class="span3" style="float: right">
                                            <span class="s">￥99.0  </span>
                                            <span  class="t">免费</span>
                                        </span>
                                        <span class="span4"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li style="width: 320px">
                        <div class="detail">
                            <div class="head">
                                <img src="" alt="" class="backImg">
                                <b class="mask"></b>
                                <p style="height: 80px;text-align: center;background-color: #008cff;line-height:66px;font-size: 30px;color: #fff">Python开发21天入门</p>
                            </div>
                            <div class="content" style="height:100px">
                                <p style="height:60px;padding-top: 20px;padding-bottom: 20px">Python以其简洁、优雅、高效的特点，称为目前最流行的4大主流开发语言</p>
                                <div class="content-detail">
                                    <div>
                                        <!--                                        <img src="../../assets/common/img/header/PY1.png" alt="">-->
                                        <span>1836 </span>
                                        <span>初级</span>
                                        <span class="span3" style="float: right">
                                            <span class="s">￥99.0  </span>
                                            <span  class="t">免费</span>
                                        </span>
                                        <span class="span4"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Course',
        data() {
            return {
                categoryList: [], //课程分类列表
            };
        },
        created() {
            // this.$http.get('') ////发送get请求
            this.$http.categoryList()
            .then(res=> {
                res = {};
                res.data = [
                    {name: "Python开发"},
                    {name: "Linux云计算"},
                    {name: "Web前端"},
                    {name: "Java"},
                    {name: "Go语言&C语言"}
                ];
                if(!res.error_no) {//正常返回
                    this.categoryList = res.data;
                    let category = {
                        id: 0,
                        category: 0,
                        name: '全部'
                    }
                    this.categoryList.unshift(category); //unshift()方法向数组添加一个或多个元素
                }
            }).catch(error=>{
                console.log(error)
            })

        }
    }
</script>
<style scoped>
    .courseList ul li {
        float: left;
        width: 320px;
        margin-right: 50px;
        box-shadow: 0 0 16px rgba(82,163,232,.33);
    }
</style>