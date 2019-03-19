<template>
  <div class="article-info">
    <p class="article-info_title">{{articleInfo.title || '标题'}}</p>
    <!--{{articleInfo.content}}-->
    <p class="article-info_content" v-html="articleInfo.content || '暂无数据'"></p>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
      articleInfo: '',
      categoryList: [],
      nodes: [],
      articleId: null
    }
  },
  methods: {
    init () {
      this.articleId = this.$mp.query.id
      this._getArticleInfo({page_size: 10, page: 1}, this.articleId)
    },
    // 获取文章列表
    _getArticleInfo (data, id) {
      this.$http.article.getArticleInfo(data, id).then(res => {
        this.articleInfo = res.data ? res.data : '文章test'
        this.articleInfo.content = this.articleInfo.content.replace(/img/gi, 'img style="width:100%;height:auto"')
      })
    }
  },

  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
  },
  mounted () {
    this.init()
  }

}
</script>

<style lang="less">
.article-info{
  display: flex;
  flex-direction: column;
  padding: 40rpx;
  &_title {
    font-size: 36rpx;
    color: #1A1A1A;
    margin-bottom: 15rpx;
  }
  &_content{
    font-size: 28rpx;
    color: #777;
  }
  .article-info_content {
    font-size: 28rpx;
    clear: both;
    .rich-img {
      width: 100% ;
      height: auto ;
    }
  }
}
img{max-width: 100%;}

</style>
