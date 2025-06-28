# Инструкция по написанию OpenAPI спецификации (Swagger)

## Общие сведения

OpenAPI Specification (OAS, ранее Swagger) — это стандарт для описания RESTful API в машиночитаемом формате (YAML или JSON). Спецификация служит основой для автоматической генерации документации, SDK, тестов и клиентских библиотек.

---

## 1. Структура OpenAPI спецификации

Минимальная структура файла:

```yaml
openapi: 3.0.0
info:
  title: Название API
  version: '1.0.0'
servers:
  - url: https://api.example.com/v1
paths: {}
```

---

## 2. Обязательные разделы

### 2.1. openapi
- Версия спецификации OpenAPI (например, `3.0.0` или `3.1.0`).

### 2.2. info
- **title**: Название API.
- **version**: Версия API.
- **description**: (рекомендуется) Описание API, его назначения и особенностей.
- **termsOfService**: (опционально) Ссылка на условия использования.
- **contact**: (опционально) Контактная информация.
- **license**: (опционально) Информация о лицензии.

### 2.3. servers
- Список серверов, на которых доступен API.
- Каждый сервер описывается объектом с полем `url` и (опционально) `description`.

### 2.4. paths
- Основной раздел, описывающий все эндпоинты API.
- Для каждого пути (`/users`, `/orders/{id}` и т.д.) указываются поддерживаемые HTTP-методы (get, post, put, delete и др.).

---

## 3. Описание эндпоинтов (paths)

### Пример:
```yaml
paths:
  /users:
    get:
      summary: Получить список пользователей
      description: Возвращает всех пользователей системы
      tags:
        - Users
      parameters:
        - in: query
          name: limit
          schema:
            type: integer
          description: Максимальное количество пользователей в ответе
      responses:
        '200':
          description: Успешный ответ
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'
```

### Ключевые элементы метода:
- **summary**: Краткое описание операции.
- **description**: Подробное описание.
- **tags**: Группировка операций по категориям.
- **parameters**: Описание параметров (query, path, header, cookie).
- **requestBody**: (для POST/PUT) Описание тела запроса.
- **responses**: Описания возможных ответов (код, описание, схема данных).
- **security**: (опционально) Требования к авторизации.
- **deprecated**: (опционально) Признак устаревшей операции.

---

## 4. Описание параметров (parameters)

Каждый параметр должен содержать:
- **name**: Имя параметра.
- **in**: Где находится параметр (`query`, `path`, `header`, `cookie`).
- **required**: Обязателен ли параметр.
- **schema**: Тип данных (type, format, enum и др.).
- **description**: Описание назначения параметра.

### Пример:
```yaml
parameters:
  - name: id
    in: path
    required: true
    schema:
      type: string
    description: Уникальный идентификатор пользователя
```

---

## 5. Описание тела запроса (requestBody)

Используется для методов, принимающих данные (POST, PUT, PATCH).

### Пример:
```yaml
requestBody:
  required: true
  content:
    application/json:
      schema:
        $ref: '#/components/schemas/UserCreateRequest'
```

- **required**: Обязательность тела запроса.
- **content**: Описание поддерживаемых форматов (обычно `application/json`).
- **schema**: Схема данных (inline или ссылка на компонент).

---

## 6. Описание ответов (responses)

Для каждого кода ответа (200, 201, 400, 404, 500 и др.) указывается:
- **description**: Описание ситуации.
- **content**: Формат и схема возвращаемых данных.

### Пример:
```yaml
responses:
  '201':
    description: Пользователь создан
    content:
      application/json:
        schema:
          $ref: '#/components/schemas/User'
  '400':
    description: Ошибка валидации
    content:
      application/json:
        schema:
          $ref: '#/components/schemas/ErrorResponse'
```

---

## 7. Компоненты (components)

Раздел для переиспользуемых схем, параметров, ответов и security-схем.

### Пример:
```yaml
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: string
        name:
          type: string
        email:
          type: string
          format: email
    ErrorResponse:
      type: object
      properties:
        code:
          type: integer
        message:
          type: string
  parameters:
    limitParam:
      name: limit
      in: query
      schema:
        type: integer
      description: Максимальное количество записей
```

---

## 8. Security (авторизация и аутентификация)

OpenAPI поддерживает различные схемы безопасности:
- **apiKey** (в header, query, cookie)
- **http** (basic, bearer)
- **oauth2**
- **openIdConnect**

### Пример:
```yaml
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
security:
  - bearerAuth: []
```

---

## 9. Документация и примеры

- Используйте **description** для пояснения всех сущностей, параметров и схем.
- Добавляйте **examples** для запросов и ответов:

```yaml
requestBody:
  content:
    application/json:
      schema:
        $ref: '#/components/schemas/UserCreateRequest'
      examples:
        valid:
          summary: Пример корректного запроса
          value:
            name: "Иван Иванов"
            email: "ivan@example.com"
```

---

## 10. Рекомендации по стилю и качеству

- Используйте английский язык для названий и схем (если не требуется иное).
- Следите за единообразием именования путей, параметров и схем.
- Все пути должны начинаться с `/` и быть в едином стиле (snake_case или kebab-case).
- Для вложенных объектов используйте ссылки на компоненты (`$ref`).
- Не дублируйте схемы — выносите их в `components`.
- Описывайте все возможные коды ответов, включая ошибки.
- Для массивов используйте `type: array` и `items`.
- Для перечислений используйте `enum`.
- Для дат и времени используйте формат `date-time`.
- Документируйте ограничения (minLength, maxLength, minimum, maximum и др.).
- Добавляйте примеры для сложных структур.
- Проверяйте спецификацию валидатором (например, https://editor.swagger.io/).

---

## 11. Полезные ресурсы

- [Официальная документация OpenAPI](https://swagger.io/specification/)
- [Swagger Editor](https://editor.swagger.io/)
- [Swagger Codegen](https://github.com/swagger-api/swagger-codegen)
- [OpenAPI Generator](https://openapi-generator.tech/)

---
# 12. Полноценный пример


```yaml
openapi: 3.0.3
info:
  title: Swagger  - OpenAPI 3.0
  description: примеры методов
  version: 1.0.0
servers:
  - url: https://soundworld/api/v1
  
tags:
  - name: playlist
    description: группа методов для работы с плей-листами
    
paths:
  /playlist_tracks:
    post:
      tags:
      - playlist
      summary: Добавление трека в плей-листы
      description: Добавление трека в плей-листы выбранные пользователем
      requestBody:
        description: Параметры метода для добавления трека в плей-листы
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/playlist_traks_request'
      responses:
        '200':
         description: Возвращает массив объектов, в объекте playlist_id и код ответа, по состоянию добавления трека в данный плей-лист
         content:
          application/json:
            schema:
              $ref: '#/components/schemas/playlist_traks_response'
              
  /playlists/{user_id}:
    get:
      tags:
      - playlist
      summary: Получить список плей-листов
      description: Получить список плей-листов по уникальному идентификатору пользователя
      parameters:
        - name: user_id
          in: path
          description: уникальномый идентификатор пользователя
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Возвращает массив объектов, где в один объект входит playlist_id и playlist_title соответсвенно
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/get_playlists_response'
        
            
      
              
components:
  schemas:
    playlist_traks_request:
      type: object
      required:
      - user_id
      - track_id
      - arr_playlist_id
      properties:
        user_id:
          type: integer
          example: 1
          description: уникальной идентификатор пользователя
        track_id:
          type: integer
          example: 3
          description: уникальной идентификатор трека
        arr_playlist_id:
          type: array
          items:
            type: integer
            example: 3
          description: массив уникальных идентификаторов плей-листа
            
            
    playlist_traks_response:
      type: object
      required:
      - add_playlist_obj_arr
      - playlist_id
      - code
      properties:
        add_playlist_obj_arr:
          type: array
          items:
            required:
            - playlist_id
            - code
            type: object
            properties:
              playlist_id:
                type: integer
                example: 3
                description:  уникальный идентификатор плей-листа
              code:
                type: integer
                description: код ответа добавления трека в один плей-лист
                example: 200
               
    
    get_playlists_response:
      type: object
      required:
      - arr_playlist_obj
      - code
      properties:
        arr_playlist_obj:
          type: array
          items:
            required:
            - playlist_id
            - playlist_title
            type: object
            properties:
              playlist_id:
                type: integer
                example: 1
                description:  уникальный идентификатор плей-листа
              playlist_title:
                type: string
                example: favorite
                description:  навзвание плей-листа
        code:
          type: integer
          example: 200
          description: код ответа
```
**Следуйте этой инструкции для создания полной, валидной и удобочитаемой OpenAPI спецификации для вашего REST API.** 