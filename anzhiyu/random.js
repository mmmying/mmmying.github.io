var posts=["2021/06/01/p001/","2021/08/08/p002/","2021/09/22/p003/","2021/10/19/p004/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };