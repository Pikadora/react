# Запуск приложения
Ввести в консоли:
```
npm run start:dev
```

# Компиляция bundle
1. Перед компиляцией bundle необходимо произвести замену url картинок в css-файлах (заменить "/static/images/<название_картинки>.<формат_картинки>" на "/_layouts/15/cbr/ArchProjects/static/images/<название_картинки>.<формат_картинки>").
2. Ввести в консоли:
```
npm run build:prod
```
3. Скопировать содержимое директории проекта /src/main/resources/static в папку на сервере /Project_Sources/Layouts/Cbr/ArchProjects
4. Скопировать содержимое директории проекта /assets/static в папку на сервере /Project_Sources/Layouts/Cbr/ArchProjects/static
5. Перезапустить солюшен

