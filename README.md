## Links

- Github: [https://github.com/muhammadarii/elemes-group-test.git](https://github.com/muhammadarii/elemes-group-test.git)
- Link Heroku: [https://elemes-group-ca48af842ba0.herokuapp.com/](https://elemes-group-ca48af842ba0.herokuapp.com/)

## Penginstalan/menjalankan project

Berikut tata cara dalam penginstalan atau menjalankan project:

1. Clone repository ini dengan cara:

```bash
git clone
```

2. Install dependencies dengan cara:

```bash
npm install
```

3. Jalankan project di mode development dengan cara:

```bash
npm run dev
```

4. Buka [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

## Deploy on Heroku

1. Jalankan perintah build dengan cara:

```bash
npm run build
```

2. Login ke Heroku dengan cara:

```bash
heroku login
```

3. Buat aplikasi baru dengan cara:

```bash
heroku create your-app-name
```

4. Tambahkan Heroku Git Remote dengan cara:

```bash
git remote -v
```

5. Push ke Heroku dengan cara:

```bash
git push heroku main
```

6. Cek hasil Deploy dengan cara:

```bash
heroku open
```
