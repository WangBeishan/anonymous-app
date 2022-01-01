<template>
  <div class="join-container d-flex flex-column justify-content-center align-items-center h-75">
    <div class="form-group mt-25">
      <input class="form-control" v-model="user.name" placeholder="Please entry name"/>
      <button class="btn mt-2" @click="join">Join</button>
    </div>
  </div>
</template>

<script>
import router from "../router";
import SockJS from 'sockjs-client'
import stomp from 'stompjs'
import {useStore} from "vuex";

export default {
  name: "JoinScreen",

  setup() {
    const user = {
      name: null
    }
    let stompClient = null
    const store = useStore()

    function join() {
      setConnect()
      sessionStorage.setItem("user", user.name)
      router.push('/home')
    }

    function setConnect() {
      const url = SockJS('http://localhost:9000/websocket')
      stompClient = stomp.over(url)
      stompClient.connect({}, () => {
        store.commit('setupStomp', stompClient)
        sessionStorage.setItem("user", user.name)
        stompClient.subscribe('/topic', (res) => {
          store.commit('addMessage', JSON.parse(res.body))
        })
      })
    }

    return {
      user,
      join,
      setConnect
    }
  }
}
</script>

<style scoped>
.join-container {
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn {
  background: var(--purple1);
  color: var(--white1);
}

.btn:hover {
  filter: brightness(1.2);
}
</style>
