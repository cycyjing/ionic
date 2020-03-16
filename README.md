## install ionic and cordova

npm i -g ionic cordova 

## create ionic project

ionic start [name] 

blank空白/tabs底部切换标签/sidemenu带侧边栏和目录

## run serve

ionic serve

ionic serve -p [port]:	change to other port

## create new component

ionic g page button：create component file， which under app

## create new tab

## jump to another page

## self-design module and use ionic build-in module

## module

ionic4.x中页面是模块组成的，多个模块没法公用一个组件，这时候就需要把组件封装成模块，让模块引入模块

## UI Components

### I. ion-list 

ion-item-divider: group items 分组 [lines, routerLink]

ion-item-sliding: sliding lists 滑动列表

#### ion-item

ion-icon

ion-avatar: like WeChat user avatar

ion-thumbnail: like new with images

### II. form

ion-input：

ion-toggle：开关

ion-radio-group/ion-radio：use them together，two-way data binding should give *ion-radio-group*

ion-checkbox：two-way data binding give each item/object

ion-select

ion-textarea

### III. Slides

 swiper plugin to search api

ion-slides：[options]

#### methods

获取slide对象

1. 获取DOM节点的方法，定义名称#slide
2. 引入ViewChild获取slide对象
3. 触发事件调用slide方法

startAutoplay

slidePrev()

slideNext()

### IV. Searchbar

ion-searchbar: [animated动画, type指定输入类型, color, debounce防抖]

### V. Segment

ion-segment

### VI. Data

ion-datetime：[pickerOptions]

#### silly datetime plugin

npm i silly-datetime --save(package.json dependencies)/--D(dev)

import sd from 'silly-datetime'

in the constructor, this.nowDay=sd.format(new Date(),'YYYY-MM-DD')

#### Customize options 自定义日期组件的options

[pickerOptions]

### VII. ion-menu 侧边栏

[side,menuId,type(overlay/reveal/push),swipe-gesture(true/false)]

ion-menu-toggle: menu auto disappear 点击玩菜单点击完消逝

#### Customize menu 自定义按钮开启侧边栏

1. 给ion-menu定义menuIdsx

   ```html
   <ion-menu side='start' menuId='first'><ion-menu>
   ```

2. 控制菜单的页面中引入下面代码

   ```ts
   import {MenuController} from '@ionic/angular'
   ```

3. 初始化constructor

   ```ts
   constructor(private menu: MenuController){}
   ```

4. 对应方法中通过js控制侧边栏

   ```ts
   doOpenMenu(){
       this.menu.open('first')
   }
   ```

#### [routerLink, routerDirection='root']

## Theming 主题

```scss
.ion-color-aaaa{
	--ion-color-base: #4f2f64;
    --ion-color-base-rgb: 79, 47, 100;
    // 对比颜色
    --ion-color-contrast: #ffffff;
    --ion-color-contrast-rgb: 255, 255, 255;
    --ion-color-shade: #5b3d7c;
    --ion-color-tint: #544669;
}
```

## 修改内置组件默认样式

in each component private css file，or

variables.scss in theme

## ActionSheet 

## Toast 

[message, duration, color, position, cssClass]

> cssClass write in global

## Loading

[message, duration, color, position, cssClass]

similar with Toast

## Alert

[message, header, buttons]

## Gestures 手势相关事件

includes tap, press, pan, swipe, rotate, pinch events and so on. 

because ionic 4 has not API about it, so need to 

```ts
npm i hammerjs

import 'hammerjs'	// in src/main.ts
```

## Modal

NavParams

modal page return data to original page,

1. listen the destroyed modal event
2. pass the data

## ion-infinite-scroll 上拉分页加载更多

基本运用：

```ts
export class Tab3Page {
  list = [];

  constructor() {
    for (let i = 1; i <= 20; i++) {
      this.list.push(`item ${i}`);
    }
  }
  loadData(e) {
    setTimeout(() => {
      for (let i = 1; i < 9; i++) {
        this.list.push(`from serve---item ${i}`);
      }
      // IMPORTANT: if dont have this, cannot infinite to load more data
      e.target.complete();
    }, 1000);
  }
}
```

使用@ViewChild和Event/点击按钮停止

> SEE demo10 tab4

## HT TP 远程数据

Angular 5.x之后get post和服务器交互使用的是HttpClientModule 

1. {HttpClientModule} from ‘@angular/common/http’ in app.module.ts
2. when you use，import {HttpClient} from ‘@angular/common/http’ to the files，and claim in constructor

> SEE demo10 tab5

## ion-refresher 下拉更新

similar with ion-infinite-scroll

> SEE demo10 tab1

## router 路由

### 1.普通路由跳转

[routeLink]

### 2.路由跳转传值

get 传值，[queryParams]="{aid:'123'}"

import {ActivatedRoute} from ‘@angular/router’

### 3.NavController返回上一页 

import {NavController} from ‘@ionic/angular’

.back()

.navigateBack('/tabs/tab3'): 超过两级用这个好

### 3.NavController返回根

.navigateRoot('/tabs/tab3')