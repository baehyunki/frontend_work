## Flex (플렉스)

특징

- 주축(X 축)을 기반으로 자식 요소들을 배치한다. (가로로 나열한다.)
- flex-direction은 축의 방향을 결정하는 속성이다
- justify-content는 주축(가로,X축)방향으로 정렬하는 속성이다.
- align-items는 교차축(세로,Y축)방향으로 정렬하는 속성이다.

### HTML

예시) parent 클래스 밑에 2개의 child 요소가 있다.

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

flex에서 교차축(세로) 방향으로 정렬하는 방법

```css
.parent {
  align-items: stretch; // 기본값, flex 부모 높이 만큼 가질 수 있는 최대한의 높이를 가진다.
  align-items: flex-start; // 교차축의 시작방향(상단)으로 정렬된다.
  align-items: center; // 교차축의 중앙으로 정렬
  align-items: flex-end; // 교차축의 끝(하단)으로 정렬된다.
}
```

flex의 진행 방향(주축, 교차축)을 바꾸는 방법

```css
.parent {
  display: flex;
  flex-direction: row; // 기본값. 값을 주지 않아도 row가 적용되어있다.
  flex-direction: column; // 주축을 Y방향(세로)로 변경
}
```
