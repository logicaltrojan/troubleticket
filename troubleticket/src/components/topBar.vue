<template>
    <v-app-bar
            app
            clipped-left
            color="amber"
    >
        <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
        <span class="title ml-4 mr-5">Trouble&nbsp;<span class="font-weight-light">Ticket</span></span>
        <v-text-field
                solo-inverted
                flat
                hide-details
                label="Search"
                prepend-inner-icon="search"
        ></v-text-field>
        <div class="flex-grow-2"></div>
    </v-app-bar>
</template>
<script>
    export default{
        created(){
        },
        data(){

        },
        methods :{
            toggleDrawer(){
                this.$store.state.common.drawer = !this.$store.state.common.drawer;
            }
        }

    }


</script>
<style>

</style>
