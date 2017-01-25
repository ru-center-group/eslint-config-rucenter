

## Установка

убеждаемся, что установлены зависимости, которые перечислены в peerDependencies
```
npm i -D eslint eslint-plugin-import eslint-plugin-react
```

устанавливаем сам пакет с конфигом
```
npm i -D eslint-config-rucenter
```

в `.eslintrc` указываем
```json
{
  "extends": "rucenter"
}
```
