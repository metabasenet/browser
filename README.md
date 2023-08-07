# MNT-BROWSER

[browser metabasenet](https://www.metabasenet.site/)
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### nginx setup
``` bash
sduo apt install nginx
sudo cp mnt.conf /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/mnt.conf /etc/nginx/sites-enabled/mnt
sudo ln -s ${proj dir} /var/www/mnt
sudo service nginx restart

```
[mnt twitter](https://twitter.com/MyersB55406)