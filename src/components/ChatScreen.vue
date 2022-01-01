<template>
  <div class="col-8 d-flex flex-column p-0 justify-content-between p-3 border border-top-0 chatScreen">
    <div class="d-flex flex-column justify-content-between chat">
      <div class="messages" id="scroll">
        <div
            v-for="(message, index) in storeMessage"
            :key="index"
            class="d-flex gap-2 mb-4 bubble"
            :class="{ self: session == message.name}"
        >
          <div class="text">
            <div class="username fw-bold">{{ message.name }}</div>
            <div class="chatfield p-2">{{ message.content }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="chatbox-wrapper">
      <input
        type="text"
        class="chatbox px-3 p-2"
        placeholder="Send a message..."
        id="message"
        v-model="message.content"
        @keyup.enter="sendContent">
      <button type="button" @click="sendContent" class="btn phone">Send</button>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "ChatScreen",

  setup() {
    const store = useStore()
    const message = {
      content: null
    }
    const session = sessionStorage.getItem("user")
    const storeMessage = computed(() => store.state.messages)
    const stompClient = computed(() => store.state.stompClient)

    function sendContent() {
      const name = sessionStorage.getItem("user")
      stompClient.value.send('/app/send', {}, JSON.stringify({'name': name, 'content': message.content}))
      message.content = ""
      const scroll = document.getElementById('scroll')
      scroll.scrollTop = scroll.scrollHeight
    }

    return {
      sendContent,
      storeMessage,
      stompClient,
      message,
      session
    }
  }
}
</script>

<style scoped>
.chatbox {
  outline: none;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  background: var(--white3);
  transition: 0.2s;
  color: var(--black1);
  width: 100%;
}
.phone {
  background: var(--purple1);
  color: white;
  font-weight: bold;
}

h2 {
  color: var(--purple1);
}

.messages {
  position: relative;
  height: 70vh;
  width: 100%;
  padding-right: 2em;
  overflow-y: scroll;
}

.messages::-webkit-scrollbar {
  background: #d8d6d6;
  width: 8px;
  border-radius: 5px;
}

.messages::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: var(--purple1hover);
}

.chatfield {
  background: var(--purple1);
  color: var(--white2);
  border-radius: 10px;
  border-top-left-radius: 0;
}

.chatbox:focus,
.self .chatfield {
  background: var(--purple2);
  color: var(--black1);
}

.self .chatfield {
  border-top-right-radius: 0;
  border-top-left-radius: 10px;
}

.chatfield {
  font-size: 1rem;
  width: fit-content;
}

.bubble {
  flex-flow: row;
}

.bubble.self {
  flex-flow: row-reverse;
}

.self .chatfield {
  float: right;
}

img {
  -webkit-user-drag: none;
}

@media screen and (max-width: 968px) {
  .chatScreen {
    position: fixed;
    width: 100%;
    height: calc(100% - 60px);
  }

  .chatbox-wrapper {
    position: absolute;
    background: var(--white1);
    width: 100%;
    display: flex;
    justify-content: center;
    bottom: 0;
    align-items: center;
    left: 0;
  }

  .chatbox {
    width: 100%;
    margin: 1em;
  }
}
</style>
