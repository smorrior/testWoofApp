<template>
    <v-snackbar v-model="snackbar"  :value="true" :multi-line="multiLine" :color="color">
      {{ text }}
      <v-btn color="white" text @click="snackbar = false">
        Closesssssss
      </v-btn>
    </v-snackbar>
</template>
<script>
export default {
    data: () => ({
      multiLine: true,
      snackbar: true,
      color: 'primary'
    }),
    props: ['text'],
    methods: {
        onClose () {
            this.$emit('dismissed')
        }
    }
}
</script>

