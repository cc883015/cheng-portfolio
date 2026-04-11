Portfolio images — how to add / maintain
========================================

1) Profile photo (Hero)
   - Right-click your LinkedIn profile photo → save image as: public/images/portfolio/profile.jpg
     (LinkedIn CDN links expire; local file is reliable.)
   - Recommended 400×400+ JPG or WebP. If the file is missing, the site shows initials instead.
   - Path is set in src/data/portfolio.ts → profile.avatar (default: /images/portfolio/profile.jpg)
   - Optional fallback asset: profile.svg (only if you point profile.avatar to it)

2) Timeline & honor galleries
   - Put files here, e.g. work-huaqin.jpg, project-book-review.jpg
   - Single image: image: '/images/portfolio/file.jpg'  OR  images: ['/images/portfolio/file.jpg']
   - Multiple images (horizontal strip): images: ['/images/portfolio/a.jpg','/images/portfolio/b.jpg']
   - About section gallery: profile.aboutImages = ['...','...'] in portfolio.ts
   - Missing files auto-hide that slot (no broken icons)

3) Awards (LinkedIn-style honors)
   - Edit linkedInHighlights in src/data/portfolio.ts
   - Optional: image (one) or images (several), same as timeline

4) After adding static files, update portfolio.ts — thumbnails also open in a lightbox when clicked.

---
中文摘要
--------
头像：保存为 public/images/portfolio/profile.jpg，并在 portfolio.ts 的 profile.avatar 填写路径。
履历缩略图：放进本目录，在 portfolio.ts 写 image 或 images；点击缩略图可放大查看。
荣誉区块：编辑 linkedInHighlights（与 LinkedIn 荣誉一致）。
