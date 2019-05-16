<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
           <template v-for="(item,i) in items">
                <template v-if="item.subs&&item.subs.length">
                    <el-submenu :index="item.index" :key="i">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from './bus';
    // import { mapState } from 'vuex'
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-star-on',
                        index: 'home',
                        title: '系统首页',
                        subs: [
                            {
                                index: '/index',
                                title: '系统首页'
                            },
                            {
                                index: '/test01',
                                title: 'test01页'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-tickets',
                        index: 'tablepage',
                        title: '列表管理',
                        subs: [
                            {
                                index: 'tablepage',
                                title: '列表管理'
                            }
                        ]
                    },
                ]
            }
        },
        // computed:mapState({
        //     menuList:state=>state.menu.menuList,
        //     onRoutes(){
        //         return this.$route.path.replace('/','');
        //     }
        // }),
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
