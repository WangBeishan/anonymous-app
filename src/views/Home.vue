<template>
  <div class="jumbotron vh-100 d-flex flex-column main row h-100 m-0">
    <JoinScreen v-if="!user" :connect="setConnect"></JoinScreen>
    <ChatScreen v-if="user"></ChatScreen>
  </div>
</template>

<script>
import ChatScreen from "../components/ChatScreen";
import JoinScreen from "./JoinScreen";

export default {
  name: 'Home',
  components: {JoinScreen, ChatScreen},

  setup() {
    const user = sessionStorage.getItem("user")

    return {
      user,
    }
  }
}
</script>
