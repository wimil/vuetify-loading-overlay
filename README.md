# Vuetify loading overlay
This package serves to display a load on the whole page, useful when you expect an ajax response from an API. It only works with the vuetify framework, since it uses components of it.

## Install

```bash
npm -i vuetify-loading-overlay
yarn add vuetify-loading-overlay
```

## Usage
### Vue
```javascript
import {LoadingPlugin} from "vuetify-loading-overlay"
Vue.use(LoadingPlugin, {
    //props
    spinnerProps: {},
    overlayProps: {},
});
```

### Nuxt
for nuxt you have to create a plugin and add it to your nuxtconfig
```javascript
import Loading from "vuetify-loading-overlay"
export default ({ app }, inject) => {
  inject(
    "vloading",
    Loading({
      spinnerProps: {},
      overlayProps: {},
    })
  );
};
```

## Example
```vue
<template>
    <form @submit.prevent="submit">
        <input type="text" name="email" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            submit() {
                this.$vloading.show();
                // simulate AJAX
                setTimeout(() => {
                  this.$vloading.hide()
                },5000)                 
            },
            onCancel() {
              console.log('User cancelled the loader.')
            }                      
        }
    }
</script>
```
the use is simple, you just have to call the api and its methods
**this.$vloading.show()**
**this.$vloading.hide()**


## Props

#### snipperProps
```javascript
{
    color: "primary"
}
```
You can check the properties of the spinner in its [official documentation](https://vuetifyjs.com/en/components/progress-circular/)

#### overlayProps
```javascript
{
    color: "red"
}
```
You can check the properties of the overlay in its [official documentation](https://vuetifyjs.com/en/components/overlays/)


## Author
**rldev25**

## Licence
MIT
