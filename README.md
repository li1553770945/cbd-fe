# CBD会议 前端

+ src:源码
+ assets:存储的主要数据等，理论上每年更新这里面的东西就可以,fonts存储的字体，images存储的图片，这两个是每年通用的，然后新建一个当年的文件夹，里面的内容为：

```
|-data
   |- committes.json:组委会
   |- head.json:标题和副标题
   |- important-days.json:重要日期
   |- news.json: 新闻
   |- keynotes.json:keynotes
|-images
   |- banner.jpg:主页的大图
|-pages:存储的页面
   |- camera-ready-submit.md:
   |- venue-hotel.md
```

根据不同的页面，有不同的实现方式。

1. CallForPapers这种页面，每年的页面可能完全不一样，并且也不适合markdown写，因此组件叫做DynamicCallForPapers，根据当前url中的年自动加载`pages/${year}/CallForPapers.vue`

2. VenueHotel这种页面，每年的页面可能完全不一样，但是比较适合用markdown写，因此直接加载`assets/${year}/pages/venue-hotel.md`的内容。

3. TPC、Keynotes这种界面，每年的页面几乎一样，只有内容需要替换，因此布局直接写好，只是用`assets/data/xx.json`动态加载数据。
