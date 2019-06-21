<template>
    <div class="text-xs-center">        
        <avatar size="350px"/>
        <basic-info />
        <v-layout justify-space-between>
        <a href="javascript:;" class="body-2">
            <v-icon large color="green darken-2">home</v-icon>
        </a>
        <a href="javascript:;" class="body-2">
            <v-icon large color="green darken-2">info</v-icon>
        </a>
        <a href="javascript:;" class="body-2">
            <v-icon large color="green darken-2">github</v-icon>
        </a>
        <a href="javascript:;" class="body-2">
            <v-icon large color="green darken-2">linkedin</v-icon>
        </a>
        </v-layout>
    </div>
</template>

<script>
import Avatar from "@/components/profile/Avatar"
import BasicInfo from "@/components/profile/BasicInfo"

export default {
    name: "AboutMe",
    components: {
        Avatar,
        BasicInfo,
    },
    computed: {
        size() {
            
        }
    }
}
</script>

<style>

</style>
