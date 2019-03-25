<template>
  <div class="page-changeCity">
    <el-row>
      <el-col :span="24">
        <iSelect />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <hots />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <Categroy/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import iSelect from '@/components/changeCity/iselect'
import hots from '@/components/changeCity/hot'
import Categroy from '@/components/changeCity/categroy'
export default {
  components: {
    iSelect,
    hots,
    Categroy
  }
}
</script>

<style scoped>
</style>
