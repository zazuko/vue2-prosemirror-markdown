<template>
  <section>
    <el-select v-model="mode" placeholder="Select" type="button">
      <el-option
        v-for="item in options"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <prosemirror
      :mode="mode"
      textarea-config="{name: 'my-editor'}" />
  </section>
</template>

<script>
export default {
  data () {
    return {
      options: [
        {
          value: 'markdown',
          label: 'Markdown'
        },
        {
          value: 'editor',
          label: 'Editor'
        },
        {
          value: 'all',
          label: 'All'
        }
      ],
      mode: 'all'
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped>
section {
  min-width: 30rem;
  max-width: 50rem;
  margin-bottom: 10em;
}

.el-select {
  padding-bottom: 3rem;
}

</style>

<style media="screen">
textarea.vue-prosemirror.markdown,
.vue-prosemirror.editor {
  resize: none;
  border-style: solid;
  border-width: 1px;
  border-color: #8492a6;
  margin-bottom: 1rem;
  border-radius: 4px;
}
</style>
