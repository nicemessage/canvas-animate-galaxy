<template>

        <div id="app">
            <div class="container">
                <canvas-overlay></canvas-overlay>
                <div class="content">
                    <div class="header">
                        <div class="header-logo">
                            <a href="/">
                                <img :src="logoImg" alt="">
                            </a>
                        </div>
                        <div class="console">
                            <a href="/board">
                                <span>控制台</span>
                            </a>
                        </div>
                    </div>
                    <div class="title">
                        <div class="title-image">
                            <img :src="titleImg" class="img" alt="">
                            <img :src="titleMaskImg1" class="mask1" alt="">
                            <img :src="titleMaskImg2" class="mask2" alt="">
                        </div>
                    </div>
                    <div class="desc">
                        <div class="item feature1">
                            <div class="img">
                                <img :src="feature1Img" class="feature-img" alt="">
                                <img :src="mask1Img" class="mask animated" alt="">
                            </div>
                            <div class="txt">高效安全</div>
                        </div>
                        <div class="item feature2">
                            <div class="img">
                                <img :src="feature2Img" class="feature-img" alt="">
                                <img :src="mask2Img" class="mask animated" alt="">
                            </div>
                            <div class="txt">高性能</div>
                        </div>
                        <div class="item feature3">
                            <div class="img">
                                <img :src="feature3Img" class="feature-img" alt="">
                                <img :src="mask3Img" class="mask animated" alt="">
                            </div>
                            <div class="txt">全流程</div>
                        </div>
                        <div class="item feature4">
                            <div class="img">
                                <img :src="feature4Img" class="feature-img" alt="">
                                <img :src="mask4Img" class="mask animated" alt="">
                            </div>
                            <div class="txt">数据驱动</div>
                        </div>
                    </div>
                    <div class="enter">
                        <Particle ref="particle">
                            <div
                                    class="button-effect"
                                    @click="goToBoard"
                                    @mouseover="mouseoverBtn"
                            >
                                开启大数据之旅
                            </div>
                        </Particle>
                        <!-- <div class="button-effect" @click="goToBoard">
                            <span>开启银河之旅</span>
                        </div> -->
                    </div>
                    <div class="sys-info">
                        <div class="tabs">
                            <div class="tab"
                                 :class="[index === activeTabIndex?'active':'']"
                                 v-for="(item,index) in mouduleInfo"
                                 :key="index"
                                 @mouseover="selectTab(index)"
                            >
                                <span>{{item.groupName}}</span>
                                <div v-show="index === activeTabIndex" class="active-border">
                                    <img :src="borderImg" alt="">
                                </div>
                            </div>
                        </div>
                        <!-- <div class="tab-contents">
                            <div class="tab-content"
                                v-for="(item,index) in mouduleInfo"
                                :key="index"
                                v-show="index === activeTabIndex"
                                :class="[
                                    'tab-content-'+item.children.length,
                                    index === activeTabIndex?'show-tab-content':'',
                                    index === lastActiveTabIndex ? 'hide-tab-content':'']"
                            >
                                <template
                                    v-for="(child,childIndex) in item.children"
                                >
                                    <Card1
                                        :key="childIndex"
                                        v-if="child.card==='card1'"
                                        :animateDaley="child.delay"
                                        :title="child.title"
                                        :description="child.description"></Card1>
                                    <Card2
                                        :key="childIndex"
                                        v-if="child.card==='card2'"
                                        :animateDaley="child.delay"
                                        :title="child.title"
                                        :description="child.description">
                                    </Card2>
                                    <Card3
                                        :key="childIndex"
                                        v-if="child.card==='card3'"
                                        :animateDaley="child.delay"
                                        :title="child.title"
                                        :description="child.description">
                                    </Card3>
                                    <Card4
                                        :key="childIndex"
                                        v-if="child.card==='card4'"
                                        :animateDaley="child.delay"
                                        :title="child.title"
                                        :description="child.description">
                                    </Card4>
                                </template>
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="tab-contents">
                    <div class="tab-content"
                         v-for="(item,index) in mouduleInfo"
                         :key="index"
                         v-show="index === activeTabIndex"
                         :class="[
              'tab-content-'+item.children.length,
              index === activeTabIndex?'show-tab-content':'',
              index === lastActiveTabIndex ? 'hide-tab-content':'']"
                    >
                        <template
                                v-for="(child,childIndex) in item.children"
                        >
                            <Card1
                                    :key="childIndex"
                                    v-if="child.card==='card1'"
                                    :animateDaley="child.delay"
                                    :title="child.title"
                                    :description="child.description"></Card1>
                            <Card2
                                    :key="childIndex"
                                    v-if="child.card==='card2'"
                                    :animateDaley="child.delay"
                                    :title="child.title"
                                    :description="child.description">
                            </Card2>
                            <Card3
                                    :key="childIndex"
                                    v-if="child.card==='card3'"
                                    :animateDaley="child.delay"
                                    :title="child.title"
                                    :description="child.description">
                            </Card3>
                            <Card4
                                    :key="childIndex"
                                    v-if="child.card==='card4'"
                                    :animateDaley="child.delay"
                                    :title="child.title"
                                    :description="child.description">
                            </Card4>
                        </template>
                    </div>
                </div>
                <div class="footer">
                    <span>Copyright @ 2019 JD Digits,All Rights Reserverd</span>
                </div>
            </div>

        </div>






</template>

<script>

import logoImg from '@/assets/images/tlogo_blue.png';
import titleImg from '@/assets/images/title.png';
import titleMaskImg1 from '@/assets/images/title-mask1.png';
import titleMaskImg2 from '@/assets/images/title-mask2.png';
import feature1Img from '@/assets/images/feature1.png';
import mask1Img from '@/assets/images/Scorpio.png';
import mask2Img from '@/assets/images/Sagittarius.png';
import mask3Img from '@/assets/images/Serpent.png';
import mask4Img from '@/assets/images/Rabbit.png';
import feature2Img from '@/assets/images/feature2.png';
import feature3Img from '@/assets/images/feature3.png';
import feature4Img from '@/assets/images/feature4.png';
import borderImg from '@/assets/images/border.png';

import Particle from '@/components/Canvas/Particle';
import CanvasOverlay from '@/components/Canvas';
import {
    Card1, Card2, Card3, Card4,
} from '@/components/Card';
import mouduleInfo from './index.json';

export default {
    data() {
        return {
            logoImg,
            titleImg,
            titleMaskImg1,
            titleMaskImg2,
            feature1Img,
            feature2Img,
            feature3Img,
            feature4Img,
            mask1Img,
            mask2Img,
            mask3Img,
            mask4Img,
            borderImg,
            mouduleInfo,
            activeTabIndex: 0,
            lastActiveTabIndex: null,
        };
    },
    components: {
        Card1,
        Card2,
        Card3,
        Card4,
        Particle,
        CanvasOverlay,
    },
    methods: {
        selectTab(index) {
            this.lastActiveTabIndex = this.activeTabIndex;
            this.activeTabIndex = index;
        },
        goToBoard() {
            window.location.href = `${window.location.origin}/board`;
        },
        mouseoverBtn(e) {
            const btnWrap = e.target;
            const height = btnWrap.offsetHeight;
            const left = btnWrap.offsetLeft;
            const top = btnWrap.offsetTop;
            const width = btnWrap.offsetWidth;
            this.$refs.particle.buttonEffect(left, top, width, height);
        },
    },
};
</script>
<style lang="scss">
    body{
        background:rgb(0,2,43);
    }
    .el-container{
        height: 100%;
    }
    .container{
        width:100%;
        height: 100%;
        color:#fff;
        .content{
            width: 1200px;
            margin: 0 auto;
            .header{
                line-height: 90px;
                .header-logo{
                    display: inline-block;
                    cursor: pointer;
                    a{
                        display: inline-block;
                        line-height: 35px;
                        img{
                            vertical-align: top;
                        }
                    }
                }
                .console{
                    float:right;
                    font-size:14px;
                    a{
                        color:#fff;
                    }
                }
            }
            .title{
                .title-image{
                    position: relative;
                    text-align: center;
                    .img{
                        height: 194px;
                    }
                    .mask2{
                        height: 77px;
                        position: absolute;
                        z-index: 1;
                        top: 50%;
                        left: 50%;
                        transform: translate(-410px, -38px);
                        animation: up-down 3s infinite ;
                    }
                    .mask1{
                        height: 77px;
                        position: absolute;
                        z-index: 1;
                        top: 50%;
                        left: 50%;
                        transform: translate(-410px, -38px);
                        animation: up-down 3s ease 1s infinite;
                    }
                }
            }
            .desc{
                display:flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 500px;
                margin:0 auto 30px auto;
                position: relative;
                z-index: 10;
                .item{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .img{
                        position: relative;
                        .feature-img{
                            height: 64px;
                            position: absolute;
                            top:50%;
                            left:50%;
                            z-index: -1;
                            transform: translate(-50%,-50%);
                        }
                        .mask{
                            height: 64px;
                        }
                        // .mask:hover{
                        //     transform: rotateY(180deg) translate(-50%,-50%);
                        // }
                    }
                    .txt{
                        font-size:12px;
                    }
                }
            }
            .enter{
                position: relative;
                z-index: 5;
                height: 80px;
                width: 100%;
                text-align: center;
                display: flex;
                align-items: center;
                .button-effect{
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    display: inline-block;
                    height: 40px;
                    width: 140px;
                    margin-top: -20px;
                    margin-left: -70px;
                    cursor: pointer;
                    background-image: url('./assets/images/buttonBack.png');
                    background-size:140px 43px;
                    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.22);
                    line-height: 40px;
                    // margin:30px auto;
                    animation: pulse 1s infinite alternate;
                    span{
                        font-size: 14px;
                        font-weight: bold;
                    }
                }
            }
            .sys-info{
                position: relative;
                z-index: 10;
                .tabs{
                    margin-top:30px;
                    display: flex;
                    justify-content: space-between;
                    width: 520px;
                    margin:20px auto;
                    .tab{
                        font-size:14px;
                        line-height: 28px;
                        width: 96px;
                        text-align: center;
                        cursor: pointer;
                    }
                    .active{
                        font-size: 24px;
                        color: #0766ff;
                        .active-border{
                            text-align: center;
                            img{
                                width: 42px;
                            }
                        }
                    }
                }
            }
        }
        .tab-contents{
            // perspective: 600px;
            // transform-style:preserve-3d;
            overflow: hidden;
            .tab-content{
                width: 1200px;
                margin: 0 auto;
                display:flex;
                justify-content: space-between;
            }
            .tab-content-2{
                width:590px;
                margin:0 auto;
            }
            .tab-content-3{
                width: 895px;
                margin:0 auto;
            }
        }
        .footer{
            height: 40px;
            font-size: 12px;
            color: rgba(255,255,255,0.50);
            text-align: center;
            line-height: 40px;
            margin-top:60px;
        }
    }
    @keyframes pulse {
        0% {
            // margin-top: 0px;
            transform: translateY(0);
        }
        100% {
            // margin-top: 6px;
            transform: translateY(4px);
        }
    }

    @keyframes up-down {
        0%   {top:50%;}
        50%  {top:45%;}
        100% {top:50%;}
    }

    .animated {
        animation-duration: 1s;
        animation-fill-mode: both;
    }
    .desc .item:hover .mask {
        animation-name: jello;
        transform-origin: center;
    }
    @keyframes jello {
        from,
        11.1%,
        to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }

        22.2% {
            -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
            transform: skewX(-12.5deg) skewY(-12.5deg);
        }

        33.3% {
            -webkit-transform: skewX(6.25deg) skewY(6.25deg);
            transform: skewX(6.25deg) skewY(6.25deg);
        }

        44.4% {
            -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
            transform: skewX(-3.125deg) skewY(-3.125deg);
        }

        55.5% {
            -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
            transform: skewX(1.5625deg) skewY(1.5625deg);
        }

        66.6% {
            -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
            transform: skewX(-0.78125deg) skewY(-0.78125deg);
        }

        77.7% {
            -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
            transform: skewX(0.390625deg) skewY(0.390625deg);
        }

        88.8% {
            -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
            transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
        }
    }
    // @keyframes fade-in {
    //    from{transform:rotateY(0deg);}
    //    to{transform: rotateY(60deg);}
    // }

    // @keyframes fade-in2 {
    //    from{transform:rotateY(-90deg);}
    //    to{transform: rotateY(0deg);}
    // }

    // .card:hover{
    //   .title{
    //     animation: zoomIn 0.5s;
    //   }
    //   .description{
    //     animation: zoomIn 0.5s;
    //   }
    // }
    @keyframes zoomIn {
        from {
            opacity: 0;
            -webkit-transform: scale3d(0.3, 0.3, 0.3);
            transform: scale3d(0.3, 0.3, 0.3);
        }

        50% {
            opacity: 1;
        }
    }
</style>
