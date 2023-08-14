Git
---
Git은 소스코드의 버전관리를 도와주는 편리한 도구입니다. Github는 git으로 작성된 이력을 사람들과 공유하거나 협업할 수 있도록 Web 상에서 저장소를 제공하는 서비스입니다. 

:link: Download Link 
https://git-scm.com/download

---
### 깃을 관리하기 위해 초기화

```bash
git init
```
---
### 파일을 Tracking(추적)하겠다는 명령
```bash
git add -A // 모든 파일
git add index.html // 특정파일
```
---
### 커밋 (작업 메세지를 남기는 과정)
```bash
git commit -m "어떤 작업을 했는지 간단하게 서술"
```
---
## 업로드하기 위해서 깃 저장소(Repository)를 만들어야합니다. 
- github.com에서 create new repository
- 깃 저장소 이름을 카피해옵니다.
- (예시) https://github.com/baehyunki/repo.git
---
### github 저장소에 올리는 방법
```bash
git remote add origin https://github.com/baehyunki/repo
```
---
### 지정된 후에 git 저장소 이름 알아보는 방법
```bash
git remote get-url origin
```
---
### 이미 지정된 git 저장소의 이름을 바꾸는 방법
```bash
git remote set-url origin https://github.com/baehyunki/newName
```
---
### git 저장소에 올리는 명령
- 초기에만 아래 명령으로 업로드 합니다.
```bash
git push -u origin master
```
- 이후에는 아래 명령어로 업로드합니다.
```bash
git push
```
---
### 에러가 발생해서 강제로 올려야할 경우
이 경우엔 github에 강제로 덮어버린다는 점을 유의.
```bash
git push -u origin master -f // -f는 force(강제) 옵션
```
---
### 저장소에서 가져오는 방법
- 아래의 경우 repo라는 리포지터리 이름대로 저장소가 로컬(자신의 컴퓨터)에 복사됩니다.
```bash
git clone https://github.com/baehyunki/repo.git
```
- 특정 폴더에 저장할 경우
```bash
git clone https://github.com/baehyunki/repo.git folderName
```
