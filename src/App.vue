<script setup lang="ts">
import { fibo } from "@/utils/fibonacci";
import { formatOrdinals } from "@/utils/ordinals";
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

function handleClickHelloWorld(randomN: number) {
  console.log("hello from hello world component");
  console.log("fibonacci of " + formatOrdinals(randomN) + ": " + fibo(randomN));
}
function handleTryClickThis(msgFromPrp: string) {
  console.log(
    "this is from try click this, and this is msg from the child component: ",
    msgFromPrp
  );
}

type State = {
  a: string;
  b: number;
};

const someState = ref<State>({
  a: "test",
  b: 2,
});

function changeState(e: MouseEvent, type: keyof State) {
  console.log({ e, type });
  if (type === "a") {
    if (someState.value.a === "test") {
      someState.value.a = "foo";
    } else {
      someState.value.a = "test";
    }
    return;
  }

  if (type === "b") {
    if (someState.value.b === 2) {
      someState.value.b = Math.ceil(Math.random() * 10);
    } else {
      someState.value.b = 2;
    }
  }
}
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld
        msg="You did it!"
        @click="handleClickHelloWorld"
        @try-click-this="handleTryClickThis"
      />

      <HelloWorld
        msg="test"
        @click="handleClickHelloWorld"
        @try-click-this="handleTryClickThis"
      />

      Current State
      <pre>{{ someState }}</pre>

      <button
        id="btn-change-state-a"
        data-testid="testid-btn-a"
        @click="changeState($event, 'a')"
      >
        Change State 'a'
      </button>
      <button
        id="btn-change-state-b"
        data-testid="testid-btn-b"
        @click="changeState($event, 'b')"
      >
        Change State 'b'
      </button>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
