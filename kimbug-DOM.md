## DOM (Document Object Model)

문자열인 HTML을 Javascript가 이해할 수 있는 형태(Node Object Type)로 바꿔서

우리가 추가적인 작업(접근, 변경, 추가 등)을 할 수 있도록 기능을 제공하는 녀석이다.





## Properties and Methods for Working with Nodes

Node properties	:	 `firstChild`, `parentNode` ...

Node methods	:	`appendChild()`, `removeChild()` ...

Document methodes	:	`document.createElement()` ...

HTML*Element properties	:	`innerHTML`, `innerText` ...







## Document Nodes



**HTML Document Properties ans Methods**

HTML 문서 전반에 대한 정보 (DOCTYPE, body, head, title 등)

`document.querySelector()`





## Element Nodes



**Element** = HTML tag



**HTML*Element Object Properties and Methods**



`.classList.toggle()`, `.classList.add()`, `.classList.remove()`







## DOM Events

- Event가 무엇인지
- Event를 사용하기 위해서 필요한 것들 (Handler 등등)
- Event flow





resize 이벤트

약관 form

![image-20210126140332899](../../AppData/Roaming/Typora/typora-user-images/image-20210126140332899.png)



target, current target 구분

위 사진에서 body의 click eventhandler의 경우 current target은 body고 target은 div



그리고 위 사진에서 div, body, html 모두 event handler가 있을 경우 어떤 이벤트부터 실행시켜야 하는지가 중요하기 때문에 **event flow**가 있고 중요.



![image-20210126141159411](../../AppData/Roaming/Typora/typora-user-images/image-20210126141159411.png)

event flow

: Capture phase(=propagate up) -> Target phase -> Bubble phase(=propagate down)



위 사진에서 html -> body -> div -> body -> html

두번씩 실행되는 불필요한 이벤트가 존재

그래서 브라우저에서는 Capture or Bubble 단계 둘 중에 어디서 실행시킬지 설정 가능

default는 Bubble (div -> body -> html 순으로 이벤트 실행)

![image-20210126141842560](../../AppData/Roaming/Typora/typora-user-images/image-20210126141842560.png)

 e.stopPropagation()

e.preventDefault()



