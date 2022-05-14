# 接口设计

#### poet类

```json
{
    content: "风" | "雅" | "颂"，
    style: "战争诗" | ..,
    id:3
}
```

#### 相关接口

```json
{
    url:api/getPoetsByStyle,
    return:poet[]
} 
```

```json
{
    url:api/getPoetsByContent
}
```

```json
{
    url:api/getPoetsById
}
```

