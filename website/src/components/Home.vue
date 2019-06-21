<template>
  <v-content>
    <v-container>
      <v-layout row wrap align-center>
        <v-flex xs12 md4>
          <div
            @click="toggleSize()"
            class="text-xs-center"
          >
            <transition
              name="expand"
            >
              <avatar :size="size" />
            </transition>
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
        </v-flex>
        <v-flex xs12 md5 offset-md2>
          <div v-for="post in posts" :key="post.date">
            <post :post="post" />
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import Avatar from "@/components/profile/Avatar"
import BasicInfo from "@/components/profile/BasicInfo"
import Post from "@/components/Post"

import { posts } from "@/posts"

const small = 125
const large = 350

export default {
    name: "Home",
    components: {
        Avatar,
        BasicInfo,
        Post,
    },
    data() {
        return {
            posts: posts,
            size: small,
        }
    },
    methods: {
        toggleSize() {
          this.size = (this.size === small) ? (large) : (small)
        },
    },
}
</script>

<style>
  .expand-enter-active,
  .expand-leave-active {
    transition: height 1s ease-in-out;
    overflow: hidden;
  }

  .expand-enter,
  .expand-leave-to {
    height: 0;
  }
</style>
