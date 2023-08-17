### HTML

## Flex (플렉스)

특징

- 주축(X 축)을 기반으로 자식 요소들을 배치한다. (가로로 나열한다.)
- flex-direction은 축의 방향을 결정하는 속성이다

### HTML

```html
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>
```

### CSS

flex에서 주축(가로) 방향으로 정렬하는 방법

```CSS
.parent{
    justify-content: flex-start; // 기본 값, 시작(좌측)부분으로 정렬
    justify-content: center; // 가운데 정렬
    justify-content: flex-end; // 끝(우측)으로 정렬
}
```

flex의 진행 방향을 바꾸는 방법

```css
.parent {
  display: flex;
  flex-direction: row; // 기본값. 값을 주지 않아도 row가 적용되어있다.
  flex-direction: column; // 주축을 Y방향(세로)로 변경
}
```

2. flex
