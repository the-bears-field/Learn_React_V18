# React v18の学習記録

Udemyで購入した講座の学習記録をするためのリポリトジです。

## 使用教材

- [今後のフロントエンド開発で必須知識となるReact v18の機能を丁寧に理解する](https://www.udemy.com/course/react_v18/)

## 使用技術
- React version 18.2.0
- TypeScript version 4.9.5

## 必要要件

- Docker
- Docker Compose

## インストール
必要要件に記載している環境を整えた上で、ターミナルで下記コマンドを順番に実行して下さい。

```
git clone https://github.com/the-bears-field/Learn_React_V18.git
```
```
cd Learn_React_V18
```
```
docker-compose build --no-cache
```
```
docker-compose run --rm app yarn
```
```
docker-compose up -d
```
以上の過程を経て[http://localhost:8080](http://localhost:8080)を開くと、ブラウザで閲覧可能です。
