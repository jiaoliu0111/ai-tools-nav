# AI 工具导航网站

一个零依赖静态网站模板，包含分类筛选、搜索、精选工具和广告位。

## 运行

直接打开 `index.html` 即可。

也可以在当前目录启动一个静态服务器：

```bash
python3 -m http.server 5173
```

然后访问 `http://localhost:5173`。

## 修改数据

工具列表、分类和精选状态都在 `app.js` 中：

- 在 `categories` 中新增或改名分类。
- 在 `tools` 中新增工具卡片。
- 将 `featured` 设为 `true`，工具会进入精选区。
- 广告位图片在 `assets/ads/`，广告文案在 `index.html` 和 `app.js` 的 `renderInlineAd()` 中替换。
