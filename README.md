# LWC Panel

This lightning web component is created to display content inside SLDS panel. 

https://www.lightningdesignsystem.com/components/panels/

![Alt text](/preview.gif?raw=true "Title")

## Playground Live Demo

https://developer.salesforce.com/docs/component-library/tools/playground/O7Jrx2mVJ/21/edit

## Installation

#### Unlocked Package
(replace the domain)

`https://YOUR_DOMAIN.lightning.force.com/packaging/installPackage.apexp?p0=04t3h000000id1g`

## Usage

#### Basic
```html
<c-panel>
    <!-- Panel Content Goes Here-->
</c-panel>
``` 

#### Hidden Header
```html
    <c-panel hide-header>
        <!-- Panel Content Goes Here-->
    </c-panel>
``` 

#### Custom Header
```html
<c-panel custom-header>
    <span slot="header">
        <!-- Custom Header Goes Here -->
    </span>
    <span slot="content">
        <!-- Panel Content Goes Here -->
    </span>
</c-panel>
``` 

#### Custom Size
```html
<c-panel size="small">
    <!-- Panel Content Goes Here -->
</c-panel>
```

#### Handling Modal Events
```html
<c-panel onclose={onPanelClose}>
    <!-- Panel Content Goes Here -->
</c-panel>
```

#### Full Height
```html
<c-panel full-height>
    <!-- Panel Content Goes Here -->
</c-panel>
```
## Reference
#### @api

```
String title
String size = small, medium, large, x-large, full

Boolean hide-header
Boolean custom-header

Event onclose

```
