# shortcut

## codex
- node js
```shell
   sudo apt update
   sudo apt install -y nodejs npm
```
- if not,
```shell
   sudo apt remove -y nodejs npm
   curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   source ~/.bashrc
   nvm install --lts
   nvm use --lts   
```
- Install
```shell
  npm uninstall -g @openai/codex
  npm i -g @openai/codex@latest
  codex --version
```
- Run
```shell
   cd your_work_directory
   codex
   /model
   /init
   your command
```
- Idea
```
out - home(laptop) - github
```

## intellij code 작성  ([ref](https://ifuwanna.tistory.com/241))
- ⭐ctrl+alt+s : setting 설정창
- ⭐ctrl+shift+a : action 창 (split window, compare file 등이 편의)
- ⭐project에서 두 개 폴더 선택, ctrl+d 폴더비교



## 실전
- 빌드 
  - ctrl+shitf+f10
  - shift+F10
  
- 코드작성
  - fast write
    - ⭐ctrl+i : 자동코드 (implementation), ⭐ctrl+shift+i 잠깐 클래스 훝어보기  
    - ⭐ctrl+o : override  
    - ⭐⭐alt+ins : 생성자  
    - ⭐ctrl+alt+ins : 클래스만들기 ( alt+1, alt+ins )    
  - abbreviations ([using vim](https://stackoverflow.com/questions/44718146/vim-have-incorrect-cursor))   
    - ⭐psvm + tab  
    - ⭐sout + tab  
    - ⭐soutpm + tab  
    - ⭐soutpa + tab  
    - f + tab : fun( 초성 후에 자동생성, 예시 p + enter -> public )

- 코드이동
  - jump 
    - ⭐⭐ctrl+alt+left/right 코드 히스토리 이동
    - ⭐⭐ctrl+b : go to (symbol)declaration or usages (ctrl+alt+b: implmentation)   
    - ⭐ctrl+\[/\] : 블록이동 (method 내 클래스 처음위치로 이동시 편리 )

- 창이동
  - jump 
    - alt+1 프로젝트 창 이동
    - est 코드창

- 편집
  - 코드편집
    - ⭐ctrl+shift+up/down : 편집이동, 라인, 함수블록, 
    - ⭐⭐선택블록 위아래 이동 (강제이동 alt+shift+up/down, 😵ctrl+alt+shift+left/right: element swap)  
    - ctrl + d/x              : 라인 복사 /삭제   
    - ctrl + w                : 확장하면서 선택 (ctrl+shift+w 이전선택영역)  
  - 코드삽입
    - ⭐shift+enter           : 라인 손상없이 엔터 (ctrl+alt+enter 위라인 삽입, ctrl+shift+enter: 코드고치면서 다음라인 삽입)  
    - ⭐ctrl+shift + enter     : 함수작성 후 { } 삽입 엔터 ★   
  - 코드보조
    - ⭐shift+/               : 주석 처리/해제  
    - ⭐ctrl + alt + l : 코드정렬   
    - ⭐ctrl+alt+shift+T : refactor   
    - ctrl+alt + t         : try - catch ( surround with )  

- 검색,switching
  - esc : default
    - ctrl + f :  f시리즈, ctrl+e: explorer, ctrl+n: class, ⭐ctrl+f12: method find  
    - alt+f7   : interface가 사용되는 위치 awsome fine
  - f12 시리즈
    - ctrl+shift+f12 : editmode
    - alt+f12 : command line
    - f12 : latest active window

- 편의
  - 😵
    - ⭐⭐alt + 'x'부분 클릭 : 현재탭을 제외한 나머지 탭 close   
    - ctrl++ : 코드 펼치기 (전체코드 펼치기 ctrl+shif++  , 닫기는 - )
    - ctrl + shift + p : 타입확인  
    - ctrl + shift + m , ctrl + shift + m : 코드 블록확인  
    - 😵ctrl + shift + delete : unwrap   
    - 😵ctrl+shift+v: ctrl+v from history  
    - ctrl + q : 도움말 ( 설명을 읽을 수 있어야 한다 , T R )  
    - ⭐ctrl + \` : 테마변경

- custom
  - ⭐
    - split window : ctrl+alt+shift+|/_ (close ctrl+f4)
    - alt+left/right: next/previous split 로 할당 ( 기존할당수동삭제 alt+left/right : (세팅창ctrl+alt+s에서)editor selected tab에서 삭제 )

- good scenario
  - ⭐
    - at method: ctrl+\[ → ctrl+b → ctrl+f12 → ctrl+alt+leftx3 

[surround({"'](https://www.jetbrains.com/idea/guide/tips/surround-with-brackets-quotes/)    
 
