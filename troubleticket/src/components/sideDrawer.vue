<template>
    <v-navigation-drawer
            v-model="drawer"
            app
            clipped
            color="grey lighten-5"
    >
        <v-list
                dense
                class="grey lighten-5"
        >
            <template v-for="(item, i) in items">
                <v-divider
                        v-if="item.divider"
                        :key="i"
                        dark
                        class="my-5"
                ></v-divider>
                <v-list-item
                        v-else
                        :key="i"
                        @click=""
                >
                    <router-link :to="item.link">
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title class="grey--text">
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </router-link>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>
<script>

    import {mapState} from 'vuex'

    export default{
        computed :{
            drawer(){
                return this.$store.state.common.drawer;
            }
        },
        data: () => ({
            items: [
                { icon: 'lightbulb_outline', text: 'Notes' , link : '/feed'},
                { icon: 'touch_app', text: 'Reminders', link : '/'},
                { divider: true },
                { icon: 'add', text: 'Create new label' },
                { divider: true },
                { icon: 'archive', text: 'Archive' },
                { icon: 'delete', text: 'Trash' },
                { divider: true },
                { icon: 'settings', text: 'Settings' },
                { icon: 'chat_bubble', text: 'Trash' },
                { icon: 'help', text: 'Help' },
                { icon: 'phonelink', text: 'App downloads' },
                { icon: 'keyboard', text: 'Keyboard shortcuts' },
            ],
        }),

    }
</script>