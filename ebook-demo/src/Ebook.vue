<template>
    <div class="ebook">
        <title-bar :ifTitleAndMenuShow="ifTitleAndMenuShow"></title-bar>
        <div class="read-wrapper">
            <div id="read"></div>
            <div class="mask">
              <div class="left" @click="prevPage"></div>
              <div class="center" @click="toggleTitleAndMenu"></div>
              <div class="right" @click="nextPage"></div>
            </div>
        </div>
        <menu-bar :ifTitleAndMenuShow="ifTitleAndMenuShow" :fontSizeList='fontSizeList' :defaultFontSize='defaultFontSize' @setFontSize='setFontSize' :themeList="themeList" :defaultTheme="defaultTheme" @setTheme="setTheme"
                  ref="menuBar"></menu-bar>
    </div>
</template>
<script>
import TitleBar from '@/components/TitleBar'
import MenuBar from '@/components/MenuBar'
import Epub from 'epubjs'
const DOWNLOAD_URL = '/static/2018_Book_AgileProcessesInSoftwareEngine.epub'
global.ePub = Epub
export default {
  components: {
    TitleBar,
    MenuBar
  },
  data () {
    return {
      ifTitleAndMenuShow: false,
      fontSizeList: [
        { fontSize: 12 },
        { fontSize: 14 },
        { fontSize: 16 },
        { fontSize: 18 },
        { fontSize: 20 },
        { fontSize: 22 },
        { fontSize: 24 }
      ],
      defaultFontSize: 16,
      themeList: [
        {
          name: 'default',
          style: {
            body: {
              'color': '#000', 'background': '#fff'
            }
          }
        },
        {
          name: 'eye',
          style: {
            body: {
              'color': '#000', 'background': '#ceeaba'
            }
          }
        },
        {
          name: 'night',
          style: {
            body: {
              'color': '#fff', 'background': '#000'
            }
          }
        },
        {
          name: 'gold',
          style: {
            body: {
              'color': '#000', 'background': 'rgb(241,236,226)'
            }
          }
        }
      ],
      defaultTheme: 0
    }
  },
  methods: {
    setTheme (index) {
      this.themes.select(this.themeList[index].name)
      this.defaultTheme = index
    },
    registerTheme () {
      this.themeList.forEach(theme => {
        this.themes.register(theme.name, theme.style)
      })
    },
    setFontSize (fontSize) {
      this.defaultFontSize = fontSize
      if (this.themes) {
        this.themes.fontSize(fontSize + 'px')
      }
    },
    toggleTitleAndMenu () {
      this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow
      if (!this.ifTitleAndMenuShow) {
        this.$refs.menuBar.hideSetting()
      }
    },
    prevPage () {
      // Rendition.prev
      if (this.rendition) {
        this.rendition.prev()
      }
    },
    nextPage () {
      // Rendition.next
      if (this.rendition) {
        this.rendition.next()
      }
    },
    // 电子书的解析和渲染
    showEpub () {
      // 生成Book
      this.book = new Epub(DOWNLOAD_URL)
      // console.log(this.book)
      // 生成Rendition，通过Book.renderTo
      this.rendition = this.book.renderTo('read', {
        width: window.innerWidth,
        height: window.innerHeight
      })
      // 通过Rendition.display渲染电子书
      this.rendition.display()
      // 获取Theme对象
      this.themes = this.rendition.themes
      // 设置默认字体
      this.setFontSize(this.defaultFontSize)
      // this.themes.register(name, styles)
      // this.themes.select(name)
      this.registerTheme()
      this.setTheme(this.defaultTheme)
    }
  },
  mounted () {
    this.showEpub()
  }
}
</script>

<style lang='scss' scoped='' type='text/css'>
    @import 'assets/styles/global';
    .ebook {
      position: relative;
      .read-wrapper {
        .mask {
          position:absolute;
          top:0;
          left:0;
          display: flex;
          z-index: 100;
          width: 100%;
          height: 100%;
          // background: yellow;
          .left {
            flex: 0 0 px2rem(100);
          }
          .center {
            flex: 1;
          }
          .right {
             flex: 0 0 px2rem(100);
          }
        }
      }
    }
</style>
