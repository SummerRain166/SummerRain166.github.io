# 一隅花园

一个用于公开展示个人园艺作品与种植手记的静态网站。无需安装依赖，可直接托管到 GitHub Pages。

## 本地预览

```bash
python3 -m http.server 8000
```

打开 `http://localhost:8000`。

## 替换为自己的内容

1. 把作品照片放进 `assets/`。
2. 在 `index.html` 中修改作品名称、年份、手记、个人介绍和邮箱。
3. 在 `styles.css` 的 `.work-image--*` 规则中，将背景图地址改为对应照片。
4. 删除页面中的“展示版示例内容”提示。

## 发布到 GitHub Pages

1. 在 GitHub 创建名为 `<你的用户名>.github.io` 的公开仓库。
2. 将本项目推送到仓库的 `main` 分支。
3. 在仓库 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。
4. 等待 Actions 中的部署任务完成，网站即可通过 `https://<你的用户名>.github.io` 访问。

如果使用普通仓库名（例如 `garden`），也可以访问 `https://<你的用户名>.github.io/garden/`；本站全部使用相对路径，能够正常工作。

## 图片说明

`assets/garden-hero.png` 是为本网站生成的原创主视觉。作品卡片目前从主视觉中裁切出不同区域作为示例，建议发布前替换为你的实拍照片。
