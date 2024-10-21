var posts=["2021/03/28/p001/","2021/04/08/p002/","2021/04/22/p003/","2021/05/19/p004/","2021/06/01/p005/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };