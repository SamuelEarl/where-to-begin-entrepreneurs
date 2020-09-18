<template>
  <button on:click>
    <slot>Default Button Text</slot>
  </button>
</template>

<style lang="scss">
  @import "../scss/variables.scss";

  button {
    padding: 10px 25px;
    border-radius: 5px;
    outline: none;
    border: 1px solid lightgray;
    background-color: white;
    box-shadow: 2px 2px 2px lightgray;
    color: $text;
    cursor: pointer;
    &:hover {
      box-shadow: none;
    }
  }
</style>
