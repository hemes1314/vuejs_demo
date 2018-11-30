<!-- 展示模板 -->
<template>
  <div id="app">
    <hello></hello>
		<demo></demo>
  </div>
</template>

<script>
// 导入组件
import Hello from './components/helloworld'
import Demo from './components/demo'

export default {
  name: 'app',
	components: {
			Hello,
			Demo
	}
}
</script>
<!-- 样式代码 -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
