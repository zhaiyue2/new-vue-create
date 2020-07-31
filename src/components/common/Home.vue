<template>
    <el-carousel indicator-position="outside" height="600px">
        <el-carousel-item v-for="item in lunboImgs" :key="item.id">
            <img :src="item.imgSrc" alt="">
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                lunboImgs: [
                    {
                        id: 1,
                        imgSrc: require('../../assets/common/img/home/banner1.jpg')
                    },
                    {
                        id:2,
                        imgSrc: require('../../assets/common/img/home/banner1.jpg')
                    },
                    {
                        id:3,
                        imgSrc: require('../../assets/common/img/home/banner1.jpg')
                    },
                    {
                        id:4,
                        imgSrc: require('../../assets/common/img/home/banner1.jpg')
                    }
                ]
            };
        },
        created() {
            console.log(localStorage);
        }
    };
</script>

<style lang="css" scoped>
    img{
        width: 100%;
        height: 100%;
    }
</style>