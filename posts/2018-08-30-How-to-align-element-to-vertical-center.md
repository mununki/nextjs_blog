---
title: Some different ways to align element to vertical center
createdAt: 2018-08-30
filename: 2018-08-30-How-to-align-element-to-vertical-center
category: ["htmlcss"]
keyword: ["vertical", "align"]
---

# Some different ways to align element to vertical center

by Moondaddi on 2018-08-30

---

### Alignment to vertical center against wrapping parent element using CSS transform

<br />

## Why is it special?

Generally, there are some tools and how-to to align element against parent element. But, in this case parent element has flexible width and height with fixed aspect ratio(1:1).

```html
<div class="card">
  <div style="max-width:100%; padding-top:100%;">
    <img
      src="/some/thing.jpg"
      alt="something"
      style="
        position:absolute
        top:50%;
        left:0;
        max-width:100%;
        transform:translateY(-50%);"
    />
  </div>
</div>
```

<br />

## Lesson & Learn

Use Flexbox! 👍
