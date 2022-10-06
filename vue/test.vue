<template>
    <div id="drop-area" :class="dropActive ? 'drop-active' : ''">
        <p>将文件拖拽到此处即可完成文件上传。</p>
    </div>
</template>
<script>
export default {
  name:'DropFile',
  data(){
    return {
      dropActive:false,
    }
  },
  methods:{
    dropEvent(e) {
      this.dropActive = false
      e.stopPropagation()
      e.preventDefault()
      this.uploadFile(e.dataTransfer.files)
    },
    uploadFile (file) { // 渲染上传文件
      console.log(file[0], 'file')
      if (file && file.length) {
        //自行发挥，存本地或上传服务器
      }
    },
  },
  mounted () {
    let dropArea = document.getElementById('drop-area')
    dropArea.addEventListener('drop', this.dropEvent, false)
    dropArea.addEventListener('dragleave', (e) => {
      e.stopPropagation()
      e.preventDefault()
      this.dropActive = false
    })
    dropArea.addEventListener('dragenter', (e) => {
      e.stopPropagation()
      e.preventDefault()
      this.dropActive = true
    })
    dropArea.addEventListener('dragover', (e) => {
      e.stopPropagation()
      e.preventDefault()
      this.dropActive = true
    })
  }
}
</script>
<style scoped lang="less">
  #drop-area {
    width: 200px;
    height: 200px;
    color: rgba(0, 0, 0, 0.45);
    text-align: center;
    background-color: #fafafa;
    border: 1px dashed #d9d9d9;
    p{
      width: 180px;
      margin: 80px auto;
    }
  }
  .drop-active{
  background-color: rgba(231,234,246,0.8);
}
</style>