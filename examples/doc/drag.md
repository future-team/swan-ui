# Drag
## Import
```javascript
import Vue from 'vue'
import { Drag } from 'swan-ui'

Vue.component(Drag.name, Drag)
```

## Usage
```xml
<sw-drag @drag="handleDrag" @drop="handleDrop">
     <div class="drag-demo">拖我出去</div>
</sw-drag>
```

```javascript
handleDrag(position){
    let prePosition = position.start
    let nowPosition = position.move

    this.distanceX = this.preDistanceX + nowPosition.x - prePosition.x
    this.distanceY = this.preDistanceY + nowPosition.y - prePosition.y

    this.setBoxPosition(this.distanceX,this.distanceY)
},
handleDrop(){
    this.preDistanceX = this.distanceX
    this.preDistanceY = this.distanceY
}
```

## Attributes

无

## Events

|名称|回调参数|说明
|:--|:--|:--|
|drag|(position,evt)|拖动时时触发<br/>position: {start:{x:12,y:312},move:{x:12,y:312}}
|drop|(position,evt)|松开时触发<br/>position: {start:{x:12,y:312},end:{x:12,y:312}}


## Slot

|名称|说明
|:--|:--|
|-|被拖拽目标